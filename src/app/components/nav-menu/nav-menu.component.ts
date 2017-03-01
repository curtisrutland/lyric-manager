import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuthState } from "angularfire2";
import { FirebaseService } from "../../services";
import { User } from "../../models";

//import * as Rx from "rxjs/Rx";

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  user: User;

  constructor(private auth: FirebaseService) { }

  ngOnInit() {
    this.auth.login().subscribe(user => {
      this.user = user;
    });
  }

}
