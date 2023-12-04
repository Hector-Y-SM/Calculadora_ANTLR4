// Generated from ./grammar/Calculadora.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,9,54,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,
1,4,1,5,1,5,1,6,4,6,33,8,6,11,6,12,6,34,1,7,4,7,38,8,7,11,7,12,7,39,1,7,
1,7,4,7,44,8,7,11,7,12,7,45,1,8,4,8,49,8,8,11,8,12,8,50,1,8,1,8,0,0,9,1,
1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,1,0,2,1,0,48,57,3,0,9,10,13,13,32,
32,57,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,
0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,19,1,0,0,0,3,21,1,0,0,0,5,
23,1,0,0,0,7,25,1,0,0,0,9,27,1,0,0,0,11,29,1,0,0,0,13,32,1,0,0,0,15,37,1,
0,0,0,17,48,1,0,0,0,19,20,5,40,0,0,20,2,1,0,0,0,21,22,5,41,0,0,22,4,1,0,
0,0,23,24,5,43,0,0,24,6,1,0,0,0,25,26,5,45,0,0,26,8,1,0,0,0,27,28,5,42,0,
0,28,10,1,0,0,0,29,30,5,47,0,0,30,12,1,0,0,0,31,33,7,0,0,0,32,31,1,0,0,0,
33,34,1,0,0,0,34,32,1,0,0,0,34,35,1,0,0,0,35,14,1,0,0,0,36,38,7,0,0,0,37,
36,1,0,0,0,38,39,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,41,1,0,0,0,41,43,
5,46,0,0,42,44,7,0,0,0,43,42,1,0,0,0,44,45,1,0,0,0,45,43,1,0,0,0,45,46,1,
0,0,0,46,16,1,0,0,0,47,49,7,1,0,0,48,47,1,0,0,0,49,50,1,0,0,0,50,48,1,0,
0,0,50,51,1,0,0,0,51,52,1,0,0,0,52,53,6,8,0,0,53,18,1,0,0,0,5,0,34,39,45,
50,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CalculadoraLexer extends antlr4.Lexer {

    static grammarFileName = "Calculadora.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "')'", "'+'", "'-'", "'*'", "'/'" ];
	static symbolicNames = [ null, null, null, "PLUS", "MINUS", "TIMES", "DIV", 
                          "NUMBER", "DECIMAL", "SPACES" ];
	static ruleNames = [ "T__0", "T__1", "PLUS", "MINUS", "TIMES", "DIV", "NUMBER", 
                      "DECIMAL", "SPACES" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CalculadoraLexer.EOF = antlr4.Token.EOF;
CalculadoraLexer.T__0 = 1;
CalculadoraLexer.T__1 = 2;
CalculadoraLexer.PLUS = 3;
CalculadoraLexer.MINUS = 4;
CalculadoraLexer.TIMES = 5;
CalculadoraLexer.DIV = 6;
CalculadoraLexer.NUMBER = 7;
CalculadoraLexer.DECIMAL = 8;
CalculadoraLexer.SPACES = 9;



