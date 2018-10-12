import { Component, OnInit,Inject } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AosToken } from '../aos';  


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: any;
  loading : boolean = true;

  constructor(@Inject(AosToken) aos,private db : AngularFireDatabase) {
    aos.init({
      duration: 600,
    });
   }

  ngOnInit() {
    const list = this.db.list('/flamelink/environments/production/content/blogPost/en-US', ref => ref.limitToLast(3)).valueChanges();
    list.subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
      this.loading = false;      
    })
    
  }

}
