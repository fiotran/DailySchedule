# Stylesheet and Font Awesome

> As this project is not about CSS we will copy and paste the below stylesheet and insert the provided styles from Font Awesome for styling

Using Visual Studio Code or your favorite text editor copy the following text into the styles.css file found in the src folder. Notice that the first @import statement is commented out - we will need this later in the project.

   ../daily-planner/src/styles.css

```css
body {
  font-family: Georgia, serif;
  font-size: 16px;
  text-align: center;
  max-width: 1000px;
  margin: auto;
}

header h1 {
  display: inline-block;
  padding: 5px 15px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  font-style: italic;
}

#customise, #activity-list {
  text-align: left;
  margin-bottom: 50px;
  display: block;
  overflow: hidden;
}

#customise h1, #activity-list h1 {
  display: block;

  padding: 5px;
  border-bottom: 1px solid #ccc;
  font-style: italic;

}

#customise form p label {
  width: 200px;
  display: inline-block;
}

input,
select {
  font-size: 1.1rem;
  width: 150px;
  padding: 5px;
  border: 0;
  border-bottom: 1px solid #ccc;
  background-color: white;
  border-radius: 0;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
}

input:focus,
select:focus,
button:focus {
  outline: none;
}

input:hover,
select:hover,
input:focus,
select:focus {
  background-color: #eee !important;
}

button {
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif !important;
  text-align: center;
  background-color: #eee;
}
button:hover {
  -webkit-filter: brightness(1.1);
  filter: brightness(1.1);
  cursor: pointer;
}

#daily-schedule {
  width: 40%;
  min-width: 300px;
  margin-left: 5%;
  float: right;
  background-color: #eee;
  text-align: center;
}

.daily-schedule-list {
  width: 90%;
  display: inline-block;
  margin: 0;
  padding: 0.3rem;
  text-align: left;
}

.daily-schedule-item {
  margin: 0.5rem;
  padding: 0.3rem;
  font-size: 1.2rem;
}

.daily-schedule-item {
  background: white;
  position: relative;
}

.daily-schedule-item > h2,
.daily-schedule-item > p {
  margin: 0.2rem 0.2rem 0.2rem 60px;
  font-size: 1rem;
}

.activity-item {
  width: 28%;
  padding: 1%;
  margin: 1%;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  position: relative;
}
.activity-item h2 {
  margin: 15px auto;
}

button.btn-add, button.btn-remove {
  font-size: 1rem;
  line-height: 1.3rem;
  border: solid 1px #888; 
  background-color: #fff;
  color: #888;
}


button.btn-remove {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  padding: 0;
}


button.btn-add:hover,button.btn-remove:hover  {
  background-color: #888;
  color: #fff;
}


button#btn-print,
button#btn-reset {
  font-size: 1.4rem !important;
  width: 100px;
  padding: 5px 15px;
  margin: 5px 5px 30px;
  border: 0;
}
button#btn-print {
  background-color: orange;
  color: white;
}

button#btn-reset {
  background-color: #999;
}

@media (max-width: 600px){
  #customise, #activity-list, #daily-schedule {
    width: 100%;
  }
}


@media screen {
  .print-only {
    display: none;
    visibility: hidden;
  }
}

/* font-awesome */
i.fas {
  color: white;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  margin: 0;
}

.daily-schedule-item i.fas {
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 10px;
}

i.circle-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  vertical-align: middle;
  padding: 5px;
}

i.fa-utensils {
  background: red;
}

i.fa-shower {
  background: cornflowerblue;
}
i.fa-bed {
  background: midnightblue;
}

i.fa-swimmer {
  background: deepskyblue;
}

/* Angular CDK drag-drop (https://material.angular.io/cdk/drag-drop/) */
.cdk-drag {
  cursor: move;
}

.cdk-drag-preview {
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.2);
}

.cdk-drag-placeholder {
  opacity: 0;
}

.cdk-drag-animating {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}

.cdk-drop-list-dragging :not(.cdk-drag-placeholder) {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}
```


Now add the following link to the index.html on the root directory

   ../daily-planner/src/index.html

Add before &lt;/head&gt;

```markup
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
```

