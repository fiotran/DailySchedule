# Typescript, Interfaces and Data

> Typescript is a superset of Javascript used to write applications that is type safe which supports cleaner code for higher scalability. It is then compiled into plain Javascript at run time.

In this section, we will create a model for the main activities object so it can be used to type variables in our application at a later point. We will also bring in a predefined list of activities for display.

Create a folder called data under src/app and under the data folder create a folder called activity.model.ts with the following interface model

```typescript
export interface ActivityModel {
    name: string;
    image: string;
}
```

Create a new file in the data folder named activities.ts and assign data to the constant variable ActivitiesConst

```typescript
 export const ActivitiesConst = [
        {
            'id': 1,
            'name': 'Breakfast',
            'image': 'fa-utensils'
        },
        {
            'id': 2,
            'name': 'Exercise',
            'image': 'fa-swimmer'
        },
        {
            'id': 3,
            'name': 'Lunch',
            'image': 'fa-utensils'
        },
        {
            'id': 4,
            'name': 'Sleep',
            'image': 'fa-bed'
        },
        {
            'id': 5,
            'name': 'Shower',
            'image': 'fa-shower'
        }
    ];

```

