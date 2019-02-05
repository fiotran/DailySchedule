# Dependency Injection

>Services are something for Fiona to write about

1. Start by creating a service  

```bash
ng g service activities/services/activities
```
2.  In the activities service create a function getActivities(), that returns the service list

```typescript
import { Injectable } from '@angular/core';
import { ActivitiesConst } from '../../Data/activities';

@Injectable()
export class ActivitiesService {

  activities: any;
  constructor() { }

  public getActivities(){
    return (this.activities = ActivitiesConst)
  }

}
```
3. Add this new service as a dependency in the constructor of the activities.component.ts page

```typescript
constructor(
    private activitiesService: ActivitiesService
  ) {  }
```
4. Making sure to import the service

```typescript
import { ActivitiesService } from './services/activities.service';
```

5. Create a new function getList(), in the activities.component.ts page which uses the service to get the list.

```typescript
getList() {
    return this.activitiesService.getActivities();
  }
```


