/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information about the registrant.
 */
export type RegistrantPost = {
  /**
   * The registrant's first name.
   */
  first_name: string;
  /**
   * The registrant's last name.
   */
  last_name?: string;
  /**
   * The registrant's email address.
   */
  email: string;
  /**
   * The registrant's address.
   */
  address?: string;
  /**
   * The registrant's city.
   */
  city?: string;
  /**
   * The registrant's state or province.
   */
  state?: string;
  /**
   * The registrant's ZIP or postal code.
   */
  zip?: string;
  /**
   * The registrant's two-letter [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
   */
  country?: string;
  /**
   * The registrant's phone number.
   */
  phone?: string;
  /**
   * The registrant's questions and comments.
   */
  comments?: string;
  /**
   * Information about custom questions.
   */
  custom_questions?: Array<{
    /**
     * The title of the custom question.
     */
    title?: string;
    /**
     * The custom question's response value. This has a limit of 128 characters.
     */
    value?: string;
  }>;
  /**
   * The registrant's industry.
   */
  industry?: string;
  /**
   * The registrant's job title.
   */
  job_title?: string;
  /**
   * The registrant's number of employees:
   * * `1-20`
   * * `21-50`
   * * `51-100`
   * * `101-500`
   * * `500-1,000`
   * * `1,001-5,000`
   * * `5,001-10,000`
   * * `More than 10,000`
   */
  no_of_employees?: RegistrantPost.no_of_employees;
  /**
   * The registrant's organization.
   */
  org?: string;
  /**
   * The registrant's purchasing time frame:
   * * `Within a month`
   * * `1-3 months`
   * * `4-6 months`
   * * `More than 6 months`
   * * `No timeframe`
   */
  purchasing_time_frame?: RegistrantPost.purchasing_time_frame;
  /**
   * The registrant's role in the purchase process:
   * * `Decision Maker`
   * * `Evaluator/Recommender`
   * * `Influencer`
   * * `Not involved`
   */
  role_in_purchase_process?: RegistrantPost.role_in_purchase_process;
};

export namespace RegistrantPost {
  /**
   * The registrant's number of employees:
   * * `1-20`
   * * `21-50`
   * * `51-100`
   * * `101-500`
   * * `500-1,000`
   * * `1,001-5,000`
   * * `5,001-10,000`
   * * `More than 10,000`
   */
  export enum no_of_employees {
    _1_20 = '1-20',
    _21_50 = '21-50',
    _51_100 = '51-100',
    _101_500 = '101-500',
    _500_1_000 = '500-1,000',
    _1_001_5_000 = '1,001-5,000',
    _5_001_10_000 = '5,001-10,000',
    MORE_THAN_10_000 = 'More than 10,000',
  }

  /**
   * The registrant's purchasing time frame:
   * * `Within a month`
   * * `1-3 months`
   * * `4-6 months`
   * * `More than 6 months`
   * * `No timeframe`
   */
  export enum purchasing_time_frame {
    WITHIN_A_MONTH = 'Within a month',
    _1_3_MONTHS = '1-3 months',
    _4_6_MONTHS = '4-6 months',
    MORE_THAN_6_MONTHS = 'More than 6 months',
    NO_TIMEFRAME = 'No timeframe',
  }

  /**
   * The registrant's role in the purchase process:
   * * `Decision Maker`
   * * `Evaluator/Recommender`
   * * `Influencer`
   * * `Not involved`
   */
  export enum role_in_purchase_process {
    DECISION_MAKER = 'Decision Maker',
    EVALUATOR_RECOMMENDER = 'Evaluator/Recommender',
    INFLUENCER = 'Influencer',
    NOT_INVOLVED = 'Not involved',
  }
}
