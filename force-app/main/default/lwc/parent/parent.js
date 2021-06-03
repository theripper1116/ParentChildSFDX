import { getFieldDisplayValue } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    message1="Hello,this is coming from parent component";
    clickMe(event){
        this.template.querySelector('c-child').display();
    }
}