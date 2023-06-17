# @haensl/koa-health

Application health/readiness management and koa routes.


[![NPM](https://nodei.co/npm/@haensl%2Fkoa-health.png?downloads=true)](https://nodei.co/npm/@haensl%2Fkoa-health/)

[![npm version](https://badge.fury.io/js/@haensl%2Fkoa-health.svg)](http://badge.fury.io/js/@haensl%2Fkoa-health)
[![CircleCI](https://circleci.com/gh/haensl/koa-health.svg?style=svg)](https://circleci.com/gh/haensl/koa-health)

This module offers [application health and readiness state management](#state) as well as accompanying [koa routes](#routes) that you can plug into your own Koa [`Router`](https://www.npmjs.com/package/@koa/router).

## Motivation <a name="motivation"></a>

Adding health and readiness endpoints to your microservices is a good practice that brings several benefits to your application's overall stability and reliability.

1. Health Monitoring

    Health endpoints allow you to continuously monitor the state of your microservices. By regularly checking these endpoints, you can detect issues such as resource exhaustion, database connectivity problems, or other dependencies' failures. This proactive monitoring helps identify and address potential problems before they escalate.

2. Load Balancing and Service Discovery

    Health and readiness endpoints enable load balancers and service discovery systems to determine the availability and capacity of your microservices. This information helps distribute incoming requests across healthy instances, ensuring optimal utilization and efficient resource allocation.

3. Graceful Deployments

    Readiness endpoints can help control the deployment process by indicating when a microservice is ready to accept traffic. During deployments and/or scaling events, the readiness information can serve to re-route, delay or halt traffic until the service has completed initialization or maintenance tasks. This avoids serving requests to partially functioning instances.

4. System Resilience

    Health endpoints facilitate the detection of failing or unhealthy services. Service health information enables orchestration systems to take automatic remedial actions, such as restarting unhealthy instances, spinning up new replicas, or triggering alerts for manual intervention. This enhances the overall system resilience and fault-tolerance.

## Installation <a name="install"></a>

### Via `npm` <a name="install/npm"></a>

```bash
$ npm install -S @haensl/koa-health
```

### Via `yarn` <a name="install/yarn"></a>

```bash
$ yarn add @haensl/koa-health
```

## Usage

1. [Install @haensl/koa-health](#installation)

2. Use [`state`](#state) to manage your application's readyness and health state:

    ```javascript
    const Koa = require('koa');
    const { state } =  require('@haensl/koa-health');

    const app = new Koa();

    const server = await app.listen(port);
    log.info(`listening on ${port}.`);

    // Set your app's state to healthy.
    state.setHealthy(true);

    app.on('error', (error) => {
      log.error('Uncaught error', error);

      // Update the app's state when an error occurs.
      state.setHealthy(false);
    });

    await database.init();
    // Signal that the app is ready to handle requests.
    state.setReady(true);
    ```

3. Use [`routes`](#routes) to publish your application's readyness and health state:

    ```javascript
    const Router = require('@koa/router');
    const { health, ready } = require('@haensl/koa-health/routes');

    const router = new Router();

    // add health routes
    router.get('/health', health);
    router.get('/ready', ready);

    // add other routes...

    app.use(router.routes());
    ```

### state <a name="state"></a>

`@haensl/koa-health/state`

The `state` module offers readyness and health state management.

##### `state.isHealthy: () => boolean` <a name="state/health"></a>

Returns whether or not the service is currently in healthy state.

##### `state.setHealthy: (boolean) => void`

Sets the healthy state.

##### `state.isReady: () => boolean` <a name="state/ready"></a>

Returns whether or not the service is currently in ready state.

##### `state.setReady: (boolean) => void`

Sets the ready state.

### routes <a name="routes"></a>

`@haensl/koa-health/routes`

Routes terminate the request and are meant to be used with [Koa routers](https://www.npmjs.com/package/@koa/router).

##### `routes.health`

Returns application health.

Throws `503 Service Unavailable` if the app's [health state](#state/health) is unhealthy.

##### `routes.ready`

Returns application ready state.

Throws `503 Service Unavailable` if the app's [state is not ready](#state/ready), yet.

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
