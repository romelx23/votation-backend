const { default: mongoose } = require("mongoose");
const Item = require("../item/item.model");
const User = require("../user/user.model");
const Votation = require("./votation.model");
const { subMonths, format } = require("date-fns");
// const cron =require("node-cron");

const getVotation = async (req, res) => {
  const { id } = req.params;
  const votation = await Votation.findById(id);
  const items = await Item.find({ votation: id });

  return res.status(200).json({
    votation,
    items,
  });
};

const getVotations = async (req, res) => {
  // filtrar solo los publicos
  try {

    const { limit = 5, offset = 0, search = "" } = req.query;

    const query = {
      status: true,
      visibility: true
    };

    if (search && search !== "null" && search !== "undefined") {
      console.log(search);
      query.title = { $regex: search, $options: "i" };
    }

    const [total, votations] = await Promise.all([
      Votation.countDocuments(query),
      Votation.find(query)
        .skip(Number(offset))
        .limit(Number(limit))
        .sort({ createdAt: -1 })
    ]);

    return res.status(200).json({
      total,
      votations
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Hable con el administrador"
    });
  }
};

const getVotationsByUser = async (req, res) => {

  try {
    const { _id } = req.user;
    // console.log(req.user);
    console.log({ uid: _id.toString() });

    const { limit = 5, offset = 0, search = "" } = req.query;

    const query = {
      status: true,
      user: _id.toString(), // Usar el ObjectId convertido
    };

    //  const test= await  Votation.find({ user: "66ba806d4f8c1e53f6043c5f" });
    //   console.log({test});

    if (!_id) return res.status(400).json({
      ok: false,
      msg: "No se encontro el usuario"
    });

    if (search && search !== "null" && search !== "undefined") {
      console.log(search);
      query.title = { $regex: search, $options: "i" };
    }

    const [total, votations] = await Promise.all([
      Votation.countDocuments(query),
      Votation.find(query)
        .skip(Number(offset))
        .limit(Number(limit))
        .sort({ createdAt: -1 })
    ]);

    console.log({ total, votations });

    return res.status(200).json({
      total,
      votations
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Hable con el administrador"
    });
  }
};

const getInfoUserDashboard = async (req, res) => {
  // total de visitados por votación
  // total de votos por votación
  // total de enviados por votación
  // total de votaciones creadas

  // total de votaciones por mes

  try {
    const userId = req.user._id; 
    const currentYear = new Date().getFullYear(); 

    // 1. Total de visitados por votación (esto depende de cómo hayas implementado el seguimiento de visitas)
    // const visitadosPorVotacion = await Votation.aggregate([
    //   { $match: { user: mongoose.Types.ObjectId(userId) } },
    //   {
    //     $group: {
    //       _id: "$uid",
    //       totalVisitados: { $sum: "$visitCount" } // Asume que tienes un campo 'visitCount'
    //     }
    //   }
    // ]);

    // 2. Total de votos por votación
    const votesByVotation = await Item.aggregate([
      {
        $lookup: {
          from: "votations", // Colección con la que se relaciona
          localField: "votation",
          foreignField: "_id",
          as: "votationInfo"
        }
      },
      { $unwind: "$votationInfo" },
      { $match: { "votationInfo.user": mongoose.Types.ObjectId(userId) } },
      { $sort: { "votationInfo.createdAt": -1 } }, // Ordenar por fecha de creación descendente
      // { $limit: 10 }, // Limitar a las últimas 10 votaciones
      {
        $group: {
          _id: "$votation",
          totalVotos: { $sum: "$votes" },
          createdAt: { $first: "$votationInfo.createdAt" }
        }
      },
      {
        $sort: { createdAt: -1 } // Ordenar por fecha de creación de la votación
      }
    ]);

    const countVotosPorVotacion = votesByVotation.map(v => v.totalVotos).reduce((a, b) => a + b, 0);

    // 4. Total de votaciones creadas
    const totalVotationsCreated = await Votation.countDocuments({ user: userId });

    // 5. Total de votaciones por mes
    const votationsByMonth = await Votation.aggregate([
      { $match: { user: mongoose.Types.ObjectId(userId) } },
      {
        $match: {
          $expr: {
            $eq: [{ $year: "$createdAt" }, currentYear] // Filtrar por el año actual
          }
        }
      },
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { "_id.year": -1, "_id.month": -1 } }
    ]);

    return res.json({
      // visitadosPorVotacion,
      votesByVotation,
      countVotosPorVotacion,
      totalVotationsCreated,
      votationsByMonth,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      ok:false,
      msg: "Error al obtener los datos del dashboard",
    });
  }
};

const createVotation = async (req, res) => {

  try {
    const { items, ...rest } = req.body.votation;
    console.log({ rest });

    if (!items) return res.status(400).json({
      ok: false,
      msg: "Nmo hay ites"
    });

    if (!items.length < 0)
      return res.status(400).json({
        ok: false,
        msg: "No hay elementos en el arreglo"
      });

    if (rest.image === "") {
      rest.image = items[0].image;
    }

    const votation = new Votation({
      ...rest,
    });

    const newVotation = await votation.save();
    const votationItems = await Promise.all(
      items.map(async (item) => {
        const newItem = new Item(item);
        newItem.votation = newVotation.id;
        await newItem.save();
        return newItem;
      })
    );
    // const votationItems = await Item.insertMany(items);
    return res.status(200).json({
      ok: true,
      msg: "Votación creada",
      votation: newVotation,
      items: votationItems,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error al crear la votación",
    });
  }
};

