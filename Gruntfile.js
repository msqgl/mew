module.exports = function (grunt) {
    // Gruntfile.js
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: ['dist'],

        concat: {
            js: {
                src: ['src/js/*.js'],
                dest: 'dist/main.js'
            },
            css: {
                src: ['src/css/*.css'],
                dest: 'dist/main.css'
            }
        },

        uglify: {
            js: {
                files: {
                    'dist/main.min.js': ['dist/main.js']
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin']);
};
