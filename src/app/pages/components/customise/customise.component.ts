import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customise',
  templateUrl: './customise.component.html'
})
export class CustomiseComponent implements OnInit {
  modelForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.modelForm = this.fb.group({
      name: "",
      selectDate: ""
    })
  }

}
