module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-postcss');

	grunt.initConfig({
		grunticon: {
			svgs: {
				files: [{
					expand: true,
					cwd: '.',
					src: ['svg/*.svg'],
					dest: "svg-build"
				}],
				options: {

				}
			}
		},

		postcss: {
			options: {
				map: true,
				processors: [
					require('autoprefixer')()
				]
			},
			dist: {
				src: 'styles/*.css',
				dest: 'styles.css'
			}
		}
	});

	grunt.registerTask('default', ['postcss', 'grunticon']);
};