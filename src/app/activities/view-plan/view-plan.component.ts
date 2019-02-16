import {
  Component, OnInit, Output,
  EventEmitter,
} from '@angular/core';
import { ActivityModel } from 'src/app/data/activity.model';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html'
})
export class ViewPlanComponent implements OnInit {
  planList: ActivityModel[];
  @Output() updateActivitiesList: EventEmitter<ActivityModel> = new EventEmitter<ActivityModel>();


  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit() {
    this.planList = this.activitiesService.getPlan();
  }

  deleteFromDailySchedule(item: ActivityModel) {
    this.planList = this.activitiesService.deletePlanItem(item);
    this.updateActivitiesList.emit(item);
  }

}
