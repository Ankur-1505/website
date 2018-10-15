import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit, Inject } from '@angular/core';
import { AosToken } from '../aos';  

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  loading : boolean = true;
  projects : any;

  constructor(@Inject(AosToken) aos, private db : AngularFireDatabase) {
    aos.init({
      duration: 600,
    });

    let list = db.list('/flamelink/environments/production/content/projects/en-US').valueChanges();
    list.subscribe(proj => {
      this.projects = proj;
      this.loading = false;
    });
   }

  ngOnInit() {
  }

}
