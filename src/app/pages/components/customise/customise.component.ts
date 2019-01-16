import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customise',
  templateUrl: './customise.component.html'
})
export class CustomiseComponent implements OnInit {
  modelForm: any;
  @Output() planDetails: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.modelForm = this.fb.group({
      name: '',
      selectDate: ''
    });

    this.modelForm.valueChanges.subscribe(v => {
      this.planDetails.emit(v);
    });
  }

}
