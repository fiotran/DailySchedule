# Typescript, Interfaces and Data

Typescript is a superset of JavaScript used to write applications that is type safe which supports cleaner code. It is then compiled into plain JavaScript at build time.

In this section, we will create a model for the main activities object so it can be used to type variables in our application at a later point. We will also bring in a predefined list of activities for display.

Create a folder called data under src/app and under the **data** folder create a file called activity.model.ts with the following interface

## Interfaces

> One of TypeScript’s core principles is that type-checking focuses on the _shape_ that values have. This is sometimes called “duck typing” or “structural subtyping”. In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project. [https://www.typescriptlang.org/docs/handbook/interfaces.html](https://www.typescriptlang.org/docs/handbook/interfaces.html)

**../daily-planner/src/app/data/activity.model.ts**

```typescript
export interface ActivityModel {
    id: number;
    name: string;
    image: string;
}
```

Now, create a new file in the data folder named activities.ts and assign data to the constant variable ActivitiesConst

**../daily-planner/src/app/data/plan.model.ts**

```typescript
export interface PlanModel {
     id: number;
     name: string;
     selectedDate: string;
}
```

## Data

Predefined list of activities for display

**../daily-planner/src/app/data/activities.ts**

```typescript
export const ActivitiesConst = [
    {
        id: 1,
        name: 'Breakfast',
        image: 'fa-utensils'
    },
    {
        id: 2,
        name: 'Exercise',
        image: 'fa-swimmer'
    },
    {
        id: 3,
        name: 'Lunch',
        image: 'fa-utensils'
    },
    {
        id: 4,
        name: 'Sleep',
        image: 'fa-bed'
    },
    {
        id: 5,
        name: 'Shower',
        image: 'fa-shower'
    }
];
```

Completed [live code](https://stackblitz.com/edit/setup) at this point.

