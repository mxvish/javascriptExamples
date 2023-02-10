const calculateMean = (values) => {
    const mean = (values.reduce((sum, current) => sum + current)) / values.length;
    return mean;
};

const calculateVariance = (values) => {
	const arr = values.map((value) => {
		return value**2;
	});
	return calculateMean(arr) - calculateMean(values)**2;
};

function main(diceNum) {
	arr = [];
	n = Math.pow(10,3);
	
	for (let i = 0; i < n; i++) {
		data = 0;
		for (let j = 1; j <= diceNum; j++) {
			data += Math.ceil(Math.random() * 6);		
		}
		arr.push(data);
	}
	const count = {};

	for (const num of arr) {
		count[num] = count[num] ? count[num] + 1 : 1;
	}

	for (let k = diceNum; k <= diceNum * 6; k++) {
		if (typeof count[k] == 'undefined') {
			count[k] = 0;
		}
		process.stdout.write(count[k]/n + " ");		
	}
	console.log();
	console.log(calculateMean(Object.values(count)).toFixed(2));
	console.log(calculateVariance(Object.values(count)).toFixed(2));
	console.log();
}

for (let l = 1; l <= 6; l++) {
	main(l);
}

