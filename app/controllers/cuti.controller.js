const { Model } = require("sequelize");
const db = require("../models");
const cutiFromDb = db.cutis;

//Mendapatkan seluruh data cuti
exports.findAll = (req, res) => {
  cutiFromDb
    .findAll()
    .then((cutis) => {
      res.json({
        message: "Cutis data retrieved successfully.",
        data: cutis,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving cutis data.",
        data: null,
      });
    });
};

//Create data cuti
exports.create = (req, res) => {
    if (!req.body.Nomor_Induk) {
      return res.status(400).send({
        message: "Nomor_Induk can not be empty",
      });
    }
  
    const cuti = {
      Nomor_Induk: req.body.Nomor_Induk,
      Tanggal_Cuti: req.body.Tanggal_Cuti,
      Lama_Cuti: req.body.Lama_Cuti,
      Keterangan: req.body.Keterangan,
    };
  
    cutiFromDb
      .create(cuti)
      .then((data) => {
        res.json({
          message: "Cuti data created successfully.",
          data: data,
        });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({
          message:
            err.message || "Some error occurred while creating the cuti data.",
          data: null,
        });
      });
  };

//Update data cuti
exports.update = (req, res) => {
    const Nomor_Induk = req.params.Nomor_Induk;
    const id = req.params.id;
    cutiFromDb
    .update(req.body, {
      where: { Nomor_Induk: Nomor_Induk, id: id },
    })
      .then((num) => {
        if (num == 1) {
          res.json({
            message: "Cuti data updated successfully.",
            data: req.body,
          });
        } else {
          res.json({
            message: `Cannot update cuti data with Nomor_Induk=${Nomor_Induk}. Maybe cuti data was not found or req.body is empty!`,
            data: req.body,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || "Some error occurred while updating the cuti data.",
          data: null,
        });
      });
  };

//Delete data cuti
exports.delete = (req, res) => {
    const Nomor_Induk = req.params.Nomor_Induk;
    cutiFromDb
    .destroy({
      where: { Nomor_Induk: Nomor_Induk },
    })
      .then((num) => {
        if (num == 1) {
          res.json({
            message: "Cuti data deleted successfully.",
            data: req.body,
          });
        } else {
          res.json({
            message: `Cannot delete cuti data with Nomor_Induk=${Nomor_Induk}. Maybe cuti data was not found!`,
            data: req.body,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || "Some error occurred while deleting the cuti data.",
          data: null,
        });
      });
  };
  
