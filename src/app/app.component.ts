import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true
};
const config = {
  apiKey: "AIzaSyCngLLRy3BU6Z-egcX4Y8RNhmFLTjWowZ4",
  authDomain: "projetlourd.firebaseapp.com",
  databaseURL: "https://projetlourd.firebaseio.com",
  projectId: "projetlourd",
  storageBucket: "projetlourd.appspot.com",
  messagingSenderId: "391838882934"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'angular-7-firestore';
  ngOnInit() {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}
