import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivityModel } from 'src/app/data/activity.model';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {
  @Input() activitiesList: ActivityModel[];
  @Output() addItemPlan: EventEmitter<ActivityModel> = new EventEmitter<ActivityModel>();

  constructor(
    private activitiesService: ActivitiesService
  ) { }

  ngOnInit() {
    this.activitiesList = this.activitiesService.getActivities();
  }

  addToDailyPlan(activity: ActivityModel) {
    this.addItemPlan.emit(activity);
  }
}
