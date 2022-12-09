import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisFrancesComponent } from './sis-frances.component';

describe('SisFrancesComponent', () => {
  let component: SisFrancesComponent;
  let fixture: ComponentFixture<SisFrancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisFrancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisFrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
