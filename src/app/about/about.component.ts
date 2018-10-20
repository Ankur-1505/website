import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit, Inject } from '@angular/core';
import { AosToken } from '../aos';  

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  projects_loading : boolean = true;
  projects : any;
  skills : any;
  skills_loading : boolean = true;

  constructor(@Inject(AosToken) aos, private db : AngularFireDatabase) {
    aos.init({
      duration: 300,
    });

    let projects_list = db.list('/flamelink/environments/production/content/projects/en-US').valueChanges();
    projects_list.subscribe(proj => {
      this.projects = proj;
      this.projects_loading = false;
    });

    let skills_list = db.list('/flamelink/environments/production/content/skills/en-US').valueChanges();
    skills_list.subscribe(skill => {
      this.skills = skill;
      this.skills_loading = false;
    })
   }

  ngOnInit() {
  }

}
