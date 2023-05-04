/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information about the account's plan.
 */
export type AccountPlans = {
  /**
   * Information about the account's Audio Conferencing plan.
   */
  plan_audio?: {
    /**
     * A comma-separated list of the account's call-out countries.
     *
     * For a list of values, refer to the `ID` field in the [TSP callout countries](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#tsp-countries) table.
     */
    callout_countries?: string;
    /**
     * The account's dedicated dial-in (DDI) numbers.
     */
    ddi_numbers?: number;
    /**
     * A comma-separated list of the account's premium countries.
     *
     * For a list of values, refer to the `ID` field in the [Premium countries](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#premium) table.
     */
    premium_countries?: string;
    /**
     * A comma-separated list of the account's toll-free countries
     *
     * For a list of values, refer to the `ID` field in the [Toll-free countries](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#toll-free) table.
     */
    tollfree_countries?: string;
    /**
     * The [Audio Conferencing plan type](https://marketplace.zoom.us/docs/api-reference/other-references/plans#audio-conferencing-plans).
     */
    type?: string;
  };
  /**
   * Information about the account's Base plan.
   */
  plan_base: {
    /**
     * The account plan's number of hosts:
     * * For a Pro plan, provide a value between `1` and `9`.
     * * For a Business Plan, provide a value between `10` and `49`.
     * * For a Education Plan, provide a value between `20` and `149`.
     * * For a Free Trial Plan, provide a value between `1` and `9999`.
     *
     * You **must** provide at least one positive integer value for the this field or the `increasing_hosts` field.
     */
    hosts?: number;
    /**
     * An optional number of additional hosts to add to the account's Base plan. For example, a `1` value will add one additional host to the existing `20` hosts, for a total of `21` hosts.
     *
     * You **must** provide at least one positive integer value for this field or the `hosts` field.
     */
    increasing_hosts?: number;
    /**
     * The account's [Base plan type](https://marketplace.zoom.us/docs/api-reference/other-references/plans#base-plans).
     */
    type: string;
  };
  /**
   * Information about the account's Large Meeting plan.
   */
  plan_large_meeting?: Array<any>;
  /**
   * Information about the account's Zoom Phone plan.
   */
  plan_phone?: {
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
  /**
   * Information about the account's Zoom Contact Center plan.
   */
  plan_zcc?: {
    /**
     * Information about the account's Zoom Contact Center Package plan.
     */
    plan_package?: {
      /**
       * A comma-separated list of the account's call-out countries.
       *
       * For a list of values, refer to the `ID` field in the [TSP callout countries](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#tsp-countries) table.
       */
      callout_countries?: string;
      /**
       * The [Zoom Phone Base plan type](https://marketplace.zoom.us/docs/api-reference/other-references/plans).
       */
      type?: string;
    };
    /**
     * Information about the account's additional Zoom Contact Center Usage plans.
     */
    plan_usage?: Array<{
      /**
       * The account plan's number of hosts.
       */
      hosts?: number;
      /**
       * The additional [Zoom Contact Center Usage plan type](https://marketplace.zoom.us/docs/api-reference/other-references/plans).
       */
      type?: string;
    }>;
    /**
     * Information about the account's additional Zoom Contact Center Number plans.
     */
    plan_phone_number?: Array<{
      /**
       * The account plan's number of hosts.
       */
      hosts?: number;
      /**
       * The additional [Zoom Contact Center Number plan type](https://marketplace.zoom.us/docs/api-reference/other-references/plans).
       */
      type?: string;
    }>;
  };
  /**
   * The account's [Cloud Recording plan](https://marketplace.zoom.us/docs/api-reference/other-references/plans#cloud-recording-plans).
   */
  plan_recording?: string;
  plan_room_connector?: any;
  /**
   * Information about the account's Webinar plan.
   */
  plan_webinar?: Array<any>;
  /**
   * Information about the account's Zoom Events plan.
   */
  plan_zoom_events?: Array<any>;
  plan_zoom_rooms?: any;
  /**
   * Information about the account's Zoom Video SDK plan.
   */
  plan_sdk_cmr?: {
    /**
     * The [Video SDK plan type](https://marketplace.zoom.us/docs/api-reference/other-references/plans/#video-sdk-add-on-plans).
     */
    type?: string;
    /**
     * The account plan's number of hosts.
     */
    hosts?: number;
  };
  /**
   * Information about the account's Zoom Whiteboard plan.
   */
  plan_whiteboard?: {
    /**
     * The [Zoom Whiteboard plan type](https://marketplace.zoom.us/docs/api-reference/other-references/plans).
     */
    type?: string;
    /**
     * The account plan's number of hosts.
     */
    hosts?: number;
  };
  /**
   * Information about the account's Zoom Sales IQ plan.
   */
  plan_zoom_iq?: {
    /**
     * The [Zoom Sales IQ plan type](https://marketplace.zoom.us/docs/api-reference/other-references/plans).
     */
    type?: string;
    /**
     * The account plan's number of hosts.
     */
    hosts?: number;
  };
  /**
   * Information about the account's Zoom Bundle plan.
   */
  plan_bundle?: any;
  /**
   * Information about the account's Zoom One Biz Plus plan.
   */
  plan_zoom_one?: Array<any>;
  /**
   * Information about the account's Zoom Workspace Reservation plan.
   */
  plan_zwr?: Array<any>;
  /**
   * Information about the account's Zoom Translation plan.
   */
  plan_ztransl?: Array<any>;
};
