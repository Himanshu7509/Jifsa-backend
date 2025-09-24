import express from "express";
import { createForm, getForms, deleteForm } from "../controllers/form.controller.js";

const formRouter = express.Router();

formRouter.post("/create-form", createForm);     
formRouter.get("/read-form", getForms);       
formRouter.delete("/delete-form/:id", deleteForm);

export default formRouter;
