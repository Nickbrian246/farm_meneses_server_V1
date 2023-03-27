const multer = require("multer");


const storage= multer.diskStorage({
    destination: function (req,file,cb) {
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage);
    },
    filename:function (req, file,cb) {
        const noExtention= file.originalname.split(".").pop()
        const filename = `file-${Date.now()}.${noExtention}`;
        cb(null, filename)
    }

})
const uploadMiddleware = multer({storage})

module.exports = {uploadMiddleware};