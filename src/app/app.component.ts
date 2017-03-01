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
  songs$: FirebaseListObservable<Song[]>;

  constructor(private fb: FirebaseService) { }

  ngOnInit() {
    this.fb.getSongs();
    this.songs$ = this.fb.songs$;
  }
}
