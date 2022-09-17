const Item = require("../item/item.model");
const Votation = require("../votation/votation.model");

const getVotations = async () => {
  const votations = await Votation.find();
  return {
    total: votations.length,
    votations,
  };
};

const getVotation = async (payload) => {
  const id = payload;
  const votation = await Votation.findById(id);
  const items = await Item.find({ votation: id });

  return {
    votation,
    items,
  };
};

const createVotation = async (payload) => {
  const { items, ...rest } = payload;

  if (!items) return { msg: "No hay items" };
  if (!items.length < 0) return { msg: "No hay elementos en el arreglo" };

  try {
    const votation = new Votation(rest);
    const votationSaved = await votation.save();
    const votationId = votationSaved._id;
    const itemsSaved = await Promise.all(
      items.map(async (item) => {
        const newItem = new Item(item);
        newItem.votation = votationId;
        await newItem.save();
        return newItem;
      })
    );
    return {
      msg: "Votación guardada",
      votation: votationSaved,
      items: itemsSaved,
    };
  } catch (error) {
    return {
      msg: "Error al guardar la votación",
    };
  }
};

const postItems = async (payload) => {
  const { id, items } = payload;
  const votation = await Promise.all(
    items.map(async (item) => {
      const newItem = new Item(item);
      newItem.votation = id;
      await newItem.save();
      return newItem;
    })
  );

  try {
    await votation.save();
    return {
      msg: "Item guardado",
      votation,
    };
  } catch (error) {
    return {
      msg: "Error al guardar el item",
    };
  }
};

const incrementVote = async (payload) => {
  const { id } = payload;
  const item = await Item.findById(id);
  item.votes = item.votes + 1;
  await item.save();
  return {
    msg: "Voto incrementado",
    item,
  };
};

const incrementVotes = async (payload) => {
  const items = payload;
  const itemsUpdated = await Promise.all(
    items.map(async (item) => {
      const itemFound = await Item.findById(item);
      itemFound.votes = itemFound.votes + 1;
      await itemFound.save();
      return itemFound;
    })
  );
  return {
    msg: "Votos incrementados",
    items: itemsUpdated,
  };
};

module.exports = {
  getVotations,
  createVotation,
  postItems,
  incrementVote,
  incrementVotes,
  getVotation,
};
