import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheListPostComponent } from './affiche-list-post.component';

describe('AfficheListPostComponent', () => {
  let component: AfficheListPostComponent;
  let fixture: ComponentFixture<AfficheListPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheListPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheListPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
