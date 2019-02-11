# Routing and Lazy Loading

As Angular builds a single page application, the concept of lazy loading ensures modules and components can be asynchronously loaded when the route is activated. This speeds up the time it takes to load your application to a needs only basis.

Run the following commands in the command line

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
Here we are creating a constant variable called ACTIVITIES\_ROUTE and setting an empty path and importing the ActivitiesComponent
{% endhint %}

In the app.routing.ts file, update the const routes with the object as follows

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

**..\daily-planner\src\app\app.component.html** add the following between the header and the router

```markup
<h2> Welcome the the daily planner</h2>
<a routerLink="/activities">click here go the the activities section</a>
```

{% hint style="info" %}
when working with routing always re serve
{% endhint %}

