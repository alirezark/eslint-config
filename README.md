# iranhr-eslint-config

> My [ESLint](https://eslint.org) config.

## Installation

```shell
yarn add @alirezark/eslint-config --dev
```

or:

```shell
npm install @alirezark/eslint-config --save-dev
```

Don't forget to install peerDependencies.

1. Install the correct versions of each package, which are listed by the command:

## Usage

```json
{
  "extends": ["@alirezark/eslint-config"]
}
```

It will automatically handle `*.(js|ts)` files.

## Publishing

Publishing is handled by github actions which is triggered by a merge to master that contains a change to the version property in the `package.json` file. You can either do that manually or use the command below to version bump, commit and tag.

```shell
npm version [<newversion> | major | minor | patch ]
```

Also be sure to update any official packages that depend on this with fixes and version increases.

## Versioning

It's probable that _any_ change will be a breaking one, so it's best to stick to major version releases.
