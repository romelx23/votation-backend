const { Schema, model } = require("mongoose");

const SharedVotationSchema = new Schema({
  votation: {
    type: Schema.Types.ObjectId,
    ref: "Votation",
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sharedWith: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  canView: {
    type: Boolean,
    default: true,
  },
  canEdit: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
  versionKey: false,
});

SharedVotationSchema.methods.toJSON = function () {
  const { __v, _id, ...item } = this.toObject(); //eslint-disable-line
  item.uid = _id;
  return item;
};
const SharedVotation = model("SharedVotation", SharedVotationSchema);

module.exports = SharedVotation;
