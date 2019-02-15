# Subscribe, Unsubscribe, OnDestroy

> Observable is a way of managing streams of multiple values or data. It is not specific to Angular but a new standard included in the ES7 release. There are many operators to handle observables found here [https://rxjs-dev.firebaseapp.com/api](https://rxjs-dev.firebaseapp.com/api) 
>
> [https://angular.io/guide/observables-in-angular](https://angular.io/guide/observables-in-angular)

We can subscribe to an observable we need to unsubscribe to release the memory allocation otherwise we will experience memory leaks on our application.

**In this section we will recap on output emitter and subscribe to changes on our reactive form**

Emit any changes from the form \(customise-form.component.ts\) back to the parent 

```typescript
@Output() planDetails: EventEmitter<any> = new EventEmitter<any>();
```

In ngOnInit\(\) subscribe to the form changes

```typescript
ngOnInit() {
    this.subscription = this.modelForm.valueChanges.subscribe(val => {
      this.planDetails.emit(val);
    });
  }
  
  ngOnDestroy() {
    this.subscription.valueChanges.unsubscribe();
  }
```

Add output parameters to the app-customise-form selector in view-plan.compnent.html

```markup
<app-customise-form (planDetails)="getPlanDetails($event)"></app-customise-form>
```

Create getPlanDetails\(\) inside view-plan.component.ts 

```typescript
import { PlanModel } from 'src/app/data/plan.model';

customisedValues: PlanModel;
```

```typescript
getPlanDetails(plan: PlanModel) {
    this.customisedValues = plan;
  }
```

Create a plan.model.ts file in the data folder

```typescript
export class PlanModel {
    public id: number;
    public name: string;
    public selectedDate: string;
}
```

In the view-plan.components.html above the daily-schedule-list div class

```markup
<div *ngIf="customisedValues">
  <h2>{{ customisedValues.name }} plan</h2>
  <p>{{ customisedValues.selectedDate | date: 'MMMM d, y' }}</p>
</div>
```

[https://angular.io/guide/pipes](https://angular.io/guide/pipes)

