# Angular Reactive Forms

> Reactive forms provide a model-driven approach to handling form inputs whose values change over time. [https://angular.io/guide/reactive-forms](https://angular.io/guide/reactive-forms)
>
> They are built on observable base APIs \(async data flow\) to read continuous streams of values inputted to the form. It enables more customisation on complex forms and can use dynamically created inputs at run time. Reactive Forms also work well with unit testing.

Create a new customise-form component

```bash
ng g c activities/customise-form
```

Import FormModules and ReactiveFormsModule into the activities.modules.ts file

**...\daily-planner\src\app\activities\activities.module.ts**

```typescript
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

imports: [
    FormsModule,
    ReactiveFormsModule,
  ]
```

In the customise-form.component.ts page, add a modelForm variable with the type formGroup

**...\daily-planner\src\app\activities\customise-form\customise-form.component.ts**

```typescript
import { FormGroup, FormBuilder } from '@angular/forms';

modelForm: FormGroup;
```

Inject formBuilder - making sure to import it from the @angular/forms node-module

In the customise-form.component.ts file, set the formGroup with the formControlName

```typescript
constructor(private fb: FormBuilder) { 
    this.modelForm = this.fb.group({
      name: ''
    });
  }
```

Add the code to the customise-form.component.html file

**...\daily-planner\src\app\activities\customise-form\customise-form.component.html**

```markup
<section id="customise">
  <h1>Customise Form</h1>
  <form [formGroup]="modelForm">
    <p>
      <label>Plan name</label>
      <input type="text" formControlName="name">
    </p>
  </form>
</section>

```

Add the selector app-customise-form to view-plan.component.html

**...\daily-planner\src\app\activities\view-plan\view-plan.component.html**

```markup
<app-customise-form></app-customise-form>
```

