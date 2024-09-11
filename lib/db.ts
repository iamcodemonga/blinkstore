import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Define the MONGODB_URI environment variable inside .env.local');
}

const connection: { isConnected?: number } = {}

async function connectToDatabase() {
    if (connection.isConnected) {
        return;
    }
  const db = await mongoose.connect(MONGODB_URI!)
  connection.isConnected = db.connections[0].readyState;
}

export default connectToDatabase;
