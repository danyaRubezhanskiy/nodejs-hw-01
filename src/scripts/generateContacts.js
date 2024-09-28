import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();
  const fakeContacts = Array.from({ length: number }, () =>
    createFakeContact(),
  );
  const newContacts = [...contacts, ...fakeContacts];
  await writeContacts(newContacts);
};

generateContacts(5);
