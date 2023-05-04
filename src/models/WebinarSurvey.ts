/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information about the webinar survey.
 */
export type WebinarSurvey = {
  /**
   * Information about the customized webinar survey.
   */
  custom_survey?: {
    /**
     * Allow participants to anonymously answer survey questions:
     * * `true` — Anonymous survey enabled.
     * * `false` — Participants cannot answer survey questions anonymously.
     *
     * This value defaults to `true`.
     */
    anonymous?: boolean;
    /**
     * Information about the webinar survey's questions.
     */
    questions?: Array<{
      /**
       * The allowed maximum number of characters. This field only applies to `long_answer` survey, a maximum of 2,000 characters.
       */
      answer_max_character?: number;
      /**
       * The allowed minimum number of characters. This field only applies to `long_answer` survey. You must provide at least a **one** character minimum value.
       */
      answer_min_character?: number;
      /**
       * Whether participants must answer the question:
       * * `true` — The participant must answer the question.
       * * `false` — The participant does not need to answer the question.
       *
       * This value defaults to `false`.
       */
      answer_required?: boolean;
      /**
       * The survey question's available answers. This field requires a **minimum** of two answers.
       *
       * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
       * * For `matching` polls, you can only provide a maximum of 16 answers.
       * * For `rank_order` polls, you can only provide a maximum of seven answers.
       */
      answers?: Array<string>;
      /**
       * The survey question, up to 255 characters.
       */
      name?: string;
      /**
       * The high score label used for the `rating_max_value` field.
       *
       * This field only applies to the `rating_scale` survey.
       */
      rating_max_label?: string;
      /**
       * The rating scale's maximum value, up to a maximum value of 10.
       *
       * This field only applies to the `rating_scale` survey.
       */
      rating_max_value?: number;
      /**
       * The low score label used for the `rating_min_value` field.
       *
       * This field only applies to the `rating_scale` survey.
       */
      rating_min_label?: string;
      /**
       * The rating scale's minimum value. This value cannot be less than zero.
       *
       * This field only applies to the `rating_scale` survey.
       */
      rating_min_value?: number;
      /**
       * Display the radio selection as a drop-down box:
       * * `true` — Show as a drop-down box.
       * * `false` — Do not show as a drop-down box.
       *
       * This value defaults to `false`.
       */
      show_as_dropdown?: boolean;
      /**
       * The survey's question and answer type:
       * * `single` — Single choice.
       * * `multiple` — Multiple choice.
       * * `rating_scale` — Rating scale.
       * * `long_answer` — Long answer.
       */
      type?: 'single' | 'multiple' | 'rating_scale' | 'long_answer';
    }>;
  };
  /**
   * Whether the **Show in the browser when the webinar ends** option is enabled:
   * * `true` — Enabled.
   * * `false` — Disabled.
   *
   * This value defaults to `true`.
   */
  show_in_the_browser?: boolean;
  /**
   * Whether the **Show the link on the follow-up email** option is enabled:
   * * `true` — Enabled.
   * * `false` — Disabled.
   *
   * This value defaults to `false`.
   */
  show_in_the_follow_up_email?: boolean;
  /**
   * The link to the third party webinar survey.
   */
  third_party_survey?: string;
};
