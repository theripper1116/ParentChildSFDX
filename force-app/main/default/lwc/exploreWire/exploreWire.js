import { LightningElement, wire } from "lwc";

import fetchRecords from "@salesforce/apex/WireMethods.fetchRecords";
import getUsername from "@salesforce/apex/WireMethods.getUsername";
import processAccounts from "@salesforce/apex/WireMethods.processAccounts";

export default class ExploreWireProp extends LightningElement {
  //Wiring property with Apex
  
    @wire(fetchRecords)
  accounts;

    //Sending data as params to Apex

  @wire(getUsername)
  username({ error, data }) {
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }
  }

  //Wiring JS function with Apex

  handleClick() {
    processAccounts().then((data)=>{
        console.log(data);})
    .catch((error)=>{
        console.log(error);
    });
  }
}

//  whenever we try to send the data from js file to apex class
// @wire(functionNameWhichIsImported, {sameNameAsParameterNameDefinedInFunction, '$variableName'})
// dataRecievedFromApexClass


//  whenever we try to send the array from js file to apex class
// let arr=['name','milan','nimish'];
// @wire(functionNameWhichIsImported, {sameNameAsParameterNameDefinedInFunction, '$arr'})
// dataRecievedFromApexClass
//  and the array which will be recieved by the apex class, it will be in the form List<>


//  whenever we try to send the object from js file to apex class
// @wire(functionNameWhichIsImported, {sameNameAsParameterNameDefinedInFunction, '$arr'})
// dataRecievedFromApexClass
//  and the object which will be recieved by the apex class, it will be in the form Map<>
