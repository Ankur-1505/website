import { AngularFireDatabase } from '@angular/fire/database';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AosToken } from '../aos';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  loading : boolean = true;
  id: any;
  posts : any;

  constructor(@Inject(AosToken) aos, private route: ActivatedRoute, private db : AngularFireDatabase) {
    aos.init({
      duration: 600,
    });
    this.route.params.subscribe(params => {
      this.id = params['category'];
      if(this.id=='All'){
        const list = this.db.list('/flamelink/environments/production/content/blogPost/en-US').valueChanges();
        list.subscribe(obj => {
          this.posts = obj;
          console.log(obj);
          this.loading = false;
        })
      }else{
        const list = this.db.list('/flamelink/environments/production/content/blogPost/en-US',ref => ref.orderByChild('category').equalTo(this.id)).valueChanges();
        list.subscribe(obj => {
          this.posts = obj;
          console.log(obj);
          this.loading = false;
        })
      }
    });
   }

  ngOnInit() {
  }

}
