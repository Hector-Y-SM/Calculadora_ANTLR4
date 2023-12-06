import CalculadoraVisitor from "../grammar/grammar/CalculadoraVisitor.js";

export default class CustomVisitor extends CalculadoraVisitor {

	// Visit a parse tree produced by CalculadoraParser#file.
	visitFile(ctx) {
    //console.log('Hola Visit File');
    const resultado = this.visit(ctx.expr()); //! el 0 era la razon, quitarlo para no solo obtener el primer valor del array, quiero todos
    //console.log('adios visit File');
	  return resultado; //null
	}

	// Visit a parse tree produced by CalculadoraParser#timesDiv.
	visitTimesDiv(ctx) {
    //console.log('entramos al visitor times')
    const num1 = this.visit(ctx.expr(0)); //sacar los valores de los numeros
    const num2 = this.visit(ctx.expr(1));
    if (ctx.operation.type == 4) {
      return num1 * num2;
    } 
    return num1 / num2;
	}

  // Visit a parse tree produced by CalculadoraParser#plusSubtraction.
	visitPlusSubtraction(ctx) {
    //console.log('Entramos al visitor Plus');
    const num1 = this.visit(ctx.expr(0)); 
    const num2 = this.visit(ctx.expr(1));
    if (ctx.operation.type == 1){ //suma
      return num1 + num2;
    }
    return num1 - num2;     //resta
	}

  // Visit a parse tree produced by CalculadoraParser#default.
	visitDefault(ctx) {
    //console.log('default')
    const num1 = this.visit(ctx.expr(0));
    const num2 = this.visit(ctx.expr(1));
    if (ctx.operation.type == 2){
      return num1 * num2;
    }  
	}

  // Visit a parse tree produced by CalculadoraParser#normal.
	visitNormal(ctx) {
    //console.log('normal')
	  const num1 = this.visit(ctx.expr(0)); 
    const num2 = this.visit(ctx.expr(1));
    if(ctx.operation.type == 6){ return num1 * num2; }  
	}

  // Visit a parse tree produced by CalculadoraParser#reverse.
	visitReverse(ctx) {
    //console.log('reversa');
    const num1 = this.visit(ctx.expr(0));
    const num2 = this.visit(ctx.expr(1));
	  if(ctx.operation.type == 7){
      return num1*num2
    }
	}

  // Visit a parse tree produced by CalculadoraParser#parentheses.
  visitParenthesis(ctx) {  
    const num1 = this.visit(ctx.expr(0)); //obtener resultado
    return Number(num1);  
	}

  // Visit a parse tree produced by CalculadoraParser#number.
	visitNumber(ctx) {
    //console.log('Visit Number')
	  return Number(ctx.getText()); // retornamos el valor 
	}

  // Visit a parse tree produced by CalculadoraParser#decimal.
	visitDecimal(ctx) {
    //console.log('decimal')
	  return Number(ctx.getText());
	}
}