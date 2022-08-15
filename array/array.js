class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length++
    return this.data
  }

  pop() {
    const lastIndex = this.length - 1
    const lastItem = this.data[lastIndex]
    delete this.data[lastItem]
    this.length--
    return lastItem
  }

  delete(index) {
    const item = this.data[index]
    this.shiftIndex(index)
    return item
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
}

let fruits = new MyArray()
console.log(fruits.push('Pera'))
console.log(fruits.push('platano'))
const lastItemTem = fruits.delete(0)
console.log(lastItemTem)
console.log(fruits)
