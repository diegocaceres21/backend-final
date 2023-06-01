import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inscribir } from 'src/app/interfaces/inscribir';
import { InscribirService } from 'src/app/servicios/inscribir.service';

@Component({
  selector: 'app-inscribir',
  templateUrl: './inscribir.component.html',
  styleUrls: ['./inscribir.component.scss']
})

export class InscribirComponent implements OnInit{
  myForm: FormGroup = new FormGroup({});
  isSubmitted = false;
  successful = false;

  constructor(private fb: FormBuilder,private inscribirService: InscribirService){
   
  }
  ngOnInit() {
    this.myForm = this.fb.group({
      carnet: ['', Validators.required],
      id_materia: ['', [Validators.required]],
      fecha_inscripcion: ['', [Validators.required]]
    });
  }
  onSubmit() {
    this.isSubmitted = true;
    //console.log('Valid?', form.valid); // true or false
    if(this.myForm.valid){
      
      const currentDate = new Date();
      let date = formatDate(currentDate,'yyyy-MM-dd',"en-US"); // Replace this with your desired date source
      let inscripcion: Inscribir;
      inscripcion = {
        carnet: this.myForm.value.carnet,
        id_materia: this.myForm.value.id_materia,
        fecha_inscripcion: date}
     this.inscribirService.crear(inscripcion).subscribe(data => console.log(data))
     this.successful = true;
    }
  }
  //carnet
  //id_materia
  //fecha_inscripcion
}