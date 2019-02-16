# ViewChild and Print Button

Add a print button to the view-plan.component.html

```typescript
<button id="btn-print" (click)="print()">Print</button>
```

In angular we use the @ViewChild decorator to get the content of an element. Add the @ViewChild decorator to the view-plan.component.ts page

```typescript
import{ ViewChild, ElementRef }from'@angular/core';

@ViewChild('dailyPlanList') dailySchedule: ElementRef;
```

Create a print\(\) function in the view-plan.component.ts file

```typescript
print() {
    let printContent, printWindow;
    printContent = this.dailySchedule.nativeElement.innerHTML;
    printWindow = window.open(
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

to the first div in the view-plan.component.html page and add

```typescript
#dailySchedule
```

where we do not want the text to display in our print

```typescript
class="screen-only"
```

