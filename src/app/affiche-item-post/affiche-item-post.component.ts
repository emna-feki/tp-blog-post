import {
  Component,
  OnInit,OnDestroy
}                       from '@angular/core';
import { Router }       from '@angular/router';
import { Subscription } from 'rxjs';
import { PostModel }    from '../models/post.model';
import { PostService }  from '../services/post.service';


@Component({
  selector: 'app-affiche-item-post',
  templateUrl: './affiche-item-post.component.html',
  styleUrls: ['./affiche-item-post.component.scss'],
})
export class AfficheItemPostComponent implements OnInit {
  
  postsModel: PostModel[];
  postSubscription: Subscription;
  
  
  constructor(private postService: PostService, private router: Router) {
  }
  
  ngOnInit() {
    this.postSubscription = this.postService.postsSubject.subscribe((posts: PostModel[]) => {
      this.postsModel = posts;
    });
    this.postService.emitPost();
    
  }
  
  onViewPost(id: number) {
    this.router.navigate(['/posts', id]);
  }
  
  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
  
}
