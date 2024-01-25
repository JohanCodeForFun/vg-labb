import mongoose from "mongoose";
import { Contact } from "./types/Contact";

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

export const ContactModel = mongoose.model("Contact", contactSchema);

export const createContact = async (contactData: Contact) => {
  return await new ContactModel(contactData).save();
};

export const getContactById = async (id: string) => {
  return await ContactModel.findById(id).lean();
}

export const getAllContacts = async () => {
  return await ContactModel.find().lean();
}

export const isValidId = (id: string) => mongoose.Types.ObjectId.isValid(id);