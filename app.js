// get inputs elements
const cardOwnerInput = document.getElementById('name');
const cardNumberInput = document.getElementById('number');
const cardMonthInput = document.getElementById('month');
const cardYearInput = document.getElementById('year');
const cardCvcInput = document.getElementById('cvc');

// get card elements
const cardOwner = document.getElementById('card-owner');
const cardNumber = document.getElementById('card-number');
const cardMonth = document.getElementById('card-month');
const cardYear = document.getElementById('card-year');
const cardCvc = document.getElementById('card-cvc');

const form = document.querySelector('form');


// add event listeners
cardOwnerInput.addEventListener('keyup', (e) => {
	let { value } = e.target;

	if (!value) value = 'Jane Appleseed';

	cardOwner.textContent = value;
})

cardNumberInput.addEventListener('keyup', (e) => {
	let { value } = e.target;

	if (!value) value = '0000 0000 0000 0000';

	// Insert space every 4 digits
	value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();

	// Limit to 16 digits
	value = value.slice(0, 19);

	cardNumber.textContent = value;
})

cardMonthInput.addEventListener('keyup', (e) => {
	let { value } = e.target;

	if (!value) value = '00';

	if (value.length > 2) return

	// add 0 to the beginning if value is 1 digit
	if (value.length === 1) value = '0' + value;

	cardMonth.textContent = value;
})

cardYearInput.addEventListener('keyup', (e) => {
	let { value } = e.target;

	if (!value) value = '00';

	if (value.length > 2) return

	// add 0 to the beginning if value is 1 digit
	if (value.length === 1) value = '0' + value;

	cardYear.textContent = value;
})

cardCvcInput.addEventListener('keyup', (e) => {
	let { value } = e.target;

	if (!value) value = '000';

	if (value.length > 3) return

	//add 0 to the beginning if value is 1 or 2 digit
	if (value.length === 1) value = '00' + value;
	if (value.length === 2) value = '0' + value;

	cardCvc.textContent = value;
})

form.addEventListener('submit', (e) => {
	e.preventDefault();
	form.style.display = 'none';
	document.querySelector('.form-completed').style.display = 'flex';
})

function addNewCard() {
	form.style.display = 'flex';
	document.querySelector('.form-completed').style.display = 'none';
	resetValues()

}
function resetValues() {
	// reset card content values
	cardOwner.textContent = 'Jane Appleseed';
	cardNumber.textContent = '0000 0000 0000 0000';
	cardMonth.textContent = '00';
	cardYear.textContent = '00';
	cardCvc.textContent = '000';

	//reset input values
	cardOwnerInput.value = '';
	cardNumberInput.value = '';
	cardMonthInput.value = '';
	cardYearInput.value = '';
	cardCvcInput.value = '';
}