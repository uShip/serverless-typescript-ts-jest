# uShip.Geospatial

A home for uShip's geospatial functionality, housed in AWS

## Setting up your development environment after checkout

- Clone this repo
- In a terminal window, navigate to the cloned repo folder
- run `npm install -g serverless` (already installed as `devDependency`, but nice to have globally)
- run `npm install -g rimraf` (already installed as `devDependency`, but nice to have globally)
- run `rimraf node_modules/`
- run `npm install`

## Setting up Visual Studio Code

- Navigate to `Extensions` (`Ctrl+Shift+X`) in VS Code
- Install all extensions that should be recommended by the workspace
- Restart VS Code to be safe

## Jenkins Pipeline

| Pipeline | URL |
| --- | --- |
| Dev | http://jenkins.uship.com:8080/job/uShip.Geospatial/job/CI_and_Dev_Deploy/ |
| QARegression | http://jenkins.uship.com:8080/job/uShip.Geospatial/job/QARegression_Deploy/ |
| Sandbox | http://jenkins.uship.com:8080/job/uShip.Geospatial/job/Sandbox_Deploy/ |
| Prod | http://jenkins.uship.com:8080/job/uShip.Geospatial/job/Production_Deploy/ |

## Development and Checkin Process

### Debugging serverless offline locally

If you're using Visual Studio Code as your IDE, all you should need to do is go to the debug pane on the left side of VS code, and in the dropdown select `Debug Serverless` and then `Start Debugging` (`F5`, in the `Debug` toolbar menu, or the arrow next to the dropdown). You may need to hit the API once before your breakpoints are discovered. Any changes you make in your code will also be reflected in the debugger, so you don't need to restart debugging each time after making changes.

`launch.json` in the `.vscode` folder and the `debug` script in the `package.json` have some settings to enable VS Code to start serverless offline in debug mode, and attach itself to the running process.

### Debugging tests

If you're using Visual Studio Code as your IDE, in the debug pane, select `Debug Tests` and then `Start Debugging` (`F5`, in the `Debug` toolbar menu, or the arrow next to the dropdown). This will start up the Jest debugger (after it transpiles your TS files to a `debug` folder), run all the tests it finds (and hit any breakpoints in tests or in source code), and afterwards delete the `debug` folder.

### Commiting your changes

When you commit your changes, there's a precommit hook that runs _all_ the tests in the project, and then runs the linter to make sure your code is all good. If either of these steps fail, it will prevent you from committing your changes.
