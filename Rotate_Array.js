
// Rotate Array 

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; 
    
    arr.reverse();

    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

let arr = [3, 8, 9, 2, 5];
let k = 2;

rotateArray(arr, k);
console.log("Rotated Array:", arr);