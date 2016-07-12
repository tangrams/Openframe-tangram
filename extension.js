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

            var data = fs.readFileSync(_tokens['$filepath']);
            var scene = yaml.load(data);

            if (scene.cameras) {
                for (var i in scene.cameras) {
                    var cam = scene.cameras[i];
                    
                    if (cam.tilt && typeof cam.tilt === 'number') {
                        console.log('TILT: ', cam.tilt);
                        command += ' -t ' + cam.tilt;
                    }
                    
                    if (cam.rotation && typeof cam.rotation === 'number') {
                        console.log('ROTATION: ', cam.rotation);
                        command += ' -r ' + cam.rotation;
                    }
                    
                    if (cam.zoom && typeof cam.zoom === 'number') {
                        console.log('ZOOM: ', cam.zoom);
                        command += ' -z ' + cam.zoom;
                    }
                }
            }

            if (config.w) {
                command += ' -w ' + config.w;
            }
            if (config.h) {
                command += ' -h ' + config.h;
            }

            command += ' -s $url';
            return command;
        },
        // how do we stop this type of artwork?
        'end_command': 'pkill tangram'
    }
});
