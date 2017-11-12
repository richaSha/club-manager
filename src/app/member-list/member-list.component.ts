import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseSeriveService } from '../firebase-serive.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  clubmembers: FirebaseListObservable<any[]>;
  constructor(public serviceInfo: FirebaseSeriveService) { }

  ngOnInit() {
    this.clubmembers = this.serviceInfo.getClubmembers();
  }

}
