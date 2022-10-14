# Test automation framework includes cucumber, webdriverIO, Javascript and Docker

#### Introduction
 
 - [x] Test will run in docker image - `Docker compose with selenium-hub, selenium-node/chrome, selenium-node/firefox`
 - [x] Parallel execution of test - `Chromer:2 instance, Firefox:2 instance`
 - [x] Reports -  `Allure html report`
 - [x] Visual Regression using image comparison - `wdio-image-comparison-service`
 - [x] Documentation

 #### Starting application testing
  
  1. Install **Node dependencies**:

```sh
npm install
```

2. Install **docker** and run `selenium:hub`:

```sh
npm run selenium
```

3. Running tests:

```sh
npm run test
```

To stop docker containers:

```sh
npm run selenium:stop
```

#### Gherking syntax Features Under test and grouping.

- `campaign.functional.feature` - Tests related to modal dialog ex: cookie policy
- `campaign.iamgecampare.feature`- Creates and image comparison test.

#### Report generation

Allure report is automatically generated to open the reports

```sh
npm run report:allure
```

#### Local dashboard urls

- [selenium-hub] : `http://localhost:4444/grid/console`