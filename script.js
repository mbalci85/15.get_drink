//calculates number of bottle can be bought
const calcBottles = (totalMoney, drinkPrice) => {
	return Math.floor(totalMoney / drinkPrice);
};

// console.log(calcBottles(100, 3));
// console.log(calcBottles(10, 6));

//amount of change
const calcChange = (totalMoney, drinkPrice) => {
	return `Your change is ${totalMoney % drinkPrice} dollar(s)`;
};

// console.log(calcChange(50, 7));
// console.log(calcChange(68, 13));

const getDrink = () => {
	let totalMoney = prompt('Enter how much money you have: ');
	let drinkPrice = prompt('Enter the unit price of the drink: ');
	return alert(`
    -"Hello Master, I have $${totalMoney} and drink's price is $${drinkPrice}"
    
    -Leave House
    -Turn Left
    -Go to the market
    -Buy ${calcBottles(totalMoney, drinkPrice)} bottles of drink
    -Pay for drink
    -Leave market
    -Come back to the house
    
    -"Hello Master, here is your $${calcChange(
			totalMoney,
			drinkPrice,
		)} change"`);
};

getDrink();
