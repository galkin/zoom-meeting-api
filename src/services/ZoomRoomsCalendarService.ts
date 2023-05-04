/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoomRoomsCalendarService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List calendar services
   * Use this API to list all the existing [calendar services](https://support.zoom.us/hc/en-us/articles/4409832833037) in a Zoom Room account.
   *
   * **Scopes:** `room:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * A Pro or a higher plan with a [Zoom Rooms](https://zoom.us/zoomrooms) license.
   * @returns any **HTTP Status Code:** `200` <br>
   * Calendar services returned successfully.
   * @throws ApiError
   */
  public getCalendarServices(): CancelablePromise<{
    /**
     * Information about the calendar services.
     */
    calendar_services?: Array<{
      /**
       * The calendar service's ID.
       */
      calendar_service_id?: string;
      /**
       * The calender service's name.
       */
      calendar_service_name?: string;
      /**
       * The total number of calendar resources.
       */
      calendar_resource_total_number?: number;
      /**
       * The number of assigned calendar resources.
       */
      calendar_resource_assigned_number?: number;
      /**
       * The date and time at which the calendar service was added.
       */
      added_date_time?: string;
      /**
       * The date and time at which the calendar service was last synced.
       */
      latest_synced_date_time?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms/calendar/services',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\`
         * Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.
         * At least one normal Zoom Rooms required.`,
      },
    });
  }

  /**
   * Delete a calendar service
   * Use this API to delete a Zoom Room account's calendar service.
   *
   * **Scopes:** `room:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * A Pro or a higher plan with a [Zoom Rooms](https://zoom.us/zoomrooms) license.
   * @returns void
   * @throws ApiError
   */
  public deleteACalendarService({
    serviceId,
  }: {
    /**
     * The calendar service's ID.
     */
    serviceId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/rooms/calendar/services/{serviceId}',
      path: {
        serviceId: serviceId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\`
         * Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.
         * At least one normal Zoom Rooms required.

         **Error Code:** \`4005\` <br>
        Calendar resource assigned to a Zoom Room: {resourceId}`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`4061\` <br>
        Calendar service does not exist: {serviceId}`,
      },
    });
  }

  /**
   * Start calendar service sync process
   * Use this API to kick off the sync process for Zoom Room account's calendar service.
   *
   * **Scopes:** `room:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * A Pro or a higher plan with a [Zoom Rooms](https://zoom.us/zoomrooms) license.
   * @returns any **HTTP Status Code:** `202` **Accepted**
   * @throws ApiError
   */
  public syncACalendarService({
    serviceId,
  }: {
    /**
     * The calendar service's ID.
     */
    serviceId: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/rooms/calendar/services/{serviceId}/sync',
      path: {
        serviceId: serviceId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\`
         * Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.
         * At least one normal Zoom Rooms required.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`4061\` <br>
        Calendar service does not exist: {serviceId}`,
      },
    });
  }

  /**
   * List calendar resources by calendar service
   * Use this API to list all of a Zoom Room account's [calendar resources](https://support.zoom.us/hc/en-us/articles/4409832833037).
   *
   * **Scopes:** `room:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * A Pro or a higher plan with a [Zoom Rooms](https://zoom.us/zoomrooms) license.
   * @returns any **HTTP Status Code:** `200` <br>
   * Calendar resources successfully returned.
   * @throws ApiError
   */
  public getCalendarResourcesByServiceId({
    serviceId,
    pageSize = 30,
    nextPageToken,
  }: {
    /**
     * The calendar service's ID.
     */
    serviceId: string;
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
     * Information about existing calendar resources.
     */
    calendar_resources?: Array<{
      /**
       * The calendar resource's ID.
       */
      calendar_resource_id?: string;
      /**
       * The calendar resource's email address.
       */
      calendar_resource_email?: string;
      /**
       * The calendar resource's name.
       */
      calendar_resource_name?: string;
      /**
       * The Zoom Room user ID that the calendar resource is assigned to.
       */
      assigned_room_id?: string;
      /**
       * The calendar resource's sync status:
       * * `Success` — Synched.
       * * `Failed` — Not synced.
       */
      sync_status?: 'Success' | 'Failed';
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms/calendar/services/{serviceId}/resources',
      path: {
        serviceId: serviceId,
      },
      query: {
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\`
         * Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.
         * At least one normal Zoom Rooms required.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`4061\` <br>
        Calendar service does not exist: {serviceId}`,
      },
    });
  }

  /**
   * Add a calendar resource to a calendar service
   * Use this API to add a [calendar resource](https://support.zoom.us/hc/en-us/articles/4409832833037) to a Microsoft Exchange or Office 365 calendar service in a Zoom Room account.
   *
   * **Note:** This API does not support adding a calendar resource to a Google calendar service.
   *
   * **Scopes:** `room:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * A Pro or a higher plan with a [Zoom Rooms](https://zoom.us/zoomrooms) license.
   * @returns any **HTTP Status Code:** `201` <br>
   * Calendar resource successfully added.
   * @throws ApiError
   */
  public addACalendarResourceToCalendarService({
    serviceId,
    requestBody,
  }: {
    /**
     * The calendar service's ID.
     */
    serviceId: string;
    requestBody?: {
      /**
       * The calendar resource's email address.
       */
      calendar_resource_email: string;
    };
  }): CancelablePromise<{
    /**
     * The calendar resource's ID.
     */
    calendar_resource_id?: string;
    /**
     * The calendar resource's email address.
     */
    calendar_resource_email?: string;
    /**
     * The calendar resource's name.
     */
    calendar_resource_name?: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/rooms/calendar/services/{serviceId}/resources',
      path: {
        serviceId: serviceId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\`
         * Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.
         * At least one normal Zoom Rooms required.`,
        404: `**HTTP Status Code:** \`404\` **Not Found** <br><br>
         **Error Code:** \`4061\`<br>
        Calendar service does not exist: {serviceId}`,
      },
    });
  }

  /**
   * Get a calendar resource by ID
   * Use this API to get a Zoom Room account's [calendar resource](https://support.zoom.us/hc/en-us/articles/4409832833037).
   *
   * **Scopes:** `room:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * A Pro or a higher plan with a [Zoom Rooms](https://zoom.us/zoomrooms) license.
   * @returns any **HTTP Status Code:** `200` <br>
   * Calendar resources successfully returned.
   * @throws ApiError
   */
  public getCalendarResourceById({
    serviceId,
    resourceId,
  }: {
    /**
     * The calendar service's ID.
     */
    serviceId: string;
    /**
     * The calendar resource's ID.
     */
    resourceId: string;
  }): CancelablePromise<{
    /**
     * The calendar resource's ID.
     */
    calendar_resource_id?: string;
    /**
     * The calendar resource's email address.
     */
    calendar_resource_email?: string;
    /**
     * The calendar resource's name.
     */
    calendar_resource_name?: string;
    /**
     * The Zoom Room user ID that the calendar resource is assigned to.
     */
    assigned_room_id?: string;
    /**
     * The calendar resource's sync status:
     * * `Success` — Synched.
     * * `Failed` — Not synced.
     */
    sync_status?: 'Success' | 'Failed';
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/rooms/calendar/services/{serviceId}/resources/{resourceId}',
      path: {
        serviceId: serviceId,
        resourceId: resourceId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\`
         * Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.
         * At least one normal Zoom Rooms required.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`4061\` <br>
        Calendar service does not exist: {serviceId}

         **Error Code:** \`4060\` <br>
        Calendar resource does not exist: {resourceId}`,
      },
    });
  }

  /**
   * Delete a calendar resource
   * Use this API to delete a Zoom Room account's [calendar resource](https://support.zoom.us/hc/en-us/articles/4409832833037) from a Microsoft Exchange or Office 365 calendar service.
   *
   * **Note:** This API does not support deleting a calendar resource from a Google calendar service.
   *
   * **Scopes:** `room:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * A Pro or a higher plan with a [Zoom Rooms](https://zoom.us/zoomrooms) license.
   * @returns void
   * @throws ApiError
   */
  public deleteACalendarResource({
    serviceId,
    resourceId,
  }: {
    /**
     * The calendar service's ID.
     */
    serviceId: string;
    /**
     * The calendar resource's ID. You can get this value using the [**List Calendar Resources**](/docs/api-reference/zoom-api/methods#operation/listCalendarResources) API.
     */
    resourceId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/rooms/calendar/services/{serviceId}/resources/{resourceId}',
      path: {
        serviceId: serviceId,
        resourceId: resourceId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\`
         * Zoom Room subscription not found. Try again after purchasing a Zoom Room subscription.
         * At least one normal Zoom Rooms required.

         **Error Code:** \`4005\` <br>
        Calendar resource assigned to a Zoom Room: {resourceId}`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`4061\` <br>
        Calendar service does not exist: {serviceId}

         **Error Code:** \`4060\` <br>
        Calendar resource does not exist: {resourceId}`,
      },
    });
  }
}
