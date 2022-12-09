import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboBComponent } from './labo-b.component';

describe('LaboBComponent', () => {
  let component: LaboBComponent;
  let fixture: ComponentFixture<LaboBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
