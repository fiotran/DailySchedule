# Components and Modules

> Components are basic building blocks in an angular application. Modules in angular is a place where you can group components, directives, pipes and services which are related in an application.

{% hint style="info" %}
One of the best attributes of Angular is the ability to keep your code component based and independent of each other and therefore scalable in big enterprise applications. There is also separation between the template and the logic which we will demonstrate in this section.
{% endhint %}

Let's start by creating a component called header.component.ts 

Under the src/app folder create a new folder called shared - inside this create a header folder. In the header folder create two new files called header.component.html and header.component.ts. The ts or typescript file holds the logic for the html file.

In the .ts file paste the following code

#### ../daily-planner/src/app/shared/header.component.ts

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

#### ../daily-planner/src/app/shared/header.component.html

```markup
<header>
    <h1>Daily Schedule Planner</h1>
</header>
```

To use the header component created above we need to declare it in the app.modules.ts found in the src/app folder

```typescript
/* Add this line to the top */
import { HeaderComponent } from './shared/header/header.component';
....


/*Find @NgModule in the middle, add ",HeaderComponent"*/
@NgModule({
  declarations: [
    ... 
    HeaderComponent
  ],
```

Now replace the existing code from the app.component.html file with the following selector. 

```markup
<app-header></app-header>
<main>
    <router-outlet></router-outlet>
</main>
```

> CSS selector tells Angular to create and insert an instance of this component wherever it finds the corresponding tag in template HTML. [https://angular.io/guide/architecture-components](https://angular.io/guide/architecture-components)

