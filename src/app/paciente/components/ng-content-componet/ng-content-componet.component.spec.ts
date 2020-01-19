import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentComponet } from './ng-content-componet.component';

describe('NgContentComponet', () => {
  let component: NgContentComponet;
  let fixture: ComponentFixture<NgContentComponet>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentComponet ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
