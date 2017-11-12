import { Component, OnInit } from '@angular/core';
import { ClubMember } from '../club-member';
import { FirebaseSeriveService } from '../firebase-serive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  member :ClubMember;
  constructor(public serviceInfo: FirebaseSeriveService, public route: Router) { }

  ngOnInit() {
  }

  createNewMember(name: string, age: number, married: string, hobbies: string){
    this.member = {name: name, age: age, married: married, hobbies: hobbies};
    this.serviceInfo.addClubmembers(this.member);
    this.route.navigate(['']);
  }
}
