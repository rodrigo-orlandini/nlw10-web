// npx tailwindcss init -p

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.tsx'    	// indica onde estará os arquivos estilizados
	],
	theme: {
		extend: {
			fontFamily: {		// configurar fontes padrão
				sans: 'Roboto, sans-serif'
			}, 

			backgroundImage: {	// configurar imagens padrão
				app: 'url(/app-bg.png)'
			},

			colors: {			// configurar cores padrão
				gray: {
					100: '#E1E1E6',
					600: '#323238',
					800: '#202024',
					900: '#121214'
				},
				ignite: {
					500: '#129E57'
				},
				yellow: {
					500: '#F7DD43',
					700: '#E5CD3D'
				}
			}
		}         	
	},
	plugins: [],
}
