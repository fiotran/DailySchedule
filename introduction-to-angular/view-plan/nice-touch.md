# Update Activities List

> when adding an activity to the plan it is removed from the activities list

Create a removeActivities\(\) function in the service

```typescript
public removeActivity(item: ActivityModel) {
  return this.activitiesList = this.activitiesList
      .filter((activity: ActivityModel) => activity !== item);
}
```

In the activities.component.ts page set the activities list to what is returned from our new service in the addToPlan function

```typescript
addToPlan(item: ActivityModel) {
    this.activitiesService.addToPlan(item);
    this.activities = this.activitiesService.removeActivity(item);
  }
```

