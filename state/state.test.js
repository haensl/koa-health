const {
  isHealthy,
  isReady,
  setHealthy,
  setReady
} = require('./');

describe('@haensl/health/state', () => {
  describe('isHealthy()/setHealthy()', () => {
    it('defaults to false', () => {
      expect(isHealthy())
        .toBe(false);
    });

    describe('when healthy', () => {
      beforeEach(() => {
        setHealthy(true);
      });

      it('returns true', () => {
        expect(isHealthy())
          .toBe(true);
      });
    });

    describe('when unhealthy', () => {
      beforeEach(() => {
        setHealthy(false);
      });

      it('returns false', () => {
        expect(isHealthy())
          .toBe(false);
      });
    });
  });

  describe('isReady()/setReady()', () => {
    it('defaults to false', () => {
      expect(isReady())
        .toBe(false);
    });

    describe('when ready', () => {
      beforeEach(() => {
        setReady(true);
      });

      it('returns true', () => {
        expect(isReady())
          .toBe(true);
      });
    });

    describe('when not ready', () => {
      beforeEach(() => {
        setReady(false);
      });

      it('returns false', () => {
        expect(isReady())
          .toBe(false);
      });
    });
  });
});

