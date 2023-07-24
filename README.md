# Leetcode 28
# First Occurrence Finder

This repository contains a simple JavaScript function to find the index of the first occurrence of a given substring (needle) within a larger string (haystack). If the needle is not part of the haystack, it returns -1.

## Problem Description

Given two strings `needle` and `haystack`, the task is to find the index of the first occurrence of `needle` in `haystack`.

### Example 1:

Input:
```javascript
haystack = "sadbutsad"
needle = "sad"
```

Output:
```
0
```

Explanation: "sad" occurs at index 0 and 6 in the haystack. The function returns 0, which corresponds to the first occurrence.

### Example 2:

Input:
```javascript
haystack = "leetcode"
needle = "leeto"
```

Output:
```
-1
```

Explanation: "leeto" does not occur in "leetcode," so the function returns -1.

## Function Implementation

The repository provides two implementations of the function:

### Simple Solution

The `indexOfFirstOccurrenceInStr` function uses the JavaScript `indexOf` method to find the index of the first occurrence of the needle in the haystack. This is a straightforward approach that provides the correct result.

### Complex Solution

The `indexOfFirstOccurrenceInStr2` function provides a more complex solution that manually searches for the first occurrence of the needle in the haystack. This method involves iterating through the haystack and comparing each character with the first character of the needle. If a potential match is found, it continues to compare the subsequent characters to verify if it is indeed the needle. Although this approach works correctly, it is more complicated and less efficient than the simple solution.

## How to Use

To use the functions, simply copy and paste the code into your JavaScript project. You can call either `indexOfFirstOccurrenceInStr` or `indexOfFirstOccurrenceInStr2` with the appropriate parameters (haystack and needle) to find the index of the first occurrence.

Example usage:

```javascript
console.log(indexOfFirstOccurrenceInStr("sadbutsad", "sad")); // Output: 0
console.log(indexOfFirstOccurrenceInStr("leetcode", "leeto")); // Output: -1
console.log(indexOfFirstOccurrenceInStr2("sadbutsad", "sad")); // Output: 0
console.log(indexOfFirstOccurrenceInStr2("leetcode", "leeto")); // Output: -1
```

Please note that the simple solution is recommended for most use cases due to its simplicity and efficiency.

## License

This project is licensed under the MIT License. Feel free to use and modify the code as needed.
