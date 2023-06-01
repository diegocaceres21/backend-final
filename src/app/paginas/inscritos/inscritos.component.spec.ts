import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscritosComponent } from './inscritos.component';

describe('InscritosComponent', () => {
  let component: InscritosComponent;
  let fixture: ComponentFixture<InscritosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InscritosComponent]
    });
    fixture = TestBed.createComponent(InscritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
