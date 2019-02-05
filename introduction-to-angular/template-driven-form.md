# Template Driven Form

>Fiona to write something here

another type of forms is the template driven forms 
here you can use [(ngModel)] to use 2 way binding
1) lets add this to the view-plan html to see how it works
	<label>Time: </label>
      <input class="screen-only" [(ngModel)]="item.time" type="text" />
      <span class="print-only time-value">{{ item.time }}</span>
2) import FormsModule into the main app module

