/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of Roles
 */
export type RoleList = {
  /**
   * List of Roles objects
   */
  roles?: Array<{
    /**
     * Role Description
     */
    description?: string;
    /**
     * Role Id
     */
    id?: string;
    /**
     * Role Name
     */
    name?: string;
    /**
     * Total members in this role
     */
    total_members?: number;
  }>;
  /**
   * The number of all records available across pages
   */
  total_records?: number;
};
