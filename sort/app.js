let arr = [9, 8, 7, 6, 2, 3, 4, 5, 1, 10]

// quickSort 快速排序
// 先找一个中间数，把比它小的放a数组，大的放b数组。递归。
function quickSort(arr) {
    if (arr.length <= 1) return arr
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]
    let [left, right] = [[], []]
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (item <= pivot) {
            left.push(item)
        }
        else {
            right.push(item)
        }
    }

    return quickSort(left).concat([pivot], quickSort(right))
}

// 冒泡排序

function bubbleSort(arr) {
    let len = arr.length
    // len - 1
    for (let i = 0; i < len - 1; i++) {
        // 后面的元素已经不用再比较了 所以是len - 1 - j
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}


// 选择排序
function selectSort(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

// 插入排序
function insertSort(arr) {
    let len = arr.length
    for (let i = 1; i < len; i++) {
        let current = arr[i]
        let preIndex = i - 1
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex + 1] = current
    }

    return arr
}
