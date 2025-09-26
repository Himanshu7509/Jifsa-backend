import express from "express";
import { 
  createAdmissionForm, 
  getAdmissionForms, 
  deleteAdmissionForm 
} from "../controllers/admissionform.controller.js";

const admissionRouter = express.Router();

admissionRouter.post("/create-form", createAdmissionForm);
admissionRouter.get("/read-form", getAdmissionForms);
admissionRouter.delete("/delete-form/:id", deleteAdmissionForm);

export default admissionRouter;
