---
description: Components are basic building blocks in an angular application
---

# Components and modules

> Modules in angular is a place where you can group components, directives, pipes and services which are related in an application.

{% hint style="info" %}
One of the best attributes of Angular is the ability to keep your code componentised and therefore scalable in big enterprise applications
{% endhint %}

Let's start by creating a component called header.component.ts

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

Create the header.component.html referenced by line 5

```markup
<header>
    <h1>Daily Schedule Planner</h1>
</header>
```

To use the header component created above we need to declare it in the app.modules.ts

```typescript
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent
  ],
```

Add the selector to the app.component.html

```markup
<app-header></app-header>
```

