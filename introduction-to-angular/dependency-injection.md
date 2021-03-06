# Dependency Injection

[Live code](https://stackblitz.com/edit/s3-lifecycle-hooks) to follow along from this section.

> DI is a software design pattern in which a class declares dependencies to other services rather than creating them itself and is wired into the Angular framework. Dependencies are services or objects that a class needs to perform its function. Components consume services; that is, you can _inject_ a service into a component, giving the component access to that service class.

[https://angular.io/guide/architecture-services\#dependency-injection-di](https://angular.io/guide/architecture-services#dependency-injection-di)

For modularity and reusability we will create an ActivitiesService where we will store the logic for our application.

```bash
ng g service services/activities --skipTests
```

In the activities service create a function getActivities\(\), that returns the service list

**...\daily-planner\src\app\services\activities.service.ts**

```typescript
import { Injectable } from '@angular/core';
import { ActivitiesConst } from '../data/activities';
import { ActivityModel } from '../data/activity.model';

@Injectable({
    providedIn: 'root'
})
export class ActivitiesService {
    activitiesList: ActivityModel[];

    constructor() { }

    public getActivities() {
        return this.activitiesList = ActivitiesConst;
    }
}
```

To use the service as a dependency, add the following to the constructor of the list-activities.component.ts page

**...\daily-planner\src\app\activities\list-activities\list-activities.component.ts**

Make sure to import the service

```typescript
import { ActivitiesService } from '../../services/activities.service';
```

remove the ActivitiesConst import statement

```typescript
import { ActivitiesConst } from '../../data/activities';
```

Inject the service into the constructor

```typescript
constructor(
    private activitiesService: ActivitiesService
  ) {  }
```

To use this service call it from ngOnInit - replacing the old call to the removed ActivitiesConst with the new one below.

```typescript
this.activitiesList = this.activitiesService.getActivities();
```

## Expected Outcome

The should still be displayed as per previous section.

## Code Changed

Changes in **activities.service.component.ts**

![Figure: Final list-activities.component.ts code](../.gitbook/assets/activitiesservice.PNG)

Changes in **list-activities.component.ts**

![Figure: Final list-activities.component.ts code](../.gitbook/assets/activitiesservice2.PNG)

Completed [live code](https://stackblitz.com/edit/s4-dependency-injection) for this section

