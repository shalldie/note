module.exports = {
    singleQuote: true,
    trailingComma: 'none',
    tabWidth: 4,
    endOfLine: 'auto',
    printWidth: 120,
    bracketSpacing: false,
    arrowParens: 'avoid',
    overrides: [
        {
            files: ['*.json', '*.{yaml,yml}'],
            options: {
                singleQuote: false,
                tabWidth: 2
            }
        }
    ]
};
