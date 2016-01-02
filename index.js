var less = require('less');
var Promise = require('bluebird');

exports.translate = function(load) {
	return new Promise(function(resolve, reject) {
		less.render(load.source, {sourceMap: {sourceMapFileInline: true}})
			.then(function(output) {
				load.source = output.css;
				load.metadata.sourceMap = output.map;
			})
	});
};