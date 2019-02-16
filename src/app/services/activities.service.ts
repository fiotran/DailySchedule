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

    public removeActivity(item: ActivityModel) {
        return this.activitiesList = this.activitiesList
            .filter((activity: ActivityModel) => activity !== item);
    }

    public updateActvitiesList(item: ActivityModel) {
        return this.activitiesList.push(item);
    }

    public deletePlanItem(item: ActivityModel) {
        return this.dailySchedule = this.dailySchedule
            .filter((activity: ActivityModel) => activity !== item);
    }

    public clearPlan() {
        return this.dailySchedule = [];
    }
}
