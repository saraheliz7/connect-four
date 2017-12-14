module.exports = function(config){
  config.set({
    frameworks: ['mocha', 'chai', 'sinon'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    singleRun: false,
    colors: true,
    autoWatch: true,
    files: [
      'board.js',
      'board-view.js',
      'controller.js',
      'test/**/*.spec.js'
    ]
  });
};
