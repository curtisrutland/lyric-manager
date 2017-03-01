import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from "angularfire2";
import { FirebaseService } from "./services";
import { Song } from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  //songs$: FirebaseListObservable<Song[]>;
  isAuthed: boolean = undefined;

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    this.fb.user$.map(u => !!u).subscribe(b => this.isAuthed = b);
    // this.fb.getSongs();
    // this.songs$ = this.fb.songs$;
  }

  login() {
    this.fb.login();
  }
}
