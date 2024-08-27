import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private _formBuilder = inject(FormBuilder);
  public bmi = 0;

  ageFormGroup = this._formBuilder.group({
    ageCtrl: this._formBuilder.control<number | null>(null, [Validators.required])
  });
  heightFormGroup = this._formBuilder.group({
    heightCtrl: this._formBuilder.control<number | null>(null, [Validators.required])
  });
  weightFormGroup = this._formBuilder.group({
    weightCtrl: this._formBuilder.control<number | null>(null, [Validators.required])
  });


  setBMI(){
    this.bmi =  this.weightFormGroup.controls.weightCtrl.value! / (this.heightFormGroup.controls.heightCtrl.value! / 100)**2 ;
  }

  resetBMI(){
    this.bmi = 0;
  }
}
