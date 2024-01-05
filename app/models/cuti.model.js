module.exports = (sequelize, DataTypes) => {
  const Cuti = sequelize.define("Cuti", {
    Nomor_Induk: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    Tanggal_Cuti: {
      type: DataTypes.DATEONLY,
    },
    Lama_Cuti: {
      type: DataTypes.INTEGER,
    },
    Keterangan: {
      type: DataTypes.TEXT,
    },
  });

Cuti.associate = (models) => {
    Cuti.belongsTo(models.Karyawan, {
      foreignKey: "Nomor_Induk",
      onDelete: "CASCADE", 
    });
  };

  
  return Cuti;
};
