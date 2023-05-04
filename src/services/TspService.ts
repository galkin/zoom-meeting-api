/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TspService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get account's TSP information
   * Get information on Telephony Service Provider on an account level.<br><br>
   * **Scopes:** `tsp:read:admin` <br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**<br>
   * * A Pro or a higher plan.
   * @returns any **HTTP Status Code:** `200`<br>
   * TSP account detail returned successfully.
   * @throws ApiError
   */
  public tsp(): CancelablePromise<{
    /**
     * Control restriction on account users adding a TSP number outside of account's dial in numbers.
     */
    dial_in_number_unrestricted?: boolean;
    dial_in_numbers?: Array<{
      /**
       * Country Code
       */
      code?: string;
      /**
       * Dial-in number, length is less than 16
       */
      number?: string;
      /**
       * Dial-in number type.
       */
      type?: string;
    }>;
    /**
     * Enable Telephony Service Provider for account users.
     */
    enable?: boolean;
    /**
     * For master account, extend its TSP setting to all sub accounts. For sub account, extend TSP setting from master account.
     */
    master_account_setting_extended?: boolean;
    /**
     * Control restriction on account users being able to modify their TSP credentials.
     */
    modify_credential_forbidden?: boolean;
    /**
     * Telephony bridge zone
     */
    tsp_bridge?: 'US_TSP_TB' | 'EU_TSP_TB';
    /**
     * Enable TSP feature for account. This has to be enabled to use any other tsp settings/features.
     */
    tsp_enabled?: boolean;
    /**
     * Telephony Service Provider.
     */
    tsp_provider?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tsp',
    });
  }

  /**
   * Update account's TSP information
   * Update information of the Telephony Service Provider set up on an account.<br>
   * **Prerequisites**:<br>
   * TSP account option should be enabled.<br>
   * **Scopes:** `tsp:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * @returns void
   * @throws ApiError
   */
  public tspUpdate({
    requestBody,
  }: {
    /**
     * TSP Account
     */
    requestBody: {
      /**
       * Control restriction on account users adding a TSP number outside of account's dial in numbers.
       */
      dial_in_number_unrestricted?: boolean;
      /**
       * Enable 3rd party audio conferencing for account users
       */
      enable?: boolean;
      /**
       * For master account, extend its TSP setting to all sub accounts. For sub account, extend TSP setting from master account.
       */
      master_account_setting_extended?: boolean;
      /**
       * Control restriction on account users being able to modify their TSP credentials.
       */
      modify_credential_forbidden?: boolean;
      /**
       * Telephony bridge
       */
      tsp_bridge?: 'US_TSP_TB' | 'EU_TSP_TB';
      /**
       * Enable TSP feature for account. This has to be enabled to use any other tsp settings/features.
       */
      tsp_enabled?: boolean;
      /**
       * 3rd party audio conferencing provider
       */
      tsp_provider?: string;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/tsp',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request.<br>

         **Error Code:** \`300\`<br>
        Invalid parameter: tsp_bridge.`,
      },
    });
  }

  /**
   * List user's TSP accounts
   * A user can have a maximum of two TSP accounts. Use this API to list all TSP accounts of a user.<br><br>
   * **Scopes:** `tsp:read:admin` `tsp:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * TSP account list returned successfully.
   * @throws ApiError
   */
  public userTsPs({
    userId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
  }): CancelablePromise<{
    tsp_accounts?: Array<{
      /**
       * Conference code: numeric value, length is less than 16.
       */
      conference_code: string;
      /**
       * List of dial in numbers.
       */
      dial_in_numbers?: Array<{
        /**
         * Country code.
         */
        code?: string;
        /**
         * Country Label, if passed, will display in place of code.
         */
        country_label?: string;
        /**
         * Dial-in number: length is less than 16.
         */
        number?: string;
        /**
         * Dial-in number types:<br>`toll` - Toll number.<br>`tollfree` -Toll free number.<br>
         * `media_link` - Media link
         */
        type?: 'toll' | 'tollfree' | 'media_link';
      }>;
      /**
       * The TSP credential ID.
       */
      id?: '1' | '2';
      /**
       * Leader PIN: numeric value, length is less than 16.
       */
      leader_pin: string;
      /**
       * Telephony bridge
       *
       */
      tsp_bridge?: 'US_TSP_TB' | 'EU_TSP_TB';
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}/tsp',
      path: {
        userId: userId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request.<br>
         **Error Code:** \`2024\`<br>
        Account has not enabled TSP.
        `,
        404: `**HTTP Status Code:** \`404\`<br>
        Not Found.<br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.<br>
         **Error Code:**\`1120\`<br>
        A valid invitation to join the Zoom account was not found for this user.<br>
        This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.`,
      },
    });
  }

  /**
   * Add a user's TSP account
   * Add a user's TSP account.<br><br>
   * **Scopes:** `tsp:write:admin` `tsp:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * @returns any **HTTP Status Code:** `201`<br>
   * TSP account added.
   * @throws ApiError
   */
  public userTspCreate({
    userId,
    requestBody,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * TSP account.
     */
    requestBody: {
      /**
       * Conference code: numeric value, length is less than 16.
       */
      conference_code: string;
      /**
       * List of dial in numbers.
       */
      dial_in_numbers?: Array<{
        /**
         * Country code.
         */
        code?: string;
        /**
         * Country Label, if passed, will display in place of code.
         */
        country_label?: string;
        /**
         * Dial-in number: length is less than 16.
         */
        number?: string;
        /**
         * Dial-in number types:<br>`toll` - Toll number.<br>`tollfree` -Toll free number.<br>
         * `media_link` - Media link.
         */
        type?: 'toll' | 'tollfree' | 'media_link';
      }>;
      /**
       * Leader PIN: numeric value, length is less than 16.
       */
      leader_pin: string;
      /**
       * Telephony bridge
       */
      tsp_bridge?: 'US_TSP_TB' | 'EU_TSP_TB';
    };
  }): CancelablePromise<{
    /**
     * Conference code: numeric value, length is less than 16.
     */
    conference_code: string;
    /**
     * List of dial in numbers.
     */
    dial_in_numbers?: Array<{
      /**
       * Country code.
       */
      code?: string;
      /**
       * Country Label, if passed, will display in place of code.
       */
      country_label?: string;
      /**
       * Dial-in number: length is less than 16.
       */
      number?: string;
      /**
       * Dial-in number types:<br>`toll` - Toll number.<br>`tollfree` -Toll free number.<br>
       * `media_link` - Media link.
       */
      type?: 'toll' | 'tollfree' | 'media_link';
    }>;
    /**
     * Leader PIN: numeric value, length is less than 16.
     */
    leader_pin: string;
    /**
     * Telephony bridge
     */
    tsp_bridge?: 'US_TSP_TB' | 'EU_TSP_TB';
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/users/{userId}/tsp',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad Request.<br>
         **Error Code:**\`2024\`<br>
        Account has not enabled TSP.<br>
         **Error Code:**\`300\`<br>
        Media link is required for AT&T TSP accounts.<br>
         **Error Code:** \`300\`<br>
        You can add a max of two tsp configs.
        `,
        404: `**HTTP Status Code:** \`404\`<br>
        Not Found.<br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.<br>
         **Error Code:**\`1120\`<br>
        A valid invitation to join the Zoom account was not found for this user.<br>
        This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.`,
      },
    });
  }

  /**
   * Set global dial-in URL for a TSP user
   * A global dial-in page can provide a list of global access numbers using which audio conferencing can be conducted. By calling this API, you can set the url for the global dial-in page of a user whose Zoom account has TSP and special TSP with third-party audio conferencing options enabled. <p></p>
   * **Scopes:**`tsp:write:admin` `tsp:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * @returns void
   * @throws ApiError
   */
  public tspUrlUpdate({
    userId,
    requestBody,
  }: {
    /**
     * The userId or email address of the user.
     */
    userId: string;
    /**
     * Global dial-in URL of the user.
     */
    requestBody?: {
      /**
       * The global dial-in URL for a TSP enabled account. The URL must be valid with a max-length of 512 characters.
       */
      audio_url?: string;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/users/{userId}/tsp/settings',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br><br>
         **Error Code**: \`2000\`<br>
        Not TSP special account.<br>

        Ths error means that the account does not have special TSP privilege. Contact Zoom Developer Support for details.<br>
         **Error Code**: \`2024\`<br>
        Account not enable TSP`,
        404: `**HTTP Status Code:** \`404\`<br>
        User ID not found.<br>
         **Error Code**: \`1001\`<br>
        User {userId} not exist or not belong to this account.
         **Error Code**: \`1120\`<br>
        Invite not exist.

        This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.`,
      },
    });
  }

  /**
   * Delete a user's TSP account
   * Delete a user's TSP account.<br><br>
   * **Scopes:** `tsp:write:admin` `tsp:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * @returns void
   * @throws ApiError
   */
  public userTspDelete({
    userId,
    tspId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * TSP account ID.
     */
    tspId: '1' | '2';
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/users/{userId}/tsp/{tspId}',
      path: {
        userId: userId,
        tspId: tspId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request.<br>
         **Error Code:**\`2024\`<br>
        Account not enable TSP.<br>
         **Error Code:** \`300\`<br>
        The TSP id provided does not exist.<br>
         **Error Code:** \`300\`<br>
        TSP Config does not exist.<br>
         **Error Code:** \`300\`<br>
        At least one tsp config must be available.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Not Found.<br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.<br>
         **Error Code:**\`1120\`<br>
        A valid invitation to join the Zoom account was not found for this user.<br>
        This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.`,
      },
    });
  }

  /**
   * Get a user's TSP account
   * Each user can have a maximum of two TSP accounts. Use this API to retrieve details of a specific TSP account enabled for a specific user.<br><br>
   * **Scopes:** `tsp:read:admin` `tsp:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * TSP account retrieved successfully.
   * @throws ApiError
   */
  public userTsp({
    userId,
    tspId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * TSP account ID.
     */
    tspId: '1' | '2';
  }): CancelablePromise<{
    /**
     * Conference code: numeric value, length is less than 16.
     */
    conference_code: string;
    /**
     * List of dial in numbers.
     */
    dial_in_numbers?: Array<{
      /**
       * Country code.
       */
      code?: string;
      /**
       * Country Label, if passed, will display in place of code.
       */
      country_label?: string;
      /**
       * Dial-in number: length is less than 16.
       */
      number?: string;
      /**
       * Dial-in number types:<br>`toll` - Toll number.<br>`tollfree` -Toll free number. <br> `media_link` - Media link phone number. This is used for PSTN integration instead of a paid bridge number.
       */
      type?: 'toll' | 'tollfree' | 'media_link';
    }>;
    /**
     * The TSP account ID.
     */
    id?: string;
    /**
     * Leader PIN: numeric value, length is less than 16.
     */
    leader_pin: string;
    /**
     * Telephony bridge
     */
    tsp_bridge?: 'US_TSP_TB' | 'EU_TSP_TB';
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}/tsp/{tspId}',
      path: {
        userId: userId,
        tspId: tspId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request.<br>
         **Error Code:** \`300\`<br>
        The TSP id provided does not exist.<br>
         **Error Code:** \`300\`<br>
        TSP Config does not exist.<br>
         **Error Code:**\`2024\`<br>
        Account has not enabled TSP.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Not Found.<br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.<br>
         **Error Code:**\`1120\`<br>
        A valid invitation to join the Zoom account was not found for this user.<br>
        This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.`,
      },
    });
  }

  /**
   * Update a TSP account
   * Update a user's TSP account.<br><br>
   * **Scopes:** `tsp:write:admin` `tsp:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * @returns void
   * @throws ApiError
   */
  public userTspUpdate({
    userId,
    tspId,
    requestBody,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * TSP account ID.
     */
    tspId: '1' | '2';
    /**
     * TSP account.
     */
    requestBody: {
      /**
       * Conference code: numeric value, length is less than 16.
       */
      conference_code: string;
      /**
       * List of dial in numbers.
       */
      dial_in_numbers?: Array<{
        /**
         * Country code.
         */
        code?: string;
        /**
         * Country Label, if passed, will display in place of code.
         */
        country_label?: string;
        /**
         * Dial-in number: length is less than 16.
         */
        number?: string;
        /**
         * Dial-in number types:<br>`toll` - Toll number.<br>`tollfree` -Toll free number.<br>`media_link` - Media Link Phone Number. It is used for PSTN integration instead of paid bridge number.
         */
        type?: 'toll' | 'tollfree' | 'media_link';
      }>;
      /**
       * Leader PIN: numeric value, length is less than 16.
       */
      leader_pin: string;
      /**
       * Telephony bridge
       */
      tsp_bridge?: 'US_TSP_TB' | 'EU_TSP_TB';
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/users/{userId}/tsp/{tspId}',
      path: {
        userId: userId,
        tspId: tspId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request.<br>
         **Error Code:**\`2024\`<br>
        Account has not enabled TSP.<br>
         **Error Code:**\`300\`<br>
        The TSP id provided does not exist.<br>
         **Error Code:**\`300\`<br>
        TSP Config does not exist.<br>
         **Error Code:**\`300\`<br>
        At least one tsp config must be available.<br>
         **Error Code:**\`300\`<br>
        Media link is required for AT&T TSP accounts.
         **Error Code:**\`300\`<br>
        Invalid parameter: tsp_bridge.
        `,
        404: `**HTTP Status Code:** \`404\`<br>
        Not Found.<br>
         **Error Code:** \`1001\`<br>
        User does not exist: $userId.<br>
         **Error Code:**\`1120\`<br>
        A valid invitation to join the Zoom account was not found for this user.<br>
        This error is thrown if you added a user in your account but the user did not accept the invitation on time and the invitation expired - thus making the userId invalid.`,
      },
    });
  }
}
