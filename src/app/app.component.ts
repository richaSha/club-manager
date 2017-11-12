import { Component } from '@angular/core';
import { routing } from './app.route';
import { FirebaseSeriveService } from './firebase-serive.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseSeriveService]
})
export class AppComponent {
  title = 'app works!';
}
