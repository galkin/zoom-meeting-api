/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information about the account's Base plan.
 */
export type AccountPlanBaseRequired = {
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
