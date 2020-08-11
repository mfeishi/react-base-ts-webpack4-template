module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2019,
        "sourceType": "module"
    },
    rules: {
        "no-console": "error",
    },
    plugins: [
        "@typescript-eslint",
        "react-hooks"
    ]
}