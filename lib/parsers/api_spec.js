var trim = require('apidoc-core/lib/utils/trim');
function parse(content, source) {
    try {
        let c = trim(content);

        // {type} {groupBy} title|name
        var parseRegExp = /^\{(.*)\} \{(.*)\} (.*)$/g;
        var matches = parseRegExp.exec(c);

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
        } else {
            console.log('type detected', type);
        }

        return {
            name: name,
            title: title,
            group: group,
            groupTitle: "spec",
            spec: {}
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
