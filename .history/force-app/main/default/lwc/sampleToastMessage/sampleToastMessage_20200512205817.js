import {
  LightningElement,track
} from 'lwc';

export default class SampleToastMessage extends LightningElement {
  /* variables for custom toast */
  @track title;
  @track toastmessage;
  @track messageType;
  @track autoClose = true;
  /** end of variables custom toast*/
  openSuccess() {
    this.messageType = "success"; //this can be success, warn 
    this.toastmessage = "Hello World.";
    this.title = "";
    // you can set autoclose here if you want
    this.template.querySelector('c-lwc-custom-toast').showCustomNotice();
  }
  openError() {
    this.messageType = "error"; //this can be success, warn 
    this.toastmessage = "Hello World.";
    this.title = "";
    // you can set autoclose here if you want
    this.template.querySelector('c-lwc-custom-toast').showCustomNotice();
  }
  openWarning() {
    this.messageType = "warning"; //this can be success, warn 
    this.toastmessage = "Hello World.";
    this.title = "";
    // you can set autoclose here if you want
    this.template.querySelector('c-lwc-custom-toast').showCustomNotice();
  }
  openInfo() {
    this.messageType = "info"; //this can be success, warn 
    this.toastmessage = "Hello World.";
    this.title = "";
    // you can set autoclose here if you want
    this.template.querySelector('c-lwc-custom-toast').showCustomNotice();
  }

}