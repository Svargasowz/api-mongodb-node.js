import mongoose from "mongoose";

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.URI_MONGO);
        console.log('Conexión exitosa 😋');
    } catch (error) {
        console.error('Error de conexión 😭😭😭' + error);
    }
}
connectToDatabase();
