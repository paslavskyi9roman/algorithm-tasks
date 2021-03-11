//даны натуральное число n, действительные числа a1, ... an. В последовательности a1, ..., an
//все отрицательные члены увеличить на 0.5, а все неотрицательные заменить на 0.1

function task(arr) {
  const result = []
  for (let num of arr) {
    if (num >= 0) {
      num = 0.1
      result.push(num)
    } else {
      result.push(num + 0.5)
    }
  }
  return result
}

console.log(task([-2, 20, -5, 1, 12, 6, -5, -20])) // result will be [ -1.5, 0.1, -4.5, 0.1, 0.1, 0.1, -4.5, -19.5 ]
