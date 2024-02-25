
function isPalindrome(phrase) {
	const size = phrase.length

	for (let i = 0; i < size / 2; i++) {
		if (phrase[i] !== phrase[size - 1 - i]) {
			console.log(`${i} ==> ${phrase[i]} : ${size - 1 - i} ==> ${phrase[size - 1 - i]}`)
			return false
		}
	}
	return true
}

function isPalindromeRecursive(phrase) {
	if (phrase.length <= 1) return true;

	if (phrase[0] === phrase[phrase.length - 1]) {
		// abba
		return isPalindromeRecursive(phrase.slice(1, phrase.length - 1));
	}

	return false;
}

console.log('********** iteratively *************')
console.log("motor: " + isPalindrome("motor"))
console.log("rotor: " + isPalindrome("rotor"))
console.log("a man a plan a canal panama:" + isPalindrome("amanaplanacanalpanama"))
console.log('********** recursively *************')
console.log("motor: " + isPalindromeRecursive("motor"))
console.log("rotor: " + isPalindromeRecursive("rotor"))
console.log("a man a plan a canal panama:" + isPalindromeRecursive("amanaplanacanalpanama"))