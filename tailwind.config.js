module.exports = {
    purge: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
    theme: {
        extend: {
            colors: {
                'plain-gray': {
                    lighter: '#313435',
                    light: '#252728',
                    DEFAULT: '#1e2021',
                    darkish: '#1a1d1e',
                    dark: '#171819',
                }
            }
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active']
        }
    },
    plugins: [require('tailwindcss-textshadow')],
};
