import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ClubMember } from './club-member.model';

@Injectable()
export class FirebaseSeriveService {
  clubmembers: FirebaseListObservable<any[]>;
  adminInfo: boolean = false;
  constructor(private database: AngularFireDatabase) {
    this.clubmembers = database.list('Hiking');
   }

   getClubmembers(){
    return this.clubmembers;
  }

  addClubmembers(newMember: ClubMember) {
    this.clubmembers.push(newMember);
  }

  getMemberById(albumId: string){
    return this.database.object('Hiking/' + albumId);
  }

  updateMemberInfo(localUpdatedInfo){
    var albumEntryInFirebase = this.getMemberById(localUpdatedInfo.$key);
    albumEntryInFirebase.update({name: localUpdatedInfo.name,
                                age: localUpdatedInfo.age,
                                married: localUpdatedInfo.married,
                              hobbies: localUpdatedInfo.hobbies});
  }

  deleteMember(deletedMember){
    var albumEntryInFirebase = this.getMemberById(deletedMember.$key);
    albumEntryInFirebase.remove();
  }

  setAdminInfo(adminInfo: boolean){
      this.adminInfo = adminInfo;
  }

  getAdminInfo(){
      return this.adminInfo;
  }

}
