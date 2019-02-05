# nice touch

> when adding an activity to the plan it is removed from the activities list

1.	Create a removeActivities() function in the service

```typescript
public removeActivity(item: ActivityModel) {
  return this.activities = this.activities
      .filter((activity: ActivityModel) => activity !== item);
}
```

2.	In the activities.component.ts page set the activities list to what is returned from our new service in the addToPlan function

```typescript
addToPlan(item: ActivityModel) {
    this.activitiesService.addToPlan(item);
    this.activitiesList = this.activitiesService.removeActivity(item);
  }
```
