# Material Design Date Picker

> Component library based on the Google designed provided by the core Google team.

To use the Material Design Date Picker we need to install some additional modules

```bash
npm install --save @angular/material @angular/cdk
```

These modules have some depenedencies which need to be added to the app.module.ts

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing';

imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
```

We can now uncomment out the line in the css file - this is a pre-built material theme needed by the material design control

```css
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
```

Import the MatDatepickerModule and the MatNativeDateModule in the activities.module.ts page

```typescript
import {
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
} from '@angular/material';

@NgModule({
imports: [
    CommonModule,
    ActivitiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
]
```

Add more code to the customise-form.component.html page - under the name input so we can use the mat-datepicker

```markup
<p>
      <label for="selectDate">Plan date: </label>
            <input matInput [min]="minDate" [max]="maxDate" [matDatepicker]="picker" placeholder="Choose a date" formControlName="selectedDate">
            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
      </p>
```

Add the selectDate control to the modelForm in the customise-form.component.ts file

```typescript
constructor(private fb: FormBuilder) {
    this.modelForm = this.fb.group({
      name: '',
      selectedDate: ''
    });
  }
```

