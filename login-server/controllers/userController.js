const db = require('../models')

module.exports = {
    signIn: async(req, res) => {
        res.send({message: "signIn success!"})
    },
    signUp: async(req, res) => {

        const { id, password, nickname } = req.body;
        try {
            
            const user = db.User;
            const isDup = await user.findOne({
                where: {sitename: id}
            });

            if (isDup) {
                return res.status(409).send({message: "id is already existed!"});
            }
            
            const newUser = await user.create({
                sitename: id,
                password: password,
                nickname: nickname
            }).then((res) => res.dataValues)

            return res.status(201).send({userInfo: { id, nickname }, message: "success!"});
        } catch (err) {
            res.send({message: "error!"});
        }
        
        
    }
}