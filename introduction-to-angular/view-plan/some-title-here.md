# Reset Daily Schedule and Activities list

> Let's practise sending a reload message back to the parent to get a new activities list.

In this section, we will emit a message to the parent to clear/reset the daily schedule list

add \(click\)="resetView\(\)" to the reset button

**.../src/app/activities/view-plan/view-plan.component.html**

```markup
<button id="btn-reset" class="screen-only" (click)="resetView()">
    Reset
</button>
```

then add EventEmitter and Output to the @angular/core import statement

**.../src/app/activities/view-plan/view-plan.component.ts**

In the view-plan.component.ts file create an @Output property for the reload message

```typescript
@Output() reloadActivities: EventEmitter<boolean> = new EventEmitter<boolean>();
```

and add this.reloadActivities.emit\(true\); to the clearPlan method

```typescript
resetView() {
    this.planList = this.activitiesService.clearPlan();
    this.reloadActivities.emit(true);
}
```

add new method to the service

**.../src/app/services/activities.service.ts**

```typescript
public clearPlan() {
    return this.dailySchedule = [];
}
```

Add output parameters to the app-view-plan selector in the activities.component.html

**.../src/app/activities/activities.component.html**

```markup
<app-view-plan (reloadActivities)="reload()"></app-view-plan>
```

then in the activities.component.ts create a reload function and call getlist\(\)

**.../src/app/activities/activities.component.ts**

```typescript
reload() {
    this.activities = this.getList();
}
```

