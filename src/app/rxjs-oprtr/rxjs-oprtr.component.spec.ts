import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOprtrComponent } from './rxjs-oprtr.component';

describe('RxjsOprtrComponent', () => {
  let component: RxjsOprtrComponent;
  let fixture: ComponentFixture<RxjsOprtrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsOprtrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsOprtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
