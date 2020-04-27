import {
  toBeBefore,
  toBeAfter,
  toBeSameSecondAs,
  toBeSameMinuteAs,
  toBeSameHourAs,
  toBeSameDayAs,
  toBeSameWeekAs,
  toBeSameMonthAs,
  toBeSameQuarterAs,
  toBeSameYearAs,
  toBeMonday,
  toBeTuesday,
} from './matchers'

expect.extend({
  toBeBefore,
  toBeAfter,
  toBeSameSecondAs,
  toBeSameMinuteAs,
  toBeSameHourAs,
  toBeSameDayAs,
  toBeSameWeekAs,
  toBeSameMonthAs,
  toBeSameQuarterAs,
  toBeSameYearAs,
  toBeMonday,
  toBeTuesday,
})
