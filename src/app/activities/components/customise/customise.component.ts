import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customise',
  templateUrl: './customise.component.html'
})
export class CustomiseComponent implements OnInit {
  modelForm: FormGroup;
  minDate: number;
  maxDate: number;
  @Output() planDetails: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.modelForm = this.fb.group({
      name: '',
      selectDate: ''
    });
  }

  ngOnInit() {
    this.modelForm.valueChanges.subscribe(val => {
      this.planDetails.emit(val);
    });
  }
}
