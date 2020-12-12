import mongoose from 'mongoose';
import config from 'config';

const test = process.env.NODE_ENV === 'test';
const URI = `mongodb://${config.get('DB_CONFIG.DOMAIN')}/${config.get(
   'DB_CONFIG.DB_NAME'
)}`;

if (!test) {
   mongoose
      .connect(URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })
      .then(db => console.log('> mongoDb is connected on ', db.connection.host))
      .catch(err => console.log('>> error connecting to database'));
}
