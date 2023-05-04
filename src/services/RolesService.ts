/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class RolesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List roles
   * List [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) on your account
   *
   * **Scopes:** `role:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
   * **Prerequisites** :
   * *  Pro or higher plan.
   * *  For setting the initial role, you must be the Account Owner.
   * *  For subsequent role management, you must be the Account Owner or user with role management permissions.
   * @returns any **HTTP Status Code:** `200`<br>
   * List of roles returned.
   * @throws ApiError
   */
  public roles(): CancelablePromise<{
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
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/roles',
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>**Error Code:** \`4700\`<br>Invalid access token, does not contain role:read:admin scope.`,
      },
    });
  }

  /**
   * Create a role
   * Each Zoom user automatically has a role which can either be owner, administrator, or a member.
   *
   * **Pre-requisite:**<br>
   * * Pro or higher plan.
   * * For setting the initial role, you must be the Account Owner.<br>
   * * For subsequent role management, you must be the Account Owner or user with role management permissions.<br>
   * **Scopes:** `role:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **Status Code:** `200`<br>
   * You do not have the permission to create a role.
   * @throws ApiError
   */
  public createRole({
    requestBody,
  }: {
    requestBody?: {
      /**
       * Description of the role.
       */
      description?: string;
      /**
       * Name of the role.
       */
      name?: string;
      /**
       * Privileges assigned to the role. Can be one or a combination of [these permissions](https://marketplace.zoom.us/docs/api-reference/other-references/privileges).
       */
      privileges?: Array<string>;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/roles',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**Error Code:** \`300\`<br>
        The name field cannot be empty.`,
        400: `**Error Code:** \`1224\` <br>
        Role name "{roleName}" has already been used.`,
      },
    });
  }

  /**
   * Delete a role
   * Each Zoom user automatically has a role which can either be owner, administrator, or a member. Account Owners and users with edit privileges for Role management can add customized roles with a list.
   *
   * Use this API to delete a role.<br>
   * **Pre-requisite:**<br>
   * * A Pro or higher plan.<br>
   * * For role management and updates, you must be the Account Owner or user with role management permissions.
   *
   * **Scopes:** `role:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **Error Code:** `200`<br>
   * Role not found.
   * @throws ApiError
   */
  public deleteRole({ roleId }: { roleId: string }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/roles/{roleId}',
      path: {
        roleId: roleId,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>
        Role not found.`,
        400: `**Error Code:** \`1034\`<br>
        Provided \`role_id\` does not exist.`,
      },
    });
  }

  /**
   * Get role information
   * Each Zoom user automatically has a role which can either be owner, administrator, or a member. Account Owners and users with edit privileges for Role management can add customized roles with a list of privileges.
   *
   * Use this API to get information including specific privileges assigned to a [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control).<br>
   * **Pre-requisite:**<br>
   * * A Pro or higher plan.<br>
   * * For role management and updates, you must be the Account Owner or user with role management permissions.
   *
   * **Scopes:** `role:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **Status Code:** `200`<br>
   * Information about a specific role returned.
   *
   * **Error Code:** `200`<br>
   * You do not have the permission to retrieve role information.
   *
   * @throws ApiError
   */
  public getRoleInformation({
    roleId,
  }: {
    /**
     * Role Id.
     */
    roleId: string;
  }): CancelablePromise<{
    /**
     * Description of the role.
     */
    description?: string;
    /**
     * Role Id.
     */
    id?: string;
    /**
     * Name of the role.
     */
    name?: string;
    /**
     * Privileges assigned to the role. Can be one or a combination of [these permissions](https://marketplace.zoom.us/docs/api-reference/other-references/privileges).
     *
     */
    privileges?: Array<string>;
    /**
     * This field will only be displayed to accounts that are enrolled in a partner plan and follow the master accounts and sub accounts structure.
     */
    sub_account_privileges?: {
      /**
       * Indicates how the account can manage sub accounts. The value can be one of the following:<br>
       * `1`: Manage the sub account as an owner of the account.<br>
       * `2`: Manage the sub account with the same privileges as the current account.<br>
       * `3`: Manage the sub account with specified privileges.
       */
      second_level?: number;
    };
    /**
     * Total members assigned to that role.
     */
    total_members?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/roles/{roleId}',
      path: {
        roleId: roleId,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>
        Role not found.`,
        400: `**Error Code:** \`1034\`<br>
        Provided \`role_id\` does not exist.`,
      },
    });
  }

  /**
   * Update role information
   * Each Zoom user automatically has a [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) which can either be owner, administrator, or a member. Account Owners and users with edit privileges for Role management can add customized roles with a list.
   *
   * Use this API to change the privileges, name and description of a specific role.<br>
   * **Pre-requisite:**<br>
   * * A Pro or higher plan.<br>
   * * For role management and updates, you must be the Account Owner or user with role management permissions.<br>**Scopes:** `role:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **Error Code:** `200`<br>
   * The account must be a paid account to update the role.
   * @throws ApiError
   */
  public updateRole({
    roleId,
    requestBody,
  }: {
    roleId: string;
    requestBody?: {
      /**
       * Description of the role.
       */
      description?: string;
      /**
       * Role Id.
       */
      id?: string;
      /**
       * Name of the role.
       */
      name?: string;
      /**
       * Privileges assigned to the role. Can be one or a combination of [these permissions](https://marketplace.zoom.us/docs/api-reference/other-references/privileges).
       *
       */
      privileges?: Array<string>;
      /**
       * This field will only be displayed to accounts that are enrolled in the partner plan and follow master accounts and sub accounts structure.
       */
      sub_account_privileges?: {
        /**
         * Indicates how the account can manage sub accounts. The value can be one of the following:<br>
         * `1`: Manage the sub account as an owner of the account.<br>
         * `2`: Manage the sub account with the same privileges as the current account.<br>
         * `3`: Manage the sub account with specified privileges.
         */
        second_level?: number;
      };
      /**
       * Total members assigned to that role.
       */
      total_members?: number;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/roles/{roleId}',
      path: {
        roleId: roleId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**Error Code:** \`300\`
        This role cannot be updated.`,
        400: `**Error Code:** \`1224\` <br>
        Role name "{roleName}" has already been used.<br><br>
         **Error Code:** \`1034\`
        Provided \`role_id\` does not exist.`,
      },
    });
  }

  /**
   * List members in a role
   * User [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) can have a set of permissions that allows access only to the pages a user needs to view or edit. Use this API to list all the members that are assigned a specific role.
   *
   * **Scope:** `role:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>**Prerequisites:**<br>
   * * A Pro or a higher plan.
   * @returns any **HTTP Status Code:** `200`<br>
   * Success
   * @throws ApiError
   */
  public roleMembers({
    roleId,
    pageCount,
    pageNumber = 1,
    nextPageToken,
    pageSize = 30,
  }: {
    /**
     * The role ID
     */
    roleId: string;
    /**
     * The number of pages returned for this request.
     */
    pageCount?: string;
    /**
     * **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.
     * @deprecated
     */
    pageNumber?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
  }): CancelablePromise<{
    /**
     * List of a Role Members
     */
    members?: Array<{
      /**
       * Member Department
       */
      department?: string;
      /**
       * Member Email
       */
      email?: string;
      /**
       * Member First Name
       */
      first_name?: string;
      /**
       * Member ID
       */
      id?: string;
      /**
       * Member Last Name
       */
      last_name?: string;
      /**
       * Member Type
       */
      type?: number;
    }>;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    next_page_token?: string;
    /**
     * The number of pages returned for the request made.
     */
    page_count?: number;
    /**
     * The page number of the current results.
     */
    page_number?: number;
    /**
     * The number of records returned within a single API call.
     */
    page_size?: number;
    /**
     * The total number of all the records available across pages.
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/roles/{roleId}/members',
      path: {
        roleId: roleId,
      },
      query: {
        page_count: pageCount,
        page_number: pageNumber,
        next_page_token: nextPageToken,
        page_size: pageSize,
      },
      errors: {
        400: `**Error Code:** \`1034\`<br>
        Provided \`role_id\` does not exist.`,
        404: `**HTTP Status Code:** \`404\`<br>Role not found`,
      },
    });
  }

  /**
   * Assign a role
   * User [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) can have a set of permissions that allows access only to the pages a user needs to view or edit. Use this API to [assign a role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control#h_748b6fd8-5057-4cf4-bbfd-787909c09db0) to members.
   *
   * **Scopes:** `role:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
   * **Prerequisites:**<br>
   * * A Pro or a higher plan.
   * @returns any **HTTP Status Code:** `201`<br>Members Added
   * @throws ApiError
   */
  public addRoleMembers({
    roleId,
    requestBody,
  }: {
    /**
     * The role ID
     */
    roleId: string;
    /**
     * Role members
     */
    requestBody: {
      /**
       * Array of userId/user email of users to whom you would like to assign this role. Up to 30 users can be assigned a role at once.
       */
      members?: Array<{
        /**
         * Email address of the user to whom you would like to assign the role. Provide either the userId in the ID field or the email address in the email field. If both fields are provided, only userId is used.
         */
        email?: string;
        /**
         * User ID of the user to whom you would like to assign the role.
         */
        id?: string;
      }>;
    };
  }): CancelablePromise<{
    /**
     * Date and time at which the members are assigned to the role.
     */
    add_at?: string;
    /**
     * User ID
     */
    ids?: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/roles/{roleId}/members',
      path: {
        roleId: roleId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>

         **Error Code:** \`1034\`
        Provided \`role_id\` does not exist.<br><br>
         **Error Code:** \`300\`<br>
        RoleId required.<br>
        Can't delete or add members for Normal/Owner roles.<br><br>`,
      },
    });
  }

  /**
   * Unassign a role
   * User [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) can have a set of permissions that allows access only to the pages a user needs to view or edit. Use this API to unassign a user's role.
   *
   * **Scope:** `role:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   * **Prerequisites:**<br>
   * * A Pro or a higher plan.
   * @returns void
   * @throws ApiError
   */
  public roleMemberDelete({
    roleId,
    memberId,
  }: {
    /**
     * The role ID
     */
    roleId: string;
    /**
     * Member's ID
     */
    memberId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/roles/{roleId}/members/{memberId}',
      path: {
        roleId: roleId,
        memberId: memberId,
      },
      errors: {
        400: `**Error Code:** \`1034\`<br>
        Provided \`role_id\` does not exist.`,
        404: `**HTTP Status Code:** \`404\`<br>Role or Member not found`,
      },
    });
  }
}
