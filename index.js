// Add your functions here
function map(arr, cb){
  const newArr = []
  for(let i = 0; i < arr.length; i++){
    const result = cb(arr[i])
    newArr.push(result)
  }
  return newArr
}

function reduce(arr, cb, start){
  let result = ''

  if (!start){
    result = arr[0]
  } else {
    result = start
  }

  for(let i = (!start ? 1 : 0); i < arr.length; i++){
    result = cb(result, arr[i])
  }
  return result
}

//or
function reduce(arr, cb, start = 0){
  if(start){
    let sum = start
    for(let i = 0; i < arr.length; i++) {
      sum =  cb(arr[i], sum)
    }
    return sum
  } else {
      let sum = arr[0];
      for(let i = 1; i < arr.length; i++) {
        sum =  cb(arr[i], sum)
      }
    return sum
  }
}

// or
function reduce(arr, cb, start) {
  let total = start ? start : arr[0];
  let i = (total === arr[0]) ? 1 : 0;

  for(i; i < arr.length; i++) {
    total = cb(total, arr[i]);
  }
  return total;
}
