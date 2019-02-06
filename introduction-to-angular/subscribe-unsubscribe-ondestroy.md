# Subscribe, Unsubscribe, OnDestroy

**recap on output emitter and subscribing the modelForm value changes**

Emit any changes from the form \(customise-form.component.ts\) back to the parent 

```typescript
@Output() planDetails: EventEmitter<any> = new EventEmitter<any>();
```

In ngOnInit\(\) subscribe to the form changes

```typescript
ngOnInit() {
    this.modelForm.valueChanges.subscribe(val => {
      this.planDetails.emit(val);
    });
  }
```

Add output parameters to the app-customise-form selector in view-plan.compnent.html

```markup
<app-customise-form (planDetails)="getPlanDetails($event)"></app-customise-form>
```

Create getPlanDetails\(\) inside view-plan.component.ts 

```typescript
getPlanDetails(plan: PlanModel) {
    this.customisedValues = plan;
  }
```

Create a plan.model.ts file in the data folder

```text
export class PlanModel {
    public id: number;
    public name: string;
    public selectDate: string;
}
```

In the view-plan.components.html 

```markup
<div *ngIf="customisedValues">
  <h2>{{ customisedValues.name }} plan</h2>
  <p>{{ customisedValues.selectedDate | date: 'MMMM d, y' }}</p>
</div>
```

> Explain the angular pipe

