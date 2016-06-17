var pjson = require('./package.json'),
    debug = require('debug')('openframe:tangram'),
    Extension = require('openframe-extension'),
    fs = require('fs'),
    yaml = require('yaml-js');

/**
 * Extensions should expose an instance of the Extension class.
 *
 * For info on building extensions, see [Openframe-Extension](https://github.com/OpenframeProject/Openframe-Extension).
 */

module.exports = new Extension({
    format: {
        // the name should be the same as the npm package name
        'name': pjson.name,
        // displayed to the user, perhaps?
        'display_name': 'Map',
        // does this type of artwork need to be downloaded to the frame?
        'download': true,
        // how do start this type of artwork? currently two token replacements, $filepath and $url
        'start_command': function(_config, _tokens) {
            debug('Artwork config: ', _config);

            var config = _config || {};
            var command = 'tangram -m ';

            var data = fs.readFileSync(tokens['$filepath']);
            var scene = yaml.load(data);

            if (scene.scene) {
                if (scene.scene.zoom) {
                    command += ' -z ' + scene.scene.zoom;
                }
                if (scene.scene.tilt) {
                    command += ' -t ' + scene.scene.tilt;
                }
                if (scene.scene.lon) {
                    command += ' -lon ' + scene.scene.lon;
                }
                if (scene.scene.lat) {
                    command += ' -lat ' + scene.scene.lat;
                }
            }
            if (config.w) {
                command += ' -w ' + config.w;
            }
            if (config.h) {
                command += ' -h ' + config.h;
            }
            command += '-s $filepath';
            return command;
        },
        // how do we stop this type of artwork?
        'end_command': 'pkill tangram'
    }
});
