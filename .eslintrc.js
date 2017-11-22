module.exports = {
    'extends': 'google',
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': false,
        'node': true
    },
    'parserOptions': {
        'sourceType': 'module'
    },
    'rules': {
        'max-len': [
            'error',
            {
                'code': 80,
                'tabWidth': 4,
                'ignoreComments': true,
                'ignoreUrls': true,
                'ignoreStrings': true
            }
        ],

        'brace-style': ['error', 'stroustrup'], //else statement below '}' instead of beside
        'indent': ['error', 4], // indent of file is 4 spaces
        'comma-dangle': 0 // no need comma after last element
    }
};
