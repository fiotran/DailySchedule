# S1.5 Inputs, Outputs and EventEmitters

> To communicate between parent and child components Angular offers @Inputs\(\) and @Outputs\(\) decorators with the EventEmitter class

Now that we have the activities variable in list-activities.component.ts we are going to send the data to the child component list-components.ts

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

In the activities.component.html file add activitiesList as an input paramater on the selector 

```markup
<app-list-activities [activitiesList]="activities"></app-list-activities>
```

To listen to the variable we add an @Input decorator in the list-activities.component.ts file

```typescript
import { Input } from '@angular/core';
```

```typescript
@Input() activitiesList: ActivityModel[];
```

Remove the code from the ngOnInit\(\) function that we added previously - serve the application and check the list is displaying as expected.

> Image of page here ????

Back in the list-activities.component.html file add a click event listener to the add button

```markup
<button class="btn-add" (click)="addToDailySchedule(activity)">+ Add</button>
```

{% hint style="info" %}
It is generally a good idea to let the feature component do the job of keeping a record of the list for the plan
{% endhint %}

> To use @Output\(\),  let's add EventEmitter and Output to the Angular core import statement and bind a new instance of the EventEmitter

In the list-activities.component.ts file add the following code - this is an emitter and will emit the selected item back to the parent page

```typescript
import { EventEmitter, Output } from '@angular/core';
```

```typescript
@Output() addPlan: EventEmitter<ActivityModel> = new EventEmitter<ActivityModel>();
```

Add a new function addToDailySchedule\(activity\) in the list-activities.component.ts page 

```typescript
addToDailySchedule(activity) {
    this.addPlan.emit(activity);
}
```

In the activities.component.html file add an output paramater on the selector - the round brackets indicate that we are sending values out of the child component.

```markup
<app-list-activities [activitiesList]="activities" (addPlan)="addToPlan($event)"></app-list-activities>
```

Open the file src/app/services/activities.service.ts and add a dailySchedule array with type ActivityModel\[\] and create an addToPlan function that will push the item into the dailySchedule array

```typescript
dailySchedule: ActivityModel[] = [];
```

```typescript
public addToPlan(item: ActivityModel) {
    this.dailySchedule.push(item);
}
```

In the activities.component.ts file create a function to call the function just created

**.../src/app/activities/activities.component.ts**

```typescript
addToPlan(item: ActivityModel) {
    this.activitiesService.addToPlan(item);
  }
```

