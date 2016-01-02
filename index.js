var less = require('less');

exports.translate = function(load) {
	return less.render(load.source, {sourceMap: {sourceMapFileInline: true}});
};