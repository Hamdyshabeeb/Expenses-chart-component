/**
 * @description function used to get the array of expense object then call createChart function to create  the chart bar HTML
 */
async function getWeaklyExpense() {
	const chartBody = document.querySelector('.card-body-chart');
	try {
		const response = await fetch('./data.json');
		const weeklyExpense = await response.json();
		createChart(chartBody, weeklyExpense);
	} catch (error) {
		chartBody.innerHTML = "<li><p>Can't get Data<p></li>";
	}
}
/**
 *
 * @returns {String} return the first three letters of the current day name
 */
function getTodayName() {
	const today = new Date();
	return today.toString().split(' ')[0].toLowerCase();
}
/**
 *@description function used to create chart bar from the expense array
 * @param {HTMLUListElement} chartBody
 * @param {Array} expenseData
 */
function createChart(chartBody, expenseData) {
	const todayName = getTodayName();
	const biggestAmount = getBiggestValue(expenseData);
	let chartInner = '';

	expenseData.forEach((data) => {
		chartInner += `
        <li class="chart-bar-container ${
					data.day === todayName ? 'today' : ''
				}">
							<div class="chart-bar" style="height: ${(data.amount / biggestAmount) * 200}px">
							<p class="chart-bar-value">${data.amount}</p>
							</div>
							<p class=chart-day>${data.day}</p>
		</li>
        `;
	});
	chartBody.innerHTML = chartInner;
}
/**
 *@description function to extract highest value from expense array
 * @param {Array} values
 * @returns {Number} highest value in the array of expense
 */
function getBiggestValue(values) {
	let biggestValue = 0;
	values.forEach((value) => {
		biggestValue = value.amount > biggestValue ? value.amount : biggestValue;
	});
	return biggestValue;
}
getWeaklyExpense();
