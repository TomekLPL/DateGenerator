const iconWhere = document.querySelector('.fa-location-dot');
const iconClothing = document.querySelector('.fa-shirt');
const iconFood = document.querySelector('.fa-utensils');
const iconDrink = document.querySelector('.fa-martini-glass-citrus');

const resultWhere = document.querySelector('.result-where');
const resultClothing = document.querySelector('.result-clothing');
const resultFood = document.querySelector('.result-food');
const resultDrink = document.querySelector('.result-drink');

const whereArr = ['At home', 'At cinema', 'At the cafe', 'In the restaurant', 'In the park'];
const clothingArr = ['Casual outfit', 'Cocktail outfit', 'Vintage outfit', 'Streetwear outfit', 'Romantic outfit'];
const foodArr = ['Italian Cuisine', 'Mexican Cuisine', 'French Cuisine', 'American Cuisine', 'Greek Cuisine'];
const drinkArr = ['Wine', 'Cocktails', 'Cider', 'Vermouth', 'Liqueurs'];

const generateWhere = () => {
	const number = Math.floor(Math.random() * 5);
	resultWhere.textContent = `${whereArr[number]}`;
};

const generateClothing = () => {
	const number = Math.floor(Math.random() * 5);
	resultClothing.textContent = `${clothingArr[number]}`;
};

const generateFood = () => {
	const number = Math.floor(Math.random() * 5);
	resultFood.textContent = `${foodArr[number]}`;
};

const generateDrink = () => {
	const number = Math.floor(Math.random() * 5);
	resultDrink.textContent = `${drinkArr[number]}`;
};

const createHeart = () => {
	const heart = document.createElement('i');
	heart.classList.add('heart');
	heart.textContent = '🩷';

	heart.style.left = Math.random() * window.innerWidth + 'px';
	heart.style.animationDuration = Math.random() * 6 + 3 + 's';
	heart.style.opacity = Math.random();

	document.body.append(heart);

	setTimeout(() => heart.remove(), 8000);
};

createHeart();
setInterval(createHeart, 50);

iconWhere.addEventListener('click', generateWhere);
iconClothing.addEventListener('click', generateClothing);
iconFood.addEventListener('click', generateFood);
iconDrink.addEventListener('click', generateDrink);
