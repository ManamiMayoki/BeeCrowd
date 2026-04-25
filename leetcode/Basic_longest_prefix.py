def longestCommonPrefix(strs):
    if not strs: #input list is empty
        return ""
    
    for i in range(len(strs[0])):
        char=strs[0][i]
        for j in range(1,len(strs)):
            if i==len(strs[j]) or strs[j][i]!=char: #current string shorter than reference, :->up to
                return strs[0][:i]
    return strs[0]

words=input().split()
print(longestCommonPrefix(words))
    