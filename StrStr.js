const str1 = "abcdefghijklmnop";
const str2 = "delfgh";

const isSubstring = (str1, str2) => {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const length1 = str1.length, length2 = str2.length;
    
    const base = 26;  // Base for the hash function (26 letters in the alphabet)
    const mod = 1e9 + 7;  // A large prime number to prevent overflow
    
    let str2Hash = 0, str1Hash = 0, basePower = 1;
    
    // Compute the hash of the substring str2 and the first window of str1
    for (let i = 0; i < length2; i++) {
        str2Hash = (str2Hash * base + (str2[i].charCodeAt() - 96)) % mod;
        str1Hash = (str1Hash * base + (str1[i].charCodeAt() - 96)) % mod;
        if (i > 0) {
            basePower = (basePower * base) % mod;  // Precompute base^m % mod for sliding window
        }
    }

    // Check for match in the initial window
    if (str1Hash === str2Hash && str1.substring(0, length2) === str2) {
        return true;
    }

    // Slide the window over str1 and update the hash
    for (let i = length2; i < length1; i++) {
        // Remove the leftmost character and add the new rightmost character
        str1Hash = (str1Hash - (str1[i - length2].charCodeAt() - 96) * basePower % mod + mod) % mod;
        str1Hash = (str1Hash * base + (str1[i].charCodeAt() - 96)) % mod;

        // Check if hashes match, and verify substring to avoid hash collisions
        if (str1Hash === str2Hash && str1.substring(i - length2 + 1, i + 1) === str2) {
            return true;
        }
    }

    console.log(str1Hash,str2Hash);
    return false;
};

console.log(isSubstring(str1, str2));  // Output: true
