import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisAmericanoComponent } from './sis-americano.component';

describe('SisAmericanoComponent', () => {
  let component: SisAmericanoComponent;
  let fixture: ComponentFixture<SisAmericanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisAmericanoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisAmericanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
