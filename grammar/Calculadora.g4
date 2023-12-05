grammar Calculadora;

file: expr+;          

expr:
        expr operation=(TIMES|DIV) expr     #timesDiv
        | 
        expr operation=(PLUS|MINUS) expr    #plusSubtraction
        | 
        '('expr operation=(TIMES|DIV) expr')' #timesDiv1
        | 
        '('expr operation=(PLUS|MINUS) expr')'#plusSubtraction1
        | 
        '('expr')'      #parenthesis
        | 
        '('expr operation=DEFAULT expr')'     #default
        | 
        NUMBER   #number
        | 
        DECIMAL #decimal
        ;

PLUS    :   '+'  ;
DEFAULT :   ')(' ;
MINUS   :   '-'  ;
TIMES   :   '*'  ;
DIV     :   '/'  ;
NUMBER  :   [0-9]+;
DECIMAL :   [0-9]+'.'[0-9]+;
SPACES  :   [ \t\r\n]+ -> skip;