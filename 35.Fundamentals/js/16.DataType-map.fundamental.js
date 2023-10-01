let map = new Map()
map.set('name', 'roger')
map.set('lastname', 'Acosta')
map.set('age', 33)

console.log(map)
console.log(map.size)
console.log(map.has('name'))
console.log(map.get('name'))

map.set('name', 'Miguel')
console.log(map.get('name'))

map.delete('lastname')
console.log(map)

map.set(19, '19')
map.set(false, 'false')
map.set({}, 'object')
console.log(map)

for(let [key,value] of map){
  console.log(`Key:${key}, value:${value}`)
}

const map2 = new Map([
  ['name', 'cloy'],
  ['age', 3],
  ['animal', 'dog'],
  [null, 'null']
])

console.log(map2)

const keysMaps2 = [...map2.keys()]
const valuesMaps2 = [...map2.values()]

console.log(keysMaps2)
console.log(valuesMaps2)
