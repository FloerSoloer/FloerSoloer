# FloerSoloer's React Native Expo Template

[![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)][yarn]
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)][commitizen]

## Setup Instructions

1. Clone: `git clone -b expo-react-native --single-branch https://github.com/FloerSoloer/FloerSoloer.git`
2. Rename branch to **main**: `git branch -m main`
3. Change **origin** remote: `git remote set-url origin https://github.com/<account>/<repository>.git`
4. Edit **name**, **description**, & **author** in **package.json**
5. Edit _year_ & _author_ at the top of **LICENSE**
6. Install dependencies: `yarn install`
7. Setup [husky][husky]: `yarn husky install`
8. Start [expo][expo] dev server: `yarn start`
   - To start directly on a specific platform, use `start:android`/`start:ios`/`start:web`

## Other Scripts

| Script          | Purpose                                                                      |
| --------------- | ---------------------------------------------------------------------------- |
| `commit`        | Make a commit using [Commitizen][commitizen]                                 |
| `lint`          | `lint:prettier` + `lint:eslint` (Automatically run by **.husky/pre-commit**) |
| `lint:prettier` | Lint **json** & **md** files using [Prettier][prettier]                      |
| `lint:eslint`   | Lint **js**, **ts**, & **tsx** files using [Eslint][eslint]                  |

## Optional Steps

- Install [expo-cli][expo] globally
- Install [commitizen][commitizen] globally
- The [tsconfig.json][tsconfig] & [eslintrc.json][eslint] rules may be overly strict for your purpose, so edit/delete as you see fit.

[commitizen]: https://commitizen-tools.github.io/commitizen
[eslint]: https://eslint.org
[expo]: https://expo.dev
[husky]: https://typicode.github.io/husky
[prettier]: https://prettier.io
[tsconfig]: https://www.typescriptlang.org/tsconfig
[yarn]: https://yarnpkg.com/
