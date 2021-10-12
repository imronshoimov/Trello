const multer = require("multer");
const path = require("path");

const fileUpload = () => {
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, path.join(process.cwd(), "src", "uploads"));
        },
        filename: function(req, file, cb) {
            cb(null, file.originalname.split(" ").join("_"));
        }
    });
    return multer({
        storage,
        fileFilter: function(req, file, cb) {
            const fileTypes = /jpeg|jpg|png/;
            const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
            const mimeType = fileTypes.test(file.mimetype);
            if(extName && mimeType) {
                cb(null, true);
            } else {
                const error = cb("Error: Images only!");
                req.body.multerError = error;
            }
        }
    })
};

module.exports = fileUpload;