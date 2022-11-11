import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractApiComponent } from './abstract-api.component';

describe('AbstractApiComponent', () => {
  let component: AbstractApiComponent;
  let fixture: ComponentFixture<AbstractApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
