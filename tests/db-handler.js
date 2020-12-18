const db = require('mongoose');
const config = require('config');

module.exports = {
   async connectToDB() {
      await db.connect(
         `mongodb://${config.get('DB_CONFIG.DOMAIN')}/${config.get(
            'DB_CONFIG.DB_NAME'
         )}`,
         {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         }
      );
   },
   async closeDb() {
      await db.connection.dropDatabase();
      await db.disconnect();
   },
   async cleanCollections() {
      const cols = db.connection.collections;
      for (const key in cols) {
         cols[key].deleteMany();
      }
   },
};
