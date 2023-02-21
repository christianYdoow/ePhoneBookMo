import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CONTACTS} from 'src/app/mock-data/sampleContactData';
import {IContact} from 'src/app/models/icontact';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent {

  public contact: IContact | undefined;
  public contactId: string | null = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.contactId = paramMap.get('contactId');
      const matchedContact = CONTACTS.find(c => c.id !== undefined && c.id.toString() === this.contactId);
      if (matchedContact) {
        this.contact = matchedContact;
      }
    });
  }
}
