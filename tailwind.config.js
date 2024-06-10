/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
            },

            fontSize: {
                mHeading1: '5rem',
            },
            colors: {
                primary: '#5BB5A2',
                primaryLight: '#E8F2EE',
                muted: '#1A191E'
            },
        },
    },
    plugins: [],
}