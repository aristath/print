'use strict';
module.exports = function(grunt) {

	grunt.initConfig({
		// Compile CSS
		sass: {
			dist: {
				files: { 'style.css' : 'sass/style.scss' }
			}
		},
		// Generate translation file
		makepot: {
			target: {
				options: {
					type: 'wp-theme',
					domainPath: 'languages',
					exclude: [
						'tests/.*'
					]
				}
			}
		},
		// Convert readme.txt to readme.md
		wp_readme_to_markdown: {
			your_target: {
				files: {
					'README.md': 'readme.txt'
				},
			},
		},
		// Watch task (run with "grunt watch")
  		watch: {
			css: {
				files: ['sass/*.scss', 'sass/**/*.scss'],
				tasks: ['sass', 'cssmin'],
			},
			readme: {
				files: 'readme.txt',
				tasks: ['wp_readme_to_markdown'],
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-wp-i18n');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-wp-readme-to-markdown');

	grunt.registerTask('default', ['sass', 'makepot', 'wp_readme_to_markdown']);

};
