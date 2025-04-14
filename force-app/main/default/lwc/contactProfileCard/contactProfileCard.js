import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import AVATAR_FIELD from '@salesforce/schema/Contact.Avatar';
import ACCOUNT_ID_FIELD from '@salesforce/schema/Contact.AccountId';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Contact.Account.Name';

const FIELDS = [
    NAME_FIELD,
    TITLE_FIELD,
    AVATAR_FIELD,
    ACCOUNT_ID_FIELD,
    ACCOUNT_NAME_FIELD
];

export default class ContactProfileCard extends LightningElement {
    @api recordId;
    
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    contact;

    get name() {
        return getFieldValue(this.contact.data, NAME_FIELD);
    }

    get title() {
        return getFieldValue(this.contact.data, TITLE_FIELD);
    }

    get avatar() {
        return getFieldValue(this.contact.data, AVATAR_FIELD);
    }

    get account() {
        return {
            Id: getFieldValue(this.contact.data, ACCOUNT_ID_FIELD),
            Name: getFieldValue(this.contact.data, ACCOUNT_NAME_FIELD)
        };
    }
} 