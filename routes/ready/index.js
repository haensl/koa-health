const { statusCodes } = require('@haensl/http');
const { isReady } = require('../../state');

module.exports = async (ctx) => {
  if (!isReady()) {
    ctx.throw(statusCodes.serviceUnavailable);
  }

  ctx.status = statusCodes.ok;
};

