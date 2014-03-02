var expect = require('chai').expect;
var transform = require('./index');
var browserify = require('browserify');

describe('browserify-es6', function() {
  it('transpiles to CJS', function(done) {
    browserify('./fixtures/main.js')
      .transform(transform)
      .bundle(function(err, result) {
        expect(err).to.equal(null);
        done();
      });
  });

  it('can import npm dependencies', function(done) {
    browserify('./fixtures/npm.js')
      .transform(transform)
      .bundle(function(err, result) {
        expect(err).to.equal(null);
        done();
      });
  });
});
