# Angular Reactive Forms

> Provides an observable base API \(async data flow\) to read continuous stream of values inputted to forms that allows more customisation on complex forms.

Create a new component 

```bash
ng g c activities/customise-form
```

Import the ReactiveFormsModule in the activities.modules.ts file

**...\daily-planner\src\app\activities\activities.module.ts**

```typescript
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    RouterModule.forChild(ACTIVITIES_ROUTES)
  ]
```

In the customise.component.ts page add a modelForm variable with the type formGroup

**...\daily-planner\src\app\activities\customise\customise.component.ts**

```typescript
modelForm: FormGroup;
```

Inject formBuilder - making sure to import it from the @angular/forms node-module

```typescript
constructor(private fb: FormBuilder) { }
```

In the customise.component.ts file set the formGroup with the formControlName

```typescript
constructor(private fb: FormBuilder) { 
    this.modelForm = this.fb.group({
      name: ''
    });
  }
```

Add the code to the customise.component.html file

**...\daily-planner\src\app\activities\customise\customise.component.html**

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

Add the selector to view-plan.component.html

**...\daily-planner\src\app\activities\view-plan\customise.component.ts**

```markup
<app-customise-form></app-customise-form>
```

{% hint style="info" %}
Make sure to ng serve --open regularly so you can see your changes.
{% endhint %}

