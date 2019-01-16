import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivitiesService } from '../../services/activities.service';
import { ActivityModel } from '../../data/activity.model';

@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html'
})
export class ViewPlanComponent implements OnInit {
  currentPlan: ActivityModel[];
  planDetails: any;

  constructor(private activitesService: ActivitiesService) { }

  ngOnInit() {
    this.currentPlan = this.activitesService.getPlan();
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.currentPlan, event.previousIndex, event.currentIndex);
  }

  print() {
    let printContent, printWindow;
    printContent = document.getElementById('daily-schedule').innerHTML;
    printWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          #content {  border: 5px solid red}
          </style>
        </head>
    <body onload="window.print();window.close()">${printContent}</body>
      </html>`
    );
    printWindow.document.close();
  }

  // https://stackoverflow.com/questions/41379274/print-html-template-in-angular-2-ng-print-in-angular-2


  getPlanDetails(plan) {
    this.planDetails = plan;
  }
}
