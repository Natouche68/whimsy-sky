export type Prediction = {
	name: string;
	icon: string;
	backgroundImage: string;
	message: string;
};

export const predictions: Prediction[] = [
	{
		name: 'Pizza Sun',
		icon: 'icons/pizza sun icon.png',
		backgroundImage: 'backgrounds/pizza sun background.png',
		message: "Phew, there's no pineapple on the sun. Only pepperoni, chorizo and ham.",
	},
	{
		name: 'Cotton candy clouds',
		icon: 'icons/cotton candy clouds icon.png',
		backgroundImage: 'backgrounds/cotton candy clouds background.png',
		message: 'Let your imagination take flight as the sky transforms into a sugary wonderland.',
	},
	{
		name: 'Rainbow lightning',
		icon: 'icons/rainbow lightning icon.png',
		backgroundImage: 'backgrounds/rainbow lightning background.png',
		message: 'Maybe this rainbow lightning gives you superpowers ? Or is there a treasure ?',
	},
	{
		name: 'Hot chocolate floods',
		icon: 'icons/hot chocolate flood icon.png',
		backgroundImage: 'backgrounds/hot chocolate floods background.png',
		message: "Considering the amount of chocolate, I think it's the Easter Bunny's secret reserve.",
	},
	{
		name: 'Popcorn hail',
		icon: 'icons/popcorn hail icon.png',
		backgroundImage: 'backgrounds/popcorn hail background.png',
		message: 'Free popcorn for your movie night ! You only need to choose the film.',
	},
	{
		name: 'Cat rain',
		icon: 'icons/cat rain icon.png',
		backgroundImage: 'backgrounds/cat rain background.png',
		message: "Don't forget to bring your favorite umbrella, but make sure it's cat-proof !",
	},
];
