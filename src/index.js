const express = require ("express");
const morgan = require("morgan")

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan("dev"));

app.use(require("./routes"));

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send({'Erro': err.message});
// });

app.listen(3000, () => {
    console.log('Tá top a api')
});