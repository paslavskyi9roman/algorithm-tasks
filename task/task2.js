// даны натуральное число n, действильные числа a1, ..., an. Получить max (|a1|, ...,|an|) и корень (a1 + ... + an)^2

function task(arr) {
  let max = Math.max(...arr)

  let bank = []

  for (let num of arr) {
    bank.push(Math.sqrt(num))
  }

  console.log(`max of [${arr}] is ${max}. And sum of square root is ${bank.reduce((acc, curVal) => acc + curVal, 0)}`)
}

task([1, 25, 6, 9, 12])
