import { Component } from '@angular/core';
import { IContact } from 'src/app/models/icontact';
import { CONTACTS } from 'src/app/mock-data/sampleContactData';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  contacts=CONTACTS;

}
