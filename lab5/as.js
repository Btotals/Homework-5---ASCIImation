setTimeout(function() {
	var counter = 0, delay = 1000, limit = 10;
	Decreasing(counter, delay, limit);
}, 0);

function Decreasing(counter, delay, limit) {
	console.log(counter.toString());
	counter = (counter+1)%10;
	setTimeout(function() {
		Decreasing(counter, delay, limit);
	}, delay);
}
