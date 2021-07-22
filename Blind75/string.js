// ! Given a string s, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function (s) {};

// console.log(lengthOfLongestSubstring('abcabcbb') ) // 3
// console.log(lengthOfLongestSubstring('bbbbb') )    // 1
// console.log(lengthOfLongestSubstring('pwwkew') )   // 3
// console.log(lengthOfLongestSubstring('') )         // 0

// ! You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

var characterReplacement = function (s, k) {};

// console.log(characterReplacement("ABAB", 2)); // 4
// console.log(characterReplacement("AABABBA", 1)); // 4

// ! Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

var minWindow = function (s, t) {};

// console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
// console.log(minWindow("a", "a")); // "a"
// console.log(minWindow("a", "aa")); // ""

// !Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function (s, t) {};

// console.log(isAnagram("anagram", "nagaram")); // true
// console.log(isAnagram("rat", "car")); // false

// ! Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

var groupAnagrams = function (strs) {};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
// console.log(groupAnagrams([])); // [[]]
// console.log(groupAnagrams(["a"])); // [['a']]
