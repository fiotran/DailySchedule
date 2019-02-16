# Material Design Drag and Drop

A standout in the recent release of Angular 7 was the Material Design drag and drop. Let's try it out.

Import the drag and drop module into the activities.module.ts:

```typescript
import { DragDropModule } from '@angular/cdk/drag-drop';
```

```typescript
@import { 
   DragDropModule
}
```

replace the main div tag with the following code to in view-plan.component.html:

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
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.planList, event.previousIndex, event.currentIndex);
}
```

Save your files and go test out your new drag and drop feature !!

