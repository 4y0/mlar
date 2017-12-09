
var r = require(process.cwd() + '/r.json');

function resolve_require (module_alias) {

	var require_path, module_path = r[module_alias];

	if(module_path){

		require_path = (process.cwd() + module_path);

	}else{

		//require module as is e.g. npm installed packages
		require_path = module_alias;

	}

	return require(require_path)
}

module.exports = function (module_aliases) {

	if(!module_aliases) throw new Error('No Dependencies passed');

	var _mas = [].concat(module_aliases);
	var _mas_dict = {};
	

	_mas
	.forEach( module_alias => {

		_mas_dict[module_alias] = resolve_require(module_alias)

	});


	var ret_value = _mas_dict;

	//If just one module alias is passed, return it instead of a dict of all loaded modules
	if(_mas.length === 1){

		ret_value = _mas_dict[_mas[0]];

	}
	 

	return ret_value;

}