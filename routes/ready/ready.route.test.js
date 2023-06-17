const { statusCodes } = require('@haensl/http');
const { setReady } = require('../../state');

const ready = require('./');

describe('@haensl/health/routes/ready', () => {
  let ctx;

  beforeEach(() => {
    ctx = {
      request: {},
      set: jest.fn(),
      throw: jest.fn()
    };
  });

  describe('when the state is ready', () => {
    beforeEach(async () => {
      setReady(true);
      await ready(ctx);
    });

    it(`sets status to ${statusCodes.ok}`, () => {
      expect(ctx.status)
        .toEqual(statusCodes.ok);
    });
  });

  describe('when the state is not ready', () => {
    beforeEach(async () => {
      setReady(false);
      await ready(ctx);
    });

    it(`throws ${statusCodes.serviceUnavailable}`, () => {
      expect(ctx.throw)
        .toHaveBeenCalledWith(statusCodes.serviceUnavailable);
    });
  });
});

