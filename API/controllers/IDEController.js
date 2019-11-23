var IDE = require('../models/IDE');
var debug = require('debug')('blog:ide_controller');

// Search 
module.exports.getOne = (req, res, next) => {
    debug("Search ", req.params);
    User.findOne({
            nombre: req.params.nombre
        })
        .then((foundIDE) => {
            debug("Found IDE", foundIDE);
            if (foundIDE)
                return res.status(200).json(foundIDE);
            else
                return res.status(400).json(null)
        })
        .catch(err => {
            next(err);
        });
}

module.exports.getAll = (req, res, next) => {
    var perPage = Number(req.query.size) || 10,
        page = req.query.page > 0 ? req.query.page : 0;

    var sortProperty = req.query.sortby || "createdAt",
        sort = req.query.sort || "desc";

    debug("IDE List", {
        size: perPage,
        page,
        sortby: sortProperty,
        sort
    });

    User.find({})
        .limit(perPage)
        .skip(perPage * page)
        .sort({
            [sortProperty]: sort
        })
        .then((ides) => {
            debug("Found IDE", ides);
            return res.status(200).json(ides)
        }).catch(err => {
            next(err);
        });

}

// New IDE

module.exports.register = (req, res, next) => {
    debug("New IDE", {
        body: req.body
    });
    User.findOne({
            nombre: req.body.nombre
        })
        .then((foundIDE) => {
            if (foundIDE) {
                debug("IDE repetido");
                throw new Error(`IDE repetido ${req.body.nombre}`);
            } else {
                let newIDE = new IDE({
                    nombre: req.body.nombre|| "",
                    desarrollador: req.body.desarrollador || "",
                    last_name: req.body.last_name || "",
                    programado_en: req.body.programado_en || "",
                    SO: req.body.SO || "",                   
                });
                return newIDE.save();
            }
        }).then(ide => {
            return res
                .header('Location', '/ides/' + ide.nombre)
                .status(201)
                .json({
                    nombre: ide.nombre
                });
        }).catch(err => {
            next(err);
        });
}


// Update user 

module.exports.update = (req, res, next) => {
    debug("Update IDE", {
        nombre: req.params.nombre,
        ...req.body
    });

    let update = {
        ...req.body
    };

    User.findOneAndUpdate({
            nombre: req.params.nombre
        }, update, {
            new: true
        })
        .then((updated) => {
            if (updated)
                return res.status(200).json(updated);
            else
                return res.status(400).json(null);
        }).catch(err => {
            next(err);
        });
}

module.exports.delete = (req, res, next) => {

    debug("Delete IDE", {
        nombre: req.params.nombre,
    });

    User.findOneAndDelete({nombre: req.params.nombre})
    .then((data) =>{
        if (data) res.status(200).json(data);
        else res.status(404).send();
    }).catch( err => {
        next(err);
    })
}