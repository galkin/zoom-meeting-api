/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ImGroupsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List IM directory groups
   * List [IM directory groups](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management).<br><br>
   * **Scopes**: `imgroup:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` <br>
   * List of groups returned.
   * **Error Code:** `200` <br>
   * List of IM groups returned.<br>
   * Only available for paid account:{accountId}.
   * @throws ApiError
   */
  public imGroups(): CancelablePromise<{
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
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/im/groups',
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
         **Error Code:** \`4130\` <br>
        Group does not exist:{groupId}.`,
      },
    });
  }

  /**
   * Create an IM directory group
   * Create an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
   * **Scopes**: `imgroup:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **Error Code:** `200` <br>
   * Only available for paid account:{accountId}.
   * @throws ApiError
   */
  public imGroupCreate({
    requestBody,
  }: {
    requestBody: {
      /**
       * Group name: must be unique to one account.
       */
      name?: string;
      /**
       * Members can search for others under same account.
       */
      search_by_account?: boolean;
      /**
       * Members can search for others in the same email domain.
       */
      search_by_domain?: boolean;
      /**
       * Members can search for others under same master account, including all sub accounts.
       */
      search_by_ma_account?: boolean;
      /**
       * IM Group types:<br>`normal` - Only members can see automatically see the other members of this group. Other people can search for members within this group. <br>`shared` - Everyone under an account can see the group members automatically.<br>`restricted` - Nobody can see the group or search for members except the members in the group.
       */
      type?: 'normal' | 'shared' | 'restricted';
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/im/groups',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
         **Error Code:** \`4130\` <br>
        Group does not exist:{groupId}.`,
        409: `**HTTP Status Code:** \`409\` <br>
         **Error Code:** \`4132\` <br>
        Group name {groupName} is already in use.`,
      },
    });
  }

  /**
   * Delete an IM directory group
   * Delete an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
   * Scopes: `imgroup:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns void
   * @throws ApiError
   */
  public imGroupDelete({
    groupId,
  }: {
    /**
     * The group ID.<br>
     * Can be retrieved by calling the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/im/groups/{groupId}',
      path: {
        groupId: groupId,
      },
      errors: {
        300: `**Error Code:** \`300\` <br>
        Missing field: name.`,
        404: `**HTTP Status Code:** \`404\` <br>
        IM Group not found.
         **Error Code:** \`4130\` <br>
        Group does not exist:{groupId}.`,
      },
    });
  }

  /**
   * Retrieve an IM directory group
   * Retrieve an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
   * Scopes: `imgroup:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **HTTP Status Code:** `200` <br>
   * IM group object returned.<br>
   * **Error Code:** `200` <br>
   * Only available for paid account:{accountId}.
   * @throws ApiError
   */
  public imGroup({
    groupId,
  }: {
    /**
     * The group ID.<br>
     * Can be retrieved by calling the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
  }): CancelablePromise<{
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
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/im/groups/{groupId}',
      path: {
        groupId: groupId,
      },
      errors: {
        300: `**Error Code:** \`300\` <br>
        Missing field: name.`,
        404: `**HTTP Status Code:** <br>
        IM Group not found.<br>
         **Error Code:** \`4130\` <br>
        Group does not exist:{groupId}.`,
      },
    });
  }

  /**
   * Update an IM directory group
   * Update an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
   * **Scopes**: `imgroup:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns void
   * @throws ApiError
   */
  public imGroupUpdate({
    groupId,
    requestBody,
  }: {
    /**
     * The group ID.<br>
     * Can be retrieved by calling the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
    requestBody: {
      /**
       * Group name: must be unique to one account.
       */
      name?: string;
      /**
       * Members can search for others under same account.
       */
      search_by_account?: boolean;
      /**
       * Members can search for others in the same email domain.
       */
      search_by_domain?: boolean;
      /**
       * Members can search for others under same master account, including all sub accounts.
       */
      search_by_ma_account?: boolean;
      /**
       * IM Group types:<br>`normal` - Only group members can automatically see others in their group. Other people can search for members in the group.<br>`shared` - Everyone under the account can see the group and members automatically.<br>`restricted` - Nobody can see the group or search for members except for the members in the group.
       */
      type?: 'normal' | 'shared' | 'restricted';
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/im/groups/{groupId}',
      path: {
        groupId: groupId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**Error Code:** \`300\` <br>
        Missing field: name`,
        404: `**HTTP Status Code:** \`404\` <br>
        IM Group not found.
         **Error Code:** \`4130\`<br>
        Group does not exist:{groupId}.`,
      },
    });
  }

  /**
   * List IM directory group members
   * List the members of an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management).<br><br>
   * **Scope:** `imgroup:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` <br>
   * IM group member list returned.<br>
   * **Error Code:** `200` <br>
   * Only available for paid account:{accountId}.
   * @throws ApiError
   */
  public imGroupMembers({
    groupId,
    pageSize = 30,
    pageNumber = 1,
    nextPageToken,
  }: {
    /**
     * The group ID.<br>
     * Can be retrieved by calling the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.
     * @deprecated
     */
    pageNumber?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
  }): CancelablePromise<{
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of pages returned for the request made.
     */
    page_count?: number;
    /**
     * **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.
     * @deprecated
     */
    page_number?: number;
    /**
     * The number of records returned with a single API call.
     */
    page_size?: number;
    /**
     * The total number of all the records available across pages.
     */
    total_records?: number;
    /**
     * List of Group member objects.
     */
    members?: Array<{
      /**
       * User email.
       */
      email?: string;
      /**
       * User first name.
       */
      first_name?: string;
      /**
       * User ID.
       */
      id?: string;
      /**
       * User last name.
       */
      last_name?: string;
      /**
       * User type.<br>
       * `1` - Basic<br> `2` - Licensed<br>
       * `3` - On-prem
       */
      type?: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/im/groups/{groupId}/members',
      path: {
        groupId: groupId,
      },
      query: {
        page_size: pageSize,
        page_number: pageNumber,
        next_page_token: nextPageToken,
      },
      errors: {
        300: `**Error Code:** \`300\` <br>
        Missing field: name.`,
        404: `**HTTP Status Code:** \`404\` <br>
        IM Group not found.`,
      },
    });
  }

  /**
   * Add IM directory group members
   * Add members to an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under an account.<br><br>
   * **Scope:** `imgroup:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **Error Code:** `200` <br>
   * Only available for paid account:{accountId}.
   * @throws ApiError
   */
  public imGroupMembersCreate({
    groupId,
    requestBody,
  }: {
    /**
     * The group ID.<br>
     * Can be retrieved by calling the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
    requestBody: {
      /**
       * List of IM group members.
       */
      members?: Array<{
        /**
         * User email. If the user ID is given then ignore the user email.
         */
        email?: string;
        /**
         * User ID.
         */
        id?: string;
      }>;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/im/groups/{groupId}/members',
      path: {
        groupId: groupId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**Error Code:** \`300\` <br>
        Missing field: name.`,
        404: `**HTTP Status Code:** \`404\` <br>
        IM Group not found`,
      },
    });
  }

  /**
   * Delete IM directory group member
   * Delete a member from an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under an account.<br><br>
   * Scopes: `imgroup:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **Error Code:** `200` <br>
   * Only available for paid account, {accountId}.
   * @throws ApiError
   */
  public imGroupMembersDelete({
    groupId,
    memberId,
  }: {
    /**
     * The group ID.<br>
     * Can be retrieved by calling the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
     */
    groupId: string;
    /**
     * The member ID.
     */
    memberId: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/im/groups/{groupId}/members/{memberId}',
      path: {
        groupId: groupId,
        memberId: memberId,
      },
      errors: {
        300: `**Error Code:** \`300\` <br>
        Missing field: name.<br>
        Can not delete account from default group:{groupId}.`,
        404: `**HTTP Status Code:** \`404\` <br>
        IM Group or IM Group member not found.<br>
         **Error Code:** \`4130\` <br>
        Group does not exist:{groupId}.`,
      },
    });
  }
}
