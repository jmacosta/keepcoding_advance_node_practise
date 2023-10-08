import mongoose from 'mongoose';

export const connectDB = async () => {
  mongoose.connection.on('error', err => {
    console.log('Error de conexión', err);
  });

  mongoose.connection.once('open', () => {
    console.log('Conectado a MongoDB en', mongoose.connection.name);
  });
  try {
    await mongoose.connect('mongodb://127.0.0.1/cursonode');
    console.log('Conexión a la base de datos establecida.');
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error.message);
    process.exit(1);
  }
};

export const disconnectDB = async () => {
  await mongoose.connection.close();
};
