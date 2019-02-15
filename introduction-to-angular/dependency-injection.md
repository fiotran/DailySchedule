# Dependency Injection

> DI is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself and is wired into the Angular framework. Dependencies are services or objects that a class needs to perform its function. Components consume services; that is, you can _inject_ a service into a component, giving the component access to that service class.
>
> [https://angular.io/guide/architecture-services\#dependency-injection-di](https://angular.io/guide/architecture-services#dependency-injection-di)

For modularity and reusability we will create an ActivitiesService where we will store the logic for our application.

```bash
ng g service services/activities
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

  getActivities() {
    return this.activitiesList = ActivitiesConst;
  }
}
```

To use the service as a dependency, add the following to the constructor of the list-activities.component.ts page

**...\daily-planner\src\app\activities\list-activities\list-activities.component.ts**

Make sure to import the service

```typescript
import { ActivitiesService } from 'src/app/services/activities.service';
```

Inject the service into the constructor

```typescript
constructor(
    private activitiesService: ActivitiesService
  ) {  }
```

To reference the getActivities\(\) function from the service, add the following to the list-activities.component.ts page.

**...\daily-planner\src\app\activities\list-activities\list-activities.component.ts**

```typescript
this.activitiesList = this.activitiesService.getActivities();
```



