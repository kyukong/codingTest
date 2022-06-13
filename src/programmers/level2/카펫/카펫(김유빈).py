def solution(brown, yellow):
    total = brown + yellow

    for width in range(3, total):
        height = total // width

        if (width - 2) * (height - 2) == yellow:
            return [height, width]

print(solution(10, 2) == [4, 3])
print(solution(8, 1) == [3, 3])
print(solution(24, 24) == [8, 6])