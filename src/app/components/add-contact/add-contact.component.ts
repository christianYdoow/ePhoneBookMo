import { Component } from '@angular/core';
import {CONTACTS} from 'src/app/mock-data/sampleContactData';
import {IContact} from 'src/app/models/icontact';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {

  contacts=CONTACTS;


  newContactId?:number ;
  newContactName='';
  newContactImage='';
  newContactEmail='';
  newContactNumber='';
  newContactAddress='';

  constructor(private location :Location){
    this.newContactId=this.contacts.length+1;
  }



  addNewContact() {
    const newContact = {
      id: this.newContactId,
      name: this.newContactName,
      email: this.newContactEmail,
      image: this.newContactImage,
      number: this.newContactNumber,
      address: this.newContactAddress
    };
    this.contacts.push(newContact);  
    this.newContactName = '';
    this.newContactEmail = '';
    this.newContactImage = '';
    this.newContactNumber = '';
    this.newContactAddress = '';
    this.newContactId!++;

    this.location.back();
  }
  
  

  updateImage(){
    const img=new Image();
    img.onload=()=>{
      this.newContactImage=img.src;
    };
    img.onerror=()=>{
      this.newContactImage='https://via.placeholder.com/150'
    };
    img.src=this.newContactImage;
  }
}
