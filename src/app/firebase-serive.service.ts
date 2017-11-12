import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ClubMember } from './club-member';

@Injectable()
export class FirebaseSeriveService {
  clubmembers: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.clubmembers = database.list('Hiking');
   }

   getClubmembers(){
    return this.clubmembers;
  }

  addClubmembers(newMember: ClubMember) {
    debugger;
    this.clubmembers.push(newMember);
  }

}
