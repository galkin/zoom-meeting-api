/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DeprecatedApiEndpointsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @deprecated
   * List past meeting's files
   * **Note: This API has been deprecated and is no longer supported due to GCM encryption updates for security purposes.** To learn about saving the in-meeting chat files via Zoom Client, refer to the [Saving in-meeting chat](https://support.zoom.us/hc/en-us/articles/115004792763-Saving-in-meeting-chat) guide.
   *
   * List files sent via in-meeting chat during a meeting. The in-meeting files are deleted after 24 hours of the meeting completion time.
   * <br><br>
   * **Scope:** `meeting:read`, `meeting:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Files retrieved successfully.
   * @throws ApiError
   */
  public listPastMeetingFiles({
    meetingId,
  }: {
    /**
     * The meeting's ID.
     *
     * When storing this value in your database, you must store it as a long format integer and **not** an integer. Meeting IDs can exceed 10 digits.
     */
    meetingId: number;
  }): CancelablePromise<{
    in_meeting_files?: Array<{
      /**
       * URL to download the file.
       */
      download_url?: string;
      /**
       * Name of the file.
       */
      file_name?: string;
      /**
       * Size of the file in bytes.
       */
      file_size?: number;
    }>;
    /**
     * The total number of files found.
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/past_meetings/{meetingId}/files',
      path: {
        meetingId: meetingId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account: {accountId}.`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>
         **Error Code:** \`3001\`<br>
        Meeting ID is invalid or not end.`,
      },
    });
  }

  /**
   * @deprecated
   * List past webinar files
   * **Note: This API has been deprecated and is no longer supported due to GCM encryption updates for security purposes.**
   *
   * List files sent via in-meeting chat during a meeting. The in-meeting files are deleted after 24 hours of the meeting completion time.
   * <br><br>
   * **Scope:** `webinar:read`, `webinar:read:admin`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
   *
   *
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Files retrieved successfully.
   * @throws ApiError
   */
  public listPastWebinarFiles({ webinarId }: { webinarId: string }): CancelablePromise<{
    in_meeting_files?: Array<{
      /**
       * URL to download the file.
       */
      download_url?: string;
      /**
       * Name of the file.
       */
      file_name?: string;
      /**
       * Size of the file in bytes.
       */
      file_size?: number;
    }>;
    /**
     * The total number of files found.
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/past_webinars/{webinarId}/files',
      path: {
        webinarId: webinarId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account: {accountId}.`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br>
         **Error Code:** \`3001\`<br>
        Webinar ID is invalid or not end.`,
      },
    });
  }
}
