const { Schema, model } = require("mongoose");

const VotationSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: true,
  },
  type_form: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  expiration: {
    type: Date,
    required: true,
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
},{
  timestamps: true,
  versionKey: false,
});

VotationSchema.methods.toJSON = function () {
  const { __v, _id, ...votation } = this.toObject(); //eslint-disable-line
  votation.uid = _id;
  return votation;
};

const Votation = model("Votation", VotationSchema);

module.exports = Votation;
