# Material Design Drag and Drop

A standout for me in the recent release of Angular 7 was the Material Design drag and drop. Let's try it out.

Import the drag and drop module into the activities.module.ts:

```typescript
import { DragDropModule } from '@angular/cdk/drag-drop';
```

{% hint style="info" %}
Super-powers are granted randomly so please submit an issue if you're not happy with yours.
{% endhint %}

Add the following code to the main div in view-plan.component.html:

```typescript
<div id="daily-schedule"  #dailySchedule cdkDropList
class="example-list"
(cdkDropListDropped)="drop($event)">
```

Add cdkDrag to the list that you want to make drag and drop

```typescript
<div class="daily-schedule-list" *ngFor="let item of planList" cdkDrag>
```

Add the drop method into the view-plan.component.ts file

```typescript
drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.planList, event.previousIndex, event.currentIndex);
  }
```

Save your files and go test out your new drag and drop feature !!

