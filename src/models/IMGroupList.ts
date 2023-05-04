/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * List of IM Groups.
 */
export type IMGroupList = {
  /**
   * Total number of records returned.
   */
  total_records?: number;
  /**
   * List of group objects.
   */
  groups?: Array<{
    /**
     * IM group ID.
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
    /**
     * Members can search for others under same account.
     */
    search_by_account?: boolean;
    /**
     * Members can search for others in the same email domain.
     */
    search_by_domain?: boolean;
    /**
     * Members can search for others under same master account - including all sub accounts.
     */
    search_by_ma_account?: boolean;
    /**
     * IM Group types:<br>`normal` - Only members can see the other members in the group. Other people can search for members in the group.<br>`shared` - Everyone in the account can see the group and members. <br>`restricted` - No one except group members can see the group or search for other group members.
     */
    type?: 'normal' | 'shared' | 'restricted';
  }>;
};
