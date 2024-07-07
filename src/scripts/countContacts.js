import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
        const contacts = JSON.parse(await fs.readFile(PATH_DB));
        return `Contacts file counts ${contacts.length} contacts.`;
    } catch (error) {
        console.log(error);
    }
};

console.log(await countContacts());
