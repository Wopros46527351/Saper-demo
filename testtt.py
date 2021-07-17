count = 0
variants = []
for x1 in range(1,15):
    for x2 in range(1,15):
        n = x1**3+x2**3
        if n in variants:
            print(n)
        variants.append(n)

