import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customise-form',
  templateUrl: './customise-form.component.html'
})
export class CustomiseFormComponent implements OnInit {
  modelForm: FormGroup;
  @Output() planDetails: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.modelForm = this.fb.group({
      name: ''
    });
  }

  ngOnInit() {
  }
}
