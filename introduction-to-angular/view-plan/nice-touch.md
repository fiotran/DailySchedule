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
     return this.activities.push(item);
 }
```

In the activities.component.ts page set the activities list to what is returned from our new service in the addToPlan function

**.../src/app/activities/activities.component.ts**

```typescript
addToDailySchedule(item: ActivityModel) {
    this.activitiesService.addToPlan(item);
    this.activities = this.activitiesService.removeActivity(item);
}

deleteFromDailySchedule(item: ActivityModel) {
    this.planList = this.activitesService.deletePlanItem(item);
    this.updateActivitiesList.emit(item);
}
```

Add on click for the delete button

**.../src/app/activities/view-plan/view-plan.component.html**

```markup
<button class="btn-remove" (click)="deleteFromDailySchedule(item)">
     ×
</button>
```

**.../src/app/activities/view-plan/view-plan.component.html**

```typescript
import {
  Output,
  EventEmitter,
} from '@angular/core';
```

```typescript
 @Output() updateActivitiesList: EventEmitter<ActivityModel> = new EventEmitter<ActivityModel>();
```

**.../src/app/activities/activities/activities.component.html**

```markup
<app-view-plan (updateActivitiesList)="updateActivities($event)"></app-view-plan>
```

in the service add

**.../src/app/services/activities.service.ts**

```typescript
updateActivities(item: ActivityModel) {
   this.activitiesService.updateActvitiesList(item);
}
```

