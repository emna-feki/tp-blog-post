import {
  Component,
  Input,
  OnInit,
}                      from '@angular/core';
import {
  FormBuilder,
  FormGroup,
}                      from '@angular/forms';
import { Router }      from '@angular/router';
import { PostModel }   from '../models/post.model';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-affiche-post',
  templateUrl: './affiche-post.component.html',
  styleUrls: ['./affiche-post.component.scss'],
})
export class AffichePostComponent implements OnInit {
  
  @Input() postModel: PostModel;
  lastUpdate = new Date();
  likeForm: FormGroup;
  
  constructor(private postService: PostService, private formBuilder: FormBuilder, private router: Router) {
  }
  
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.likeForm = this.formBuilder.group({
      titre: this.postModel.titre,
      description: this.postModel.description,
      nbrLike: this.postModel.nbrLike,
      nbrDontLike: this.postModel.nbrDontLike,
    });
  }
  
  likeIt() {
    this.postModel.nbrLike++;
    this.postService.save();
  }
  
  
  dontLikeIt() {
    this.postModel.nbrDontLike++;
    this.postService.save();
  }
  
  getColor() {
    if (this.postModel.nbrLike > this.postModel.nbrDontLike) {
      return 'green';
    } else if (this.postModel.nbrLike < this.postModel.nbrDontLike) {
      return 'red';
    } else {
      return 'black';
    }
  }
  
  getBackground() {
    if (this.postModel.nbrLike > this.postModel.nbrDontLike) {
      return '#E0F8E0';
    } else if (this.postModel.nbrLike < this.postModel.nbrDontLike) {
      return '#F8E0E0';
    } else {
      return 'white';
    }
  }
  
  supprimer(post: PostModel) {
    this.postService.removePost(post);
  }
  
  
}
