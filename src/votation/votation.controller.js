const Item = require("../item/item.model");
const Votation = require("./votation.model");

const getVotation = async (req, res) => {
  const { id } = req.params;
  const votation = await Votation.findById(id);
  const items = await Item.find({ votation: id });

  res.status(200).json({
    votation,
    items,
  });
};

const getVotations = async (req, res) => {
  const votations = await Votation.find();
  res.status(200).json({
    total: votations.length,
    votations,
  });
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

module.exports = {
  getVotation,
  getVotations,
  createVotation,
};
