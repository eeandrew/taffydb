module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			taffy:{
				src:'taffy.js',
				dest:'taffy-min.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['js-task']);
    grunt.registerTask('js-task', ['uglify']);

}