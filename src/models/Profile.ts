/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Profile = {
  recording_storage_location?: {
    /**
     * Users can choose the country to store their recorded content. Content can include meeting, webinar, and phone recordings, as well as voicemail, transcripts, and custom greeting prompts. See [Managing the Communications Content storage location](https://support.zoom.us/hc/en-us/articles/360050781131) for details.
     *
     * Provide abbreviated country codes as the value for this field. See the [Countries abbreviation list](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#countries) for details.
     */
    allowed_values?: Array<string>;
    /**
     * Abbreviated country code.
     */
    value?: string;
  };
};
