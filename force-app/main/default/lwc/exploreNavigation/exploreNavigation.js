import { LightningElement } from "lwc";

import { NavigationMixin } from "lightning/navigation";

export default class ExploreNavigation extends NavigationMixin(LightningElement) {


  /* we can use "NavigationMixin" to navigate to other page, or component or flows or any other thing by extending 
  the working class with "NavigationMixin" and passing "LightningElement" as an argument which is also a class */


  handleClick() {
    let conf = {
      type: "standard__recordPage", // type defines what type of PageReference it is, whether it is a record page,an lightning app, or login page or any other thing 
      attributes: {  // attribute is used to define the properties of the configuration file
        recordId: "00B5g00000EXixUEAT",
        objectApiName: "Lead",
        actionName: "view"
      }
    };

    this[NavigationMixin.Navigate](conf);
  }
}