import {
  Component, OnInit, Output,
  EventEmitter, ViewChild, ElementRef, Input
} from '@angular/core';
import { ActivityModel } from '../../data/activity.model';
import { ActivitiesService } from '../../services/activities.service';
import { PlanModel } from '../../data/plan.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-view-plan',
  templateUrl: './view-plan.component.html'
})
export class ViewPlanComponent implements OnInit {
  planList: ActivityModel[];
  customisedValues: PlanModel;
  @Input() formValues: PlanModel;
  @Output() updateActivitiesList: EventEmitter<ActivityModel> = new EventEmitter<ActivityModel>();
  @Output() reloadActivities: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('dailySchedule') dailySchedule: ElementRef;


  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit() {
    this.planList = this.activitiesService.getPlan();
  }

  deleteFromDailyPlan(item: ActivityModel) {
    this.planList = this.activitiesService.deletePlanItem(item);
    this.updateActivitiesList.emit(item);
  }

  resetPlan() {
    this.planList = this.activitiesService.clearPlan();
    this.reloadActivities.emit(true);
  }

  getPlanDetails(plan: PlanModel) {
    this.customisedValues = plan;
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.planList, event.previousIndex, event.currentIndex);
  }

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
          button { display:none; }
          </style>
        </head>
    <body onload="window.print();window.close()">${printContent}</body>
      </html>`);
    printWindow.document.close();
  }

}
