const data = {
    tree: [
      {
        name: 'name1',
        tree_1: [
          { name: 'name2' },
          { name: 'name3' },
          {
            name: 'name4',
            tree_2: [
              { name: 'name5' },
              { name: 'name6' },
              {
                tree_3: [
                  { name: undefined },
                  { name: 'name7', age: 20 },
                  { name: 'name8', age: 15 },
                  { name: 'name9', age: 31 },
                  { name: 'name10', age: 30 },
                  { name: undefined, age: undefined },
                  { name: 'empty', age: 'empty' },
                ],
              },
            ],
          },
          { name: 'name11' },
        ],
    },
    {
      name: 'name12',
      tree_4: [{ name: 'name3' }],
    },
  ],
};
  

function findTree3(obj){ // можно добавить еще аргумент, например, keyToFind и заменить 'tree_3' на keyToFind. Получится более универсально.

    if(obj.hasOwnProperty('tree_3')){
        return obj.tree_3
    }

    for(let key in obj){
      if(typeof obj[key] === 'object'){
        const currentObj = findTree3(obj[key])
        if(currentObj){
            return currentObj
        }
      }
    }
}

function filterArray(array){

    if(!Array.isArray(array)){
        return null
    }

    return array.filter((item) => {
        if(item.name !== undefined && item.name !== 'empty' ){
            return item
        }
    })
}

function sortArray(array){

    if(!Array.isArray(array)){
        return null
    }

    return array.sort((a, b) => {
        if(a.name && b.name){
            const nameA = parseInt(a.name.replace('name', ''))
            const nameB = parseInt(b.name.replace('name', ''))
            return nameB - nameA
        }
        if(!a.name) return 1
        if(!b.name) return -1
    })
}

const foundArray = findTree3(data)
const filteredArray = filterArray(foundArray)
const sortedArray = sortArray(filteredArray)
console.log(sortedArray)