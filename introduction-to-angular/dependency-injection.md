# Dependency Injection

> DI is wired into the Angular framework and used everywhere to provide new components with the services or other things they need. Components consume services; that is, you can _inject_ a service into a component, giving the component access to that service class.
>
> [https://angular.io/guide/architecture-services\#dependency-injection-di](https://angular.io/guide/architecture-services#dependency-injection-di)

For modularity and reusability we will create an ActivitiesService where we will store the logic for our application

```bash
ng g service services/activities
```

In the activities service create a function getActivities\(\), that returns the service list

```typescript
import { Injectable } from '@angular/core';
import { ActivitiesConst } from '../data/activities.model';
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

```typescript
constructor(
    private activitiesService: ActivitiesService
  ) {  }
```

Making sure to import the service

```typescript
import { ActivitiesService } from './services/activities.service';
```

To reference the getActivities\(\) function from the service, create a new function getList\(\) in the list-activities.component.ts page and call the function via the injected service.

```typescript
getList() {
    return this.activitiesService.getActivities();
}
```

