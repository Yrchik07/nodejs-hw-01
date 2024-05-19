import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
    try {
        const emptyContacts = [];

        await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts, null, 2));

        console.log('Successfully removed all contacts.');
    } catch (error) {
        console.error('Error removing contacts:', error);
    }
};

await removeAllContacts();
