// Generated from /home/hertorprime/5to/lenguajes-automataz/gramatica/antlr_next/grammar/Calculadora.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CalculadoraParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PLUS=1, DEFAULT=2, MINUS=3, TIMES=4, DIV=5, OPEN=6, CLOSE=7, NUMBER=8, 
		DECIMAL=9, SPACES=10;
	public static final int
		RULE_file = 0, RULE_expr = 1;
	private static String[] makeRuleNames() {
		return new String[] {
			"file", "expr"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'+'", "')('", "'-'", "'*'", "'/'", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PLUS", "DEFAULT", "MINUS", "TIMES", "DIV", "OPEN", "CLOSE", "NUMBER", 
			"DECIMAL", "SPACES"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Calculadora.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CalculadoraParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FileContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public FileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_file; }
	}

	public final FileContext file() throws RecognitionException {
		FileContext _localctx = new FileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_file);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(5); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(4);
				expr(0);
				}
				}
				setState(7); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 832L) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TimesDivContext extends ExprContext {
		public Token operation;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode TIMES() { return getToken(CalculadoraParser.TIMES, 0); }
		public TerminalNode DIV() { return getToken(CalculadoraParser.DIV, 0); }
		public TimesDivContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NumberContext extends ExprContext {
		public TerminalNode NUMBER() { return getToken(CalculadoraParser.NUMBER, 0); }
		public NumberContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NormalContext extends ExprContext {
		public Token operation;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode CLOSE() { return getToken(CalculadoraParser.CLOSE, 0); }
		public TerminalNode OPEN() { return getToken(CalculadoraParser.OPEN, 0); }
		public NormalContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DefaultContext extends ExprContext {
		public Token operation;
		public TerminalNode OPEN() { return getToken(CalculadoraParser.OPEN, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode CLOSE() { return getToken(CalculadoraParser.CLOSE, 0); }
		public TerminalNode DEFAULT() { return getToken(CalculadoraParser.DEFAULT, 0); }
		public DefaultContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TimesDiv1Context extends ExprContext {
		public Token operation;
		public TerminalNode OPEN() { return getToken(CalculadoraParser.OPEN, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode CLOSE() { return getToken(CalculadoraParser.CLOSE, 0); }
		public TerminalNode TIMES() { return getToken(CalculadoraParser.TIMES, 0); }
		public TerminalNode DIV() { return getToken(CalculadoraParser.DIV, 0); }
		public TimesDiv1Context(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PlusSubtraction1Context extends ExprContext {
		public Token operation;
		public TerminalNode OPEN() { return getToken(CalculadoraParser.OPEN, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode CLOSE() { return getToken(CalculadoraParser.CLOSE, 0); }
		public TerminalNode PLUS() { return getToken(CalculadoraParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(CalculadoraParser.MINUS, 0); }
		public PlusSubtraction1Context(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReverseContext extends ExprContext {
		public Token operation;
		public TerminalNode OPEN() { return getToken(CalculadoraParser.OPEN, 0); }
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode CLOSE() { return getToken(CalculadoraParser.CLOSE, 0); }
		public ReverseContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DecimalContext extends ExprContext {
		public TerminalNode DECIMAL() { return getToken(CalculadoraParser.DECIMAL, 0); }
		public DecimalContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PlusSubtractionContext extends ExprContext {
		public Token operation;
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(CalculadoraParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(CalculadoraParser.MINUS, 0); }
		public PlusSubtractionContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParenthesisContext extends ExprContext {
		public TerminalNode OPEN() { return getToken(CalculadoraParser.OPEN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode CLOSE() { return getToken(CalculadoraParser.CLOSE, 0); }
		public ParenthesisContext(ExprContext ctx) { copyFrom(ctx); }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(39);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				{
				_localctx = new TimesDiv1Context(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(10);
				match(OPEN);
				setState(11);
				expr(0);
				setState(12);
				((TimesDiv1Context)_localctx).operation = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==TIMES || _la==DIV) ) {
					((TimesDiv1Context)_localctx).operation = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(13);
				expr(0);
				setState(14);
				match(CLOSE);
				}
				break;
			case 2:
				{
				_localctx = new PlusSubtraction1Context(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(16);
				match(OPEN);
				setState(17);
				expr(0);
				setState(18);
				((PlusSubtraction1Context)_localctx).operation = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
					((PlusSubtraction1Context)_localctx).operation = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(19);
				expr(0);
				setState(20);
				match(CLOSE);
				}
				break;
			case 3:
				{
				_localctx = new ReverseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(22);
				match(OPEN);
				setState(23);
				expr(0);
				setState(24);
				((ReverseContext)_localctx).operation = match(CLOSE);
				setState(25);
				expr(6);
				}
				break;
			case 4:
				{
				_localctx = new ParenthesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(27);
				match(OPEN);
				setState(28);
				expr(0);
				setState(29);
				match(CLOSE);
				}
				break;
			case 5:
				{
				_localctx = new DefaultContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(31);
				match(OPEN);
				setState(32);
				expr(0);
				setState(33);
				((DefaultContext)_localctx).operation = match(DEFAULT);
				setState(34);
				expr(0);
				setState(35);
				match(CLOSE);
				}
				break;
			case 6:
				{
				_localctx = new NumberContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(37);
				match(NUMBER);
				}
				break;
			case 7:
				{
				_localctx = new DecimalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(38);
				match(DECIMAL);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(54);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(52);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
					case 1:
						{
						_localctx = new TimesDivContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(41);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(42);
						((TimesDivContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==TIMES || _la==DIV) ) {
							((TimesDivContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(43);
						expr(11);
						}
						break;
					case 2:
						{
						_localctx = new PlusSubtractionContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(44);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(45);
						((PlusSubtractionContext)_localctx).operation = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==MINUS) ) {
							((PlusSubtractionContext)_localctx).operation = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(46);
						expr(10);
						}
						break;
					case 3:
						{
						_localctx = new NormalContext(new ExprContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(47);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(48);
						((NormalContext)_localctx).operation = match(OPEN);
						setState(49);
						expr(0);
						setState(50);
						match(CLOSE);
						}
						break;
					}
					} 
				}
				setState(56);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 10);
		case 1:
			return precpred(_ctx, 9);
		case 2:
			return precpred(_ctx, 5);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\n:\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0001"+
		"\u0000\u0004\u0000\u0006\b\u0000\u000b\u0000\f\u0000\u0007\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001"+
		"(\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0005\u00015\b\u0001\n\u0001\f\u00018\t\u0001\u0001\u0001\u0000\u0001"+
		"\u0002\u0002\u0000\u0002\u0000\u0002\u0001\u0000\u0004\u0005\u0002\u0000"+
		"\u0001\u0001\u0003\u0003A\u0000\u0005\u0001\u0000\u0000\u0000\u0002\'"+
		"\u0001\u0000\u0000\u0000\u0004\u0006\u0003\u0002\u0001\u0000\u0005\u0004"+
		"\u0001\u0000\u0000\u0000\u0006\u0007\u0001\u0000\u0000\u0000\u0007\u0005"+
		"\u0001\u0000\u0000\u0000\u0007\b\u0001\u0000\u0000\u0000\b\u0001\u0001"+
		"\u0000\u0000\u0000\t\n\u0006\u0001\uffff\uffff\u0000\n\u000b\u0005\u0006"+
		"\u0000\u0000\u000b\f\u0003\u0002\u0001\u0000\f\r\u0007\u0000\u0000\u0000"+
		"\r\u000e\u0003\u0002\u0001\u0000\u000e\u000f\u0005\u0007\u0000\u0000\u000f"+
		"(\u0001\u0000\u0000\u0000\u0010\u0011\u0005\u0006\u0000\u0000\u0011\u0012"+
		"\u0003\u0002\u0001\u0000\u0012\u0013\u0007\u0001\u0000\u0000\u0013\u0014"+
		"\u0003\u0002\u0001\u0000\u0014\u0015\u0005\u0007\u0000\u0000\u0015(\u0001"+
		"\u0000\u0000\u0000\u0016\u0017\u0005\u0006\u0000\u0000\u0017\u0018\u0003"+
		"\u0002\u0001\u0000\u0018\u0019\u0005\u0007\u0000\u0000\u0019\u001a\u0003"+
		"\u0002\u0001\u0006\u001a(\u0001\u0000\u0000\u0000\u001b\u001c\u0005\u0006"+
		"\u0000\u0000\u001c\u001d\u0003\u0002\u0001\u0000\u001d\u001e\u0005\u0007"+
		"\u0000\u0000\u001e(\u0001\u0000\u0000\u0000\u001f \u0005\u0006\u0000\u0000"+
		" !\u0003\u0002\u0001\u0000!\"\u0005\u0002\u0000\u0000\"#\u0003\u0002\u0001"+
		"\u0000#$\u0005\u0007\u0000\u0000$(\u0001\u0000\u0000\u0000%(\u0005\b\u0000"+
		"\u0000&(\u0005\t\u0000\u0000\'\t\u0001\u0000\u0000\u0000\'\u0010\u0001"+
		"\u0000\u0000\u0000\'\u0016\u0001\u0000\u0000\u0000\'\u001b\u0001\u0000"+
		"\u0000\u0000\'\u001f\u0001\u0000\u0000\u0000\'%\u0001\u0000\u0000\u0000"+
		"\'&\u0001\u0000\u0000\u0000(6\u0001\u0000\u0000\u0000)*\n\n\u0000\u0000"+
		"*+\u0007\u0000\u0000\u0000+5\u0003\u0002\u0001\u000b,-\n\t\u0000\u0000"+
		"-.\u0007\u0001\u0000\u0000.5\u0003\u0002\u0001\n/0\n\u0005\u0000\u0000"+
		"01\u0005\u0006\u0000\u000012\u0003\u0002\u0001\u000023\u0005\u0007\u0000"+
		"\u000035\u0001\u0000\u0000\u00004)\u0001\u0000\u0000\u00004,\u0001\u0000"+
		"\u0000\u00004/\u0001\u0000\u0000\u000058\u0001\u0000\u0000\u000064\u0001"+
		"\u0000\u0000\u000067\u0001\u0000\u0000\u00007\u0003\u0001\u0000\u0000"+
		"\u000086\u0001\u0000\u0000\u0000\u0004\u0007\'46";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}