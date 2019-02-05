# Material Design Date Picker

> Text text text

1. To use the Material Design Date Picker we need to install some additional modules

```bash
npm install --save @angular/material @angular/cdk
```

2. These modules have some depenedencies which need to be added to the app.module.ts

```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule
  ],
```

3. We can now uncomment out the line in the css file - this is a pre-built material theme needed by the material design control

```css
@import '~@angular/material/prebuilt-themes/indigo-pink.css';
```

4. Import the MatDatepickerModule and the MatNativeDateModule in the activities.module.ts page

```typescript
import { MatIconModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

 imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    DragDropModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild(ACTIVITIES_ROUTES)
  ]
```

5. Add more code to the customise-form.component.html page - under the name control so we can use the mat-datepicker

```html
<p>
      <label for="selectDate">Plan date: </label>
            <input matInput [min]="minDate" [max]="maxDate" [matDatepicker]="picker" placeholder="Choose a date" formControlName="selectDate">
            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
            <mat-datepicker #picker></mat-datepicker>
      </p>

```

6. Add the selectDate control to the modelForm in the customise.component.ts file

```typescript
constructor(private fb: FormBuilder) {
    this.modelForm = this.fb.group({
      name: '',
      selectDate: ''
    });
  }
```

