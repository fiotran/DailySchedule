import { Component, OnInit } from '@angular/core';
import { ActivityModel } from 'src/app/data/activity.model';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html'
})
export class ViewPlanComponent implements OnInit {
  planList: ActivityModel[];

  constructor(private activitesService: ActivitiesService) { }

  ngOnInit() {
    this.planList = this.activitesService.getPlan();
  }

}
