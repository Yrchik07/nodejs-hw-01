import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        let contacts = [];

        if (data) {
            contacts = JSON.parse(data);
        }

        const remainingContacts = contacts.filter(() => Math.random() >= 0.5);

        await fs.writeFile(PATH_DB, JSON.stringify(remainingContacts, null, 2));

        console.log('Thanos has snapped his fingers. Remaining contacts:', remainingContacts.length);
    } catch (error) {
        console.error('Error processing contacts:', error);
    }
};

await thanos();
