import { Injectable } from "@angular/core";
import * as Rx from "rxjs/Rx";
import 'rxjs/add/operator/map'

import { AngularFire, FirebaseAuthState, FirebaseListObservable } from "angularfire2";
import { Song, ISong, User } from "../models";

@Injectable()
export class FirebaseService {
    constructor(private af: AngularFire) {    }

    songs$: FirebaseListObservable<Song[]> = this.af.database.list("/songs").map(s => s.map(song => new Song(song))) as FirebaseListObservable<Song[]>;

    user$ = this.af.auth.asObservable().map(u => {
        if(u) {
            return {name: u.auth.displayName, photoUrl: u.auth.photoURL};
        } else {
            return null;
        }
    });

    login() {
        this.af.auth.login();
    }

    // login(): Rx.Observable<User> {
    //     return Rx.Observable.create((observer: Rx.Observer<User>) => {
    //         this.af.auth.subscribe(u => {
    //             if (u) {
    //                 observer.next({
    //                     name: u.auth.displayName,
    //                     photoUrl: u.auth.photoURL
    //                 });
    //             } else {
    //                 this.af.auth.login();
    //             }
    //         })
    //     });
    // }

    // getSongs() {
    //     this.songs$ = this.af.database.list("/songs")
    //         .map(s => s.map(song => {
    //             return new Song(song);
    //         })) as FirebaseListObservable<Song[]>;
    // }
}