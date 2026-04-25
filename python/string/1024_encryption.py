n=int(input())

for i in range(n):
    s=input()
    result=""
    result=''.join(chr(ord(c)+3) if c.isalpha() else c for c in s)
    result=result[::-1]
    mid=len(result)//2
    result=result[:mid]+''.join(chr(ord(c)-1)for c in result[mid:])
    print(result)
