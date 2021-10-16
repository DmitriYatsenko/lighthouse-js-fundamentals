const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
while (i < ingredients.length)
{
	console.log(ingredients[i]);
	i++;
}

console.log("\n");

for (let j = 0; j < ingredients.length; j++)
{
	console.log(ingredients[j]);
}

console.log("\n");

i = ingredients.length - 1;
while (i >= 0)
{
	console.log(ingredients[i]);
	i--;
}

console.log("\n");

for (let j = ingredients.length - 1; j >=0; j--)
{
	console.log(ingredients[j]);
}