const fs = require("fs")

function checkDirectory(){
    fs.access('./uploads', function(error) {
    if (error) {
        console.log("Directory does not exist.")
        return true
    } else {
        console.log("Directory exists.")
        return false
    }
    })
}

checkDirectory()

module.exports = {
    checkDirectory : checkDirectory
}