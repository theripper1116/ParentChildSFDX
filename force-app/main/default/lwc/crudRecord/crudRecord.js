import { api, LightningElement } from "lwc";
import {
  createRecord,
  deleteRecord,
  updateRecord
} from "lightning/uiRecordApi";

import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ID_FIELD from "@salesforce/schema/Account.Id";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";
import RATING_FIELD from "@salesforce/schema/Account.Rating";

export default class ExploreCreateRecord extends LightningElement {
  @api
  recordId;
  saveRecord() {
    const fields = {};

    fields[NAME_FIELD.fieldApiName] = "TESTING LDS USIN CR";
    fields[INDUSTRY_FIELD.fieldApiName] = "Education";
    fields[RATING_FIELD.fieldApiName] = "Hot";

    const recordInput = {
      apiName: ACCOUNT_OBJECT.objectApiName,
      fields: fields
    };

    createRecord(recordInput).then().catch();
  }

  handleUpdateRecord() {
    const fields = {};

    fields[ID_FIELD.fieldApiName] = "0015g00000E7EEPAA3";
    fields[NAME_FIELD.fieldApiName] = "New Name";

    const recordInput = {
      fields: fields
    };
    updateRecord(recordInput).then().catch();
  }

  handleDeleteClick() {
    deleteRecord(this.recordId).then().catch();
  }
}