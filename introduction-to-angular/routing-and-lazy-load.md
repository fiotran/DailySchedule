# Routing and Lazy Loading

Because Angular is a framework to build a single page application, dynamically loading different parts of the application as needed is a core concept and feature so in this section we'll discuss lazy loading.

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
  declarations: [
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
```

{% hint style="info" %}
Here we are creating a constant variable called ACTIVITIES\_ROUTE and setting an empty path and importing the ActivitiesComponent
{% endhint %}

In the app-routing.module.ts file, update the const routes with the object as follows

**...\daily-planner\src\app\app-routing.module.ts**

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: 'activities',
    loadChildren: './activities/activities.module#ActivitiesRoutingModule'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
```

**..\daily-planner\src\app\app.component.html** add the following between the header and the router

```markup
<div id="menu">
  <h2> Welcome the the daily planner</h2>
  <a routerLink="/activities">click here go the the activities section</a>
</div>
```

{% hint style="info" %}
when working with routing always re serve
{% endhint %}

