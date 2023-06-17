describe('@haensl/koa-health package test', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('import via full uri', () => {
    const health = require('@haensl/koa-health');

    it('exposes state', () => {
      expect(typeof health.state)
        .toEqual('object');
    });

    it('exposes routes', () => {
      expect(typeof health.routes)
        .toEqual('object');
    });

    describe('health', () => {
      it('exposes state.isHealthy', () => {
        expect(typeof health.state.isHealthy)
          .toEqual('function');
      });

      it('exposes state.setHealthy', () => {
        expect(typeof health.state.setHealthy)
          .toEqual('function');
      });

      it('exposes routes.health', () => {
        expect(typeof health.routes.health)
          .toEqual('function');
      });
    });

    describe('ready', () => {
      it('exposes state.isReady', () => {
        expect(typeof health.state.isReady)
          .toEqual('function');
      });

      it('exposes state.setReady', () => {
        expect(typeof health.state.setReady)
          .toEqual('function');
      });

      it('exposes routes.ready', () => {
        expect(typeof health.routes.ready)
          .toEqual('function');
      });
    });
  });

  describe('individual import', () => {
    it('exposes state', () => {
      const state = require('@haensl/koa-health/state');

      expect(typeof state)
        .toEqual('object');
    });

    it('exposes routes', () => {
      const routes = require('@haensl/koa-health/routes');

      expect(typeof routes)
        .toEqual('object');
    });

    describe('health', () => {
      it('exposes isHealthy', () => {
        const { isHealthy } = require('@haensl/koa-health/state');

        expect(typeof isHealthy)
          .toEqual('function');
      });

      it('exposes setHealthy', () => {
        const { setHealthy } = require('@haensl/koa-health/state');

        expect(typeof setHealthy)
          .toEqual('function');
      });

      it('exposes health route', () => {
        const health = require('@haensl/koa-health/routes/health');

        expect(typeof health)
          .toEqual('function');
      });
    });

    describe('ready', () => {
      it('exposes state.isReady', () => {
        const { isReady } = require('@haensl/koa-health/state');

        expect(typeof isReady)
          .toEqual('function');
      });

      it('exposes setReady', () => {
        const { setReady } = require('@haensl/koa-health/state');

        expect(typeof setReady)
          .toEqual('function');
      });

      it('exposes ready route', () => {
        const ready = require('@haensl/koa-health/routes/ready');

        expect(typeof ready)
          .toEqual('function');
      });
    });
  });
});
