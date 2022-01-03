def solution(answers):
    answer = []

    first_answers = list([1, 2, 3, 4, 5] * ((len(answers) // 5) + 1))
    second_answers = list([2, 1, 2, 3, 2, 4, 2, 5] * ((len(answers) // 8) + 1))
    third_answers = list([3, 3, 1, 1, 2, 2, 4, 4, 5, 5] * ((len(answers) // 10) + 1))

    count_list = [0] * 3
    for i in range(len(answers)):
        if answers[i] == first_answers[i]:
            count_list[0] += 1
        if answers[i] == second_answers[i]:
            count_list[1] += 1
        if answers[i] == third_answers[i]:
            count_list[2] += 1

    max_answer = max(count_list)
    for i in range(len(count_list)):
        if max_answer == count_list[i]:
            answer.append(i + 1)

    answer.sort()

    return answer


print(solution([1, 2, 3, 4, 5]))  # [1]
print(solution([1, 3, 2, 4, 2]))  # [1, 2, 3]
