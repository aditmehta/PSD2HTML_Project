module.exports = function(grunt) {
  
grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        files: {                         // Dictionary of files 
          'assets/stylesheets/src/common.css': 'assets/stylesheets/src/common.scss',
          'assets/stylesheets/src/background.css': 'assets/stylesheets/src/background.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass']
      },
    },
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask("default", ["sass","watch"]);
};