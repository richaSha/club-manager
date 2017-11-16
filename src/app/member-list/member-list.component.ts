import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseSeriveService } from '../firebase-serive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  clubmembers: FirebaseListObservable<any[]>;
  currentRoute: string;

  constructor(public serviceInfo: FirebaseSeriveService, public route: Router){ }

  ngOnInit() {
    this.currentRoute = this.route.url;
    this.clubmembers = this.serviceInfo.getClubmembers();
    if(this.currentRoute === '/admin'){
      this.serviceInfo.setAdminInfo(true);
    }else{
      this.serviceInfo.setAdminInfo(false);
    }
  }

  memberInfo(id: number){
    this.route.navigate(['info',id]);
  }

}
