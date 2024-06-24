/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["DM Sans", "sans-serif"],
            },

            fontSize: {
                mHeading1: "5rem",
            },
            colors: {
                primary: "#5BB5A2",
                primaryLightButton: "#59CBB5",
                primaryLight: "#E8F2EE",
                muted: "#1A191E",

                //Organize Your Money Section
                laptopBg: "#E8F2EE",
                bicycleBg: "#F1DFDF",
                planeBg: "#DFE1F1",
                cameraBg: "#DFEBF1",
                plusBg: "#F8F8F8",
            },
        },
    },
    plugins: [],
};
