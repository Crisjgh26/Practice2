const UserModel = require("../models/user");


class UserControllers {

    async create(req, res) {

        try {
            console.log(req.body);
            const data = await UserModels.create(req.body);
            return res.json(data);
        } catch (error) {

            res.status(500), send({
                msg: error.message "Error al realizar la creacion de un usuario en base de datos"
            });
        }

    }