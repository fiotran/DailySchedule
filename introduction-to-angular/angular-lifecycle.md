# Angular Lifecycle

Every component has a lifecycle managed by Angular. We have access to key moments such as ngOnChanges\(\) or ngOnInit\(\). For more information, visit the official website

[https://angular.io/guide/lifecycle-hooks](https://angular.io/guide/lifecycle-hooks)

In this section, we are going to use ngOnInit\(\) to set the list of activities

Generate the list-activities components

```text
ng generate component activites/list-activities
```

In list-activities.component.ts add the following code

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivityModel } from 'src/app/data/activity.model';
import { ActivitiesConst } from 'src/app/data/activities.model';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {
  activitiesList: ActivityModel[];

  constructor() {}

  ngOnInit() {
    this.activitiesList = ActivitiesConst;
  }
}
```

In list-activities.component.html add the following code

```markup
<section id="activity-list">
  <h1> List of activities</h1>
  <article class="activity-item" *ngFor="let activity of activitiesList">
    <i class="fas {{activity.image}} circle-icon"></i>
    <h2>{{activity.name}}</h2>
    <button class="btn-add">+ Add</button>
  </article>
</section>
```

Now add the &lt;app-list-activities&gt; selector to the activities.component.html

```markup
<app-list-activities></app-list-activities>
```

