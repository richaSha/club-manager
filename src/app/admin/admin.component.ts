import { Component, OnInit } from '@angular/core';
import { ClubMember } from '../club-member.model';
import { FirebaseSeriveService } from '../firebase-serive.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(public serviceInfo: FirebaseSeriveService, public route: Router) { }

  ngOnInit() {
  }

  createNewMember(name: string, age: number, married: string, hobbies: string){
    var member = new ClubMember(name, age,married, hobbies);
    this.serviceInfo.addClubmembers(member);
    this.route.navigate(['']);
  }
}
