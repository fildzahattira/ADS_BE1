module.exports = (sequelize, Sequelize) => {
  const Karyawan = sequelize.define("karyawan", {
    Nomor_Induk: {
      type: Sequelize.STRING,
      primaryKey: true, 
    },
    Nama: {
      type: Sequelize.STRING,
    },
    Alamat: {
      type: Sequelize.STRING, 
    },
    Tanggal_Lahir: {
      type: Sequelize.DATEONLY, 
    },
    Tanggal_Bergabung: {
      type: Sequelize.DATEONLY,
    },
  });


    Karyawan.associate = (models) => {
        Karyawan.hasMany(models.Cuti, {
          foreignKey: "Nomor_Induk",
          onDelete: "CASCADE", 
        });
      };
      

  return Karyawan;
};
