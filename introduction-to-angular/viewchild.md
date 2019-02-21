# ViewChild and Print Button

[Live code](https://stackblitz.com/edit/s10-material-design-drag-drop) to follow along from this section.

Add a click event to call the method print\(\) on the print button to the view-plan.component.html

**...\daily-planner\src\app\activities\view-plan\view-plan.component.html**

```typescript
<button id="btn-print" (click)="print()">Print</button>
```

In angular we use the @ViewChild decorator to get the content of an element. Add the @ViewChild decorator to the view-plan.component.ts page

**...\daily-planner\src\app\activities\view-plan\view-plan.component.ts**

```typescript
import{ ViewChild, ElementRef }from'@angular/core';

@ViewChild('dailySchedule') dailySchedule: ElementRef;
```

Create a print\(\) function in the view-plan.component.ts file

```typescript
print() {
    const printContent = this.dailySchedule.nativeElement.innerHTML;
    const printWindow = window.open(
      '',
      '_blank',
      'top=0,left=0,height=100%,width=auto'
    );
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          #content {  border: 5px solid red }
          .screen-only {
            display: none;
            visibility: hidden;
          }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContent}</body>
      </html>`);
    printWindow.document.close();
  }
```

In the first div, on the view-plan.component.html page, add the below anywhere inside the tag

**...\daily-planner\src\app\activities\view-plan\view-plan.component.html**

```typescript
#dailySchedule
```

Completed [live code](https://stackblitz.com/edit/s11-view-child-print-button) for this section.

