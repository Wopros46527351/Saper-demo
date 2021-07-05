'''
for x in range(32,128):
    print(f'{x}:{chr(x)}')
'''

def wow(word,lol):
    s=''
    lol=lol%26
    #m=[]
    for i  in word:
        s+=chr((ord(i)+lol-97)%26+97)
        #m.append((ord(i)+lol+97)%122)
    return s



def wowme(word):
    s1=[]
    for lol in range(26):
        s=''      
        for i  in word:
            s+=chr((ord(i)+lol-97)%26+97)           
        s1.append(s)
    return s1



def kill(word,key):
    s=[ord(i)-96 for i in key]
    k=len(s)
    res=''
    for i,char in enumerate(word):
        res+=chr((ord(char)+s[i%k]-97)%26+97)
    return res



def killme(word,key):
    s=[ord(i)-96 for i in key]
    k=len(s)
    res=''
    for i,char in enumerate(word):

        res+=chr((ord(char)-s[i%k]-97+26)%26+97)

    return res






#print(wow("zoo",2))
print(kill('apple','key'))
print(killme('luowj','key'))