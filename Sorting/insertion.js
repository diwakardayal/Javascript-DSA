const numbers = [7, 8, 5, 2, 4, 6, 3];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      console.log(array);
      if (array[j] > temp) {
        array[j + 1] = array[j];
      } else {
        break;
      }
    }
    array[j + 1] = temp;
  }
}

console.clear();
console.log(`--------------------->`);
insertionSort(numbers);
console.log(numbers);
