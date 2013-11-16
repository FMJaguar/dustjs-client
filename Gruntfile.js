module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		dust: {
			defaults: {
				files: {
					"public/js/views.js" : "src/**/*.dust"
				},
				options: {
					useBaseName: true,
					wrapper: false
				}
			},
		},
    watch: {
      files: ['src/**/*'],
      tasks: ['dust']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-dust');

  grunt.registerTask('default', ['dust']);

};
