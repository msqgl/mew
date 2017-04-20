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
        },

        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'bower_components/bootstrap/dist/', src: ['**'], dest: 'dist/bootstrap'},
                    {expand: true, cwd: 'bower_components/jquery/dist/', src: ['**'], dest: 'dist/jquery'},
                    {expand: true, cwd: 'bower_components/owl.carousel/dist/', src: ['**'], dest: 'dist/owl.carousel'},
                    {expand: true, cwd: 'bower_components/font-awesome/css/', src: ['**'], dest: 'dist/font-awesome/css'},
                    {expand: true, cwd: 'bower_components/font-awesome/fonts/', src: ['**'], dest: 'dist/font-awesome/fonts'},
                    {expand: true, cwd: 'bower_components/gmaps/', src: ['gmaps.*'], dest: 'dist/gmaps'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['clean', 'concat', 'uglify', 'cssmin', 'copy']);
};
