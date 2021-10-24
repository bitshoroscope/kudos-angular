import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveKudosComponent } from './give-kudos.component';

describe('GiveKudosComponent', () => {
  let component: GiveKudosComponent;
  let fixture: ComponentFixture<GiveKudosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveKudosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveKudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
