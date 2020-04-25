<div align="center">
<h1>jest-date</h1>

<a href="https://www.emojione.com/emoji/1f989">
  <img
    height="80"
    width="80"
    alt="calendar"
    src="https://raw.githubusercontent.com/Stefanwullems/jest-date/master/other/calendar.png"
  />
</a>

<p>Custom jest matchers to compare dates against eachother</p>

</div>

---

## The problem

You want to use [jest][jest] to write tests that assert how dates compare to eachother. As part of that goal, you want to avoid all the repetitive patterns that arise in doing so.

## This solution

The `@testing-library/jest-date` library provides a set of custom jest matchers
that you can use to extend jest. These will make your tests more declarative,
clear to read and to maintain.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
- [Custom matchers](#custom-matchers)
  - [`toBeBefore`](#tobebefore)
  - [`toBeAfter`](#tobeafter)
  - [`toBeSameSecondAs`](#tobesamesecondas)
  - [`toBeSameMinuteAs`](#tobesameminuteas)
- [Inspiration](#inspiration)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```
npm install --save-dev jest-date
```

## Usage

Import `@testing-library/jest-date` once (for instance in your [tests setup
file][]) and you're good to go:

[tests setup file]:
  https://jestjs.io/docs/en/configuration.html#setupfilesafterenv-array

```javascript
import 'jest-date'
```

> Note: If you're using TypeScript, make sure your setup file is a `.ts` and not
> a `.js` to include the necessary types.

Alternatively, you can selectively import only the matchers you intend to use,
and extend jest's `expect` yourself:

```javascript
import {
  toBeBefore,
  toBeSameMonthAs,
} from 'jest-date/matchers'

expect.extend({toBeBefore, toBeSameMonthAs})
```

> Note: when using TypeScript, this way of importing matchers won't provide the
> necessary type definitions.

## Custom matchers

`jest-date` can work with any library or framework. The custom matcher examples below are written using
functions from the awesome [date-fns][date-fns] library (e.g. `isBefore`,
`isSameDayAs`, `formatDistance`, etc.)

### `toBeBefore`

```typescript
toBeBefore(date: Date)
```

This allows you to check whether a date is before another.

#### Examples

```javascript
expect(new Date('1970')).toBeBefore(new Date('2020')) // ✔️ pass
expect(new Date('2020')).toBeBefore(new Date('1970')) // ❌ fail

expect(new Date('1970')).not.toBeBefore(new Date('2020')) // ❌ fail
expect(new Date('2020')).not.toBeBefore(new Date('1970')) // ✔️ pass
```

<hr />

### `toBeAfter`

```typescript
toBeAfter(date: Date)
```

This allows you to check whether a date is after another.

#### Examples

```javascript
expect(new Date('2020')).toBeAfter(new Date('1970')) // ✔️ pass
expect(new Date('1970')).toBeAfter(new Date('2020')) // ❌ fail

expect(new Date('2020')).not.toBeAfter(new Date('1970')) // ❌ fail
expect(new Date('1970')).not.toBeAfter(new Date('2020')) // ✔️ pass
```

### `toBeSameSecondAs`

```typescript
toBeSameSecondAs(date: Date)
```

This allows you to check whether a date is in the same second as another.

#### Examples

```javascript
expect(new Date('2000-01-01T00:00:00.5')).toBeSameSecondAs(new Date('2000-01-01T00:00:00')) // ✔️ pass
expect(new Date('1999-12-31T23:59:59')).toBeSameSecondAs(new Date('2000-01-01T00:00:00')) // ❌ fail

expect(new Date('2000-01-01T00:00:00.5')).not.toBeSameSecondAs(new Date('2000-01-01T00:00:00')) // ❌ fail
expect(new Date('1999-12-31T23:59:59')).not.toBeSameSecondAs(new Date('2000-01-01T00:00:00')) // ✔️ pass
```

<hr />

### `toBeSameMinuteAs`

```typescript
toBeSameMinuteAs(date: Date)
```

This allows you to check whether a date is in the same second as another.

#### Examples

```javascript
expect(new Date('2000-01-01T00:00:30')).toBeSameMinuteAs(new Date('2000-01-01T00:00')) // ✔️ pass
expect(new Date('1999-12-31T23:59')).toBeSameMinuteAs(new Date('2000-01-01T00:00')) // ❌ fail

expect(new Date('2000-01-01T00:00:30')).not.toBeSameMinuteAs(new Date('2000-01-01T00:00')) // ❌ fail
expect(new Date('1999-12-31T23:59')).not.toBeSameMinuteAs(new Date('2000-01-01T00:00')) // ✔️ pass
```

<hr />

## Inspiration

This library was created because as far as I know, 
there is no matcher library out there dedicated to only comparing dates.
I ended up using the functions from [date-fns][date-fns] to create assertions like this one:

```javascript
expect(isSameDay(date1, date2)).toBe(true)
```

But when this fails, you get no feedback at all other than the fact that the dates are not the same day.
By making date matchers with helpful failure messages, I hope to make the debugging lives of developers a little bit easier.

## LICENSE

MIT

[jest]: https://facebook.github.io/jest/
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[date-fns]: https://date-fns.org/

