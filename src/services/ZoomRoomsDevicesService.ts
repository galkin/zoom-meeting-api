/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ZoomRoomsDevicesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Delete a Zoom Room user device
   * Use this API to delete a Zoom Room device.
   *
   * **Prerequisites:** <br>
   * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
   * * Account owner or admin permissions.
   * **Scopes**: `room:write:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public deleteDevice({
    roomId,
    deviceId,
  }: {
    /**
     * The Zoom Room ID.
     */
    roomId: string;
    /**
     * The Mac or Windows device ID. The value of this field can be retrieved from the [**List Zoom Room devices**](/docs/api-reference/zoom-api/methods#operation/listZRDevices) API.
     */
    deviceId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/rooms/{roomId}/devices/{deviceId}',
      path: {
        roomId: roomId,
        deviceId: deviceId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\`
        `,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`4061\` <br>
        Room device  service does not exist: {serviceId}`,
      },
    });
  }

  /**
   * Change Zoom Rooms app version
   * Use this API to [upgrade or downgrade](https://support.zoom.us/hc/en-us/articles/204675449-Upgrade-or-Downgrade-Zoom-Rooms-Software) the version of your installed Zoom Rooms app on your Mac or Windows device.
   *
   * **Scopes:** `room:write:admin`
   *
   * **Prerequisites:**
   * * A Pro or a higher account with Zoom Rooms.
   * * The Zoom Rooms software must be installed on a Mac or a Windows device. This API does not support other devices.
   * @returns void
   * @throws ApiError
   */
  public changeZoomRoomsAppVersion({
    roomId,
    deviceId,
    requestBody,
  }: {
    /**
     * Unique Identifier of the Zoom Room.
     */
    roomId: string;
    /**
     * Unique Identifier of the Mac or the Windows device. The value of this field can be retrieved from the [**List Zoom Room devices**](/docs/api-reference/zoom-api/methods#operation/listZRDevices) API.
     */
    deviceId: string;
    requestBody?: {
      /**
       * Specify one of the following values for this field:
       *
       * `upgrade`: Upgrade to the latest Zoom Rooms App Version.<br>
       * `downgrade`: Downgrade the Zoom Rooms App Version.<br>
       * `cancel`: Cancel an ongoing upgrade or downgrade process.
       */
      action?: 'upgrade' | 'downgrade' | 'cancel';
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/rooms/{roomId}/devices/{deviceId}/app_version',
      path: {
        roomId: roomId,
        deviceId: deviceId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`8001\` <br> Cannot process this upgrade request. The Zoom Rooms Software in this device is either already up to date or is currently being updated.  <br>  <br>
         **Error Code:** \`8002\` <br> Cannot process the downgrade request. The target version for downgrading is not available or the downgrade process has already been initiated. <br>  <br>
         **Error Code:** \`8003\` <br>  The cancel request could not be processed because the Zoom Rooms Software in this device is not being downgraded or upgraded at the moment. The cancel action should only be used to cancel an ongoing upgrade or downgrade process. <br>  <br>
         **Error Code:** \`8004\` <br> A device with the provided Device ID: {deviceId} does not belong to the current room: {roomId}.`,
      },
    });
  }
}
