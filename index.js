// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function(x) {
    return x.toLowerCase();
  })
}

function nameToAttributes(arr) {
  let newArr = arr.map(function(fullName) {
    let spaceIndex = fullName.indexOf(" ");
    return Object.assign({}, {firstName: fullName.slice(0, spaceIndex)}, {lastName: fullName.slice(spaceIndex+1)});
  })
  console.log(newArr);
  return newArr;
}
