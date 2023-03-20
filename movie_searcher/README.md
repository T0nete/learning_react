# INSTALL LINTER

pnpm install standard -D

settings.json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.validate": [
        "javascript"
    ]
}

package.json
"eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
}