import CalculadoraVisitor from "../grammar/grammar/CalculadoraVisitor.js";

export default class CustomVisitor extends CalculadoraVisitor {

	// Visit a parse tree produced by CalculadoraParser#file.
	visitFile(ctx) {
    //console.log('Hola Visit File');
    const resultado = this.visit(ctx.expr());
    //resultado.push(); //! el 0 era la razon, quitarlo para no solo obtener el primer valor del array, quiero todos
    //console.log(`Resultado: ${resultado}`);

    //console.log('adios visit File');
	  return resultado; //como es el padre de todo no va a retornar nada ¿¿¿
	}


	// Visit a parse tree produced by CalculadoraParser#timesDiv.
	visitTimesDiv(ctx) {
    //console.log('entramos al visitor times')

    const num1 = this.visit(ctx.expr(0)); 
    const num2 = this.visit(ctx.expr(1));
    if (ctx.operation.type == 5){  //estaba en 3
      //console.log('Tenemos Multiplicacion');
      //console.log('salimos del visitor plus');
      return num1 * num2;
    } 
    return num1 / num2;
	}

  // Visit a parse tree produced by CalculadoraParser#plusSubtraction.
	visitPlusSubtraction(ctx) {
    //console.log('Entramos al visitor Plus');
    //console.log(ctx); 
    const num1 = this.visit(ctx.expr(0)); //sacar los valores de los numeros
    const num2 = this.visit(ctx.expr(1));
    //console.log(ctx)
    if (ctx.operation.type == 3){ //cambio a 3 ?? estaba en 1
      //console.log('Tenemos suma');
      //console.log('salimos del visitor plus');
      return num1 + num2;
    }
    return num1 - num2;     
	}
  	// Visit a parse tree produced by CalculadoraParser#parentheses.
    visitParenthesis(ctx) {
    console.log('parentesis')
    const num1 = this.visit(ctx.expr(0)); //obtener resultado
    //console.log(num1)
	  return Number(num1);
	}

  // Visit a parse tree produced by CalculadoraParser#number.
	visitNumber(ctx) {
    console.log('int')
    //console.log(Number(ctx.getText()))
    //console.log('Visit Number')
    //console.log(`Encontramos numero: ${ctx.getText()}`);
    //console.log('salimos del visit number');
	  return Number(ctx.getText()); // retornamos el valor 
	}

  // Visit a parse tree produced by CalculadoraParser#decimal.
	visitDecimal(ctx) {
    console.log('decimal')
	  return Number(ctx.getText());
	}
}