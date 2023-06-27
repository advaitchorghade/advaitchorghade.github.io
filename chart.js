// Define the stock data
var data = [
	{ date: '2022-01-01', value: 100 },
	{ date: '2022-02-01', value: 150 },
	{ date: '2022-03-01', value: 125 },
	{ date: '2022-04-01', value: 180 },
	{ date: '2022-05-01', value: 200 },
	{ date: '2022-06-01', value: 160 }
];

// Draw the chart
var canvas = document.getElementById('chart');
var ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.moveTo(0, canvas.height - data[0].value);
for (var i = 1; i < data.length; i++) {
	ctx.lineTo(i * 50, canvas.height - data[i].value);
}
ctx.stroke();
