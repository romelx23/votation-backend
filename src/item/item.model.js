const { Schema, model } = require("mongoose");

const ItemsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
  votation: {
    type: Schema.Types.ObjectId,
    ref: "Votation",
    required: true,
  },
  mal_id: {
    type: Number,
    required: false,
  },
});

ItemsSchema.methods.toJSON = function () {
  const { __v, _id, ...item } = this.toObject(); //eslint-disable-line
  item.uid = _id;
  return item;
};

const Item = model("Item", ItemsSchema);

module.exports = Item;
