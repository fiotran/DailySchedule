# Some Title Here

> Lets practice sending a reload message back to the parent to get a new activities list

In the view-plan.component.ts file create a variable for the reload message

```typescript
@Output() reloadActivities: EventEmitter<boolean> = new EventEmitter<boolean>();
```

then add EventEmitter and Output to the @angular/core import statement

```typescript
import ( Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
```

and add this.reloadActivities.emit\(true\); to the clearPlan method

```typescript
clearPlan() {
    this.planList = this.activitesService.clearPlan();
    this.reloadActivities.emit(true);
  }
```

Add output parameters to the app-view-plan selector in the activities.component.html

```markup
<app-view-plan (reloadActivities)="reload()"></app-view-plan>
```

then in the activities.component.ts create a reload function and call getlist\(\)

```typescript
reload() {
    this.activitiesList = this.getList();
  }
```

