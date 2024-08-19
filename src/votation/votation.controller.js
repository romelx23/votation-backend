const Item = require("../item/item.model");
const Votation = require("./votation.model");

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
    console.log({uid: _id.toString()});
    
    const { limit = 5, offset = 0, search = "" } = req.query;

     const query = {
       status: true,
       user: _id.toString(), // Usar el ObjectId convertido
     };

    //  const test= await  Votation.find({ user: "66ba806d4f8c1e53f6043c5f" });
    //   console.log({test});

    if(!_id) return res.status(400).json({
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

      console.log({total, votations});
  
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

const createVotation = async (req, res) => {
  const { items, ...rest } = req.body;

  if (!items) return res.status(400).json({ msg: "No hay items" });
  if (!items.length < 0)
    return res.status(400).json({ msg: "No hay elementos en el arreglo" });

  const votation = new Votation({
    ...rest,
  });

  try {
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
    res.status(200).json({
      msg: "Votación creada",
      votation: newVotation,
      items: votationItems,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Error al crear la votación",
    });
  }
};

const updateVotation = async (req, res) => {
  const { id } = req.params;
  const { items, ...rest } = req.body.votation;

  try {
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
    console.log({error});
    res.status(500).json({
      msg: "Error al actualizar la visibilidad",
    });
  }
};

module.exports = {
  getVotation,
  getVotations,
  createVotation,
  getVotationsByUser,
  updateVotation,
  updateVotationVisibility
};
