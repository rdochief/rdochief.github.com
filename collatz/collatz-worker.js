function collatz (n) {
	return n % 2 == 0 ? n/2 : 3*n+1;
}

onmessage = function (e) {
	var num = parseInt(e.data);
	
	if (!num)
		postMessage("Error!");
	
	while (num != 1) {
		num = collatz(num);
		postMessage(num);
	}
	
	postMessage("done");
}