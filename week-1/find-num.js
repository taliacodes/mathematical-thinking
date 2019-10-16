//find a positive integer that becomes n times smaller when the first digit is deleted

const timesSmaller = num => {
  for (let i = 1; i < 1000; i++) {
    // console.log('this is i', i)
    let product = i * num
    // console.log('this is the product', product)
    let productStr = product.toString()
    // console.log('this is the productStr', productStr)
    // console.log('this is the typeof productStr', typeof productStr)
    let minusFirstIndex = productStr.substring(1, productStr.length)
    // console.log('minus first index', minusFirstIndex)
    if (i.toString() === minusFirstIndex) {
      return product
    }
  }
}

console.log(timesSmaller(57))

