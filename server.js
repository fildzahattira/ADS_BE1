const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const karyawanRoute = require('./app/routes/karyawan.routes');
const cutiRoute = require('./app/routes/cuti.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');
db.sequelize.sync();

app.get('/', (req, res) => {
    res.send('Hai Fildzah');
});

app.use('/api/karyawans', karyawanRoute);
app.use('/api/cutis', cutiRoute);

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));
