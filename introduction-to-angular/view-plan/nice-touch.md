# Update Activities List and remove from daily schedule button

After adding the activity to the daily schedule, remove it from the activities list and if it's removed for the daily schedule plan add it back to the activities list.

Create a removeActivities\(\) and an updateActivitiesList\(\) function

.**../src/app/services/activities.service.ts**

```typescript
public removeActivity(item: ActivityModel) {
 return this.activitiesList = this.activitiesList
   .filter((activity: ActivityModel) => activity !== item);
}

public updateActvitiesList(item: ActivityModel) {
 return this.activitiesList.push(item);
}

public deletePlanItem(item: ActivityModel) {
 return this.dailyPlanList = this.dailyPlanList
    .filter((activity: ActivityModel) => activity !== item);
}
```

In the activities.component.ts page set the activities list to what is returned from our new service in the addToDailyPlanList function

Add on click for the delete button

**.../src/app/activities/view-plan/view-plan.component.html**

```markup
<button class="btn-remove" (click)="deleteFromDailyPlan(item)">
     ×
</button>
```

**.../src/app/activities/view-plan/view-plan.component.ts**

```typescript
import {
  Output,
  EventEmitter,
} from '@angular/core';
```

```typescript
 @Output() updateActivitiesList: EventEmitter<ActivityModel> = new EventEmitter<ActivityModel>();
```

```typescript
deleteFromDailyPlan(item: ActivityModel) {
    this.planList = this.activitiesService.deletePlanItem(item);
    this.updateActivitiesList.emit(item);
}
```

**.../src/app/activities/activities.component.ts**

```typescript
addToPlan(item: ActivityModel) {
    this.activitiesService.addToDailyPlanList(item);
    this.activities = this.activitiesService.removeActivity(item);
}

updateActivities(item: ActivityModel) {
   this.activitiesService.updateActvitiesList(item);
}
```

**.../src/app/activities/activities/activities.component.html**

```markup
<app-view-plan (updateActivitiesList)="updateActivities($event)"></app-view-plan>
```

