from ast import List


nums=List(int)
nums=input().split()

index=0
for i in range(len(nums)):
    for j in range(i+1,len(nums)):
        if nums[i]==nums[j]:
            index=j
            nums.remove(nums[j])
            break

print(index)
print(nums)