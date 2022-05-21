const config = require('../config.json');
const db = require('../helper/data_base');
const User = db.User;
module.exports = {
    createUser,
    getAllUsers
};

async function createUser(req, res, next) {
    // validate
    console.log('body =======',req.body);
    if (await User.findOne({ email: req.body.email })) {
        res.json( 'Username "' + req.body.email + '" is already taken');
    }
    const user = new User(req.body);
    console.log(user);  
    // save user
    user.save()
    .then((resp) => res.send({status :1, meassage:'Success',data:resp}))
    .catch(err => {next(err) ;console.log('err', err)});
}

async function getAllUsers(req, res, next) {
    User.find({})
    .then((resp) => {
        console.log('resp --', resp)
        res.send({status :1, meassage:'Success',data:resp})})
    .catch(err => {next(err) ;console.log('err', err)})
}