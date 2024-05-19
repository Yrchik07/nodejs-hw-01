import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        let contacts = [];

        if (data) {
            contacts = JSON.parse(data);
        }

        return contacts;
    } catch (error) {
        console.error('Error reading contacts:', error);

        return [];
    }
};
export default getAllContacts;
console.log( await getAllContacts());

