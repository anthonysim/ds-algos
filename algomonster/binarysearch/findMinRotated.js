// A sorted array of unique integers was rotated at an unknown pivot. For example, [10, 20, 30, 40, 50] becomes [30, 40, 50, 10, 20]. Find the index of the minimum element in this array. All the numbers are unique.

function findMinRotated(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

console.log(findMinRotated([30, 40, 50, 10, 20]));

console.log(findFirstOccurrence([30, 40, 50, 10, 20])); // index at 3

// time: O(logN)
// space: O(1)