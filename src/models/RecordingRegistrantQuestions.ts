/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Recording Registrant Questions
 */
export type RecordingRegistrantQuestions = {
  /**
   * Array of Registrant Custom Questions
   */
  custom_questions?: Array<{
    /**
     * Answer choices for the question. Can not be used with Short answer type.
     */
    answers?: Array<string>;
    /**
     * State whether registrants are required to answer custom questions or not.
     */
    required?: boolean;
    /**
     * Title of the question.
     */
    title?: string;
    /**
     * The type of registration question and answers.
     */
    type?: 'short' | 'single' | 'multiple';
  }>;
  /**
   * Array of Registrant Questions
   */
  questions?: Array<{
    /**
     * Field name.
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
     * State whether the field is required to be answered by the registrant or not.
     */
    required?: boolean;
  }>;
};
