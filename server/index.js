import { Express } from "express";
import bodyParser from "body-parser";
import mongoose, { Error } from "mongoose";
import cors from "cors";

/* dans tout projet express, il faut initialiser App en l'executant en tant que fonction*/
/** initialisation de App */

const app = Express();


app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());

/* variable de connection*******/
const CONNECTION_URL = 'mongodb+srv://leslie123:leslie123@cluster0.ejkuueu.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopologiy: true }) /** useNewUrlParser and useUnifiedTopology ne sont pas obligatoires, mais pour éviter des erreurs on les declare*/
    /** si la connection a réussit alors redirectionner vers le port */
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    /** Sinon alors revoyer errer */
    .catch((Error) => console.log(Error.messages));
/** permet de se rassurer qu'il n'y a pas d'erreur */
mongoose.set('useFindAndModify', false);