const updateVotation = async (req, res) => {
  const { id } = req.params;
  const { items, ...rest } = req.body.votation;

  try {
    // quitar el id del usuario, para evitar que se actualice
    delete rest.user;
    
    // Actualiza los datos generales de la votación
    const votation = await Votation.findByIdAndUpdate(id, rest, { new: true });

    // Obtén los items existentes en la base de datos para la votación actual
    const existingItems = await Item.find({ votation: id });

    // Filtra los items que deben permanecer, actualizar o eliminar
    const itemsToUpdateOrKeep = items.filter(item =>
      existingItems.some(existingItem => existingItem.mal_id === item.mal_id)
    );

    const itemsToCreate = items.filter(item =>
      !existingItems.some(existingItem => existingItem.mal_id === item.mal_id)
    );

    const itemsToDelete = existingItems.filter(existingItem =>
      !items.some(item => item.mal_id === existingItem.mal_id)
    );

    // Elimina los items que ya no están en la nueva lista
    await Promise.all(
      itemsToDelete.map(itemToDelete => Item.findByIdAndDelete(itemToDelete._id))
    );

    // Crea los nuevos items
    const newItems = await Promise.all(
      itemsToCreate.map(item => {
        const newItem = new Item({
          ...item,
          votation: id
        });
        return newItem.save();
      })
    );

    // Devuelve la respuesta con la votación actualizada y los items
    return res.status(200).json({
      msg: "Votación actualizada",
      votation,
      items: [...itemsToUpdateOrKeep, ...newItems],
    });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      msg: "Error al actualizar la votación",
    });
  }
};

const updateVotationVisibility = async (req, res) => {
  const { id } = req.params;
  const { visibility } = req.body;

  try {
    const votation = await Votation.findByIdAndUpdate(id, { visibility }, { new: true });

    return res.status(200).json({
      msg: "Visibilidad actualizada",
      votation,
    });

  }
  catch (error) {
    console.log({ error });
    res.status(500).json({
      msg: "Error al actualizar la visibilidad",
    });
  }
};

const deleteVotation = async (req, res) => {
  const { id } = req.params;

  // solo se puede eliminar si es el que lo creo

  const { _id } = req.user;

  try {
    const user = await User.findById(_id);

    const votation = await Votation.findById(id);

    console.log(votation.user.toString());
    console.log(_id.toString());
    console.log(user.role);

    if (votation.user.toString() !== _id.toString() && user.role !== "ADMIN_ROLE") {
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegios para eliminar esta votación",
      });
    }

    // const { visibility } = req.body;

    // const votation = await Votation.findByIdAndUpdate(id, { visibility
    // }, { new: true });
    const votationDelete = await Votation.findByIdAndDelete(id);
    console.log(votationDelete);

    // delete items

    const items = await Item.find({
      votation:
        id
    });

    await Promise.all(
      items.map(item => Item.findByIdAndDelete(item._id))
    );

    return res.status(200).json({
      ok: true,
      msg: "Visibilidad actualizada",
      votation,
    });
  }
  catch (error) {
    console.log({ error });
    res.status(500).json({
      ok: false,
      msg: "Error al actualizar la visibilidad",
    });
  }
};

// generate anime votation automatically every 3 months
//  get Info jikan api
//  animes by season

// const getAnimesBySeason = async (req, res) => {
const getAnimesBySeason = async (startDate,endDate) => {
  // const { startDate,endDate } = req.query;
  console.log( startDate,endDate);
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime?start_date=${startDate}&end_date=${endDate}&sort=desc&order_by=start_date&status=airing`);
    const animes = response.json();

    // return res.status(200).json({
    //   animes,
    // });
    return animes;
  } catch (error) {
    console.error(error);
    return [];
    // return res.status(500).json({
    //   ok: false,
    //   msg: "Error al obtener los animes de la temporada",
    // });
  }
};

const scheduleAnimeFetch = async (req, res) => {
  const currentDate = new Date();
  try{
    
  // Restar 2 semanas a la fecha actual
  // const startDate = addWeeks(currentDate, -2);
  const startDate = currentDate;

  // Calcular el rango de 3 meses
  const endDate = subMonths(startDate, -3);

  const formattedStartDate = format(startDate, "yyyy-MM-dd");
  const formattedEndDate = format(endDate, "yyyy-MM-dd");

  const animes = await getAnimesBySeason(formattedStartDate, formattedEndDate);
  
  console.log("Animes for the quarter:", animes);
  return res.status(200).json({
    ok: true,
    msg: "Animes de la temporada",
    animes,
  });
  }
  catch(error){
    console.log("Error al obtener los animes de la temporada", error);
      return res.status(500).json({
        ok: false,
        msg: "Error al obtener los animes de la temporada",
      });
  }
};

// Configurar el cron job para que se ejecute cada 3 meses
// cron.schedule("0 0 14 */3 *", () => {
//   console.log("Running scheduled anime fetch");
//   scheduleAnimeFetch();
// });

module.exports = {
  getVotation,
  getVotations,
  createVotation,
  getVotationsByUser,
  updateVotation,
  updateVotationVisibility,
  deleteVotation,
  getInfoUserDashboard,
  getAnimesBySeason,
  scheduleAnimeFetch
};
