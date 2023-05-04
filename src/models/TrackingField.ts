/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Tracking Field
 */
export type TrackingField = {
  /**
   * Label/ Name for the tracking field.
   */
  field?: string;
  /**
   * Array of recommended values
   */
  recommended_values?: Array<string>;
  /**
   * Tracking Field Required
   */
  required?: boolean;
  /**
   * Tracking Field Visible
   */
  visible?: boolean;
};
