/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TrackingFieldService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List tracking fields
   * Use this API to list all the [tracking fields](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) on your Zoom account. Tracking fields let you analyze usage by various fields within an organization.
   *
   * **Scopes:** `tracking_fields:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
   *
   * **Prerequisites:**
   * * A Business, Education, API or higher plan.
   * @returns any **HTTP Status Code:** `200`<br>
   * List of Tracking Fields returned.
   * @throws ApiError
   */
  public trackingfieldList(): CancelablePromise<{
    /**
     * The number of all records available across pages
     */
    total_records?: number;
    /**
     * Array of Tracking Fields
     */
    tracking_fields?: Array<{
      /**
       * ID of Tracking Field
       */
      id?: string;
      /**
       * Label/ Name for the tracking field.
       */
      field?: string;
      /**
       * Array of recommended values
       */
      recommended_values?: Array<string>;
      /**
       * Tracking Field Required
       */
      required?: boolean;
      /**
       * Tracking Field Visible
       */
      visible?: boolean;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tracking_fields',
    });
  }

  /**
   * Create a tracking field
   * Use this API to create a new [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields). Tracking fields let you analyze usage by various fields within an organization. When scheduling a meeting, tracking fields will be included in the meeting options.
   *
   * **Scope:** `tracking_fields:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Business, Education, API or higher plan.
   * @returns any **HTTP Status Code:** `201`<br>
   * Tracking Field created
   * @throws ApiError
   */
  public trackingfieldCreate({
    requestBody,
  }: {
    /**
     * Tracking Field
     */
    requestBody: {
      /**
       * Label/ Name for the tracking field.
       */
      field?: string;
      /**
       * Array of recommended values
       */
      recommended_values?: Array<string>;
      /**
       * Tracking Field Required
       */
      required?: boolean;
      /**
       * Tracking Field Visible
       */
      visible?: boolean;
    };
  }): CancelablePromise<{
    /**
     * Tracking Field ID
     */
    id?: string;
    /**
     * Label/ Name for the tracking field.
     */
    field?: string;
    /**
     * Array of recommended values
     */
    recommended_values?: Array<string>;
    /**
     * Tracking Field Required
     */
    required?: boolean;
    /**
     * Tracking Field Visible
     */
    visible?: boolean;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/tracking_fields',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete a tracking field
   * Use this API to delete a [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields).
   *
   * **Scope:** `tracking_fields:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Business, Education, API or higher plan.
   * @returns void
   * @throws ApiError
   */
  public trackingfieldDelete({
    fieldId,
  }: {
    /**
     * The Tracking Field ID
     */
    fieldId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/tracking_fields/{fieldId}',
      path: {
        fieldId: fieldId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>
        Tracking Field not found`,
      },
    });
  }

  /**
   * Get a tracking field
   * Use this API to return information about a [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields).
   *
   * **Scopes:** `tracking_fields:read:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Business, Education, API or higher plan.
   * @returns any **HTTP Status Code:** `200`<br>
   * Tracking Field object returned
   * @throws ApiError
   */
  public trackingfieldGet({
    fieldId,
  }: {
    /**
     * The Tracking Field ID
     */
    fieldId: string;
  }): CancelablePromise<{
    /**
     * Tracking Field ID
     */
    id?: string;
    /**
     * Label/ Name for the tracking field.
     */
    field?: string;
    /**
     * Array of recommended values
     */
    recommended_values?: Array<string>;
    /**
     * Tracking Field Required
     */
    required?: boolean;
    /**
     * Tracking Field Visible
     */
    visible?: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tracking_fields/{fieldId}',
      path: {
        fieldId: fieldId,
      },
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>
        Tracking Field not found`,
      },
    });
  }

  /**
   * Update a tracking field
   * Use this API to update a [tracking field](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields).
   *
   * **Scope:** `tracking_fields:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites:**
   * * A Business, Education, API or higher plan.
   * @returns void
   * @throws ApiError
   */
  public trackingfieldUpdate({
    fieldId,
    requestBody,
  }: {
    /**
     * The Tracking Field ID
     */
    fieldId: string;
    requestBody: {
      /**
       * Label/ Name for the tracking field.
       */
      field?: string;
      /**
       * Array of recommended values
       */
      recommended_values?: Array<string>;
      /**
       * Tracking Field Required
       */
      required?: boolean;
      /**
       * Tracking Field Visible
       */
      visible?: boolean;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/tracking_fields/{fieldId}',
      path: {
        fieldId: fieldId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        404: `**HTTP Status Code:** \`404\`<br>
        Tracking Field not found`,
      },
    });
  }
}
