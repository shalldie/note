// eslint-disable-next-line
module.exports = {
    extends: ['next', 'prettier'],
    rules: {
        '@next/next/no-img-element': 'off',
        'react/display-name': 'off',
        '@next/next/no-sync-scripts': 'off',
        'no-unused-vars': ['warn', {args: 'after-used', argsIgnorePattern: '^_'}],
        'react/no-children-prop': 'off'
    }
};
