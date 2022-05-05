const numbers = [9, 6, 7, 1, 3, 5];
let saved;
function SelectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    {
      saved = i;
      for (let j = i + 1; j < array.length; j++) {
        console.log(array);

        if (array[saved] < array[j]) {
          saved = j;
        }
      }
      let temp = array[saved];
      array[saved] = array[i];
      array[i] = temp;
    }
  }
}
console.log();

console.clear();
SelectionSort(numbers);
console.log(numbers);
