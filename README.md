# apidoc-plugin-specs
Use apidocjs to edit functionnal specifications

## install

```bash
npm i -D apidoc-plugin-specs
```
## usage

same as apidoc but use specific template here

```bash
apidoc -t template -i example -o tmp
```

## api

the directive  @api is forced by apidoc
we have to declare it, but nothing is saved

- @apiSpec {type} {groupe} Title
    * type = "team || func"
    * groupe overwrite definition @api
    * title overwrite title and name from @api
- @apiSpecVersion overwrite @apiVersion
- @apiSpecTeam specify team éléments
- @apiSpecFunc define a fonctional specification

### example
- Team

```javascript
/**
 * @api {spec} / SPEC Team
 * @apiSpec {team} {groupTeam} titleTeam
 * @apiSpecVersion 1.0.0
 * @apiSpecTeam {service1} {role1} {2018-01-01} {---} Name1
 * @apiSpecTeam {service2} {role2} {2018-02-03} {2018-03-04} Name2
 */
```

define block with contributors

- Functions

```javascript
/**
 * @api {spec} / SPEC Func
 * @apiSpec {func} {groupFunc} titleFunc
 * @apiSpecVersion 1.0.0
 *
 * @apiSpecFunc {specid_01} {2018-01-01} 1ère fonctionnalité
 * specification détaillé
 * - sur plusieurs ligne
 * - qui précise ce qu'on veut
 *
 * @apiSpecFunc {specid_02} {2018-03-03} 2ème
 * specification détaillé blabla
 * - sur plusieurs ligne
 * - qui précise ce qu'on veut
 *
 */
```

define list of fonctional specifications
