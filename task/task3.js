// дано натуральное число m (m<27). Получить все трехзначные натуральные числа, сумма которых равна m

function task(start, end, num) {
  let arr = []

  for (let i = start; i < end; i++) {
    let b = i.toString().split('').map(Number) // отримуємо всі тризначні числа у вигляді набору цифр щоб потім отримати їх суму
    let d = b.reduce((acc, curVal) => acc + curVal) // отримуємо суму чисел в вигляді числа
    if (d < num) {
      arr.push(b.join('')) // звіряємо чи менше число ніж 27 і якщо так, то додаємо число в масив
    }
  }
  console.log(arr)
}

task(100, 999, 27)
