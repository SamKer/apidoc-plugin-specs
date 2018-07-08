var trim = require('apidoc-core/lib/utils/trim');

/**
 * version spec
 * @specVersion 1.0.0
 * @param content
 * @param source
 * @returns
 */
function parse(content, source) {
    try {
        let v = trim(content);


        return {
            version: v
        };
    } catch(e) {
        console.error(e);
    }
}

/**
 * Exports
 */
module.exports = {
    parse : parse,
    path  : 'local',
    method: 'insert'
};
