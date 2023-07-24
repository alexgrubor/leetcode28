/*Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

//Solution:

//simple solution:

const indexOfFirstOccurrenceInStr = (haystack, needle)=>{
    let index = haystack.indexOf(needle);
    return index;

}

//complex solution:

const indexOfFirstOccurrenceInStr2 = (haystack,needle)=>{
    let index = -1;
    let needleLen = needle.length;
    let haystackLen = haystack.length;
    if(needleLen > haystackLen){
        return index;
    }
    for(let i = 0; i <= haystackLen - needleLen; i++){
        if(haystack[i] === needle[0]){
            let j = 0;
            while(j < needleLen){
                if(haystack[i+j] !== needle[j]){
                    break;
                }
                j++;
            }
            if(j === needleLen){
                index = i;
                break;
            }
        }
    }
    return index;
}

console.log(indexOfFirstOccurrenceInStr("sadbutsad", "sad"));
console.log(indexOfFirstOccurrenceInStr("leetcode", "leeto"));
console.log(indexOfFirstOccurrenceInStr2("sadbutsad", "sad"));
console.log(indexOfFirstOccurrenceInStr2("leetcode", "leeto"));
