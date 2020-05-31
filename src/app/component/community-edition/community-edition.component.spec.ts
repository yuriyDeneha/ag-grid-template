import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CommunityEditionComponent} from './community-edition.component';

describe('CommunityEditionComponent', () => {
  let component: CommunityEditionComponent;
  let fixture: ComponentFixture<CommunityEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
