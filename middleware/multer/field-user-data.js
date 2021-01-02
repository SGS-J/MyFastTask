import multer from 'multer';

const upload = multer();

export default upload.fields([
   'username',
   'password',
   'conf-password',
   'birthday',
   'gender',
   'UIColor',
   'avatar',
]);
