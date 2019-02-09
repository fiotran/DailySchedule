import { Injectable } from '@angular/core';
import { ActivitiesConst } from '../data/activities';
import { ActivityModel } from '../data/activity.model';


@Injectable()
export class ActivitiesService {
    activities: ActivityModel[] = [];
    dailySchedule: ActivityModel[] = [];

    constructor() {
    }

    public getActivities() {
        return this.activities = ActivitiesConst;
    }

    public addToPlan(item: ActivityModel) {
        this.dailySchedule.push(item);
    }

    public removeActivity(item: ActivityModel) {
        return this.activities = this.activities
            .filter((activity: ActivityModel) => activity !== item);
    }

    public updateActvitiesList(item: ActivityModel) {
        return this.activities.push(item);
    }

    public getPlan() {
        return this.dailySchedule;
    }

    public deletePlanItem(item: ActivityModel) {
        return this.dailySchedule = this.dailySchedule
            .filter((activity: ActivityModel) => activity !== item);
    }

    public clearPlan() {
        return this.dailySchedule = [];
    }

}
