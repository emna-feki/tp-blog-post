import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheItemPostComponent } from './affiche-item-post.component';

describe('AfficheItemPostComponent', () => {
  let component: AfficheItemPostComponent;
  let fixture: ComponentFixture<AfficheItemPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheItemPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheItemPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
