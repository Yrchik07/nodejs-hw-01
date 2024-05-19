import { promises as fs } from 'fs';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        let contacts = [];

        if (data) {
            contacts = JSON.parse(data);
        }

        const newContact = createFakeContact();
        contacts.push(newContact);

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

        console.log('Successfully added one new contact.');
    } catch (error) {
        console.error('Error processing contacts:', error);
    }
};

export default addOneContact;
await addOneContact();
