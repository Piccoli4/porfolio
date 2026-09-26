/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Superficies y texto (cambian con el tema, ver src/styles/global.css)
				bg: token('bg'),
				surface: token('surface'),
				'surface-2': token('surface-2'),
				ink: token('ink'),
				'ink-2': token('ink-2'),
				muted: token('muted'),
				line: token('line'),
				// Marca: rojo, azul y blanco del escudo CSP
				'red-ink': token('red-ink'),
				'blue-ink': token('blue-ink'),
				brand: {
					red: '#D7263E',
					'red-dark': '#B81D32',
					blue: '#1E3A9A',
					navy: '#0A1230',
					paper: '#F5F6FA',
				},
			},
			fontFamily: {
				display: ['"Saira Variable"', 'system-ui', 'sans-serif'],
				sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
			},
			screens: {
				mdplus: '1120px',
			},
			maxWidth: {
				site: '72rem',
			},
		},
	},
	plugins: [],
}
