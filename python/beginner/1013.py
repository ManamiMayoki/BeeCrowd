a, b, c = map(int, input().split())

def maior(x, y):
    return (x + y + abs(x - y)) // 2

maior_ab = maior(a, b)
maior_abc = maior(maior_ab, c)

print(f"{maior_abc} eh o maior")