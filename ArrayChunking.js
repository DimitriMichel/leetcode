const chunk = (arr, size) => {
	const chunked = [];
	let startIndex = 0;

	while(startIndex < arr.length){
	chunked.push(arr.slice(startIndex, startIndex+ size))
	startIndex+=size
	}
	
	return startIndex
}