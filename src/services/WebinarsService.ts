/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WebinarsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get webinar absentees
   * List absentees of a webinar.<br><br>
   * **Scopes:** `webinar:read:admin` `webinar:read`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
   * @returns any **HTTP Status Code:** `200`<br>
   * Success.<br>**Error Code:** `200`<br>
   * Webinar plan subscription is missing. Enable webinar for this user once the subscription is added:{userId}.
   * @throws ApiError
   */
  public webinarAbsentees({
    webinarUuid,
    occurrenceId,
    pageSize = 30,
    nextPageToken,
  }: {
    /**
     * The Webinar UUID. Each Webinar instance will generate its own Webinar UUID (i.e., after a Webinar ends, a new UUID will be generated for the next instance of the Webinar). Please double encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    webinarUuid: string;
    /**
     * The meeting or webinar occurrence ID.
     */
    occurrenceId?: string;
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
     * List of registrant objects.
     */
    registrants?: Array<{
      /**
       * Registrant ID.
       */
      id?: string;
      /**
       * The registrant's address.
       */
      address?: string;
      /**
       * The registrant's city.
       */
      city?: string;
      /**
       * The registrant's questions and comments.
       */
      comments?: string;
      /**
       * The registrant's two-letter [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
       */
      country?: string;
      /**
       * Information about custom questions.
       */
      custom_questions?: Array<{
        /**
         * The title of the custom question.
         */
        title?: string;
        /**
         * The custom question's response value. This has a limit of 128 characters.
         */
        value?: string;
      }>;
      /**
       * The registrant's email address. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for return value details.
       */
      email: string;
      /**
       * The registrant's first name.
       */
      first_name: string;
      /**
       * The registrant's industry.
       */
      industry?: string;
      /**
       * The registrant's job title.
       */
      job_title?: string;
      /**
       * The registrant's last name.
       */
      last_name?: string;
      /**
       * The registrant's number of employees:
       * * `1-20`
       * * `21-50`
       * * `51-100`
       * * `101-250`
       * * `251-500`
       * * `501-1,000`
       * * `1,001-5,000`
       * * `5,001-10,000`
       * * `More than 10,000`
       */
      no_of_employees?: '' | '1-20' | '21-50' | '51-100' | '101-250' | '251-500' | '501-1,000' | '1,001-5,000' | '5,001-10,000' | 'More than 10,000';
      /**
       * The registrant's organization.
       */
      org?: string;
      /**
       * The registrant's phone number.
       */
      phone?: string;
      /**
       * The registrant's purchasing time frame:
       * * `Within a month`
       * * `1-3 months`
       * * `4-6 months`
       * * `More than 6 months`
       * * `No timeframe`
       */
      purchasing_time_frame?: '' | 'Within a month' | '1-3 months' | '4-6 months' | 'More than 6 months' | 'No timeframe';
      /**
       * The registrant's role in the purchase process:
       * * `Decision Maker`
       * * `Evaluator/Recommender`
       * * `Influencer`
       * * `Not involved`
       */
      role_in_purchase_process?: '' | 'Decision Maker' | 'Evaluator/Recommender' | 'Influencer' | 'Not involved';
      /**
       * The registrant's state or province.
       */
      state?: string;
      /**
       * The status of the registrant's registration. <br> `approved`: User has been successfully approved for the webinar.<br> `pending`:  The registration is still pending.<br> `denied`: User has been denied from joining the webinar.
       */
      status?: 'approved' | 'denied' | 'pending';
      /**
       * The registrant's ZIP or postal code.
       */
      zip?: string;
      /**
       * The time at which the registrant registered.
       */
      create_time?: string;
      /**
       * The URL using which an approved registrant can join the meeting or webinar.
       */
      join_url?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/past_webinars/{WebinarUUID}/absentees',
      path: {
        WebinarUUID: webinarUuid,
      },
      query: {
        occurrence_id: occurrenceId,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        300: `**Error Code:** \`300\`<br>Invalid webinar UUID.`,
        400: `**HTTP Status Code:** \`400\`<br>
         **Error Code:** \`300\`<br>
        The request could not be completed because you have provided an invalid occurrence ID: {occurrenceId}<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account:{accountId}.<br>
         **Error Code:** \`3000\`<br>
        This Webinar has not registration required: {webinarUUID}`,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`1001\`<br>
        User {userId} does not exist or does not belong to this account.<br>
         **Error Code:** \`3001\`<br>Meeting ID is invalid or not end.

        `,
      },
    });
  }

  /**
   * List past webinar instances
   * List past webinar instances.<br><br>
   * **Scopes:** `webinar:read:admin` `webinar:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   *
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * List of past webinar instances returned.
   * @throws ApiError
   */
  public pastWebinars({
    webinarId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
  }): CancelablePromise<{
    /**
     * List of ended webinar instances.
     */
    webinars?: Array<{
      /**
       * Start time.
       */
      start_time?: string;
      /**
       * Webinar UUID.
       */
      uuid?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/past_webinars/{webinarId}/instances',
      path: {
        webinarId: webinarId,
      },
      errors: {
        300: `**HTTP Status Code:** \`300\`<br>
        Invalid webinar ID.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar not found.`,
      },
    });
  }

  /**
   * List webinar participants
   * Use this API to list all the participants who attended a webinar hosted in the past.
   *
   * **Scopes:** `webinar:read:admin`, `webinar:read` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * A Pro or higher plan with a Webinar add-on.
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Participants list returned.
   * @throws ApiError
   */
  public listWebinarParticipants({
    webinarId,
    pageSize = 30,
    nextPageToken,
  }: {
    /**
     * The webinar's ID. To get this value, use the [**List webinars**](/docs/api-reference/zoom-api/methods#operation/webinars) API.
     */
    webinarId: string;
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
     * The number of pages returned for this request.
     */
    page_count?: number;
    /**
     * The total number of records returned from a single API call.
     */
    page_size?: number;
    participants?: Array<{
      /**
       * Unique identifier of the participant.
       */
      id?: string;
      /**
       * Name of the participant.
       */
      name?: string;
      /**
       * Email address of the participant. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
       */
      user_email?: string;
    }>;
    /**
     * The total number of records available across all pages.
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/past_webinars/{webinarId}/participants',
      path: {
        webinarId: webinarId,
      },
      query: {
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad request**<br>

         **Error Code:** \`200\`<br>
        No permission.<br>
        Only available for paid account: {accountId}.<br><br>
         **Error Code:**  \`300\`<br>
        The next page token is invalid or expired.
        `,
        404: `**HTTP Status Code:** \`404\`
         **Error Code:**\`3001\`<br>
        Webinar does not exist.`,
      },
    });
  }

  /**
   * List past webinar poll results
   * The polling feature for webinar allows you to create single choice or multiple choice polling questions for your webinars. Use this API to retrieve the results for Webinar Polls of a specific Webinar.
   *
   * **Prerequisites:**<br>
   * * [Webinar license](https://zoom.us/webinar)<br>
   * **Scopes**: `webinar:read:admin`, `webinar:read`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   *
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Polls returned successfully.
   * @throws ApiError
   */
  public listPastWebinarPollResults({
    webinarId,
  }: {
    /**
     * The webinar's ID or universally unique ID (UUID).
     * * If you provide a webinar ID, the API will return a response for the latest webinar instance.
     * * If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the webinar UUID before making an API request.
     */
    webinarId: string;
  }): CancelablePromise<{
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    questions?: Array<{
      /**
       * Email address of the user who submitted answers to the poll. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
       */
      email?: string;
      /**
       * Name of the user who submitted answers to the poll. If "anonymous" option is enabled for a poll, the participant's polling information will be kept anonymous and the value of `name` field will be "Anonymous Attendee".
       */
      name?: string;
      question_details?: Array<{
        /**
         * Answer submitted by the user.
         */
        answer?: string;
        /**
         * Date and time at which the answer to the poll was submitted.
         */
        date_time?: string;
        /**
         * Unique identifier of the poll.
         */
        polling_id?: string;
        /**
         * Question asked during the poll.
         */
        question?: string;
      }>;
    }>;
    /**
     * The start time of the Webinar.
     */
    start_time?: string;
    /**
     * Webinar UUID.
     */
    uuid?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/past_webinars/{webinarId}/polls',
      path: {
        webinarId: webinarId,
      },
      errors: {
        401: `**HTTP Status Code:** \`401\` **Unauthorized**<br>
         **Error Code:** \`1010\`<br>  User does not belong to this account:{accountId}.
        `,
        404: `**HTTP Status Code:** \`404\` **Not found**<br>
        Webinar not found.<br>

         **Error Code:** \`3001\`<br>
        Webinar ID is invalid or not end.<br>
        This webinar id does not belong to you:{webinarId}.
        `,
      },
    });
  }

  /**
   * List Q&A of past webinar
   * The [Question & Answer (Q&A)](https://support.zoom.us/hc/en-us/articles/203686015-Getting-Started-with-Question-Answer) feature for Webinars allows attendees to ask questions during the Webinar and for the panelists, co-hosts and host to answer their questions.<br>
   * Use this API to list Q&A of a specific Webinar.
   *
   * **Prerequisites:**<br>
   * * [Webinar license](https://zoom.us/webinar)<br>
   * **Scopes**: `webinar:read:admin`, `webinar:read`<br>
   * <br>
   *
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Q&A returned successfully.
   * @throws ApiError
   */
  public listPastWebinarQa({
    webinarId,
  }: {
    /**
     * The webinar's ID or universally unique ID (UUID).
     * * If you provide a webinar ID, the API will return a response for the latest webinar instance.
     * * If you provide a webinar UUID that begins with a `/` character or contains the `//` characters, you **must** double-encode the webinar UUID before making an API request.
     */
    webinarId: string;
  }): CancelablePromise<{
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    questions?: Array<{
      /**
       * Email address of the user. If the participant is **not** part of the host's account, this returns an empty string value, with some exceptions. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for details.
       */
      email?: string;
      /**
       * Name of the user. If "anonymous" option is enabled for the Q&A, the participant's  information will be kept anonymous and the value of `name` field will be "Anonymous Attendee".
       */
      name?: string;
      question_details?: Array<{
        /**
         * Answer submitted for the question. The value will be 'live answered' if this is a live answer.
         */
        answer?: string;
        /**
         * Question asked during the Q&A.
         */
        question?: string;
      }>;
    }>;
    /**
     * The start time of the Webinar.
     */
    start_time?: string;
    /**
     * Webinar UUID.
     */
    uuid?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/past_webinars/{webinarId}/qa',
      path: {
        webinarId: webinarId,
      },
      errors: {
        401: `**HTTP Status Code:** \`401\` **Unauthorized**<br>
         **Error Code:** \`1010\`<br>  User does not belong to this account:{accountId}.
        `,
        404: `**HTTP Status Code:** \`404\` **Not found**<br>
        Webinar not found.<br>

         **Error Code:** \`3001\`<br>
        Webinar ID is invalid or not end.<br>
        This webinar id does not belong to you:{webinarId}.
        `,
      },
    });
  }

  /**
   * List webinar templates
   * Use this API to list a user's [webinar templates](https://support.zoom.us/hc/en-us/articles/115001079746-Webinar-Templates). For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * When you schedule a webinar, you can save the settings for that webinar as a template for scheduling future webinars.  To use a template when scheduling a webinar, use the `id` value in this API response in the `template_id` field of the [**Create a webinar**](/docs/api-reference/zoom-api/methods#operation/webinarCreate) API.
   *
   * **Scopes:** `webinar:read`, `webinar:read:admin`
   *
   * **Prerequisites:**
   * * A Pro or a higher account with the [Zoom Webinar plan](https://zoom.us/pricing/webinar).
   * @returns any **HTTP Status Code:** `200` **OK** <br>
   * List of existing templates returned.
   * @throws ApiError
   */
  public listWebinarTemplates({
    userId,
  }: {
    /**
     * The user's ID. To get a user's ID, use the [**List users**](/docs/api-reference/zoom-api/ma#operation/users) API. For user-level apps, pass the `me` value instead of the user ID value.
     */
    userId: string;
  }): CancelablePromise<{
    /**
     * Information about the webinar templates.
     */
    templates?: Array<{
      /**
       * The webinar template's ID.
       */
      id?: string;
      /**
       * The webinar template's name.
       */
      name?: string;
    }>;
    /**
     * The total number of records returned.
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}/webinar_templates',
      path: {
        userId: userId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br>
         **Error Code:** \`200\`<br> Cannot use webinar API, you need to subscribe webinar plan and then enable webinar for this user:{userId}.<br>
         **Error Code:** \`1001\`<br>
         * User not exist: {userId}.
         * User {userId} does not exist or does not belong to this account.`,
      },
    });
  }

  /**
   * Create a webinar template
   * Use this API to create a webinar template from an existing webinar.
   *
   * **Scopes**: `webinar:write:admin`, `webinar:write`</br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `201`<br>
   * Webinar template created.
   * @throws ApiError
   */
  public webinarTemplateCreate({
    userId,
    requestBody,
  }: {
    /**
     * The user ID retrievable from the [List users](/api-reference/zoom-api/methods#operation/users) API.
     */
    userId: string;
    requestBody: {
      /**
       * The webinar ID in long (int64) format.
       */
      webinar_id?: number;
      /**
       * The webinar template's name.
       */
      name?: string;
      /**
       * If the field is set to true, the recurrence webinar template will be saved as the scheduled webinar.
       */
      save_recurrence?: boolean;
      /**
       * Overwrite an existing webinar template if the template is created from same existing webinar.
       */
      overwrite?: boolean;
    };
  }): CancelablePromise<{
    /**
     * The webinar template's ID.
     */
    id?: string;
    /**
     * The webinar template's name.
     */
    name?: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/users/{userId}/webinar_templates',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error code:** \`200\`<br>
        Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}.

         **Error code:** \`300\`<br>
        You can only create up to 40 webinar templates.

         **Error Code:** \`3000\` <br>
         * Cannot access meeting info.
         * Webinar template name already exists: {templateName}.

         **Error Code:** \`3001\` <br>
        Webinar does not exist: {webinarId}.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`1001\` <br>
         * User does not exist.
         * User {userId} does not exist or does not belong to this account.`,
      },
    });
  }

  /**
   * List webinars
   * Use this API to list all the webinars scheduled by or on-behalf a user (webinar host). For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing webinars. Webinars allow a host to broadcast a Zoom meeting to up to 10,000 attendees.
   *
   * **Note:** This API only returns a user's [unexpired webinars](https://support.zoom.us/hc/en-us/articles/201362373-Meeting-ID#h_c73f9b08-c1c0-4a1a-b538-e01ebb98e844).
   *
   * **Scopes:** `webinar:read:admin`, `webinar:read` </br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * A Pro or higher plan with the Webinar add-on.
   * @returns any **HTTP Status Code:** `200`<br>
   * List of webinar objects returned.
   * @throws ApiError
   */
  public webinars({
    userId,
    type = 'scheduled',
    pageSize = 30,
    pageNumber = 1,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    /**
     * The type of webinar:
     * * `scheduled` — All valid previous (unexpired) webinars, live webinars, and upcoming scheduled webinars.
     * * `upcoming` — All upcoming webinars, including live webinars.
     */
    type?: 'scheduled' | 'upcoming';
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.
     * @deprecated
     */
    pageNumber?: number;
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
     * List of webinar objects.
     */
    webinars?: Array<{
      /**
       * Webinar Description. The length of agenda gets truncated to 250 characters when you list all webinars for a user. To view the complete agenda, retrieve details for a single webinar, use the [**Get a webinar**](/docs/api-reference/zoom-api/methods#operation/webinar) API.
       */
      agenda?: string;
      /**
       * Time of webinar creation.
       */
      created_at?: string;
      /**
       * The webinar's duration, in minutes.
       */
      duration?: number;
      /**
       * The host's ID.
       */
      host_id?: string;
      /**
       * The webinar ID.
       */
      id?: number;
      /**
       * The URL to join the webinar.
       */
      join_url?: string;
      /**
       * The webinar's start time.
       */
      start_time?: string;
      /**
       * The webinar's [timezone](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#timezones).
       */
      timezone?: string;
      /**
       * The webinar's topic.
       */
      topic?: string;
      /**
       * The webinar type:
       * * `5` — A webinar.
       * * `6` — A recurring webinar without a fixed time.
       * * `9` — A recurring webinar with a fixed time.
       */
      type?: 5 | 6 | 9;
      /**
       * The webinar's universally unique identifier (UUID). Each webinar instance generates a webinar UUID.
       */
      uuid?: string;
      /**
       * Whether the webinar is `simulive`.
       */
      is_simulive?: boolean;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/users/{userId}/webinars',
      path: {
        userId: userId,
      },
      query: {
        type: type,
        page_size: pageSize,
        page_number: pageNumber,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`1001\`<br>
        User {userId} not exist or not belong to this account.`,
      },
    });
  }

  /**
   * Create a webinar
   * Use this API to schedule a webinar for a user (webinar host). For user-level apps, pass [the `me` value](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#mekeyword) instead of the `userId` parameter.
   *
   * Zoom users with a [Webinar plan](https://zoom.us/webinar) have access to creating and managing webinars. Webinars allow a host to broadcast a Zoom meeting to up to 10,000 attendees.
   *
   * **Scopes:** `webinar:write:admin`, `webinar:write`</br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * * This API has a daily rate limit of **100 requests per day**. The rate limit is applied to the `userId` of the **webinar host** used to make the request.
   *
   * **Prerequisites:**
   * * A Pro or higher plan with a Webinar add-on.
   * @returns any **HTTP Status Code:** `201`<br>
   * Webinar created.
   * @throws ApiError
   */
  public webinarCreate({
    userId,
    requestBody,
  }: {
    /**
     * The user ID or email address of the user. For user-level apps, pass the `me` value.
     */
    userId: string | 'me';
    requestBody: {
      /**
       * Webinar description.
       */
      agenda?: string;
      /**
       * Webinar duration (minutes). Used for scheduled webinars only.
       */
      duration?: number;
      /**
       * Webinar passcode. Passcode may only contain the following characters: [a-z A-Z 0-9 @ - _ * !]. Max of 10 characters.
       *
       * If "Require a passcode when scheduling new meetings" setting has been **enabled** **and** [locked](https://support.zoom.us/hc/en-us/articles/115005269866-Using-Tiered-Settings#locked) for the user, the passcode field will be autogenerated for the Webinar in the response even if it is not provided in the API request. <br><br>
       *
       * **Note:** If the account owner or the admin has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode value provided here must meet those requirements. <br><br>If the requirements are enabled, you can view those requirements by calling the [**Get account settings**](/docs/api-reference/zoom-api/ma#operation/accountSettings) API.
       */
      password?: string;
      /**
       * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
       */
      recurrence?: {
        /**
         * Select a date when the webinar will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
         */
        end_date_time?: string;
        /**
         * Select how many times the webinar will recur before it is canceled. (Cannot be used with "end_date_time".)
         */
        end_times?: number;
        /**
         * Use this field **only if you're scheduling a recurring webinar of type** `3` to state which day in a month, the webinar should recur. The value range is from 1 to 31.
         *
         * For instance, if you would like the webinar to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the webinar to recur once every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`.
         */
        monthly_day?: number;
        /**
         * Use this field **only if you're scheduling a recurring webinar of type** `3` to state the week of the month when the webinar should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the webinar should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
         */
        monthly_week?: -1 | 1 | 2 | 3 | 4;
        /**
         * Use this field **only if you're scheduling a recurring webinar of type** `3` to state a specific day in a week when the monthly webinar should recur. To use this field, you must also use the `monthly_week` field. <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
         */
        monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        /**
         * Define the interval at which the webinar should recur. For instance, if you would like to schedule a Webinar that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`.
         *
         * For a daily webinar, the maximum interval you can set is `90` days. For a weekly webinar, the maximum interval that you can set is `12` weeks. For a monthly webinar, the maximum interval that you can set is `3` months.
         */
        repeat_interval?: number;
        /**
         * Recurrence webinar types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
         */
        type: 1 | 2 | 3;
        /**
         * Use this field **only if you're scheduling a recurring webinar of type** `2` to state which day(s) of the week the webinar should repeat. <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the Webinar should recur on Sunday, provide `"1"` as the value of this field.  <br><br> **Note:** If you would like the webinar to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the Webinar should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
         *
         * <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
         *
         *
         */
        weekly_days?: string;
      };
      /**
       * Create Webinar settings.
       */
      settings?: {
        /**
         * Allow attendees to join from multiple devices.
         */
        allow_multiple_devices?: boolean;
        /**
         * Alternative host emails or IDs. Multiple values separated by comma.
         */
        alternative_hosts?: string;
        /**
         * Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher.
         */
        alternative_host_update_polls?: boolean;
        /**
         * The default value is `2`. To enable registration required, set the approval type to `0` or `1`.  Values include:<br>
         *
         * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
         */
        approval_type?: 0 | 1 | 2;
        /**
         * Send reminder email to attendees and panelists.
         */
        attendees_and_panelists_reminder_email_notification?: {
          /**
           * * `true`: Send reminder email to attendees and panelists.
           *
           * * `false`: Do not send reminder email to attendees and panelists.
           */
          enable?: boolean;
          /**
           * `0` - No plan.<br>`1` - Send 1 hour before webinar.<br>`2` - Send 1 day before webinar.<br>`3` - Send 1 hour and 1 day before webinar.<br>`4` - Send 1 week before webinar.<br>`5` - Send 1 hour and 1 week before webinar.<br>`6` - Send 1 day and 1 week before webinar.<br>`7` - Send 1 hour, 1 day and 1 week before webinar.
           */
          type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /**
         * Determine how participants can join the audio portion of the meeting.(Not supported for simulive webinar.)
         */
        audio?: 'both' | 'telephony' | 'voip';
        /**
         * Meeting authentication domains. This option, allows you to specify the rule so that Zoom users, whose email address contains a certain domain, can join the Webinar. You can either provide multiple domains, using a comma in between and/or use a wildcard for listing domains.
         */
        authentication_domains?: string;
        /**
         * Specify the authentication type for users to join a Webinar with`meeting_authentication` setting set to `true`. The value of this field can be retrieved from the `id` field within `authentication_options` array in the response of [**Get user settings**](/docs/api-reference/zoom-api/methods#operation/userSettings) API.
         */
        authentication_option?: string;
        /**
         * Automatic recording (not supported for simulive webinar): <br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
         */
        auto_recording?: 'local' | 'cloud' | 'none';
        /**
         * Close registration after event date.
         * @deprecated
         */
        close_registration?: boolean;
        /**
         * Contact email for registration
         */
        contact_email?: string;
        /**
         * Contact name for registration
         */
        contact_name?: string;
        /**
         * Set the email language to one of the following:
         * `en-US`,`de-DE`,`es-ES`,`fr-FR`,`jp-JP`,`pt-PT`,`ru-RU`,`zh-CN`, `zh-TW`, `ko-KO`, `it-IT`, `vi-VN`.
         */
        email_language?: string;
        /**
         * Only signed-in users can join this meeting.
         *
         * **This field is deprecated and will not be supported in future.** <br><br> Instead of this field, use the "meeting_authentication", "authentication_option" and/or "authentication_domains" fields to establish the authentication mechanism for this Webinar.
         * @deprecated
         */
        enforce_login?: boolean;
        /**
         * Only signed-in users with specified domains can join meetings.
         *
         * **This field is deprecated and will not be supported in future.** <br><br> Instead of this field, use the "authentication_domains" field for this Webinar.
         * @deprecated
         */
        enforce_login_domains?: string;
        /**
         * Send follow-up email to absentees.
         */
        follow_up_absentees_email_notification?: {
          /**
           * * `true`: Send follow-up email to absentees.
           *
           * * `false`: Do not send follow-up email to absentees.
           */
          enable?: boolean;
          /**
           * `0` - No plan.<br>`1` - Send 1 days after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
           */
          type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /**
         * Send follow-up email to attendees.
         */
        follow_up_attendees_email_notification?: {
          /**
           * * `true`: Send follow-up email to attendees.
           *
           * * `false`: Do not send follow-up email to attendees.
           */
          enable?: boolean;
          /**
           * `0` - No plan.<br>`1` - Send 1 day after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
           */
          type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /**
         * List of global dial-in countries
         */
        global_dial_in_countries?: Array<string>;
        /**
         * Default to HD video.(Not supported for simulive webinar.)
         */
        hd_video?: boolean;
        /**
         * Whether HD video for attendees is enabled. This value defaults to `false`.(Not supported for simulive webinar.)
         */
        hd_video_for_attendees?: boolean;
        /**
         * Start video when host joins webinar.(Not supported for simulive webinar.)
         */
        host_video?: boolean;
        /**
         * The webinar's [language interpretation settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars). Make sure to add the language in the web portal in order to use it in the API. See link for details.
         *
         * **Note:** This feature is only available for certain Webinar add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the webinar. This is not supported for simulive webinars.
         */
        language_interpretation?: {
          /**
           * Enable [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars) for the webinar.
           */
          enable?: boolean;
          /**
           * Information about the webinar's language interpreters.
           */
          interpreters?: Array<{
            /**
             * The interpreter's email address.
             */
            email?: string;
            /**
             * A comma-separated list of the interpreter's languages. The string must contain two [country IDs](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
             *
             * For example, if the interpreter will translate from English to Chinese, then this value will be `US,CN`.
             */
            languages?: string;
          }>;
        };
        /**
         * Require panelists to authenticate to join
         */
        panelist_authentication?: boolean;
        /**
         * Only [authenticated](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) users can join meeting if the value of this field is set to `true`.
         */
        meeting_authentication?: boolean;
        /**
         * Add watermark that identifies the viewing participant.(Not supported for simulive webinar.)
         */
        add_watermark?: boolean;
        /**
         * Add audio watermark that identifies the participants.(Not supported for simulive webinar.)
         */
        add_audio_watermark?: boolean;
        /**
         * Make the webinar on-demand.(Not supported for simulive webinar.)
         */
        on_demand?: boolean;
        /**
         * Send invitation email to panelists (If `false`, do not send invitation email to panelists).
         */
        panelists_invitation_email_notification?: boolean;
        /**
         * Start video when panelists join webinar.(Not supported for simulive webinar.)
         */
        panelists_video?: boolean;
        /**
         * Zoom will open a survey page in attendees' browsers after leaving the webinar
         */
        post_webinar_survey?: boolean;
        /**
         * Enable practice session.
         */
        practice_session?: boolean;
        /**
         * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
         */
        question_and_answer?: {
          /**
           * * `true`: Allow participants to send questions without providing their name to the host, co-host, and panelists..
           *
           * * `false`: Do not allow anonymous questions.(Not supported for simulive webinar.)
           */
          allow_anonymous_questions?: boolean;
          /**
           * Indicate whether you want attendees to be able to view answered questions only or view all questions.
           *
           * * `only`: Attendees are able to view answered questions only.
           *
           * *  `all`: Attendees are able to view all questions submitted in the Q&A.
           */
          answer_questions?: 'only' | 'all';
          /**
           * * `true`: Attendees can answer questions or leave a comment in the question thread.
           *
           * * `false`: Attendees can not answer questions or leave a comment in the question thread
           */
          attendees_can_comment?: boolean;
          /**
           * * `true`: Attendees can click the thumbs up button to bring popular questions to the top of the Q&A window.
           *
           * * `false`: Attendees can not click the thumbs up button on questions.
           */
          attendees_can_upvote?: boolean;
          /**
           * If simulive webinar,
           *
           * * `true`: allow auto-reply to attendees.
           *
           * * `false`: don't allow auto-reply to the attendees.
           */
          allow_auto_reply?: boolean;
          /**
           * If `allow_auto_reply` = true, the text to be included in the automatic response.
           */
          auto_reply_text?: string;
          /**
           * * `true`: Enable [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
           *
           * * `false`: Disable Q&A for webinar.
           */
          enable?: boolean;
        };
        /**
         * Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field.
         */
        registrants_email_notification?: boolean;
        /**
         * Restrict number of registrants for a webinar. By default, it is set to `0`. A `0` value means that the restriction option is disabled. Provide a number higher than 0 to restrict the webinar registrants by the that number.
         */
        registrants_restrict_number?: number;
        /**
         * Registration types. Only used for recurring webinars with a fixed time.<br>`1` - Attendees register once and can attend any of the webinar sessions.<br>`2` - Attendees need to register for each session in order to attend.<br>`3` - Attendees register once and can choose one or more sessions to attend.
         */
        registration_type?: 1 | 2 | 3;
        /**
         * Whether to always send 1080p video to attendees. This value defaults to `false`.(Not supported for simulive webinar.)
         */
        send_1080p_video_to_attendees?: boolean;
        /**
         * Show social share buttons on the registration page.
         */
        show_share_button?: boolean;
        /**
         * Survey url for post webinar survey
         */
        survey_url?: string;
        /**
         * Whether the **Webinar Session Branding** setting is enabled. This setting lets hosts visually customize a webinar by setting a session background. This also lets hosts set Virtual Background and apply name tags to hosts, alternative hosts, panelists, interpreters, and speakers.
         */
        enable_session_branding?: boolean;
      };
      /**
       * Webinar start time. We support two formats for `start_time` - local time and GMT.<br>
       *
       * To set time as GMT the format should be `yyyy-MM-dd`T`HH:mm:ssZ`.
       *
       * To set time using a specific timezone, use `yyyy-MM-dd`T`HH:mm:ss` format and specify the timezone [ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#timezones) in the `timezone` field OR leave it blank and the timezone set on your Zoom account will be used. You can also set the time as UTC as the timezone field.
       *
       * The `start_time` should only be used for scheduled and / or recurring webinars with fixed time.
       */
      start_time?: string;
      /**
       * The webinar template ID with which to schedule a webinar using a [webinar template](https://support.zoom.us/hc/en-us/articles/115001079746-Webinar-Templates). For a list of webinar templates, use the [**List webinar templates**](https://marketplace.zoom.us/docs/api-reference/zoom-api/methods#operation/listWebinarTemplates) API.
       */
      template_id?: string;
      /**
       * Time zone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [timezone](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#timezones) list for supported time zones and their formats.
       */
      timezone?: string;
      /**
       * Webinar topic.
       */
      topic?: string;
      /**
       * Tracking fields
       */
      tracking_fields?: Array<{
        /**
         * Tracking fields type
         */
        field: string;
        /**
         * Tracking fields value
         */
        value?: string;
      }>;
      /**
       * Webinar Types:<br>`5` - Webinar.<br>`6` - Recurring webinar with no fixed time.<br>`9` - Recurring webinar with a fixed time.
       */
      type?: 5 | 6 | 9;
      /**
       * Whether to set the webinar simulive.
       */
      is_simulive?: boolean;
      /**
       * The previously recorded file's ID for `simulive`.
       */
      record_file_id?: string;
    };
  }): CancelablePromise<{
    /**
     * Email address of the meeting host.
     */
    host_email?: string;
    /**
     * ID of the user set as host of the webinar.
     */
    host_id?: string;
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    /**
     * Specify whether or not registrants of this Webinar should receive confirmation emails.
     */
    registrants_confirmation_email?: boolean;
    /**
     * Unique identifier of the Webinar template. Use this field only if you would like to [schedule the webinar using an existing template](https://support.zoom.us/hc/en-us/articles/115001079746-Webinar-Templates#schedule). The value of this field can be retrieved from [**List webinar templates**](/docs/api-reference/zoom-api/methods#operation/listWebinarTemplates) API.
     * You must provide the user ID of the host instead of the email address in the `userId` path parameter in order to use a template for scheduling a Webinar.
     */
    template_id?: string;
    /**
     * Unique identifier of a Webinar. Each Webinar instance will generate its own UUID(i.e., after a Webinar ends, a new UUID will be generated for the next instance of the Webinar). Once a Webinar ends, the value of uuid for the same webinar will be different from when it was scheduled.
     */
    uuid?: string;
    /**
     * Webinar agenda.
     */
    agenda?: string;
    /**
     * Create time.
     */
    created_at?: string;
    /**
     * Webinar duration.
     */
    duration?: number;
    /**
     * URL to join the Webinar. This URL should only be shared with the users who should be invited to the Webinar.
     */
    join_url?: string;
    /**
     * Array of occurrence objects.
     */
    occurrences?: Array<{
      /**
       * Duration.
       */
      duration?: number;
      /**
       * Occurrence ID: Unique Identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences.
       */
      occurrence_id?: string;
      /**
       * Start time.
       */
      start_time?: string;
      /**
       * Occurrence status.
       */
      status?: string;
    }>;
    /**
     * Webinar passcode.
     *
     * If "Require a passcode when scheduling new meetings" setting has been **enabled** **and** [locked](https://support.zoom.us/hc/en-us/articles/115005269866-Using-Tiered-Settings#locked) for the user, the passcode field will be autogenerated for the Webinar in the response even if it is not provided in the API request. <br><br>
     * **Note:** If the account owner or the admin has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode value provided here must meet those requirements. <br><br>If the requirements are enabled, you can view those requirements by calling either the [**Get user settings**](/docs/api-reference/zoom-api/methods#operation/userSettings) API or the [**Get account settings**](/docs/api-reference/zoom-api/ma#operation/accountSettings) API.
     */
    password?: string;
    /**
     * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
     */
    recurrence?: {
      /**
       * Select a date when the webinar will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
       */
      end_date_time?: string;
      /**
       * Select how many times the webinar will recur before it is canceled. (Cannot be used with "end_date_time".)
       */
      end_times?: number;
      /**
       * Use this field **only if you're scheduling a recurring webinar of type** `3` to state which day in a month, the webinar should recur. The value range is from 1 to 31.
       *
       * For instance, if you would like the webinar to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the webinar to recur once every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`.
       */
      monthly_day?: number;
      /**
       * Use this field **only if you're scheduling a recurring webinar of type** `3` to state the week of the month when the webinar should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the webinar should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
       */
      monthly_week?: -1 | 1 | 2 | 3 | 4;
      /**
       * Use this field **only if you're scheduling a recurring webinar of type** `3` to state a specific day in a week when the monthly webinar should recur. To use this field, you must also use the `monthly_week` field. <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
       */
      monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
      /**
       * Define the interval at which the webinar should recur. For instance, if you would like to schedule a Webinar that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`.
       *
       * For a daily webinar, the maximum interval you can set is `90` days. For a weekly webinar, the maximum interval that you can set is `12` weeks. For a monthly webinar, the maximum interval that you can set is `3` months.
       */
      repeat_interval?: number;
      /**
       * Recurrence webinar types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
       */
      type: 1 | 2 | 3;
      /**
       * Use this field **only if you're scheduling a recurring webinar of type** `2` to state which day(s) of the week the webinar should repeat. <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the Webinar should recur on Sunday, provide `"1"` as the value of this field.  <br><br> **Note:** If you would like the webinar to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the Webinar should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
       *
       * <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
       *
       *
       */
      weekly_days?: string;
    };
    /**
     * Webinar settings.
     */
    settings?: {
      /**
       * Allow attendees to join from multiple devices.
       */
      allow_multiple_devices?: boolean;
      /**
       * Alternative host emails or IDs. Multiple values separated by comma.
       */
      alternative_hosts?: string;
      /**
       * Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher.
       */
      alternative_host_update_polls?: boolean;
      /**
       * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
       */
      approval_type?: 0 | 1 | 2;
      /**
       * Send reminder email to attendees and panelists.
       */
      attendees_and_panelists_reminder_email_notification?: {
        /**
         * * `true`: Send reminder email to attendees and panelists.
         *
         * * `false`: Do not send reminder email to attendees and panelists.
         */
        enable?: boolean;
        /**
         * `0` - No plan.<br>`1` - Send 1 hour before webinar.<br>`2` - Send 1 day before webinar.<br>`3` - Send 1 hour and 1 day before webinar.<br>`4` - Send 1 week before webinar.<br>`5` - Send 1 hour and 1 week before webinar.<br>`6` - Send 1 day and 1 week before webinar.<br>`7` - Send 1 hour, 1 day and 1 week before webinar.
         */
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
      };
      /**
       * Determine how participants can join the audio portion of the webinar.
       */
      audio?: 'both' | 'telephony' | 'voip';
      /**
       * If user has configured ["Sign Into Zoom with Specified Domains"](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated.
       */
      authentication_domains?: string;
      /**
       * Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f).
       */
      authentication_name?: string;
      /**
       * Webinar authentication option id.
       */
      authentication_option?: string;
      /**
       * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
       */
      auto_recording?: 'local' | 'cloud' | 'none';
      /**
       * Close registration after event date.
       * @deprecated
       */
      close_registration?: boolean;
      /**
       * Contact email for registration
       */
      contact_email?: string;
      /**
       * Contact name for registration
       */
      contact_name?: string;
      /**
       * Set the email language to one of the following:
       * `en-US`,`de-DE`,`es-ES`,`fr-FR`,`jp-JP`,`pt-PT`,`ru-RU`,`zh-CN`, `zh-TW`, `ko-KO`, `it-IT`, `vi-VN`.
       */
      email_language?: string;
      /**
       * Only signed in users can join this meeting.
       *
       * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the Webinar.
       * @deprecated
       */
      enforce_login?: boolean;
      /**
       * Only signed in users with specified domains can join meetings.
       *
       * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the Webinar.
       * @deprecated
       */
      enforce_login_domains?: string;
      /**
       * Send follow-up email to absentees.
       */
      follow_up_absentees_email_notification?: {
        /**
         * * `true`: Send follow-up email to absentees.
         *
         * * `false`: Do not send follow-up email to absentees.
         */
        enable?: boolean;
        /**
         * `0` - No plan.<br>`1` - Send 1 days after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
         */
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
      };
      /**
       * Send follow-up email to attendees.
       */
      follow_up_attendees_email_notification?: {
        /**
         * * `true`: Send follow-up email to attendees.
         *
         * * `false`: Do not send follow-up email to attendees.
         */
        enable?: boolean;
        /**
         * `0` - No plan.<br>`1` - Send 1 day after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
         */
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
      };
      /**
       * List of global dial-in countries
       */
      global_dial_in_countries?: Array<string>;
      /**
       * Default to HD video.
       */
      hd_video?: boolean;
      /**
       * Whether HD video for attendees is enabled.
       */
      hd_video_for_attendees?: boolean;
      /**
       * Start video when host joins webinar.
       */
      host_video?: boolean;
      /**
       * The webinar's [language interpretation settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars). Make sure to add the language in the web portal in order to use it in the API. See link for details.
       *
       * **Note:** This feature is only available for certain Webinar add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the webinar.
       */
      language_interpretation?: {
        /**
         * Enable [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars) for the webinar.
         */
        enable?: boolean;
        /**
         * Information about the webinar's language interpreters.
         */
        interpreters?: Array<{
          /**
           * The interpreter's email address.
           */
          email?: string;
          /**
           * A comma-separated list of the interpreter's languages. The string must contain two [country IDs](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
           *
           * For example, if the interpreter will translate from English to Chinese, then this value will be `US,CN`.
           */
          languages?: string;
        }>;
      };
      /**
       * Require panelists to authenticate to join
       */
      panelist_authentication?: boolean;
      /**
       * Only authenticated users can join Webinar.
       */
      meeting_authentication?: boolean;
      /**
       * Add watermark that identifies the viewing participant.
       */
      add_watermark?: boolean;
      /**
       * Add audio watermark that identifies the participants.
       */
      add_audio_watermark?: boolean;
      /**
       * Send notification email to registrants when the host updates a webinar.
       */
      notify_registrants?: boolean;
      /**
       * Make the webinar on-demand
       */
      on_demand?: boolean;
      /**
       * Send invitation email to panelists (If `false`, do not send invitation email to panelists).
       */
      panelists_invitation_email_notification?: boolean;
      /**
       * Start video when panelists join webinar.
       */
      panelists_video?: boolean;
      /**
       * Zoom will open a survey page in attendees' browsers after leaving the webinar
       */
      post_webinar_survey?: boolean;
      /**
       * Enable practice session.
       */
      practice_session?: boolean;
      /**
       * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
       */
      question_and_answer?: {
        /**
         * * `true`: Allow participants to send questions without providing their name to the host, co-host, and panelists..
         *
         * * `false`: Do not allow anonymous questions.
         */
        allow_anonymous_questions?: boolean;
        /**
         * Indicate whether you want attendees to be able to view answered questions only or view all questions.
         *
         * * `only`: Attendees are able to view answered questions only.
         *
         * *  `all`: Attendees are able to view all questions submitted in the Q&A.
         */
        answer_questions?: 'only' | 'all';
        /**
         * * `true`: Attendees can answer questions or leave a comment in the question thread.
         *
         * * `false`: Attendees can not answer questions or leave a comment in the question thread
         */
        attendees_can_comment?: boolean;
        /**
         * * `true`: Attendees can click the thumbs up button to bring popular questions to the top of the Q&A window.
         *
         * * `false`: Attendees can not click the thumbs up button on questions.
         */
        attendees_can_upvote?: boolean;
        /**
         * If simulive webinar,
         *
         * * `true`: allow auto-reply to attendees.
         *
         * * `false`: don't allow auto-reply to the attendees.
         */
        allow_auto_reply?: boolean;
        /**
         * If `allow_auto_reply` = true, the text to be included in the automatic response.
         */
        auto_reply_text?: string;
        /**
         * * `true`: Enable [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
         *
         * * `false`: Disable Q&A for webinar.
         */
        enable?: boolean;
      };
      /**
       * Send confirmation email to registrants
       */
      registrants_confirmation_email?: boolean;
      /**
       * Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field.
       */
      registrants_email_notification?: boolean;
      /**
       * Restrict number of registrants for a webinar. By default, it is set to `0`. A `0` value means that the restriction option is disabled. Provide a number higher than 0 to restrict the webinar registrants by the that number.
       */
      registrants_restrict_number?: number;
      /**
       * Registration types. Only used for recurring webinars with a fixed time.<br>`1` - Attendees register once and can attend any of the webinar sessions.<br>`2` - Attendees need to register for each session in order to attend.<br>`3` - Attendees register once and can choose one or more sessions to attend.
       */
      registration_type?: 1 | 2 | 3;
      /**
       * Always send 1080p video to attendees.
       */
      send_1080p_video_to_attendees?: boolean;
      /**
       * Show social share buttons on the registration page.
       */
      show_share_button?: boolean;
      /**
       * Survey url for post webinar survey
       */
      survey_url?: string;
      /**
       * Whether the **Webinar Session Branding** setting is enabled. This setting lets hosts visually customize a webinar by setting a session background. This also lets hosts use [Webinar Session Branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) to set the Virtual Background for and apply name tags to hosts, alternative hosts, panelists, interpreters, and speakers.
       */
      enable_session_branding?: boolean;
    };
    /**
     * Webinar start time in GMT/UTC.
     */
    start_time?: string;
    /**
     * <br><aside>The <code>start_url</code> of a Webinar is a URL using which a host or an alternative host can start the Webinar. This URL should only be used by the host of the meeting and should not be shared with anyone other than the host of the Webinar.
     *
     * The expiration time for the <code>start_url</code> field listed in the response of the [**Create a webinar**](/docs/api-reference/zoom-api/methods#operation/webinarCreate) API is two hours for all regular users.
     *
     * For users created using the <code>custCreate</code> option via the [**Create users**](/docs/api-reference/zoom-api/methods#operation/userCreate) API, the expiration time of the <code>start_url</code> field is 90 days.
     *
     * For security reasons, to retrieve the latest value for the <code>start_url</code> field programmatically (after expiry), you must call the [**Get a webinar**](/docs/api-reference/zoom-api/methods#operation/webinar) API and refer to the value of the <code>start_url</code> field in the response.</aside><br><br><br>
     */
    start_url?: string;
    /**
     * Time zone to format start_time.
     */
    timezone?: string;
    /**
     * Webinar topic.
     */
    topic?: string;
    /**
     * Tracking fields
     */
    tracking_fields?: Array<{
      /**
       * Tracking fields type
       */
      field?: string;
      /**
       * Tracking fields value
       */
      value?: string;
    }>;
    /**
     * Webinar Types:<br>`5` - Webinar.<br>`6` - Recurring webinar with no fixed time.<br>`9` - Recurring webinar with a fixed time.
     */
    type?: 5 | 6 | 9;
    /**
     * Whether the webinar is `simulive`.
     */
    is_simulive?: boolean;
    /**
     * The previously recorded file's ID for `simulive`.
     */
    record_file_id?: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/users/{userId}/webinars',
      path: {
        userId: userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**HTTP Status Code:** \`300\`<br>
        A maximum of "{rateLimitNumber}" webinars can be created and updated for a single user in one day.`,
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`200\`
        Subscription plan for webinar is missing. Enable webinar for this user once the subscription plan is added:{userId}.<br>
         * Users in '{0}' have been blocked from joining meetings and webinars. To unblock them, go to the Settings page in the Zoom web portal and update 'Block users in specific domains from joining meetings and webinars'.

         **Error Code:** \`300\` <br>
         * The value that you entered for the schedule_for field is invalid. Enter a valid value and try again.<br>
         * Can not schedule simulive webinar for others.<br>
         * Account hasn't enabled Simulive Webinar.<br>
         * Record file does not exist.`,
        404: `**HTTP Status Code:** \`404\` **Not Found**<br><br>
         **Error Code:** \`1001\`<br>
        User {userId} not exist or not belong to this account.
        `,
      },
    });
  }

  /**
   * Delete a webinar
   * Delete a Webinar.<br><br>
   * **Scopes:** `webinar:write:admin` `webinar:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   * **Prerequisites:**<br>
   * * Pro or higher plan with a Webinar Add-on.
   * @returns any **HTTP Status Code:** `200`<br>
   * Success
   * @throws ApiError
   */
  public webinarDelete({
    webinarId,
    occurrenceId,
    cancelWebinarReminder,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * The meeting or webinar occurrence ID.
     */
    occurrenceId?: string;
    /**
     * `true`: Notify panelists and registrants about the webinar cancellation via email.
     *
     * `false`: Do not send any email notification to webinar registrants and panelists.
     *
     * The default value of this field is `false`.
     */
    cancelWebinarReminder?: boolean;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/webinars/{webinarId}',
      path: {
        webinarId: webinarId,
      },
      query: {
        occurrence_id: occurrenceId,
        cancel_webinar_reminder: cancelWebinarReminder,
      },
      errors: {
        300: `**HTTP Status Code:** \`300\`<br>Invalid webinar ID.`,
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account:{accountId}.<br>
         **Error Code:** \`3002\`<br>
        Sorry, you cannot delete this webinar since it is in progress.<br>
         **Error Code:** \`3003\`<br>
        You are not the webinar host.<br>
         **Error Code:** \`3007\`<br>
        Sorry, you cannot delete this webinar since it has ended.<br>
         **Error Code:** \`3018\`<br>
        Not allowed to delete PMI.<br>
         **Error Code:** \`3037\`<br>
        Not allowed to delete PAC.<br>`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar not found.<br>
         **Error Code:** \`1001\`<br>
        User {userId} does not exist or does not belong to this account.<br>
         **Error Code:** \`3001\`<br>
        Webinar {webinarId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * Get a webinar
   * Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees.<br>Use this API to get details of a scheduled webinar.<br><br>
   * **Scopes:** `webinar:read:admin` `webinar:read`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>**Prerequisites:**
   * * Pro or higher plan with a Webinar Add-on.
   * @returns any **HTTP Status Code:** `200`<br>
   * Success
   * @throws ApiError
   */
  public webinar({
    webinarId,
    occurrenceId,
    showPreviousOccurrences,
  }: {
    /**
     * The webinar's ID or universally unique ID (UUID).
     */
    webinarId: string;
    /**
     * Unique Identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences. When you create a recurring Webinar using [**Create a webinar**](/docs/api-reference/zoom-api/methods#operation/webinarCreate) API, you can retrieve the Occurrence ID from the response of the API call.
     */
    occurrenceId?: string;
    /**
     * Set the value of this field to `true` if you would like to view Webinar details of all previous occurrences of a recurring Webinar.
     */
    showPreviousOccurrences?: boolean;
  }): CancelablePromise<{
    /**
     * Email address of the meeting host.
     */
    host_email?: string;
    /**
     * ID of the user set as host of webinar.
     */
    host_id?: string;
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    /**
     * Unique Webinar ID. Each Webinar instance will generate its own Webinar UUID (i.e., after a Webinar ends, a new UUID will be generated for the next instance of the Webinar). You can retrieve a list of UUIDs from past Webinar instances using the [**List past webinar instances**](/docs/api-reference/zoom-api/methods#operation/pastWebinars) API. Please double encode your UUID when using it for API calls if the UUID begins with a `/` or contains `//` in it.
     *
     *
     */
    uuid?: string;
    /**
     * Webinar agenda.
     */
    agenda?: string;
    /**
     * Create time.
     */
    created_at?: string;
    /**
     * Webinar duration.
     */
    duration?: number;
    /**
     * URL to join the Webinar. This URL should only be shared with the users who should be invited to the Webinar.
     */
    join_url?: string;
    /**
     * Array of occurrence objects.
     */
    occurrences?: Array<{
      /**
       * Duration.
       */
      duration?: number;
      /**
       * Occurrence ID: Unique Identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences.
       */
      occurrence_id?: string;
      /**
       * Start time.
       */
      start_time?: string;
      /**
       * Occurrence status.
       */
      status?: string;
    }>;
    /**
     * Webinar passcode.
     *
     * If "Require a passcode when scheduling new meetings" setting has been **enabled** **and** [locked](https://support.zoom.us/hc/en-us/articles/115005269866-Using-Tiered-Settings#locked) for the user, the passcode field will be autogenerated for the Webinar in the response even if it is not provided in the API request. <br><br>
     * **Note:** If the account owner or the admin has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode value provided here must meet those requirements. <br><br>If the requirements are enabled, you can view those requirements by calling either the [**Get user settings**](/docs/api-reference/zoom-api/methods#operation/userSettings) API or the [**Get account settings**](/docs/api-reference/zoom-api/ma#operation/accountSettings) API.
     */
    password?: string;
    /**
     * Recurrence object. Use this object only for a webinar of type `9` i.e., a recurring webinar with fixed time.
     */
    recurrence?: {
      /**
       * Select a date when the webinar will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
       */
      end_date_time?: string;
      /**
       * Select how many times the webinar will recur before it is canceled. (Cannot be used with "end_date_time".)
       */
      end_times?: number;
      /**
       * Use this field **only if you're scheduling a recurring webinar of type** `3` to state which day in a month, the webinar should recur. The value range is from 1 to 31.
       *
       * For instance, if you would like the webinar to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the webinar to recur once every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`.
       */
      monthly_day?: number;
      /**
       * Use this field **only if you're scheduling a recurring webinar of type** `3` to state the week of the month when the webinar should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the webinar should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
       */
      monthly_week?: -1 | 1 | 2 | 3 | 4;
      /**
       * Use this field **only if you're scheduling a recurring webinar of type** `3` to state a specific day in a week when the monthly webinar should recur. To use this field, you must also use the `monthly_week` field. <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
       */
      monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
      /**
       * Define the interval at which the webinar should recur. For instance, if you would like to schedule a Webinar that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`.
       *
       * For a daily webinar, the maximum interval you can set is `90` days. For a weekly webinar, the maximum interval that you can set is `12` weeks. For a monthly webinar, the maximum interval that you can set is `3` months.
       */
      repeat_interval?: number;
      /**
       * Recurrence webinar types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
       */
      type: 1 | 2 | 3;
      /**
       * Use this field **only if you're scheduling a recurring webinar of type** `2` to state which day(s) of the week the webinar should repeat. <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the Webinar should recur on Sunday, provide `"1"` as the value of this field.  <br><br> **Note:** If you would like the webinar to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the Webinar should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
       *
       * <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
       *
       *
       */
      weekly_days?: string;
    };
    /**
     * Webinar settings.
     */
    settings?: {
      /**
       * Allow attendees to join from multiple devices.
       */
      allow_multiple_devices?: boolean;
      /**
       * Alternative host emails or IDs. Multiple values separated by comma.
       */
      alternative_hosts?: string;
      /**
       * Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher.
       */
      alternative_host_update_polls?: boolean;
      /**
       * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
       */
      approval_type?: 0 | 1 | 2;
      /**
       * Send reminder email to attendees and panelists.
       */
      attendees_and_panelists_reminder_email_notification?: {
        /**
         * * `true`: Send reminder email to attendees and panelists.
         *
         * * `false`: Do not send reminder email to attendees and panelists.
         */
        enable?: boolean;
        /**
         * `0` - No plan.<br>`1` - Send 1 hour before webinar.<br>`2` - Send 1 day before webinar.<br>`3` - Send 1 hour and 1 day before webinar.<br>`4` - Send 1 week before webinar.<br>`5` - Send 1 hour and 1 week before webinar.<br>`6` - Send 1 day and 1 week before webinar.<br>`7` - Send 1 hour, 1 day and 1 week before webinar.
         */
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
      };
      /**
       * Determine how participants can join the audio portion of the webinar.
       */
      audio?: 'both' | 'telephony' | 'voip';
      /**
       * If user has configured ["Sign Into Zoom with Specified Domains"](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated.
       */
      authentication_domains?: string;
      /**
       * Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f).
       */
      authentication_name?: string;
      /**
       * Webinar authentication option id.
       */
      authentication_option?: string;
      /**
       * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
       */
      auto_recording?: 'local' | 'cloud' | 'none';
      /**
       * Close registration after event date.
       * @deprecated
       */
      close_registration?: boolean;
      /**
       * Contact email for registration
       */
      contact_email?: string;
      /**
       * Contact name for registration
       */
      contact_name?: string;
      /**
       * Set the email language to one of the following:
       * `en-US`,`de-DE`,`es-ES`,`fr-FR`,`jp-JP`,`pt-PT`,`ru-RU`,`zh-CN`, `zh-TW`, `ko-KO`, `it-IT`, `vi-VN`.
       */
      email_language?: string;
      /**
       * Only signed in users can join this meeting.
       *
       * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the Webinar.
       * @deprecated
       */
      enforce_login?: boolean;
      /**
       * Only signed in users with specified domains can join meetings.
       *
       * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the Webinar.
       * @deprecated
       */
      enforce_login_domains?: string;
      /**
       * Send follow-up email to absentees.
       */
      follow_up_absentees_email_notification?: {
        /**
         * * `true`: Send follow-up email to absentees.
         *
         * * `false`: Do not send follow-up email to absentees.
         */
        enable?: boolean;
        /**
         * `0` - No plan.<br>`1` - Send 1 days after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
         */
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
      };
      /**
       * Send follow-up email to attendees.
       */
      follow_up_attendees_email_notification?: {
        /**
         * * `true`: Send follow-up email to attendees.
         *
         * * `false`: Do not send follow-up email to attendees.
         */
        enable?: boolean;
        /**
         * `0` - No plan.<br>`1` - Send 1 day after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
         */
        type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
      };
      /**
       * List of global dial-in countries
       */
      global_dial_in_countries?: Array<string>;
      /**
       * Default to HD video.
       */
      hd_video?: boolean;
      /**
       * Whether HD video for attendees is enabled.
       */
      hd_video_for_attendees?: boolean;
      /**
       * Start video when host joins webinar.
       */
      host_video?: boolean;
      /**
       * The webinar's [language interpretation settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars). Make sure to add the language in the web portal in order to use it in the API. See link for details.
       *
       * **Note:** This feature is only available for certain Webinar add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the webinar.
       */
      language_interpretation?: {
        /**
         * Enable [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars) for the webinar.
         */
        enable?: boolean;
        /**
         * Information about the webinar's language interpreters.
         */
        interpreters?: Array<{
          /**
           * The interpreter's email address.
           */
          email?: string;
          /**
           * A comma-separated list of the interpreter's languages. The string must contain two [country IDs](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
           *
           * For example, if the interpreter will translate from English to Chinese, then this value will be `US,CN`.
           */
          languages?: string;
        }>;
      };
      /**
       * Require panelists to authenticate to join
       */
      panelist_authentication?: boolean;
      /**
       * Only authenticated users can join Webinar.
       */
      meeting_authentication?: boolean;
      /**
       * Add watermark that identifies the viewing participant.
       */
      add_watermark?: boolean;
      /**
       * Add audio watermark that identifies the participants.
       */
      add_audio_watermark?: boolean;
      /**
       * Send notification email to registrants when the host updates a webinar.
       */
      notify_registrants?: boolean;
      /**
       * Make the webinar on-demand
       */
      on_demand?: boolean;
      /**
       * Send invitation email to panelists (If `false`, do not send invitation email to panelists).
       */
      panelists_invitation_email_notification?: boolean;
      /**
       * Start video when panelists join webinar.
       */
      panelists_video?: boolean;
      /**
       * Zoom will open a survey page in attendees' browsers after leaving the webinar
       */
      post_webinar_survey?: boolean;
      /**
       * Enable practice session.
       */
      practice_session?: boolean;
      /**
       * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
       */
      question_and_answer?: {
        /**
         * * `true`: Allow participants to send questions without providing their name to the host, co-host, and panelists..
         *
         * * `false`: Do not allow anonymous questions.
         */
        allow_anonymous_questions?: boolean;
        /**
         * Indicate whether you want attendees to be able to view answered questions only or view all questions.
         *
         * * `only`: Attendees are able to view answered questions only.
         *
         * *  `all`: Attendees are able to view all questions submitted in the Q&A.
         */
        answer_questions?: 'only' | 'all';
        /**
         * * `true`: Attendees can answer questions or leave a comment in the question thread.
         *
         * * `false`: Attendees can not answer questions or leave a comment in the question thread
         */
        attendees_can_comment?: boolean;
        /**
         * * `true`: Attendees can click the thumbs up button to bring popular questions to the top of the Q&A window.
         *
         * * `false`: Attendees can not click the thumbs up button on questions.
         */
        attendees_can_upvote?: boolean;
        /**
         * If simulive webinar,
         *
         * * `true`: allow auto-reply to attendees.
         *
         * * `false`: don't allow auto-reply to the attendees.
         */
        allow_auto_reply?: boolean;
        /**
         * If `allow_auto_reply` = true, the text to be included in the automatic response.
         */
        auto_reply_text?: string;
        /**
         * * `true`: Enable [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
         *
         * * `false`: Disable Q&A for webinar.
         */
        enable?: boolean;
      };
      /**
       * Send confirmation email to registrants
       */
      registrants_confirmation_email?: boolean;
      /**
       * Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field.
       */
      registrants_email_notification?: boolean;
      /**
       * Restrict number of registrants for a webinar. By default, it is set to `0`. A `0` value means that the restriction option is disabled. Provide a number higher than 0 to restrict the webinar registrants by the that number.
       */
      registrants_restrict_number?: number;
      /**
       * Registration types. Only used for recurring webinars with a fixed time.<br>`1` - Attendees register once and can attend any of the webinar sessions.<br>`2` - Attendees need to register for each session in order to attend.<br>`3` - Attendees register once and can choose one or more sessions to attend.
       */
      registration_type?: 1 | 2 | 3;
      /**
       * Always send 1080p video to attendees.
       */
      send_1080p_video_to_attendees?: boolean;
      /**
       * Show social share buttons on the registration page.
       */
      show_share_button?: boolean;
      /**
       * Survey url for post webinar survey
       */
      survey_url?: string;
      /**
       * Whether the **Webinar Session Branding** setting is enabled. This setting lets hosts visually customize a webinar by setting a session background. This also lets hosts use [Webinar Session Branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) to set the Virtual Background for and apply name tags to hosts, alternative hosts, panelists, interpreters, and speakers.
       */
      enable_session_branding?: boolean;
    };
    /**
     * Webinar start time in GMT/UTC.
     */
    start_time?: string;
    /**
     * <br><aside>The <code>start_url</code> of a Webinar is a URL using which a host or an alternative host can start the Webinar. This URL should only be used by the host of the meeting and should not be shared with anyone other than the host of the Webinar.
     *
     * The expiration time for the <code>start_url</code> field listed in the response of the [**Create a webinar**](/docs/api-reference/zoom-api/methods#operation/webinarCreate) API is two hours for all regular users.
     *
     * For users created using the <code>custCreate</code> option via the [**Create users**](/docs/api-reference/zoom-api/methods#operation/userCreate) API, the expiration time of the <code>start_url</code> field is 90 days.
     *
     * For security reasons, to retrieve the latest value for the <code>start_url</code> field programmatically (after expiry), you must call the [**Get a webinar**](/docs/api-reference/zoom-api/methods#operation/webinar) API and refer to the value of the <code>start_url</code> field in the response.</aside><br><br><br>
     */
    start_url?: string;
    /**
     * Time zone to format start_time.
     */
    timezone?: string;
    /**
     * Webinar topic.
     */
    topic?: string;
    /**
     * Tracking fields
     */
    tracking_fields?: Array<{
      /**
       * Tracking fields type
       */
      field?: string;
      /**
       * Tracking fields value
       */
      value?: string;
    }>;
    /**
     * Webinar Types:<br>`5` - Webinar.<br>`6` - Recurring webinar with no fixed time.<br>`9` - Recurring webinar with a fixed time.
     */
    type?: 5 | 6 | 9;
    /**
     * Whether the webinar is `simulive`.
     */
    is_simulive?: boolean;
    /**
     * The previously recorded file's ID for `simulive`.
     */
    record_file_id?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webinars/{webinarId}',
      path: {
        webinarId: webinarId,
      },
      query: {
        occurrence_id: occurrenceId,
        show_previous_occurrences: showPreviousOccurrences,
      },
      errors: {
        300: `**HTTP Status Code:** \`300\`<br>Invalid webinar ID.`,
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account:{accountId}.<br>`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar not found.<br>
         **Error Code:** \`1001\`<br>
        User {userId} does not exist or does not belong to this account.<br>
         **Error Code:** \`3001\`<br>
        Webinar {webinarId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * Update a webinar
   * Use this API to make updates to a scheduled webinar.
   *
   * **Scopes:** `webinar:write:admin`, `webinar:write` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * * This API has a daily rate limit of **100 requests per day**. The rate limit is applied to the `userId` of the **webinar host** used to make the request.
   *
   * **Prerequisites:**
   * * A Pro or higher plan with a Webinar add-on.
   * @returns any **HTTP Status Code:** `200`<br>
   * Webinar subscription plan is missing. Enable webinar for this user once the subscription is added:{userId}.
   * @throws ApiError
   */
  public webinarUpdate({
    webinarId,
    requestBody,
    occurrenceId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * Webinar.
     */
    requestBody: {
      /**
       * Webinar description.
       */
      agenda?: string;
      /**
       * Webinar duration (minutes). Used for scheduled webinar only.
       */
      duration?: number;
      /**
       * [Webinar passcode](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords). By default, passcode may only contain the following characters: [a-z A-Z 0-9 @ - _ * !] and can have a maximum of 10 characters.
       *
       * **Note:** If the account owner or the admin has configured [minimum passcode requirement settings](https://support.zoom.us/hc/en-us/articles/360033559832-Meeting-and-webinar-passwords#h_a427384b-e383-4f80-864d-794bf0a37604), the passcode value provided here must meet those requirements. <br><br>If the requirements are enabled, you can view those requirements by calling either the [**Get user settings**](/docs/api-reference/zoom-api/methods#operation/userSettings) API or the [**Get account settings**](/docs/api-reference/zoom-api/ma#operation/accountSettings) API.
       *
       * If "**Require a passcode when scheduling new meetings**" setting has been **enabled** **and** [locked](https://support.zoom.us/hc/en-us/articles/115005269866-Using-Tiered-Settings#locked) for the user, the passcode field will be autogenerated for the Webinar in the response even if it is not provided in the API request.
       */
      password?: string;
      /**
       * Recurrence object. Use this object only for a meeting with type `8` i.e., a recurring meeting with fixed time.
       */
      recurrence?: {
        /**
         * Select the final date on which the meeting will recur before it is canceled. Should be in UTC time, such as 2017-11-25T12:00:00Z. (Cannot be used with "end_times".)
         */
        end_date_time?: string;
        /**
         * Select how many times the meeting should recur before it is canceled. (Cannot be used with "end_date_time".)
         */
        end_times?: number;
        /**
         * Use this field **only if you're scheduling a recurring meeting of type** `3` to state which day in a month, the meeting should recur. The value range is from 1 to 31.
         *
         * For instance, if you would like the meeting to recur on 23rd of each month, provide `23` as the value of this field and `1` as the value of the `repeat_interval` field. Instead, if you would like the meeting to recur every three months, on 23rd of the month, change the value of the `repeat_interval` field to `3`.
         */
        monthly_day?: number;
        /**
         * Use this field **only if you're scheduling a recurring meeting of type** `3` to state the week of the month when the meeting should recur. If you use this field, **you must also use the `monthly_week_day` field to state the day of the week when the meeting should recur.** <br>`-1` - Last week of the month.<br>`1` - First week of the month.<br>`2` - Second week of the month.<br>`3` - Third week of the month.<br>`4` - Fourth week of the month.
         */
        monthly_week?: -1 | 1 | 2 | 3 | 4;
        /**
         * Use this field **only if you're scheduling a recurring meeting of type** `3` to state a specific day in a week when the monthly meeting should recur. To use this field, you must also use the `monthly_week` field.
         *
         * <br>`1` - Sunday.<br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` - Thursday.<br>`6` - Friday.<br>`7` - Saturday.
         */
        monthly_week_day?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
        /**
         * Define the interval at which the meeting should recur. For instance, if you would like to schedule a meeting that recurs every two months, you must set the value of this field as `2` and the value of the `type` parameter as `3`.
         *
         * For a daily meeting, the maximum interval you can set is `90` days. For a weekly meeting the maximum interval that you can set is  of `12` weeks. For a monthly meeting, there is a maximum of `3` months.
         *
         *
         */
        repeat_interval?: number;
        /**
         * Recurrence meeting types:<br>`1` - Daily.<br>`2` - Weekly.<br>`3` - Monthly.
         */
        type: 1 | 2 | 3;
        /**
         * This field is required **if you're scheduling a recurring meeting of type** `2` to state which day(s) of the week the meeting should repeat. <br> <br> The value for this field could be a number between `1` to `7` in string format. For instance, if the meeting should recur on Sunday, provide `"1"` as the value of this field.<br><br> **Note:** If you would like the meeting to occur on multiple days of a week, you should provide comma separated values for this field. For instance, if the meeting should recur on Sundays and Tuesdays provide `"1,3"` as the value of this field.
         *
         * <br>`1`  - Sunday. <br>`2` - Monday.<br>`3` - Tuesday.<br>`4` -  Wednesday.<br>`5` -  Thursday.<br>`6` - Friday.<br>`7` - Saturday.
         */
        weekly_days?: '1' | '2' | '3' | '4' | '5' | '6' | '7';
      };
      /**
       * Webinar settings.
       */
      settings?: {
        /**
         * Allow attendees to join from multiple devices.
         */
        allow_multiple_devices?: boolean;
        /**
         * Alternative host emails or IDs. Multiple values separated by comma.
         */
        alternative_hosts?: string;
        /**
         * Whether the **Allow alternative hosts to add or edit polls** feature is enabled. This requires Zoom version 5.8.0 or higher.
         */
        alternative_host_update_polls?: boolean;
        /**
         * `0` - Automatically approve.<br>`1` - Manually approve.<br>`2` - No registration required.
         */
        approval_type?: 0 | 1 | 2;
        /**
         * Send reminder email to attendees and panelists.
         */
        attendees_and_panelists_reminder_email_notification?: {
          /**
           * * `true`: Send reminder email to attendees and panelists.
           *
           * * `false`: Do not send reminder email to attendees and panelists.
           */
          enable?: boolean;
          /**
           * `0` - No plan.<br>`1` - Send 1 hour before webinar.<br>`2` - Send 1 day before webinar.<br>`3` - Send 1 hour and 1 day before webinar.<br>`4` - Send 1 week before webinar.<br>`5` - Send 1 hour and 1 week before webinar.<br>`6` - Send 1 day and 1 week before webinar.<br>`7` - Send 1 hour, 1 day and 1 week before webinar.
           */
          type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /**
         * Determine how participants can join the audio portion of the webinar.
         */
        audio?: 'both' | 'telephony' | 'voip';
        /**
         * If user has configured ["Sign Into Zoom with Specified Domains"](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f) option, this will list the domains that are authenticated.
         */
        authentication_domains?: string;
        /**
         * Authentication name set in the [authentication profile](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars#h_5c0df2e1-cfd2-469f-bb4a-c77d7c0cca6f).
         */
        authentication_name?: string;
        /**
         * Webinar authentication option id.
         */
        authentication_option?: string;
        /**
         * Automatic recording:<br>`local` - Record on local.<br>`cloud` -  Record on cloud.<br>`none` - Disabled.
         */
        auto_recording?: 'local' | 'cloud' | 'none';
        /**
         * Close registration after event date.
         * @deprecated
         */
        close_registration?: boolean;
        /**
         * Contact email for registration
         */
        contact_email?: string;
        /**
         * Contact name for registration
         */
        contact_name?: string;
        /**
         * Set the email language to one of the following:
         * `en-US`,`de-DE`,`es-ES`,`fr-FR`,`jp-JP`,`pt-PT`,`ru-RU`,`zh-CN`, `zh-TW`, `ko-KO`, `it-IT`, `vi-VN`.
         */
        email_language?: string;
        /**
         * Only signed in users can join this meeting.
         *
         * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the Webinar.
         * @deprecated
         */
        enforce_login?: boolean;
        /**
         * Only signed in users with specified domains can join meetings.
         *
         * **This field is deprecated and will not be supported in the future.**  <br><br>As an alternative, use the "meeting_authentication", "authentication_option" and "authentication_domains" fields to understand the [authentication configurations](https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-Meetings-and-Webinars) set for the Webinar.
         * @deprecated
         */
        enforce_login_domains?: string;
        /**
         * Send follow-up email to absentees.
         */
        follow_up_absentees_email_notification?: {
          /**
           * * `true`: Send follow-up email to absentees.
           *
           * * `false`: Do not send follow-up email to absentees.
           */
          enable?: boolean;
          /**
           * `0` - No plan.<br>`1` - Send 1 days after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
           */
          type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /**
         * Send follow-up email to attendees.
         */
        follow_up_attendees_email_notification?: {
          /**
           * * `true`: Send follow-up email to attendees.
           *
           * * `false`: Do not send follow-up email to attendees.
           */
          enable?: boolean;
          /**
           * `0` - No plan.<br>`1` - Send 1 day after the scheduled end date.<br>`2` - Send 2 days after the scheduled end date.<br>`3` - Send 3 days after the scheduled end date.<br>`4` - Send 4 days after the scheduled end date.<br>`5` - Send 5 days after the scheduled end date.<br>`6` - Send 6 days after the scheduled end date.<br>`7` - Send 7 days after the scheduled end date.
           */
          type?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
        };
        /**
         * List of global dial-in countries
         */
        global_dial_in_countries?: Array<string>;
        /**
         * Default to HD video.
         */
        hd_video?: boolean;
        /**
         * Whether HD video for attendees is enabled.
         */
        hd_video_for_attendees?: boolean;
        /**
         * Start video when host joins webinar.
         */
        host_video?: boolean;
        /**
         * The webinar's [language interpretation settings](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars). Make sure to add the language in the web portal in order to use it in the API. See link for details.
         *
         * **Note:** This feature is only available for certain Webinar add-on, Education, and Business and higher plans. If this feature is not enabled on the host's account, this setting will **not** be applied to the webinar.
         */
        language_interpretation?: {
          /**
           * Enable [language interpretation](https://support.zoom.us/hc/en-us/articles/360034919791-Language-interpretation-in-meetings-and-webinars) for the webinar.
           */
          enable?: boolean;
          /**
           * Information about the webinar's language interpreters.
           */
          interpreters?: Array<{
            /**
             * The interpreter's email address.
             */
            email?: string;
            /**
             * A comma-separated list of the interpreter's languages. The string must contain two [country IDs](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
             *
             * For example, if the interpreter will translate from English to Chinese, then this value will be `US,CN`.
             */
            languages?: string;
          }>;
        };
        /**
         * Require panelists to authenticate to join
         */
        panelist_authentication?: boolean;
        /**
         * Only authenticated users can join Webinar.
         */
        meeting_authentication?: boolean;
        /**
         * Add watermark that identifies the viewing participant.
         */
        add_watermark?: boolean;
        /**
         * Add audio watermark that identifies the participants.
         */
        add_audio_watermark?: boolean;
        /**
         * Send notification email to registrants when the host updates a webinar.
         */
        notify_registrants?: boolean;
        /**
         * Make the webinar on-demand
         */
        on_demand?: boolean;
        /**
         * Send invitation email to panelists (If `false`, do not send invitation email to panelists).
         */
        panelists_invitation_email_notification?: boolean;
        /**
         * Start video when panelists join webinar.
         */
        panelists_video?: boolean;
        /**
         * Zoom will open a survey page in attendees' browsers after leaving the webinar
         */
        post_webinar_survey?: boolean;
        /**
         * Enable practice session.
         */
        practice_session?: boolean;
        /**
         * [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
         */
        question_and_answer?: {
          /**
           * * `true`: Allow participants to send questions without providing their name to the host, co-host, and panelists..
           *
           * * `false`: Do not allow anonymous questions.
           */
          allow_anonymous_questions?: boolean;
          /**
           * Indicate whether you want attendees to be able to view answered questions only or view all questions.
           *
           * * `only`: Attendees are able to view answered questions only.
           *
           * *  `all`: Attendees are able to view all questions submitted in the Q&A.
           */
          answer_questions?: 'only' | 'all';
          /**
           * * `true`: Attendees can answer questions or leave a comment in the question thread.
           *
           * * `false`: Attendees can not answer questions or leave a comment in the question thread
           */
          attendees_can_comment?: boolean;
          /**
           * * `true`: Attendees can click the thumbs up button to bring popular questions to the top of the Q&A window.
           *
           * * `false`: Attendees can not click the thumbs up button on questions.
           */
          attendees_can_upvote?: boolean;
          /**
           * If simulive webinar,
           *
           * * `true`: allow auto-reply to attendees.
           *
           * * `false`: don't allow auto-reply to the attendees.
           */
          allow_auto_reply?: boolean;
          /**
           * If `allow_auto_reply` = true, the text to be included in the automatic response.
           */
          auto_reply_text?: string;
          /**
           * * `true`: Enable [Q&A](https://support.zoom.us/hc/en-us/articles/203686015-Using-Q-A-as-the-webinar-host#:~:text=Overview,and%20upvote%20each%20other's%20questions.) for webinar.
           *
           * * `false`: Disable Q&A for webinar.
           */
          enable?: boolean;
        };
        /**
         * Send confirmation email to registrants.
         */
        registrants_confirmation_email?: boolean;
        /**
         * Send email notifications to registrants about approval, cancellation, denial of the registration. The value of this field must be set to true in order to use the `registrants_confirmation_email` field.
         */
        registrants_email_notification?: boolean;
        /**
         * Restrict number of registrants for a webinar. By default, it is set to `0`. A `0` value means that the restriction option is disabled. Provide a number higher than 0 to restrict the webinar registrants by the that number.
         */
        registrants_restrict_number?: number;
        /**
         * Registration types. Only used for recurring webinars with a fixed time.<br>`1` - Attendees register once and can attend any of the webinar sessions.<br>`2` - Attendees need to register for each session in order to attend.<br>`3` - Attendees register once and can choose one or more sessions to attend.
         */
        registration_type?: 1 | 2 | 3;
        /**
         * Always send 1080p video to attendees.
         */
        send_1080p_video_to_attendees?: boolean;
        /**
         * Show social share buttons on the registration page.
         */
        show_share_button?: boolean;
        /**
         * Survey url for post webinar survey
         */
        survey_url?: string;
        /**
         * Whether the **Webinar Session Branding** setting is enabled. This setting lets hosts visually customize a webinar by setting a session background. This also lets hosts use [Webinar Session Branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) to set the Virtual Background for and apply name tags to hosts, alternative hosts, panelists, interpreters, and speakers.
         */
        enable_session_branding?: boolean;
      };
      /**
       * Webinar start time, in the format "yyyy-MM-dd'T'HH:mm:ss'Z'." Should be in GMT time. In the format "yyyy-MM-dd'T'HH:mm:ss." This should be in local time and the timezone should be specified. Only used for scheduled webinars and recurring webinars with a fixed time.
       */
      start_time?: string;
      /**
       * Time zone to format start_time. For example, "America/Los_Angeles". For scheduled meetings only. Please reference our [time zone](#timezones) list for supported time zones and their formats.
       */
      timezone?: string;
      /**
       * Webinar topic.
       */
      topic?: string;
      /**
       * Tracking fields
       */
      tracking_fields?: Array<{
        /**
         * Tracking fields type
         */
        field?: string;
        /**
         * Tracking fields value
         */
        value?: string;
      }>;
      /**
       * Webinar Types:<br>`5` - webinar.<br>`6` - Recurring webinar with no fixed time.<br>`9` - Recurring webinar with a fixed time.
       */
      type?: 5 | 6 | 9;
      /**
       * Whether to set the webinar simulive.
       */
      is_simulive?: boolean;
      /**
       * The previously recorded file's ID for `simulive`.
       */
      record_file_id?: string;
    };
    /**
     * Webinar occurrence id. Support change of agenda, start_time, duration, settings: {host_video, panelist_video, hd_video, watermark, auto_recording}
     */
    occurrenceId?: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/webinars/{webinarId}',
      path: {
        webinarId: webinarId,
      },
      query: {
        occurrence_id: occurrenceId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**HTTP Status Code:** \`300\`<br>Invalid webinar Id.<br>
        Invalid recurrence settings.<br>
        A maximum of "{rateLimitNumber}" webinars can be created and updated for a single user in one day.`,
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`1010\` <br>
        User does not belong to this account: {accountId}

         **Error Code:** \`3003\`
         * You are not the meeting host.
         * Users in "{0}" have been blocked from joining meetings and webinars. To unblock them, go to the "Settings" page in the Zoom web portal and update the "Block users in specific domains from joining meetings and webinars" setting.

         **Error Code:** \`3000\` <br>
        You cannot update or delete simulive webinars that have started using this method.

         **Error Code:** \`300\` <br>
        The value that you entered for the schedule_for field is invalid. Enter a valid value and try again.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar not found.<br>
         **Error Code:** \`1001\`<br>
        User {userId} does not exist or does not belong to this account.<br>
         **Error Code:** \`3001\`<br>
        Webinar {webinarId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * Perform batch registration
   * Use this API to register up to 30 registrants at once for a scheduled webinar that requires [registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-webinar-with-registration). <br>
   *
   * **Prerequisites:**<br>
   * * The webinar host must be a Licensed user.
   * * The webinar should be of type `5`, i.e., it should be a scheduled webinar. Other types of webinars are not supported by this API.<br><br>
   * **Scope:** `webinar:write`, `webinar:write:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
   *
   *
   *
   *
   *
   *
   *
   *
   * @returns any **HTTP Status Code:** `200` **OK** <br>
   * Registrants added.
   * @throws ApiError
   */
  public addBatchWebinarRegistrants({
    webinarId,
    requestBody,
  }: {
    /**
     * Unique identifier of the webinar.
     */
    webinarId: string;
    requestBody?: {
      /**
       * If a meeting was scheduled with approval_type `1` (manual approval), but you would like to automatically approve the registrants that are added via this API, you can set the value of this field to `true`.
       *
       * You **cannot** use this field to change approval setting for a meeting  that was originally scheduled with approval_type `0` (automatic approval).
       */
      auto_approve?: boolean;
      registrants?: Array<{
        /**
         * Email address of the registrant.
         */
        email: string;
        /**
         * First name of the registrant.
         */
        first_name: string;
        /**
         * Last name of the registrant.
         */
        last_name?: string;
      }>;
    };
  }): CancelablePromise<{
    registrants?: Array<{
      /**
       * Email address of the registrant.
       */
      email?: string;
      /**
       * Unique URL using which registrant can join the webinar.
       */
      join_url?: string;
      /**
       * Unique identifier of the registrant.
       */
      registrant_id?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/webinars/{webinarId}/batch_registrants',
      path: {
        webinarId: webinarId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`200\` <br>
        Webinar plan is missing. You must subscribe to the Webinar plan and enable webinars for the "{0}" user to perform this action.

         **Error Code:** \`300\` <br>
        This API can only be used for scheduled webinars (type 5). Batch registration is not supported for other webinar types.

         **Error Code:** \`3038\` <br>
        The webinar is over. You cannot register now. If you have any questions, contact the Webinar host.

         **Error Code:** \`3000\` <br>
        Registration not enabled for this webinar: {0}

         **Error Code:** \`3000\` <br>
        You have reached the limit for the number of attendees you can add. Contact Zoom Support for more information.

         **Error Code:** \`3000\` <br>
        The Zoom REST API does not support paid registration.`,
        404: `**HTTP Status Code:** \`404\` **Not Found** <br>
         **Error Code:** \`3001\`<br>
        Webinar does not exist: {0}.<br><br>
         **Error Code:** \`3043\`<br>
        Webinar has reached maximum attendee capacity.<br><br>
         **Error Code:** \`404\`<br>
        Registration has not been enabled for this meeting: {meetingId}.`,
        429: `**HTTP Status Code:** \`429\` <br>
        You have exceeded the daily rate limit of "{0}" for webinar **Perform batch registration** API requests for the registrant "{1}". You can resume these API requests at GMT 00:00:00.`,
      },
    });
  }

  /**
   * Create webinar's invite links
   * Use this API to create a batch of invitation links for a webinar.
   *
   * **Scopes**: `webinar:write:admin`, `webinar:write`</br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   *
   * * Business, Education or API Plan with Webinar add-on.
   * @returns any **HTTP Status Code:** `201` <br>
   * Webinar Invite Links Created
   * @throws ApiError
   */
  public webinarInviteLinksCreate({
    webinarId,
    requestBody,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * Webinar invite link object
     */
    requestBody: {
      /**
       * The attendees list.
       */
      attendees?: Array<{
        /**
         * User display name.
         */
        name: string;
      }>;
      /**
       * The invite link's expiration time, in seconds.
       *
       * This value defaults to `7200`.
       */
      ttl?: number;
    };
  }): CancelablePromise<{
    /**
     * The attendee list.
     */
    attendees?: Array<{
      /**
       * The URL to join the meeting.
       */
      join_url?: string;
      /**
       * The user's display name.
       */
      name?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/webinars/{webinarId}/invite_links',
      path: {
        webinarId: webinarId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`300\`<br>
         * Webinar Id does not exist.<br>
         * Invalid Webinar Id.<br>
         **Error Code:** \`3001\` Webinar does not exist: {webinarId}.<br>
         **Error Code:** \`1001\` User does not exist: {userId}.<br>
         **Error Code:** \`200\` Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}.`,
      },
    });
  }

  /**
   * Get live stream details
   * Zoom allows users to [live stream a webinar](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform. Use this API to get a webinar's live stream configuration details such as Stream URL, Stream Key and Page URL.<br><br>
   * **Prerequisites:**<br>
   * * Pro or higher plan with a Webinar Add-on.<br>
   * * Live streaming details must have been [configured](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service#h_01589a6f-a40a-4e18-a448-cb746e52ebc5) for the webinar.<br><br>
   * **Scopes:** `webinar:read:admin` `webinar:read`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   *
   *
   * @returns any **HTTP Status Code:** `200` **OK**<br>
   * Live Stream details returned.
   *
   *
   * @throws ApiError
   */
  public getWebinarLiveStreamDetails({
    webinarId,
  }: {
    /**
     * The webinar's unique ID.
     */
    webinarId: string;
  }): CancelablePromise<{
    /**
     * Live streaming page URL. This is the URL using which anyone can view the live stream of the webinar.
     */
    page_url?: string;
    /**
     * Stream Key.
     */
    stream_key?: string;
    /**
     * Stream URL.
     */
    stream_url?: string;
    /**
     * The number of pixels in each dimension that the video camera can display.
     */
    resolution?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webinars/{webinarId}/livestream',
      path: {
        webinarId: webinarId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`300\` <br>
         * Webinar Id does not exist.<br>
         * Invalid Webinar Id.<br>
         **Error Code:** \`3001\` Webinar does not exist: {webinarId}.<br>
         **Error Code:** \`1001\` User does not exist: {userId}.<br>
         **Error Code:** \`200\` <br>
         * Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}.<br>
         * The current user has not enabled the custom live streaming feature of the webinar.`,
      },
    });
  }

  /**
   * Update a live stream
   * Zoom allows users to [live stream a webinar](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform. Use this API to update a webinar's live stream information.<br><br>
   * **Prerequisites:**<br>
   * * Pro or higher plan with a Webinar Add-on.<br>
   * * Live streaming details must have been [configured](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service#h_01589a6f-a40a-4e18-a448-cb746e52ebc5) for the webinar.<br><br>
   * **Scopes:** `webinar:write:admin` `webinar:write`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   *
   * @returns void
   * @throws ApiError
   */
  public webinarLiveStreamUpdate({
    webinarId,
    requestBody,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * Webinar
     */
    requestBody: {
      /**
       * The webinar live stream page's URL.
       */
      page_url: string;
      /**
       * The webinar live stream name and key.
       */
      stream_key: string;
      /**
       * The webinar live stream URL.
       */
      stream_url: string;
      /**
       * The number of pixels in each dimension that the video camera can display, required when a user enables 1080p. Use a value of `720p` or `1080p`
       */
      resolution?: string;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/webinars/{webinarId}/livestream',
      path: {
        webinarId: webinarId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`300\` <br>
         * Webinar Id does not exist.<br>
         * Invalid Webinar Id.<br>
         **Error Code:** \`3001\` Webinar does not exist: {webinarId}.<br>
         **Error Code:** \`1001\` User does not exist: {userId}.<br>
         **Error Code:** \`200\` <br>
         * Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}.<br>
         * The current user has not enabled the custom live streaming feature of the webinar.`,
      },
    });
  }

  /**
   * Update Live Stream Status
   * Zoom allows users to [live stream a webinar](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform. Use this API to update the status of a webinar's live stream.<br><br>
   * **Prerequisites:**<br>
   * * Pro or higher plan with a Webinar Add-on.<br>
   * * Live streaming details must have been [configured](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service#h_01589a6f-a40a-4e18-a448-cb746e52ebc5) for the webinar.<br><br>
   * **Scopes:** `webinar:write:admin` `webinar:write`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   * @returns void
   * @throws ApiError
   */
  public webinarLiveStreamStatusUpdate({
    webinarId,
    requestBody,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * Webinar
     */
    requestBody: {
      /**
       * Update the status of a live stream. This value can be one of the following:
       *
       * * `start` — Start a webinar live stream.
       *
       * * `stop` — Stop an ongoing webinar live stream.
       */
      action?: 'start' | 'stop';
      /**
       * Update the live stream session's settings. You can **only** update settings for a stopped live stream.
       */
      settings?: {
        /**
         * Display the name of the active speaker during a live stream.
         */
        active_speaker_name?: boolean;
        /**
         * Display the name of the live stream.
         */
        display_name?: string;
      };
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/webinars/{webinarId}/livestream/status',
      path: {
        webinarId: webinarId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request**<br>
         **Error Code:** \`300\` <br>
         * Webinar Id does not exist.<br>
         * Invalid Webinar Id.<br>
         **Error Code:** \`3001\` Webinar does not exist: {webinarId}.<br>
         **Error Code:** \`1001\` User does not exist: {userId}.<br>
         **Error Code:** \`200\` <br>
         * Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {userId}.<br>
         * The current user has not enabled the custom live streaming feature of the webinar.<br>
         * Webinar {0} has not started. <br>
         **Error Code:** \`3000\` The current webinar is not configured with a custom streaming service.`,
      },
    });
  }

  /**
   * Remove panelists
   * Remove all the panelists from a Webinar.<br>
   * **Scopes:** `webinar:write:admin` `webinar:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   * **Prerequisites:**<br>
   * * Pro or a higher plan with [Webinar Add-on](https://zoom.us/webinar).<br>
   * @returns void
   * @throws ApiError
   */
  public webinarPanelistsDelete({
    webinarId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/webinars/{webinarId}/panelists',
      path: {
        webinarId: webinarId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account:{accountId}.<br>`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar not found.<br>
         **Error Code:** \`1001\`<br>
        User {userId} does not exist or does not belong to this account.<br>
         **Error Code:** \`3001\`<br>
        Webinar {webinarId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * List panelists
   * Panelists in a Webinar can view and send video, screen share, annotate, etc and do much more compared to attendees in a Webinar.
   *
   * Use this API to list all the panelists of a Webinar.<br><br>
   * **Scopes:** `webinar:read:admin` `webinar:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
   * **Prerequisites:**<br>
   * * Pro or a higher plan with [Webinar Add-on](https://zoom.us/webinar).<br>
   * @returns any **HTTP Status Code:** `200`<br>
   * Webinar plan subscription missing. Enable webinar for this user once the subscription is added.
   * @throws ApiError
   */
  public webinarPanelists({
    webinarId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
  }): CancelablePromise<{
    /**
     * List of panelist objects.
     */
    panelists?: Array<{
      /**
       * Panelist's ID.
       */
      id?: string;
      /**
       * Panelist's email. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for return value details.
       */
      email?: string;
      /**
       * The panelist's full name.
       *
       * **Note:** This value cannot exceed more than 12 Chinese characters.
       */
      name?: string;
      /**
       * Join URL.
       */
      join_url?: string;
      /**
       * The virtual background's ID.
       */
      virtual_background_id?: string;
      /**
       * The name tag ID to bind.
       */
      name_tag_id?: string;
      /**
       * The panelist's name to display in the name tag.
       */
      name_tag_name?: string;
      /**
       * The pronouns to display in the name tag.
       */
      name_tag_pronouns?: string;
      /**
       * The description for the name tag (for example, the person's title).
       */
      name_tag_description?: string;
    }>;
    /**
     * Total records.
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webinars/{webinarId}/panelists',
      path: {
        webinarId: webinarId,
      },
      errors: {
        300: `**HTTP Status Code:** \`300\`<br>`,
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account:{accountId}.<br>`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar not found.<br>
         **Error Code:** \`1001\`<br>
        User {userId} does not exist or does not belong to this account.<br>
         **Error Code:** \`3001\`<br>
        Webinar {webinarId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * Add panelists
   * Panelists in a Webinar can view and send video, screen share, annotate, etc and do much more compared to attendees in a webinar.<br>Use this API to [add panelists](https://support.zoom.us/hc/en-us/articles/115005657826-Inviting-Panelists-to-a-Webinar#h_7550d59e-23f5-4703-9e22-e76bded1ed70) to a scheduled webinar.<br><br>
   * **Scopes:** `webinar:write:admin` `webinar:write`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
   *
   *
   * **Prerequisites:**
   * * Pro or a higher plan with [Webinar Add-on](https://zoom.us/webinar).<br>
   * @returns any **HTTP Status Code:** `200`<br>
   * Webinar plan subscription missing. Enable webinar for this user once the subscription is added.
   * @throws ApiError
   */
  public webinarPanelistCreate({
    webinarId,
    requestBody,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    requestBody: {
      /**
       * List of panelist objects.
       */
      panelists?: Array<{
        /**
         * Panelist's email. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for return value details.
         */
        email?: string;
        /**
         * The panelist's full name.
         *
         * **Note:** This value cannot exceed more than 12 Chinese characters.
         */
        name?: string;
        /**
         * The Virtual Background ID to bind.
         */
        virtual_background_id?: string;
        /**
         * The name tag ID to bind.
         */
        name_tag_id?: string;
        /**
         * The panelist's name to display in the name tag.
         */
        name_tag_name?: string;
        /**
         * The pronouns to display in the name tag.
         */
        name_tag_pronouns?: string;
        /**
         * The description for the name tag (for example, the person's title).
         */
        name_tag_description?: string;
      }>;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/webinars/{webinarId}/panelists',
      path: {
        webinarId: webinarId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account:{accountId}.<br>
         **Error Code:** \`3000\`<br>
        You have reached the limit for the number of panelists you can add. Contact Zoom Support for more information.<br>`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar not found.<br>
         **Error Code:** \`1001\`<br>
        User {userId} does not exist or does not belong to this account.<br>
         **Error Code:** \`3001\`<br>
        Webinar {webinarId} not found or has expired.<br>`,
        429: `**HTTP Status Code:** \`429\` <br> You have exceeded the daily rate limit of "{0}" for webinar **Add panelists** API requests for the panelist "{1}". You can resume these API requests at GMT 00:00:00.`,
      },
    });
  }

  /**
   * Remove a panelist
   * [Remove](https://support.zoom.us/hc/en-us/articles/115005657826-Inviting-Panelists-to-a-Webinar#h_de31f237-a91c-4fb2-912b-ecfba8ec5ffb) a single panelist from a webinar.<br> You can retrieve the `panelistId` by calling **List Panelists API**.<br><br>
   * **Scopes:** `webinar:write:admin` `webinar:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   *
   *
   * **Prerequisites:**<br>
   * * Pro or a higher plan with [Webinar Add-on](https://zoom.us/webinar).<br>
   * @returns any **HTTP Status Code:** `200`<br>
   * Webinar plan subscription is missing. Enable webinar for this user once the subscription is added:{userId}.
   * @throws ApiError
   */
  public webinarPanelistDelete({
    webinarId,
    panelistId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * The panelist ID or panelist email.
     */
    panelistId: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/webinars/{webinarId}/panelists/{panelistId}',
      path: {
        webinarId: webinarId,
        panelistId: panelistId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account:{accountId}.<br>`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar not found.<br>
         **Error Code:** \`1001\`<br>
        User {email} does not exist or does not belong to this account.<br>
         **Error Code:** \`3001\`<br>
        Webinar {webinarId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * List a webinar's polls
   * List all the [polls](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars) of a Webinar.<br><br>
   * **Scopes:** `webinar:read:admin` `webinar:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   *
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * List polls of a Webinar  returned
   * @throws ApiError
   */
  public webinarPolls({
    webinarId,
    anonymous,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * Whether to query for polls with the **Anonymous** option enabled:
     * * `true` — Query for polls with the **Anonymous** option enabled.
     * * `false` — Do not query for polls with the **Anonymous** option enabled.
     */
    anonymous?: boolean;
  }): CancelablePromise<{
    /**
     * Array of Polls
     */
    polls?: Array<{
      /**
       * ID of Poll
       */
      id?: string;
      /**
       * Status of Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
       */
      status?: 'notstart' | 'started' | 'ended' | 'sharing';
      /**
       * Allow meeting participants to answer poll questions anonymously.
       *
       * This value defaults to `false`.
       */
      anonymous?: boolean;
      /**
       * The type of poll:
       * * `1` — Poll.
       * * `2` — Advanced Poll. This feature must be enabled in your Zoom account.
       * * `3` — Quiz. This feature must be enabled in your Zoom account.
       *
       * This value defaults to `1`.
       */
      poll_type?: 1 | 2 | 3;
      /**
       * Information about the poll's questions.
       */
      questions?: Array<{
        /**
         * The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
         * * For `short_answer` polls, a maximum of 500 characters.
         * * For `long_answer` polls, a maximum of 2,000 characters.
         */
        answer_max_character?: number;
        /**
         * The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value.
         */
        answer_min_character?: number;
        /**
         * Whether participants must answer the question:
         * * `true` — The participant must answer the question.
         * * `false` — The participant does not need to answer the question.
         *
         * **Note:**
         * * When the poll's `type` value is `1` (Poll), this value defaults to `true`.
         * * When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`.
         */
        answer_required?: boolean;
        /**
         * The poll question's available answers. This field requires a **minimum** of two answers.
         *
         * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
         * * For `matching` polls, you can only provide a maximum of 16 answers.
         * * For `rank_order` polls, you can only provide a maximum of seven answers.
         */
        answers?: Array<string>;
        /**
         * Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls:
         * * `true` — The answer is case-sensitive.
         * * `false` — The answer is not case-sensitive.
         *
         * This value defaults to `false`.
         */
        case_sensitive?: boolean;
        /**
         * The poll question, up to 255 characters.
         *
         * For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values.
         */
        name?: string;
        /**
         * Information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts.
         */
        prompts?: Array<{
          /**
           * The question prompt's title.
           */
          prompt_question?: string;
          /**
           * The question prompt's correct answers:
           * * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
           * * For `rank_order` polls, you can only provide one correct answer.
           */
          prompt_right_answers?: Array<string>;
        }>;
        /**
         * The high score label used for the `rating_max_value` field.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_max_label?: string;
        /**
         * The rating scale's maximum value, up to a maximum value of 10.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_max_value?: number;
        /**
         * The low score label used for the `rating_min_value` field.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_min_label?: string;
        /**
         * The rating scale's minimum value. This value cannot be less than zero.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_min_value?: number;
        /**
         * The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz).
         *
         * For `single` and `matching` polls, this field only accepts one answer.
         */
        right_answers?: Array<string>;
        /**
         * Whether to display the radio selection as a drop-down box:
         * * `true` — Show as a drop-down box.
         * * `false` — Do not show as a drop-down box.
         *
         * This value defaults to `false`.
         */
        show_as_dropdown?: boolean;
        /**
         * The poll's question and answer type:
         * * `single` — Single choice.
         * * `multiple` — Multiple choice.
         * * `matching` — Matching.
         * * `rank_order` — Rank order.
         * * `short_answer` — Short answer.
         * * `long_answer` — Long answer.
         * * `fill_in_the_blank` — Fill in the blank.
         * * `rating_scale` — Rating scale.
         */
        type?: 'single' | 'multiple' | 'matching' | 'rank_order' | 'short_answer' | 'long_answer' | 'fill_in_the_blank' | 'rating_scale';
      }>;
      /**
       * The poll's title, up to 64 characters.
       */
      title?: string;
    }>;
    /**
     * The number of all records available across pages
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webinars/{webinarId}/polls',
      path: {
        webinarId: webinarId,
      },
      query: {
        anonymous: anonymous,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br>
         **Error Code:** \`4400\` <br> Webinar polls disabled. To enable this feature, enable the "Webinar Polls/Quizzes" setting in the Zoom web portal's "Settings" interface.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar not found.<br>`,
      },
    });
  }

  /**
   * Create a webinar's poll
   * Create a [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars) for a webinar.<br><br>
   * **Scopes:** `webinar:write:admin` `webinar:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   *
   *
   * @returns any **HTTP Status Code:** `201`<br>
   * Webinar Poll Created
   * @throws ApiError
   */
  public webinarPollCreate({
    webinarId,
    requestBody,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * Webinar poll object
     */
    requestBody: {
      /**
       * Allow meeting participants to answer poll questions anonymously.
       *
       * This value defaults to `false`.
       */
      anonymous?: boolean;
      /**
       * The type of poll:
       * * `1` — Poll.
       * * `2` — Advanced Poll. This feature must be enabled in your Zoom account.
       * * `3` — Quiz. This feature must be enabled in your Zoom account.
       *
       * This value defaults to `1`.
       */
      poll_type?: 1 | 2 | 3;
      /**
       * Information about the poll's questions.
       */
      questions?: Array<{
        /**
         * The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
         * * For `short_answer` polls, a maximum of 500 characters.
         * * For `long_answer` polls, a maximum of 2,000 characters.
         */
        answer_max_character?: number;
        /**
         * The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value.
         */
        answer_min_character?: number;
        /**
         * Whether participants must answer the question:
         * * `true` — The participant must answer the question.
         * * `false` — The participant does not need to answer the question.
         *
         * **Note:**
         * * When the poll's `type` value is `1` (Poll), this value defaults to `true`.
         * * When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`.
         */
        answer_required?: boolean;
        /**
         * The poll question's available answers. This field requires a **minimum** of two answers.
         *
         * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
         * * For `matching` polls, you can only provide a maximum of 16 answers.
         * * For `rank_order` polls, you can only provide a maximum of seven answers.
         */
        answers?: Array<string>;
        /**
         * Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls:
         * * `true` — The answer is case-sensitive.
         * * `false` — The answer is not case-sensitive.
         *
         * This value defaults to `false`.
         */
        case_sensitive?: boolean;
        /**
         * The poll question, up to 255 characters.
         *
         * For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values.
         */
        name?: string;
        /**
         * Information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts.
         */
        prompts?: Array<{
          /**
           * The question prompt's title.
           */
          prompt_question?: string;
          /**
           * The question prompt's correct answers:
           * * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
           * * For `rank_order` polls, you can only provide one correct answer.
           */
          prompt_right_answers?: Array<string>;
        }>;
        /**
         * The high score label used for the `rating_max_value` field.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_max_label?: string;
        /**
         * The rating scale's maximum value, up to a maximum value of 10.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_max_value?: number;
        /**
         * The low score label used for the `rating_min_value` field.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_min_label?: string;
        /**
         * The rating scale's minimum value. This value cannot be less than zero.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_min_value?: number;
        /**
         * The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz).
         *
         * For `single` and `matching` polls, this field only accepts one answer.
         */
        right_answers?: Array<string>;
        /**
         * Whether to display the radio selection as a drop-down box:
         * * `true` — Show as a drop-down box.
         * * `false` — Do not show as a drop-down box.
         *
         * This value defaults to `false`.
         */
        show_as_dropdown?: boolean;
        /**
         * The poll's question and answer type:
         * * `single` — Single choice.
         * * `multiple` — Multiple choice.
         * * `matching` — Matching.
         * * `rank_order` — Rank order.
         * * `short_answer` — Short answer.
         * * `long_answer` — Long answer.
         * * `fill_in_the_blank` — Fill in the blank.
         * * `rating_scale` — Rating scale.
         */
        type?: 'single' | 'multiple' | 'matching' | 'rank_order' | 'short_answer' | 'long_answer' | 'fill_in_the_blank' | 'rating_scale';
      }>;
      /**
       * The poll's title, up to 64 characters.
       */
      title?: string;
    };
  }): CancelablePromise<{
    /**
     * Webinar Poll ID
     */
    id?: string;
    /**
     * Status of the Webinar Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
     */
    status?: 'notstart' | 'started' | 'ended' | 'sharing';
    /**
     * Allow meeting participants to answer poll questions anonymously.
     *
     * This value defaults to `false`.
     */
    anonymous?: boolean;
    /**
     * The type of poll:
     * * `1` — Poll.
     * * `2` — Advanced Poll. This feature must be enabled in your Zoom account.
     * * `3` — Quiz. This feature must be enabled in your Zoom account.
     *
     * This value defaults to `1`.
     */
    poll_type?: 1 | 2 | 3;
    /**
     * Information about the poll's questions.
     */
    questions?: Array<{
      /**
       * The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
       * * For `short_answer` polls, a maximum of 500 characters.
       * * For `long_answer` polls, a maximum of 2,000 characters.
       */
      answer_max_character?: number;
      /**
       * The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value.
       */
      answer_min_character?: number;
      /**
       * Whether participants must answer the question:
       * * `true` — The participant must answer the question.
       * * `false` — The participant does not need to answer the question.
       *
       * **Note:**
       * * When the poll's `type` value is `1` (Poll), this value defaults to `true`.
       * * When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`.
       */
      answer_required?: boolean;
      /**
       * The poll question's available answers. This field requires a **minimum** of two answers.
       *
       * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
       * * For `matching` polls, you can only provide a maximum of 16 answers.
       * * For `rank_order` polls, you can only provide a maximum of seven answers.
       */
      answers?: Array<string>;
      /**
       * Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls:
       * * `true` — The answer is case-sensitive.
       * * `false` — The answer is not case-sensitive.
       *
       * This value defaults to `false`.
       */
      case_sensitive?: boolean;
      /**
       * The poll question, up to 255 characters.
       *
       * For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values.
       */
      name?: string;
      /**
       * Information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts.
       */
      prompts?: Array<{
        /**
         * The question prompt's title.
         */
        prompt_question?: string;
        /**
         * The question prompt's correct answers:
         * * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
         * * For `rank_order` polls, you can only provide one correct answer.
         */
        prompt_right_answers?: Array<string>;
      }>;
      /**
       * The high score label used for the `rating_max_value` field.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_max_label?: string;
      /**
       * The rating scale's maximum value, up to a maximum value of 10.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_max_value?: number;
      /**
       * The low score label used for the `rating_min_value` field.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_min_label?: string;
      /**
       * The rating scale's minimum value. This value cannot be less than zero.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_min_value?: number;
      /**
       * The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz).
       *
       * For `single` and `matching` polls, this field only accepts one answer.
       */
      right_answers?: Array<string>;
      /**
       * Whether to display the radio selection as a drop-down box:
       * * `true` — Show as a drop-down box.
       * * `false` — Do not show as a drop-down box.
       *
       * This value defaults to `false`.
       */
      show_as_dropdown?: boolean;
      /**
       * The poll's question and answer type:
       * * `single` — Single choice.
       * * `multiple` — Multiple choice.
       * * `matching` — Matching.
       * * `rank_order` — Rank order.
       * * `short_answer` — Short answer.
       * * `long_answer` — Long answer.
       * * `fill_in_the_blank` — Fill in the blank.
       * * `rating_scale` — Rating scale.
       */
      type?: 'single' | 'multiple' | 'matching' | 'rank_order' | 'short_answer' | 'long_answer' | 'fill_in_the_blank' | 'rating_scale';
    }>;
    /**
     * The poll's title, up to 64 characters.
     */
    title?: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/webinars/{webinarId}/polls',
      path: {
        webinarId: webinarId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**HTTP Status Code:** \`300\`<br>Invalid webinarId.`,
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br>
         **Error Code:** \`4400\` <br>
         * Webinar polls disabled. To enable this feature, enable the "Webinar Polls/Quizzes" setting in the Zoom web portal's "Settings" interface.
         * Advanced webinar polls disabled. To enable this feature, enable the "Allow host to create advanced polls and quizzes" setting in the Zoom web portal's "Settings" interface.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar not found.<br>`,
      },
    });
  }

  /**
   * Delete a webinar poll
   * Delete a webinar's [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars).<br><br>
   * **Scopes:** `webinar:write:admin` `webinar:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   *
   *
   * @returns void
   * @throws ApiError
   */
  public webinarPollDelete({
    webinarId,
    pollId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * The poll ID
     */
    pollId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/webinars/{webinarId}/polls/{pollId}',
      path: {
        webinarId: webinarId,
        pollId: pollId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br>
         **Error Code:** \`4400\` <br> Webinar polls disabled. To enable this feature, enable the "Webinar Polls/Quizzes" setting in the Zoom web portal's "Settings" interface.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar poll not found.<br>
         **Error Code:** \`3001\`<br>
        Webinar {webinarId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * Get a webinar poll
   * Get a webinar's [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars) details.<br><br>
   * **Scopes:** `webinar:read:admin` `webinar:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   *
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * Webinar Poll object returned
   * @throws ApiError
   */
  public webinarPollGet({
    webinarId,
    pollId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * The poll ID
     */
    pollId: string;
  }): CancelablePromise<{
    /**
     * Webinar Poll ID
     */
    id?: string;
    /**
     * Status of the Webinar Poll:<br>`notstart` - Poll not started<br>`started` - Poll started<br>`ended` - Poll ended<br>`sharing` - Sharing poll results
     */
    status?: 'notstart' | 'started' | 'ended' | 'sharing';
    /**
     * Allow meeting participants to answer poll questions anonymously.
     *
     * This value defaults to `false`.
     */
    anonymous?: boolean;
    /**
     * The type of poll:
     * * `1` — Poll.
     * * `2` — Advanced Poll. This feature must be enabled in your Zoom account.
     * * `3` — Quiz. This feature must be enabled in your Zoom account.
     *
     * This value defaults to `1`.
     */
    poll_type?: 1 | 2 | 3;
    /**
     * Information about the poll's questions.
     */
    questions?: Array<{
      /**
       * The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
       * * For `short_answer` polls, a maximum of 500 characters.
       * * For `long_answer` polls, a maximum of 2,000 characters.
       */
      answer_max_character?: number;
      /**
       * The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value.
       */
      answer_min_character?: number;
      /**
       * Whether participants must answer the question:
       * * `true` — The participant must answer the question.
       * * `false` — The participant does not need to answer the question.
       *
       * **Note:**
       * * When the poll's `type` value is `1` (Poll), this value defaults to `true`.
       * * When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`.
       */
      answer_required?: boolean;
      /**
       * The poll question's available answers. This field requires a **minimum** of two answers.
       *
       * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
       * * For `matching` polls, you can only provide a maximum of 16 answers.
       * * For `rank_order` polls, you can only provide a maximum of seven answers.
       */
      answers?: Array<string>;
      /**
       * Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls:
       * * `true` — The answer is case-sensitive.
       * * `false` — The answer is not case-sensitive.
       *
       * This value defaults to `false`.
       */
      case_sensitive?: boolean;
      /**
       * The poll question, up to 255 characters.
       *
       * For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values.
       */
      name?: string;
      /**
       * Information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts.
       */
      prompts?: Array<{
        /**
         * The question prompt's title.
         */
        prompt_question?: string;
        /**
         * The question prompt's correct answers:
         * * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
         * * For `rank_order` polls, you can only provide one correct answer.
         */
        prompt_right_answers?: Array<string>;
      }>;
      /**
       * The high score label used for the `rating_max_value` field.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_max_label?: string;
      /**
       * The rating scale's maximum value, up to a maximum value of 10.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_max_value?: number;
      /**
       * The low score label used for the `rating_min_value` field.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_min_label?: string;
      /**
       * The rating scale's minimum value. This value cannot be less than zero.
       *
       * This field only applies to the `rating_scale` poll.
       */
      rating_min_value?: number;
      /**
       * The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz).
       *
       * For `single` and `matching` polls, this field only accepts one answer.
       */
      right_answers?: Array<string>;
      /**
       * Whether to display the radio selection as a drop-down box:
       * * `true` — Show as a drop-down box.
       * * `false` — Do not show as a drop-down box.
       *
       * This value defaults to `false`.
       */
      show_as_dropdown?: boolean;
      /**
       * The poll's question and answer type:
       * * `single` — Single choice.
       * * `multiple` — Multiple choice.
       * * `matching` — Matching.
       * * `rank_order` — Rank order.
       * * `short_answer` — Short answer.
       * * `long_answer` — Long answer.
       * * `fill_in_the_blank` — Fill in the blank.
       * * `rating_scale` — Rating scale.
       */
      type?: 'single' | 'multiple' | 'matching' | 'rank_order' | 'short_answer' | 'long_answer' | 'fill_in_the_blank' | 'rating_scale';
    }>;
    /**
     * The poll's title, up to 64 characters.
     */
    title?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webinars/{webinarId}/polls/{pollId}',
      path: {
        webinarId: webinarId,
        pollId: pollId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br>
         **Error Code:** \`4400\` <br> Webinar polls disabled. To enable this feature, enable the "Webinar Polls/Quizzes" setting in the Zoom web portal's "Settings" interface.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar not found.<br>
         **Error Code:** \`3001\`<br>
        Webinar {webinarId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * Update a webinar poll
   * Update a webinar's [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars).<br><br>
   * **Scopes:** `webinar:write:admin` `webinar:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   *
   *
   * @returns void
   * @throws ApiError
   */
  public webinarPollUpdate({
    webinarId,
    pollId,
    requestBody,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * The poll ID
     */
    pollId: string;
    /**
     * Webinar Poll
     */
    requestBody: {
      /**
       * Allow meeting participants to answer poll questions anonymously.
       *
       * This value defaults to `false`.
       */
      anonymous?: boolean;
      /**
       * The type of poll:
       * * `1` — Poll.
       * * `2` — Advanced Poll. This feature must be enabled in your Zoom account.
       * * `3` — Quiz. This feature must be enabled in your Zoom account.
       *
       * This value defaults to `1`.
       */
      poll_type?: 1 | 2 | 3;
      /**
       * Information about the poll's questions.
       */
      questions?: Array<{
        /**
         * The allowed maximum number of characters. This field only applies to `short_answer` and `long_answer` polls:
         * * For `short_answer` polls, a maximum of 500 characters.
         * * For `long_answer` polls, a maximum of 2,000 characters.
         */
        answer_max_character?: number;
        /**
         * The allowed minimum number of characters. This field only applies to `short_answer` and `long_answer` polls. You must provide at least a **one** character minimum value.
         */
        answer_min_character?: number;
        /**
         * Whether participants must answer the question:
         * * `true` — The participant must answer the question.
         * * `false` — The participant does not need to answer the question.
         *
         * **Note:**
         * * When the poll's `type` value is `1` (Poll), this value defaults to `true`.
         * * When the poll's `type` value is the `2` (Advanced Poll) or `3` (Quiz) values, this value defaults to `false`.
         */
        answer_required?: boolean;
        /**
         * The poll question's available answers. This field requires a **minimum** of two answers.
         *
         * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
         * * For `matching` polls, you can only provide a maximum of 16 answers.
         * * For `rank_order` polls, you can only provide a maximum of seven answers.
         */
        answers?: Array<string>;
        /**
         * Whether the correct answer is case sensitive. This field only applies to `fill_in_the_blank` polls:
         * * `true` — The answer is case-sensitive.
         * * `false` — The answer is not case-sensitive.
         *
         * This value defaults to `false`.
         */
        case_sensitive?: boolean;
        /**
         * The poll question, up to 255 characters.
         *
         * For `fill_in_the_blank` polls, this field is the poll's question. For each value that the user must fill in, ensure that there are the same number of `right_answers` values.
         */
        name?: string;
        /**
         * Information about the prompt questions. This field only applies to `matching` and `rank_order` polls. You **must** provide a minimum of two prompts, up to a maximum of 10 prompts.
         */
        prompts?: Array<{
          /**
           * The question prompt's title.
           */
          prompt_question?: string;
          /**
           * The question prompt's correct answers:
           * * For `matching` polls, you must provide a minimum of two correct answers, up to a maximum of 10 correct answers.
           * * For `rank_order` polls, you can only provide one correct answer.
           */
          prompt_right_answers?: Array<string>;
        }>;
        /**
         * The high score label used for the `rating_max_value` field.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_max_label?: string;
        /**
         * The rating scale's maximum value, up to a maximum value of 10.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_max_value?: number;
        /**
         * The low score label used for the `rating_min_value` field.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_min_label?: string;
        /**
         * The rating scale's minimum value. This value cannot be less than zero.
         *
         * This field only applies to the `rating_scale` poll.
         */
        rating_min_value?: number;
        /**
         * The poll question's correct answer(s). This field is **required** if the poll's `type` value is `3` (Quiz).
         *
         * For `single` and `matching` polls, this field only accepts one answer.
         */
        right_answers?: Array<string>;
        /**
         * Whether to display the radio selection as a drop-down box:
         * * `true` — Show as a drop-down box.
         * * `false` — Do not show as a drop-down box.
         *
         * This value defaults to `false`.
         */
        show_as_dropdown?: boolean;
        /**
         * The poll's question and answer type:
         * * `single` — Single choice.
         * * `multiple` — Multiple choice.
         * * `matching` — Matching.
         * * `rank_order` — Rank order.
         * * `short_answer` — Short answer.
         * * `long_answer` — Long answer.
         * * `fill_in_the_blank` — Fill in the blank.
         * * `rating_scale` — Rating scale.
         */
        type?: 'single' | 'multiple' | 'matching' | 'rank_order' | 'short_answer' | 'long_answer' | 'fill_in_the_blank' | 'rating_scale';
      }>;
      /**
       * The poll's title, up to 64 characters.
       */
      title?: string;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/webinars/{webinarId}/polls/{pollId}',
      path: {
        webinarId: webinarId,
        pollId: pollId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` **Bad Request** <br>
         **Error Code:** \`4400\` <br>
         * Webinar polls disabled. To enable this feature, enable the "Webinar Polls/Quizzes" setting in the Zoom web portal's "Settings" interface.
         * Advanced webinar polls disabled. To enable this feature, enable the "Allow host to create advanced polls and quizzes" setting in the Zoom web portal's "Settings" interface.`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar poll not found.<br>
         **Error Code:** \`3001\`<br>
        Webinar {webinarId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * List webinar registrants
   * Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees. Scheduling a [Webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form before receiving the link to join the Webinar.<br>
   * Use this API to list all the users that have registered for a webinar.<br><br>
   * **Prerequisites:**
   * * Pro or higher plan with a Webinar Add-on.<br>
   * **Scopes:** `webinar:read:admin` `webinar:read`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
   *
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * Webinar plan subscription is missing. Enable webinar for this user once the subscription is added:{userId}.
   * @throws ApiError
   */
  public webinarRegistrants({
    webinarId,
    occurrenceId,
    status = 'approved',
    trackingSourceId,
    pageSize = 30,
    pageNumber = 1,
    nextPageToken,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * The meeting or webinar occurrence ID.
     */
    occurrenceId?: string;
    /**
     * Query by the registrant's status:
     * * `pending` — The registration is pending.
     * * `approved` — The registrant is approved.
     * * `denied` — The registration is denied.
     */
    status?: 'pending' | 'approved' | 'denied';
    /**
     * The tracking source ID for the registrants. Useful if you share the webinar registration page in multiple locations. See [Creating source tracking links for webinar registration](https://support.zoom.us/hc/en-us/articles/360000315683-Creating-source-tracking-links-for-webinar-registration) for details.
     */
    trackingSourceId?: string;
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
     * List of registrant objects.
     */
    registrants?: Array<{
      /**
       * Registrant ID.
       */
      id?: string;
      /**
       * The registrant's address.
       */
      address?: string;
      /**
       * The registrant's city.
       */
      city?: string;
      /**
       * The registrant's questions and comments.
       */
      comments?: string;
      /**
       * The registrant's two-letter [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
       */
      country?: string;
      /**
       * Information about custom questions.
       */
      custom_questions?: Array<{
        /**
         * The title of the custom question.
         */
        title?: string;
        /**
         * The custom question's response value. This has a limit of 128 characters.
         */
        value?: string;
      }>;
      /**
       * The registrant's email address. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for return value details.
       */
      email: string;
      /**
       * The registrant's first name.
       */
      first_name: string;
      /**
       * The registrant's industry.
       */
      industry?: string;
      /**
       * The registrant's job title.
       */
      job_title?: string;
      /**
       * The registrant's last name.
       */
      last_name?: string;
      /**
       * The registrant's number of employees:
       * * `1-20`
       * * `21-50`
       * * `51-100`
       * * `101-250`
       * * `251-500`
       * * `501-1,000`
       * * `1,001-5,000`
       * * `5,001-10,000`
       * * `More than 10,000`
       */
      no_of_employees?: '' | '1-20' | '21-50' | '51-100' | '101-250' | '251-500' | '501-1,000' | '1,001-5,000' | '5,001-10,000' | 'More than 10,000';
      /**
       * The registrant's organization.
       */
      org?: string;
      /**
       * The registrant's phone number.
       */
      phone?: string;
      /**
       * The registrant's purchasing time frame:
       * * `Within a month`
       * * `1-3 months`
       * * `4-6 months`
       * * `More than 6 months`
       * * `No timeframe`
       */
      purchasing_time_frame?: '' | 'Within a month' | '1-3 months' | '4-6 months' | 'More than 6 months' | 'No timeframe';
      /**
       * The registrant's role in the purchase process:
       * * `Decision Maker`
       * * `Evaluator/Recommender`
       * * `Influencer`
       * * `Not involved`
       */
      role_in_purchase_process?: '' | 'Decision Maker' | 'Evaluator/Recommender' | 'Influencer' | 'Not involved';
      /**
       * The registrant's state or province.
       */
      state?: string;
      /**
       * The status of the registrant's registration. <br> `approved`: User has been successfully approved for the webinar.<br> `pending`:  The registration is still pending.<br> `denied`: User has been denied from joining the webinar.
       */
      status?: 'approved' | 'denied' | 'pending';
      /**
       * The registrant's ZIP or postal code.
       */
      zip?: string;
      /**
       * The time at which the registrant registered.
       */
      create_time?: string;
      /**
       * The URL using which an approved registrant can join the meeting or webinar.
       */
      join_url?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webinars/{webinarId}/registrants',
      path: {
        webinarId: webinarId,
      },
      query: {
        occurrence_id: occurrenceId,
        status: status,
        tracking_source_id: trackingSourceId,
        page_size: pageSize,
        page_number: pageNumber,
        next_page_token: nextPageToken,
      },
      errors: {
        300: `**HTTP Status Code:** \`300\`<br>Invalid webinar ID.`,
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account:{accountId}.<br>`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar not found.<br>
         **Error Code:** \`1001\`<br>
        User {userId} does not exist or does not belong to this account.<br>
         **Error Code:** \`3001\`<br>
        Webinar {webinarId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * Add a webinar registrant
   * Use this API to create and submit a user's registration for a webinar. Zoom users with a [Webinar plan](https://zoom.us/webinar) have access to creating and managing webinars. Webinars allow hosts to broadcast a Zoom meeting to up to 10,000 attendees. Scheduling a [webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form before receiving the link to join the webinar.
   *
   * **Scopes:** `webinar:write:admin`, `webinar:write` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro or higher plan with the Webinar add-on.
   * @returns any **HTTP Status Code:** `201` <br>
   * Webinar registration created.
   * @throws ApiError
   */
  public webinarRegistrantCreate({
    webinarId,
    requestBody,
    occurrenceIds,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    requestBody: {
      /**
       * The registrant's first name.
       */
      first_name: string;
      /**
       * The registrant's last name.
       */
      last_name?: string;
      /**
       * The registrant's email address.
       */
      email: string;
      /**
       * The registrant's address.
       */
      address?: string;
      /**
       * The registrant's city.
       */
      city?: string;
      /**
       * The registrant's state or province.
       */
      state?: string;
      /**
       * The registrant's ZIP or postal code.
       */
      zip?: string;
      /**
       * The registrant's two-letter [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
       */
      country?: string;
      /**
       * The registrant's phone number.
       */
      phone?: string;
      /**
       * The registrant's questions and comments.
       */
      comments?: string;
      /**
       * Information about custom questions.
       */
      custom_questions?: Array<{
        /**
         * The title of the custom question.
         */
        title?: string;
        /**
         * The custom question's response value. This has a limit of 128 characters.
         */
        value?: string;
      }>;
      /**
       * The registrant's industry.
       */
      industry?: string;
      /**
       * The registrant's job title.
       */
      job_title?: string;
      /**
       * The registrant's number of employees:
       * * `1-20`
       * * `21-50`
       * * `51-100`
       * * `101-500`
       * * `500-1,000`
       * * `1,001-5,000`
       * * `5,001-10,000`
       * * `More than 10,000`
       */
      no_of_employees?: '' | '1-20' | '21-50' | '51-100' | '101-500' | '500-1,000' | '1,001-5,000' | '5,001-10,000' | 'More than 10,000';
      /**
       * The registrant's organization.
       */
      org?: string;
      /**
       * The registrant's purchasing time frame:
       * * `Within a month`
       * * `1-3 months`
       * * `4-6 months`
       * * `More than 6 months`
       * * `No timeframe`
       */
      purchasing_time_frame?: '' | 'Within a month' | '1-3 months' | '4-6 months' | 'More than 6 months' | 'No timeframe';
      /**
       * The registrant's role in the purchase process:
       * * `Decision Maker`
       * * `Evaluator/Recommender`
       * * `Influencer`
       * * `Not involved`
       */
      role_in_purchase_process?: '' | 'Decision Maker' | 'Evaluator/Recommender' | 'Influencer' | 'Not involved';
      /**
       * The registrant's language preference for confirmation emails:
       * * `en-US` — English (US)
       * * `de-DE` — German (Germany)
       * * `es-ES` — Spanish (Spain)
       * * `fr-FR` — French (France)
       * * `jp-JP` — Japanese
       * * `pt-PT` — Portuguese (Portugal)
       * * `ru-RU` — Russian
       * * `zh-CN` — Chinese (PRC)
       * * `zh-TW` — Chinese (Taiwan)
       * * `ko-KO` — Korean
       * * `it-IT` — Italian (Italy)
       * * `vi-VN` — Vietnamese
       * * `pl-PL` — Polish
       * * `Tr-TR` — Turkish
       */
      language?: 'en-US' | 'de-DE' | 'es-ES' | 'fr-FR' | 'jp-JP' | 'pt-PT' | 'ru-RU' | 'zh-CN' | 'zh-TW' | 'ko-KO' | 'it-IT' | 'vi-VN' | 'pl-PL' | 'Tr-TR';
    };
    /**
     * A comma-separated list of webinar occurrence IDs. You can get this value with the [Get a webinar](/docs/api-reference/zoom-api/methods/#operation/webinarUpdate) API. Make sure the `registration_type` is 3 if updating multiple occurrences with this API.
     */
    occurrenceIds?: string;
  }): CancelablePromise<{
    /**
     * The webinar's ID.
     */
    id?: string;
    /**
     * The URL the registrant can use to join the webinar.
     */
    join_url?: string;
    /**
     * The registrant's ID.
     */
    registrant_id?: string;
    /**
     * The webinar's start time.
     */
    start_time?: string;
    /**
     * The webinar's topic.
     */
    topic?: string;
    /**
     * Array of occurrence objects.
     */
    occurrences?: Array<{
      /**
       * Duration.
       */
      duration?: number;
      /**
       * Occurrence ID: Unique Identifier that identifies an occurrence of a recurring webinar. [Recurring webinars](https://support.zoom.us/hc/en-us/articles/216354763-How-to-Schedule-A-Recurring-Webinar) can have a maximum of 50 occurrences.
       */
      occurrence_id?: string;
      /**
       * Start time.
       */
      start_time?: string;
      /**
       * Occurrence status.
       */
      status?: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/webinars/{webinarId}/registrants',
      path: {
        webinarId: webinarId,
      },
      query: {
        occurrence_ids: occurrenceIds,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**HTTP Status Code:** \`300\`
         * Invalid webinar ID.
         * Invalid parameter: occurrence_ids
         * Invalid username.`,
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`1010\` <br>
        User does not belong to this account: {accountId}

         **Error Code:** \`3000\` <br>
        This webinar does not have registration as required: {webinarId}.

         **Error Code:** \`3027\` <br>
        Host cannot register.

         **Error Code:** \`3034\` <br>
        If you have been invited, please input your work email address.

         **Error Code:** \`3038\` <br>
        Webinar is over, you cannot register now. If you have any questions, contact the webinar host.

         **Error Code:** \`3000\` <br>
        You have reached the limit for the number of attendees you can add. Contact Zoom Support for more information.

         **Error Code:** \`3000\` <br>
        The Zoom REST API does not support paid registration.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Webinar not found.

         **Error Code:** \`1001\` <br>
        User "{userId}" does not exist or does not belong to this account.

         **Error Code:** \`3001\` <br>
        Webinar "{webinarId}" not found or has expired.`,
        429: `**HTTP Status Code:** \`429\` <br>
        You have exceeded the daily rate limit of "{0}" for **Add a webinar registrant** API requests for the registrant "{1}". You can resume these API requests at GMT 00:00:00.`,
      },
    });
  }

  /**
   * List registration questions
   * Scheduling a [Webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form with fields and questions before they can receive the link to join the Webinar.<br>Use this API to list registration questions and fields that are to be answered by users while registering for a Webinar.<br>
   * **Prerequisites:**<br>
   * * Pro or higher plan with a Webinar Add-on.
   * **Scopes:** `webinar:read:admin` `webinar:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   *
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * Webinar Registrant Question object returned
   * @throws ApiError
   */
  public webinarRegistrantsQuestionsGet({
    webinarId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
  }): CancelablePromise<{
    /**
     * Array of Registrant Custom Questions.
     */
    custom_questions?: Array<{
      /**
       * An array of answer choices. Can't be used for short answer type.
       */
      answers?: Array<string>;
      /**
       * State whether or not the custom question is required to be answered by a registrant.
       */
      required?: boolean;
      /**
       * Custom question.
       */
      title?: string;
      /**
       * The question-answer type.
       */
      type?: 'short' | 'single_radio' | 'single_dropdown' | 'multiple';
    }>;
    /**
     * Array of registration fields whose values should be provided by registrants during registration.
     */
    questions?: Array<{
      /**
       * Field name
       */
      field_name?:
        | 'last_name'
        | 'address'
        | 'city'
        | 'country'
        | 'zip'
        | 'state'
        | 'phone'
        | 'industry'
        | 'org'
        | 'job_title'
        | 'purchasing_time_frame'
        | 'role_in_purchase_process'
        | 'no_of_employees'
        | 'comments';
      /**
       * State whether the selected fields are required or optional.
       */
      required?: boolean;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webinars/{webinarId}/registrants/questions',
      path: {
        webinarId: webinarId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>Webinar not found`,
      },
    });
  }

  /**
   * Update registration questions
   * Scheduling a [Webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form with fields and questions before they can receive the link to join the Webinar.<br>Use this API to update registration questions and fields of a scheduled Webinar that are to be answered by users while registering for a Webinar.<br><br>
   * **Prerequisites:**<br>
   * * Pro or higher plan with a Webinar Add-on.
   * * Registration option for Webinar should be set as required to use this API.
   * **Scopes:** `webinar:write:admin` `webinar:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   * @returns void
   * @throws ApiError
   */
  public webinarRegistrantQuestionUpdate({
    webinarId,
    requestBody,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * Webinar Registrant Questions
     */
    requestBody: {
      /**
       * Array of Registrant Custom Questions.
       */
      custom_questions?: Array<{
        /**
         * An array of answer choices. Can't be used for short answer type.
         */
        answers?: Array<string>;
        /**
         * State whether or not the custom question is required to be answered by a registrant.
         */
        required?: boolean;
        /**
         * Custom question.
         */
        title?: string;
        /**
         * The question-answer type.
         */
        type?: 'short' | 'single_radio' | 'single_dropdown' | 'multiple';
      }>;
      /**
       * Array of registration fields whose values should be provided by registrants during registration.
       */
      questions?: Array<{
        /**
         * Field name
         */
        field_name?:
          | 'last_name'
          | 'address'
          | 'city'
          | 'country'
          | 'zip'
          | 'state'
          | 'phone'
          | 'industry'
          | 'org'
          | 'job_title'
          | 'purchasing_time_frame'
          | 'role_in_purchase_process'
          | 'no_of_employees'
          | 'comments';
        /**
         * State whether the selected fields are required or optional.
         */
        required?: boolean;
      }>;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/webinars/{webinarId}/registrants/questions',
      path: {
        webinarId: webinarId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>Webinar not found`,
      },
    });
  }

  /**
   * Update registrant's status
   * Use this API to update webinar registrants' registration status. You can approve or deny a registrant, or revoke a registrant's approval.
   *
   * **Scopes:** `webinar:write:admin`, `webinar:write` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns any **HTTP Status Code:** `200` <br>
   * The webinar plan subscription is missing. Enable webinar for this user once the subscription is added: {userId}
   * @throws ApiError
   */
  public webinarRegistrantStatus({
    webinarId,
    requestBody,
    occurrenceId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    requestBody: {
      /**
       * The registration action to perform:
       * * `approve` — Approve the registrant.
       * * `deny` — Reject the registrant.
       * * `cancel` — Cancel the registrant's approval.
       */
      action: 'approve' | 'deny' | 'cancel';
      /**
       * The registrant information.
       */
      registrants?: Array<{
        /**
         * The registrant's email address.
         */
        email?: string;
        /**
         * The registrant's ID.
         */
        id?: string;
      }>;
    };
    /**
     * The meeting or webinar occurrence ID.
     */
    occurrenceId?: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/webinars/{webinarId}/registrants/status',
      path: {
        webinarId: webinarId,
      },
      query: {
        occurrence_id: occurrenceId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**HTTP Status Code:** \`300\` <br> Invalid webinar ID.`,
        400: `**HTTP Status Code:** \`400\` <br>
        Bad request

         **Error Code:** \`1010\` <br>
        User does not belong to this account: {accountId}.

         **Error Code:** \`3035\` <br>
        Webinar has reached maximum attendee capacity.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Webinar not found.

         **Error Code:** \`1001\` <br>
        User {userId} does not exist or does not belong to this account.

         **Error Code:** \`3001\` <br>
        Webinar {webinarId} not found or has expired.`,
        429: `**HTTP Status Code:** \`429\` <br>
        You have exceeded the daily rate limit of "{0}" for webinar **Update registrant's status** API requests for the registrant "{1}". You can resume these API requests at GMT 00:00:00.`,
      },
    });
  }

  /**
   * Delete a webinar registrant
   * Delete a webinar registrant.<br><br>
   * **Scopes**: `webinar:write:admin` `webinar:write`<br>
   * <br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns void
   * @throws ApiError
   */
  public deleteWebinarRegistrant({
    webinarId,
    registrantId,
    occurrenceId,
  }: {
    /**
     * The webinar ID.
     */
    webinarId: number;
    /**
     * The registrant ID.
     */
    registrantId: string;
    /**
     * The webinar occurrence ID.
     */
    occurrenceId?: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/webinars/{webinarId}/registrants/{registrantId}',
      path: {
        webinarId: webinarId,
        registrantId: registrantId,
      },
      query: {
        occurrence_id: occurrenceId,
      },
      errors: {
        400: `**HTTP status code:** \`400\` <br>
        Bad Request<br>

         **Error code:** \`200\`<br>
        Webinar plan is missing. You must subscribe to the webinar plan and enable webinars for this user in order to perform this action: {0}.<br>

         **Error code:** \`300\`<br>
        The value that you entered for the Registrant ID field is invalid. Enter a valid value and try again.<br>

         **Error code:** \`404\` <br>
        Registration has not been enabled for this webinar: {0}.<br>

         **Error code:** \`3000\` <br>
        Registrant {0} was not found.<br>

         **Error code:** \`3001\` <br>
        Webinar does not exist: {0}.`,
      },
    });
  }

  /**
   * Get a webinar registrant
   * Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees. Scheduling a [Webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form before receiving the link to join the Webinar.<br>Use this API to get details on a specific user who has registered for the Webinar.<br><br>
   * **Scopes:** `webinar:read:admin` `webinar:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   * **Prerequisites:**<br>
   * * The account must have a Webinar plan.
   * @returns any Success.
   * @throws ApiError
   */
  public webinarRegistrantGet({
    webinarId,
    registrantId,
    occurrenceId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * The registrant ID.
     */
    registrantId: string;
    /**
     * The meeting or webinar occurrence ID.
     */
    occurrenceId?: string;
  }): CancelablePromise<{
    id?: string;
    /**
     * The registrant's address.
     */
    address?: string;
    /**
     * The registrant's city.
     */
    city?: string;
    /**
     * The registrant's questions and comments.
     */
    comments?: string;
    /**
     * The registrant's two-letter [country code](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries).
     */
    country?: string;
    /**
     * Information about custom questions.
     */
    custom_questions?: Array<{
      /**
       * The title of the custom question.
       */
      title?: string;
      /**
       * The custom question's response value. This has a limit of 128 characters.
       */
      value?: string;
    }>;
    /**
     * The registrant's email address. See [Email address display rules](https://marketplace.zoom.us/docs/api-reference/using-zoom-apis#email-address) for return value details.
     */
    email: string;
    /**
     * The registrant's first name.
     */
    first_name: string;
    /**
     * The registrant's industry.
     */
    industry?: string;
    /**
     * The registrant's job title.
     */
    job_title?: string;
    /**
     * The registrant's last name.
     */
    last_name?: string;
    /**
     * The registrant's number of employees:
     * * `1-20`
     * * `21-50`
     * * `51-100`
     * * `101-250`
     * * `251-500`
     * * `501-1,000`
     * * `1,001-5,000`
     * * `5,001-10,000`
     * * `More than 10,000`
     */
    no_of_employees?: '' | '1-20' | '21-50' | '51-100' | '101-250' | '251-500' | '501-1,000' | '1,001-5,000' | '5,001-10,000' | 'More than 10,000';
    /**
     * The registrant's organization.
     */
    org?: string;
    /**
     * The registrant's phone number.
     */
    phone?: string;
    /**
     * The registrant's purchasing time frame:
     * * `Within a month`
     * * `1-3 months`
     * * `4-6 months`
     * * `More than 6 months`
     * * `No timeframe`
     */
    purchasing_time_frame?: '' | 'Within a month' | '1-3 months' | '4-6 months' | 'More than 6 months' | 'No timeframe';
    /**
     * The registrant's role in the purchase process:
     * * `Decision Maker`
     * * `Evaluator/Recommender`
     * * `Influencer`
     * * `Not involved`
     */
    role_in_purchase_process?: '' | 'Decision Maker' | 'Evaluator/Recommender' | 'Influencer' | 'Not involved';
    /**
     * The registrant's state or province.
     */
    state?: string;
    /**
     * The registrant's status:
     * * `approved` — Registrant is approved.
     * * `denied` — Registrant is denied.
     * * `pending` — Registrant is waiting for approval.
     */
    status?: 'approved' | 'denied' | 'pending';
    /**
     * The registrant's ZIP or postal code.
     */
    zip?: string;
    /**
     * The registrant's language preference for confirmation emails:
     * * `en-US` — English (US)
     * * `de-DE` — German (Germany)
     * * `es-ES` — Spanish (Spain)
     * * `fr-FR` — French (France)
     * * `jp-JP` — Japanese
     * * `pt-PT` — Portuguese (Portugal)
     * * `ru-RU` — Russian
     * * `zh-CN` — Chinese (PRC)
     * * `zh-TW` — Chinese (Taiwan)
     * * `ko-KO` — Korean
     * * `it-IT` — Italian (Italy)
     * * `vi-VN` — Vietnamese
     * * `pl-PL` — Polish
     * * `Tr-TR` — Turkish
     */
    language?: 'en-US' | 'de-DE' | 'es-ES' | 'fr-FR' | 'jp-JP' | 'pt-PT' | 'ru-RU' | 'zh-CN' | 'zh-TW' | 'ko-KO' | 'it-IT' | 'vi-VN' | 'pl-PL' | 'Tr-TR';
    create_time?: string;
    join_url?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webinars/{webinarId}/registrants/{registrantId}',
      path: {
        webinarId: webinarId,
        registrantId: registrantId,
      },
      query: {
        occurrence_id: occurrenceId,
      },
      errors: {
        300: `Invalid webinar ID.`,
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account:{accountId}.<br>`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar not found.<br>
         **Error Code:** \`1001\`<br>
        User {userId} does not exist or does not belong to this account.<br>
         **Error Code:** \`3001\`<br>
        Webinar {webinarId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * Update webinar status
   * Update a webinar's status. Use this API to end an ongoing webinar.<br><br>
   * **Scopes:** `webinar:write:admin` `webinar:write`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
   * **Prerequisites:**<br>
   * * The account must hold a valid [Webinar plan](https://zoom.us/webinar).
   * @returns any Webinar plan subscription is missing. Enable webinar for this user once the subscription is added:{userId}.
   * @throws ApiError
   */
  public webinarStatus({
    webinarId,
    requestBody,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    requestBody: {
      action?: 'end';
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/webinars/{webinarId}/status',
      path: {
        webinarId: webinarId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request<br>
         **Error Code:** \`1010\`<br>
        User does not belong to this account:{accountId}.<br>
         **Error Code:** \`3003\`<br>
        You are not the meeting host.<br>
         **Error Code:** \`3063\`<br>
        Can not end on-premise user's meeting:{meetingId}.<br>`,
        404: `**HTTP Status Code:** \`404\`<br>
        Webinar not found.<br>
         **Error Code:** \`1001\`<br>
        User {userId} does not exist or does not belong to this account.<br>
         **Error Code:** \`3001\`<br>
        Webinar {webinarId} not found or has expired.<br>`,
      },
    });
  }

  /**
   * Delete a webinar survey
   * Use this API to delete a [webinar survey](https://support.zoom.us/hc/en-us/articles/360048745651).
   *
   * **Scopes:** `webinar:write`, `webinar:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro or higher plan with the Webinar Add-on.
   * * The [**Webinar Survey**](https://support.zoom.us/hc/en-us/articles/360061293191-Enabling-webinar-survey) feature enabled in the host's account.
   * @returns void
   * @throws ApiError
   */
  public webinarSurveyDelete({
    webinarId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/webinars/{webinarId}/survey',
      path: {
        webinarId: webinarId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br> Bad Request

         **Error Code:** \`300\` <br>
        Invalid webinar ID.

         **Error Code:** \`3000\` <br>
        Webinar survey disabled. To enable this feature, enable the "Webinar Survey" setting in the Zoom web portal's "Settings" interface.`,
        404: `**HTTP Status Code:** \`404\` <br> Not Found

         **Error Code:** \`300\` <br>
        Webinar ID does not exist.

         **Error Code:** \`3001\` <br>
        Webinar does not exist: {webinarId}.`,
      },
    });
  }

  /**
   * Get a webinar survey
   * Use this API to return information about a [webinar survey](https://support.zoom.us/hc/en-us/articles/360048745651).
   *
   * **Scopes:** `webinar:read`, `webinar:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro or higher plan with the Webinar add-on.
   * * The [**Webinar Survey**](https://support.zoom.us/hc/en-us/articles/360061293191-Enabling-webinar-survey) feature enabled in the host's account.
   * @returns any **HTTP Status Code:** `200` <br>
   * Webinar survey object returned.
   * @throws ApiError
   */
  public webinarSurveyGet({
    webinarId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
  }): CancelablePromise<{
    /**
     * Information about the customized webinar survey.
     */
    custom_survey?: {
      /**
       * Allow participants to anonymously answer survey questions:
       * * `true` — Anonymous survey enabled.
       * * `false` — Participants cannot answer survey questions anonymously.
       *
       * This value defaults to `true`.
       */
      anonymous?: boolean;
      /**
       * Information about the webinar survey's questions.
       */
      questions?: Array<{
        /**
         * The allowed maximum number of characters. This field only applies to `long_answer` survey, a maximum of 2,000 characters.
         */
        answer_max_character?: number;
        /**
         * The allowed minimum number of characters. This field only applies to `long_answer` survey. You must provide at least a **one** character minimum value.
         */
        answer_min_character?: number;
        /**
         * Whether participants must answer the question:
         * * `true` — The participant must answer the question.
         * * `false` — The participant does not need to answer the question.
         *
         * This value defaults to `false`.
         */
        answer_required?: boolean;
        /**
         * The survey question's available answers. This field requires a **minimum** of two answers.
         *
         * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
         * * For `matching` polls, you can only provide a maximum of 16 answers.
         * * For `rank_order` polls, you can only provide a maximum of seven answers.
         */
        answers?: Array<string>;
        /**
         * The survey question, up to 255 characters.
         */
        name?: string;
        /**
         * The high score label used for the `rating_max_value` field.
         *
         * This field only applies to the `rating_scale` survey.
         */
        rating_max_label?: string;
        /**
         * The rating scale's maximum value, up to a maximum value of 10.
         *
         * This field only applies to the `rating_scale` survey.
         */
        rating_max_value?: number;
        /**
         * The low score label used for the `rating_min_value` field.
         *
         * This field only applies to the `rating_scale` survey.
         */
        rating_min_label?: string;
        /**
         * The rating scale's minimum value. This value cannot be less than zero.
         *
         * This field only applies to the `rating_scale` survey.
         */
        rating_min_value?: number;
        /**
         * Display the radio selection as a drop-down box:
         * * `true` — Show as a drop-down box.
         * * `false` — Do not show as a drop-down box.
         *
         * This value defaults to `false`.
         */
        show_as_dropdown?: boolean;
        /**
         * The survey's question and answer type:
         * * `single` — Single choice.
         * * `multiple` — Multiple choice.
         * * `rating_scale` — Rating scale.
         * * `long_answer` — Long answer.
         */
        type?: 'single' | 'multiple' | 'rating_scale' | 'long_answer';
      }>;
    };
    /**
     * Whether the **Show in the browser when the webinar ends** option is enabled:
     * * `true` — Enabled.
     * * `false` — Disabled.
     *
     * This value defaults to `true`.
     */
    show_in_the_browser?: boolean;
    /**
     * Whether the **Show the link on the follow-up email** option is enabled:
     * * `true` — Enabled.
     * * `false` — Disabled.
     *
     * This value defaults to `false`.
     */
    show_in_the_follow_up_email?: boolean;
    /**
     * The link to the third party webinar survey.
     */
    third_party_survey?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webinars/{webinarId}/survey',
      path: {
        webinarId: webinarId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br> Bad Request

         **Error Code:** \`300\` <br>
        Invalid webinar ID.

         **Error Code:** \`3000\` <br>
        Webinar survey disabled. To enable this feature, enable the "Webinar Survey" setting in the Zoom web portal's "Settings" interface.`,
        404: `**HTTP Status Code:** \`404\` <br> Not Found

         **Error Code:** \`300\` <br>
        Webinar ID does not exist.

         **Error Code:** \`3001\` <br>
        Webinar does not exist: {webinarId}.`,
      },
    });
  }

  /**
   * Update a webinar survey
   * Use this API to update a [webinar survey](https://support.zoom.us/hc/en-us/articles/360048745651).
   *
   * **Scopes:** `webinar:write`, `webinar:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro or higher plan with the Webinar add-on.
   * * The [**Webinar Survey**](https://support.zoom.us/hc/en-us/articles/360061293191-Enabling-webinar-survey) feature enabled in the host's account.
   * @returns void
   * @throws ApiError
   */
  public webinarSurveyUpdate({
    webinarId,
    requestBody,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    requestBody: {
      /**
       * Information about the customized webinar survey.
       */
      custom_survey?: {
        /**
         * Allow participants to anonymously answer survey questions:
         * * `true` — Anonymous survey enabled.
         * * `false` — Participants cannot answer survey questions anonymously.
         *
         * This value defaults to `true`.
         */
        anonymous?: boolean;
        /**
         * Information about the webinar survey's questions.
         */
        questions?: Array<{
          /**
           * The allowed maximum number of characters. This field only applies to `long_answer` survey, a maximum of 2,000 characters.
           */
          answer_max_character?: number;
          /**
           * The allowed minimum number of characters. This field only applies to `long_answer` survey. You must provide at least a **one** character minimum value.
           */
          answer_min_character?: number;
          /**
           * Whether participants must answer the question:
           * * `true` — The participant must answer the question.
           * * `false` — The participant does not need to answer the question.
           *
           * This value defaults to `false`.
           */
          answer_required?: boolean;
          /**
           * The survey question's available answers. This field requires a **minimum** of two answers.
           *
           * * For `single` and `multiple` polls, you can only provide a maximum of 10 answers.
           * * For `matching` polls, you can only provide a maximum of 16 answers.
           * * For `rank_order` polls, you can only provide a maximum of seven answers.
           */
          answers?: Array<string>;
          /**
           * The survey question, up to 255 characters.
           */
          name?: string;
          /**
           * The high score label used for the `rating_max_value` field.
           *
           * This field only applies to the `rating_scale` survey.
           */
          rating_max_label?: string;
          /**
           * The rating scale's maximum value, up to a maximum value of 10.
           *
           * This field only applies to the `rating_scale` survey.
           */
          rating_max_value?: number;
          /**
           * The low score label used for the `rating_min_value` field.
           *
           * This field only applies to the `rating_scale` survey.
           */
          rating_min_label?: string;
          /**
           * The rating scale's minimum value. This value cannot be less than zero.
           *
           * This field only applies to the `rating_scale` survey.
           */
          rating_min_value?: number;
          /**
           * Display the radio selection as a drop-down box:
           * * `true` — Show as a drop-down box.
           * * `false` — Do not show as a drop-down box.
           *
           * This value defaults to `false`.
           */
          show_as_dropdown?: boolean;
          /**
           * The survey's question and answer type:
           * * `single` — Single choice.
           * * `multiple` — Multiple choice.
           * * `rating_scale` — Rating scale.
           * * `long_answer` — Long answer.
           */
          type?: 'single' | 'multiple' | 'rating_scale' | 'long_answer';
        }>;
      };
      /**
       * Whether the **Show in the browser when the webinar ends** option is enabled:
       * * `true` — Enabled.
       * * `false` — Disabled.
       *
       * This value defaults to `true`.
       */
      show_in_the_browser?: boolean;
      /**
       * Whether the **Show the link on the follow-up email** option is enabled:
       * * `true` — Enabled.
       * * `false` — Disabled.
       *
       * This value defaults to `false`.
       */
      show_in_the_follow_up_email?: boolean;
      /**
       * The link to the third party webinar survey.
       */
      third_party_survey?: string;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/webinars/{webinarId}/survey',
      path: {
        webinarId: webinarId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br> Bad Request

         **Error Code:** \`300\` <br>
         * Invalid webinar ID. <br>
         * Invalid third party survey: {third_party_survey}.

         **Error Code:** \`3000\` <br>
        Webinar survey disabled. To enable this feature, enable the "Webinar Survey" setting in the Zoom web portal's "Settings" interface.`,
        404: `**HTTP Status Code:** \`404\` <br> Not Found

         **Error Code:** \`300\` <br>
        Webinar ID does not exist.

         **Error Code:** \`3001\` <br>
        Webinar does not exist: {webinarId}.`,
      },
    });
  }

  /**
   * Get webinar tracking sources
   * [Webinar Registration Tracking Sources](https://support.zoom.us/hc/en-us/articles/360000315683-Webinar-Registration-Source-Tracking) allow you to see where your registrants are coming from if you share the webinar registration page in multiple platforms. You can then use the source tracking to see the number of registrants generated from each platform.<br> Use this API to list information on all the tracking sources of a Webinar.<br>
   * **Scopes:** `webinar:read:admin`, `webinar:read`<br>
   *
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
   * **Prerequisites**:<br>
   * * [Webinar license](https://zoom.us/webinar).
   * * Registration must be required for the Webinar.
   *
   * @returns any **HTTP Status Code:** `200`
   * @throws ApiError
   */
  public getTrackingSources({
    webinarId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
  }): CancelablePromise<{
    /**
     * The total number of registration records for this Webinar.
     */
    total_records?: number;
    /**
     * Tracking Sources object.
     */
    tracking_sources?: Array<{
      /**
       * Unique Identifier of the tracking source.
       */
      id?: string;
      /**
       * Number of registrations made from this source.
       */
      registration_count?: number;
      /**
       * Name of the source (platform) where the registration URL was shared.
       */
      source_name?: string;
      /**
       * Tracking URL. The URL that was shared for the registration.
       */
      tracking_url?: string;
      /**
       * Number of visitors who visited the registration page from this source.
       */
      visitor_count?: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webinars/{webinarId}/tracking_sources',
      path: {
        webinarId: webinarId,
      },
    });
  }

  /**
   * Get webinar's token
   * Use this API to get a webinar's [closed caption token (caption URL)](https://support.zoom.us/hc/en-us/articles/115002212983-Using-a-third-party-closed-captioning-service). This token lets you use a third-party service to stream text to their closed captioning software to the Zoom webinar.
   *
   * **Scopes:** `webinar:read`, `webinar:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro or higher plan with the Webinar add-on.
   * * The **Closed captioning** setting enabled in the Zoom web portal.
   * *
   * * The **Allow use of caption API Token to integrate with 3rd-party Closed Captioning services** setting enabled.
   * @returns any **HTTP Status Code:** `200` <br>
   * Webinar token returned.
   * @throws ApiError
   */
  public webinarToken({
    webinarId,
    type = 'closed_caption_token',
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * The webinar token type:
     * * `closed_caption_token` — The third-party closed caption API token.
     *
     * This defaults to `closed_caption_token`.
     */
    type?: 'closed_caption_token';
  }): CancelablePromise<{
    /**
     * The generated webinar token.
     */
    token?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webinars/{webinarId}/token',
      path: {
        webinarId: webinarId,
      },
      query: {
        type: type,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`300\` <br>
        Invalid webinar ID.

         **Error Code:** \`3000\` <br>
        Closed captioning disabled. To enable this feature, enable the "Closed captioning" and "Allow use of caption API Token to integrate with 3rd-party Closed Captioning services" settings in the Zoom web portal's "Settings" interface.

         **Error Code:** \`3000\` <br>
        Webinar {webinarId} has not started.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`300\` <br>
        Webinar ID does not exist.

         **Error Code:** \`3001\` <br>
        Webinar does not exist: {webinarId}`,
      },
    });
  }

  /**
   * Get webinar's session branding
   * Use this API to get the webinar's [Session Branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) information. Session branding lets hosts visually customize a webinar by setting a webinar wallpaper that displays behind video tiles. Session branding also lets hosts set the Virtual Background for and apply name tags to hosts, alternative hosts, panelists, interpreters, and speakers.
   *
   * **Scopes:** `webinar:read`, `webinar:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro or higher plan with the Webinar add-on.
   * * The **Webinar Session Branding** setting enabled.
   * @returns any **HTTP Status Code:** `200` <br>
   * Webinar session branding returned.
   * @throws ApiError
   */
  public getWebinarBranding({
    webinarId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
  }): CancelablePromise<{
    /**
     * Information about the webinar's [Wallpaper] file.
     */
    wallpaper?: {
      /**
       * The wallpaper's file ID.
       */
      id?: string;
    };
    /**
     * Information about the webinar's [Virtual Background](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background) files.
     */
    virtual_backgrounds?: Array<{
      /**
       * The Virtual Background's file ID.
       */
      id?: string;
      /**
       * The Virtual Background's file name.
       */
      name?: string;
      /**
       * Whether the file is the default Virtual Background file.
       */
      is_default?: boolean;
    }>;
    /**
     * Information about the webinar's name tag.
     */
    name_tags?: Array<{
      /**
       * The name tag's ID.
       */
      id?: string;
      /**
       * The name tag's name.
       */
      name?: string;
      /**
       * The name tag's text color.
       */
      text_color?: string;
      /**
       * The name tag's accent color.
       */
      accent_color?: string;
      /**
       * The name tag's background color.
       */
      background_color?: string;
      /**
       * Whether the file is the default name tag or not.
       */
      is_default?: boolean;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webinars/{webinarId}/branding',
      path: {
        webinarId: webinarId,
      },
      errors: {
        300: `**HTTP Status Code:** \`300\` <br>
        Invalid webinar ID.`,
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`1010\` <br>
        User does not belong to this account: {accountId}

         **Error Code:** \`3000\` <br>
        You cannot enable session branding for this webinar.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Webinar not found.

         **Error Code:** \`1001\` <br>
        User "{userId}" does not exist or does not belong to this account.

         **Error Code:** \`3001\` <br>
        Webinar "{webinarId}" not found or has expired.`,
      },
    });
  }

  /**
   * Upload a webinar's branding Virtual Background
   * Use this API to upload a webinar's session branding [Virtual Background](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background). Hosts and panelists can select and use these Virtual Backgrounds during the webinar. Branding Virtual Background files have the following restrictions:
   * * A webinar cannot exceed more than 10 Virtual Background files.
   * * You can only upload image files that are in JPG/JPEG, GIF or PNG format.
   * * The Virtual Background file size cannot exceed 15 megabytes (MB).
   *
   * **Scopes:** `webinar:write`, `webinar:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * *  The **Webinar Session Branding** setting enabled.
   * @returns any **HTTP Status Code:** `201` <br>
   * Virtual Background uploaded.
   * @throws ApiError
   */
  public uploadWebinarBrandingVb({
    webinarId,
    formData,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    formData?: {
      /**
       * The Virtual Background's file path, in binary format.
       */
      file: Blob;
      /**
       * Whether set the file as the default Virtual Background file.
       */
      default?: boolean;
      /**
       * Whether to set the Virtual Background file as the new default for all panelists. This includes panelists not currently assigned a default Virtual Background.
       */
      set_default_for_all_panelists?: boolean;
    };
  }): CancelablePromise<{
    /**
     * The Virtual Background file's ID.
     */
    id?: string;
    /**
     * The Virtual Background file's name.
     */
    name?: string;
    /**
     * Whether the file is the default Virtual Background file.
     */
    is_default?: boolean;
    /**
     * The Virtual Background file's size, in bytes.
     */
    size?: number;
    /**
     * The Virtual Background file's file type:
     * * `image` — An image file.
     */
    type?: 'image';
  }> {
    // @ts-ignore
    return this.httpRequest.request({
      method: 'POST',
      url: '/webinars/{webinarId}/branding/virtual_backgrounds',
      path: {
        webinarId: webinarId,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`3000\` <br>
        This webinar does not have session branding enabled.

         **Error Code:** \`120\`
         * No file uploaded. Verify that a file has been uploaded.
         * File size cannot exceed 15M.
         * A maximum of 10 files are allowed for a webinar.
         * Only JPG/JPEG, GIF, or PNG image files can be uploaded.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Webinar not found.

         **Error Code:** \`1001\` <br>
        User "{userId}" does not exist or does not belong to this account.

         **Error Code:** \`3001\` <br>
        Webinar "{webinarId}" not found or has expired.`,
      },
    });
  }

  /**
   * Set webinar's default branding Virtual Background
   * Use this API to set a webinar's default session branding [Virtual Background](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background).
   *
   * **Scopes:** `webinar:write`, `webinar:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The **Webinar Session Branding** setting enabled.
   * @returns void
   * @throws ApiError
   */
  public setWebinarBrandingVb({
    webinarId,
    id,
    setDefaultForAllPanelists,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * The Virtual Background file ID to update.
     */
    id?: string;
    /**
     * Whether to set the Virtual Background file as the new default for all panelists. This includes panelists not currently assigned a default Virtual Background.
     */
    setDefaultForAllPanelists?: boolean;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/webinars/{webinarId}/branding/virtual_backgrounds',
      path: {
        webinarId: webinarId,
      },
      query: {
        id: id,
        set_default_for_all_panelists: setDefaultForAllPanelists,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`1010\` <br>
        User does not belong to this account: {accountId}

         **Error Code:** \`300\` <br>
        Invalid parameter: {id}

         **Error Code:** \`3000\` <br>
        This webinar does not have session branding enabled.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Webinar not found.

         **Error Code:** \`1001\` <br>
        User "{userId}" does not exist or does not belong to this account.

         **Error Code:** \`3001\` <br>
        Webinar "{webinarId}" not found or has expired.`,
      },
    });
  }

  /**
   * Delete a webinar's branding Virtual Backgrounds
   * Use this API to delete a webinar's session branding [Virtual Background](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background).
   *
   * **Scopes:** `webinar:write`, `webinar:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The **Webinar Session Branding** setting enabled.
   * @returns void
   * @throws ApiError
   */
  public deleteWebinarBrandingVb({
    webinarId,
    ids,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * A comma-separated list of the Virtual Background file IDs to delete.
     */
    ids?: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/webinars/{webinarId}/branding/virtual_backgrounds',
      path: {
        webinarId: webinarId,
      },
      query: {
        ids: ids,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`1010\` <br>
        User does not belong to this account: {accountId}

         **Error Code:** \`300\` <br>
        Invalid parameter: ids

         **Error Code:** \`3000\` <br>
        This webinar does not have session branding enabled.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Webinar not found.

         **Error Code:** \`1001\` <br>
        User "{userId}" does not exist or does not belong to this account.

         **Error Code:** \`3001\` <br>
        Webinar "{webinarId}" not found or has expired.`,
      },
    });
  }

  /**
   * Upload a webinar's branding wallpaper
   * Use this API to upload a webinar's session branding wallpaper file. Webinar branding wallpaper files have the following requirements:
   * * A webinar can only have one wallpaper file.
   * * You can only upload image files that are in JPG/JPEG, GIF, or PNG format.
   * * Image files must be 16:9 ratio. The recommended image size is 1920 x 1080 pixels (px).
   * * The wallpaper file size cannot exceed 15 megabytes (MB).
   *
   * **Scopes:** `webinar:write`, `webinar:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * *  The **Webinar Session Branding** setting enabled.
   * @returns any **HTTP Status Code:** `201` <br>
   * Webinar wallpaper uploaded.
   * @throws ApiError
   */
  public uploadWebinarBrandingWallpaper({
    webinarId,
    formData,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    formData?: {
      /**
       * The wallpaper's file path, in binary format.
       */
      file: Blob;
    };
  }): CancelablePromise<{
    /**
     * The wallpaper file's ID.
     */
    id?: string;
    /**
     * The wallpaper file's name.
     */
    name?: string;
    /**
     * The wallpaper file's size, in bytes.
     */
    size?: number;
    /**
     * The wallpaper file's file type:
     * * `image` — An image file.
     */
    type?: 'image';
  }> {
    // @ts-ignore
    return this.httpRequest.request({
      method: 'POST',
      url: '/webinars/{webinarId}/branding/wallpaper',
      path: {
        webinarId: webinarId,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`3000\` <br>
        This webinar does not have session branding enabled.

         **Error Code:** \`120\`
         * No file uploaded. Verify that a file has been uploaded.
         * File size cannot exceed 15M.
         * A maximum of 10 files are allowed for a webinar.
         * Only JPG/JPEG, GIF, or PNG image files can be uploaded.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Webinar not found.

         **Error Code:** \`1001\` <br>
        User "{userId}" does not exist or does not belong to this account.

         **Error Code:** \`3001\` <br>
        Webinar "{webinarId}" not found or has expired.`,
      },
    });
  }

  /**
   * Delete a webinar's branding wallpaper
   * Use this API to delete a webinar's session branding wallpaper file.
   *
   * **Scopes:** `webinar:write`, `webinar:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The **Webinar Session Branding** setting enabled.
   * @returns void
   * @throws ApiError
   */
  public deleteWebinarBrandingWallpaper({
    webinarId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/webinars/{webinarId}/branding/wallpaper',
      path: {
        webinarId: webinarId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`1010\` <br>
        User does not belong to this account: {accountId}

         **Error Code:** \`300\` <br>
        Invalid parameter: {id}

         **Error Code:** \`3000\` <br>
        This webinar does not have session branding enabled.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Webinar not found.

         **Error Code:** \`1001\` <br>
        User "{userId}" does not exist or does not belong to this account.

         **Error Code:** \`3001\` <br>
        Webinar "{webinarId}" not found or has expired.`,
      },
    });
  }

  /**
   * Create a webinar's branding name tag
   * Use this API to create a webinar's [Session Branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) name tag. There's a limit of 20 name tags per webinar. **Scopes:** `webinar:write`, `webinar:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * *  The **Webinar Session Branding** setting enabled.
   * @returns any **HTTP Status Code:** `201` <br>
   * Name tag created.
   * @throws ApiError
   */
  public createWebinarBrandingNameTag({
    webinarId,
    requestBody,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    requestBody: {
      /**
       * The name tag's name.
       *
       * **Note:** This value cannot exceed more than 50 characters.
       */
      name: string;
      /**
       * The name tag's text color.
       */
      text_color: string;
      /**
       * The name tag's accent color.
       */
      accent_color: string;
      /**
       * The name tag's background color.
       */
      background_color: string;
      /**
       * Whether set the name tag as the default name tag or not.
       */
      is_default?: boolean;
      /**
       * Whether to set the name tag as the new default for all panelists or not. This includes panelists not currently assigned a default name tag.
       */
      set_default_for_all_panelists?: boolean;
    };
  }): CancelablePromise<{
    /**
     * The name tag's ID.
     */
    id?: string;
    /**
     * The name tag's name.
     */
    name?: string;
    /**
     * The name tag's text color.
     */
    text_color?: string;
    /**
     * The name tag's accent color.
     */
    accent_color?: string;
    /**
     * The name tag's background_color color.
     */
    background_color?: string;
    /**
     * Whether the name tag is the default name tag or not.
     */
    is_default?: boolean;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/webinars/{webinarId}/branding/name_tags',
      path: {
        webinarId: webinarId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`3000\` <br>
        This webinar does not have session branding enabled.<br>
        You have reached the limit for the number of name tags you can add for this webinar. The limit is 20.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Webinar not found.`,
      },
    });
  }

  /**
   * Delete a webinar's branding name tag
   * Use this API to delete a webinar's [Session Branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) name tag.
   *
   * **Scopes:** `webinar:write`, `webinar:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * The **Webinar Session Branding** setting enabled.
   * @returns void
   * @throws ApiError
   */
  public deleteWebinarBrandingNameTag({
    webinarId,
    nameTagIds,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * A comma-separated list of the name tag IDs to delete.
     */
    nameTagIds?: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/webinars/{webinarId}/branding/name_tags',
      path: {
        webinarId: webinarId,
      },
      query: {
        name_tag_ids: nameTagIds,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`300\` <br>
        Invalid parameter: name_tag_ids

         **Error Code:** \`3000\` <br>
        This webinar does not have session branding enabled.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Webinar not found.`,
      },
    });
  }

  /**
   * Update a webinar's branding name tag
   * Use this API to update a webinar's [Session Branding](https://support.zoom.us/hc/en-us/articles/4836268732045-Using-Webinar-Session-Branding) name tag. **Scopes:** `webinar:write`, `webinar:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * *  The **Webinar Session Branding** setting enabled.
   * @returns void
   * @throws ApiError
   */
  public updateWebinarBrandingNameTag({
    webinarId,
    nameTagId,
    requestBody,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * The name tag's ID.
     */
    nameTagId: string;
    requestBody: {
      /**
       * The name tag's name.
       *
       * **Note:** This value cannot exceed more than 50 characters.
       */
      name?: string;
      /**
       * The name tag's text color.
       */
      text_color?: string;
      /**
       * The name tag's accent color.
       */
      accent_color?: string;
      /**
       * The name tag's background color.
       */
      background_color?: string;
      /**
       * Whether set the name tag as the default name tag or not.
       */
      is_default?: boolean;
      /**
       * Whether to set the name tag as the new default for all panelists or not. This includes panelists not currently assigned a default name tag.
       */
      set_default_for_all_panelists?: boolean;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/webinars/{webinarId}/branding/name_tags/{nameTagId}',
      path: {
        webinarId: webinarId,
        nameTagId: nameTagId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`3000\` <br>
        This webinar does not have session branding enabled.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Webinar not found.`,
      },
    });
  }

  /**
   * Get a webinar's join token for local recording
   * Use this API to get a webinar's join token to allow for local recording. The join token lets a recording bot implemented using Zoom Meeting SDK to connect to a Zoom webinar. The recording bot can then automatically start locally recording. This supports both regular and raw local recording types.
   *
   * **Scopes:** `webinar_token:read:admin:local_recording`, `webinar_token:read:local_recording` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro or higher plan with a Webinar Add-on.
   * * The **Local recording** user setting enabled in the Zoom web portal.
   * @returns any **HTTP Status Code:** `200` <br>
   * Webinar local recording token returned.
   * @throws ApiError
   */
  public webinarLocalRecordingJoinToken({
    webinarId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
  }): CancelablePromise<{
    /**
     * The number of seconds the join token is valid for before it expires. This value always returns `120`.
     */
    expire_in?: 120;
    /**
     * The join token.
     */
    token?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webinars/{webinarId}/jointoken/local_recording',
      path: {
        webinarId: webinarId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`300\` <br>
        Invalid webinar ID.

         **Error Code:** \`124\` <br>
        This API only supports OAuth2 authorization.

         **Error Code:** \`3000\` <br>
        Not allowed to start local recording. To use this feature, enable the "Local Recording" setting in the "Settings" page of the Zoom web portal.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`300\` <br>
        Webinar ID does not exist.

         **Error Code:** \`3001\` <br>
        Webinar does not exist: {webinarId}`,
      },
    });
  }

  /**
   * Get a webinar's archive token for local archiving
   * Use this API to get a webinar's archive token to allow local archiving. The archive token allows a meeting SDK app or bot to get archive permission to access the webinar's raw audio and video media stream in real-time.
   *
   * **Scopes:** `webinar_token:read:admin:local_archiving` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro or higher plan with a Webinar Add-on.
   * * The **Archive meetings and webinars** account setting enabled in the Zoom web portal.
   * @returns any **HTTP Status Code:** `200` <br>
   * Webinar local archiving token returned.
   * @throws ApiError
   */
  public webinarLocalArchivingArchiveToken({
    webinarId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
  }): CancelablePromise<{
    /**
     * The number of seconds the archive token is valid for before it expires. This value always returns `120`.
     */
    expire_in?: 120;
    /**
     * The archive token.
     */
    token?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webinars/{webinarId}/jointoken/local_archiving',
      path: {
        webinarId: webinarId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`300\` <br>
        Invalid webinar ID.

         **Error Code:** \`124\` <br>
        This API only supports OAuth2 authorization.

         **Error Code:** \`3000\` <br>
        Not allowed to start local archiving. To use this feature, enable the "Archive meetings and webinars" setting in the "Settings" page of the Zoom web portal.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`300\` <br>
        Webinar ID does not exist.

         **Error Code:** \`3001\` <br>
        Webinar does not exist: {webinarId}`,
      },
    });
  }

  /**
   * Get a webinar's join token for live streaming
   * Use this API to get a webinar's archive token to allow live streaming. The join token allows a recording bot implemented using Zoom meeting SDK to connect to a Zoom meeting "hosted by the issuer of the token", and can call the streaming method automatically. It supports both regular live streaming, and raw streaming.
   *
   * **Scopes:** `webinar_token:read:admin:live_streaming`, `webinar_token:read:live_streaming` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Pro or higher plan with a Webinar Add-on.
   * * The **Allow livestreaming of webinars** user setting enabled in the Zoom web portal.
   * @returns any **HTTP Status Code:** `200` <br>
   * Webinar live streaming token returned.
   * @throws ApiError
   */
  public webinarLiveStreamingJoinToken({
    webinarId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
  }): CancelablePromise<{
    /**
     * The number of seconds the join token is valid for before it expires. This value always returns `120`.
     */
    expire_in?: 120;
    /**
     * The join token.
     */
    token?: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/webinars/{webinarId}/jointoken/live_streaming',
      path: {
        webinarId: webinarId,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\` <br>
        Bad Request

         **Error Code:** \`300\` <br>
        Invalid webinar ID.

         **Error Code:** \`124\` <br>
        This API only supports OAuth2 authorization.

         **Error Code:** \`3000\` <br>
        Not allowed to start live streaming. To use this feature, enable the "Allow livestreaming of webinars" setting in the "Settings" page of the Zoom web portal.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`300\` <br>
        Webinar ID does not exist.

         **Error Code:** \`3001\` <br>
        Webinar does not exist: {webinarId}`,
      },
    });
  }

  /**
   * Delete a live webinar message
   * Deletes a message in a live webinar based on ID.
   *
   * **Scopes:** `webinar:write` `webinar:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   * @returns void
   * @throws ApiError
   */
  public deleteWebinarChatMessageById({
    webinarId,
    messageId,
  }: {
    /**
     * The webinar's ID.
     */
    webinarId: number;
    /**
     * The live webinar chat message's unique identifier (UUID), in base64-encoded format.
     */
    messageId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/live_webinars/{webinarId}/chat/messages/{messageId}',
      path: {
        webinarId: webinarId,
        messageId: messageId,
      },
      errors: {
        400: `**HTTP Status Code:** \`200\` <br>
        Bad Request

         **Error Code:** \`200\`
         * Only available for Paid accounts.
         * DLP is not enabled.`,
        404: `**HTTP Status Code:** \`404\` <br>
        Not Found

         **Error Code:** \`3001\` <br>
        Webinar does not exist: {webinarId}`,
      },
    });
  }
}
