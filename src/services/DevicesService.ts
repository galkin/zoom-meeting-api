/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DevicesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List H.323/SIP devices
   * A H.323 or SIP device can make a video call to a [Room Connector](https://support.zoom.us/hc/en-us/articles/201363273-Getting-Started-With-H-323-SIP-Room-Connector) to join a Zoom cloud meeting. A Room Connector can also call out to a H.323 or SIP device to join a Zoom cloud meeting. Use this API to list all H.323/SIP Devices on a Zoom account.<br><br>
   * **Scopes:** `h323:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
   * @returns any **HTTP Status Code:** `200`<br>
   * List of H.323/SIP devices returned.<br>
   * **Error Code:** `200`<br>
   * No permission.
   * @throws ApiError
   */
  public deviceList({
    pageSize = 30,
    pageNumber = 1,
    nextPageToken,
  }: {
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
     * List of H.323/SIP Device objects.
     */
    devices?: Array<{
      /**
       * Device ID.
       */
      id?: string;
      /**
       * Device encryption:<br>`auto` - auto.<br>`yes` - yes.<br>`no` - no.
       */
      encryption: 'auto' | 'yes' | 'no';
      /**
       * Device IP.
       */
      ip: string;
      /**
       * Device name.
       */
      name: string;
      /**
       * Device protocol:<br>`H.323` - H.323.<br>`SIP` - SIP.
       */
      protocol: 'H.323' | 'SIP';
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/h323/devices',
      query: {
        page_size: pageSize,
        page_number: pageNumber,
        next_page_token: nextPageToken,
      },
    });
  }

  /**
   * Create a H.323/SIP device
   * A H.323 or SIP device can make a video call to a [Room Connector](https://support.zoom.us/hc/en-us/articles/201363273-Getting-Started-With-H-323-SIP-Room-Connector) to join a Zoom cloud meeting. A Room Connector can also call out to a H.323 or SIP device to join a Zoom cloud meeting. Use this API to add a H.323/SIP device to your Zoom account<br><br>
   * **Scopes:** `h323:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` <br>
   * @returns any **Error Code:** `200`<br>
   * No permission.
   * @throws ApiError
   */
  public deviceCreate({
    requestBody,
  }: {
    /**
     * H.323/SIP device.
     */
    requestBody: {
      /**
       * Device encryption:<br>`auto` - auto.<br>`yes` - yes.<br>`no` - no.
       */
      encryption: 'auto' | 'yes' | 'no';
      /**
       * Device IP.
       */
      ip: string;
      /**
       * Device name.
       */
      name: string;
      /**
       * Device protocol:<br>`H.323` - H.323.<br>`SIP` - SIP.
       */
      protocol: 'H.323' | 'SIP';
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/h323/devices',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`2020\`<br>
        H.323 device's display name:{displayName} is already in use.
        `,
      },
    });
  }

  /**
   * Delete a H.323/SIP device
   * A H.323 or SIP device can make a video call to a [Room Connector](https://support.zoom.us/hc/en-us/articles/201363273-Getting-Started-With-H-323-SIP-Room-Connector) to join a Zoom cloud meeting. A Room Connector can also call out to a H.323 or SIP device to join a Zoom cloud meeting. Use this API to delete a H.323/SIP device from your Zoom account.<br><br>
   * **Scopes:** `h323:write:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   * @returns any You do not have the permission to delete this device.
   * @throws ApiError
   */
  public deviceDelete({
    deviceId,
  }: {
    /**
     * The device ID.
     */
    deviceId: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/h323/devices/{deviceId}',
      path: {
        deviceId: deviceId,
      },
      errors: {
        300: `H.323 device does not exist: {deviceId}.`,
        404: `H.323/SIP device not found.`,
      },
    });
  }

  /**
   * Update a H.323/SIP device
   * A H.323 or SIP device can make a video call to a [Room Connector](https://support.zoom.us/hc/en-us/articles/201363273-Getting-Started-With-H-323-SIP-Room-Connector) to join a Zoom cloud meeting. A Room Connector can also call out to a H.323 or SIP device to join a Zoom cloud meeting. Use this API to edit information of a H.323/SIP device from your Zoom account.<br><br>
   * **Scopes:** `h323:write:admin`<br>
   * <br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns void
   * @throws ApiError
   */
  public deviceUpdate({
    deviceId,
    requestBody,
  }: {
    /**
     * The device ID.
     */
    deviceId: string;
    requestBody: {
      /**
       * Device encryption:<br>`auto` - auto.<br>`yes` - yes.<br>`no` - no.
       */
      encryption: 'auto' | 'yes' | 'no';
      /**
       * Device IP.
       */
      ip: string;
      /**
       * Device name.
       */
      name: string;
      /**
       * Device protocol:<br>`H.323` - H.323.<br>`SIP` - SIP.
       */
      protocol: 'H.323' | 'SIP';
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/h323/devices/{deviceId}',
      path: {
        deviceId: deviceId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**Error Code:** \`300\`<br>
        H.323 Device does not exist: {deviceId}.`,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`2020\`<br>
        H.323 device's display name:{displayName} is already in use.
        `,
      },
    });
  }
}
