# Components and Modules

> Components are basic building blocks in an angular application. Modules in angular is a place where you can group components, directives, pipes and services which are related in an application.

{% hint style="info" %}
One of the best attributes of Angular is the ability to keep your code componentised and therefore scalable in big enterprise applications
{% endhint %}

Let's start by creating a component called header.component.ts 1. Under the src/app folder create a new folder called shared - inside this create a header folder. In the header folder create two new files called header.component.html and header.component.ts. The ts or typescript file holds the logic for the html file.

1. In the .ts file paste the following code

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

1. In the html file paste the following

```markup
<header>
    <h1>Daily Schedule Planner</h1>
</header>
```

1. To use the header component created above we need to declare it in the app.modules.ts found in the src/app folder

```typescript
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent
  ],
```

1. Remove the existing code from the app.component.html file and add the selector. Should probably say something about how selectors work

```markup
<app-header></app-header>
```

