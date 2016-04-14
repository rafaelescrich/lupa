angular.module('lupaApp', [])
  .controller('RedController', function() {

        var redList = this;
        redList.reds = [
          {
            "General":	{
                  "id"	: "1",
                      "title"	: "Título 1",
                      "description"	: "Apresenta o episódio da série Um mundo de letras, da TV Escola. Mostra a importância do hábito de leitura e escrita na educação das crianças e as dúvidas dos alunos quanto à ortografia das palavras. Apresenta para educadores e professores que sua ação é fundamental para orientar o aluno na descoberta da nova linguagem",
                      "keywords": "Métodos e Técnicas de Ensino, Educação infantil, Linguagem escrita"
                }
          },
          {
            "General":	{
                  "id"	: "2",
                      "title"	: "Título 2",
                      "description"	: "Apresenta o episódio da série Um mundo de letras, da TV Escola. Mostra a importância do hábito de leitura e escrita na educação das crianças e as dúvidas dos alunos quanto à ortografia das palavras. Apresenta para educadores e professores que sua ação é fundamental para orientar o aluno na descoberta da nova linguagem",
                      "keywords": "Biologia, Matemática, Ensino Médio"
                }
          },
          {
            "General":	{
                  "id"	: "3",
                      "title"	: "Título 3",
                      "description"	: "Apresenta o episódio da série Um mundo de letras, da TV Escola. Mostra a importância do hábito de leitura e escrita na educação das crianças e as dúvidas dos alunos quanto à ortografia das palavras. Apresenta para educadores e professores que sua ação é fundamental para orientar o aluno na descoberta da nova linguagem",
                      "keywords": "História, Português, Ensino Básico"
                }
          }
        ];
      });
