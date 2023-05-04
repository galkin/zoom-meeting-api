/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Webinar panelist.
 */
export type WebinarPanelist = {
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
