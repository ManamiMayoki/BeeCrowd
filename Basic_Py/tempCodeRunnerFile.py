n = int(input())
nums = list(map(int, input().split()))

sum=0
for i in range(n):
    sum+=nums[i]

print(sum)