/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ContactGroupsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List contact groups
   * List [contact groups](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.
   *
   * **Prerequisite**: Pro or higher account.<br>
   * **Scopes**: `contact_group:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200`<br>
   * List of contact groups returned.
   * @throws ApiError
   */
  public contactGroups({
    pageSize = 10,
    nextPageToken,
  }: {
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
  }): CancelablePromise<{
    /**
     * List of contact group objects.
     */
    groups?: Array<{
      /**
       * The group ID.
       */
      group_id?: string;
      /**
       * The group name.
       */
      group_name?: string;
      /**
       * The contact group privacy configuration:<br>`1` - Visible to anyone, searchable by anyone.<br>`2` - Visible to members only, searchable by anyone.<br>`3` - Visible to members only, searchable by members only.
       */
      group_privacy?: 1 | 2 | 3;
      /**
       * The group description.
       */
      description?: string;
    }>;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     *
     */
    next_page_token?: string;
    /**
     * The number of records returned within a single API call.
     */
    page_size?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/contacts/groups',
      query: {
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        400: `**Error Code:** \`200\` <br>
        Only available for paid account: {accountId}`,
      },
    });
  }

  /**
   * Create a contact group
   * Use this API to create a [contact group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management).
   *
   * **Prerequisite**: Pro or higher account.<br>**Scopes:** `contact_group:write:admin`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   * @returns any **HTTP Status Code:** `201` <br>
   * Group created.
   * @throws ApiError
   */
  public contactGroupCreate({
    requestBody,
  }: {
    requestBody: {
      /**
       * The contact group's name.
       */
      group_name?: string;
      /**
       * Contact group privacy configuration:<br>`1` - Visible to anyone, searchable by anyone.<br>`2` - Visible to members only, searchable by anyone.<br>`3` - Visible to members only, searchable by members only.
       */
      group_privacy?: 1 | 2 | 3;
      /**
       * The group description.
       */
      description?: string;
      group_members?: Array<{
        /**
         * Contact group member types:<br>`1` - user.<br>`2` - user group.
         */
        type?: 1 | 2;
        /**
         * The member ID: user ID (`user`) or user group ID (`user group`).
         */
        id?: string;
      }>;
    };
  }): CancelablePromise<{
    /**
     * The contact group ID.
     */
    group_id?: string;
    /**
     * The contact group's name.
     */
    group_name?: string;
    /**
     * The contact group's total member count.
     */
    total_members?: number;
    /**
     * Contact group privacy configuration:<br>`1` - Visible to anyone, searchable by anyone.<br>`2` - Visible to members only, searchable by anyone.<br>`3` - Visible to members only, searchable by members only.
     */
    group_privacy?: 1 | 2 | 3;
    /**
     * The group description.
     */
    description?: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/contacts/groups',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**Error Code:** \`200\` <br>
        Only available for paid account: {accountId}<br>
         **Error Code:** \`300\`<br>
        The maximum number of user member per request is 50.<br>
         **Error Code:** \`300\`<br>
        The maximum number of group member per request is 3.`,
      },
    });
  }

  /**
   * Delete a contact group
   * Use this API to delete a [contact group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).
   *
   * **Prerequisite**: Pro or higher account.<br>**Scopes:** `contact_group:write:admin`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   * @returns void
   * @throws ApiError
   */
  public contactGroupDelete({
    groupId,
  }: {
    /**
     * The contact group ID.<br>
     * Can be retrieved by calling the [**List contact groups**](/docs/api-reference/zoom-api/methods#operation/contactGroups) API.
     */
    groupId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/contacts/groups/{groupId}',
      path: {
        groupId: groupId,
      },
      errors: {
        400: `**Error Code:** \`200\`<br>
        Only available for paid account,{accountId}.<br>
         **Error Code:** \`300\`<br>
        A group with this groupId: {groupId} does not exist.`,
      },
    });
  }

  /**
   * Get a contact group
   * Get a [contact group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.
   *
   * **Prerequisite**: Pro or higher account.<br>
   * **Scopes**: `contact_group:write:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **HTTP Status Code:** `200`<br> Group returned.
   * @throws ApiError
   */
  public contactGroup({
    groupId,
  }: {
    /**
     * The contact group ID.<br>
     * Can be retrieved by calling the [**List contact groups**](/docs/api-reference/zoom-api/methods#operation/contactGroups) API.
     */
    groupId: string;
  }): CancelablePromise<{
    /**
     * The group ID.
     */
    group_id?: string;
    /**
     * The group name.
     */
    group_name?: string;
    /**
     * The total number of members in a contact group.
     */
    total_members?: number;
    /**
     * The contact group privacy configuration:<br>`1` - Visible to anyone, searchable by anyone.<br>`2` - Visible to members only, searchable by anyone.<br>`3` - Visible to members only, searchable by members only.
     */
    group_privacy?: 1 | 2 | 3;
    /**
     * The group description.
     */
    description?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/contacts/groups/{groupId}',
      path: {
        groupId: groupId,
      },
      errors: {
        400: `**Error Code:** \`200\` <br>
        Only available for paid account: {accountId}<br>**Error Code:** \`300\`<br>
        A group with this groupId: {groupId} does not exist.`,
      },
    });
  }

  /**
   * Update a contact group
   * Update a [contact group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under your account.
   *
   * **Prerequisite**: Pro or higher account.<br>
   * **Scopes**: `contact_group:write:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   * @returns void
   * @throws ApiError
   */
  public contactGroupUpdate({
    groupId,
    requestBody,
  }: {
    /**
     * The contact group ID.<br>
     * Can be retrieved by calling the [**List contact groups**](/docs/api-reference/zoom-api/methods#operation/contactGroups) API.
     */
    groupId: string;
    requestBody: {
      /**
       * The contact group's name.
       */
      name?: string;
      /**
       * Contact group privacy configuration:<br>`1` - Visible to anyone, searchable by anyone.<br>`2` - Visible to members only, searchable by anyone.<br>`3` - Visible to members only, searchable by members only.
       */
      privacy?: 1 | 2 | 3;
      /**
       * The group description.
       */
      description?: string;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/contacts/groups/{groupId}',
      path: {
        groupId: groupId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**Error Code:** \`200\` <br>
        Only available for paid account: {accountId}<br>**Error Code:** \`300\`<br>
        A group with this groupId: {groupId} does not exist.`,
      },
    });
  }

  /**
   * Remove members in a contact group
   * Use this API to remove members in a [contact group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-).
   *
   * **Prerequisite**: Pro or higher account.<br>**Scopes:** `contact_group:write:admin`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   * @returns void
   * @throws ApiError
   */
  public contactGroupMemberRemove({
    memberIds,
  }: {
    /**
     * The member's ID in a contact group. Use commas (,) to separate a maximum of 20 ids. <br>
     * Can be retrieved by calling the [**List contact groups**](/docs/api-reference/zoom-api/methods#operation/contactGroupMembers) API.
     */
    memberIds: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/contacts/groups/{groupId}/members',
      query: {
        member_ids: memberIds,
      },
      errors: {
        400: `**Error Code:** \`200\`<br>
        Only available for paid account,{accountId}.<br>
         **Error Code:** \`300\`<br>
        A group with this groupId: {groupId} does not exist.<br>
         **Error Code:** \`300\`<br>
        The maximum number of memberId is 20.<br>
         **Error Code:** \`300\`<br> A member with this memberId: {memberId} does not exist.<br>
         **Error Code:** \`300\`<br> A group must have at least one member.`,
      },
    });
  }

  /**
   * List contact group members
   * List members in [contact groups](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management-) under an account.
   *
   * **Prerequisite**: Pro or higher account.<br>
   * **Scopes**: `contact_group:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200`<br>
   * List of contact group members returned.
   * @throws ApiError
   */
  public contactGroupMembers({
    pageSize = 10,
    nextPageToken,
  }: {
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
  }): CancelablePromise<{
    /**
     * List of contact group members.
     */
    members?: Array<{
      /**
       * Contact group member types:<br>`1` - user.<br>`2` - user group.
       */
      type?: 1 | 2;
      /**
       * The member ID: user ID (`user`) or user group ID (`user group`).
       */
      id?: string;
      /**
       * The member's name: user's name (`user`) or the group's name (`user group`).
       */
      name?: string;
    }>;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     *
     */
    next_page_token?: string;
    /**
     * The number of records returned within a single API call.
     */
    page_size?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/contacts/groups/{groupId}/members',
      query: {
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        400: `**Error Code:** \`200\` <br>
        Only available for paid account: {accountId}<br>
         **Error Code:** \`300\`<br>
        A group with this groupId: {groupId} does not exist.`,
      },
    });
  }

  /**
   * Add contact group members
   * Use this API to add members to a [contact group](https://support.zoom.us/hc/en-us/articles/204519819-Group-Management).
   *
   * **Prerequisite**: Pro or higher account.<br>**Scopes:** `contact_group:write:admin`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   * @returns any **HTTP Status Code:** `201` <br>
   * Member added.
   * @throws ApiError
   */
  public contactGroupMemberAdd({
    requestBody,
  }: {
    requestBody: {
      group_members?: Array<{
        /**
         * Contact group member types:<br>`1` - user.<br>`2` - user group.
         */
        type?: 1 | 2;
        /**
         * The member ID: user ID (`user`) or user group ID (`user group`).
         */
        id?: string;
      }>;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/contacts/groups/{groupId}/members',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**Error Code:** \`200\` <br>
        Only available for paid account: {accountId}<br>
         **Error Code:** \`300\`<br>
        A group with this groupId: {groupId} does not exist.<br>
         **Error Code:** \`300\`<br>
        The maximum number of user member per request is 50.<br>
         **Error Code:** \`300\`<br>
        The maximum number of group member per request is 3.`,
      },
    });
  }
}
