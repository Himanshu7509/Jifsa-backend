import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, },
  email:     { type: String, required: true },
  phoneNo:   { type: String, required: true },
  message:   { type: String },
  fatherName:{ type: String },
  dob:       { type: Date },
  contactNo: { type: String }
});

const Form = mongoose.model("Form", formSchema);

export default Form;
