# S1.5 Inputs, Outputs and EventEmitters

> To communicate between parent and child components, Angular offers @Inputs\(\) and @Outputs\(\) decorators with the EventEmitter class.

Now that we have the activities variable in list-activities.component.ts we are going to send the data to the child component list-components.ts as a Input

## Input decorator

**...\daily-planner\src\app\activities\activities.component.ts**

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../services/activities.service';
import { ActivityModel } from '../data/activity.model';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html'
})
export class ActivitiesComponent implements OnInit {
  activities: ActivityModel[];

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit() {
    this.activities = this.getList();
  }

  getList() {
    return this.activitiesService.getActivities();
  }
}
```

In the activities.component.html file add activities as an input parameter on the selector

**...\daily-planner\src\app\activities\activities.component.html**

```markup
<app-list-activities [activitiesList]="activities"></app-list-activities>
```

To listen to the variable we import Input add an @Input decorator in the list-activities.component.ts file

**...\daily-planner\src\app\activities\list-activities\list-activities.component.ts**

```typescript
import { Input } from '@angular/core';
```

just inside the export class add @Input\(\) to the beginning of the activitiesList array

```typescript
@Input() activitiesList: ActivityModel[];
```

In the **...\daily-planner\src\app\activities\list-activities\list-activities.component.ts** remove the ActivitiesService that we added previously - serve the application and check the list is displaying as expected.

## Output Decorator

Back in the list-activities.component.html file add a click event listener to the add button

**...\daily-planner\src\app\activities\list-activities\list-activities.component.html**

```markup
<button class="btn-add" (click)="addToDailyPlan(activity)">+ Add</button>
```

{% hint style="info" %}
It is generally a good idea to let the feature component do the job of keeping a record of the list for the plan
{% endhint %}

> To use @Output\(\), let's add EventEmitter and Output to the Angular core import statement and bind a new instance of the EventEmitter

In the list-activities.component.ts file add the following code - this is an emitter and will emit the selected item back to the parent page

**...\daily-planner\src\app\activities\list-activities\list-activities.component.ts**

```typescript
import { EventEmitter, Output } from '@angular/core';
```

```typescript
@Output() addItemPlan: EventEmitter<ActivityModel> = new EventEmitter<ActivityModel>();
```

Add a new function addToDailyPlan\(activity\) in the list-activities.component.ts page

```typescript
addToDailyPlan(activity: ActivityModel) {
    this.addItemPlan.emit(activity);
}
```

In the activities.component.html file add an output parameter on the selector - the round brackets indicate that we are sending values out of the child component.

**...\daily-planner\src\app\activities\activities.component.html**

```markup
<app-list-activities [activitiesList]="activities" (addItemPlan)="addToPlan($event)"></app-list-activities>
```

Open the file src/app/services/activities.service.ts and add a dailyPlanList array with type ActivityModel\[\] and create an addToDailyPlanList function that will push the item into the dailyPlanList array

In the activities.component.ts file create a function to call the function just created

**.../src/app/activities/activities.component.ts**

```typescript
addToPlan(item: ActivityModel) {
    this.activitiesService.addToDailyPlanList(item);
}
```

**...\daily-planner\src\app\services\activities.service.ts**

```typescript
dailyPlanList: ActivityModel[] = [];
```

```typescript
public addToDailyPlanList(item: ActivityModel) {
    this.dailyPlanList.push(item);
}
```

