import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { api, LightningElement, wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
export default class GetRecord extends LightningElement {
    @api
    recordId;

    @wire(getRecord,{recordId:"$recordId", fields:[NAME_FIELD,INDUSTRY_FIELD,RATING_FIELD]})
    accounts;

    get name(){
        return getFieldValue(this.accounts.data,NAME_FIELD);
    }
    get industry(){
        return getFieldValue(this.accounts.data,INDUSTRY_FIELD);
    }
    get rating(){
        return getFieldValue(this.accounts.data,RATING_FIELD);
    }
}