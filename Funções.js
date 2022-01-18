
    // Funções em Java Script declarando uma função//
    // A função da um apelido para um bloco de comandos//
   
       function media () {
         var nota1 = 10;
         var nota2 = 8;
         var media = (nota1 + nota2) / 2;
         document.write(media);
       }
       media();
    
     // Declarando a Função com argumentos//
     // estes argumentos ficam dentro dos parentes depois do apelido da função exemplo abaixo//
     
      function media (n1, n2) {
        // var nota1 = 10;//
        // var nota2 = 8; //
         var media = (nota1 + nota2) / 2;
         document.write(media);
       }
       // Agora com os argumentos n1 e n2 você pode passar quantos números quiser//
       
       // Como calcular a nota de 3 alunos que ficaram de recuperação//
       media(6, 7);
       media(3, 9);
       media(4, 5);
     
     
      // return serve pra  interrompe a execução de uma função e retorna um valor//
      
      //Melhor exemplo //
      //Calcule o produto de dois números e retorne o resultado //
      
      var x = myFunction(4, 3);

        function myFunction(a, b) {
     // Retorne o produto de a e b//
        return a * b;
}


      