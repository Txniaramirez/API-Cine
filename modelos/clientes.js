const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  dni: { type: String, required: true },
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  rol: { type: String, required: true }, // Puede ser "administrador", "empleado" o "cliente"
  telefono: String,
  correo: { type: String, required: true },
  contraseña: { type: String, required: true },
  nombreUsuario: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('Cliente', clienteSchema);