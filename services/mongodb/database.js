import mongoose from 'mongoose';
import config from 'config';

const URI = `mongodb://${config.get('DB_CONFIG.DOMAIN')}/${config.get(
   'DB_CONFIG.DB_NAME'
)}`;

export async function connectToDB() {
   try {
      const db = await mongoose
         .connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         })
      console.log(`> mongodb is connected on ${db.connection.host}`);
   } catch (error) {
      console.log('>> Error connecting to database'); 
      process.exit(-1);
   }
}

export async function closeDB() {
   await mongoose.disconnect(); 
}
