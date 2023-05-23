export type Prediction = {
	name: string;
	icon: string;
	backgroundImage: string;
	message: string;
};

export const predictions: Prediction[] = [
	{
		name: 'Pizza Sun',
		icon: '🍕',
		backgroundImage: 'https://tse3.mm.bing.net/th?id=OIP.u0enqBe9F9-DTt0jb63i6wAAAA&pid=Api',
		message: "Phew, there's no ananas on the sun. Only pepperoni, chorizo and ham.",
	},
	{
		name: 'Cotton candy clouds',
		icon: '⛅',
		backgroundImage: 'https://tse3.mm.bing.net/th?id=OIP.u0enqBe9F9-DTt0jb63i6wAAAA&pid=Api',
		message: 'Let your imagination take flight as the sky transforms into a sugary wonderland.',
	},
	{
		name: 'Rainbow lightning',
		icon: '🌈',
		backgroundImage: 'https://tse3.mm.bing.net/th?id=OIP.u0enqBe9F9-DTt0jb63i6wAAAA&pid=Api',
		message: 'Maybe this rainbow lightning gives you superpowers ? Or is there a treasure ?',
	},
	{
		name: 'Hot chocolate floods',
		icon: '🍫',
		backgroundImage: 'https://tse3.mm.bing.net/th?id=OIP.u0enqBe9F9-DTt0jb63i6wAAAA&pid=Api',
		message: "Considering the amount of chocolate, I think it's the Easter Bunny's secret reserve.",
	},
	{
		name: 'Popcorn hail',
		icon: '🍿',
		backgroundImage: 'https://tse3.mm.bing.net/th?id=OIP.u0enqBe9F9-DTt0jb63i6wAAAA&pid=Api',
		message: 'Free popcorn for your movie night ! You only need to choose the film.',
	},
	{
		name: 'Cat rain',
		icon: '🐱',
		backgroundImage: 'https://tse3.mm.bing.net/th?id=OIP.u0enqBe9F9-DTt0jb63i6wAAAA&pid=Api',
		message: "Don't forget to bring your favourite umbrella, but make sure it's cat-proof !",
	},
];
