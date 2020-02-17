import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObsComponent } from './create-obs.component';

describe('CreateObsComponent', () => {
  let component: CreateObsComponent;
  let fixture: ComponentFixture<CreateObsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateObsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
