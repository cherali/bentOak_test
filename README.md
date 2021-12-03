# BentOak test project
## Run
```bash
npm install
npm run start
``` 
or

```bash
yarn
yarn start
``` 

## Tips

- UI is optimaized for only mobile devices.
- User token cached for 180 day and messages cached permenently.
- After login automaticly redirect to messages route ```can be change in withAuth or any handler that pass to login action```.
- If user try to access route that is private redirect to login ```withAuth```.
- Route with private ture is use for hight sensitive routes, private route if user is not logedin will not rendered.
- For iOS can add a cuostom alert to ask for installation.
- For more accessibility can use offile detector.
- Messages lazy load not implemented.
- In this project for simplisity multi-theme and multi-lang ignored.


## Build
```bash
npm run build
``` 
or

```bash
yarn build
``` 