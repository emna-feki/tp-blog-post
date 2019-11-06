import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichePostComponent } from './affiche-post.component';

describe('AffichePostComponent', () => {
  let component: AffichePostComponent;
  let fixture: ComponentFixture<AffichePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
