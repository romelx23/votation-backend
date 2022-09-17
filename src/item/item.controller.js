const Item = require("./item.model");

const postItems = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const { items } = req.body;
  if (!items) return res.status(400).json({ msg: "No hay items" });
  const votation = await Promise.all(
    items.map(async (item) => {
      const newItem = new Item(item);
      newItem.votation = id;
      await newItem.save();
      return newItem;
    })
  );
  res.status(200).json({
    votation,
  });
};

module.exports = {
  postItems,
};
