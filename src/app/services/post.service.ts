import * as firebase from 'firebase';
import { Subject }   from 'rxjs';
import { PostModel } from '../models/post.model';
import DataSnapshot = firebase.database.DataSnapshot;

export class PostService {
  
  posts: PostModel[] = [];
  postsSubject = new Subject<PostModel[]>();
  
  constructor() {
    this.getPosts();
  }
  
  emitPost() {
    this.postsSubject.next(this.posts);
    
  }
  
  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
    
  }
  
  createNewPost(newPost: PostModel) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPost();
  }
  
  save() {
    this.savePosts();
    this.emitPost();
  }
  
  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPost();
        },
      );
  }
  
  removePost(post: PostModel) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      },
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPost();
  }
}
