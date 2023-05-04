/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Tracking Field List
 */
export type TrackingFieldList = {
  /**
   * The number of all records available across pages
   */
  total_records?: number;
  /**
   * Array of Tracking Fields
   */
  tracking_fields?: Array<{
    /**
     * ID of Tracking Field
     */
    id?: string;
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
  }>;
};
