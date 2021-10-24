import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KudoListComponent } from './kudo-list.component';

describe('KudoListComponent', () => {
  let component: KudoListComponent;
  let fixture: ComponentFixture<KudoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KudoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KudoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
