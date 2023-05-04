/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Meeting Registrant Questions
 */
export type MeetingRegistrantQuestions = {
  /**
   * Array of Registrant Custom Questions
   */
  custom_questions?: Array<{
    /**
     * Answer choices for the question. Can not be used for `short` question type as this type of question requires registrants to type out the answer.
     */
    answers?: Array<string>;
    /**
     * Indicates whether or not the custom question is required to be answered by participants or not.
     */
    required?: boolean;
    /**
     * Title of the custom question.
     */
    title?: string;
    /**
     * Type of the question being asked.
     */
    type?: 'short' | 'single';
  }>;
  /**
   * Array of Registrant Questions
   */
  questions?: Array<{
    /**
     * Field name of the question.
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
     * Indicates whether or not the displayed fields are required to be filled out by registrants.
     */
    required?: boolean;
  }>;
};
