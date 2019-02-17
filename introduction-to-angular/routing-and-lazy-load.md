# Routing and Lazy Loading

Because Angular is a framework to build a single page application, we need to be able to dynamically load different parts of the application only when requested.

Lazy loading is a technique used in Angular that allows JavaScript components to be asynchronously loaded when a specific route is activated. This speeds up the time it takes to load your application to a needs only basis.

Run the following commands in the command line \(CTRL + C for stop the serve\)

```bash
ng generate module activities --routing
```

```text
ng generate component activities
```

.**..\daily-planner\src\app\activities\activities-routing.module.ts** add the following code.

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities.component';

const routes: Routes = [{
  path: '',
  component: ActivitiesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }

```

{% hint style="info" %}
Here we insert the object with an empty path and importing the ActivitiesComponent
{% endhint %}

In the app-routing.module.ts file, update the const routes with the object as follows

**...\daily-planner\src\app\app-routing.module.ts**

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'activities',
  loadChildren: './activities/activities.module#ActivitiesModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

{% hint style="info" %}
when working with routing always re serve
{% endhint %}

