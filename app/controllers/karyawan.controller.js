const { Model } = require("sequelize");
const db = require("../models");
const karyawanFromDb = db.karyawans;
const cutiFromDb = db.cutis;

//Mendapatkan seluruh data karyawan
exports.findAll = (req, res) => {
  karyawanFromDb
    .findAll()
    .then((karyawans) => {
      res.json({
        message: "Karyawans retrieved successfully.",
        data: karyawans,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving karyawans.",
        data: null,
      });
    });
};

//Create data karyawan
exports.create = (req, res) => {
  if (!req.body.Nomor_Induk) {
    return res.status(400).send({
      message: "Nomor_Induk can not be empty",
    });
  }

  const karyawan = {
    Nomor_Induk: req.body.Nomor_Induk,
    Nama: req.body.Nama,
    Alamat: req.body.Alamat,
    Tanggal_Lahir: req.body.Tanggal_Lahir,
    Tanggal_Bergabung: req.body.Tanggal_Bergabung,
  };

  karyawanFromDb
    .create(karyawan)
    .then((data) => {
      res.json({
        message: "karyawan created successfully.",
        data: data,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        message:
          err.message || "Some error occurred while creating the karyawan.",
        data: null,
      });
    });
};

//Update data karyawan
exports.update = (req, res) => {
  const Nomor_Induk = req.params.Nomor_Induk;
  karyawanFromDb
    .update(req.body, {
      where: { Nomor_Induk: Nomor_Induk },
    })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Karyawan updated successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot update karyawan with Nomor_Induk=${Nomor_Induk}. Maybe karyawan was not found or req.body is empty!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while updating the karyawan.",
        data: null,
      });
    });
};

//Delete data karyawan
exports.delete = (req, res) => {
  const Nomor_Induk = req.params.Nomor_Induk;
  karyawanFromDb
    .destroy({
      where: { Nomor_Induk: Nomor_Induk },
    })
    .then((num) => {
      if (num == 1) {
        res.json({
          message: "Karyawan deleted successfully.",
          data: req.body,
        });
      } else {
        res.json({
          message: `Cannot delete karyawan with Nomor_Induk=${Nomor_Induk}. Maybe karyawan was not found!`,
          data: req.body,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while deleting the karyawan.",
        data: null,
      });
    });
};

//Data karyawan dan cuti
const { QueryTypes } = require("sequelize");
exports.findAllC = (req, res) => {
  const nomor_induk = req.params.nomor_induk;
  const sql = `SELECT k.Nomor_Induk, k.Nama, k.Alamat, k.Tanggal_Lahir, k.Tanggal_Bergabung, c.* 
                 FROM karyawan k 
                 JOIN cuti c ON k.Nomor_Induk = c.Nomor_Induk 
                 WHERE k.Nomor_Induk = '${nomor_induk}'`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    response(
      200,
      results,
      `Data Karyawan dan Cuti untuk Nomor Induk ${nomor_induk}`,
      res
    );
  });
};

exports.findAll = (req, res) => {
  karyawanFromDb
    .findAll({
      order: [["Nama", "ASC"]], 
    })
    .then((karyawans) => {
      res.json({
        message: "Karyawans sort by name retrieved successfully.",
        data: karyawans,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving karyawans sort by name.",
        data: null,
      });
    });
};
