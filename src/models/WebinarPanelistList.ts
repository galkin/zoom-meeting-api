/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Webinar panelist.
 */
export type WebinarPanelistList = {
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
};
