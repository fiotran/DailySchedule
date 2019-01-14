import { Injectable } from '@angular/core';
import { ActivitiesConst } from '../data/activities';


@Injectable()
export class ActivitiesService {
    activities: any;
    dailySchedule:  { "id": number; "name": string; "image": string; }[] = [];

    constructor() {
    }

    getActivities() {
        this.activities = ActivitiesConst;
        return this.activities;
    }

    public addActivity(item) {
        this.activities = this.activities.push(item);
    }

    public addToPlan(item) {
        this.dailySchedule.push(item)
    }

    public getPlan() {
        return this.dailySchedule;
    }

}