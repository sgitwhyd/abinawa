/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'ligth-gray': 'rgba(74, 87, 111, 0.7)',
				primary: '#0E5E6F',
			},
			backgroundImage: {
				'card-background':
					'	linear-gradient(90deg, rgba(255, 233, 244, 0.3) 0%, rgba(234, 243, 255, 0.5) 100%)',
			},
		},
	},
	plugins: [],
};
