/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WorkspacesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List workspaces
   * Use this API to list a location's workspaces.
   *
   * **Scopes:** `workspace:read`, `workspace:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` <br>
   * Workspace list returned.
   * @throws ApiError
   */
  public listWorkspaces({
    locationId,
    pageSize = 30,
    nextPageToken,
  }: {
    /**
     * The location's ID.
     */
    locationId: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
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
     * The number of records returned within a single API call.
     */
    page_size?: number;
    /**
     * The total number of records returned.
     */
    total_records?: number;
    /**
     * Information about the workspace.
     */
    workspaces?: Array<{
      /**
       * The workspace's ID.
       */
      id?: string;
      /**
       * The workspace's name.
       */
      workspace_name?: string;
      /**
       * The workspace's type:
       * * `desk`
       * * `room`
       */
      workspace_type?: 'desk' | 'room';
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workspaces',
      query: {
        location_id: locationId,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`2\` <br>
         * ZR core service is disabled. Try again later.
         * ZR core system error. Try again later.

         **Error Code:** \`200\` <br>
         * Zoom Workspace Reservation subscription was not found. Try again after purchasing a Zoom Workspace Reservation subscription.`,
      },
    });
  }

  /**
   * Get a location's hot desk usage
   * Use this API to get a location's [hot desk](https://en.wikipedia.org/wiki/Hot_desking) usage information.
   *
   * **Scopes:** `workspace:read`, `workspace:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` <br>
   * Hot desk usage information returned.
   * @throws ApiError
   */
  public getHotDeskUsage({
    locationId,
  }: {
    /**
     * The location's ID.
     */
    locationId: string;
  }): CancelablePromise<{
    /**
     * Information about the workspace desk usage.
     */
    desk_usage?: {
      /**
       * The number of desks in use.
       */
      in_use?: number;
      /**
       * The number of desks not in use.
       */
      not_in_use?: number;
    };
    /**
     * Information about the workspace room usage.
     */
    room_usage?: {
      /**
       * The number of workspaces in use.
       */
      in_use?: number;
      /**
       * The number of workspaces not in use.
       */
      not_in_use?: number;
    };
    /**
     * Information about the total workspace usage.
     */
    total_usage?: {
      /**
       * The total number in use.
       */
      in_use?: number;
      /**
       * The total number not in use.
       */
      not_in_use?: number;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workspaces/usage',
      query: {
        location_id: locationId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`2\`
         * ZR core service is disabled. Try again later.
         * ZR core system error. Try again later.

         **Error Code:** \`200\` <br>
         * Zoom Workspace Reservation subscription was not found. Try again after purchasing a Zoom Workspace Reservation subscription.`,
      },
    });
  }

  /**
   * Get a workspace's reservations
   * Use this API to get a workspace's reservations.
   *
   * **Scopes:** `workspace:read`, `workspace:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` <br>
   * Reservations returned.
   * @throws ApiError
   */
  public listReservations({
    workspaceId,
    from,
    to,
    userId,
  }: {
    /**
     * The workspace's ID.
     */
    workspaceId: string;
    /**
     * The start date of the query.
     */
    from?: string;
    /**
     * The end date of the query. Can be up to 14 days in the future.
     */
    to?: string;
    /**
     * The ID of the user for whom to create a workspace reservation.
     */
    userId?: string;
  }): CancelablePromise<{
    /**
     * The queried start date and time.
     */
    from?: string;
    reservations?: Array<{
      /**
       * The reservation's end time.
       */
      end_time?: string;
      /**
       * The reservation's ID.
       */
      id?: string;
      /**
       * The reservation's start time.
       */
      start_time?: string;
      /**
       * The reservation's timezone.
       */
      timezone?: string;
      /**
       * The reservation's topic.
       */
      topic?: string;
      /**
       * Zoom User ID of the workspace reservation.
       */
      user_id?: string;
    }>;
    /**
     * The queried end date and time.
     */
    to?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workspaces/{workspaceId}/reservations',
      path: {
        workspaceId: workspaceId,
      },
      query: {
        from: from,
        to: to,
        user_id: userId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`2\`
         * ZR core service is disabled. Try again later.
         * ZR core system error. Try again later.

         **Error Code:** \`200\` <br>
         * Zoom Workspace Reservation subscription was not found. Try again after purchasing a Zoom Workspace Reservation subscription.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`1001\` <br>
        User does not exist: {userId}`,
      },
    });
  }

  /**
   * Create a reservation
   * Use this API to create a workspace reservation.
   *
   * **Scopes:** `workspace:write`, `workspace:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `201` <br>
   * reservation created.
   * @throws ApiError
   */
  public createReservation({
    workspaceId,
    requestBody,
  }: {
    /**
     * The workspace's ID.
     */
    workspaceId: string;
    requestBody?: {
      /**
       * The reservation's end time.
       */
      end_time: string;
      /**
       * The reservation's meeting settings. You must provide this information if the requested workspace's `type` is the `room` value.
       */
      meeting?: {
        /**
         * Whether to enable end-to-end encryption (E2EE). When enabled, the encryption key is stored on the local device and cannot be obtained by anyone else. Enabling E2EE also [disables certain features](https://support.zoom.us/hc/en-us/articles/360048660871), such as cloud recording, live streaming, and allowing participants to join before the host.
         */
        end_to_end_encrypted?: boolean;
        /**
         * The meeting's passcode, up to a maximum of 10 characters. This value can only contain the following characters:
         *
         * `a`-`z` `A`-`Z` `0`-`9` `@` `-` `_` `*`
         *
         * **Note:** If the account owner or administrator has configured a [minimum passcode requirement setting](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), this value must meet those requirements. You can view password requirements by calling the [**Get user settings**](/docs/api-reference/zoom-api/methods#operation/userSettings) API or the [**Get account settings**](/docs/api-reference/zoom-api/ma#operation/accountSettings) API.
         */
        password?: string;
        /**
         * Whether participants are placed in the [**Waiting Room**](https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room) when they join a meeting.
         */
        waiting_room?: boolean;
      };
      /**
       * The reservation's start time.
       */
      start_time: string;
      /**
       * The reservation's topic.
       */
      topic: string;
      /**
       * The ID of the user for whom to create a workspace reservation.
       */
      reserve_for?: string;
    };
  }): CancelablePromise<{
    /**
     * The reservation's ID.
     */
    'reservation_id '?: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workspaces/{workspaceId}/reservations',
      path: {
        workspaceId: workspaceId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`2\`
         * ZR core service is disabled. Try again later.
         * ZR core system error. Try again later.

         **Error Code:** \`300\` <br>
        Invalid date and time range.

         **Error Code:** \`8201\` <br>
        Failed to reserve workspace.

         **Error Code:** \`200\` <br>
         * Zoom Workspace Reservation subscription was not found. Try again after purchasing a Zoom Workspace Reservation subscription.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`1001\` <br>
         * User does not exist: {userId}.`,
      },
    });
  }

  /**
   * Get a workspace QR code
   * Use this API to get the workspace QR code.
   *
   * **Scopes:** `workspace:read`, `workspace:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` <br>
   * QR code returned.
   * @throws ApiError
   */
  public getWorkspaceQrCode({
    workspaceId,
  }: {
    /**
     * The workspace's ID.
     */
    workspaceId: string;
  }): CancelablePromise<{
    /**
     * The URL to the workspace QR code.
     */
    qr_code?: string;
    /**
     * The number of seconds the QR code is valid for before it expires.
     */
    expire_in?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/workspaces/{workspaceId}/qr_code',
      path: {
        workspaceId: workspaceId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`2\`
         * ZR core service is disabled. Try again later.
         * ZR core system error. Try again later.


         **Error Code:** \`8203\`
         * Failed to generate QR code.

         **Error Code:** \`200\` <br>
         * Zoom Workspace Reservation subscription was not found. Try again after purchasing a Zoom Workspace Reservation subscription.`,
      },
    });
  }

  /**
   * Delete a reservation
   * Use this API to delete a reservation.
   *
   * **Scopes:** `workspace:write`, `workspace:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `202` <br>
   * Accepted.
   * @throws ApiError
   */
  public deleteReservation({
    workspaceId,
    reservationId,
  }: {
    /**
     * The workspace's ID.
     */
    workspaceId: string;
    /**
     * The reservation's ID.
     */
    reservationId: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/workspaces/{workspaceId}/reservations/{reservationId}',
      path: {
        workspaceId: workspaceId,
        reservationId: reservationId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`2\`
         * ZR core service is disabled. Try again later.
         * ZR core system error. Try again later.

         **Error Code:** \`200\` <br>
         * Zoom Workspace Reservation subscription was not found. Try again after purchasing a Zoom Workspace Reservation subscription.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`8202\`
         * Workspace Reservation does not exist.`,
      },
    });
  }

  /**
   * Update a reservation
   * Use this API to update a reservation.
   *
   * **Scopes:** `workspace:write`, `workspace:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `202` <br>
   * Accepted.
   * @throws ApiError
   */
  public updateReservation({
    workspaceId,
    reservationId,
    requestBody,
  }: {
    /**
     * The workspace's ID.
     */
    workspaceId: string;
    /**
     * The reservation's ID.
     */
    reservationId: string;
    requestBody?: {
      /**
       * The reservation's end time.
       */
      end_time: string;
      /**
       * The reservation's start time.
       */
      start_time: string;
      /**
       * The reservation's topic.
       */
      topic: string;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/workspaces/{workspaceId}/reservations/{reservationId}',
      path: {
        workspaceId: workspaceId,
        reservationId: reservationId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`2\`
         * ZR core service is disabled. Try again later.
         * ZR core system error. Try again later.

         **Error Code:** \`300\` <br>
        Invalid date and time range.

         **Error Code:** \`200\` <br>
         * Zoom Workspace Reservation subscription was not found. Try again after purchasing a Zoom Workspace Reservation subscription.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`8202\`
         * Workspace Reservation does not exist.`,
      },
    });
  }

  /**
   * Check in/out of a reservation
   * Use this API to check in to or out of a reservation.
   *
   * **Scopes:** `workspace:write`, `workspace:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public reservationEvent({
    requestBody,
  }: {
    requestBody?: {
      /**
       * The method that you would like to control.
       */
      method?: 'check_in' | 'check_out';
      /**
       * Use **workspace_id** & **user_id** or just **reservation_id** to define which reservation to check in or check out
       */
      params?: {
        /**
         * The workspace's ID.
         */
        workspace_id?: string;
        /**
         * The user's ID.
         */
        user_id?: string;
        /**
         * The reservation's ID.
         */
        reservation_id?: string;
      };
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/workspaces/events',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`2\`
         * ZR core service is disabled. Try again later.
         * ZR core system error. Try again later.

         **Error Code:** \`200\` <br>
         * Zoom Workspace Reservation subscription was not found. Try again after purchasing a Zoom Workspace Reservation subscription.`,
      },
    });
  }
}
