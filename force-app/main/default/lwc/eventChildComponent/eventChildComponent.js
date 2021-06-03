import { LightningElement } from "lwc";

export default class EventChildComponent extends LightningElement {
  handleClick() {
    const person = {
      name: "Krishna Teja",
      age: 32,
      location: "India"
    };
    /* 
    
    bubbles : false && composed : false - use this
    bubbles : true && composed : false - use this
    bubbles : true && composed : true - very very rarely used 
    bubbles : false && composed : true - doesn’t exist
    */
    this.template.querySelector("p").dispatchEvent(
      new CustomEvent("teja", {
        detail: person,
        bubbles: true,
        composed: true
      })
    );
  }

// we have applied the concept of event bubbling and capturing in this piece of code 


/*now bubbling means first child tag's event will execute and will go in the above direction 
i.e to its parent tag's event and will execute it*/


/*now capturing means if we want to execute the parent tag'event first and movo on to the child tag's event, 
capturing is rarely used in programming and mainly bubbling is used and used to calculate the shortest path 
from parent tag to the tag where event is fired*/


/*as we don't have capturing in LWC, composed is introduced in LWC and is used to invoke the shadow host 
 from parent and shadow host is nothing but the tag used to invoke the child component, and it allows 
 parent to listen to the event defined within child component*/


 /*detail is used to send the data from child component to parent component and it send the data along 
with the event*/ 


  handleOnTeja() {
    console.log("HEY!!!!!");
  }
}