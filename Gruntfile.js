module.exports = function (grunt) {
    // Gruntfile.js
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: [
            'dist/*/',
            'src/css',
            'src/js/*.min.js*',
            'src/img/compress'
        ],

        less: {
            build: {
                src: 'src/less/*.less',
                dest: 'src/css/style.min.css',
                options: {
                    compress: true
                }
            }
        },

        uglify: {
            js: {
                files: {
                    'src/js/main.min.js': 'src/js/main.js',
                    'src/js/maps.min.js': 'src/js/maps.js',
                    'src/js/owl-carousel2.min.js': 'src/js/owl-carousel2.js',
                    'src/js/countdown.min.js': 'src/js/countdown.js',
                    'src/js/scroll.min.js': 'src/js/scroll.js',
                    'src/js/slidebars.min.js': 'src/js/slidebars.js'
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'src/img/compress'
                }]
            }
        },

        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'bower_components/bootstrap/dist/', src: ['**'], dest: 'dist/bootstrap'},
                    {expand: true, cwd: 'bower_components/jquery/dist/', src: ['**'], dest: 'dist/jquery'},
                    {expand: true, cwd: 'bower_components/owl.carousel/dist/', src: ['**'], dest: 'dist/owl.carousel'},
                    {
                        expand: true,
                        cwd: 'bower_components/font-awesome/css/',
                        src: ['**'],
                        dest: 'dist/font-awesome/css'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/font-awesome/fonts/',
                        src: ['**'],
                        dest: 'dist/font-awesome/fonts'
                    },
                    {expand: true, cwd: 'bower_components/gmaps/', src: ['gmaps.*'], dest: 'dist/gmaps'},
                    {expand: true, cwd: 'bower_components/jquery.countdown/dist', src: ['**'], dest: 'dist/jquery.countdown'},
                    {expand: true, cwd: 'bower_components/scrollreveal/dist', src: ['**'], dest: 'dist/scrollreveal'},
                    {expand: true, cwd: 'bower_components/bLazy/', src: ['blazy.*.js'], dest: 'dist/bLazy'},
                    {expand: true, cwd: 'bower_components/slidebars/dist/', src: ['**'], dest: 'dist/slidebars'},


                    {expand: true, cwd: 'src/js', src: ['*.min.js'], dest: 'dist/custom/js'},
                    {expand: true, cwd: 'src/css', src: ['*.min.css'], dest: 'dist/custom/css'},
                    {expand: true, cwd: 'src/img/compress', src: ['**'], dest: 'dist/custom/img'}
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['clean', 'less', 'uglify', 'imagemin', 'copy']);
    // grunt.registerTask('default', ['clean', 'less', 'uglify', 'copy']);
};
