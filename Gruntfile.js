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
        tasks: ['sass','cssmin']
      },
    },
    //   concat: {
    //   css: {
    //     src: ['assets/stylesheets/src/common.css', 'assets/stylesheets/src/background.css'],
    //     dest: 'assets/stylesheets/app.css',
    //   },
    // },
      cssmin: {
        target: {
          files: {
            'assets/stylesheets/app.min.css': ['assets/stylesheets/src/common.css', 'assets/stylesheets/src/background.css']
          }
        }
      }
});

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
// grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin'); 
grunt.registerTask("default", ["sass","cssmin","watch"]);
};