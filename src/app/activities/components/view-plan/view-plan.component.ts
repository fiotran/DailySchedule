import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivitiesService } from '../../services/activities.service';
import { ActivityModel } from '../../data/activity.model';
import { PlanModel } from '../../data/plan.model';

@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html'
})
export class ViewPlanComponent implements OnInit {
  planList: ActivityModel[] = [];
  planDetails: PlanModel;
  @Output() reloadActivities: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @ViewChild('dailySchedule') dailySchedule: ElementRef;
  constructor(private activitesService: ActivitiesService) {}

  ngOnInit() {
    this.planList = this.activitesService.getPlan();
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.planList, event.previousIndex, event.currentIndex);
  }

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

  // https://stackoverflow.com/questions/41379274/print-html-template-in-angular-2-ng-print-in-angular-2

  getPlanDetails(plan: PlanModel) {
    this.planDetails = plan;
  }

  deletePlan(item) {
    this.planList = this.activitesService.deletePlanItem(item);
  }

  clearPlan() {
    this.planList = this.activitesService.clearPlan();
    this.reloadActivities.emit(true);
  }
}
