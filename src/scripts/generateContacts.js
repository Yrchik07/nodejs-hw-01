import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
       const data = await fs.readFile(PATH_DB, 'utf-8');
        let contacts = [];

        if (data) {
            contacts = JSON.parse(data);
        }
        for (let i = 0; i < number; i++) {
            const newContact = createFakeContact();
            contacts.push(newContact);
        }

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

        console.log(`Successfully added ${number} new contacts.`);

        return contacts;
    } catch (error) {
        console.error('Error processing contacts:', error);
    }
};

export default generateContacts;
await generateContacts(5);
