// Generated from ./grammar/Calculadora.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculadoraVisitor from './CalculadoraVisitor.js';

const serializedATN = [4,1,10,46,2,0,7,0,2,1,7,1,1,0,4,0,6,8,0,11,0,12,0,
7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,3,1,28,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,41,8,1,10,1,
12,1,44,9,1,1,1,0,1,2,2,0,2,0,2,1,0,4,5,2,0,1,1,3,3,51,0,5,1,0,0,0,2,27,
1,0,0,0,4,6,3,2,1,0,5,4,1,0,0,0,6,7,1,0,0,0,7,5,1,0,0,0,7,8,1,0,0,0,8,1,
1,0,0,0,9,10,6,1,-1,0,10,11,5,6,0,0,11,12,3,2,1,0,12,13,5,7,0,0,13,14,3,
2,1,8,14,28,1,0,0,0,15,16,5,6,0,0,16,17,3,2,1,0,17,18,5,2,0,0,18,19,3,2,
1,0,19,20,5,7,0,0,20,28,1,0,0,0,21,22,5,6,0,0,22,23,3,2,1,0,23,24,5,7,0,
0,24,28,1,0,0,0,25,28,5,8,0,0,26,28,5,9,0,0,27,9,1,0,0,0,27,15,1,0,0,0,27,
21,1,0,0,0,27,25,1,0,0,0,27,26,1,0,0,0,28,42,1,0,0,0,29,30,10,4,0,0,30,31,
7,0,0,0,31,41,3,2,1,5,32,33,10,3,0,0,33,34,7,1,0,0,34,41,3,2,1,4,35,36,10,
7,0,0,36,37,5,6,0,0,37,38,3,2,1,0,38,39,5,7,0,0,39,41,1,0,0,0,40,29,1,0,
0,0,40,32,1,0,0,0,40,35,1,0,0,0,41,44,1,0,0,0,42,40,1,0,0,0,42,43,1,0,0,
0,43,3,1,0,0,0,44,42,1,0,0,0,4,7,27,40,42];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculadoraParser extends antlr4.Parser {

    static grammarFileName = "Calculadora.g4";
    static literalNames = [ null, "'+'", "')('", "'-'", "'*'", "'/'", "'('", 
                            "')'" ];
    static symbolicNames = [ null, "PLUS", "DEFAULT", "MINUS", "TIMES", 
                             "DIV", "OPEN", "CLOSE", "NUMBER", "DECIMAL", 
                             "SPACES" ];
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
    		case 2:
    			return this.precpred(this._ctx, 7);
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
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 832) !== 0));
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
	        this.state = 27;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ReverseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 10;
	            this.match(CalculadoraParser.OPEN);
	            this.state = 11;
	            this.expr(0);
	            this.state = 12;
	            localctx.operation = this.match(CalculadoraParser.CLOSE);
	            this.state = 13;
	            this.expr(8);
	            break;

	        case 2:
	            localctx = new DefaultContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 15;
	            this.match(CalculadoraParser.OPEN);
	            this.state = 16;
	            this.expr(0);
	            this.state = 17;
	            localctx.operation = this.match(CalculadoraParser.DEFAULT);
	            this.state = 18;
	            this.expr(0);
	            this.state = 19;
	            this.match(CalculadoraParser.CLOSE);
	            break;

	        case 3:
	            localctx = new ParenthesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 21;
	            this.match(CalculadoraParser.OPEN);
	            this.state = 22;
	            this.expr(0);
	            this.state = 23;
	            this.match(CalculadoraParser.CLOSE);
	            break;

	        case 4:
	            localctx = new NumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 25;
	            this.match(CalculadoraParser.NUMBER);
	            break;

	        case 5:
	            localctx = new DecimalContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 26;
	            this.match(CalculadoraParser.DECIMAL);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 40;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TimesDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CalculadoraParser.RULE_expr);
	                    this.state = 29;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 30;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===4 || _la===5)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 31;
	                    this.expr(5);
	                    break;

	                case 2:
	                    localctx = new PlusSubtractionContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CalculadoraParser.RULE_expr);
	                    this.state = 32;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 33;
	                    localctx.operation = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===1 || _la===3)) {
	                        localctx.operation = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 34;
	                    this.expr(4);
	                    break;

	                case 3:
	                    localctx = new NormalContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CalculadoraParser.RULE_expr);
	                    this.state = 35;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 36;
	                    localctx.operation = this.match(CalculadoraParser.OPEN);
	                    this.state = 37;
	                    this.expr(0);
	                    this.state = 38;
	                    this.match(CalculadoraParser.CLOSE);
	                    break;

	                } 
	            }
	            this.state = 44;
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
CalculadoraParser.PLUS = 1;
CalculadoraParser.DEFAULT = 2;
CalculadoraParser.MINUS = 3;
CalculadoraParser.TIMES = 4;
CalculadoraParser.DIV = 5;
CalculadoraParser.OPEN = 6;
CalculadoraParser.CLOSE = 7;
CalculadoraParser.NUMBER = 8;
CalculadoraParser.DECIMAL = 9;
CalculadoraParser.SPACES = 10;

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

class NormalContext extends ExprContext {

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

	CLOSE() {
	    return this.getToken(CalculadoraParser.CLOSE, 0);
	};

	OPEN() {
	    return this.getToken(CalculadoraParser.OPEN, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitNormal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.NormalContext = NormalContext;

class DefaultContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	OPEN() {
	    return this.getToken(CalculadoraParser.OPEN, 0);
	};

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

	CLOSE() {
	    return this.getToken(CalculadoraParser.CLOSE, 0);
	};

	DEFAULT() {
	    return this.getToken(CalculadoraParser.DEFAULT, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitDefault(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.DefaultContext = DefaultContext;

class ReverseContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.operation = null;;
        super.copyFrom(ctx);
    }

	OPEN() {
	    return this.getToken(CalculadoraParser.OPEN, 0);
	};

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

	CLOSE() {
	    return this.getToken(CalculadoraParser.CLOSE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CalculadoraVisitor ) {
	        return visitor.visitReverse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculadoraParser.ReverseContext = ReverseContext;

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

	OPEN() {
	    return this.getToken(CalculadoraParser.OPEN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CLOSE() {
	    return this.getToken(CalculadoraParser.CLOSE, 0);
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
