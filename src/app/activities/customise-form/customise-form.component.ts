import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { PlanModel } from '../../data/plan.model';


@Component({
  selector: 'app-customise-form',
  templateUrl: './customise-form.component.html'
})
export class CustomiseFormComponent implements OnInit, OnDestroy {
  modelForm: FormGroup;
  @Output() customiseFormChanges: EventEmitter<PlanModel> = new EventEmitter<PlanModel>();
  private formSubscription: Subscription;

  constructor(private fb: FormBuilder) {
    this.modelForm = this.fb.group({
      name: '',
      selectedDate: ''
    });
  }

  ngOnInit() {
    this.formSubscription = this.modelForm.valueChanges.subscribe(val => {
      this.customiseFormChanges.emit(val);
    });
  }

  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }
}
