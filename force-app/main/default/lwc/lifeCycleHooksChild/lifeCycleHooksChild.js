import { LightningElement } from 'lwc';

export default class LifeCycleHooksChild extends LightningElement {
    constructor(){
        super();
        console.log('in child constructor');
    }
    connectedCallback(){
        console.log('in child coonected callback');
    }
    renderedCallback(){
        console.log('in child rendered callback');
    }
    errorCallback(){
        console.log('in child error callback');
    }
    disconnectedCallback(){
        console.log('in child disconnected callback');
    }
}