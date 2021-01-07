import { promisify } from 'util';
import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage';
import config from 'config';

const URI = `mongodb://${config.get('DB_CONFIG.DOMAIN')}/${config.get(
   'DB_CONFIG.DB_NAME'
)}`;

const storage = new GridFsStorage({
   url: URI,
   options: { useNewUrlParser: true, useUnifiedTopology: true },
   file: (req, file) => {
      const match = ['image/png', 'image/jpeg'];

      if (match.indexOf(file.mimetype) === -1) {
         const filename = `${Date.now()}-myfasttask-${file.originalname}`;
         return filename;
      }

      return {
         bucketName: 'photos',
         filename: `${Date.now()}-myfasttask-${file.originalname}`,
      };
   },
});

const uploadFile = multer({ storage: storage }).single('avatar');

export default promisify(uploadFile);
