/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of Groups.
 */
export type GroupList = {
  /**
   * List of Group objects.
   */
  groups?: Array<{
    /**
     * Group ID.
     */
    id?: string;
    /**
     * Group name.
     */
    name?: string;
    /**
     * Total number of members in this group.
     */
    total_members?: number;
  }>;
  /**
   * Total records.
   */
  total_records?: number;
};
