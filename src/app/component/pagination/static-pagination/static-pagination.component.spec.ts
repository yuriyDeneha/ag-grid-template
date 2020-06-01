import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StaticPaginationComponent} from './static-pagination.component';

describe('StaticPaginationComponent', () => {
  let component: StaticPaginationComponent;
  let fixture: ComponentFixture<StaticPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
