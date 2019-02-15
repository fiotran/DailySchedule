# Setup and Angular CLI

Visit node.js [https://nodejs.org/en/](https://nodejs.org/en/) and download the recommended LTS \(Long-Term Support\) version

Optional step - Download Visual Studio Code

> Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages \(such as C++, C\#, Java, Python, PHP, Go\) and runtimes \(such as .NET and Unity\). Install visual studio code for your platform from [https://code.visualstudio.com/download](https://code.visualstudio.com/download)

Install the Angular CLI \(Command Line Interface\)

> The Angular CLI helps to easily create and build Angular applications that work right out of the box and adhere to industry standards. To learn more, visit the official Angular CLI website [https://cli.angular.io/](https://cli.angular.io/)

Open up terminal on a Mac or command on Windows and change to your working directory.

Type the following into the terminal

```text
npm install -g @angular/cli
```

```text
ng new daily-planner
```

{% hint style="info" %}
While generating the project with ng new, answer yes to routing and choose css as the style sheet. This process may take a few minutes to complete.
{% endhint %}

When complete, change into the daily-planner directory by typing

```text
cd daily-planner
```

```text
ng serve --open
```

This will build and serve your application then open the url in the default browser.

{% hint style="success" %}
Congratulations you have just made your first angular application with the default Angular template!
{% endhint %}

To terminate the batch job just type ctrl + c

{% hint style="info" %}
If using Visual Studio Code, you can open the terminal with the shortcut ctrl + shift + y to open the debug console and select the terminal window. This is where you can type all your commands
{% endhint %}

