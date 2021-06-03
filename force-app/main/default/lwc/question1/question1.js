import { api, LightningElement, wire } from 'lwc';
import { createRecord, getRecord } from 'lightning/uiRecordApi';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import CLOSE_DATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
export default class Question1 extends LightningElement {
    @api
    recordId;
    
    //@wire(getRecord,{recordId: "$recordId", fields: })
    saveRecord(){
        
    createRecord({apiName: OPPORTUNITY_OBJECT.objectApiName,
        fields:{
            [NAME_FIELD.fieldApiName] : 'custom opportunity',
            [CLOSE_DATE_FIELD.fieldApiName] : '23-01-2020',
            [STAGE_FIELD.fieldApiName]: 'Prospecting'
        }}).then((onfulfilled)=>{
            console.log("record saved successfully");
        }).catch((onrejected)=>{
            console.log("record not saved");
        })
    }
}