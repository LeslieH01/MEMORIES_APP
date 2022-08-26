import { Express } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

/* dans tout projet express, il faut initialiser App en l'executant en tant que fonction*/
/** initialisation de App */

const app = Express();


app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.use(cors());
