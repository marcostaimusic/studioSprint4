const multer = require('multer')
const path = require('path')
//const checkDirectory = require('./checkDirectory') // è un middleware che devo mettere in qualche altro file, che si esegue ogni volta che invoco una route 

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './uploads')
    },
    filename: function(req, file, callback){
        callback(null, new Data().getTime() + path.extname(file.originalname))
    }
});

const fileFilter = (req, file, callback)=> {
    if (file.mimeType==='image/png' || file.mimeType==='image/jpg' || file.mimeType==='image/gif'){
        callback(null, true)
    } else {
        callback(new Error('Unsupported file'), false)
    }
}

const upload = multer({
    storage: storage,
    limits:{
        fileSize: 1024*1024
    },
    fileFilter: fileFilter
})

module.exports = {
    upload: upload
}