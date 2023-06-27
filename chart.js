// Define the stock data
var data = [
	{ date: '2022-01-01', value: 100 },
	{ date: '2022-02-01', value: 150 },
	{ date: '2022-03-01', value: 125 },
	{ date: '2022-04-01', value: 180 },
	{ date: '2022-05-01', value: 200 },
	{ date: '2022-06-01', value: 160 }
];

// Prepare the data for Chart.js
var labels = data.map(function(item) {
	return item.date;
});

var values = data.map(function(item) {
	return item.value;
});

// Create the chart using Chart.js
var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: labels,
		datasets: [{
			label: 'Stock Market Returns',
			data: values,
			borderColor: 'rgb(75, 192, 192)',
			backgroundColor: 'rgba(75, 192, 192, 0.2)',
			borderWidth: 1
		}]
	},
	options: {
		responsive: true,
		interaction: {
			mode: 'index',
			intersect: false
		},
		scales: {
			x: {
				display: true,
				title: {
					display: true,
					text: 'Date'
				}
			},
			y: {
				display: true,
				title: {
					display: true,
					text: 'Value'
				}
			}
		}
	}
});
