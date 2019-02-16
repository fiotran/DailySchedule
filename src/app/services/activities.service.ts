import { Injectable } from '@angular/core';
import { ActivitiesConst } from '../data/activities';
import { ActivityModel } from '../data/activity.model';

@Injectable({
    providedIn: 'root'
})
export class ActivitiesService {
    activitiesList: ActivityModel[];
    dailySchedule: ActivityModel[] = [];

    constructor() { }

    public getActivities() {
        return this.activitiesList = ActivitiesConst;
    }

    public addToPlan(item: ActivityModel) {
        this.dailySchedule.push(item);
    }

    public getPlan() {
        return this.dailySchedule;
    }
}
