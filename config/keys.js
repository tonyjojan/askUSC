//figure out what set of credentials to return
if(process.env.NODE_ENV ===  'production') {
  //return prod
  module.exports = require('./prod');
}else {
  //return dev
  module.exports = require('./dev');
}
