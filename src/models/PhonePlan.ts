/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information about the account's Zoom Phone plan.
 */
export type PhonePlan = {
  /**
   * Information about the account's Zoom Phone Base plan.
   */
  plan_base?: {
    /**
     * A comma-separated list of the account's call-out countries.
     *
     * For a list of values, refer to the `ID` field in the [TSP callout countries](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#tsp-countries) table.
     */
    callout_countries?: string;
    /**
     * The [Zoom Phone Base plan type](https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans).
     */
    type?: string;
  };
  /**
   * Information about the account's additional Zoom Phone calling plans.
   */
  plan_calling?: Array<{
    /**
     * The account plan's number of hosts.
     */
    hosts?: number;
    /**
     * The additional [Zoom Phone calling plan type](https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans).
     */
    type?: string;
  }>;
  /**
   * Information about the account's additional Zoom Phone add-on calling plan. A calling plan is required when adding an add-on calling plan.
   */
  plan_calling_addons?: Array<{
    /**
     * The account plan's number of hosts.
     */
    hosts?: number;
    /**
     * The type of [Zoom Phone add-on calling plan](https://marketplace.zoom.us/docs/api-reference/other-references/plans/#zoom-phone-add-on-calling-plans).
     */
    type?: string;
  }>;
  /**
   * Information about the account's additional Zoom Phone number plans.
   */
  plan_number?: Array<{
    /**
     * The account plan's number of hosts.
     */
    hosts?: number;
    /**
     * The additional [Zoom Phone number plan type](https://marketplace.zoom.us/docs/api-reference/other-references/plans#additional-zoom-phone-plans).
     */
    type?: string;
  }>;
};
