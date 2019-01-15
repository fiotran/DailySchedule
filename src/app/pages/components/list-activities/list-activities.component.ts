import { Component, OnInit, Input } from '@angular/core';
import { ActivityModel } from '../../data/activity.model';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {
  @Input() activities: ActivityModel[];

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit() {
  }

  addToPlan(item: ActivityModel) {
    this.activitiesService.addToPlan(item);
  }

}
