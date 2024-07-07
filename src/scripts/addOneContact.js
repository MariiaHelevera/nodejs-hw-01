import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        const contacts = JSON.parse(await fs.readFile(PATH_DB));
        contacts.push(createFakeContact());
        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
        console.log('New contact is added.');
    } catch (error) {
        console.log(error);
    };
};

await addOneContact();
