const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

let saved;
let presaved
function SelectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] < array[j + 1]) {
          saved = array[j];
        }

        if(presaved < saved ){
presaved = saved;
        }
      }
      console.log(array)
      let temp = presaved;
      presaved = array[i];
      array[i] = temp;
    }
  }
}
console.log();

console.clear();
SelectionSort(numbers);
console.log(numbers);
