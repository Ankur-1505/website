import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  id: any;
  project: any;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    let path = '/flamelink/environments/production/content/projects/en-US/' + this.id;
    const object = this.db.object(path).valueChanges();
    object.subscribe(obj => {
      this.project = obj;
      this.loading = false;
    })
   }

  ngOnInit() {
  }

}
