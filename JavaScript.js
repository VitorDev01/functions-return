    //variáveis //
  document.write("<br><br>")
   var a = "água";
   var b = "pó de café";
   var c = "açúcar";

    document.write("Ingredientes necessários para fazer café: ", a, ",", b," , e ", c);
   
   //pular linha// 
   document.write("<br><br>");
   //variáveis números//
   
   var datanascimento="28/07/1998";
   var idade = "27";
   altura = "1,76";
   peso = "75";
   
   
    document.write("Eu nasci em: ", datanascimento,  " ," ,"atualmente tenho: ", idade, " " ,"anos de idade" ," e ", altura, "de altura e estou pesando", peso, "kilos.");
 
   document.write("<br><br>");
   
   //Operações Aritméticas
   //+ Adição
   //- Subtração
   //* Multiplicação
   // / Divisão
   // % Módulo Resto Da Divisão
   // ++ Incremento 
   // -- Decremento 
   
   var e = 100;
   var f = 150;
   
   var g = e * f;
   
   document.write(g);
   document.write("<br><br>");
   
   var h = 250;
   var i = 100;
   
   var j = h % i;
   
   document.write(j);
   document.write("<br><br>");
   
   //Incremento 
   
   var k = 1000;
   //colocando o incremento antes da variável ele adiciona +1  deixando como resultado 1001
   var l = ++k;
   
   document.write(l);
   document.write("<br><br>");
   var m = 1000;
   //colocando o incremento antes da variável ele diminui -1 deixando como resultado 999
   var n = --m;
   
   document.write(n);
   document.write("<br><br>");
   
   //Operadores Lógicos
   // && (conjunção lógica) para um conjunto de Booleano operando será trues e somente se todos os operandos forem true. Caso contrário, será false.
   
   // || ou 
   
   var idade = 35;
   
   var maior20 = idade > 20;
   var menor30 = idade < 30;
   
   entre = maior20 && menor30;
   
   document.write("Idade ", idade);
   
   document.write("Maior que vinte", maior20);
     
   document.write("Menor que trinta", menor30);
   
   document.write("Entre 20 e 30", entre);
   
   document.write("<br><br>");
   
   var idade = 9;
           
   var menor10 = idade < 10;
   var maior65 = idade > 65;
   
   var gratuidade = menor10 || maior65;
   
   document.write("Idade ", idade);
   
   document.write("Maior que 65", maior65);
     
   document.write("Menor que 10", menor10);
   
   document.write("Tem direito a gratuidade?:", gratuidade);
   
   document.write("<br><br>");
   
   // Condicionais If Se Else Se Não //
   
   idade = 18;
   
   if(idade >= 18) {
     document.write("Maior De Idade Prossiga");
   }
   else {
     document.write("Menor de Idade Retorne");
   }
   
   // switch case' //
   
    var nota1 = 5.0;
    var nota2 = 6.0;
    
    var media = (nota1 + nota2) / 2;
    
    
    
    if(media >= 7) {
      document.write("você passou com média " + media);
    }
    else{
      document.write("Sua nota " + media + "não foi o suficiente para passar");
    }
    var conceito= ""
    if(media >=8){
      conceito = "ótimo";
    }
    else if(media >= 6.5){
      conceito = "bom";
    }
    else{
      conceito = "regular";
    }
    document.write(media);
    document.write(conceito);
   
   switch(conceito){
     case "ótimo":
        document.write("Parabéns");
        break;
        
     case "bom":
        document.write("Quase Perfeito");
        break;
        
     case "regular":
        document.write("Estude Mais");
        break;
        
     default:
        document.write("houve algum erro");
     
   }
   document.write("<br><br>");
   document.write("<br><br>");
   // Repetição Loop //
   // for ( serve pra gente repetir alguma coisa num certo número de vezes)//
   
   var numero = 5;
   
   for(var vez = 0; vez < numero; vez++){
      document.write("Executando For, pela" + vez+ "Vez <br><br>");
   }
   document.write("Acabou");
   document.write("<br><br>");
   document.write("<br><br>");
   // Laço While enquanto //
   
   var numero = 5;
   //vai fazer uma verificação e se ela for verdadeira ele vai fazer oque estiver dentro//
   while(numero < 10){
     document.write("número" + numero ,"<br><br>");
     numero++ //sem o decremento se torna loop infinito//
   }
   document.write("Termina Aqui");