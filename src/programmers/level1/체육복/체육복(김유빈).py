def solution(n, lost, reserve):
    clothes = get_clothes_list(n, lost, reserve)

    for i in range(n):
        if clothes[i] != 2:
            continue

        # front
        if i != 0 and clothes[i - 1] == 0:
            clothes[i - 1] += 1
            clothes[i] -= 1
            continue

        # back
        if i + 1 < n and clothes[i + 1] == 0:
            clothes[i + 1] += 1
            clothes[i] -= 1

    return n - clothes.count(0)


def get_clothes_list(n, lost, reserve):
    clothes = [1] * n

    # lost
    for i in lost:
        clothes[i - 1] -= 1

    # reserve
    for i in reserve:
        clothes[i - 1] += 1

    return clothes


print(solution(5, [2, 4], [1, 3, 5]))
print(solution(5, [2, 4], [3]))
print(solution(3, [3], [1]))
