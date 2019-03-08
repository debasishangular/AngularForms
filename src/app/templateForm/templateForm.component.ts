import { Component, OnInit } from '@angular/core';

// import { ShowError } from './showError.component';
import { Hero } from '../shared/hero';

@Component({
  selector: 'template-driven-form',
  templateUrl: './templateForm.component.html'
})
export class TemplateFormComponent implements OnInit {
  model: Hero;
  powers: string[];
  submitted: boolean = false;
  formvalue: any ;
  
  constructor() { }
  
  ngOnInit() {
      this.model = new Hero(18, 'Tornado', 'Turbulent Breeze', 'Willie Wind', '', 789065, 'Test street', 'Test City');

      this.powers = ['Really Smart', 'Turbulent Breeze', 
                     'Super Hot', 'Weather Changer'];
  }

  onSubmit(value: any) {
    this.submitted = true;
    this.formvalue = value;
  }
}
