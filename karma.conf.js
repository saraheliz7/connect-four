module.exports = function(config){
  config.set({
    frameworks: ['mocha', 'chai'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    singleRun: true,
    colors: true,
    autoWatch: false,
    files: [
      'board.js',
      'board-view.js',
      'controller.js',
      'test/**/*.spec.js'
    ]
  });
};
