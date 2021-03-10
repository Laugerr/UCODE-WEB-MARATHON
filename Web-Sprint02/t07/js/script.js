function sortEvenOdd(arr) {
	arr.sort(function(even, odd) {
		return (even % 2 - odd % 2) || (even - odd);
	})
}