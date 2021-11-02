module.exports = {
    purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                git: "url('/images/teamMembersAvatars/git_icon.svg')",
            },
            backgroundSize: {
                'body': '91%',
            },
            colors: {
                primaryFontColor: '#78a0fa',
                secondaryFontColor: '#7e849d',
                tertiaryFontColor: '#25acd9',
                quaternaryFontColor: '#15159b',
                quinaryFontColor: '#808080',
                senaryFontColor: '',
                septenaryFontColor: '',
                octonaryFontColor: '',
                nonaryFontColor: '',
                primaryBackgroundColor: '#2727a3',
                secondaryBackgroundColor: '#f7f7f9',
                tertiaryBackgroundColor: '#f6fafd',
                quaternaryBackgroundColor: '#ffff00',
                quinaryBackgroundColor: '#ff8788',
                senaryBackgroundColor: '#bbdc65',
                septenaryBackgroundColor: '#65efdd',
                octonaryBackgroundColor: '#6e62d8',
                nonaryBackgroundColor: '',
                primaryHoverColor: '#ffff65',
                secondaryHoverColor: '#6699ff',
            },
            spacing: {
                22: '5.5rem',
                74: '18.5rem',
                76: '19rem',
                78: '19.5rem',
                82: '20.5rem',
                84: '21rem',
                88: '22rem',
                92: '23rem',
                100: '26rem',
                101: '37.5rem',
                102: '39rem',
                106: '44rem',
                108: '46rem',
                110: '50rem',
                112: '54rem',
                114: '58rem',
                116: '62tem',
                118: '66rem',
                120: '70rem',
            },
            fontFamily: {
                Festive: ['Festive', 'cursive'],
                Dosis: ['Dosis', 'sans-serif'],
                Roboto: ['Roboto Mono', 'monospace'],
            },
        },
    },
    variants: {
        backgroundImage: ['hover', 'focus'],
        backgroundSize: ['hover', 'focus'],
        borderWidth: ['hover', 'focus'],

    },
    plugins: [],
}