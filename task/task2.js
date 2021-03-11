// даны натуральное число n, действильные числа a1, ..., an. Получить max (|a1|, ...,|an|) и корень (a1 + ... + an)^2

function task(arr) {
  const findMax = (arr) => Math.max(...arr.map((x) => Math.abs(x)))
  console.log(`Найбільше число по модулю - ${findMax(arr)}`)

  const sqrt = (arr) => Math.hypot(arr.reduce((acc, curVal) => acc + curVal, 0))
  console.log(`Корінь з суми квадрату аргументів - ${sqrt(arr)}`)
}

task([20, -5, -200, 100])
