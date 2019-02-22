import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../services/activities.service';
import { ActivityModel } from '../data/activity.model';
import { PlanModel } from '../data/plan.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html'
})
export class ActivitiesComponent implements OnInit {
  activities: ActivityModel[];
  customisedValues: PlanModel;

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit() {
    this.activities = this.getList();
  }

  getList() {
    return this.activitiesService.getActivities();
  }

  addToPlan(item: ActivityModel) {
    this.activitiesService.addToDailyPlanList(item);
    this.activities = this.activitiesService.removeActivity(item);
  }

  updateActivities(item: ActivityModel) {
    this.activitiesService.updateActivitiesList(item);
  }

  reload() {
    this.activities = this.getList();
  }

  getPlanDetails(plan: PlanModel) {
    this.customisedValues = plan;
  }
}
