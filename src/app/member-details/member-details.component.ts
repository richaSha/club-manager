import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseSeriveService } from '../firebase-serive.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  memberId: number;
  edit: boolean = false;
  clubmembers: FirebaseListObservable<any[]>;
  admin: boolean;
  constructor(public router: Router, public route: ActivatedRoute, public serviceInfo: FirebaseSeriveService) { }

  ngOnInit() {
    this.clubmembers = this.serviceInfo.getClubmembers();
    this.route.params.forEach((urlParameter) => {
      this.memberId = Number(urlParameter['id']);
    })
    this.admin = this.serviceInfo.getAdminInfo();
  }

  showEdit(){
    this.edit = true;
  }

  beginUpdatingMember(data){
    this.edit = false;
    this.serviceInfo.updateMemberInfo(data);
  }

  beginDeletingMember(data){
    if(confirm("Are you sure you want to delete this member from the club?")){
      this.memberId;
      this.serviceInfo.deleteMember(data);
      this.router.navigate(['admin']);
    }

  }
}
