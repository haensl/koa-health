const { statusCodes } = require('@haensl/http');
const { isHealthy } = require('../../state');

module.exports = async (ctx) => {
  if (!isHealthy()) {
    ctx.throw(statusCodes.serviceUnavailable);
  }

  ctx.status = statusCodes.ok;
};

