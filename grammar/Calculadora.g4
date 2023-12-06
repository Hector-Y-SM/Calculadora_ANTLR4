grammar Calculadora;

file: expr+;          

expr:
        expr operation=(TIMES|DIV) expr     #timesDiv
        | 
        expr operation=(PLUS|MINUS) expr    #plusSubtraction
        | 
        OPEN expr operation=(TIMES|DIV) expr CLOSE #timesDiv1
        | 
        OPEN expr operation=(PLUS|MINUS) expr CLOSE #plusSubtraction1
        | 
        OPEN expr operation=CLOSE expr #reverse
        |
        expr operation=OPEN expr CLOSE #normal
        |
        OPEN expr CLOSE      #parenthesis
        | 
        OPEN expr operation=DEFAULT expr CLOSE     #default
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
OPEN    :   '('  ;
CLOSE   :   ')'  ;
NUMBER  :   [0-9]+;
DECIMAL :   [0-9]+'.'[0-9]+;
SPACES  :   [ \t\r\n]+ -> skip;