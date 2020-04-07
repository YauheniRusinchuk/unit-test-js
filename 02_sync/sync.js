class Lodash {
  compact(array) {
    return array.filter(value => !!value)
  }
  groupBy(array, prop) {
    return array.reduce((acc, i) => {
      const key = prop(i)
      if(!acc[key]) {
        acc[key] = []
      }
      acc[key].push(i)
      return acc
    }, {})
  }
}

module.exports = Lodash
