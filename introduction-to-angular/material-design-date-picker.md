# Material Design Date Picker

> Angular Material is a component library based on Google's Material Design, and is built by the Google team to integrate seamlessly with Angular.

To use the Angular Material Date Picker we need to install some additional modules

```bash
npm install --save @angular/material @angular/cdk
```

These modules have some dependencies which need to be added to the app.module.ts

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing';

imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
```

We can now uncomment out the line in the css file - this is a pre-built Angular Material theme that includes all of the styles for core Angular Material components

```css
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
```

Import the MatDatepickerModule and the MatNativeDateModule in the activities.module.ts page

```typescript
import {
    MatDatepickerModule,
    MatNativeDateModule
} from '@angular/material';

@NgModule({
imports: [
    CommonModule,
    ActivitiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
]
```

Add more code to the customise-form.component.html page - under the closing &lt;/p&gt; tag so we can use the mat-datepicker

```markup
<p>
   <label for="selectDate">Plan date: </label>
   <input matInput [min]="minDate" [max]="maxDate" [matDatepicker]="picker" placeholder="Choose a date" formControlName="selectedDate">
   <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
   <mat-datepicker #picker></mat-datepicker>
</p>
```

Add the selectedDate control to the modelForm in the customise-form.component.ts file

```typescript
constructor(private fb: FormBuilder) {
    this.modelForm = this.fb.group({
      name: '',
      selectedDate: ''
    });
  }
```

