import math  # Import math module for sqrt()

n = int(input())  
# input() returns string → convert to integer

phi = (1 + math.sqrt(5)) / 2  
# Golden ratio formula: φ = (1 + √5) / 2

fib = round(pow(phi, n) / math.sqrt(5))  
# Fibonacci formula: F(n) = φ^n / √5
# pow(phi, n) → φ raised to power n
# divide by √5
# round() → correct floating point approximation

print(fib)  
# Output the nth Fibonacci number