const { response, request } = require("express");
const bcryptjs = require("bcryptjs");
const Usuario = require("./user.model");
const { generarJWT } = require("../helpers/generar-jwt");

const usuariosGet = async (req = request, res = response) => {
  // const { q, nombre = "No name", apikey, page = 1, limit = 10 } = req.query;
  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true };

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query).skip(Number(desde)).limit(Number(limite)),
  ]);

  res.json({
    total,
    usuarios,
  });
};

const usuariosGetId = async (req = request, res = response) => {
  // const { q, nombre = "No name", apikey, page = 1, limit = 10 } = req.query;
  const { id } = req.params;
  // const usuarios = await Usuario.find(query)
  //       .skip(Number(desde))
  //       .limit(Number(limite));

  // const total=await Usuario.countDocuments(query);

  const usuario = await Usuario.findById(id);

  res.json({
    usuario,
  });
};

const usuariosPost = async (req, res = response) => {
  // leer y parsear del body que me envien
  const { nombre, correo, password, imagen } = req.body;
  const usuario = new Usuario({ nombre, correo, password, imagen });

  // Verificar si el correo existe
  // const existeEmail = await Usuario.findOne({ correo });

  // if (existeEmail) {
  //   return res.status(400).json({
  //     msg: "El correo ya esta registrado",
  //   });
  // }

  // encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);

  // Guardar en BD
  await usuario.save();

  // generar el JWT
  const token = await generarJWT(usuario.id);

  res.status(201).json({
    usuario,
    token,
  });
};

const usuariosPut = async (req = request, res = response) => {
  // capturando query params
  const { id } = req.params;

  const { _id, password, google, correo, ...rest } = req.body; //eslint-disable-line

  try {
    //TODO validar contra bd
    if (password) {
      // encriptar la contraseña
      const salt = bcryptjs.genSaltSync();
      rest.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, rest, { new: true }); //eslint-disable-line

    res.status(200).json({
      msg: "put API - usuarioPut",
      usuario,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "api patch",
  });
};

const usuariosDelete = async (req = request, res = response) => {
  const { id } = req.params;

  // const uid=req.uid;
  // console.log(uid);

  //* Fisiacamente lo borramos
  //* const usuario=await Usuario.findByIdAndDelete(id);

  const usuario = await Usuario.findByIdAndUpdate(
    id,
    { estado: false },
    { new: true }
  );
  // const usuarioAutenticado=req.usuario;

  res.json({
    usuario,
  });
};

module.exports = {
  usuariosGet,
  usuariosGetId,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
