import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../services/activities.service';
import { ActivityModel } from '../data/activity.model';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html'
})
export class ActivitiesComponent implements OnInit {
  activities: ActivityModel[];

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit() {
    this.activities = this.getList();
  }

  getList() {
    return this.activitiesService.getActivities();
  }

  addToPlan(item: ActivityModel) {
    this.activitiesService.addToPlan(item);
    this.activities = this.activitiesService.removeActivity(item);
  }

  updateActivities(item: ActivityModel) {
    this.activitiesService.updateActvitiesList(item);
  }
}
