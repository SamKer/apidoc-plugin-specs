var trim = require('apidoc-core/lib/utils/trim');
var unindent = require('apidoc-core/lib/utils/unindent');
/**
 * @apiSpecScreen {title} {image1} Text
 */
function parse(content, source) {
    try {
        let l = trim(content);
        var parseRegExp = /^\{(.*)\} \{(.*)\} ([\s\S]*)$/m;
        var matches = parseRegExp.exec(l);

        if (!matches) {
            throw new Error("spec_screen parser expected {title} {imagePath} texte multiline");
        }
        let title = matches[1];
        let image = matches[2];
        let text = unindent(trim(matches[3]));

        return {
            tab: title,
            image: image,
            text: text
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
    path  : 'local.spec.screen',
    method: 'push',
    getGroup: 'team'
};
