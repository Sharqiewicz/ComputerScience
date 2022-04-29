position = 0

def fibonacci(n, s):
    print('current n')
    print(s)
    print(n)
    if(n == 0):
        position = position + 1
        return 0
    if(n == 1):
        position= position + 1
        return 1
    return fibonacci(n-1, 's1') + fibonacci(n-2, 's2')


print(fibonacci(3, 'm'))

print('position')
print(position)