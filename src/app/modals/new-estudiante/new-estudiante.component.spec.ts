import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEstudianteComponent } from './new-estudiante.component';

describe('NewEstudianteComponent', () => {
  let component: NewEstudianteComponent;
  let fixture: ComponentFixture<NewEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEstudianteComponent]
    });
    fixture = TestBed.createComponent(NewEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
