import CalculadoraVisitor from "../grammar/grammar/CalculadoraVisitor.js";

export default class CustomVisitor extends CalculadoraVisitor {

	// Visit a parse tree produced by CalculadoraParser#file.
	visitFile(ctx) {
    //console.log('Hola Visit File');
    const resultado = this.visit(ctx.expr()); //! el 0 era la razon, quitarlo para no solo obtener el primer valor del array, quiero todos
    //console.log(`Resultado: ${resultado}`);

    //console.log('adios visit File');
	  return resultado; //como es el padre de todo no va a retornar nada ¿¿¿
	}

	// Visit a parse tree produced by CalculadoraParser#timesDiv.
	visitTimesDiv(ctx) {
    //console.log('entramos al visitor times')
    
    const num1 = this.visit(ctx.expr(0)); //sacar los valores de los numeros
    const num2 = this.visit(ctx.expr(1));
    if (ctx.operation.type == 4) {
      //console.log('Tenemos Multiplicacion');
      //console.log('salimos del visitor plus');
      return num1 * num2;
    } 
    return num1 / num2;
	}

  // Visit a parse tree produced by CalculadoraParser#timesDiv1.
	visitTimesDiv1(ctx) {
    console.log('div especial');
    const num1 = this.visit(ctx.expr(0)); 
    const num2 = this.visit(ctx.expr(1));
      if (ctx.operation.type == 4){ 
        //console.log('Tenemos Multiplicacion');
        //console.log('salimos del visitor plus');
        return num1 * num2;
      } 
      return num1 / num2;
	}

  // Visit a parse tree produced by CalculadoraParser#plusSubtraction.
	visitPlusSubtraction(ctx) {
    //console.log('Entramos al visitor Plus');
    const num1 = this.visit(ctx.expr(0)); 
    const num2 = this.visit(ctx.expr(1));
    //console.log(ctx)
    if (ctx.operation.type == 1){
      //console.log('Tenemos suma');
      //console.log('salimos del visitor plus');
      return num1 + num2;
    }
    return num1 - num2;     
	}

  // Visit a parse tree produced by CalculadoraParser#plusSubtraction1.
	visitPlusSubtraction1(ctx) {
    const num1 = this.visit(ctx.expr(0)); 
    const num2 = this.visit(ctx.expr(1));
    if (ctx.operation.type == 1) {
      //console.log('Tenemos suma');
      //console.log('salimos del visitor plus');
      return num1 + num2;
    }
    return num1 - num2;   
	}

  // Visit a parse tree produced by CalculadoraParser#default.
	visitDefault(ctx) {
    //console.log('default')
    const num1 = this.visit(ctx.expr(0));
    const num2 = this.visit(ctx.expr(1));
    if (ctx.operation.type == 2){
      //console.log('Tenemos Multiplicacion');
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
    console.log('reversa');
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
    //console.log(Number(ctx.getText()))
    //console.log('Visit Number')
    //console.log(`Encontramos numero: ${ctx.getText()}`);
    //console.log('salimos del visit number');
	  return Number(ctx.getText()); // retornamos el valor 
	}

  // Visit a parse tree produced by CalculadoraParser#decimal.
	visitDecimal(ctx) {
    //console.log('decimal')
	  return Number(ctx.getText());
	}
}