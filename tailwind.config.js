// /** @type {import('tailwindcss').Config} */
module.exports = {
    purge: [ './src/**/*.html', './src/**/*.vue', './src/**/*.jsx', ],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx, vue}"],
    theme: {
        extend: {},
    },
    plugins: [],
};
