module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {options: {separator: ';',},dist: {src: ['js/*.js', 'js/local/ror.js'],dest: 'dist/main.js',},},
        uglify: {build: {src: 'dist/main.js',dest: 'dist/main.min.js'}},
        // imagemin: {dynamic: {files: [{expand: true,cwd: 'images/',src: ['**/*.{png,jpg,gif}'],dest: 'images/build/'}]}},
        less: {development: {options: {paths: ["less/"]},files: {"styles/main.css": "less/my-styles.less"}}},
        autoprefixer: {dist: {files: {'styles/live/main.css': 'styles/main.css'}}},

    });


    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify', 'less', 'autoprefixer']);
};