/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            height: {
                nav: '60px',
                wrap: 'calc(100vh - 60px)',
            },
        },
    },
    plugins: [],
};
