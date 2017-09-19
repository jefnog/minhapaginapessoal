/* utilizando um  metodo elegante do principe da matematica Joham Carl Friederich Gauss
onde soma-se 0+100,1+99, 2+98, 3+97 ... por 50 vezes e adicionando o solitario 50 */

var resultado=0; for (var i = 0; i < 50; i++){resultado=((100-i)+i)*50} alert(resultado+50)