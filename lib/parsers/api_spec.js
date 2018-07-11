var trim = require('apidoc-core/lib/utils/trim');

/**
 *
 * @param content  {type} {groupBy} title|name
 * @param source
 * @returns {{name: *, title: *, group: *, groupTitle: string, spec: {}}}
 */
function parse(content, source) {
    try {
        let c = trim(content);

        // {type} {groupBy} title|name

        let matches = c.match(new RegExp(/^\{(.*)\} \{(.*)\} (.*)$/));


        if(!matches) {
            throw new Error('spec parser not match {type} {groupBy} title|name');
        }

        let type = matches[1];
        let group = matches[2];
        group = group.replace(/(\s+)/g, '_');
        group = group.replace(/[ÀÁÂÃÄÅ]/g,"A");
        group = group.replace(/[àáâãäå]/g,"a");
        group = group.replace(/[ÈÉÊË]/g,"E");
        group = group.replace(/[éèêë]/, 'e');
        let name = title = matches[3];

        if (type !== 'func' && type !== 'team') {
            throw new Error('spec parser expected func or team, ' + type + ' given');
        }

        return {
            name: name,
            title: title,
            group: group,
            groupTitle: "spec",
            spec: {}
        };
    } catch(e) {
        console.error("parsing spec error", e);
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
