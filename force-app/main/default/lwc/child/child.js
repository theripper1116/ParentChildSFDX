import { api, LightningElement } from 'lwc';

export default class Child extends LightningElement {
    @api
    message2="Hello!!!!"
    @api
    display(){
        console.log("hello")
    }
}