/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Webinar Registrant Questions
 */
export type WebinarRegistrantQuestions = {
  /**
   * Array of Registrant Custom Questions.
   */
  custom_questions?: Array<{
    /**
     * An array of answer choices. Can't be used for short answer type.
     */
    answers?: Array<string>;
    /**
     * State whether or not the custom question is required to be answered by a registrant.
     */
    required?: boolean;
    /**
     * Custom question.
     */
    title?: string;
    /**
     * The question-answer type.
     */
    type?: 'short' | 'single_radio' | 'single_dropdown' | 'multiple';
  }>;
  /**
   * Array of registration fields whose values should be provided by registrants during registration.
   */
  questions?: Array<{
    /**
     * Field name
     */
    field_name?:
      | 'last_name'
      | 'address'
      | 'city'
      | 'country'
      | 'zip'
      | 'state'
      | 'phone'
      | 'industry'
      | 'org'
      | 'job_title'
      | 'purchasing_time_frame'
      | 'role_in_purchase_process'
      | 'no_of_employees'
      | 'comments';
    /**
     * State whether the selected fields are required or optional.
     */
    required?: boolean;
  }>;
};
