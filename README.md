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

[![version][version-badge]][package] [![downloads][downloads-badge]][npmtrends]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]

## The problem

You want to use [jest][jest] to write tests that assert how dates compare to eachother. As part of that goal, you want to avoid all the repetitive patterns that arise in doing so and you want to get valueable feedback when tests fail.

## This solution

The `jest-date` library provides a set of custom jest matchers
that you can use to extend jest. These will make your tests more declarative,
clear to read and to maintain. Next to that, it will give you valueable information as to why your test are failing.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
- [Matcher types](#matcher-types)
  - [Relative matchers](#relative-matchers)
  - [Weekday matchers](#weekday-matchers)
- [Custom matchers](#custom-matchers)
  - [`toBeBefore`](#tobebefore)
  - [`toBeAfter`](#tobeafter)
  - [`toBeSameSecondAs`](#tobesamesecondas)
  - [`toBeSameMinuteAs`](#tobesameminuteas)
  - [`toBeSameHourAs`](#tobesamehouras)
  - [`toBeSameDayAs`](#tobesamedayas)
  - [`toBeSameWeekAs`](#tobesameweekas)
  - [`toBeSameMonthAs`](#tobesamemonthas)
  - [`toBeSameQuarterAs`](#tobesamequarteras)
  - [`toBeSameYearAs`](#tobesameyearas)
  - [`toBeMonday`](#tobemonday)
  - [`toBeTuesday`](#tobetuesday)
  - [`toBeWednesday`](#tobewednesday)
  - [`toBeThursday`](#tobethursday)
  - [`toBeFriday`](#tobefriday)
  - [`toBeSaturday`](#tobesaturday)
  - [`toBeSunday`](#tobesunday)
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

Import `jest-date` once (for instance in your [tests setup
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

## Matcher types

### Relative matchers

Relative matchers can be used to compare two dates with eachother. 
When a matcher fails, it will provide a debug message in the following format:

`Expected date {expected_date} {matcher} {received_date}, but it was {difference}.`

Here are some concrete examples:

[`toBeSameSecondAs`](#tobesamesecondas): 
`Expected date 2020-07-13T22:05:23.670Z to be same second as 2020-07-13T22:05:22.670Z, but it was 1 second after.`

[`toBeBefore`](#tobebefore): 
`Expected date 1970-01-01T00:00:00.000Z not to be before 2020-01-01T00:00:00.000Z, but it was 50 years before.`

[`toBeSameQuarterAs`](#tobesamequarteras): 
`Expected date 2020-10-13T22:15:12.304Z to be same quarter as 2020-07-13T22:15:12.304Z, but it was 3 months after.`

### Weekday matchers

Weekday matchers can be used to check if a given date falls on a certain day of the week. 
When this kind of a matcher fails, it will provide a debug message in either the following formats:

Standard Message: `Expected date {received} to be on a {expected_day}, but it was on a {actual_day}.`

Inverted Message: `Expected date {received} not be on a {expected_day}, but it was`

Here are some concrete examples:

[`toBeMonday`](#tobemonday): 
`Expected date 2020-07-13T22:25:43.553Z to be on a monday, but it was on a tuesday.`

[`toBeSunday`](#tobesunday): 
`Expected date 2020-07-11T22:26:33.626Z not to be on a sunday, but it was.`

## Custom matchers

`jest-date` can work with any library or framework. The custom matcher examples below are written using
functions from the awesome [date-fns][date-fns] library (e.g. `isBefore`,
`isSameDayAs`, `formatDistance`, etc.)

### `toBeBefore`

**Matcher type**: [relative](#relative-matchers)

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

**Matcher type**: [relative](#relative-matchers)

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

**Matcher type**: [relative](#relative-matchers)

```typescript
toBeSameSecondAs(date: Date)
```

This allows you to check whether a date is in the same second as another.

#### Examples

```javascript
import {startOfSecond, addSeconds} from 'date-fns'

const date = new Date()

expect(startOfSecond(date)).toBeSameSecondAs(date) // ✔️ pass
expect(addSeconds(date, 2)).toBeSameSecondAs(date) // ❌ fail

expect(startOfSecond(date)).not.toBeSameSecondAs(date) // ❌ fail
expect(addSeconds(date, 2)).not.toBeSameSecondAs(date) // ✔️ pass
```

<hr />

### `toBeSameMinuteAs`

**Matcher type**: [relative](#relative-matchers)

```typescript
toBeSameMinuteAs(date: Date)
```

This allows you to check whether a date is in the same minute as another.

#### Examples

```javascript
import {startOfMinute, addMinutes} from 'date-fns'

const date = new Date()

expect(startOfMinute(date)).toBeSameMinuteAs(date) // ✔️ pass
expect(addMinutes(date, 2)).toBeSameMinuteAs(date) // ❌ fail

expect(startOfMinute(date)).not.toBeSameMinuteAs(date) // ❌ fail
expect(addMinutes(date, 2)).not.toBeSameMinuteAs(date) // ✔️ pass
```

<hr />

### `toBeSameHourAs`

**Matcher type**: [relative](#relative-matchers)

```typescript
toBeSameHourAs(date: Date)
```

This allows you to check whether a date is in the same hour as another.

#### Examples

```javascript
import {startOfHour, addHours} from 'date-fns'

const date = new Date()

expect(startOfHour(date)).toBeSameHourAs(date) // ✔️ pass
expect(addHours(date, 2)).toBeSameHourAs(date) // ❌ fail

expect(startOfHour(date)).not.toBeSameHourAs(date) // ❌ fail
expect(addHours(date, 2)).not.toBeSameHourAs(date) // ✔️ pass
```

<hr />

### `toBeSameDayAs`

**Matcher type**: [relative](#relative-matchers)

```typescript
toBeSameDayAs(date: Date)
```

This allows you to check whether a date is in the same day as another.

#### Examples

```javascript
import {startOfDay, addDays} from 'date-fns'

const date = new Date()

expect(startOfDay(date)).toBeSameDayAs(date) // ✔️ pass
expect(addDays(date, 2)).toBeSameDayAs(date) // ❌ fail

expect(startOfDay(date)).not.toBeSameDayAs(date) // ❌ fail
expect(addDays(date, 2)).not.toBeSameDayAs(date) // ✔️ pass
```

<hr />

### `toBeSameWeekAs`

**Matcher type**: [relative](#relative-matchers)

```typescript
toBeSameWeekAs(date: Date)
```

This allows you to check whether a date is in the same week as another.

#### Examples

```javascript
import {startOfWeek, addWeeks} from 'date-fns'

const date = new Date()

expect(startOfWeek(date)).toBeSameWeekAs(date) // ✔️ pass
expect(addWeeks(date, 2)).toBeSameWeekAs(date) // ❌ fail

expect(startOfWeek(date)).not.toBeSameWeekAs(date) // ❌ fail
expect(addWeeks(date, 2)).not.toBeSameWeekAs(date) // ✔️ pass
```

<hr />

### `toBeSameMonthAs`

**Matcher type**: [relative](#relative-matchers)

```typescript
toBeSameMonthAs(date: Date)
```

This allows you to check whether a date is in the same month as another.

#### Examples

```javascript
import {startOfMonth, addMonths} from 'date-fns'

const date = new Date()

expect(startOfMonth(date)).toBeSameMonthAs(date) // ✔️ pass
expect(addMonths(date, 2)).toBeSameMonthAs(date) // ❌ fail

expect(startOfMonth(date)).not.toBeSameMonthAs(date) // ❌ fail
expect(addMonths(date, 2)).not.toBeSameMonthAs(date) // ✔️ pass
```

<hr />

### `toBeSameQuarterAs`

**Matcher type**: [relative](#relative-matchers)

```typescript
toBeSameQuarterAs(date: Date)
```

This allows you to check whether a date is in the same quarter as another.

#### Examples

```javascript
import {startOfQuarter, addQuarters} from 'date-fns'

const date = new Date()

expect(startOfQuarter(date)).toBeSameQuarterAs(date) // ✔️ pass
expect(addQuarters(date, 2)).toBeSameQuarterAs(date) // ❌ fail

expect(startOfQuarter(date)).not.toBeSameQuarterAs(date) // ❌ fail
expect(addQuarters(date, 2)).not.toBeSameQuarterAs(date) // ✔️ pass
```

<hr />

### `toBeSameYearAs`

**Matcher type**: [relative](#relative-matchers)

```typescript
toBeSameYearAs(date: Date)
```

This allows you to check whether a date is in the same year as another.

#### Examples

```javascript
import {startOfYear, addYears} from 'date-fns'

const date = new Date()

expect(startOfYear(date)).toBeSameYearAs(date) // ✔️ pass
expect(addYears(date, 2)).toBeSameYearAs(date) // ❌ fail

expect(startOfYear(date)).not.toBeSameYearAs(date) // ❌ fail
expect(addYears(date, 2)).not.toBeSameYearAs(date) // ✔️ pass
```

<hr />

### `toBeMonday`

**Matcher type**: [weekday](#weekday-matchers)

```typescript
toBeMonday()
```

This allows you to check whether a date is on a monday.

#### Examples

```javascript
expect(new Date()).toBeMonday()
expect(new Date()).not.toBeMonday()
```

<hr />

### `toBeTuesday`

**Matcher type**: [weekday](#weekday-matchers)

```typescript
toBeTuesday()
```

This allows you to check whether a date is on a tuesday.

#### Examples

```javascript
expect(new Date()).toBeTuesday()
expect(new Date()).not.toBeTuesday()
```

<hr />

### `toBeWednesday`

**Matcher type**: [weekday](#weekday-matchers)

```typescript
toBeWednesday()
```

This allows you to check whether a date is on a wednesday.

#### Examples

```javascript
expect(new Date()).toBeWednesday()
expect(new Date()).not.toBeWednesday()
```

<hr />

### `toBeThursday`

**Matcher type**: [weekday](#weekday-matchers)

```typescript
toBeThursday()
```

This allows you to check whether a date is on a thursday.

#### Examples

```javascript
expect(new Date()).toBeThursday()
expect(new Date()).not.toBeThursday()
```

<hr />

### `toBeFriday`

**Matcher type**: [weekday](#weekday-matchers)

```typescript
toBeFriday()
```

This allows you to check whether a date is on a friday.

#### Examples

```javascript
expect(new Date()).toBeFriday()
expect(new Date()).not.toBeFriday()
```

<hr />

### `toBeSaturday`

**Matcher type**: [weekday](#weekday-matchers)

```typescript
toBeSaturday()
```

This allows you to check whether a date is on a saturday.

#### Examples

```javascript
expect(new Date()).toBeSaturday()
expect(new Date()).not.toBeSaturday()
```

<hr />

### `toBeSunday`

**Matcher type**: [weekday](#weekday-matchers)

```typescript
toBeSunday()
```

This allows you to check whether a date is on a Sunday.

#### Examples

```javascript
expect(new Date()).toBeSunday()
expect(new Date()).not.toBeSunday()
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

Project structure and tooling hugely inspired by [@testing-library/jest-dom][jest-dom]

## LICENSE

MIT

[jest]: https://facebook.github.io/jest/
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[date-fns]: https://date-fns.org/
[jest-dom]: https://github.com/testing-library/jest-dom

[version-badge]:
  https://img.shields.io/npm/v/jest-date.svg?style=flat-square
[package]: https://www.npmjs.com/package/jest-date

[downloads-badge]:
  https://img.shields.io/npm/dm/jest-date.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/jest-date

[github-watch-badge]:
  https://img.shields.io/github/watchers/Stefanwullems/jest-date.svg?style=social
[github-watch]: https://github.com/Stefanwullems/jest-date/watchers
[github-star-badge]:
  https://img.shields.io/github/stars/Stefanwullems/jest-date.svg?style=social
[github-star]: https://github.com/Stefanwullems/jest-date/stargazers
