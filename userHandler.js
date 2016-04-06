exports.getUsers = function(req, res) {
	res.send(onlyTheUsers);
};

exports.onlyTheUsers = function() {

	return {
		users : [
			{ name : "Rafael", email: "rafaelescrich@gmail.com"},
			{ name : "Wellington", email: "wellington.f.silvano@gmail.com"},
			{ name : "Jose", email: "juniorquintas@gmail.com"}
		]
	};
};
