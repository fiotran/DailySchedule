# View Plan Component and Add to Plan

> Some text here from fiona

Lets create a view-plan component

```bash
ng g c activities/view-plan
```

In the activities.service.ts file create a new public method getPlan\(\) which returns our list of activities.

```typescript
public getPlan(){
  return this.dailySchedule;
}
```

Inject the activities service into the view-plan.component.ts by adding it to the constructor

```typescript
import { ActivityModel } from 'src/app/data/activity.model';
import { ActivitiesService } from 'src/app/services/activities.service';
```

```typescript
constructor(private activitesService: ActivitiesService) { }
```

Declare a variable planList of type ActivityModel array

```typescript
planList: ActivityModel[] = [];
```

In ngOnInit\(\) call the function getPlan\(\) and assign it to planList variable.

```typescript
  ngOnInit() {
    this.planList = this.activitesService.getPlan();
  }
```

In the view-plan.component.html file add 

```markup
<div id="daily-schedule">
  <h1>Schedule a plan</h1>
  <div *ngIf="planList.length <= 0">
    <p>The daily schedule is currently empty</p>
  </div>
  <div class="daily-schedule-list" *ngFor="let item of planList">
    <div class="daily-schedule-item">
      <h2>{{ item.name }}</h2>
      <p><label>Time: </label>
					<input type="text"></p>
      <i class="fas {{ item.image }} circle-icon"></i>
      <button class="btn-remove" (click)="deletePlan(item)">
        ×
      </button>
    </div>
  </div>
  <button id="btn-print" class="screen-only">Print</button>
  <button id="btn-reset" class="screen-only">Reset</button>
</div>
```

Add the app-view-plan selector to the activities.component.html

```markup
<app-view-plan></app-view-plan>
```

Add the ListActivitiesComponent to the declarations in the activities.module.ts file

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

