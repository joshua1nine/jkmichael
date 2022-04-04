const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: [
		'./src/components/**/*.{ts,tsx,js,jsx}',
		'./src/pages/**/*.{ts,tsx,js,jsx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			white: '#f2f2f2',
			orange: '#EC6B2D',
			green: '#4BD092',
			gray: {
				300: '#333D3A',
				400: '#1A2320',
				500: '#151C1A',
				900: '#0C1210',
			},
			red: '#ED7272',
			blue: '#72C8ED',
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				mono: ['PT Mono', ...defaultTheme.fontFamily.mono],
			},
			backgroundImage: {
				bearded: "url('/bg_logo.svg')",
			},
		},
	},
	variants: {},
	plugins: [],
};
