# eslint-config-exivity

![npm](https://img.shields.io/npm/v/eslint-config-exivity)

## installing

```
yarn add --dev eslint-config-exivity
```

## configurations

This package exports 3 configurations:

### `exivity/core`

This is the default configuration that applies to every Exivity JS project. It defines the standard eslint rules as well as defining typescript rules and import rules.

```js
{
  extends: ["exivity/core"]
}
```

For this config to work properly it requires these peer dependencies:

- `eslint` version `>= 5.6.0`,
- `eslint-plugin-import` version `>= 2.18.2`
- `@typescript-eslint/eslint-plugin` version `>= 2.3.0`
- `@typescript-eslint/parser` version `>= 1.11.0`

```
yarn add --dev eslint eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### `exivity/testing`

This configuration defines all the rules for how Exivities testing suites should look.
 
```js
{
  extends: ["exivity/testing"]
}
```

For this config to work properly it requires these peer dependencies:

- `eslint` version `>= 5.6.0`
- `eslint-plugin-jest` version `>= 22.17.0`
- `eslint-plugin-jest-formatting` version `>= 1.1.0`

```
yarn add --dev eslint eslint-plugin-jest eslint-plugin-jest-formatting
```

### `exivity/react`

This configuration defines all the React specific rules as well as rules that have to do with jsx.

```js
{
  extends: ["exivity/react"]
}
```

For this config to work properly it requires these peer dependencies:

- `eslint` version `>= 5.6.0`
- `eslint-plugin-jsx-a11y` version `>= 6.0.3`
- `eslint-plugin-react` version `>= 7.14.3`
- `eslint-plugin-react-hooks` version `>= 2.0.1`

```
yarn add --dev eslint eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

## use all configurations

Single line install:

```
yarn add --dev eslint-config-exivity eslint eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-jest eslint-plugin-jest-formatting eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

Then use:

```js
{
  extends: [
    "exivity/core",
    "exivity/testing",
    "exivity/react"
  ]
}
```
