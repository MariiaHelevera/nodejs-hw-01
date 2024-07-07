import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {
        let contacts = JSON.parse(await fs.readFile(PATH_DB));
        if (!contacts.length) return;
        contacts.pop();
        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
        console.log('Last contact deleted successfully.');
    } catch (error) {
        console.log(error);
    }
};

removeLastContact();
