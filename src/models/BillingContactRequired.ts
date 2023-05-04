/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The account's billing contact information.
 */
export type BillingContactRequired = {
  /**
   * The billing contact's address.
   */
  address: string;
  /**
   * The billing contact's apartment or suite number.
   */
  apt?: string;
  /**
   * The billing contact's city.
   */
  city: string;
  /**
   * The billing contact's [country ID abbreviation](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
   */
  country: string;
  /**
   * The billing contact's email address.
   */
  email: string;
  /**
   * The billing contact's first name.
   */
  first_name: string;
  /**
   * The billing contact's last name.
   */
  last_name: string;
  /**
   * The billing contact's phone number.
   */
  phone_number: string;
  /**
   * The billing contact's state.
   */
  state: string;
  /**
   * The billing contact's zip or postal code.
   */
  zip: string;
  /**
   * The range of employee count associated with the organization of this sub-account
   */
  employee_count: BillingContactRequired.employee_count;
};

export namespace BillingContactRequired {
  /**
   * The range of employee count associated with the organization of this sub-account
   */
  export enum employee_count {
    JUST_ME = 'Just Me',
    _2_10 = '2-10',
    _11_50 = '11-50',
    _51_250 = '51-250',
    _251_500 = '251-500',
    _501_1000 = '501-1000',
    _1001_5000 = '1001-5000',
    _5001_10000 = '5001-10000',
    _10000_ = '10000+',
  }
}
