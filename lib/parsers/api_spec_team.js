var trim = require('apidoc-core/lib/utils/trim');
/**
 * @specTeam {service1} {role1} {date_start} {date_end} Name1
 */
function parse(content, source) {
    try {
        let l = trim(content);
        var parseRegExp = /^\{(.*)\} \{(.*)\} \{(.*)\} \{(.*)\} (.*)$/g;
        var matches = parseRegExp.exec(l);

        let service= matches[1];
        let role = matches[2];
        let date_start = matches[3];
        let date_stop = matches[4];
        let name = matches[5];

        return {
            service: service,
            role: role,
            date_start: date_start,
            date_stop: date_stop,
            name: name
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
    path  : 'local.spec.team',
    method: 'push',
    getGroup: 'team'
};
