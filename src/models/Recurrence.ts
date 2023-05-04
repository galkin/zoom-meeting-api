/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
 */
export type Recurrence = {
  /**
   * Select the final date on which the meeting will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
   */
  end_date_time?: string;
  /**
   * Select how many times the meeting should recur before it is canceled. (Cannot be used with "end_date_time".)
   */
  end_times?: number;
  /**
   * Use this field **only if you're scheduling a recurring meeting of type** `3` to state which day in a month, the meeting should recur. The value range is from 1 to 31.
   *
   * For instance, if you would like the meeting to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the meeting to recur every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`.
   */
  monthly_day?: number;
  /**
   * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
   */
  monthly_week?: Recurrence.monthly_week;
  /**
   * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
   *
   * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
   */
  monthly_week_day?: Recurrence.monthly_week_day;
  /**
   * Define the interval at which the meeting should recur. For instance, if you would like to schedule a meeting that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`.
   *
   * For a daily meeting, the maximum interval you can set is `90` days. For a weekly meeting the maximum interval that you can set is  of `12` weeks. For a monthly meeting, there is a maximum of `3` months.
   *
   *
   */
  repeat_interval?: number;
  /**
   * Recurrence meeting types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
   */
  type: Recurrence.type;
  /**
   * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
   *
   * <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
   */
  weekly_days?: Recurrence.weekly_days;
};

export namespace Recurrence {
  /**
   * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
   */
  export enum monthly_week {
    '_-1' = -1,
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
  }

  /**
   * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
   *
   * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
   */
  export enum monthly_week_day {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
    '_4' = 4,
    '_5' = 5,
    '_6' = 6,
    '_7' = 7,
  }

  /**
   * Recurrence meeting types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
   */
  export enum type {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }

  /**
   * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
   *
   * <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
   */
  export enum weekly_days {
    _1 = '1',
    _2 = '2',
    _3 = '3',
    _4 = '4',
    _5 = '5',
    _6 = '6',
    _7 = '7',
  }
}
