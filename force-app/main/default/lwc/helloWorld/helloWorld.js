import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greetings;
    title;
    subTitle;
    location;
    message = "HEY!!";
    clickMe(){
        console.log("hey, you clicked the button");
        console.log(this.greetings);
        console.log(this.location);
        console.log(this.subTitle);
        console.log(this.title);
    }
    checkText(event){
        //console.log(event.target.value);
        if(event.target.name==="greetings"){
            this.greetings=event.target.value;
            
        }if(event.target.name==="location"){
            this.location=event.target.value;
           
        }if(event.target.name==="title"){
            this.title=event.target.value;
            
        }if(event.target.name==="subTitle"){
            this.subTitle=event.target.value;
            
        }
    }
}