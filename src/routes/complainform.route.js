import express from "express";
import { createComplain, getComplains, deleteComplain } from "../controllers/complainform.controller.js";

const complainFormRouter = express.Router();

complainFormRouter.post("/create-form", createComplain);
complainFormRouter.get("/read-form", getComplains);
complainFormRouter.delete("/delete-form/:id", deleteComplain);

export default complainFormRouter