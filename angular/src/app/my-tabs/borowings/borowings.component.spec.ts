import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorowingsComponent } from './borowings.component';

describe('BorowingsComponent', () => {
  let component: BorowingsComponent;
  let fixture: ComponentFixture<BorowingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorowingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
