# Inputs, Outputs and EventEmitters

> Fiona text - get writing about stuff

Now that we have the activities variable in activities.component.ts we are going to send it to the child component list-components.ts

1. In the activities.component.html file add activitiesList as an input paramater on the selector 

```html
<app-list-activities [activities]="activities"></app-list-activities>
```

2. To listen to the variable we add an @Input decorator in the list-activities.component.ts file

```typescript
@Input() activitiesList: ActivityModel[]; 
```

3. Remove the code from the ngOnInit() function that we added previously - serve the application and check the list is displaying as expected.

> Image of page here ????

4. Back in the activities-list.component.html file add a click event listener to the add button

```html
<button class="btn-add" (click)="addToPlan(activity)">+ Add</button>
```
{% hint style="info" %} It is generally a good idea to let the feature component do the job of keeping a record of the list for the plan {% endhint %}

> Emitting stuff...

5. In the list-activities.component.ts file add the following code - this is an emitter and will emit the selected item back to the parent page

```typescript
@Output() addPlan: EventEmitter<ActivityModel> = new EventEmitter<ActivityModel>();
```

6. Add a new function addToPlan(activity) in the list-activities.component.ts page 

```typescript
addToPlan(activity) {
    this.addPlan.emit(activity);
  }
```

7.  In the activities.component.html file add an output paramater on the selector - the round brackets indicate that we are sending values out of the child component.

```html
<app-list-activities [activities]="activities" (addPlan)="addToPlan($event)"></app-list-activities>
```

8. Open the service and add a dailySchedule array with type ActivityModel[] and create an addToPlan function that will push the item into the dailySchedule array

```typescript
dailySchedule: ActivityModel[] = [];
```

```typescript
public addToPlan(item: ActivityModel) {
    this.dailySchedule.push(item);
}
```

9. In the activities.component.ts file create a function to call the function just created

```typescript
addToPlan(item: ActivityModel) {
    this.activitiesService.addToPlan(item);
  }

```


