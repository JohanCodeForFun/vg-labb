import mongoose from "mongoose";

export type Contact = {
  firstname: string;
  lastname: string;
  email: string;
  personalnumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
};

const contactSchema = new mongoose.Schema<Contact>({
  firstname: String,
  lastname: String,
  email: String,
  personalnumber: String,
  address: String,
  zipCode: String,
  city: String,
  country: String,
});

const contactModel = mongoose.model("contact", contactSchema);

export const createContact = async (contactData: Contact) => {
  return await new contactModel(contactData).save();
};

export const isValidId = (id: string) => mongoose.Types.ObjectId.isValid(id);