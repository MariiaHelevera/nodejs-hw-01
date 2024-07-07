import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        let contacts = JSON.parse(await fs.readFile(PATH_DB));
        contacts = [];
        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
        console.log('All contacts deleted successfully.');
    } catch (error) {
        console.log(error);
    }
};

await removeAllContacts();
