// Generated from ./grammar/Calculadora.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculadoraVisitor from './CalculadoraVisitor.js';

const serializedATN = [4,1,9,30,2,0,7,0,2,1,7,1,1,0,4,0,6,8,0,11,0,12,0,
7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,17,8,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,25,
8,1,10,1,12,1,28,9,1,1,1,0,1,2,2,0,2,0,2,1,0,5,6,1,0,3,4,32,0,5,1,0,0,0,
2,16,1,0,0,0,4,6,3,2,1,0,5,4,1,0,0,0,6,7,1,0,0,0,7,5,1,0,0,0,7,8,1,0,0,0,
8,1,1,0,0,0,9,10,6,1,-1,0,10,11,5,1,0,0,11,12,3,2,1,0,12,13,5,2,0,0,13,17,
1,0,0,0,14,17,5,7,0,0,15,17,5,8,0,0,16,9,1,0,0,0,16,14,1,0,0,0,16,15,1,0,
0,0,17,26,1,0,0,0,18,19,10,4,0,0,19,20,7,0,0,0,20,25,3,2,1,5,21,22,10,3,
0,0,22,23,7,1,0,0,23,25,3,2,1,4,24,18,1,0,0,0,24,21,1,0,0,0,25,28,1,0,0,
0,26,24,1,0,0,0,26,27,1,0,0,0,27,3,1,0,0,0,28,26,1,0,0,0,4,7,16,24,26];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculadoraParser extends antlr4.Parser {

    static grammarFileName = "Calculadora.g4";
    static literalNames = [ null, "'('", "')'", "'+'", "'-'", "'*'", "'/'" ];
    static symbolicNames = [ null, null, null, "PLUS", "MINUS", "TIMES", 
                             "DIV", "NUMBER", "DECIMAL", "SPACES" ];
    static ruleNames = [ "file", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculadoraParser.ruleNames;
        this.literalNames = CalculadoraParser.literalNames;
        this.symbolicNames = CalculadoraParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculadoraParser.RULE_file);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 5; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 4;
	            this.expr(0);
	            this.state = 7; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 386) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, CalculadoraParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new ParenthesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 10;
	            this.match(CalculadoraParser.T__0);
	            this.state = 11;
	            this.expr(0);
	            this.state = 12;
	            this.match(CalculadoraParser.T__1);
	            break;
	        case 7:
	            localctx = new NumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 14;
	            this.match(CalculadoraParser.NUMBER);
	            break;
	        case 8:
	            localctx = new DecimalContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 15;
	            this.match(CalculadoraParser.DECIMAL);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 26;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 24;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TimesDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CalculadoraParser.RULE_expr);
	                    this.state = 18;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 19;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===5 || _la===6)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 20;
	                    this.expr(5);
	                    break;

	                case 2:
	                    localctx = new PlusSubtractionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CalculadoraParser.RULE_expr);
	                    this.state = 21;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 22;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===3 || _la===4)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 23;
	                    this.expr(4);
	                    break;

	                } 
	            }
	            this.state = 28;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

CalculadoraParser.EOF = antlr4.Token.EOF;
CalculadoraParser.T__0 = 1;
CalculadoraParser.T__1 = 2;
CalculadoraParser.PLUS = 3;
CalculadoraParser.MINUS = 4;
CalculadoraParser.TIMES = 5;
CalculadoraParser.DIV = 6;
CalculadoraParser.NUMBER = 7;
CalculadoraParser.DECIMAL = 8;
CalculadoraParser.SPACES = 9;

CalculadoraParser.RULE_file = 0;
CalculadoraParser.RULE_expr = 1;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculadoraParser.RULE_file;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculadoraParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TimesDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	TIMES() {
	    return this.getToken(CalculadoraParser.TIMES, 0);
	};

	DIV() {
	    return this.getToken(CalculadoraParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitTimesDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.TimesDivContext = TimesDivContext;

class NumberContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(CalculadoraParser.NUMBER, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.NumberContext = NumberContext;

class DecimalContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DECIMAL() {
	    return this.getToken(CalculadoraParser.DECIMAL, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitDecimal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.DecimalContext = DecimalContext;

class PlusSubtractionContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	PLUS() {
	    return this.getToken(CalculadoraParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CalculadoraParser.MINUS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitPlusSubtraction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.PlusSubtractionContext = PlusSubtractionContext;

class ParenthesisContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitParenthesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.ParenthesisContext = ParenthesisContext;


CalculadoraParser.FileContext = FileContext; 
CalculadoraParser.ExprContext = ExprContext; 
