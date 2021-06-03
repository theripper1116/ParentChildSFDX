import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
    constructor(){
        super();
        console.log('in parent constructor');
    }
    connectedCallback(){
        console.log('in parent coonected callback');
    }
    renderedCallback(){
        console.log('in parent rendered callback');
    }
    errorCallback(){
        console.log('in parent error callback');
    }
    disconnectedCallback(){
        console.log('in parent disconnected callback');
    }
}