/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information about meeting and webinar polling.
 */
export type Poll = {
  /**
   * Allow meeting participants to answer poll questions anonymously.
   *
   * This value defaults to `false`.
   */
  anonymous?: boolean;
  /**
   * The type of poll:
   * * `1` — Poll.
   * * `2` — Advanced Poll. This feature must be enabled in your Zoom account.
   * * `3` — Quiz. This feature must be enabled in your Zoom account.
   *
   * This value defaults to `1`.
   */
  poll_type?: Poll.poll_type;
  /**
   * Information about the poll's questions.
   */
  questions?: Array<{
    /**
     * The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
     * * For `short_answer` polls, a maximum of 500 characters.
     * * For `long_answer` polls, a maximum of 2,000 characters.
     */
    answer_max_character?: number;
    /**
     * The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value.
     */
    answer_min_character?: number;
    /**
     * Whether participants must answer the question:
     * * `true` — The participant must answer the question.
     * * `false` — The participant does not need to answer the question.
     *
     * **Note:**
     * * When the poll's `type` value is `1` (Poll), this value defaults to `true`.
     * * When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`.
     */
    answer_required?: boolean;
    /**
     * The poll question's available answers. This field requires a **minimum** of two answers.
     *
     * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
     * * For `matching` polls, you can only provide a maximum of 16 answers.
     * * For `rank_order` polls, you can only provide a maximum of seven answers.
     */
    answers?: Array<string>;
    /**
     * Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls:
     * * `true` — The answer is case-sensitive.
     * * `false` — The answer is not case-sensitive.
     *
     * This value defaults to `false`.
     */
    case_sensitive?: boolean;
    /**
     * The poll question, up to 255 characters.
     *
     * For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values.
     */
    name?: string;
    /**
     * Information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts.
     */
    prompts?: Array<{
      /**
       * The question prompt's title.
       */
      prompt_question?: string;
      /**
       * The question prompt's correct answers:
       * * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
       * * For `rank_order` polls, you can only provide one correct answer.
       */
      prompt_right_answers?: Array<string>;
    }>;
    /**
     * The high score label used for the `rating_max_value` field.
     *
     * This field only applies to the `rating_scale` poll.
     */
    rating_max_label?: string;
    /**
     * The rating scale's maximum value, up to a maximum value of 10.
     *
     * This field only applies to the `rating_scale` poll.
     */
    rating_max_value?: number;
    /**
     * The low score label used for the `rating_min_value` field.
     *
     * This field only applies to the `rating_scale` poll.
     */
    rating_min_label?: string;
    /**
     * The rating scale's minimum value. This value cannot be less than zero.
     *
     * This field only applies to the `rating_scale` poll.
     */
    rating_min_value?: number;
    /**
     * The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz).
     *
     * For `single` and `matching` polls, this field only accepts one answer.
     */
    right_answers?: Array<string>;
    /**
     * Whether to display the radio selection as a drop-down box:
     * * `true` — Show as a drop-down box.
     * * `false` — Do not show as a drop-down box.
     *
     * This value defaults to `false`.
     */
    show_as_dropdown?: boolean;
    /**
     * The poll's question and answer type:
     * * `single` — Single choice.
     * * `multiple` — Multiple choice.
     * * `matching` — Matching.
     * * `rank_order` — Rank order.
     * * `short_answer` — Short answer.
     * * `long_answer` — Long answer.
     * * `fill_in_the_blank` — Fill in the blank.
     * * `rating_scale` — Rating scale.
     */
    type?: 'single' | 'multiple' | 'matching' | 'rank_order' | 'short_answer' | 'long_answer' | 'fill_in_the_blank' | 'rating_scale';
  }>;
  /**
   * The poll's title, up to 64 characters.
   */
  title?: string;
};

export namespace Poll {
  /**
   * The type of poll:
   * * `1` — Poll.
   * * `2` — Advanced Poll. This feature must be enabled in your Zoom account.
   * * `3` — Quiz. This feature must be enabled in your Zoom account.
   *
   * This value defaults to `1`.
   */
  export enum poll_type {
    '_1' = 1,
    '_2' = 2,
    '_3' = 3,
  }
}
