const state = {
  healthy: false,
  ready: false
};

const isHealthy = () =>
  state.healthy;

const isReady = () =>
  state.ready;

const setHealthy = (isHealthy) => {
  state.healthy = isHealthy;
};

const setReady = (isReady) => {
  state.ready = isReady;
};

module.exports = {
  isHealthy,
  isReady,
  setHealthy,
  setReady
};

