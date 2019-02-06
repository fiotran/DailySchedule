# Angular Reactive Forms

> lots of text here about forms

1. Create a new component 

```bash
ng g c activities/customise-form
```

1. Import the ReactiveFormsModule in the activities.modules.ts file

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

1. In the customise.component.ts page add a modelForm variable with the type formGroup

```typescript
modelForm: FormGroup;
```

1. Inject formBuilder - making sure to import it from the @angular/forms node-module

```typescript
constructor(private fb: FormBuilder) { }
```

1. Add the code to the customise.component.html file

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

1. In the customise.component.ts file set the formGroup with the formControlName

```typescript
constructor(private fb: FormBuilder) { 
    this.modelForm = this.fb.group({
      name: ''
    });
  }
```

1. Add the selector to view-plan.component.html

```markup
<app-customise-form></app-customise-form>
```

{% hint style="info" %}
Make sure to ng serve --open regularly so you can see your changes.
{% endhint %}

