const models = require('../database/models');
const model = require('../../e-comm-team-amigos-bn/src/database/models')
const { Socket } = require('socket.io');
const jwt = require('jsonwebtoken');

const getChats = async(req,res) => {
        try {
            if (req.query.df) {
                throw new Error("No Parameters required");
            }
            const chats = await model.Chat.findAll()
            return res.status(200).json({"Chats": chats});
        } catch (error) {
            console.log(error)
            return res.status(500).json({error: error});
        }
}

const createUser = async(req,res) => {
    try {
        const user = await models.User.create(req.body);
        return res.status(201).json({"User": user});
    } catch (error) {
        
    }
}

const loginUser = async(req,res) => {
    try {
        const { email } = req.body;
        const user = await models.User.findOne({ where: { email: email }});
        if(!user) return res.status(400).json({message: "No user found"});
        const payload = {
            user: user.id
          }
         jwt.sign(payload, process.env.SECRET_KEY, (err,token) => {
            if(err) throw err;
            return res.status(200).json({message: "User Login successful", token})
         });
    } catch (error) {
        return res.status(500).json({message: error})
    }
}



module.exports = {
    getChats,
    createUser,
    loginUser
}