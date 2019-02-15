# Components and Modules

> Components are the basic building blocks in an Angular application. Modules in Angular are where you can group components, directives, pipes and services that are related in an application.

{% hint style="info" %}
One of the best attributes of Angular is the ability to keep your code component-based and independent of each other and therefore scalable to big enterprise applications. There is also a separation between the template and the logic which we will demonstrate in this section.
{% endhint %}

Let's start by creating a component called header.component.ts

Under the src/app folder create a new folder called shared. Inside the shared folder create a folder called header. In the header folder create two new files called header.component.html and header.component.ts. The ts or typescript file holds the logic for the html file.

In the .ts file paste the following code

## ../daily-planner/src/app/shared/header/header.component.ts

```typescript
import { Component } from '@angular/core';

@Component({
selector: 'app-header',
templateUrl: './header.component.html'
})
export class HeaderComponent {

constructor() { }
}
```

In the html file paste the following

## ../daily-planner/src/app/shared/header/header.component.html

```markup
<header>
    <h1>Daily Schedule Planner</h1>
</header>
```

To use the header component created above we need to declare it in app.modules.ts found in the src/app folder

## ../daily-planner/src/app/app.module.ts

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Now replace the existing code generated from the app.component.html file with the following code.

## ../daily-planner/src/app/app.component.html

```markup
<app-header></app-header>
<main>
    <router-outlet></router-outlet>
</main>
```

> A selector tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML. [https://angular.io/guide/architecture-components](https://angular.io/guide/architecture-components)

{% hint style="warning" %}
If you have compiling errors associated with routing, you may have selected no when given the option of creating your project with routing and will need to create the below file manually.
{% endhint %}

## ../daily-planner/src/app/app-routing.module.ts

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

