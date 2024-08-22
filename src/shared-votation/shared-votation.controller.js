const User = require("../user/user.model");
const SharedVotation = require("./shared-votation.model");

const shareVotation = async (req, res) => {

  const { votationId, email, canView, canEdit } = req.body; //eslint-disable-line

  // console.log(req.user);
  const { _id } = req.user;

  // console.log(_id);

  try {
    // user a quien le voy a compartir la votación
    // user who I am going to share the vote with
    const findUser = await User.findOne({ email });

    const findSharedVotation = await SharedVotation.findOne({ votation: votationId, sharedWith: findUser._id });

    if(findSharedVotation){
      return res.status(400).json({
        ok: false,
        msg: "La votación ya ha sido compartida con este usuario",
      });
    }

    if (!findUser) {
      return res.status(404).json({
        ok: false,
        msg: "El usuario no existe",
      });
    }

    if(findUser._id.toString() === _id.toString()){
      return res.status(400).json({
        ok: false,
        msg: "No puedes compartir la votación contigo mismo",
      });
    }

    const sharedVotation = new SharedVotation({
      votation: votationId,
      owner: _id.toString(),
      sharedWith: findUser._id,
      // canView: canView,
      // canEdit: canEdit,
    });

    await sharedVotation.save();

    return res.status(201).json({
      ok: true,
      sharedVotation,
    });
  } catch (error) {
    console.error("Error al compartir la votación:", error);
    return res.status(500).json({
      ok: false,
      msg: "Error al compartir la votación",
    });
  }
};

const getUserByVotation = async (req, res) => {
  const { id } = req.params;

  try {
    const votation = await SharedVotation.find({ 
      votation: id,
      // canView: true,
    }).populate("sharedWith", "name email");

    const users= votation.map((v) => {
      return {
        id: v.sharedWith._id,
        name: v.sharedWith.name,
        email: v.sharedWith.email,
      };
    });

    return res.status(200).json({
      ok: true,
      users,
    });
  }
  catch (error) {
    console.error("Error al obtener los usuarios por votación:", error);
    return res.status(500).json({
      ok: false,
      msg: "Error al obtener los usuarios por votación",
    });
  }
};

const deleteUserFromVotation = async (req, res) => {
  const { id } = req.params;

  console.log("delete" + id);

  try {
    const votationFounded = await SharedVotation.find({ sharedWith: id }).populate(
      "sharedWith",
      "name email"
    );

    await SharedVotation.findOneAndDelete({ sharedWith: id }).populate(
      "sharedWith",
      "name email"
    );

    const users = votationFounded.map((v) => {
      return {
        id: v.sharedWith._id,
        name: v.sharedWith.name,
        email: v.sharedWith.email,
      };
    });

    return res.status(200).json({
      ok: true,
      users,
    });
  } catch (error) {
    console.error("Error al obtener los usuarios por votación:", error);
    return res.status(500).json({
      ok: false,
      msg: "Error al obtener los usuarios por votación",
    });
  }
};

const getSharedVotationByUser = async (req, res) => {
  const { _id } = req.user;

  // console.log(req.user);

  try {
    // Aquí asumimos que estás utilizando `ObjectId` válido
    const votations = await SharedVotation.find({ sharedWith: _id }).populate("votation");

    return res.status(200).json({
      ok: true,
      votations,
    });
  } catch (error) {
    console.error("Error al obtener las votaciones compartidas por usuario:", error);
    return res.status(500).json({
      ok: false,
      msg: "Error al obtener las votaciones compartidas por usuario",
    });
  }
};


module.exports = {
  shareVotation,
  getUserByVotation,
  deleteUserFromVotation,
  getSharedVotationByUser,
};
