import { ContactCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactCollection.find();
  return contacts;
};

export const getContactById = async contactId => {
  const contact = await ContactCollection.findById(contactId);
  return contact;
};

export const createContact = async payload => {
  const contact = await ContactCollection.create(payload);
  return contact;
};

export const updateContact = async (contactId, payload, options = {}) => {
  const updateContact = await ContactCollection.findOneAndUpdate(
    { _id: contactId },
    payload,
    {
      new: true,
      runValidators: true,
      ...options,
    }
  );
  return updateContact;
};

export const deleteContact = async contactId => {
  const contact = await ContactCollection.findOneAndDelete({
    _id: contactId,
  });

  return contact;
};
