import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboAComponent } from './labo-a.component';

describe('LaboAComponent', () => {
  let component: LaboAComponent;
  let fixture: ComponentFixture<LaboAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
