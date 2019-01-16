import { Injectable } from '@angular/core';
import { ActivitiesConst } from '../data/activities';
import { ActivityModel } from '../data/activity.model';


@Injectable()
export class ActivitiesService {
    activities: any;
    dailySchedule: ActivityModel[] = [];

    constructor() {
    }

    public getActivities() {
        return this.activities = ActivitiesConst;
    }

    public addToPlan(item) {
        this.dailySchedule.push(item);
    }

    public removeActivity(item) {
        return this.activities = this.activities
            .filter((activity: ActivityModel) => activity !== item);
    }

    public getPlan() {
        return this.dailySchedule;
    }

    public deletePlanItem(item) {
        return this.dailySchedule = this.dailySchedule
            .filter((activity: ActivityModel) => activity !== item);
    }

    public clearPlan() {
        return this.dailySchedule = [];
    }

}
