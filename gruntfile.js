module.exports = function(grunt) {
    grunt.initConfig({

        watch: {
            grunt: {
                files:'gruntfile.js',
                tasks: [
                    'less:dev',
                    'ngtemplates:demoApp',
                    'concat'
                ]
            },

            less: {
                files: 'src/**/*.less',
                tasks: [
                    'less:dev'
                ]
            },

            ngtemplates: {
                files: 'src/components/**/*.html',
                tasks: [
                    'ngtemplates:demoApp'
                ]
            },

            concat: {
                files: [
                    'src/**/*.js',
                    'tmp/*'
                ],
                tasks: [
                    'concat'
                ]
            },

            livereload: {
                files: ['build/*'],
                options: {
                    livereload: 35729
                }
            }
        },

        less: {
            dev: {
                options: {
                    paths: ['bower_components/bootstrap/less']
                },
                files: {
                    'build/styles.css': 'src/app.less'
                }
            }
        },

        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8000
                }
            }
        },

        ngtemplates:  {
            demoApp: {
                options: {
                    url:    function(url) {
                        return url.replace('src/components', 'templates');
                    }
                },
                src:    'src/components/**/*.html',
                dest:   'tmp/templates.js'
            }
        },

        concat: {
            'build/script.js': [
                'bower_components/jquery/dist/jquery.min.js',
                'bower_components/velocity/velocity.min.js',
                'bower_components/angular/angular.min.js',
                'bower_components/angular-resource/angular-resource.min.js',
                'src/app.js',
                'src/components/**/*-module.js',
                'src/components/**/*.js',
                'tmp/templates.js'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');


    grunt.registerTask('default', [
        'build',
        'connect',
        'watch'
    ]);

    grunt.registerTask('build', [
        'ngtemplates:demoApp',
        'concat',
        'less:dev'
    ]);
};