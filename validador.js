const express = require('express');
const validator = require('validator');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  if (!validator.isLength(name, { min: 3, max: 50 })) {
    return res.status(400).json({ message: 'El nombre debe tener entre 3 y 50 caracteres' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: 'El email no es válido' });
  }

  if (!validator.isLength(password, { min: 6, max: 10 })) {
    return res.status(400).json({ message: 'La contraseña debe tener entre 6 y 10 caracteres' });
  }

  // Guardar usuario en la base de datos

  return res.status(200).json({ message: 'Usuario registrado correctamente' });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
