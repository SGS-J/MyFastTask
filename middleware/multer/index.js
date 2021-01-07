import imageUpload from './content/file-data';
import uploadFields from './content/field-user-data';

export default {
   uploadImage(req, res) {
      return imageUpload(req, res);
   },
   uploadFields() {
      return uploadFields();
   },
};
