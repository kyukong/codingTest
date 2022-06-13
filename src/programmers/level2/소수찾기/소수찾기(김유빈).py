from itertools import permutations


def solution(numbers):
    answer = list()

    permutation = list()
    for i in range(1, len(numbers) + 1):
        permutation.extend(list(set(permutations(numbers, i))))

    for number_set in permutation:
        number = int(''.join(number_set))
        if is_prime(number):
            answer.append(number)

    return len(set(answer))


def is_prime(number):
    if number < 2:
        return False

    for i in range(2, int(number / 2) + 1):
        if number % i == 0:
            return False
    return True


print(solution("17"))  # 3
print(solution("011"))  # 2
