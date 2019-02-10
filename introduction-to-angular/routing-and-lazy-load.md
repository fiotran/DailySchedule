# Routing and Lazy Loading

As Angular builds a single page application, the concept of lazy loading ensures modules and components can be asynchronously loaded when the route is activated. This speeds up the time it takes to load your application to a needs only basis.

Run the following commands in the command line

```bash
ng generate module activities --routing
```

```text
ng generate component activities
```

Manually create activities.routing.ts file and then add the following code. 

```typescript
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: './activities/activities.module#ActivitiesModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

```

{% hint style="info" %}
Here we are creating a constant variable called ACTIVITIES\_ROUTE and setting an empty path and importing the ActivitiesComponent
{% endhint %}

In activities.module.ts, import into @NgModule imports

```typescript
RouterModule.forChild(ACTIVITIES_ROUTES)
```

In the activities.module.ts import the RouterModule

```typescript
import { RouterModule } from '@angular/router';
```

In the app.routing.ts file create a route const but this time load the child route you just created

```typescript
import { Routes } from '@angular/router';

export const APP_ROUTE : Routes = [
{
 path: 'activities',
 loadChildren:  './activities/activities.module#ActivitiesModule'
}
];
```

In the app.component.ts file import into @NgModule imports

```typescript
RouterModule.forRoot(APP_ROUTE)
```

{% hint style="info" %}
when working with routing always re serve
{% endhint %}

