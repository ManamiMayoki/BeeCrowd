
def fib(n):
    a, b = 0, 1
    i = 0
    c=-2
    while i < (c+n):
        print(a,b)
        
        a, b = b, a + b
        
        i += 1
    print(a)
fib(4)