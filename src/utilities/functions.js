export const truncate = ( (string, chars=80 ) => {
	// let stringSplit = string.split(' ');
	// string = ''
	// stringSplit.forEach((char, index) => {
	// 	if (chars === index) {
	// 		return string
	// 	} else {
	// 		string += `${char} `
	// 	}
	// })

	return `${string.substring(0, chars)}...`
})