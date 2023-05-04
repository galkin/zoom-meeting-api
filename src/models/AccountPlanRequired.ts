/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Information about the account's plan.
 */
export type AccountPlanRequired = {
  /**
   * The account plan's number of hosts.
   */
  hosts: number;
  /**
   * The account's [plan type](https://marketplace.zoom.us/docs/api-reference/other-references/plans).
   */
  type: string;
};
