import { Component, OnInit } from '@angular/core';
import { ActivityModel } from 'src/app/data/activity.model';
import { ActivitiesConst } from 'src/app/data/activities';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {
  activitiesList: ActivityModel[];

  constructor() { }

  ngOnInit() {
    this.activitiesList = ActivitiesConst;
    console.log(this.activitiesList);

  }
}
