import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  public formData: FormGroup = new FormGroup(
    {name: new FormControl('init name')}
  );

  checkoutForm = this.formBuilder.group({
    name: ['', Validators.required],
    address: ['']
  })

  constructor(private formBuilder: FormBuilder){

  }

  public onSubmit(){
    console.log('onSubmit', this.formData.value.name)
    console.log('onSubmit', this.checkoutForm.value)
  }
}
