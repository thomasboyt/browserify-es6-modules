var Compiler = require('es6-module-transpiler').Compiler;
var through = require('through');

module.exports = function(file) {
  var data = '';

  function write(buf) {
    data += buf;
  }

  function end() {
    var compiler = new Compiler(data);

    var out = compiler.toCJS({
      compatFix: true
    });
    this.queue(out);
    this.queue(null);
  }

  return through(write, end);
};
