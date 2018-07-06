const path = require("path");

module.exports = {
    extends: ["airbnb", "prettier", "prettier/react"],
    plugins: ["graphql", "prettier"],
    parser: "babel-eslint",
    parserOptions: {
        ecmaVersion: 8,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            impliedStrict: true,
            classes: true
        }
    },
    env: {
        browser: true,
        node: true,
        jest: true
    },
    rules: {
        "react/jsx-filename-extension": [
            1,
            {
                extensions: [".js", ".jsx"]
            }
        ],
        "react/prop-types": 0,
        "no-unused-vars": [
            "error",
            {
                vars: "local",
                args: "none"
            }
        ],
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                components: ["Link"],
                specialLink: ["to", "hrefLeft", "hrefRight"],
                aspects: ["noHref", "invalidHref", "preferButton"]
            }
        ],
        "graphql/template-strings": [
            "error",
            {
                env: "relay",
                schemaJsonFilepath: path.resolve(__dirname, "./schema.json"),
                tagName: "graphql"
            }
        ],
        "prettier/prettier": [
            "error",
            {
                singleQuote: true,
                printWidth: 120,
                trailingComma: "es5"
            }
        ]
    }
};