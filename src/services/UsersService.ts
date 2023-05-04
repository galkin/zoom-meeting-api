/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UsersService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List users
   * Use this API to list your account's users.
   *
   * **Scopes:** `user:read:admin`
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200`<br>
   * User list returned.
   * @throws ApiError
   */
  public users({
    status = 'active',
    pageSize = 30,
    roleId,
    pageNumber,
    includeFields,
    nextPageToken,
  }: {
    /**
     * The user's status:
     * * `active` — The user exists on the account.
     * * `inactive` — The user has been deactivated.
     * * `pending` — The user exists on the account but has not activated their account. See [Managing users](https://support.zoom.us/hc/en-us/articles/201363183) for details.
     *
     * This value defaults to `active`.
     */
    status?: 'active' | 'inactive' | 'pending';
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The role's unique ID. Use this parameter to filter the response by a specific role. You can use the [**List roles**](/docs/api-reference/zoom-api/methods#operation/roles) API to get a role's unique ID value.
     */
    roleId?: string;
    /**
     * The page number of the current page in the returned records.
     */
    pageNumber?: string;
    /**
     * Use this parameter to display specific attributes in the API call's response:
     * * `custom_attributes` — Return the user's custom attributes.
     */
    includeFields?: 'custom_attributes';
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
    /**
     * Information about the users.
     */
    users?: Array<{
      /**
       * The time at which the user's account was created.
       */
      created_at?: string;
      /**
       * Information about the user's custom attributes.
       *
       * This field is **only** returned if users are assigned custom attributes and you provided the `custom_attributes` value for the `include_fields` query parameter in the API request.
       */
      custom_attributes?: Array<{
        /**
         * The custom attribute's unique ID.
         */
        key?: string;
        /**
         * The custom attribute's name.
         */
        name?: string;
        /**
         * The custom attribute's value.
         */
        value?: string;
      }>;
      /**
       * The user's department.
       */
      dept?: string;
      /**
       * The user's email address.
       */
      email: string;
      /**
       * The employee's unique ID. The this field only returns when:
       * * SAML single sign-on (SSO) is enabled.
       * * The `login_type` value is `101` (SSO).
       */
      employee_unique_id?: string;
      /**
       * The user's first name.
       */
      first_name?: string;
      /**
       * The IDs of groups where the user is a member.
       */
      group_ids?: Array<string>;
      /**
       * The user's ID.
       *
       * The API does **not** return this value for users with the `pending` status.
       */
      id?: string;
      /**
       * The IDs of IM directory groups where the user is a member.
       */
      im_group_ids?: Array<string>;
      /**
       * The last client version that user used to log in.
       */
      last_client_version?: string;
      /**
       * The user's last login time. This field has a three-day buffer period.
       *
       * For example, if user first logged in on `2020-01-01` and then logged out and logged in on `2020-01-02`, this value will still reflect the login time of `2020-01-01`. However, if the user logs in on `2020-01-04`, the value of this field will reflect the corresponding login time since it exceeds the three-day buffer period.
       */
      last_login_time?: string;
      /**
       * The user's last name.
       */
      last_name?: string;
      /**
       * This field is returned if the user is enrolled in the [Zoom United](https://zoom.us/pricing/zoom-bundles) plan. The license option:
       * * `1` — Zoom United Pro-United with US/CA Unlimited.
       * * `2` — Zoom United Pro-United with UK/IR Unlimited.
       * * `4` — Zoom United Pro-United with AU/NZ Unlimited.
       * * `8` — Zoom United Pro-United with Global Select.
       * * `16` — Zoom United Pro-United with Zoom Phone Pro.
       * * `32` — Zoom United Biz-United with US/CA Unlimited.
       * * `64` — Zoom United Biz-United with UK/IR Unlimited.
       * * `128` — Zoom United Biz-United with AU/NZ Unlimited.
       * * `256` — Zoom United Biz-United with Global Select.
       * * `512` — Zoom United Biz-United with Zoom Phone Pro.
       * * `1024` — Zoom United Ent-United with US/CA Unlimited.
       * * `2048` — Zoom United Ent-United with UK/IR Unlimited.
       * * `4096` — Zoom United Ent-United with AU/NZ Unlimited.
       * * `8192` — Zoom United Ent-United with Global Select.
       * * `16384` — Zoom United Ent-United with Zoom Phone Pro.
       * * `32768` — Zoom United Pro-United with JP Unlimited.
       * * `65536` — Zoom United Biz-United with JP Unlimited.
       * * `131072` — Zoom United Ent-United with JP Unlimited.
       */
      plan_united_type?:
        | '1'
        | '2'
        | '4'
        | '8'
        | '16'
        | '32'
        | '64'
        | '128'
        | '256'
        | '512'
        | '1024'
        | '2048'
        | '4096'
        | '8192'
        | '16384'
        | '32768'
        | '65536'
        | '131072';
      /**
       * The user's [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi).
       */
      pmi?: number;
      /**
       * The unique ID of the user's assigned [role](/docs/api-reference/zoom-api/methods#operation/roles).
       */
      role_id?: string;
      /**
       * The user's status:
       * * `active` — An active user.
       * * `inactive` — A deactivated user.
       * * `pending` — A pending user.
       */
      status?: 'active' | 'inactive' | 'pending';
      /**
       * The user's timezone.
       */
      timezone?: string;
      /**
       * The user's assigned plan type:
       * * `1` — Basic.
       * * `2` — Licensed.
       * * `3` — On-prem.
       * * `99` — None (this can only be set with `ssoCreate`).
       */
      type: 1 | 2 | 3 | 99;
      /**
       * Display whether the user's email address for the Zoom account is verified:
       * * `1` — A verified user email.
       * * `0` — The user's email **not** verified.
       */
      verified?: 1 | 0;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users',
      query: {
        status: status,
        page_size: pageSize,
        role_id: roleId,
        page_number: pageNumber,
        include_fields: includeFields,
        next_page_token: nextPageToken,
      },
    });
  }

  /**
   * Create users
   * Use this API to add a new user to your Zoom account.
   *
   * **Scopes:** `user:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Note:** The following rate limits apply when you use the `create` value for the `action` field:
   * * 50 requests per day for **Free** accounts.
   * * 1,500 requests per day for **Pro** accounts.
   * * 10,000 requests per day for **Business+** accounts.
   *
   * **Prerequisites:**
   * * A Pro or higher plan.
   * @returns any **HTTP Status Code:** `201`<br>
   * User created.
   * @throws ApiError
   */
  public userCreate({
    requestBody,
  }: {
    /**
     * User
     */
    requestBody: {
      /**
       * The action to take to create the new user:
       * * `create` — The user receives an email from Zoom containing a confirmation link. The user must then use the link to activate their Zoom account. The user can then set or change their password.
       * * `autoCreate` — This action is for Enterprise customers with a managed domain. This feature is disabled by default because of the security risk involved in creating a user who does not belong to your domain.
       * * `custCreate` — Users created with this action do not have passwords and will **not** have the ability to log into the Zoom web portal or the Zoom client. These users can still host and join meetings using the `start_url` and `join_url` respectively. To use this option, you must [contact the Integrated Software Vendor (ISV) sales team](https://docs.google.com/forms/d/e/1FAIpQLSe8FundLOYp8TMptSwWYeFt7QGKlp4yw4YHilta9M0ycxdoNw/viewform).
       * * `ssoCreate` — This action is provided for the enabled “Pre-provisioning SSO User” option. A user created this way has no password. If it is **not** a Basic user, a personal vanity URL with the username (no domain) of the provisioning email is generated. If the username or PMI is invalid or occupied, it uses a random number or random personal vanity URL.
       */
      action: 'create' | 'autoCreate' | 'custCreate' | 'ssoCreate';
      user_info?: {
        /**
         * User email address.
         */
        email: string;
        /**
         * User's first name: cannot contain more than 5 Chinese words.
         */
        first_name?: string;
        /**
         * User's last name: cannot contain more than 5 Chinese words.
         */
        last_name?: string;
        /**
         * User password. Only used for the "autoCreate" function. The password has to have a minimum of 8 characters and maximum of 32 characters. By default (basic requirement), password must have at least one letter (a, b, c..), at least one number (1, 2, 3...) and include both uppercase and lowercase letters. It should not contain only one identical character repeatedly ('11111111' or 'aaaaaaaa') and it cannot contain consecutive characters ('12345678' or 'abcdefgh').
         *
         * **Note:** If the account owner or admin has enabled [enhanced password requirements](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_fa9186e4-6818-4f7a-915c-2e25c19f0acd), the value provided in this field must meet those requirements. These requirements can be retrieved by calling the [**Get account settings**](/docs/api-reference/zoom-api/ma#operation/accountSettings) API and referring to the `password_requirement` field present in the `security` object.
         */
        password?: string;
        /**
         * User type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
         */
        type: 1 | 2 | 3 | 99;
        /**
         * Information about the user's features.
         */
        feature?: {
          /**
           * Whether the user has the **Zoom Phone** feature enabled.
           */
          zoom_phone?: boolean;
          /**
           * The Zoom One Bundle plan option:<br>`16` - Zoom One Business Plus with US/CA Unlimited.<br>`32` - Zoom One Business Plus with UK/IR Unlimited.<br>`64` - Zoom One Business Plus with AU/NZ Unlimited.<br>`128` - Zoom One Business Plus with Japan Unlimited.
           */
          zoom_one_type?: 16 | 32 | 64 | 128;
        };
        /**
         * The Zoom United type. The license option:
         * * `1` — Zoom United Pro-United with US/CA Unlimited.
         * * `2` — Zoom United Pro-United with UK/IR Unlimited.
         * * `4` — Zoom United Pro-United with AU/NZ Unlimited.
         * * `8` — Zoom United Pro-United with Global Select.
         * * `16` — Zoom United Pro-United with Zoom Phone Pro.
         * * `32` — Zoom United Biz-United with US/CA Unlimited.
         * * `64` — Zoom United Biz-United with UK/IR Unlimited.
         * * `128` — Zoom United Biz-United with AU/NZ Unlimited.
         * * `256` — Zoom United Biz-United with Global Select.
         * * `512` — Zoom United Biz-United with Zoom Phone Pro.
         * * `1024` — Zoom United Ent-United with US/CA Unlimited.
         * * `2048` — Zoom United Ent-United with UK/IR Unlimited.
         * * `4096` — Zoom United Ent-United with AU/NZ Unlimited.
         * * `8192` — Zoom United Ent-United with Global Select.
         * * `16384` — Zoom United Ent-United with Zoom Phone Pro.
         * * `32768` — Zoom United Pro-United with JP Unlimited.
         * * `65536` — Zoom United Biz-United with JP Unlimited.
         * * `131072` — Zoom United Ent-United with JP Unlimited.
         */
        plan_united_type?:
          | '1'
          | '2'
          | '4'
          | '8'
          | '16'
          | '32'
          | '64'
          | '128'
          | '256'
          | '512'
          | '1024'
          | '2048'
          | '4096'
          | '8192'
          | '16384'
          | '32768'
          | '65536'
          | '131072';
      };
    };
  }): CancelablePromise<{
    /**
     * User email address.
     */
    email?: string;
    /**
     * User's first name.
     */
    first_name?: string;
    /**
     * User ID.
     */
    id?: string;
    /**
     * User's last name.
     */
    last_name?: string;
    /**
     * User type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
     *
     */
    type?: 1 | 2 | 3 | 99;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/users',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br> Bad Request

         **Error Code:** \`300\` <br> Invalid parameter: password

         **Error Code:** \`200\` <br> No privilege. <br> No permission, please contact Zoom customer support.

         **Error Code:** \`1000\` <br> The user cannot be changed because they are a Call-queue manager or Auto-receptionist operator.

         **Error Code:**\`300\` <br> Your request could not be completed because the name contains an invalid word: {name} <br> The value provided for plan_united_type parameter is invalid. Try again with a valid value.

         **Error Code:** \`1009\` <br> The user $email already holds an active account.

         **Error Code:** \`1107\` <br> Email domain is blocked

         **Error Code:** \`2034\` <br> Your request to add a new {0} user could not be approved at this time because your account has reached the permitted maximum number of {1} users. Please purchase additional licenses or contact the Zoom support team to provision additional users in your account.

         **Error Code:** \`2033\` <br> Your request to add a basic user was not approved because you have already reached the maximum basic user limit allowed in your account. For additional help regarding this issue, contact the Zoom Customer Support team.

         **Error Code:** \`3412\` <br> Your request to add a basic user could not be approved at this time because your account has reached the permitted maximum number of $maxAllowedNumber basic users. Please remove existing basic user(s) from your Users list or the Pending Users list before attempting to add another user. <br> Your request to add a new $userType user could not be approved at this time because your account has reached the permitted maximum number of $maxAllowedNumber paying users. Please purchase additional licenses or contact the Zoom support team to provision additional users in your account.

         **Error Code:** \`1108\` <br> Permission requirements to change the user type of this user were not met.

         **Error Code:** \`1116\` <br> Email address $email doesn't match limited domains: $domains

         **Error Code:** \`2002\` <br> SSO has not been enabled for this account. Contact the Zoom support team to enable this option.

         **Error Code:** \`2032\` <br> The ssoCreate option is only available for SSO Partners that have enabled the pre-provision option. Contact the Zoom Support team to learn more.

         **Error Code:** \`2035\` <br> GPA accounts cannot add users.

         **Error Code:** \`2036\` <br> Other accounts cannot invite GPA account owners.

         **Error Code:** \`2037\` <br>
        Force forbidden user can not be invited.

         **Error Code:** \`2038\` <br>
        Your request to add a new Zoom One user could not be approved at this time because your account has reached the permitted maximum number. Please purchase additional licenses or contact the Zoom support team to provision additional users in your account.

         **Error Code:** \`11321\` <br>
        Email domain is blocked by Zoom Trust & Safety.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`4130\` <br>
        Group does not exist: $groupId

         **Error Code:** \`1102\` <br>
        You cannot enable the "Zoom Phone" feature because you do not have any available licenses.`,
        409: `**HTTP Status Code:** \`409\` <br>
        User with that email already exists.

         **Error Code:** \`1005\` <br>
        Email "$email" has already been used.`,
        429: `**HTTP Status Code:** \`429\` <br>
        You have exceeded the daily rate limit ({0}) of user invite requests permitted for this account. You may resume these requests at GMT 00:00:00.`,
      },
    });
  }

  /**
   * Check a user email
   * Verify if a user's email is registered with Zoom.<br><br>
   *
   * <b>Note: </b>You can successfully check if a user is a registered Zoom user only if the user **signed up for Zoom via email and is within your account.** If you provide an email address of a user who is not in your account, the value of "existed_email" parameter will be "false" irrespective of whether or not the user is registered with Zoom. The response of this API call will not include users who joined Zoom using options such as "Sign in with SSO", "Sign in with Google" or "Sign in with Facebook" even if they are in the same account as yours.
   *
   * **Scopes:** `user:read:admin` `user:read`
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * Success.
   * @throws ApiError
   */
  public userEmail({
    email,
  }: {
    /**
     * The email address to be verified.
     */
    email: string;
  }): CancelablePromise<{
    /**
     * Indicates whether or not the email already exists in Zoom.
     */
    existed_email?: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/email',
      query: {
        email: email,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br><br>
         **Error Code:** \`300\`<br> Email is required.`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.`,
      },
    });
  }

  /**
   * Get user's ZAK
   * Get the Zoom Access Key (ZAK) for the authenticated user associated with the access token in the API request. You can use a ZAK to start or join a meeting on behalf of this user.
   *
   * ZAKs obtained with this endpoint expire five minutes after receipt.
   *
   * To get a ZAK for a different user or with a different expiration, use the [Get a user token](https://marketplace.zoom.us/docs/api-reference/zoom-api/methods#operation/userToken) API with the `zak` `type` query parameter.
   *
   * See [Getting a Zoom Access Key (ZAK)](https://marketplace.zoom.us/docs/sdk/native-sdks/auth#generating-zoom-access-token-zak) for details.
   *
   * **Scope:** `user_zak:read`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   * @returns any OK
   * @throws ApiError
   */
  public userZak(): CancelablePromise<{
    /**
     * The user's Zoom Access Key (ZAK).
     */
    token?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/me/zak',
      errors: {
        400: `**HTTP Status Code:** \`404\` <br>

         **Error Code:** \`1001\`<br>
        User not exist.<br>
        User {userId} does not exist or does not belong to this account.`,
      },
    });
  }

  /**
   * Check a user's PM room
   * A personal meeting room is a virtual meeting room that can be permanently assigned to a user.
   * Use this API to check if a personal meeting room with the given name exists or not.<br><br>
   * **Scopes:** `user:read:admin` `user:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **HTTP Status Code:** `200`<br>
   * Success.
   * @throws ApiError
   */
  public userVanityName({
    vanityName,
  }: {
    /**
     * Personal meeting room name.
     */
    vanityName: string;
  }): CancelablePromise<{
    /**
     * If `true`, it indicates that the personal meeting room with the given name exists.<br> `false` - The room name does not exist.
     */
    existed?: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/vanity_name',
      query: {
        vanity_name: vanityName,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br><br>
         **Error Code:** \`300\`<br>Vanity name is required.`,
      },
    });
  }

  /**
   * Delete a user
   * Use this API to disassociate (unlink) a user or permanently delete a user. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * **Deleting** a user **permanently** removes the user and their data from Zoom. Users can create a new Zoom account using the same email address. An account owner or an account admin can transfer meetings, webinars and cloud recordings to another Zoom user account before deleting.
   *
   * **Disassociating** a user unlinks the user from the associated Zoom account and provides the user their own basic free Zoom account. The disassociated user can then purchase their own Zoom licenses. An account owner or account admin can transfer the user's meetings, webinars, and cloud recordings to another user before disassociation.
   *
   * **Scopes:** `user:write:admin`, `user:write`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns void
   * @throws ApiError
   */
  public userDelete({
    userId,
    action = 'disassociate',
    encryptedEmail = false,
    transferEmail,
    transferMeeting,
    transferWebinar,
    transferRecording,
    transferWhiteboard,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * Delete action options:<br>`disassociate` - Disassociate a user.<br>`delete`-  Permanently delete a user.<br>Note: To delete pending user in the account, use `disassociate`
     */
    action?: 'disassociate' | 'delete';
    /**
     * Whether the email address passed for the `userId` value is an encrypted email address:
     *
     * * `true` — The email address is encrypted.
     * * `false` — The email address is not encrypted.
     *
     * If you do not query this parameter, this value defaults to null (`false`).
     */
    encryptedEmail?: boolean;
    /**
     * Transfer email. This field is **required** if the user has upcoming Zoom Events scheduled. After you delete or disassociate the user, the user's upcoming Zoom Events will be transferred to the target user.
     */
    transferEmail?: string;
    /**
     * Transfer meeting.
     */
    transferMeeting?: boolean;
    /**
     * Transfer webinar.
     */
    transferWebinar?: boolean;
    /**
     * Transfer recording.
     */
    transferRecording?: boolean;
    /**
     * When you delete the user, whether to transfer all their [Zoom Whiteboard](https://support.zoom.us/hc/en-us/articles/4410916881421) data to another user.
     */
    transferWhiteboard?: boolean;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/users/{userId}',
      path: {
        userId: userId,
      },
      query: {
        action: action,
        encrypted_email: encryptedEmail,
        transfer_email: transferEmail,
        transfer_meeting: transferMeeting,
        transfer_webinar: transferWebinar,
        transfer_recording: transferRecording,
        transfer_whiteboard: transferWhiteboard,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br><br> **Error Code:** \`300\`<br>The transfer-to email address cannot be the same as the unlinked or deleted user's email address.<br> Unable to unlink API user(s).<br> This user has published events on Zoom Events and cannot be deleted or unlinked.<br> This user has published events on Zoom Events and you do not specify a target user to transfer data.<br> The destination user does not have a Zoom Events license and cannot receive this data.<br> The destination user does not have a $license or higher license and cannot receive this data.<br><br>
         **Error Code:** \`200\`<br>Cannot delete a user out of your account. <br>Cannot delete a Zoom Rooms user. <br>Unable to delete this deactivated user. Please contact Zoom support team for more information. <br><br>
         **Error Code:** \`1000\`<br>
        The user cannot be changed because they are a Call-queue manager or Auto-receptionist operator.<br><br>
         **Error Code:** \`1107\`<br>You can not disassociate a user with managed domain.<br><br>
         **Error Code:** \`1117\`<br>You can not disassociate an Admin user.<br><br>
         **Error Code:** \`1120\`<br>A valid invitation to join the Zoom account was not found for this user. <br>This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.<br>`,
      },
    });
  }

  /**
   * Get a user
   * Use this API to view a user's information on a Zoom account. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * **Note:** Users who have not activated their account will have a `pending` status. These users' `created_at` timestamp will also display the time at which the API call was made, **not** the account's creation date.
   *
   * **Scopes:** `user:read:admin`, `user:read`, `user_info:read` <br>
   * * **Note:** The `user_info:read` scope is only available when you pass the `me` value for the `$userId` value.
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * User object returned.
   * @throws ApiError
   */
  public user({
    userId,
    loginType,
    encryptedEmail = false,
    searchByUniqueId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * The user's login method:
     * * `0` — Facebook OAuth
     * * `1` — Google OAuth
     * * `24` — Apple OAuth
     * * `27` — Microsoft OAuth
     * * `97` — Mobile device
     * * `98` — RingCentral OAuth
     * * `99` — API user
     * * `100` — Zoom Work email
     * * `101` — Single Sign-On (SSO)
     *
     * The following login methods are only available in China:
     * * `11` — Phone number
     * * `21` — WeChat
     * * `23` — Alipay
     */
    loginType?: 0 | 1 | 11 | 21 | 23 | 24 | 27 | 97 | 98 | 99 | 100 | 101;
    /**
     * Whether the email address passed for the `userId` value is an encrypted email address:
     *
     * * `true` — The email address is encrypted.
     * * `false` — The email address is not encrypted.
     *
     * If you do not query this parameter, this value defaults to null (`false`).
     */
    encryptedEmail?: boolean;
    /**
     * Whether the queried `userId` value is an employee unique ID:
     * * `true` — The queried ID is an employee's unique ID.
     * * `false` — The queried ID is not an employee's unique ID.
     *
     * This value defaults to `false` (null).
     */
    searchByUniqueId?: boolean;
  }): CancelablePromise<{
    /**
     * User ID.
     */
    id?: string;
    /**
     * The date and time at which this user was created.
     */
    created_at?: string;
    /**
     * Department.
     */
    dept?: string;
    /**
     * User's email address.
     */
    email: string;
    /**
     * User's first name.
     */
    first_name?: string;
    /**
     * User last login client version.
     */
    last_client_version?: string;
    /**
     * User last login time.
     */
    last_login_time?: string;
    /**
     * User's last name.
     */
    last_name?: string;
    /**
     * [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi).
     */
    pmi?: number;
    /**
     * User's [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) name.
     */
    role_name?: string;
    /**
     * The time zone of the user.
     */
    timezone?: string;
    /**
     * User's plan type:<br>`1` - Basic.<br>`2` - Licensed.<br>`3` - On-prem.<br>`99` - None (this can only be set with `ssoCreate`).
     */
    type: 1 | 2 | 3 | 99;
    /**
     * Displays `true` if user has enabled a [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi) for instant meetings, `false` otherwise.
     */
    use_pmi?: boolean;
    /**
     * User's account ID.
     */
    account_id?: string;
    /**
     * The user's account number.
     */
    account_number?: number;
    /**
     * CMS ID of user, only enabled for Kaltura integration.
     */
    cms_user_id?: string;
    /**
     * User's company.
     */
    company?: string;
    /**
     * Custom attribute(s) that have been assigned to the user.
     */
    custom_attributes?: {
      /**
       * Identifier for the custom attribute.
       */
      key?: string;
      /**
       * Name of the custom attribute.
       */
      name?: string;
      /**
       * Value of the custom attribute.
       */
      value?: string;
    };
    /**
     * The employee's unique ID. This field only returns when:
     * * SAML single sign-on (SSO) is enabled.
     * * The `login_type` value is `101` (SSO).
     */
    employee_unique_id?: string;
    /**
     * IDs of the web groups user belongs to.
     */
    group_ids?: Array<string>;
    /**
     * IM IDs of the groups user belongs to.
     */
    im_group_ids?: Array<string>;
    jid?: string;
    /**
     * User's job title.
     */
    job_title?: string;
    /**
     * Default language for the Zoom Web Portal.
     */
    language?: string;
    /**
     * User's location.
     */
    location?: string;
    /**
     * The user's login method:
     *
     * `0` — Facebook OAuth</br>`1` — Google OAuth</br>`24` — Apple OAuth</br>`27` — Microsoft OAuth</br>`97` — Mobile device</br>`98` — RingCentral OAuth</br>`99` — API user</br>`100` — Zoom Work email</br>`101` — Single Sign-On (SSO)
     *
     * The following login methods are only available in China:
     *
     * `11` — Phone number</br>`21` — WeChat</br>`23` — Alipay
     */
    login_types?: Array<0 | 1 | 11 | 21 | 23 | 24 | 27 | 97 | 98 | 99 | 100 | 101>;
    /**
     * The manager for the user.
     */
    manager?: string;
    /**
     * User's personal meeting url.
     */
    personal_meeting_url?: string;
    /**
     * **Note:** This field has been **deprecated** and will not be supported in the future. Use the **phone_numbers** field instead of this field. <br> User's country for Company Phone Number.
     * @deprecated
     */
    phone_country?: string;
    /**
     * **Note:** This field has been **deprecated** and will not be supported in the future. Use the **phone_numbers** field instead of this field. <br> User's phone number.
     * @deprecated
     */
    phone_number?: string;
    phone_numbers?: Array<{
      /**
       * The phone number's country code. For example, for United States phone numbers, this will be a `+1` value.
       */
      code?: string;
      /**
       * The phone number's [country ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries). For example, if the phone number provided in the `number` field is a Brazil-based number, this will be the `BR` value.
       */
      country?: string;
      /**
       * The phone number's label:
       * * `Mobile`
       * * `Office`
       * * `Home`
       * * `Fax`
       */
      label?: 'Mobile' | 'Office' | 'Home' | 'Fax';
      /**
       * The user's phone number.
       */
      number?: string;
      /**
       * Whether Zoom has verified the phone number.
       */
      verified?: boolean;
    }>;
    /**
     * The URL for user's profile picture.
     */
    pic_url?: string;
    /**
     * This field is returned if the user is enrolled in the [Zoom United](https://zoom.us/pricing/zoom-bundles) plan. The license option:
     * * `1` — Zoom United Pro-United with US/CA Unlimited.
     * * `2` — Zoom United Pro-United with UK/IR Unlimited.
     * * `4` — Zoom United Pro-United with AU/NZ Unlimited.
     * * `8` — Zoom United Pro-United with Global Select.
     * * `16` — Zoom United Pro-United with Zoom Phone Pro.
     * * `32` — Zoom United Biz-United with US/CA Unlimited.
     * * `64` — Zoom United Biz-United with UK/IR Unlimited.
     * * `128` — Zoom United Biz-United with AU/NZ Unlimited.
     * * `256` — Zoom United Biz-United with Global Select.
     * * `512` — Zoom United Biz-United with Zoom Phone Pro.
     * * `1024` — Zoom United Ent-United with US/CA Unlimited.
     * * `2048` — Zoom United Ent-United with UK/IR Unlimited.
     * * `4096` — Zoom United Ent-United with AU/NZ Unlimited.
     * * `8192` — Zoom United Ent-United with Global Select.
     * * `16384` — Zoom United Ent-United with Zoom Phone Pro.
     * * `32768` — Zoom United Pro-United with JP Unlimited.
     * * `65536` — Zoom United Biz-United with JP Unlimited.
     * * `131072` — Zoom United Ent-United with JP Unlimited.
     */
    plan_united_type?:
      | '1'
      | '2'
      | '4'
      | '8'
      | '16'
      | '32'
      | '64'
      | '128'
      | '256'
      | '512'
      | '1024'
      | '2048'
      | '4096'
      | '8192'
      | '16384'
      | '32768'
      | '65536'
      | '131072';
    /**
     * The user's pronouns.
     */
    pronouns?: string;
    /**
     * The user's display pronouns setting:
     * * `1` — Ask the user every time they join meetings and webinars.
     * * `2` — Always display pronouns in meetings and webinars.
     * * `3` — Do not display pronouns in meetings and webinars.
     */
    pronouns_option?: 1 | 2 | 3;
    /**
     * Unique identifier of the [role](/docs/api-reference/zoom-api/methods#operation/roles) assigned to the user.
     */
    role_id?: string;
    /**
     * Status of user's account.
     */
    status?: 'pending' | 'active' | 'inactive';
    /**
     * Personal meeting room URL, if the user has one.
     */
    vanity_url?: string;
    /**
     * Displays whether user is verified or not. <br>
     * `1` - Account verified.<br>
     * `0` - Account not verified.
     */
    verified?: number;
    /**
     * The user's cluster.
     */
    cluster?: string;
    /**
     * The user's Zoom One Bundle plan option:<br>`4` - Zoom One Enterprise.<br>`8` - Zoom One Enterprise Plus.<br>`16` - Zoom One Business Plus with US/CA Unlimited.<br>`32` - Zoom One Business Plus with UK/IR Unlimited.<br>`64` - Zoom One Business Plus with AU/NZ Unlimited.<br>`128` - Zoom One Business Plus with Japan Unlimited.
     */
    zoom_one_type?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}',
      path: {
        userId: userId,
      },
      query: {
        login_type: loginType,
        encrypted_email: encryptedEmail,
        search_by_unique_id: searchByUniqueId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
        Bad request<br>
         **Error Code:** \`1120\`<br>
        A valid invitation to join the Zoom account was not found for this user. <br>
        This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.
        `,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.<br>`,
      },
    });
  }

  /**
   * Update a user
   * Use this API to update a user's [Zoom profile](https://support.zoom.us/hc/en-us/articles/201363203-My-Profile) information. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * **Scopes:** `user:write:admin` `user:write`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns void
   * @throws ApiError
   */
  public userUpdate({
    userId,
    requestBody,
    loginType,
    removeTspCredentials,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * The user's profile information.
     */
    requestBody: {
      /**
       * The Kaltura user ID.
       */
      cms_user_id?: string;
      /**
       * The user's company.
       */
      company?: string;
      /**
       * The user's assigned custom attributes.
       */
      custom_attributes?: Array<{
        /**
         * The custom attribute's key.
         */
        key?: string;
        /**
         * The custom attribute's name.
         */
        name?: string;
        /**
         * The custom attribute's value
         */
        value?: string;
      }>;
      /**
       * The user's assigned department.
       */
      dept?: string;
      /**
       * The user's first name. This value cannot contain more than five Chinese characters.
       */
      first_name?: string;
      /**
       * Provide unique identifier of the group that you would like to add a [pending user](https://support.zoom.us/hc/en-us/articles/201363183-Managing-users#h_13c87a2a-ecd6-40ad-be61-a9935e660edb) to. The value of this field can be retrieved from the [**List groups**](/docs/api-reference/zoom-api/methods#operation/groups) API.
       */
      group_id?: string;
      /**
       * The user's host key.
       */
      host_key?: string;
      /**
       * The user's job title.
       */
      job_title?: string;
      /**
       * The user's language.
       */
      language?: string;
      /**
       * The user's last name. This value cannot contain more than five Chinese characters.
       */
      last_name?: string;
      /**
       * The user's location.
       */
      location?: string;
      /**
       * The user's assigned manager.
       */
      manager?: string;
      /**
       * **Note:** This field has been **deprecated** and will not be supported in the future. Use the `country` field of the `phone_numbers` object to select the phone number country.
       *
       * The user's phone number [country ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
       * @deprecated
       */
      phone_country?: string;
      /**
       * **Note:** This field has been **deprecated** and will not be supported in the future. Instead, use the `phone_numbers` field to assign phone numbers to a user.
       *
       * The user's phone number. To update a phone number, you must also provide the `phone_country` field.
       * @deprecated
       */
      phone_number?: string;
      /**
       * Information about the user's assigned phone numbers.
       */
      phone_numbers?: Array<{
        /**
         * The phone number's country code
         */
        code?: string;
        /**
         * The phone number's [country ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) of the phone number.
         */
        country?: string;
        /**
         * The phone number's label:
         * * `Mobile`
         * * `Office`
         * * `Home`
         * * `Fax`
         */
        label?: 'Mobile' | 'Office' | 'Home' | 'Fax';
        /**
         * The phone number.
         */
        number?: string;
      }>;
      /**
       * The user's [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi).
       */
      pmi?: number;
      /**
       * The user's pronouns.
       */
      pronouns?: string;
      /**
       * The user's display pronouns setting:
       * * `1` — Ask the user every time they join meetings and webinars.
       * * `2` — Always display pronouns in meetings and webinars.
       * * `3` — Do not display pronouns in meetings and webinars.
       */
      pronouns_option?: 1 | 2 | 3;
      /**
       * The user's [timezone](/docs/api-reference/other-references/abbreviation-lists#timezones)
       */
      timezone?: string;
      /**
       * The type of [user](https://support.zoom.us/hc/en-us/articles/201363173-Zoom-user-types-roles):
       * * `1` — Basic.
       * * `2` — Licensed.
       * * `3` — On-Premise.
       * * `4` — No Meetings License.
       * * `99` — None. You can only set this value if the user was created using the `ssoCreate` value for `action` parameter in the [**Create users**](/docs/api-reference/zoom-api/methods#operation/userCreate) API.
       */
      type?: 1 | 2 | 3 | 99;
      /**
       * Whether to use a [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi) for instant meetings.
       */
      use_pmi?: boolean;
      /**
       * The user's Personal Meeting Room name.
       */
      vanity_name?: string;
      /**
       * The Zoom One Bundle plan option:<br>`0` - Turn off Zoom United license.<br>`16` - Zoom One Business Plus with US/CA Unlimited.<br>`32` - Zoom One Business Plus with UK/IR Unlimited.<br>`64` - Zoom One Business Plus with AU/NZ Unlimited.<br>`128` - Zoom One Business Plus with Japan Unlimited.
       */
      zoom_one_type?: 0 | 16 | 32 | 64 | 128;
      /**
       * The Zoom United type. The license option:
       * * `1` — Zoom United Pro-United with US/CA Unlimited.
       * * `2` — Zoom United Pro-United with UK/IR Unlimited.
       * * `4` — Zoom United Pro-United with AU/NZ Unlimited.
       * * `8` — Zoom United Pro-United with Global Select.
       * * `16` — Zoom United Pro-United with Zoom Phone Pro.
       * * `32` — Zoom United Biz-United with US/CA Unlimited.
       * * `64` — Zoom United Biz-United with UK/IR Unlimited.
       * * `128` — Zoom United Biz-United with AU/NZ Unlimited.
       * * `256` — Zoom United Biz-United with Global Select.
       * * `512` — Zoom United Biz-United with Zoom Phone Pro.
       * * `1024` — Zoom United Ent-United with US/CA Unlimited.
       * * `2048` — Zoom United Ent-United with UK/IR Unlimited.
       * * `4096` — Zoom United Ent-United with AU/NZ Unlimited.
       * * `8192` — Zoom United Ent-United with Global Select.
       * * `16384` — Zoom United Ent-United with Zoom Phone Pro.
       * * `32768` — Zoom United Pro-United with JP Unlimited.
       * * `65536` — Zoom United Biz-United with JP Unlimited.
       * * `131072` — Zoom United Ent-United with JP Unlimited.
       * * `none` — Turn off Zoom United type.
       */
      plan_united_type?:
        | '1'
        | '2'
        | '4'
        | '8'
        | '16'
        | '32'
        | '64'
        | '128'
        | '256'
        | '512'
        | '1024'
        | '2048'
        | '4096'
        | '8192'
        | '16384'
        | '32768'
        | '65536'
        | '131072'
        | 'none';
    };
    /**
     * The user's login method:
     * * `0` — Facebook OAuth
     * * `1` — Google OAuth
     * * `24` — Apple OAuth
     * * `27` — Microsoft OAuth
     * * `97` — Mobile device
     * * `98` — RingCentral OAuth
     * * `99` — API user
     * * `100` — Zoom Work email
     * * `101` — Single Sign-On (SSO)
     *
     * The following login methods are only available in China:
     * * `11` — Phone number
     * * `21` — WeChat
     * * `23` — Alipay
     */
    loginType?: 0 | 1 | 11 | 21 | 23 | 24 | 27 | 97 | 98 | 99 | 100 | 101;
    /**
     * Whether to remove the user's TSP credentials:
     * * `true` — The queried ID is an employee's unique ID.
     * * `false` — The queried ID is not an employee's unique ID.
     *
     * This value defaults to `false` (null).
     */
    removeTspCredentials?: boolean | null;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/users/{userId}',
      path: {
        userId: userId,
      },
      query: {
        login_type: loginType,
        remove_tsp_credentials: removeTspCredentials,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\`
         * A Zoom Room user cannot be updated to a free user type: $userId
         * A Zoom Room user cannot be updated to a no-meeting-license user type: $userId.
         * You cannot update PMI information for a "No Meetings License" user.
         * Only an account administrator can change a user's name.
         * Only an account administrator can change the host key.
         * Only an account administrator can change a Personal Meeting ID (PMI).
         * Only an account administrator can change a vanity name.

         **Error Code:**\`300\`
         * Your request could not be completed because the name contains an invalid word: {name}
         * You cannot change the user type to "Basic" because this user has an upcoming Zoom Events scheduled.
         * Invalid parameter: password
         * The value provided for "plan_united_type" parameter is invalid. Try again with a valid value.
         * You can't change the "type" or "plan_united_type" or "zoom_one_type" at the same time.
         * You can't turn off your Zoom One license now because you are having Zoom One as your basic plan type.

         **Error Code:** \`1108\` <br>
        Permission requirements to change the user type of this user were not met.

         **Error Code:** \`1109\` <br>
        Host is not a paid user.

         **Error Code:** \`1120\` <br>
        A valid invitation to join the Zoom account was not found for this user. This error is thrown if you added a user in your account but the user did not accept the invitation and the invitation expired. This makes the \`userId\` invalid.

         **Error Code:** \`2034\` <br>
        Your request to convert the plan type of this user to "{0}" was not approved at this time because your account has reached the permitted maximum number of "{1}" users. You must purchase additional licenses or contact the Zoom support team to provision additional users in your account.

         **Error Code:** \`2033\` <br>
        Your request to convert the user type to "Basic" was not approved because you have already reached the maximum basic user limit allowed in your account. For additional help regarding this issue, contact the Zoom Customer Support team.

         **Error Code:** \`3412\`
         * Your request to convert the user type of this "{$userType}" user to a "Basic" user was not approved at this time because your account has reached the permitted maximum number of "{$maxAllowedNumber}" Basic users. Remove existing basic user(s) from your "Users" list or the "Pending Users" list before attempting to convert a user to a Basic user.
         * Your request to convert the user type of a "Basic" user to a "{$userType}" user was not approved at this time because your account has reached the permitted maximum number of "{$maxAllowedNumber}" paying users. Please purchase additional licenses or remove existing paying user(s) from your "Users" list or the "Pending Users" list before attempting to convert a user to a paying user.
         * Your request to convert the user type of a "{$userType}" user to a "No-Meeting License" user was not approved at this time because your account has reached the permitted maximum number of "{$maxAllowedNumber"} No-Meeting License users. Remove the existing No-Meeting License user(s) from your "Users" list or the "Pending Users" list before attempting to convert a user to a No-Meeting License user.

         **Error Code:** \`4100\` <br>
        User is already taken by a user from your account. Choose another "Personal Link Name".

         **Error Code:** \`2038\` <br>
        Your request to convert the plan type of this user was not approved at this time because your account has reached the permitted maximum number. Please purchase additional licenses or contact the Zoom support team to provision additional users in your account.

         **Error Code:**\`2039\`
         * You can't turn off your Zoom United license now because you don't have enough basic licenses.
         * You can't turn off your Zoom One license now because you don't have enough basic licenses.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`1001\` <br>
        User does not exist: $userId`,
      },
    });
  }

  /**
   * Delete user assistants
   * Delete all assistants of the current user. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * Assistants are the users to whom the current user has assigned [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). These assistants can schedule meeting on behalf of the current user as well as manage and act as an alternative host for all meetings if the admin has enabled [Co-host option](https://zoom.us/account/setting) on the account.
   *
   * **Scopes:** `user:write:admin`, `user:write`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The user as well as the assistant must have Licensed or an On-prem license.
   * * Assistants must be under the current user's account.
   * @returns void
   * @throws ApiError
   */
  public userAssistantsDelete({
    userId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/users/{userId}/assistants',
      path: {
        userId: userId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.<br>`,
      },
    });
  }

  /**
   * List user assistants
   * List a user's assistants. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * Assistants are the users to whom the current user has assigned [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). These assistants can schedule meeting on behalf of the current user as well as manage and act as an alternative host for all meetings if the admin has enabled [Co-host option](https://zoom.us/account/setting) on the account.
   *
   * **Scopes:** `user:read:admin`, `user:read`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * Current user as well as the assistant must have Licensed or an On-prem license.
   * * Assistants must be under the current user's account.
   * @returns any **HTTP Status Code:** `200`<br>
   * Success.
   * @throws ApiError
   */
  public userAssistants({
    userId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
  }): CancelablePromise<{
    /**
     * List of User's assistants.
     */
    assistants?: Array<{
      /**
       * Assistant's email address.
       */
      email?: string;
      /**
       * Assistant's user ID.
       */
      id?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}/assistants',
      path: {
        userId: userId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.<br>`,
      },
    });
  }

  /**
   * Add assistants
   * Use this API to assign assistants to a user. In the request body, provide either the user's ID or the user's email address. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * Assistants are users to whom the current user has assigned the [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). These assistants can schedule meetings on behalf of the current user. Assistants can also manage and act as an alternative host for the user's meetings if the administrator has enabled the [co-host feature](https://support.zoom.us/hc/en-us/articles/206330935-Enabling-and-adding-a-co-host) on the account.
   *
   * **Scopes:** `user:write:admin`, `user:write` </br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * The user and the assistant must have a Licensed or an On-prem license.
   * * Assistants must be under the current user's account or in the same organization with the current user's account.
   * @returns any **HTTP Status Code:** `201`<br>
   * Assistant added.
   * @throws ApiError
   */
  public userAssistantCreate({
    userId,
    requestBody,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * User assistant.
     */
    requestBody: {
      /**
       * List of User's assistants.
       */
      assistants?: Array<{
        /**
         * Assistant's email address.
         */
        email?: string;
        /**
         * Assistant's user ID.
         */
        id?: string;
      }>;
    };
  }): CancelablePromise<{
    add_at?: string;
    /**
     * User ID.
     */
    ids?: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/users/{userId}/assistants',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br><br>
         **Error Code:** \`200\`<br>
        Current account must be paid account: $userId <br>
        The user must either be a Licensed user or an On-prem user : $userId. <br>
        Can't assign scheduling privilege to yourself.<br>
        Can't find user $email.<br>
        User $email has already granted scheduling privilege.<br>
        The user must either be a Licensed user or an On-prem user : $email.`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.<br>`,
      },
    });
  }

  /**
   * Delete a user assistant
   * Delete a specific assistant of a user. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * Assistants are the users to whom the current user has assigned [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). These assistants can schedule meeting on behalf of the current user as well as manage and act as an alternative host for all meetings if the admin has enabled [Co-host option](https://zoom.us/account/setting) on the account.
   *
   * **Scopes:** `user:write:admin`, `user:write`</br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The user as well as the assistant must have Licensed or an On-prem license.
   * * Assistants must be under the current user's account.
   * @returns void
   * @throws ApiError
   */
  public userAssistantDelete({
    userId,
    assistantId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * Assistant ID.
     */
    assistantId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/users/{userId}/assistants/{assistantId}',
      path: {
        userId: userId,
        assistantId: assistantId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.
        `,
      },
    });
  }

  /**
   * List a user's collaboration devices
   * List a user's collaboration devices. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * **Scopes:** `user:read:admin`, `user:read`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` <br>
   * Collaboration device list returned.
   * @throws ApiError
   */
  public listCollaborationDevices({
    userId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
  }): CancelablePromise<{
    /**
     * Total number of records returned.
     */
    total_records?: number;
    collaboration_devices?: Array<{
      /**
       * Unique identifier of the device.
       */
      id?: string;
      /**
       * Name of the Personal Zoom Room's device.
       */
      device_name?: string;
      /**
       * Name of the Personal Zoom Room.
       */
      room_name?: string;
      /**
       * Unique Identifier of the Zoom Room.
       */
      room_user_id?: string;
      /**
       * Status of the device. The value can be either `Online` or `Offline`.
       */
      status?: 'Online' | 'Offline';
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}/collaboration_devices',
      path: {
        userId: userId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`1001\` <br>
        User does not exist: $userId`,
      },
    });
  }

  /**
   * Get collaboration device detail
   * Get collaboration device detail. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * **Scopes:** `user:read:admin`, `user:read`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` <br>
   * Collaboration device returned.
   * @throws ApiError
   */
  public getCollaborationDevice({
    userId,
    collaborationDeviceId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * The collaboration deviceId.
     */
    collaborationDeviceId: string;
  }): CancelablePromise<{
    /**
     * Unique identifier of the device.
     */
    id?: string;
    /**
     * Name of the Personal Zoom Room's device.
     */
    device_name?: string;
    /**
     * Name of the Personal Zoom Room.
     */
    room_name?: string;
    /**
     * Unique Identifier of the Zoom Room.
     */
    room_user_id?: string;
    /**
     * Status of the device. The value can be either `Online` or `Offline`.
     */
    status?: 'Online' | 'Offline';
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}/collaboration_devices/{collaborationDeviceId}',
      path: {
        userId: userId,
        collaborationDeviceId: collaborationDeviceId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`1001\` <br>
        User does not exist: $userId
         **Error Code:** \`1238\` <br>
        Collaboration Device does not exist: {0}.`,
      },
    });
  }

  /**
   * Update a user's email
   * Change a user's [email address](https://support.zoom.us/hc/en-us/articles/201362563-How-Do-I-Change-the-Email-on-My-Account-) on a Zoom account that has managed domain set up. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * * If the Zoom account in which the user belongs has multiple [managed domains](https://support.zoom.us/hc/en-us/articles/203395207-What-is-Managed-Domain-), then the email to be updated **must** match one of the managed domains.
   * * A user's email address can **only** be changed for a maximum of 3 times in a day (24 hours).
   *
   * **Scopes:** `user:write:admin`, `user:write`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * Managed domain must be enabled in the account.
   * * The new email address should not already exist in Zoom.
   * @returns void
   * @throws ApiError
   */
  public userEmailUpdate({
    userId,
    requestBody,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * User email.
     */
    requestBody: {
      /**
       * User's email. The length should be less than 128 characters.
       */
      email: string;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/users/{userId}/email',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Not Found**<br>
        <br>**Error Code:** \`200\`<br>
        Only an account administrator can change email.<br>

         **Error Code:** \`1000\`<br>Admin can not change other admin's email.`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>
        <br>**Error Code:** \`1001\`<br>
        User does not exist: $email.<br>`,
      },
    });
  }

  /**
   * Update a user's password
   * Update the [password](https://support.zoom.us/hc/en-us/articles/206344385-Change-a-User-s-Password) of a user using which the user can login to Zoom. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * After this request is processed successfully, an email notification will be sent to the user stating that the password was changed.<br>
   * **Scopes:** `user:write:admin` `user:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * **Prerequisites:**<br>
   * * Owner or admin of the Zoom account.
   * @returns void
   * @throws ApiError
   */
  public userPassword({
    userId,
    requestBody,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * User password.
     */
    requestBody: {
      /**
       * User password. Should be less than 32 characters.
       *
       * **Note:** If the account owner or admin has enabled [enhanced password requirements](https://support.zoom.us/hc/en-us/articles/360034675592-Advanced-security-settings#h_fa9186e4-6818-4f7a-915c-2e25c19f0acd), the value provided in this field must meet those requirements. These requirements can be retrieved by calling the [**Get account settings](/docs/api-reference/zoom-api/ma#operation/accountSettings) API and referring to the `password_requirement` field present in the `security` object.
       */
      password: string;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/users/{userId}/password',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br><br> **Error Code:** \`300\` <br>Your new password can not match the old password.<br>This password cannot be changed because it has already been changed the maximum number of times over the past 24 hours.<br><br> **Error Code:** \`1117\` <br>Can not update Admin's password<br><br> **Error Code:** \`1123\`<br>Can only update password of Zoom work email account<br><br> **Error Code:** \`1124\` <br>Minimum of 6 characters.<br> Have at least {lengthRule} characters<br><br> **Error Code:** \`1125\` <br>Have at least 1 letter (a, b, c…)<br><br> **Error Code:** \`1126\` <br>Have at least 1 number (1, 2, 3…)<br><br> **Error Code:** \`1127\` <br>Have at least 1 special character (!, @, #…)<br><br>
         **Error Code:** \`1128\` <br>Include both Upper case and Lower case characters<br><br>**Error Code:** \`1129\` Users cannot reuse any of the last $formerPwdCount passwords created.<br><br> **Error Code:** \`1130\`<br>Password can't use the same character.<br><br>
         **Error Code:** \`1131\`<br>Password can't use continuation character.Such as 'abcdef','123456'.<br><br>
         **Error Code:** \`1136\`<br>
        Your password is too easy to guess. Try another one.


        `,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.
        `,
      },
    });
  }

  /**
   * Get user permissions
   * Use this API to get permissions that have been granted to the user. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * Users can be assigned a set of permissions that allows them to access only the pages/information that a user needs to view or edit.
   *
   * **Scopes:** `user:read:admin`, `user:read`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **HTTP Status Code:** `200`<br>
   * User permissions returned.
   * @throws ApiError
   */
  public userPermission({
    userId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
  }): CancelablePromise<{
    /**
     * List of user permissions.
     */
    permissions?: Array<string>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}/permissions',
      path: {
        userId: userId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.
        `,
      },
    });
  }

  /**
   * Delete a user's profile picture
   * Use this API to delete a user's profile picture. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * **Scopes:** `user:write:admin`, `user:write` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public userPictureDelete({
    userId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/users/{userId}/picture',
      path: {
        userId: userId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br><br>
         **Error Code:** \`200\`<br>
        Only an account administrator can change a profile picture.<br>`,
        404: `**HTTP Status Code:** \`404\`<br>
        Not Found<br><br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.
        `,
      },
    });
  }

  /**
   * Upload a user's profile picture
   * Upload a user's profile picture. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * Provide `multipart/form-data` as the value of the `content-type` header for this request. This API supports `.jpeg` and `.png` file formats.
   *
   * **Scopes:** `user:write:admin`, `user:write`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `201`<br>Picture uploaded.
   * @throws ApiError
   */
  public userPicture({
    userId,
    formData,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    formData: {
      /**
       * The file's path.
       */
      pic_file: string;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/users/{userId}/picture',
      path: {
        userId: userId,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>
         **Error Code:** \`300\`<br>
        Your request was not accepted because the profile picture contains invalid or explicit content.<br>
         **Error Code:** \`200\`<br>
        Only an account administrator can change a profile picture.<br>
         **Error Code:** \`120\`<br>
        File is empty.<br>
        File size cannot exceed 2M.<br>
        Only jpg/jpeg or png image file can be uploaded.<br>`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.
        `,
      },
    });
  }

  /**
   * Update a user's presence status
   * Use this API to update a user's presence status. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * A user's status **cannot** be updated more than once per minute. For example, you can only submit a maximum of one update request per minute for a single user.
   *
   * Users in the Zoom desktop client and mobile apps are assigned with a [presence status](https://support.zoom.us/hc/en-us/articles/360032554051-Status-Icons). The presence status informs users of their contact's availability. Users can also change their own presence status to one the following:
   * * **Away**
   * * **Do not disturb**
   * * **Available**
   * * **In a calendar event**
   * * **Presenting**
   * * **In a Zoom meeting**
   * * **On a call**
   *
   * Note that a user's presence status **cannot** be updated via this API if the user is not logged in to the Zoom client.
   *
   * **Scopes:** `user:write`, `user:write:admin`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public updatePresenceStatus({
    userId,
    requestBody,
  }: {
    userId: string;
    requestBody?: {
      /**
       * If updating the user's status to `Do_Not_Disturb`, the duration for which the status should remain as `Do_Not_Disturb`, in minutes.
       */
      duration?: number;
      /**
       * The user's presence status:
       * * `Away`
       * * `Do_Not_Disturb`
       * * `Available`
       * * `In_Calendar_Event`
       * * `Presenting`
       * * `In_A_Zoom_Meeting`
       * * `On_A_Call`
       *
       * Users who are on Zoom Client with a version **lower than 5.3.0** can update the status from:
       * * `Away` to `Do_Not_Disturb`
       * * `Available` to `Do_Not_Disturb`
       *
       * Users who are on **Zoom Client 5.3.0 or higher** can update the status from:
       * * `Do_Not_Disturb` to `Away`
       * * `Do_Not_Disturb` to `Available`
       * * `Available` to `Away`
       * * `Away` to `Available`
       */
      status?: 'Do_No_Disturb' | 'Away' | 'Available' | 'In_Calendar_Event' | 'Presenting' | 'In_A_Zoom_Meeting' | 'On_A_Call';
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/users/{userId}/presence_status',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`5301\` <br>
        Request to update the presence status of this user failed.

         **Error Code:** \`5411\` <br>
        Unauthorized request. You do not have permission to update the presence status of this user.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`1001\` <br>
        User does not exist: {userId}`,
        429: `**HTTP Status Code:** \`429\` <br>
         * Too many requests submitted to update the presence status of this user. Please wait for the request to be processed and try again later.`,
      },
    });
  }

  /**
   * Delete user schedulers
   * Delete all of a user's schedulers. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * Schedulers are users on whose behalf the current user (assistant) can schedule meetings for. By calling this API, the current user will no longer be a scheduling assistant of any user.
   *
   * **Scopes:** `user:write:admin`, `user:write`</br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * Current user (assistant) must be under the same account as the scheduler.
   * @returns void
   * @throws ApiError
   */
  public userSchedulersDelete({
    userId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/users/{userId}/schedulers',
      path: {
        userId: userId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.
        `,
      },
    });
  }

  /**
   * List user schedulers
   * List all the schedulers of a user. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * Schedulers in this context are the users for whom the current user can schedule meetings for. For example, if the current user (the user whose `userId` was passed in the `path` parameter) is "user A", the response of this API will contain a list of user(s), for whom user A can schedule and manage meetings. User A is the assistant of these users and thus has scheduling privilege for these user(s).
   *
   * **Scopes:** `user:read:admin`, `user:read`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * Current user must be under the same account as the scheduler.
   * @returns any **HTTP Status Code:** `200`<br>Successfully listed all schedulers of the user.
   * @throws ApiError
   */
  public userSchedulers({
    userId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
  }): CancelablePromise<{
    /**
     * List of users for whom the current user can schedule meetings.
     */
    schedulers?: Array<{
      /**
       * Email address of the scheduler.
       */
      email?: string;
      /**
       * Unique Identifier (User ID) of the Scheduler.
       */
      id?: string;
      /**
       * PMI of the meeting host in long (int64) format.
       */
      pmi?: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}/schedulers',
      path: {
        userId: userId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.
        `,
      },
    });
  }

  /**
   * Delete a scheduler
   * Delete a scheduler. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * Schedulers are users on whose behalf the current user (assistant) can schedule meetings for. By calling this API, the current user will no longer be a scheduling assistant of this scheduler.
   *
   * **Scopes:** `user:write:admin`, `user:write`</br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * Current user must be under the same account as the scheduler.
   * @returns void
   * @throws ApiError
   */
  public userSchedulerDelete({
    userId,
    schedulerId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * Scheduler's ID.
     */
    schedulerId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/users/{userId}/schedulers/{schedulerId}',
      path: {
        userId: userId,
        schedulerId: schedulerId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.
        `,
      },
    });
  }

  /**
   * Get user settings
   * Retrieve a user's settings. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * **Scopes:** `user:read:admin`, `user:read`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200`<br>
   * User settings returned.
   * @throws ApiError
   */
  public userSettings({
    userId,
    loginType,
    option,
    customQueryFields,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * The user's login method:
     * * `0` — Facebook OAuth
     * * `1` — Google OAuth
     * * `24` — Apple OAuth
     * * `27` — Microsoft OAuth
     * * `97` — Mobile device
     * * `98` — RingCentral OAuth
     * * `99` — API user
     * * `100` — Zoom Work email
     * * `101` — Single Sign-On (SSO)
     *
     * The following login methods are only available in China:
     * * `11` — Phone number
     * * `21` — WeChat
     * * `23` — Alipay
     */
    loginType?: 0 | 1 | 11 | 21 | 23 | 24 | 27 | 97 | 98 | 99 | 100 | 101;
    /**
     * Optional query parameters:
     * * `meeting_authentication` — Use this query parameter to view the [meeting authentication settings](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) applied to the user's account.
     * * `recording_authentication` — Use this query parameter to view the [recording authentication settings](https://support.zoom.us/hc/en-us/articles/360037756671-Authentication-Profiles-for-Cloud-Recordings) applied to the user's account.
     * * `meeting_security` — Use this query parameter to view the meeting security settings applied to the user's account.
     */
    option?: 'meeting_authentication' | 'recording_authentication' | 'meeting_security';
    /**
     * Provide the name of the field by which you would like to filter the response. For example, if you provide "host_video" as the value of this field, you will get a response similar to the following:<br>
     * {
     * "schedule_meeting": {
     * "host_video": false
     * }
     * }
     * <br>You can provide multiple values by separating them with commas(example: "host_video,participant_video”).
     */
    customQueryFields?: string;
  }): CancelablePromise<
    | {
        /**
         * The user's audio conference settings.
         */
        audio_conferencing?: {
          /**
           * The user's [**Toll-free and Fee-based Toll Call**](https://support.zoom.us/hc/en-us/articles/360060950711-Enabling-Toll-free-and-Fee-based-Toll-Call#h_01F5190TYM8736XHQX683YQYSY) settings.
           */
          toll_free_and_fee_based_toll_call?: {
            /**
             * Whether webinar attendees can dial in through the account's **Toll-free and Fee-based Toll Call** phone numbers. This feature is only available in version 5.2.2 and higher.
             */
            allow_webinar_attendees_dial?: boolean;
            /**
             * Whether the user has the [**Toll-free and Fee-based Toll Call**](https://support.zoom.us/hc/en-us/articles/360060950711-Enabling-Toll-free-and-Fee-based-Toll-Call#h_01F5190TYM8736XHQX683YQYSY) setting enabled.
             */
            enable?: boolean;
            /**
             * The user's **Toll-free and Fee-based Toll Call** phone number information.
             */
            numbers?: Array<{
              /**
               * The phone number's [E.164 country calling code](https://en.wikipedia.org/wiki/List_of_country_calling_codes).
               */
              code?: string;
              /**
               * The phone number's [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
               */
              country_code?: string;
              /**
               * The country name.
               */
              country_name?: string;
              /**
               * The phone number's display number.
               */
              display_number?: string;
              /**
               * The phone number.
               */
              number?: string;
            }>;
          };
        };
        email_notification?: {
          /**
           * When an alternative host is set or removed from a meeting.
           */
          alternative_host_reminder?: boolean;
          /**
           * When a meeting is cancelled.
           */
          cancel_meeting_reminder?: boolean;
          /**
           * Whether to notify the host when a cloud recording is available.
           */
          cloud_recording_available_reminder?: boolean;
          /**
           * When attendees join meeting before host.
           */
          jbh_reminder?: boolean;
          /**
           * Whether to notify any alternative hosts when a cloud recording is available.
           */
          recording_available_reminder_alternative_hosts?: boolean;
          /**
           * Whether to notify the person who scheduled the meeting or webinar for the host when a cloud recording is available.
           */
          recording_available_reminder_schedulers?: boolean;
          /**
           * Notify the host there is a meeting is scheduled, rescheduled, or cancelled.
           */
          schedule_for_reminder?: boolean;
        };
        feature?: {
          /**
           * Host meeting in China.
           * @deprecated
           */
          cn_meeting?: boolean;
          /**
           * The user's assigned [Concurrent Meeting](https://support.zoom.us/hc/en-us/articles/206122046) type:
           * * `Basic`
           * * `Plus`
           * * `None`
           *
           * **Note:** This feature requires a Concurrent Meeting Basic or Plus plan subscription.
           */
          concurrent_meeting?: 'Basic' | 'Plus' | 'None';
          /**
           * Host meeting in India.
           * @deprecated
           */
          in_meeting?: boolean;
          /**
           * Large meeting feature.
           */
          large_meeting?: boolean;
          /**
           * Large meeting capacity: can be 500 or 1000, depending on if the user has a large meeting capacity plan subscription or not.
           */
          large_meeting_capacity?: number;
          /**
           * User's meeting capacity.
           */
          meeting_capacity?: number;
          /**
           * Webinar feature.
           */
          webinar?: boolean;
          /**
           * Webinar capacity: can be 100, 500, 1000, 3000, 5000 or 10000, depending on if the user has a webinar capacity plan subscription or not.
           */
          webinar_capacity?: number;
          /**
           * Whether the Zoom Events feature is enabled for the user.
           */
          zoom_events?: boolean;
          /**
           * The user's Zoom Events plan capacity: `500`, `1000`, `3000`, `5000`, `10000`, `20000`, `30000`, or `50000`.
           */
          zoom_events_capacity?: 500 | 1000 | 3000 | 5000 | 10000 | 20000 | 30000 | 50000;
          /**
           * Zoom phone feature.
           */
          zoom_phone?: boolean;
          /**
           * Whether the user has a Zoom IQ license. For information about a Zoom IQ license, contact [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003).
           */
          zoom_iq_for_sales?: boolean;
          /**
           * Whether the user has a Zoom Whiteboard license.
           */
          zoom_whiteboard?: boolean;
          /**
           * Whether the user has a Zoom Whiteboard Plus license.
           */
          zoom_whiteboard_plus?: boolean;
          /**
           * Whether the user has a Zoom Translated Captions license.
           */
          zoom_translated_captions?: boolean;
          /**
           * Whether the user has a Zoom Customer Managed Key license.
           */
          zoom_customer_managed_key?: boolean;
        };
        in_meeting?: {
          /**
           * Allow the host to enable [**Focus Mode**](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) when scheduling a meeting. This value defaults to `null`.
           */
          allow_host_to_enable_focus_mode?: boolean;
          /**
           * If the value of this field is set to `true`,  allow users to delete messages in the in-meeting chat.
           *
           */
          allow_users_to_delete_messages_in_meeting_chat?: boolean;
          /**
           * Whether to allow live streaming.
           */
          allow_live_streaming?: boolean;
          /**
           * Whether to display a thumbs up or thumbs down feedback survey at the end of each meeting.
           */
          post_meeting_feedback?: boolean;
          /**
           * Whether to enable the [**Zoom Whiteboard**](https://support.zoom.us/hc/en-us/articles/4410916881421) feature.
           */
          whiteboard?: boolean;
          /**
           * Specify who participants can chat with:
           * * `1` — The participant cannot use chat.
           * * `2` — The participant can chat with the host and co-hosts only.
           * * `3` — The participant can chat with other participants publicly.
           * * `4` - The participant can chat with other participants publicly and privately.
           *
           * **Note:** This setting is only available with client versions 5.7.3 and above.
           */
          allow_participants_chat_with?: 1 | 2 | 3 | 4;
          /**
           * Specify how participants can save meeting chats:
           * * `1` — Participants cannot save meeting chats.
           * * `2` — Participants can only save host and co-host meeting chats.
           * * `3` — Participants can save all meeting chats.
           */
          allow_users_save_chats?: 1 | 2 | 3;
          /**
           * Allow participants to use annotation tools.
           */
          annotation?: boolean;
          /**
           * Allow host to put attendee on hold.
           *
           * **This field has been deprecated and is no longer supported.**
           * @deprecated
           */
          attendee_on_hold?: boolean;
          /**
           * Whether the [**Focus Mode**](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) feature is enabled. When enabled, this feature only displays the host and co-hosts' video and profile pictures during a meeting.
           *
           * This value defaults to `false`.
           */
          attention_mode_focus_mode?: boolean;
          /**
           * Auto save all in-meeting chats.
           */
          auto_saving_chat?: boolean;
          /**
           * Allow host to split meeting participants into separate breakout rooms.
           */
          breakout_room?: boolean;
          /**
           * Whether the host can assign participants to breakout rooms when scheduling. This feature is only available in version 4.5.0 or higher.
           */
          breakout_room_schedule?: boolean;
          /**
           * Enable chat during meeting for all participants.
           */
          chat?: boolean;
          /**
           * Enable closed captions.
           */
          closed_caption?: boolean;
          /**
           * Information about the user's closed captioning settings.
           */
          closed_captioning?: {
            /**
             * Whether to allow a live transcription service to transcribe meetings.
             */
            auto_transcribing?: boolean;
            /**
             * Whether to allow the host to type closed captions or assign a participant or 3rd-party service to provide closed captioning.
             */
            enable?: boolean;
            /**
             * Whether to allow participants to save closed captions or transcripts.
             */
            save_caption?: boolean;
            /**
             * Whether to allow the use of an API token to integrate with 3rd-party closed captioning services.
             */
            third_party_captioning_service?: boolean;
            /**
             * Whether to allow the viewing of full transcripts in the in-meeting side panel.
             */
            view_full_transcript?: boolean;
          };
          /**
           * Allow the host to add co-hosts.
           */
          co_host?: boolean;
          /**
           * If set to `true`, you can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to use for hosting your real-time meeting and webinar traffic. These regions can be provided in the `data_center_regions` field. If set to `false`, the regions cannot be customized and the default regions will be used.
           */
          custom_data_center_regions?: boolean;
          /**
           * Whether to allow custom live streaming.
           */
          custom_live_streaming_service?: boolean;
          /**
           * The custom live streaming service instructions.
           */
          custom_service_instructions?: string;
          /**
           * If the value of `custom_data_center_regions` is `true`, a comma-separated list of the following [data center regions](https://support.zoom.us/hc/en-us/articles/360059254691-Datacenter-abbreviation-list) to opt in to:
           * * `AU` — Australia.
           * * `LA` — Latin America.
           * * `CA` — Canada.
           * * `CN` — China.
           * * `DE` — Germany.
           * * `HK` — Hong Kong SAR.
           * * `IN` — India.
           * * `IE` — Ireland.
           * * `TY` — Japan.
           * * `MX` — Mexico.
           * * `NL` — Netherlands.
           * * `SG` — Singapore.
           * * `US` — United States.
           */
          data_center_regions?: Array<'AU' | 'LA' | 'CA' | 'CN' | 'DE' | 'HK' | 'IN' | 'IE' | 'TY' | 'MX' | 'NL' | 'SG' | 'US'>;
          /**
           * Enable the **Disable desktop screen sharing for meetings you host** setting.
           */
          disable_screen_sharing_for_host_meetings?: boolean;
          /**
           * Enable the **Disable screen sharing when guests are in the meeting** setting.
           */
          disable_screen_sharing_for_in_meeting_guests?: boolean;
          /**
           * Zoom requires encryption for all data between the Zoom cloud, Zoom client, and Zoom Room. Require encryption for 3rd party endpoints (H323/SIP).
           */
          e2e_encryption?: boolean;
          /**
           * Play sound when participants join or leave:<br>`host` - When host joins or leaves.<br>`all` - When any participant joins or leaves.<br>`none` - No join or leave sound.
           */
          entry_exit_chime?: 'host' | 'all' | 'none';
          /**
           * Allow another user to take control of the camera.
           */
          far_end_camera_control?: boolean;
          /**
           * Enable option to send feedback to Zoom at the end of the meeting.
           */
          feedback?: boolean;
          /**
           * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled for the user or not.
           */
          file_transfer?: boolean;
          /**
           * Enable group HD video.
           */
          group_hd?: boolean;
          /**
           * Allow participants to join a meeting directly from their desktop browser. Note that the meeting experience from the desktop browser is limited.
           */
          join_from_desktop?: boolean;
          /**
           * Allow participants to join a meeting directly from their mobile browser. Note that the meeting experience from the mobile browser is limited.
           */
          join_from_mobile?: boolean;
          /**
           * Information about the [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Using-Language-Interpretation-in-your-meeting-or-webinar) settings.
           */
          language_interpretation?: {
            /**
             * A list of user-defined supported languages.
             */
            custom_languages?: Array<string>;
            /**
             * Whether enable language interpretation by default.
             */
            enable_language_interpretation_by_default?: boolean;
            /**
             * Whether to allow participants to speak in listening channel.
             */
            allow_participants_to_speak_in_listening_channel?: boolean;
            /**
             * Whether to allow up to 25 custom languages when scheduling meetings.
             */
            allow_up_to_25_custom_languages_when_scheduling_meetings?: boolean;
            /**
             * Allow hosts to assign participants as interpreters who can interpret one language into another in real-time.
             */
            enable?: boolean;
            /**
             * A list of system-supported languages.
             */
            languages?: Array<'English' | 'Chinese' | 'Japanese' | 'German' | 'French' | 'Russian' | 'Portuguese' | 'Spanish' | 'Korean'>;
          };
          /**
           * Whether to allow Facebook live streaming.
           */
          live_streaming_facebook?: boolean;
          /**
           * Whether to allow YouTube live streaming.
           */
          live_streaming_youtube?: boolean;
          /**
           * Information about manual captioning settings.
           */
          manual_captioning?: {
            /**
             * Allow the host to manually caption or let the host assign a participant to provide manual captioning.
             */
            allow_to_type?: boolean;
            /**
             * Enable Zoom's [live transcription feature](https://support.zoom.us/hc/en-us/articles/207279736-Managing-closed-captioning-and-live-transcription#h_01FHGGHYJ4457H4GSZY0KM3NSB).
             */
            auto_generated_captions?: boolean;
            /**
             * Enable the viewing of full transcripts in the in-meeting side panel.
             */
            full_transcript?: boolean;
            /**
             * [Enable manual closed captioning](https://support.zoom.us/hc/en-us/articles/207279736-Managing-closed-captioning-and-live-transcription).
             */
            manual_captions?: boolean;
            /**
             * Allow participants to [save closed captions or transcripts](https://support.zoom.us/hc/en-us/articles/360060958752).
             *
             * **Note:** If the `full_transcript` field is set to `false`, participants **cannot** save captions.
             */
            save_captions?: boolean;
            /**
             * Allow the use of an API token to integrate with a [3rd-party device](https://support.zoom.us/hc/en-us/articles/115002212983) to provide closed captioning.
             */
            third_party_captioning_service?: boolean;
          };
          /**
           * Allow meeting participants to [communicate using the emoji reactions](https://support.zoom.us/hc/en-us/articles/115001286183-Nonverbal-feedback-and-meeting-reactions) located in the **Reactions** menu in the meeting toolbar.
           */
          meeting_reactions?: boolean;
          /**
           * Choose from the following meeting reaction options:
           * * `all` — All emojis: Allow meeting participants to use any emoji available in Zoom chat as a reaction in a meeting.
           * * `selected` — Selected emojis: Allow meeting participants to use the 6 standard meeting reaction emojis: Clapping Hands, Thumbs Up, Heart, Tears of Joy, Open Mouth, Party Popper (Tada, Celebration)
           */
          meeting_reactions_emojis?: 'all' | 'selected';
          /**
           * Whether to allow host and panelist to use audible clap.
           */
          allow_host_panelists_to_use_audible_clap?: boolean;
          /**
           * Set this field to true to use [webinar reactions](https://support.zoom.us/hc/en-us/articles/4803536268429).
           */
          webinar_reactions?: boolean;
          /**
           * Allow the host to present a survey to participants once a meeting has ended. This feature is only available in version 5.7.3 or higher.
           */
          meeting_survey?: boolean;
          /**
           * Enable non-verbal feedback through screens.
           */
          non_verbal_feedback?: boolean;
          /**
           * Add polls to the meeting controls.
           */
          polling?: boolean;
          /**
           * Enable 1:1 private chat between participants during meetings.
           */
          private_chat?: boolean;
          /**
           * Record and play their own voice.
           */
          record_play_voice?: boolean;
          /**
           * Enable remote control during screensharing.
           */
          remote_control?: boolean;
          /**
           * Allow host to provide 1:1 remote support to a participant.
           */
          remote_support?: boolean;
          /**
           * Indicates whether the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting#h_01EGK4XFWS1SJGZ71MYGKF7260) option has been enabled for the user or not.
           */
          request_permission_to_unmute?: boolean;
          /**
           * Allow host and participants to share their screen or content during meetings
           *
           */
          screen_sharing?: boolean;
          /**
           * Share dual camera.
           * @deprecated
           */
          share_dual_camera?: boolean;
          /**
           * Allow participants to join a meeting directly from their browser and bypass the Zoom application download process. This is useful for participants who cannot download, install, or run applications. Note that the meeting experience from the browser is limited.
           */
          show_a_join_from_your_browser_link?: boolean;
          /**
           * Always show meeting controls during a meeting.
           */
          show_meeting_control_toolbar?: boolean;
          /**
           * Allow the person sharing during a presentation to allow others to control the slide presentation. This feature is only available in version 5.8.3 or higher.
           */
          slide_control?: boolean;
          /**
           * If the value of `custom_data_center_regions` is `true`, a comma-separated list of the following [data center regions](https://support.zoom.us/hc/en-us/articles/360059254691-Datacenter-abbreviation-list) to **not** opt in to:
           * * `EU` — Europe.
           * * `HK` — Hong Kong.
           * * `AU` — Australia.
           * * `IN` — India.
           * * `LA` — Latin America.
           * * `TY` — Tokyo.
           * * `CN` — China.
           * * `US` — United States.
           * * `CA` — Canada.
           */
          unchecked_data_center_regions?: Array<'EU' | 'HK' | 'AU' | 'IN' | 'TY' | 'CN' | 'US' | 'CA' | 'DE' | 'NL' | 'LA'>;
          /**
           * Enable virtual background.
           */
          virtual_background?: boolean;
          /**
           * Settings to manage virtual background.
           */
          virtual_background_settings?: {
            /**
             * Allow user to upload custom backgrounds.
             */
            allow_upload_custom?: boolean;
            /**
             * Allow use of videos for virtual backgrounds.
             */
            allow_videos?: boolean;
            /**
             * Enable virtual background.
             */
            enable?: boolean;
            files?: Array<{
              /**
               * Unique identifier of the file.
               */
              id?: string;
              /**
               * Indicates whether or not this file is the default virtual background file.
               */
              is_default?: boolean;
              /**
               * File name.
               */
              name?: string;
              /**
               * File size.
               */
              size?: number;
              /**
               * File type.
               */
              type?: string;
            }>;
          };
          /**
           * Enable Waiting room - if enabled, attendees can only join after host approves.
           */
          waiting_room?: boolean;
          webinar_chat?: {
            /**
             * Allow webinar attendees to chat with:
             * * `1` — No one.
             * * `2` — Host and all panelists.
             * * `3` — Everyone.
             */
            allow_attendees_chat_with?: 1 | 2 | 3;
            /**
             * Automatically save chat messages to a local file on the host's computer when the webinar ends.
             */
            allow_auto_save_local_chat_file?: boolean;
            /**
             * Who webinar panelists can chat with:
             * * `1` — Host and all panelists.
             * * `2` — Everyone.
             */
            allow_panelists_chat_with?: 1 | 2;
            /**
             * Allow webinar panelists to send direct messages to other panelists.
             */
            allow_panelists_send_direct_message?: boolean;
            /**
             * How webinar attendees can save chats:
             * * `0` — Attendees cannot save chats.
             * * `1` — Attendees can only save host and panelist chats.
             * * `2` — Attendees can save all chats.
             */
            allow_users_save_chats?: 0 | 1 | 2;
            /**
             * By default, allow webinar attendees to chat with:
             * * `1` — Host and all panelists.
             * * `2` — Everyone.
             */
            default_attendees_chat_with?: 1 | 2;
            /**
             * Allow webinar participants to send chat messages.
             */
            enable?: boolean;
          };
          webinar_live_streaming?: {
            /**
             * The specific instructions to allow your account's meeting hosts to configure a custom live stream.
             */
            custom_service_instructions?: string;
            /**
             * Whether webinar live streaming is enabled.
             */
            enable?: boolean;
            /**
             * Whether to notify users to watch the live stream. This does not apply to custom RTMP (real-time messaging protocol).
             */
            live_streaming_reminder?: boolean;
            /**
             * The available live streaming services:
             * * `facebook`
             * * `workplace_by_facebook`
             * * `youtube`
             * * `custom_live_streaming_service`
             */
            live_streaming_service?: Array<'facebook' | 'workplace_by_facebook' | 'youtube' | 'custom_live_streaming_service'>;
          };
          /**
           * Information about the account's meeting polling settings.
           */
          meeting_polling?: {
            /**
             * Whether to allow the host to create advanced polls and quizzes. Advanced polls and quizzes include single choice, multiple choice, drop down, matching, short answer, long answer, rank order, and fill-in-the-blank questions. The host can also set the correct answers for quizzes they create.
             */
            advanced_polls?: boolean;
            /**
             * Whether to allow alternative hosts to add or edit polls and quizzes.
             */
            allow_alternative_host_to_add_edit?: boolean;
            /**
             * Whether to require answers to be anonymous.
             */
            require_answers_to_be_anonymous?: boolean;
            /**
             * Whether to allow host to upload an image for each question.
             */
            allow_host_to_upload_image?: boolean;
            /**
             * Whether to allow the host to add polls before or during a meeting.
             */
            enable?: boolean;
          };
          /**
           * Information about the user's webinar polling settings.
           */
          webinar_polling?: {
            /**
             * Allow the host to create advanced polls and quizzes. Advanced polls and quizzes include single choice, multiple choice, drop down, matching, short answer, long answer, rank order, and fill-in-the-blank questions. Hosts can also set the correct answers for quizzes they create.
             */
            advanced_polls?: boolean;
            /**
             * Whether to allow alternative hosts to add or edit polls and quizzes.
             */
            allow_alternative_host_to_add_edit?: boolean;
            /**
             * Whether to require answers to be anonymous.
             */
            require_answers_to_be_anonymous?: boolean;
            /**
             * Whether to allow host to upload an image for each question.
             */
            allow_host_to_upload_image?: boolean;
            /**
             * Allow the host to add polls before or during a webinar.
             */
            enable?: boolean;
          };
          /**
           * Allow the host to present surveys to attendees once a webinar has ended.
           */
          webinar_survey?: boolean;
          /**
           * Indicates who can share their screen or content during meetings. The value can be one of the following: <br>
           * `host`: Only host can share the screen.<br>
           * `all`: Both hosts and attendees can share their screen during meetings. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
           *
           */
          who_can_share_screen?: 'host' | 'all';
          /**
           * Indicates who is allowed to start sharing screen when someone else in the meeting is sharing their screen. The value can be one of the following:<br>
           * `host`: Only a host can share the screen when someone else is sharing.<br>
           * `all`: Anyone in the meeting is allowed to start sharing their screen when someone else is sharing. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
           *
           */
          who_can_share_screen_when_someone_is_sharing?: 'host' | 'all';
          /**
           * Indicates how many participants can share at the same time. The value can be one of the following:<br>
           * `one`: Only one participant can share at a time
           * .<br>
           * `multiple`: Multiple participants can share simultaneously (dual monitors recommended).
           */
          participants_share_simultaneously?: 'multiple' | 'one';
          /**
           * Whether to allow Workplace by Facebook live streaming.
           */
          workplace_by_facebook?: boolean;
        };
        profile?: {
          recording_storage_location?: {
            /**
             * Users can choose the country to store their recorded content. Content can include meeting, webinar, and phone recordings, as well as voicemail, transcripts, and custom greeting prompts. See [Managing the Communications Content storage location](https://support.zoom.us/hc/en-us/articles/360050781131) for details.
             *
             * Provide abbreviated country codes as the value for this field. See the [Countries abbreviation list](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) for details.
             */
            allowed_values?: Array<string>;
            /**
             * Abbreviated country code.
             */
            value?: string;
          };
        };
        recording?: {
          /**
           * Ask host to confirm the disclaimer.
           */
          ask_host_to_confirm_disclaimer?: boolean;
          /**
           * This field can be used if `recording_disclaimer` is set to true. This field indicates whether or not you would like to ask participants for consent when a recording starts. The value can be one of the following:<br>
           * * `true`: Ask participants for consent when a recording starts. <br>
           * * `false`: Do not ask participants for consent when a recording starts.
           */
          ask_participants_to_consent_disclaimer?: boolean;
          /**
           * Auto delete cloud recordings.
           */
          auto_delete_cmr?: boolean;
          /**
           * When the `auto_delete_cmr` value is `true`, this value is the number of days before the auto-deletion of cloud recordings:
           * * `30` — 30 days.
           * * `60` — 60 days.
           * * `90` — 90 days.
           * * `120` — 120 days.
           */
          auto_delete_cmr_days?: 30 | 60 | 90 | 120;
          /**
           * The account's [**Record active speaker, gallery view and shared screen separately**](https://support.zoom.us/hc/en-us/articles/360060316092-Changing-basic-and-advanced-cloud-recording-settings#h_01F4CYJTCTXNS2MXH00W9EFG6R) settings.
           */
          record_files_separately?: {
            /**
             * Record the active speaker only.
             */
            active_speaker?: boolean;
            /**
             * Record the gallery view only.
             */
            gallery_view?: boolean;
            /**
             * Record the shared screen only.
             */
            shared_screen?: boolean;
          };
          /**
           * Display participants' names in the recording.
           */
          display_participant_name?: boolean;
          /**
           * Record thumbnails of the presenter when they are sharing their screen.
           */
          recording_thumbnails?: boolean;
          /**
           * Optimize recordings for a 3rd party video editor. This may increase the file size and the time it takes to generate recording files.
           */
          optimize_recording_for_3rd_party_video_editor?: boolean;
          /**
           * Enable the [recording highlights](https://support.zoom.us/hc/en-us/articles/360060802432) feature.
           * @deprecated
           */
          recording_highlight?: boolean;
          /**
           * Save panelist chat to the recording. This setting saves messages sent by panelists during a webinar to either all panelists or all panelists and attendees to the recording.
           */
          save_panelist_chat?: boolean;
          /**
           * Save poll results shared during the meeting or webinar. This also includes poll results shared during the meeting or webinar.
           */
          save_poll_results?: boolean;
          /**
           * Save [closed captions](https://support.zoom.us/hc/en-us/articles/207279736) as a VTT (Video Track Text) file.
           */
          save_close_caption?: boolean;
          /**
           * Automatic recording:<br>`local` - Record on local.<br>`cloud` - Record on cloud.<br>`none` - Disabled.
           */
          auto_recording?: 'local' | 'cloud' | 'none';
          /**
           * Cloud recording.
           */
          cloud_recording?: boolean;
          /**
           * Host can pause or stop the auto recording in the cloud.
           */
          host_pause_stop_recording?: boolean;
          /**
           * Setting to allow cloud recording access only from specific IP address ranges.
           *
           */
          ip_address_access_control?: {
            /**
             * If set to `true`, the cloud recordings of this account can only be accessed by the IP addresses defined in the `ip_addresses_or_ranges` property.
             *
             *
             */
            enable?: boolean;
            /**
             * IP addresses or ranges that have access to the cloud recordings. Separate multiple IP ranges with comma. Use n.n.n.n, n.n.n.n/n or n.n.n.n - n.n.n.n syntax where n is a number.
             *
             * Example: `46.33.24.184, 48.99.100.2/25` or `200.181.108.17 - 220.181.108.157`
             *
             *
             */
            ip_addresses_or_ranges?: string;
          };
          /**
           * Local recording.
           */
          local_recording?: boolean;
          /**
           * Record one audio file for all participants.
           */
          record_audio_file?: boolean;
          /**
           * Record the gallery view.
           */
          record_gallery_view?: boolean;
          /**
           * Record the active speaker view.
           */
          record_speaker_view?: boolean;
          /**
           * Audio transcript.
           */
          recording_audio_transcript?: boolean;
          /**
           * Show a disclaimer to participants before a recording starts
           *
           */
          recording_disclaimer?: boolean;
          /**
           * By selecting this option, your recording will have meeting smart chapters, and next steps. You are directing Zoom to access, process, and use your account's recording data for the purpose of analysis and insights.
           */
          smart_recording?: {
            /**
             * By selecting this option, meeting details in the audio transcript will be highlighted. Hosts can modify highlighted sections and generate a video summary (highlighted sections may have a 3-second offset) based on these sections. The summary is for informational purposes only and may not be complete.
             */
            create_recording_highlights?: boolean;
            /**
             * By selecting this option, your recording will have chapters with overview. Hosts can edit the chapters.
             */
            create_smart_chapters?: boolean;
            /**
             * By selecting this option, there will be a summary of actions to take after the recorded meeting.
             */
            create_next_steps?: boolean;
          };
          /**
           * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
           */
          recording_password_requirement?: {
            /**
             * Passcode must contain at least one alphabetical letter (a, b, c..).
             */
            have_letter?: boolean;
            /**
             * Passcode must contain at least one number(1, 2, 3..).
             */
            have_number?: boolean;
            /**
             * Passcode must contain at least one special character(!, @, #..).
             */
            have_special_character?: boolean;
            /**
             * Minimum required length for the passcode.
             */
            length?: number;
            /**
             * Passcode must contain only numeric characters.
             */
            only_allow_numeric?: boolean;
          };
          /**
           * Save chat text from the meeting.
           */
          save_chat_text?: boolean;
          /**
           * Show timestamp on video.
           */
          show_timestamp?: boolean;
        };
        schedule_meeting?: {
          /**
           * Determine how participants can join the audio portion of the meeting:<br>`both` - Telephony and VoIP.<br>`telephony` - Audio PSTN telephony only.<br>`voip` - VoIP only.<br>`thirdParty` - Third party audio conference.
           */
          audio_type?: 'both' | 'telephony' | 'voip' | 'thirdParty';
          /**
           * Passcode for already scheduled meetings
           *
           */
          default_password_for_scheduled_meetings?: string;
          /**
           * Encrypt the meeting passcode and include it in the join meeting link to allow participants to join with just one click without having to enter the passcode.
           *
           */
          embed_password_in_join_link?: boolean;
          /**
           * Require a passcode for personal meetings if attendees can join before host.
           */
          force_pmi_jbh_password?: boolean;
          /**
           * Start meetings with host video on.
           */
          host_video?: boolean;
          /**
           * Join the meeting before host arrives.
           */
          join_before_host?: boolean;
          /**
           * Account wide meeting or webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
           */
          meeting_password_requirement?: {
            consecutive_characters_length?: 0 | 4 | 5 | 6 | 7 | 8;
            /**
             * Passcode must contain at least 1 letter (such as a,b,c...).
             *
             */
            have_letter?: boolean;
            /**
             * Passcode must contain at least 1 number (such as 1,2,3...).
             */
            have_number?: boolean;
            /**
             * Passcode must have at least 1 special character (!,@,#...).
             */
            have_special_character?: boolean;
            /**
             * Passcode must include both uppercase and lowercase characters.
             */
            have_upper_and_lower_characters?: boolean;
            /**
             * The minimum length that the meeting/webinar passcode must have.
             */
            length?: number;
            /**
             * Passcode must only contain numbers and no other characters.
             */
            only_allow_numeric?: boolean;
            /**
             * Inform users if the provided passcode is weak.
             */
            weak_enhance_detection?: boolean;
          };
          /**
           * Start meetings with participants video on.
           */
          participants_video?: boolean;
          /**
           * Personal Meeting Setting.<br><br>
           * `true`: Indicates that the **"Enable [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi)"** setting is turned on. Users can choose to use a PMI for their meetings. <br><br>
           * `false`: Indicates that the **"Enable Personal Meeting ID"** setting is [turned off](https://support.zoom.us/hc/en-us/articles/201362843-Personal-meeting-ID-PMI-and-personal-link#h_aa0335c8-3b06-41bc-bc1f-a8b84ef17f2a). If this setting is disabled, meetings that were scheduled with PMI will be invalid. Scheduled meetings will need to be manually updated.
           * For Zoom Phone only:If a user has been assigned a desk phone, **"Elevate to Zoom Meeting"** on desk phone will be disabled.
           *
           *
           *
           */
          personal_meeting?: boolean;
          /**
           * PMI passcode
           *
           */
          pmi_password?: string;
          /**
           * Generate and require passcode for participants joining by phone.
           */
          pstn_password_protected?: boolean;
          /**
           * Require a passcode for instant meetings. If you use PMI for your instant meetings, this option will be disabled. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
           *
           */
          require_password_for_instant_meetings?: boolean;
          /**
           * Require a passcode for Personal Meeting ID (PMI). This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
           *
           */
          require_password_for_pmi_meetings?: 'jbh_only' | 'all' | 'none';
          /**
           * Require a passcode for meetings which have already been scheduled
           *
           */
          require_password_for_scheduled_meetings?: boolean;
          /**
           * Require a passcode when scheduling new meetings.This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
           *
           */
          require_password_for_scheduling_new_meetings?: boolean;
          /**
           * Use a [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi) when starting an instant meeting.
           */
          use_pmi_for_instant_meetings?: boolean;
          /**
           * Use a [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi) when scheduling a meeting.
           */
          use_pmi_for_scheduled_meetings?: boolean;
        };
        telephony?: {
          /**
           * Third party audio conference info.
           */
          audio_conference_info?: string;
          /**
           * Show the international numbers link on the invitation email.
           */
          show_international_numbers_link?: boolean;
          /**
           * Indicates where most of the participants call into or call from during a meeting.
           */
          telephony_regions?: {
            /**
             * Telephony region options provided by Zoom to select from.
             */
            allowed_values?: Array<string>;
            /**
             * The account's selected telephony regions that indicate where most participants call into or call from during a meeting.
             */
            selection_values?: string;
          };
          /**
           * Third party audio conference.
           */
          third_party_audio?: boolean;
        };
        /**
         * Account Settings: TSP.
         */
        tsp?: {
          /**
           * Call Out
           */
          call_out?: boolean;
          /**
           * Call Out Countries/Regions
           */
          call_out_countries?: Array<any>;
          /**
           * Show the international numbers link on the invitation email.
           */
          show_international_numbers_link?: boolean;
        };
      }
    | {
        authentication_options?: {
          /**
           * The user's [meeting authentication settings](https://support.zoom.us/hc/en-us/articles/360037117472).
           */
          meeting_authentication?: {
            /**
             * Whether the [**Allow authentication exception**](https://support.zoom.us/hc/en-us/articles/360037117472#h_01F13A9N1FQFNVESC9C21NRHXY) setting is enabled. This lets hosts invite users who can bypass authentication.
             */
            allow_authentication_exception?: boolean;
            /**
             * The user's [**Meeting Authentication Options**](https://support.zoom.us/hc/en-us/articles/360060549492-Allowing-only-authenticated-users-in-meetings#h_01F51KGPWJNQBDMFSJ3ZJQ4AA2) settings.
             */
            authentication_options?: Array<{
              /**
               * Whether the authentication option is the default authentication option.
               */
              default_option?: boolean;
              /**
               * A comma-separated list of approved authentication domains.
               */
              domains?: string;
              /**
               * The authentication option's ID.
               */
              id?: string;
              /**
               * The authentication option's name.
               */
              name?: string;
              /**
               * The authentication type:
               * * `enforce_login` — Only users logged in to Zoom can join meetings.
               * * `enforce_login_with_domains` — Only users from specific domains can join meetings. The list of domains is defined in the `domains` field.
               * * `enforce_login_with_same_account` — Only the Zoom account's users can join meetings.
               */
              type?: 'enforce_login' | 'enforce_login_with_domains' | 'enforce_login_with_same_account';
              /**
               * Whether the authentication option is visible.
               */
              visible?: boolean;
            }>;
            /**
             * Whether only authenticated users can join meetings.
             */
            meeting_authentication?: boolean;
          };
          /**
           * The user's recording authentication settings.
           */
          recording_authentication?: {
            /**
             * The user's authentication options.
             */
            authentication_options?: Array<{
              /**
               * Whether the authentication option is the default authentication option.
               */
              default_option?: boolean;
              /**
               * A comma-separated list of approved authentication domains.
               */
              domains?: string;
              /**
               * The authentication option's ID.
               */
              id?: string;
              /**
               * The authentication option's name.
               */
              name?: string;
              /**
               * The authentication type:
               * * `enforce_login` — Only users logged in to Zoom can view the recordings.
               * * `enforce_login_with_domains` — Only users from specific domains can view the recordings. The list of domains is defined in the `domains` field.
               * * `internally` — Only the Zoom account's users can view the recordings.
               */
              type?: 'enforce_login' | 'enforce_login_with_domains' | 'internally';
              /**
               * Whether the authentication option is visible.
               */
              visible?: boolean;
            }>;
            /**
             * Whether only authenticated users can view cloud recordings.
             */
            recording_authentication?: boolean;
          };
        };
      }
    | (
        | {
            /**
             * Whether the [**Allow authentication exception**](https://support.zoom.us/hc/en-us/articles/360037117472#h_01F13A9N1FQFNVESC9C21NRHXY) setting is enabled. This lets hosts invite users who can bypass authentication.
             */
            allow_authentication_exception?: boolean;
            /**
             * Meeting Authentication Options
             */
            authentication_options?: Array<{
              /**
               * Authentication default option
               */
              default_option?: boolean;
              /**
               * Authentication domains
               */
              domains?: string;
              /**
               * Authentication id
               */
              id?: string;
              /**
               * Authentication name
               */
              name?: string;
              /**
               *  Authentication type. Specify one of the following authentication types for the authentication profile:<br>
               * * `enforce_login`: This option allows any users to join the meeting or webinar, as long as they are signed into their Zoom account.
               * * `enforce_login_with_domains`: This option, allows you to specify a rule so that only those Zoom users whose email addresses contain a certain domain, can join the meeting or webinar. You can either add multiple domains using a comma in between and/or use a wildcard for listing domains.<br>
               * * `enforce_login_with_same_account`: This option allows users to join the meeting or webinar with the same Zoom account.
               */
              type?: 'enforce_login' | 'enforce_login_with_same_account' | 'enforce_login_with_domains';
              /**
               * Authentication visible
               */
              visible?: boolean;
            }>;
            /**
             * Only authenticated users can join meetings
             */
            meeting_authentication?: boolean;
          }
        | {
            /**
             * Authentication Options
             */
            authentication_options?: Array<{
              /**
               * Authentication default option
               */
              default_option?: boolean;
              /**
               * Authentication domains
               */
              domains?: string;
              /**
               * Authentication id
               */
              id?: string;
              /**
               * Authentication name
               */
              name?: string;
              /**
               * Authentication type
               */
              type?: 'internally' | 'enforce_login' | 'enforce_login_with_domains';
              /**
               * Authentication visible
               */
              visible?: boolean;
            }>;
            /**
             * Only authenticated users can view cloud recordings
             */
            recording_authentication?: boolean;
          }
      )
    | {
        meeting_security?: {
          /**
           * Whether all meetings must be secured with at least one security option.
           *
           * This setting can only be disabled by Enterprise, ISV, Business (with more than 100 licenses), and Education accounts.
           */
          auto_security?: boolean;
          /**
           * Whether users in specific domains are blocked from joining meetings and webinars.
           */
          block_user_domain?: boolean;
          /**
           * The blocked domains.
           */
          block_user_domain_list?: Array<string>;
          /**
           * Whether the meeting password is encrypted and included in the invitation link. The provided link will allow participants to join the meeting without having to enter the password.
           */
          embed_password_in_join_link?: boolean;
          /**
           * The type of encryption used when starting a meeting:
           * * `enhanced_encryption` — Enhanced encryption. Encryption data is stored in the cloud.
           * * `e2ee` — End-to-end encryption. The encryption key is stored on the local device and cannot be obtained by anyone else. Enabling E2EE also [**disables** certain features](https://support.zoom.us/hc/en-us/articles/360048660871), such as cloud recording, live streaming, and allowing participants to join before the host.
           */
          encryption_type?: 'enhanced_encryption' | 'e2ee';
          /**
           * Whether end-to-end encryption is enabled for meetings.
           */
          end_to_end_encrypted_meetings?: boolean;
          /**
           * Whether all instant and scheduled meetings that users can join via client or Zoom Rooms systems are password-protected. [Personal Meeting ID (PMI)](https://support.zoom.us/hc/en-us/articles/203276937) meetings are **not** included in this setting.
           */
          meeting_password?: boolean;
          /**
           * Information about the meeting and webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
           */
          meeting_password_requirement?: {
            /**
             * The maximum length of consecutive characters (for example, `abcdef`) allowed in a password:
             * * `4` through `8` — The maximum consecutive characters length. The length is `n` minus `1`, where `n` is the value. For example, if the value is `4`, there can only be a maximum of `3` consecutive characters in a password (for example, `abc1x@8fdh`).
             * * `0` — No consecutive character restriction.
             */
            consecutive_characters_length?: 0 | 4 | 5 | 6 | 7 | 8;
            /**
             * Whether passwords must contain at least one letter character.
             */
            have_letter?: boolean;
            /**
             * Whether passwords must contain at least one numeric character.
             */
            have_number?: boolean;
            /**
             * Whether passwords must contain at least one special character. For example, `!`, `@`, and/or `#` characters.
             */
            have_special_character?: boolean;
            /**
             * Whether passwords must include uppercase and lowercase characters.
             */
            have_upper_and_lower_characters?: boolean;
            /**
             * The minimum password length.
             */
            length?: number;
            /**
             * Whether passwords must contain **only** numeric characters.
             */
            only_allow_numeric?: boolean;
            /**
             * Whether users are informed when the provided password is weak.
             */
            weak_enhance_detection?: boolean;
          };
          /**
           * Whether to specify that only authenticated users can join the meeting from the web client.
           */
          only_authenticated_can_join_from_webclient?: boolean;
          /**
           * Whether passwords are required for participants joining by phone.
           *
           * If enabled and the meeting is password-protected, a numeric password is required for participants to join by phone. For meetings with alphanumeric passwords, a numeric password will be generated.
           */
          phone_password?: boolean;
          /**
           * Whether all Personal Meeting ID (PMI) meetings that users can join via client or Zoom Rooms systems are password-protected.
           */
          pmi_password?: boolean;
          /**
           * Whether passwords are required for meetings that have already been scheduled.
           */
          require_password_for_scheduled_meeting?: boolean;
          /**
           * Whether passwords are required for webinars that have already been scheduled.
           */
          require_password_for_scheduled_webinar?: boolean;
          /**
           * Whether participants are placed in the [**Waiting Room**](https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room) when they join a meeting.
           *
           * If the **Waiting Room** feature is enabled, the [**Allow participants to join before host**](https://support.zoom.us/hc/en-us/articles/202828525-Allow-participants-to-join-before-host) setting is automatically disabled.
           */
          waiting_room?: boolean;
          /**
           * Information about the Waiting Room settings.
           */
          waiting_room_settings?: {
            /**
             * The type of participants to be admitted to the Waiting Room:
             * * `0` — All attendees.
             * * `1` — Users who are not in your account.
             * * `2` — Users who are not in your account and are not part of your [allowed domains list](https://support.zoom.us/hc/en-us/articles/360037117472-Configuring-authentication-profiles#h_e3cf0d5f-eec7-4c2a-ad29-ef2a5079a7da).
             */
            participants_to_place_in_waiting_room?: 0 | 1 | 2;
            /**
             * The users who can admit participants from the Waiting Room:
             * * `0` — Host and co-hosts only.
             * * `1` — Host, co-hosts, and anyone who bypassed the Waiting Room if the host and co-hosts are not present.
             */
            users_who_can_admit_participants_from_waiting_room?: 0 | 1;
            /**
             * If the `participants_to_place_in_waiting_room` field is `2`, a comma-separated list of the domains that can bypass the Waiting Room (`"example.com,example2.com"`).
             */
            whitelisted_domains_for_waiting_room?: string;
          };
          /**
           * Whether to generate a password when scheduling webinars. Participants must use the generated password to join the scheduled webinar.
           */
          webinar_password?: boolean;
        };
      }
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}/settings',
      path: {
        userId: userId,
      },
      query: {
        login_type: loginType,
        option: option,
        custom_query_fields: customQueryFields,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>

             **Error Code:** \`1120\`<br>
            A valid invitation to join the Zoom account was not found for this user. <br>
            This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
             **Error Code:** \`1001\`<br>
            User does not exist: $userId.`,
      },
    });
  }

  /**
   * Update user settings
   * Update a user's settings. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * **Scopes:** `user:write:admin`, `user:write`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public userSettingsUpdate({
    userId,
    requestBody,
    option,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * User Settings
     */
    requestBody:
      | {
          email_notification?: {
            /**
             * When an alternative host is set or removed from a meeting.
             */
            alternative_host_reminder?: boolean;
            /**
             * When a meeting is cancelled.
             */
            cancel_meeting_reminder?: boolean;
            /**
             * Whether to notify the host when a cloud recording is available.
             */
            cloud_recording_available_reminder?: boolean;
            /**
             * When attendees join meeting before host.
             */
            jbh_reminder?: boolean;
            /**
             * Whether to notify any alternative hosts when a cloud recording is available.
             */
            recording_available_reminder_alternative_hosts?: boolean;
            /**
             * Whether to notify the person who scheduled the meeting or webinar for the host when a cloud recording is available.
             */
            recording_available_reminder_schedulers?: boolean;
            /**
             * Notify the host there is a meeting is scheduled, rescheduled, or cancelled.
             */
            schedule_for_reminder?: boolean;
          };
          feature?: {
            /**
             * The user's assigned [Concurrent Meeting](https://support.zoom.us/hc/en-us/articles/206122046) type:
             * * `Basic`
             * * `Plus`
             * * `None`
             *
             * **Note:** This feature requires a Concurrent Meeting Basic or Plus plan subscription.
             */
            concurrent_meeting?: 'Basic' | 'Plus' | 'None';
            /**
             * Enable [large meeting](https://support.zoom.us/hc/en-us/articles/201362823-What-is-a-Large-Meeting-) feature for the user.
             */
            large_meeting?: boolean;
            /**
             * Set the meeting capacity for the user if the user has **Large meeting** feature enabled. The value for the field can be either 500 or 1000.
             */
            large_meeting_capacity?: number;
            /**
             * Set a user's meeting capacity. User's meeting capacity denotes the maximum number of participants that can join a meeting scheduled by the user.
             */
            meeting_capacity?: number;
            /**
             * Enable Webinar feature for the user.
             */
            webinar?: boolean;
            /**
             * The user's webinar capacity. This only applies to users with the [**Webinar**](https://support.zoom.us/hc/en-us/articles/200917029-Getting-started-with-webinar) feature enabled:
             * * `100`
             * * `500`
             * * `501`
             * * `1000`
             * * `1001`
             * * `3000`
             * * `5000`
             * * `10000`
             */
            webinar_capacity?: 100 | 500 | 501 | 1000 | 1001 | 3000 | 5000 | 10000;
            /**
             * Whether to enable the Zoom Events feature for the user.
             */
            zoom_events?: boolean;
            /**
             * The user's Zoom Events plan capacity: `500`, `1000`, `3000`, `5000`, `10000`, `20000`, `30000`, or `50000`.
             */
            zoom_events_capacity?: 500 | 1000 | 3000 | 5000 | 10000 | 20000 | 30000 | 50000;
            /**
             * Zoom phone feature.
             */
            zoom_phone?: boolean;
            /**
             * Whether the user has a Zoom IQ license. For information about a Zoom IQ license, contact [Zoom Support](https://support.zoom.us/hc/en-us/articles/201362003).
             */
            zoom_iq_for_sales?: boolean;
            /**
             * Whether the user has a Zoom Whiteboard license.
             */
            zoom_whiteboard?: boolean;
            /**
             * Whether the user has a Zoom Whiteboard Plus license.
             */
            zoom_whiteboard_plus?: boolean;
            /**
             * Whether the user has a Zoom Translated Captions license.
             */
            zoom_translated_captions?: boolean;
            /**
             * Whether the user has a Zoom Customer Managed Key license.
             */
            zoom_customer_managed_key?: boolean;
          };
          in_meeting?: {
            /**
             * Whether the host can enable [**Focus Mode**](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) when scheduling a meeting. This value defaults to `null`.
             */
            allow_host_to_enable_focus_mode?: boolean;
            /**
             * If the value of this field is set to `true`,  allow users to delete messages in the in-meeting chat.
             *
             */
            allow_users_to_delete_messages_in_meeting_chat?: boolean;
            /**
             * Allow livestreaming.
             */
            allow_live_streaming?: boolean;
            /**
             * Whether to display a thumbs up or thumbs down feedback survey at the end of each meeting.
             */
            post_meeting_feedback?: boolean;
            /**
             * Whether to enable the [**Zoom Whiteboard**](https://support.zoom.us/hc/en-us/articles/4410916881421) feature.
             */
            whiteboard?: boolean;
            /**
             * Who participants can chat with:
             * * `1` — The participant cannot use chat.
             * * `2` — The participant can chat with the host and co-hosts only.
             * * `3` — The participant can chat with other participants publicly.
             * * `4` - The participant can chat with other participants publicly and privately.
             *
             * **Note:** This setting is only available with client versions 5.7.3 and above.
             */
            allow_participants_chat_with?: 1 | 2 | 3 | 4;
            /**
             * How participants can save meeting chats:
             * * `1` — Participants cannot save meeting chats.
             * * `2` — Participants can only save host and co-host meeting chats.
             * * `3` — Participants can save all meeting chats.
             */
            allow_users_save_chats?: 1 | 2 | 3;
            /**
             * Allow meeting participants to use the [annotation tools](https://support.zoom.us/hc/en-us/articles/115005706806). This value defaults to `false`.
             */
            annotation?: boolean;
            /**
             * Allow the host to put an attendee on hold. This value defaults to `false`. **This field has been deprecated and is no longer supported.**
             */
            attendee_on_hold?: boolean;
            /**
             * Whether the [**Focus Mode**](https://support.zoom.us/hc/en-us/articles/360061113751-Using-focus-mode) feature is enabled. When enabled, this feature only displays the host and co-hosts' video and profile pictures during a meeting.
             *
             * This value defaults to `false`.
             */
            attention_mode_focus_mode?: boolean;
            /**
             * Automatically save all in-meeting chats. This value defaults to `false`.
             */
            auto_saving_chat?: boolean;
            /**
             * Allow the meeting host to split meeting participants into separate breakout rooms.
             */
            breakout_room?: boolean;
            /**
             * Allow the host to assign participants to breakout rooms when scheduling. This feature is **only** available in version 4.5.0 or higher.
             */
            breakout_room_schedule?: boolean;
            /**
             * Enable chat during meeting for all participants. This value defaults to `false`.
             */
            chat?: boolean;
            /**
             * Enable closed captions. This value defaults to `false`.
             */
            closed_caption?: boolean;
            /**
             * Information about the user's closed captioning settings.
             */
            closed_captioning?: {
              /**
               * Allow a live transcription service to transcribe meetings.
               */
              auto_transcribing?: boolean;
              /**
               * Allow the host to type closed captions or assign a participant or 3rd-party service to provide closed captioning.
               */
              enable?: boolean;
              /**
               * Allow participants to save closed captions or transcripts.
               */
              save_caption?: boolean;
              /**
               * Allow the use of an API token to integrate with 3rd-party closed captioning services.
               */
              third_party_captioning_service?: boolean;
              /**
               * Allow the viewing of full transcripts in the in-meeting side panel.
               */
              view_full_transcript?: boolean;
            };
            /**
             * Allow the host to add co-hosts. This value defaults to `false`.
             */
            co_host?: boolean;
            /**
             * Use custom [data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-meetings-webinars):
             * * `true` — Users can [select data center regions](https://support.zoom.us/hc/en-us/articles/360042411451-Selecting-data-center-regions-for-hosted-meetings-and-webinars) to use for hosting real-time meeting traffic. The data center regions can be provided in the `data_center_regions` field.
             * * `false` — Only use the default data center regions.
             */
            custom_data_center_regions?: boolean;
            /**
             * Allow custom livestreaming.
             */
            custom_live_streaming_service?: boolean;
            /**
             * The custom livestreaming service instructions.
             */
            custom_service_instructions?: string;
            /**
             * If the value of `custom_data_center_regions` is `true`, a comma-separated list of the following [data center regions](https://support.zoom.us/hc/en-us/articles/360059254691-Datacenter-abbreviation-list) to opt in to:
             * * `AU` — Australia.
             * * `LA` — Latin America.
             * * `CA` — Canada.
             * * `CN` — China.
             * * `DE` — Germany.
             * * `HK` — Hong Kong SAR.
             * * `IN` — India.
             * * `IE` — Ireland.
             * * `TY` — Japan.
             * * `MX` — Mexico.
             * * `NL` — Netherlands.
             * * `SG` — Singapore.
             * * `US` — United States.
             */
            data_center_regions?: Array<'AU' | 'LA' | 'CA' | 'CN' | 'DE' | 'HK' | 'IN' | 'IE' | 'TY' | 'MX' | 'NL' | 'SG' | 'US'>;
            /**
             * Enable the **Disable desktop screen sharing for meetings you host** setting.
             */
            disable_screen_sharing_for_host_meetings?: boolean;
            /**
             * Enable the **Disable screen sharing when guests are in the meeting** setting.
             */
            disable_screen_sharing_for_in_meeting_guests?: boolean;
            /**
             * Require [AES encryption](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) for meetings.
             */
            e2e_encryption?: boolean;
            /**
             * When to play the meeting entry/exit sound notification:
             * * `host` — Only when the host joins or leaves.
             * * `all` — When any participant joins or leaves.
             * * `none` - Disable the entry/exit sound notification.
             *
             * This value defaults to `all`.
             */
            entry_exit_chime?: 'host' | 'all' | 'none';
            /**
             * Allow another user to take control of the user's camera. This value defaults to `false`.
             */
            far_end_camera_control?: boolean;
            /**
             * Enable the [**Feedback to Zoom**](https://support.zoom.us/hc/en-us/articles/115005838023-Feedback-to-Zoom) setting. This value defaults to `false`.
             */
            feedback?: boolean;
            /**
             * Indicates whether [in-meeting file transfer](https://support.zoom.us/hc/en-us/articles/209605493-In-meeting-file-transfer) setting has been enabled for the user or not.
             */
            file_transfer?: boolean;
            /**
             * Enable group HD video. This value defaults to `false`.
             */
            group_hd?: boolean;
            /**
             * Allow participants to join a meeting directly from their desktop browser. Note that the meeting experience from the desktop browser is limited.
             */
            join_from_desktop?: boolean;
            /**
             * Allow participants to join a meeting directly from their mobile browser. Note that the meeting experience from the mobile browser is limited.
             */
            join_from_mobile?: boolean;
            /**
             * Information about the [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Using-Language-Interpretation-in-your-meeting-or-webinar) settings.
             */
            language_interpretation?: {
              /**
               * A list of user-defined supported languages.
               */
              custom_languages?: Array<string>;
              /**
               * Whether enable language interpretation by default.
               */
              enable_language_interpretation_by_default?: boolean;
              /**
               * Whether to allow participants to speak in listening channel.
               */
              allow_participants_to_speak_in_listening_channel?: boolean;
              /**
               * Whether to allow up to 25 custom languages when scheduling meetings.
               */
              allow_up_to_25_custom_languages_when_scheduling_meetings?: boolean;
              /**
               * Allow hosts to assign participants as interpreters who can interpret one language into another in real-time.
               */
              enable?: boolean;
            };
            /**
             * Allow Facebook livestreaming.
             */
            live_streaming_facebook?: boolean;
            /**
             * Allow YouTube livestreaming.
             */
            live_streaming_youtube?: boolean;
            /**
             * Information about manual captioning settings.
             */
            manual_captioning?: {
              /**
               * Allow the host to manually caption or let the host assign a participant to provide manual captioning.
               */
              allow_to_type?: boolean;
              /**
               * Enable Zoom's [live transcription feature](https://support.zoom.us/hc/en-us/articles/207279736-Managing-closed-captioning-and-live-transcription#h_01FHGGHYJ4457H4GSZY0KM3NSB).
               */
              auto_generated_captions?: boolean;
              /**
               * Enable the viewing of full transcripts in the in-meeting side panel.
               */
              full_transcript?: boolean;
              /**
               * [Enable manual closed captioning](https://support.zoom.us/hc/en-us/articles/207279736-Managing-closed-captioning-and-live-transcription).
               */
              manual_captions?: boolean;
              /**
               * Allow participants to [save closed captions or transcripts](https://support.zoom.us/hc/en-us/articles/360060958752).
               *
               * **Note:** If the `full_transcript` field is set to `false`, participants **cannot** save captions.
               */
              save_captions?: boolean;
              /**
               * Allow the use of an API token to integrate with a [3rd-party device](https://support.zoom.us/hc/en-us/articles/115002212983) to provide closed captioning.
               */
              third_party_captioning_service?: boolean;
            };
            /**
             * Whether meeting participants can [communicate using the emoji reactions](https://support.zoom.us/hc/en-us/articles/115001286183-Nonverbal-feedback-and-meeting-reactions) located in the **Reactions** menu in the meeting toolbar.
             */
            meeting_reactions?: boolean;
            /**
             * Choose from the following meeting reaction options:
             * * `all` — All emojis: Allow meeting participants to use any emoji available in Zoom chat as a reaction in a meeting.
             * * `selected` — Selected emojis: Allow meeting participants to use the 6 standard meeting reaction emojis: Clapping Hands, Thumbs Up, Heart, Tears of Joy, Open Mouth, Party Popper (Tada, Celebration)
             */
            meeting_reactions_emojis?: 'all' | 'selected';
            /**
             * Whether to allow host and panelist to use audible clap.
             */
            allow_host_panelists_to_use_audible_clap?: boolean;
            /**
             * Set this field to true to use [webinar reactions](https://support.zoom.us/hc/en-us/articles/4803536268429).
             */
            webinar_reactions?: boolean;
            /**
             * Allow the host to present a survey to participants once a meeting has ended. This feature is only available in version 5.7.3 or higher.
             */
            meeting_survey?: boolean;
            /**
             * Enable the [**Non-verbal feedback**](https://support.zoom.us/hc/en-us/articles/115001286183-Nonverbal-feedback-and-meeting-reactions-) setting.  This value defaults to `false`.
             */
            non_verbal_feedback?: boolean;
            /**
             * Add polls to the meeting controls. This value defaults to `false`.
             */
            polling?: boolean;
            /**
             * [Enable private chat](https://support.zoom.us/hc/en-us/articles/360060835932-Enabling-and-disabling-private-chat) between participants during meetings. This value defaults to `false`.
             */
            private_chat?: boolean;
            /**
             * Let the user record and play their own voice.
             */
            record_play_voice?: boolean;
            /**
             * Enable the [**Remote control**](https://support.zoom.us/hc/en-us/articles/201362673-Requesting-or-giving-remote-control) setting.  This value defaults to `false`.
             */
            remote_control?: boolean;
            /**
             * Enable the [**Remote support**](https://support.zoom.us/hc/en-us/articles/360060951012-Enabling-remote-support) setting. This value defaults to `false`.
             */
            remote_support?: boolean;
            /**
             * Indicates whether the [**Request permission to unmute participants**](https://support.zoom.us/hc/en-us/articles/203435537-Muting-and-unmuting-participants-in-a-meeting#h_01EGK4XFWS1SJGZ71MYGKF7260) option has been enabled for the user or not.
             */
            request_permission_to_unmute?: boolean;
            /**
             * Allow host and participants to share their screen or content during meetings
             *
             */
            screen_sharing?: boolean;
            /**
             * Allow the use of shared dual cameras. This value defaults to `false`. **This field is deprecated.**
             * @deprecated
             */
            share_dual_camera?: boolean;
            /**
             * Allow participants to join a meeting directly from their browser and bypass the Zoom application download process. This is useful for participants who cannot download, install, or run applications. Note that the meeting experience from the browser is limited.
             */
            show_a_join_from_your_browser_link?: boolean;
            /**
             * Always display the [in-meeting controls](https://support.zoom.us/hc/en-us/articles/360021921032-Zoom-Room-meeting-controls-and-settings#h_01EQCC03TCPRC72VKXZ7W47FDX).
             */
            show_meeting_control_toolbar?: boolean;
            /**
             * Whether the person sharing during a presentation can allow others to control the slide presentation. This feature is only available in version 5.8.3 or higher.
             */
            slide_control?: boolean;
            /**
             * Enable Virtual Backgrounds. This value defaults to `false`.
             */
            virtual_background?: boolean;
            /**
             * The user's Virtual Background settings.
             */
            virtual_background_settings?: {
              /**
               * Allow the user to upload custom Virtual Backgrounds.
               */
              allow_upload_custom?: boolean;
              /**
               * Allow the use of videos for Virtual Backgrounds.
               */
              allow_videos?: boolean;
              /**
               * Enable Virtual Backgrounds.
               */
              enable?: boolean;
              /**
               * Information about the Virtual Background files.
               */
              files?: Array<{
                /**
                 * The Virtual Background file's ID.
                 */
                id?: string;
                /**
                 * Whether the file is the default Virtual Background file.
                 */
                is_default?: boolean;
                /**
                 * The Virtual Background file's name.
                 */
                name?: string;
                /**
                 * The Virtual Background file's size, in bytes.
                 */
                size?: number;
                /**
                 * The Virtual Background file's type.
                 */
                type?: string;
              }>;
            };
            /**
             * Enable the [**Waiting Room**](https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room) feature. This value defaults to `false`.
             */
            waiting_room?: boolean;
            /**
             * Information about the user's webinar chat settings.
             */
            webinar_chat?: {
              /**
               * Allow webinar attendees to chat with:
               * * `1` — No one.
               * * `2` — Host and all panelists.
               * * `3` — Everyone.
               */
              allow_attendees_chat_with?: 1 | 2 | 3;
              /**
               * Automatically save chat messages to a local file on the host's computer when the webinar ends.
               */
              allow_auto_save_local_chat_file?: boolean;
              /**
               * Who webinar panelists can chat with:
               * * `1` — Host and all panelists.
               * * `2` — Everyone.
               */
              allow_panelists_chat_with?: 1 | 2;
              /**
               * Allow webinar panelists to send direct messages to other panelists.
               */
              allow_panelists_send_direct_message?: boolean;
              /**
               * How webinar attendees can save chats:
               * * `0` — Attendees cannot save chats.
               * * `1` — Attendees can only save host and panelist chats.
               * * `2` — Attendees can save all chats.
               */
              allow_users_save_chats?: 0 | 1 | 2;
              /**
               * By default, allow webinar attendees to chat with:
               * * `1` — Host and all panelists.
               * * `2` — Everyone.
               */
              default_attendees_chat_with?: 1 | 2;
              /**
               * Allow webinar participants to send chat messages.
               */
              enable?: boolean;
            };
            webinar_live_streaming?: {
              /**
               * The specific instructions to allow your account's meeting hosts to configure a custom livestream.
               */
              custom_service_instructions?: string;
              /**
               * Whether webinar livestreaming is enabled.
               */
              enable?: boolean;
              /**
               * Notify users to watch the livestream. This does not apply to custom RTMP (real-time messaging protocol).
               */
              live_streaming_reminder?: boolean;
              /**
               * The available livestreaming services:
               * * `facebook`
               * * `workplace_by_facebook`
               * * `youtube`
               * * `custom_live_streaming_service`
               */
              live_streaming_service?: Array<'facebook' | 'workplace_by_facebook' | 'youtube' | 'custom_live_streaming_service'>;
            };
            /**
             * Information about the account's meeting polling settings.
             */
            meeting_polling?: {
              /**
               * Whether to allow the host to create advanced polls and quizzes. Advanced polls and quizzes include single choice, multiple choice, drop down, matching, short answer, long answer, rank order, and fill-in-the-blank questions. The host can also set the correct answers for quizzes they create.
               */
              advanced_polls?: boolean;
              /**
               * Whether to allow alternative hosts to add or edit polls and quizzes.
               */
              allow_alternative_host_to_add_edit?: boolean;
              /**
               * Whether to require answers to be anonymous.
               */
              require_answers_to_be_anonymous?: boolean;
              /**
               * Whether to allow host to upload an image for each question.
               */
              allow_host_to_upload_image?: boolean;
              /**
               * Whether to allow the host to add polls before or during a meeting.
               */
              enable?: boolean;
            };
            /**
             * Information about the user's webinar polling settings.
             */
            webinar_polling?: {
              /**
               * Whether to allow the host to create advanced polls and quizzes. Advanced polls and quizzes include single choice, multiple choice, drop down, matching, short answer, long answer, rank order, and fill-in-the-blank questions. The host can also set the correct answers for quizzes they create.
               */
              advanced_polls?: boolean;
              /**
               * Whether to allow alternative hosts to add or edit polls and quizzes.
               */
              allow_alternative_host_to_add_edit?: boolean;
              /**
               * Whether to require answers to be anonymous.
               */
              require_answers_to_be_anonymous?: boolean;
              /**
               * Whether to allow host to upload an image for each question.
               */
              allow_host_to_upload_image?: boolean;
              /**
               * Allow the host to add polls before or during a webinar.
               */
              enable?: boolean;
            };
            /**
             * Allow the host to present surveys to attendees once a webinar has ended.
             */
            webinar_survey?: boolean;
            /**
             * Indicates who can share their screen or content during meetings. The value can be one of the following: <br>
             * `host`: Only host can share the screen.<br>
             * `all`: Both hosts and attendees can share their screen during meetings. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
             *
             */
            who_can_share_screen?: 'host' | 'all';
            /**
             * Indicates who is allowed to start sharing screen when someone else in the meeting is sharing their screen. The value can be one of the following:<br>
             * `host`: Only a host can share the screen when someone else is sharing.<br>
             * `all`: Anyone in the meeting is allowed to start sharing their screen when someone else is sharing. For Webinar, the hosts and panelists can start screen sharing, but not the attendees.
             *
             */
            who_can_share_screen_when_someone_is_sharing?: 'host' | 'all';
            /**
             * Indicates how many participants can share at the same time. The value can be one of the following:<br>
             * `one`: Only one participant can share at a time
             * .<br>
             * `multiple`: Multiple participants can share simultaneously (dual monitors recommended).
             */
            participants_share_simultaneously?: 'multiple' | 'one';
            /**
             * Allow Workplace by Facebook livestreaming.
             */
            workplace_by_facebook?: boolean;
            /**
             * Allow the user to view and add contacts to the [**Auto-answer group in chat**](https://support.zoom.us/hc/en-us/articles/203736135-Auto-answering-invitations-to-meetings) feature. Calls from members of the **Auto Answer Group** will be automatically answered the user.
             */
            auto_answer?: boolean;
            /**
             * Enable the [**Show Zoom windows during screen share**](https://support.zoom.us/hc/en-us/articles/360061383571-Showing-Zoom-windows-during-screen-share) feature.
             */
            allow_show_zoom_windows?: boolean;
          };
          profile?: {
            recording_storage_location?: {
              /**
               * Users can choose the country to store their recorded content. Content can include meeting, webinar, and phone recordings, as well as voicemail, transcripts, and custom greeting prompts. See [Managing the Communications Content storage location](https://support.zoom.us/hc/en-us/articles/360050781131) for details.
               *
               * Provide abbreviated country codes as the value for this field. See the [Countries abbreviation list](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) for details.
               */
              allowed_values?: Array<string>;
              /**
               * Abbreviated country code.
               */
              value?: string;
            };
          };
          recording?: {
            /**
             * Ask host to confirm the disclaimer.
             */
            ask_host_to_confirm_disclaimer?: boolean;
            /**
             * This field can be used if `recording_disclaimer` is set to true. This field indicates whether or not you would like to ask participants for consent when a recording starts. The value can be one of the following:<br>
             * * `true`: Ask participants for consent when a recording starts. <br>
             * * `false`: Do not ask participants for consent when a recording starts.
             */
            ask_participants_to_consent_disclaimer?: boolean;
            /**
             * Auto delete cloud recordings.
             */
            auto_delete_cmr?: boolean;
            /**
             * When the `auto_delete_cmr` value is `true`, this value is the number of days before the auto-deletion of cloud recordings:
             * * `30` — 30 days.
             * * `60` — 60 days.
             * * `90` — 90 days.
             * * `120` — 120 days.
             */
            auto_delete_cmr_days?: 30 | 60 | 90 | 120;
            /**
             * The account's [**Record active speaker, gallery view and shared screen separately**](https://support.zoom.us/hc/en-us/articles/360060316092-Changing-basic-and-advanced-cloud-recording-settings#h_01F4CYJTCTXNS2MXH00W9EFG6R) settings.
             */
            record_files_separately?: {
              /**
               * Record the active speaker only.
               */
              active_speaker?: boolean;
              /**
               * Record the gallery view only.
               */
              gallery_view?: boolean;
              /**
               * Record the shared screen only.
               */
              shared_screen?: boolean;
            };
            /**
             * Display participants' names in the recording.
             */
            display_participant_name?: boolean;
            /**
             * Record thumbnails of the presenter when they are sharing their screen.
             */
            recording_thumbnails?: boolean;
            /**
             * Optimize recordings for a 3rd party video editor. This may increase the file size and the time it takes to generate recording files.
             */
            optimize_recording_for_3rd_party_video_editor?: boolean;
            /**
             * Enable the [recording highlights](https://support.zoom.us/hc/en-us/articles/360060802432) feature.
             * @deprecated
             */
            recording_highlight?: boolean;
            /**
             * Save panelist chat to the recording. This setting saves messages sent by panelists during a webinar to either all panelists or all panelists and attendees to the recording.
             */
            save_panelist_chat?: boolean;
            /**
             * Save poll results shared during the meeting or webinar. This also includes poll results shared during the meeting or webinar.
             */
            save_poll_results?: boolean;
            /**
             * Save [closed captions](https://support.zoom.us/hc/en-us/articles/207279736) as a VTT (Video Track Text) file.
             */
            save_close_caption?: boolean;
            /**
             * Automatic recording:<br>`local` - Record on local.<br>`cloud` - Record on cloud.<br>`none` - Disabled.
             */
            auto_recording?: 'local' | 'cloud' | 'none';
            /**
             * Cloud recording.
             */
            cloud_recording?: boolean;
            /**
             * Host can pause or stop the auto recording in the cloud.
             */
            host_pause_stop_recording?: boolean;
            /**
             * Setting to allow cloud recording access only from specific IP address ranges.
             *
             */
            ip_address_access_control?: {
              /**
               * If set to `true`, the cloud recordings of this account can only be accessed by the IP addresses defined in the `ip_addresses_or_ranges` property.
               *
               *
               */
              enable?: boolean;
              /**
               * IP addresses or ranges that have access to the cloud recordings. Separate multiple IP ranges with comma. Use n.n.n.n, n.n.n.n/n or n.n.n.n - n.n.n.n syntax where n is a number.
               *
               * Example: `46.33.24.184, 48.99.100.2/25` or `200.181.108.17 - 220.181.108.157`
               *
               *
               */
              ip_addresses_or_ranges?: string;
            };
            /**
             * Local recording.
             */
            local_recording?: boolean;
            /**
             * Record one audio file for all participants.
             */
            record_audio_file?: boolean;
            /**
             * Record the gallery view.
             */
            record_gallery_view?: boolean;
            /**
             * Record the active speaker view.
             */
            record_speaker_view?: boolean;
            /**
             * Audio transcript.
             */
            recording_audio_transcript?: boolean;
            /**
             * Show a disclaimer to participants before a recording starts
             *
             */
            recording_disclaimer?: boolean;
            /**
             * By selecting this option, your recording will have meeting smart chapters, and next steps. You are directing Zoom to access, process, and use your account's recording data for the purpose of analysis and insights.
             */
            smart_recording?: {
              /**
               * By selecting this option, meeting details in the audio transcript will be highlighted. Hosts can modify highlighted sections and generate a video summary (highlighted sections may have a 3-second offset) based on these sections. The summary is for informational purposes only and may not be complete.
               */
              create_recording_highlights?: boolean;
              /**
               * By selecting this option, your recording will have chapters with overview. Hosts can edit the chapters.
               */
              create_smart_chapters?: boolean;
              /**
               * By selecting this option, there will be a summary of actions to take after the recorded meeting.
               */
              create_next_steps?: boolean;
            };
            /**
             * This object represents the minimum passcode requirements set for recordings via Account Recording Settings.
             */
            recording_password_requirement?: {
              /**
               * Passcode must contain at least one alphabetical letter (a, b, c..).
               */
              have_letter?: boolean;
              /**
               * Passcode must contain at least one number(1, 2, 3..).
               */
              have_number?: boolean;
              /**
               * Passcode must contain at least one special character(!, @, #..).
               */
              have_special_character?: boolean;
              /**
               * Minimum required length for the passcode.
               */
              length?: number;
              /**
               * Passcode must contain only numeric characters.
               */
              only_allow_numeric?: boolean;
            };
            /**
             * Save chat text from the meeting.
             */
            save_chat_text?: boolean;
            /**
             * Show timestamp on video.
             */
            show_timestamp?: boolean;
          };
          schedule_meeting?: {
            /**
             * Determine how participants can join the audio portion of the meeting:<br>`both` - Telephony and VoIP.<br>`telephony` - Audio PSTN telephony only.<br>`voip` - VoIP only.<br>`thirdParty` - Third party audio conference.
             */
            audio_type?: 'both' | 'telephony' | 'voip' | 'thirdParty';
            /**
             * Passcode for already scheduled meetings
             *
             */
            default_password_for_scheduled_meetings?: string;
            /**
             * Encrypt the meeting passcode and include in the join meeting link to allow participants to join with just one click without having to enter the passcode.
             *
             */
            embed_password_in_join_link?: boolean;
            /**
             * Require a passcode for personal meetings if attendees can join before host.
             */
            force_pmi_jbh_password?: boolean;
            /**
             * Start meetings with host video on.
             */
            host_video?: boolean;
            /**
             * Join the meeting before host arrives.
             */
            join_before_host?: boolean;
            /**
             * Account wide meeting/webinar [passcode requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
             */
            meeting_password_requirement?: {
              /**
               *
               * Specify the max length of consecutive characters(abcde...) that can be used in a password.
               * If you set the value of this field to `0`, no restriction will be applied on consecutive characters.
               *
               * If you would like to set this restriction, you can specify a number between 4 and 8 that define the maximum allowed length for consecutive characters in a password.
               *
               * The max allowed length will be `n-1` where `n` refers to the value you provide for this field.  For instance, if you provide `4` as the value, there can only be a maximum of `3` consecutive characters in a password(example: abc1x@8fdh).
               */
              consecutive_characters_length?: 0 | 4 | 5 | 6 | 7 | 8;
              /**
               * Passcode must contain at least 1 letter (such as a,b,c...).
               *
               */
              have_letter?: boolean;
              /**
               * Passcode must contain at least 1 number (such as 1,2,3...).
               */
              have_number?: boolean;
              /**
               * Passcode must have at least 1 special character (!,@,#...).
               */
              have_special_character?: boolean;
              /**
               * Passcode must include both uppercase and lowercase characters.
               */
              have_upper_and_lower_characters?: boolean;
              /**
               * The minimum length that the meeting or webinar passcode must have.
               */
              length?: number;
              /**
               * Passcode must only contain numbers and no other characters.
               */
              only_allow_numeric?: boolean;
              /**
               * Inform users if the provided passcode is weak.
               */
              weak_enhance_detection?: boolean;
            };
            /**
             * Start meetings with participants video on.
             */
            participants_video?: boolean;
            /**
             * Personal Meeting Setting.<br><br>
             * `true`: Indicates that the **"Enable [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi)"** setting is turned on. Users can choose to use a PMI for their meetings. <br><br>
             * `false`: Indicates that the **"Enable Personal Meeting ID"** setting is [turned off](https://support.zoom.us/hc/en-us/articles/201362843-Personal-meeting-ID-PMI-and-personal-link#h_aa0335c8-3b06-41bc-bc1f-a8b84ef17f2a). If this setting is disabled (`false`), meetings that were scheduled with a PMI will be invalid. Scheduled meetings must be manually updated.
             * For Zoom Phone only: If a user has been assigned a desk phone, **"Elevate to Zoom Meeting"** on desk phone will be disabled.
             *
             *
             *
             */
            personal_meeting?: boolean;
            /**
             * PMI passcode
             *
             */
            pmi_password?: string;
            /**
             * Generate and require passcode for participants joining by phone.
             */
            pstn_password_protected?: boolean;
            /**
             * Require a passcode for instant meetings. If you use a PMI for your instant meetings, this option will be disabled. This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
             *
             */
            require_password_for_instant_meetings?: boolean;
            /**
             * Require a passcode for Personal Meeting ID (PMI). This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
             *
             */
            require_password_for_pmi_meetings?: 'jbh_only' | 'all' | 'none';
            /**
             * Require a passcode for meetings which have already been scheduled
             *
             */
            require_password_for_scheduled_meetings?: boolean;
            /**
             * Require a passcode when scheduling new meetings.This setting is always enabled for free accounts and Pro accounts with a single host and cannot be modified for these accounts.
             *
             */
            require_password_for_scheduling_new_meetings?: boolean;
            /**
             * Use a [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi) when starting an instant meeting.
             */
            use_pmi_for_instant_meetings?: boolean;
            /**
             * Use a [Personal Meeting ID (PMI)](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#understanding-personal-meeting-id-pmi) when scheduling a meeting.
             */
            use_pmi_for_scheduled_meetings?: boolean;
          };
          telephony?: {
            /**
             * Third party audio conference info.
             */
            audio_conference_info?: string;
            /**
             * Show the international numbers link on the invitation email.
             */
            show_international_numbers_link?: boolean;
            /**
             * Indicates where most of the participants call into or call from during a meeting.
             */
            telephony_regions?: {
              /**
               * The account's selected telephony regions that indicate where most participants call into or call from during a meeting.
               */
              selection_values?: string;
            };
            /**
             * Third party audio conference.
             */
            third_party_audio?: boolean;
          };
          /**
           * Account Settings: TSP.
           */
          tsp?: {
            /**
             * Call Out
             */
            call_out?: boolean;
            /**
             * Call Out Countries/Regions
             */
            call_out_countries?: Array<any>;
            /**
             * Show the international numbers link on the invitation email.
             */
            show_international_numbers_link?: boolean;
          };
        }
      | (
          | {
              /**
               * Meeting Authentication Options
               */
              authentication_option?: {
                /**
                 * Authentication action
                 */
                action?: 'update' | 'show' | 'hide';
                /**
                 * Authentication default option
                 */
                default_option?: boolean;
                /**
                 * Authentication domains
                 */
                domains?: string;
                /**
                 * Authentication id
                 */
                id?: string;
                /**
                 * Authentication name
                 */
                name?: string;
                /**
                 *  Authentication type. Specify one of the following authentication types for the authentication profile:<br>
                 * * `enforce_login`: This option allows any users to join the meeting or webinar, as long as they are signed into their Zoom account.
                 * * `enforce_login_with_domains`: This option, allows you to specify a rule so that only those Zoom users whose email addresses contain a certain domain, can join the meeting or webinar. You can either add multiple domains using a comma in between and/or use a wildcard for listing domains.<br>
                 * * `enforce_login_with_same_account`: This option allows users to join the meeting or webinar with the same Zoom account.
                 */
                type?: 'enforce_login' | 'enforce_login_with_same_account' | 'enforce_login_with_domains';
              };
              /**
               * Only authenticated users can join meetings
               */
              meeting_authentication?: boolean;
            }
          | {
              /**
               * Authentication Options
               */
              authentication_option?: {
                /**
                 * Authentication action
                 */
                action?: 'update' | 'show' | 'hide';
                /**
                 * Authentication default option
                 */
                default_option?: boolean;
                /**
                 * Authentication domains
                 */
                domains?: string;
                /**
                 * Authentication id
                 */
                id?: string;
                /**
                 * Authentication name
                 */
                name?: string;
                /**
                 * Authentication type
                 */
                type?: 'internally' | 'enforce_login' | 'enforce_login_with_domains';
              };
              /**
               * Only authenticated users can view cloud recordings
               */
              recording_authentication?: boolean;
            }
        )
      | {
          meeting_security?: {
            /**
             * Whether to require that all meetings are secured with at least one security option.
             *
             * This setting can only be disabled by Enterprise, ISV, Business (with more than 100 licenses), and Education accounts.
             */
            auto_security?: boolean;
            /**
             * Whether to block users in specific domains from joining meetings and webinars.
             */
            block_user_domain?: boolean;
            /**
             * The domain to block, up to 20 domains. For example, the `*.example.com` domain.
             */
            block_user_domain_list?: Array<string>;
            /**
             * Whether the meeting password will be encrypted and included in the invitation link. The provided link will allow participants to join the meeting without having to enter the password.
             */
            embed_password_in_join_link?: boolean;
            /**
             * The type of encryption to use when starting a meeting:
             * * `enhanced_encryption` — Use enhanced encryption. Encryption data is stored in the cloud.
             * * `e2ee` — End-to-end encryption. The encryption key is stored on the local device and cannot be obtained by anyone else. Enabling E2EE also [**disables** certain features](https://support.zoom.us/hc/en-us/articles/360048660871), such as cloud recording, live streaming, and allowing participants to join before the host.
             */
            encryption_type?: 'enhanced_encryption' | 'e2ee';
            /**
             * Whether to enable end-to-end encryption for meetings. If enabled, you can specify the type of encryption in the `encryption_type` field.
             */
            end_to_end_encrypted_meetings?: boolean;
            /**
             * Whether all instant and scheduled meetings that users can join via client or Zoom Rooms systems are password-protected. [Personal Meeting ID (PMI)](https://support.zoom.us/hc/en-us/articles/203276937) meetings are **not** included in this setting.
             */
            meeting_password?: boolean;
            /**
             * Information about the meeting and webinar [password requirements](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604).
             */
            meeting_password_requirement?: {
              /**
               * The maximum length of consecutive characters (for example, `abcdef`) allowed in a password:
               * * `4` through `8` — The maximum consecutive characters length. The length is `n` minus `1`, where `n` is the provided value. For example, if you provide the `4` value, there can only be a maximum of `3` consecutive characters in a password (for example, `abc1x@8fdh`).
               * * `0` — Do not apply a consecutive character restriction.
               */
              consecutive_characters_length?: 0 | 4 | 5 | 6 | 7 | 8;
              /**
               * Whether the password must contain at least one letter character.
               */
              have_letter?: boolean;
              /**
               * Whether the password must contain at least one numeric character.
               */
              have_number?: boolean;
              /**
               * Whether the password must contain at least one special character. For example, `!`, `@`, and/or `#` characters.
               */
              have_special_character?: boolean;
              /**
               * Whether the password must include uppercase and lowercase characters.
               */
              have_upper_and_lower_characters?: boolean;
              /**
               * The password's minimum length.
               */
              length?: number;
              /**
               * Whether the password must contain **only** numeric characters.
               */
              only_allow_numeric?: boolean;
              /**
               * Whether users will be informed when the provided password is weak.
               */
              weak_enhance_detection?: boolean;
            };
            /**
             * Whether to specify that only authenticated users can join the meeting from the web client.
             */
            only_authenticated_can_join_from_webclient?: boolean;
            /**
             * Whether to require a password for participants joining by phone.
             *
             * If enabled and the meeting is password-protected, a numeric password is required for participants to join by phone. For meetings with alphanumeric passwords, a numeric password will be generated.
             */
            phone_password?: boolean;
            /**
             * Whether all Personal Meeting ID (PMI) meetings that users can join via client or Zoom Rooms systems are password-protected.
             */
            pmi_password?: boolean;
            /**
             * Whether to require a password for meetings that have already been scheduled.
             */
            require_password_for_scheduled_meeting?: boolean;
            /**
             * Whether to require a password for webinars that have already been scheduled.
             */
            require_password_for_scheduled_webinar?: boolean;
            /**
             * Whether participants are placed in the [**Waiting Room**](https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room) when they join a meeting.
             *
             * If the **Waiting Room** feature is enabled, the [**Allow participants to join before host**](https://support.zoom.us/hc/en-us/articles/202828525-Allow-participants-to-join-before-host) setting is automatically disabled.
             */
            waiting_room?: boolean;
            /**
             * Information about the Waiting Room settings.
             */
            waiting_room_settings?: {
              /**
               * The type of participants to be admitted to the Waiting Room:
               * * `0` — All attendees.
               * * `1` — Users who are not in your account.
               * * `2` — Users who are not in your account and are not part of your [allowed domains list](https://support.zoom.us/hc/en-us/articles/360037117472-Configuring-authentication-profiles#h_e3cf0d5f-eec7-4c2a-ad29-ef2a5079a7da).
               */
              participants_to_place_in_waiting_room?: 0 | 1 | 2;
              /**
               * The users who can admit participants from the Waiting Room:
               * * `0` — Host and co-hosts only.
               * * `1` — Host, co-hosts, and anyone who bypassed the Waiting Room if the host and co-hosts are not present.
               */
              users_who_can_admit_participants_from_waiting_room?: 0 | 1;
              /**
               * If the `participants_to_place_in_waiting_room` field is `2`, a comma-separated list of the domains that can bypass the Waiting Room (`"example.com,example2.com"`).
               */
              whitelisted_domains_for_waiting_room?: string;
            };
            /**
             * Whether to generate a password when scheduling webinars. Participants must use the generated password to join the scheduled webinar.
             */
            webinar_password?: boolean;
          };
        };
    /**
     * Optional query parameters:
     * * `meeting_authentication` — Use this query parameter to view the [meeting authentication settings](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) applied to the user's account.
     * * `recording_authentication` — Use this query parameter to view the [recording authentication settings](https://support.zoom.us/hc/en-us/articles/360037756671-Authentication-Profiles-for-Cloud-Recordings) applied to the user's account.
     * * `meeting_security` — Use this query parameter to view the meeting security settings applied to the user's account.
     */
    option?: 'meeting_authentication' | 'recording_authentication' | 'meeting_security';
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/users/{userId}/settings',
      path: {
        userId: userId,
      },
      query: {
        option: option,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br><br>
             **Error Code:** \`1108\`<br> Only Licensed or On-prem users can enable the large meeting feature.<br><br>
             **Error Code:** \`1204\`<br> You can't enable the Webinar feature because you already have the Zoom Events feature.<br><br>
             **Error Code:** \`1205\`<br> You can't enable the Zoom Events feature because you already have the Webinar feature.<br><br>
             **Error Code:** \`1206\`<br> You can only enable the Zoom Events feature for Licensed or On-prem users.<br><br>
             **Error Code:** \`1120\`<br> A valid invitation to join the Zoom account was not found for this user. <br>
            This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.<br><br>**Error Code:** \`1122\`<br>
            Webinar feature can only be enabled for Licensed or On-prem users.<br><br>
             **Error Code:** \`200\`<br>
            You can't add paid users.<br>
            You can add max $maxNumber paid users.<br>
            You can add max $maxNumber free users.<br>
            You can add max $maxNumber Webinar 100 users.<br>
            You can add max $maxNumber Webinar 500 users.<br>
            You can add max $maxNumber Webinar 1000 users.<br>
            You can add max $maxNumber Webinar 3000 users.<br>
            You can add max $maxNumber Webinar 5000 users.<br>
            You can add max $maxNumber Webinar 10000 users.<br>
            You can add max $maxNumber Large 100 users.<br>
            You can add max $maxNumber Large 200 users.<br>
            You can add max $maxNumber Large 300 users.<br>
            You can add max $maxNumber Large 500 users.<br>
            You can add max $maxNumber Large 1000 users.<br>
            You can add max $maxNumber paid users.<br><br>
             **Error Code:** \`300\`<br> You cannot downgrade the Zoom Events feature to "$downgradeCapacity" capacity because there is an upcoming Zoom Events scheduled with "$maxCapacity" capacity. <br> You cannot remove the Zoom Events feature for this user because the user has an upcoming Zoom Events scheduled.<br><br>
             **Error Code:** \`1207\`<br> You can only enable the "Concurrent Meeting" feature for Licensed users or On-prem users.<br><br>
             **Error Code:** \`1208\`<br>You can't enable the "Concurrent Meeting Basic" feature.<br><br>
             **Error Code:** \`1209\`<br> You can add a maximum of {0} "Concurrent Meeting Basic" users.<br><br>
             **Error Code:** \`1210\`<br>You can't enable the "Concurrent Meeting Plus" feature.<br><br>
             **Error Code:** \`1211\`<br>You can add a maximum of {0} "Concurrent Meeting Plus" users.<br><br>**Error Code:** \`1228\` <br>Unable to assign "Zoom IQ for Sales" license because you have reached the limit of licensed users allowed on this account or this account does not have the "Zoom IQ for Sales" plan.<br/>Unable to assign "Zoom Whiteboard" license because you have reached the limit of licensed users allowed on this account or this account does not have the "Zoom Whiteboard" plan.<br><br>**Error Code:** \`1233\` <br>You cannot enable the "Zoom IQ for Sales" for that Zoom Rooms user. <br>You cannot enable the "Zoom Whiteboard" for that Zoom Rooms user.<br><br>**Error Code:** \`1234\` <br>You cannot enable the "Zoom IQ for Sales" for an On-Prem user. <br><br>**Error Code:** \`1242\` <br>You cannot set "Zoom Whiteboard" and "Zoom Whiteboard Plus" at the same time.`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
             **Error Code:** \`1001\`<br>
            User does not exist: $userId.
            `,
      },
    });
  }

  /**
   * Delete Virtual Background files
   * Use this API to delete a user's Virtual Background files. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * **Scopes:** `user:write`, `user:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The [Virtual Background feature](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) must be enabled on the account.
   * @returns void
   * @throws ApiError
   */
  public delUserVb({
    userId,
    fileIds,
  }: {
    /**
     * The user's ID. To get a user's ID, use the [**List users**](/docs/api-reference/zoom-api/ma#operation/users) API. For user-level apps, pass the `me` value instead of the user ID value.
     */
    userId: string;
    /**
     * A comma-separated list of the Virtual Background file IDs to delete.
     */
    fileIds?: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/users/{userId}/settings/virtual_backgrounds',
      path: {
        userId: userId,
      },
      query: {
        file_ids: fileIds,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
            Bad Request

             **Error Code:** \`300\` <br>
            Invalid parameter: file_ids`,
        404: `**HTTP Status Code:** \`404\` <br>
            Not Found

             **Error Code:** \`1001\` <br>
             * User does not exist.
             * User "{userId}" does not exist or does not belong to this account.`,
      },
    });
  }

  /**
   * Upload Virtual Background files
   * Use this API to [upload a Virtual Background files](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background) to a user's profile. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * **Note:**
   * * A user profile cannot exceed more than 10 Virtual Background files.
   * * You can only upload image files that are in JPG/JPEG, GIF or PNG format.
   * * Video files must be in MP4 or MOV file format with a minimum resolution of 480 by 360 pixels (360p) and a maximum resolution of 1920 by 1080 pixels (1080p).
   * * The Virtual Background file size cannot exceed 15 megabytes (MB).
   *
   * **Scopes:** `user:write`, `user:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * The [Virtual Background feature](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) must be enabled on the account.
   * @returns any **HTTP Status Code:** `201` **Created**
   * @throws ApiError
   */
  public uploadVBuser({
    userId,
    formData,
  }: {
    /**
     * The user's ID. To get a user's ID, use the [**List users**](/docs/api-reference/zoom-api/ma#operation/users) API. For user-level apps, pass the `me` value instead of the user ID value.
     */
    userId: string;
    formData?: {
      /**
       * The Virtual Background's file path.
       */
      file?: string;
    };
  }): CancelablePromise<{
    /**
     * The virtual background file's ID.
     */
    id?: string;
    /**
     * Whether the virtual background file is set as the default virtual background:
     * * `true` — The default virtual background.
     * * `false` — Not the default virtual background.
     */
    is_default?: boolean;
    /**
     * The virtual background file's name.
     */
    name?: string;
    /**
     * The virtual background file's size, in bytes.
     */
    size?: string;
    /**
     * The virtual background file's file type:
     * * `image` — An image file.
     * * `video` — A video file.
     */
    type?: 'image' | 'video';
  }> {
    // @ts-ignore
    return this.httpRequest.request({
      method: 'POST',
      url: '/users/{userId}/settings/virtual_backgrounds',
      path: {
        userId: userId,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**

             **Error Code:** \`120\`<br>
            No file uploaded, verify that a file has been uploaded.<br>
            File size cannot exceed 15M.<br>
            A maximum of 10 files are allowed for a user.<br>
            Only jpg/jpeg, gif or png image file can be uploaded.

            `,
        404: `**HTTP Status Code:** \`404\` **Not Found** <br>
            Group not found.`,
      },
    });
  }

  /**
   * Update user status
   * Use this API to [deactivate](https://support.zoom.us/hc/en-us/articles/115005269946-Remove-User-from-your-Account#h_6a9bc1c3-d739-4945-b1f2-00b3b88fb5cc) an active user or to [reactivate](https://support.zoom.us/hc/en-us/articles/115005269946-Remove-User-from-your-Account#h_16319724-d120-4be6-af5d-31582d134ea0) a deactivated user. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * An account owner or admins can deactivate as well as activate a user in a Zoom account. Deactivating a user will remove all licenses associated with a user. It will prevent the deactivated user from logging into their Zoom account. A deactivated user can be reactivated. Reactivating a user grants the user access to login to their Zoom account.
   *
   * **Scopes:** `user:write:admin`, `user:write`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any OK
   * @throws ApiError
   */
  public userStatus({
    userId,
    requestBody,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * User status.
     */
    requestBody: {
      /**
       * The action types:<br>`activate` - Activate a deactivated user.<br>`deactivate` - Deactivate a user.
       */
      action: 'activate' | 'deactivate';
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/users/{userId}/status',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br><br>
             **Error Code:** \`200\`<br>
            Zoom Room and Admin users' status cannot be activated or deactivated.<br><br>
             **Error Code:** \`300\`<br>
            You cannot deactivate this user because the user has an upcoming Zoom Events scheduled.<br><br>
             **Error Code:** \`3412\`<br>Your request to activate the user was not approved at this time because your account has reached the permitted maximum number of $maxAllowedNumber basic users. Please remove existing basic user(s) from your Users list or the Pending Users list before attempting to activate this user.<br>
             **Error Code:** \`2033\`<br>Your request to activate the basic user was not approved because you have already reached the maximum basic user limit allowed in your account. For additional help regarding this issue, contact the Zoom Customer Support team.
            `,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
             **Error Code:** \`1001\`<br>
            User does not exist: $userId.
            `,
      },
    });
  }

  /**
   * Revoke a user's SSO token
   * Revoke a user's SSO token. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * After calling this API, the SSO user will be logged out of their current Zoom session.
   *
   * **Scopes:** `user:write:admin`, `user:write`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns void
   * @throws ApiError
   */
  public userSsoTokenDelete({
    userId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/users/{userId}/token',
      path: {
        userId: userId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
             **Error Code:** \`1001\`<br>
            User does not exist: $userId.
            `,
      },
    });
  }

  /**
   * Get a user's token
   * Use this API to get a user's Zoom token or Zoom Access Key (ZAK). For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * **Scopes:** `user:read:admin`, `user:read` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **HTTP Status Code:** `200` <br>
   * Token returned.
   * @throws ApiError
   */
  public userToken({
    userId,
    type = 'token',
    ttl = 7200,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * The user token type:
     * * `zak` — A Zoom Access Key (ZAK) is used to generate a URL to start meetings. See [Getting a Zoom Access Key (ZAK)](https://marketplace.zoom.us/docs/sdk/native-sdks/auth#generating-zoom-access-token-zak) for details. The ZAK's expiration time is two hours. For API users, the expiration time is 90 days. An API user is a user created via the `custCreate` action in the **[Create users](https://marketplace.zoom.us/docs/api-reference/zoom-api/methods/#operation/userCreate)** API. The maximum length of this value is `512`.
     * * `token` — **Deprecated.** A Zoom token. This token expires in 14 days. You must make the request again after expiration to receive a new token. This query parameter returns a null value if the user signed in to Zoom via Google or Facebook. The maximum length of this value is `512`.
     *
     * This value defaults to `token`.
     */
    type?: 'token' | 'zak';
    /**
     * The ZAK expiration time to live (TTL). The value of this query parameter denotes the expiry time of the ZAK, in seconds. To update the user's ZAK TTL, use this field with the `zak` value for the `type` query parameter.
     *
     * This value defaults to `7200` or `7776000` (90 days) for API users. The maximum value is one year.
     */
    ttl?: number;
  }): CancelablePromise<{
    /**
     * The user's ZAK or token value.
     */
    token?: string | null;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}/token',
      path: {
        userId: userId,
      },
      query: {
        type: type,
        ttl: ttl,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` <br>
            Not Found

             **Error Code:** \`1001\` <br>
            User does not exist: $userId`,
      },
    });
  }

  /**
   * Bulk update feature
   * Use this API to bulk update features.
   *
   * **Scopes:** `user:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`.
   * @returns any **HTTP Status Code:** `201`<br>
   * Features updated.
   * @throws ApiError
   */
  public bulkUpdateFeature({
    requestBody,
  }: {
    /**
     * User feature
     */
    requestBody: {
      /**
       * The feature type you want to update.
       */
      feature_type:
        | 'user_type'
        | 'concurrent_meeting'
        | 'large_meeting'
        | 'webinar'
        | 'zoom_events'
        | 'zoom_phone'
        | 'zoom_iq_for_sales'
        | 'zoom_whiteboard'
        | 'plan_united_type'
        | 'zoom_one_type';
      /**
       * The feature value you want to update. The value you can pass depends on the 'feature_type' field.
       *
       * **user_type:**
       * * `1` - Basic
       * * `2` - Licensed
       * * `3` - On-prem
       * * `99` - None (this can only be set with `ssoCreate`).
       *
       * **concurrent_meeting:**
       * * `Basic`
       * * `Plus`
       * * `None`.
       *
       * **large_meeting:**
       * * `1` - 100 capacity
       * * `32` - 200 capacity
       * * `64` - 300 capacity
       * * `128` - 500 capacity
       * * `256` - 1000 capacity
       * * `0` - Turn off the **Large meeting** feature.
       *
       * **webinar:**
       * * `16` - 100 capacity
       * * `1` - 500 capacity
       * * `64` - 1000 capacity
       * * `128` - 3000 capacity
       * * `256` - 5000 capacity
       * * `512` - 10000 capacity
       * * `1024` - 20000 capacity
       * * `2048` - 30000 capacity
       * * `4096` - 40000 capacity
       * * `8192` - 50000 capacity
       * * `16384` - promo 500 capacity
       * * `32768` - promo 1000 capacity
       * * `0` - Turn off the **Webinar** feature.
       *
       * **zoom_events:**
       * * `500` - 500 capacity
       * * `1000` - 1000 capacity
       * * `3000` - 3000 capacity
       * * `5000` - 5000 capacity
       * * `10000` - 10000 capacity
       * * `20000` - 20000 capacity
       * * `30000` - 30000 capacity
       * * `50000` - 50000 capacity
       * * `0` - Turn off the **Zoom events** feature.
       *
       * **zoom_iq_for_sales:**
       * * `true` - Turn on the **Zoom IQ** feature.
       * * `false` - Turn off the **Zoom IQ** feature.
       *
       * **zoom_whiteboard:**
       * * `true` - Turn on the **Zoom whiteboard** feature.
       * * `false` - Turn off the **Zoom whiteboard** feature.
       *
       * **plan_united_type:**
       * * `1` - Zoom United Pro-United with US/CA Unlimited.
       * * `2` - Zoom United Pro-United with UK/IR Unlimited.
       * * `4` - Zoom United Pro-United with AU/NZ Unlimited.
       * * `8` - Zoom United Pro-United with Global Select.
       * * `16` -  Zoom United Pro-United with Zoom Phone Pro.
       * * `32` - Zoom United Biz-United with US/CA Unlimited.
       * * `64` - Zoom United Biz-United with UK/IR Unlimited.
       * * `128` - Zoom United Biz-United with AU/NZ Unlimited.
       * * `256` - Zoom United Biz-United with Global Select.
       * * `512` -  Zoom United Biz-United with Zoom Phone Pro.
       * * `1024` - Zoom United Ent-United with US/CA Unlimited.
       * * `2048` - Zoom United Ent-United with UK/IR Unlimited.
       * * `4096` - Zoom United Ent-United with AU/NZ Unlimited.
       * * `8192` - Zoom United Ent-United with Global Select.
       * * `16384` -  Zoom United Ent-United with Zoom Phone Pro.
       * * `32768` - Zoom United Pro-United with JP Unlimited.
       * * `65536` - Zoom United Biz-United with JP Unlimited.
       * * `131072` - Zoom United Ent-United with JP Unlimited.
       * * `0` - Turn off the **Zoom united** feature.
       *
       * **zoom_one_type:**
       * * `16` - Zoom One Business Plus with US/CA Unlimited.
       * * `32` - Zoom One Business Plus with UK/IR Unlimited.
       * * `64` - Zoom One Business Plus with AU/NZ Unlimited.
       * * `128` - Zoom One Business Plus with Japan Unlimited.
       * * `0` - Turn off the **Zoom one** feature.
       */
      feature_value: string;
      /**
       * The users' info you want to update.
       */
      users: Array<{
        /**
         * The user's ID.
         */
        id?: string;
        /**
         * The user's email.
         */
        email?: string;
      }>;
    };
  }): CancelablePromise<{
    /**
     * The IDs of users for whom the feature was updated successfully
     */
    success_user_ids?: Array<string>;
    /**
     * The details why these users' feature was not updated successfully.
     */
    fail_details?: Array<{
      /**
       * The IDs of users for whom the feature was not updated successfully.
       */
      user_ids?: Array<string>;
      /**
       * The reason why the feature for these users was not updated successfully.
       */
      reason?:
        | 'Users not found'
        | 'Have upcoming events'
        | 'Unpaid user'
        | 'Not enough seats'
        | "Can't update for Zoom One users"
        | "Can't update for free users"
        | "Can't update for Zoom United users"
        | "Can't update for Zoom Room users"
        | 'Not allowed to add basic users'
        | "Can't update for non-SSO users"
        | 'No need to update';
    }>;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/users/features',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
            Bad Request

             **Error Code:** \`200\`
             * Current account must be a paid account.
             * Current account does not enable this feature.`,
      },
    });
  }

  /**
   * Get user summary
   * Use this API to get a summary of users, including the number and types of users in the account.
   *
   * **Scopes:** `user:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200`<br> User summary returned.
   * @throws ApiError
   */
  public userSummary(): CancelablePromise<{
    /**
     * The number of licensed users.
     */
    licensed_users_count?: number;
    /**
     * The number of basic users.
     */
    basic_users_count?: number;
    /**
     * The number of on-prem users.
     */
    on_prem_users_count?: number;
    /**
     * The number of Zoom rooms.
     */
    room_users_count?: number;
    /**
     * The number of users with a pending activation meeting license.
     */
    pending_users_count?: number;
    /**
     * The number of users without licenses.
     */
    join_only_users_count?: number;
    /**
     * The total number of `licensed_users_count`, `basic_users_count`, `on_prem_users_count`, `join_only_users_count` and `room_users_count`.
     */
    total_users_count?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/summary',
    });
  }
}
