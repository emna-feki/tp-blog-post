import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router }            from '@angular/router';
import { PostModel }         from '../models/post.model';
import { PostService }       from '../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;
  
  constructor(private postService: PostService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  
  }
  
  initForm() {
    this.postForm = this.formBuilder.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      nbrLike: 0,
      nbrDontLike: 0
    });
  }
  
  onSavePost() {
    const titre = this.postForm.get('titre').value;
    const description = this.postForm.get('description').value;
    const nbrLike = 0;
    const nbrDontLike = 0;
  
  
    const newPost = new PostModel(titre, description, nbrLike, nbrDontLike);

    this.postService.createNewPost(newPost);
    this.router.navigate(['/afficheItemPost']);
  
  }
}
