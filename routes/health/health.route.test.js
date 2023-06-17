const { statusCodes } = require('@haensl/http');
const { setHealthy } = require('../../state');

const health = require('./');

describe('@haensl/health/routes/health', () => {
  let ctx;

  beforeEach(() => {
    ctx = {
      request: {},
      set: jest.fn(),
      throw: jest.fn()
    };
  });

  describe('when the state is healthy', () => {
    beforeEach(async () => {
      setHealthy(true);
      await health(ctx);
    });

    it(`sets status to ${statusCodes.ok}`, () => {
      expect(ctx.status)
        .toEqual(statusCodes.ok);
    });
  });

  describe('when the state is not healthy', () => {
    beforeEach(async () => {
      setHealthy(false);
      await health(ctx);
    });

    it(`throws ${statusCodes.serviceUnavailable}`, () => {
      expect(ctx.throw)
        .toHaveBeenCalledWith(statusCodes.serviceUnavailable);
    });
  });
});

