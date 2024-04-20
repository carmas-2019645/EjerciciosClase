import User from "../users/user.model.js";
import Channel from '../channel/channel.model.js'
import bcryptjs from "bcryptjs";
import { generarJWT } from "../helpers/generate-JWT.js";

export const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const salt = bcryptjs.genSaltSync();
    const encryptedPassword = bcryptjs.hashSync(password, salt);

    const newChannel = await Channel.create({})

    const user = await User.create({
      username,
      email: email.toLowerCase(),
      password: encryptedPassword,
      channel: newChannel._id
    });

    return res.status(200).json({
      msg: "user has been added to database",
      userDetails: {
        user: user.username,
        email: user.email,
      },
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send("No se pudo registrar el usuario");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar si el email existe
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).json({
        error: 'Correo no encontrado',
      });
    }

    // Verificar la contraseña
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        error: 'Contraseña incorrecta',
      });
    }

    // Si todo es correcto, generar JWT
    const token = await generarJWT(user.id, user.email);

    return res.status(200).json({
      msg: 'Login exitoso',
      userDetails: {
        email: user.email,
        token,
      },
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      error: 'Error interno del servidor',
    });
  }
};