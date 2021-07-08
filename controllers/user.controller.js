function createUser(req, res){
    const user = {
        name: 'Mike', 
        age: '41',
        url: req.headers.host+req.originalUrl
    }

    res.json(user)
}

module.exports = {
    createUser : createUser
}