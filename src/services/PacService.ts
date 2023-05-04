/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PacService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List a user's PAC accounts
   * Use this API to list a user's [Personal Audio Conference (PAC)](https://support.zoom.us/hc/en-us/articles/204517069-Getting-Started-with-Personal-Audio-Conference) accounts. For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * PAC allows Pro or higher account holders to host meetings through PSTN (phone dial-in) only.
   *
   * **Scopes:** `pac:read:admin`, `pac:read` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro or higher plan with an [Audio Conferencing](https://support.zoom.us/hc/en-us/articles/204517069-Getting-Started-with-Personal-Audio-Conference) subscription.
   * * The [**Personal Audio Conference**](https://support.zoom.us/hc/en-us/articles/204517069-Getting-Started-with-Personal-Audio-Conference#h_01F5BPM447M6QDJXX50RSFXKJ3) setting enabled in the user's profile.
   * @returns any **HTTP Status Code:** `200` <br>
   * PAC account list returned.
   * @throws ApiError
   */
  public userPaCs({
    userId,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
  }): CancelablePromise<{
    /**
     * Information about the PAC accounts.
     */
    pac_accounts?: Array<{
      /**
       * The conference ID.
       */
      conference_id?: number;
      /**
       * Information about the account's dedicated dial-in numbers.
       */
      dedicated_dial_in_number?: Array<{
        /**
         * The dial-in country code.
         */
        country?: string;
        /**
         * The dial-in number.
         */
        number?: string;
      }>;
      /**
       * Information about the account's global dial-in numbers.
       */
      global_dial_in_numbers?: Array<{
        /**
         * The global dial-in country code.
         */
        country?: string;
        /**
         * The global dial-in number.
         */
        number?: string;
      }>;
      /**
       * The listen-only password, up to six characters in length.
       */
      listen_only_password?: string;
      /**
       * The participant password, up to six characters in length.
       */
      participant_password?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}/pac',
      path: {
        userId: userId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`2024\` <br>
        User does not have PAC enabled.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`1001\` <br>
        User does not exist: $userId`,
      },
    });
  }
}
