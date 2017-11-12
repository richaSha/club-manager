import { TestBed, inject } from '@angular/core/testing';

import { FirebaseSeriveService } from './firebase-serive.service';

describe('FirebaseSeriveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseSeriveService]
    });
  });

  it('should ...', inject([FirebaseSeriveService], (service: FirebaseSeriveService) => {
    expect(service).toBeTruthy();
  }));
});
