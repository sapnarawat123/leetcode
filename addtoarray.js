
let a = [2,4,3]
let b = [5,6,4]

let a = [2,4,3]
let b = [5,6,4]

let result = []
let carry = 0

for (let i = 0; i < a.length; i++) {

    let sum = a[i] + b[i] + carry

    let digit = sum % 10
    carry = Math.floor(sum / 10)

    result.push(digit)
}

if (carry > 0) {
    result.push(carry)
}

console.log(result)