var trim = require('apidoc-core/lib/utils/trim');
var unindent = require('apidoc-core/lib/utils/unindent');

/**
 * @spec {func} {groupFunc} titleFunc
 *
 * @specFunc {specid_01} {2018-01-01}
 * specification détaillé
 * sur plusieurs ligne
 * qui précise ce qu'on veut
 */
function parse(content, source) {
    try {
        let c = trim(content);
        let regex = /^\{([a-zA-Z]{3,6})_([0-9]{2})\} \{(.*)\}(.*)$/msg;
        let matches = regex.exec(c);

        if (!matches) {
            throw new Error("spec_func parser expected {specid_01} {2018-01-01} texte multiline");
        }

        // console.log(matches[4]);
        // console.log(trim(matches[4]));
        // console.log(unindent(trim(matches[4])));

        let group = matches[1];
        let id = group + "_" + matches[2];
        let date = matches[3];
        let description = unindent(trim(matches[4]));

        return {
            group: group,
            id: id,
            date: date,
            description: description
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
    path  : 'local.spec.func',
    method: 'push',
    getGroup: 'Func',
    markdownFields: [ 'description' ]
};
