# View Plan

> Some text here from fiona

1. Lets create a view-plan component

```bash
ng g c activities/view-plan
```

2. In the activities.service.ts file create a new public method getPlan() which returns our list of activities.

```typescript
public getPlan(){
  return this.dailySchedule;
}
```

3. Inject the activities service into the view-plan.component.ts by adding it to the constructor

```typescript
constructor(private activitesService: ActivitiesService) { }
```

4. Declare a variable planList of type ActivityModel array

```typescript
planList: ActivityModel[] = [];
```

5. In ngOnInit() call the function getPlan() and assign it to planList variable.

```typescript
  ngOnInit() {
    this.planList = this.activitesService.getPlan();
  }
```

6. In the view-plan.component.html file add 

```html
<div id="daily-schedule">
  <h1>Schedule a plan</h1>
  <div *ngIf="planList.length <= 0">
    The daily schedule is currently empty
  </div>
  <div class="daily-schedule-list" *ngFor="let item of planList">
    <div class="daily-schedule-item">
      <h2>{{ item.name }}</h2>
      <i class="fas {{ item.image }} circle-icon"></i>
      <button class="btn-remove" (click)="deletePlan(item)">
        ×
      </button>
    </div>
  </div>
</div>
```

7. Add the app-view-plan selector to the activities.component.html

```html
<app-view-plan></app-view-plan> 
```

8. Add the ListActivitiesComponent to the declarations in the activities.module.ts file

```typescript
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
```

```typescript
@NgModule({
  declarations: [
    ActivitiesComponent,
    ViewPlanComponent,
    ListActivitiesComponent
  ],
```

9. Create a new button which we will use to clear the list in the view-plan.component.html page

```typescript
<button id="btn-reset" class="screen-only" (click)="clearPlan()">
        Reset
      </button>
```

10. Write two functions in the service - one to delete a plan item and one to clear the list

```typescript
public deletePlanItem(item: ActivityModel) {
  return this.dailySchedule = this.dailySchedule
      .filter((activity: ActivityModel) => activity !== item);
}
```

```typescript
public clearPlan() {
  return this.dailySchedule = [];
}
```

11. In the view-plan.component.ts file call these new funtions - making sure the function name is the same as the click action on the button

```typescript
deletePlan(item: ActivityModel) {
    this.planList = this.activitesService.deletePlanItem(item);
  }
```

```typescript
clearPlan() {
    this.planList = this.activitesService.clearPlan();
  }

```

