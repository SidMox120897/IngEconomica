import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisAlemanComponent } from './sis-aleman.component';

describe('SisAlemanComponent', () => {
  let component: SisAlemanComponent;
  let fixture: ComponentFixture<SisAlemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisAlemanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisAlemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
