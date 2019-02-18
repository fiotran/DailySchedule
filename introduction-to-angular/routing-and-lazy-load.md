# Routing and Lazy Loading

Angular is a framework to build a single page application \(SPA\), but we have the ability to dynamically load different parts of the application only when requested. This is called lazy loading.

Lazy loading is a technique used in Angular to download modules only when a specific route is activated. This speeds up the time it takes to initially load your application.

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

In the app-routing.module.ts file, update the constant routes with the object as follows.

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

As you can see above, Angular routes accepts an array so you can specify as many routes as needed

{% hint style="info" %}
when working with routing always re serve
{% endhint %}

