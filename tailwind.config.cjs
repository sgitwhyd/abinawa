/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'ligth-gray': 'rgba(74, 87, 111, 0.7)',
				primary: '#0E5E6F',
			},
		},
	},
	plugins: [],
};
