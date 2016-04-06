exports.getReds = function(req, res) {
	res.send(onlyTheReds);
};

exports.onlyTheReds = function() {

	return {
		reds : [
					{
						"General":	{
										"id"	: "1",
		        						"title"	: "O som das palavras [Um mundo de letras]",
		        						"description"	: "Apresenta o episódio da série Um mundo de letras, da TV Escola. Mostra a importância do hábito de leitura e escrita na educação das crianças e as dúvidas dos alunos quanto à ortografia das palavras. Apresenta para educadores e professores que sua ação é fundamental para orientar o aluno na descoberta da nova linguagem",
				        				"keywords": "Métodos e Técnicas de Ensino, Educação infantil, Linguagem escrita"
									},
						"identifier":	{
				        			        "catalog": "Domínio Público"
										},
						"technical":	{
											"format": "video"
										}
					},
					{
						"General":	{
										"id"	: "2",
		        						"title"	: "O som das palavras [Um mundo de letras]",
		        						"description"	: "Apresenta o episódio da série Um mundo de letras, da TV Escola. Mostra a importância do hábito de leitura e escrita na educação das crianças e as dúvidas dos alunos quanto à ortografia das palavras. Apresenta para educadores e professores que sua ação é fundamental para orientar o aluno na descoberta da nova linguagem",
				        				"keywords": "Métodos e Técnicas de Ensino, Educação infantil, Linguagem escrita"
									},
						"identifier":	{
				        			        "catalog": "Domínio Público"
										},
						"technical":	{
											"format": "video"
										}
					},
					{
						"General":	{
										"id"	: "3",
		        						"title"	: "O som das palavras [Um mundo de letras]",
		        						"description"	: "Apresenta o episódio da série Um mundo de letras, da TV Escola. Mostra a importância do hábito de leitura e escrita na educação das crianças e as dúvidas dos alunos quanto à ortografia das palavras. Apresenta para educadores e professores que sua ação é fundamental para orientar o aluno na descoberta da nova linguagem",
				        				"keywords": "Métodos e Técnicas de Ensino, Educação infantil, Linguagem escrita"
									},
						"identifier":	{
				        			        "catalog": "Domínio Público"
										},
						"technical":	{
											"format": "video"
										}
					}
				]
	};
};