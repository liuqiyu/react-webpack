module.exports = {
    "extends": "airbnb",
    "plugins":[
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "import/no-extraneous-dependencies": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prop-types": 0
    }
};