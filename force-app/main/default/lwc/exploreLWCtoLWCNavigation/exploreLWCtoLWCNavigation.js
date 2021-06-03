import { LightningElement } from "lwc";

import { NavigationMixin } from "lightning/navigation";

export default class ExploreLWCtoLWCNavigation extends NavigationMixin(LightningElement){
  handleClick() {
    let conf = {
      type: "standard__component",
      attributes: {
        componentName: "c__HouseLWCComponent"
        // here we have used c__HouseLWCComponent, meaning here we are referencing to a custom component that we 
        // have made, in this case, it is an aura component 
      },
      // state is used to send the data from LWC to the Aura component, and every property within state 
      // in case of custom component, every property will preceded by c__<propertyName>
      state: {
        c__name: "KrishnaTeja",
        c__age: 32,
        c__location: "India",
        c__profession: "Salesforce"
      }
    };

    this[NavigationMixin.Navigate](conf);
  }
}