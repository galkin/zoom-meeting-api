/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Panelist base object.
 */
export type Panelist = {
  /**
   * Panelist's email. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for return value details.
   */
  email?: string;
  /**
   * The panelist's full name.
   *
   * **Note:** This value cannot exceed more than 12 Chinese characters.
   */
  name?: string;
};
