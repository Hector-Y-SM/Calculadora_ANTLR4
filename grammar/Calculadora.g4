grammar Calculadora;

file: expr+;          

expr:
        '('expr')'      #parenthesis
        |
        expr operation=(TIMES|DIV) expr     #timesDiv
        |
        expr operation=(PLUS|MINUS) expr    #plusSubtraction
        |
        NUMBER   #number
        |
        DECIMAL #decimal
        ;

PLUS    :   '+';
MINUS   :   '-';
TIMES   :   '*';
DIV     :   '/';
NUMBER  :   [0-9]+;
DECIMAL :   [0-9]+'.'[0-9]+;
SPACES  :   [ \t\r\n]+ -> skip;