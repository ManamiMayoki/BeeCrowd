# Read three integers
a, b, c = map(int, input().split())

# Function to find greatest of two numbers
def maior(x, y):
    return (x + y + abs(x - y)) // 2

# Apply formula
maior_ab = maior(a, b)
maior_abc = maior(maior_ab, c)

# Output result
print(f"{maior_abc} eh o maior")