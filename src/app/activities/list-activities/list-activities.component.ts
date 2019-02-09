import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivityModel } from '../../data/activity.model';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html'
})
export class ListActivitiesComponent implements OnInit {
  @Input() activities: ActivityModel[];
  @Output() addPlan: EventEmitter<ActivityModel> = new EventEmitter<ActivityModel>();

  constructor() { }

  ngOnInit() {
  }

  addToPlan(activity: ActivityModel) {
    this.addPlan.emit(activity);
  }

}
