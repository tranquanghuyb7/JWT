import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoutes from './routes/web';
require("dotenv").config;

const app = express();

const PORT = process.env.PORT || 8080;

//config view engine
configViewEngine(app);

//initWebRoute
initWebRoutes(app);

app.listen(PORT, () => {
    console.log("running on the port = " + PORT);
})