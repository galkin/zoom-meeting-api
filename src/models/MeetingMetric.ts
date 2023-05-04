/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Meeting metric details.
 */
export type MeetingMetric = {
  /**
   * Host display name.
   */
  host?: string;
  /**
   * Custom keys and values assigned to the meeting.
   */
  custom_keys?: Array<{
    /**
     * Custom key associated with the meeting.
     */
    key?: string;
    /**
     * Value of the custom key associated with the meeting.
     */
    value?: string;
  }>;
  /**
   * Department of the host.
   */
  dept?: string;
  /**
   * Meeting duration.
   */
  duration?: string;
  /**
   * Email address of the host.
   */
  email?: string;
  /**
   * Meeting end time.
   */
  end_time?: string;
  /**
   * Indicates whether or not [third party audio](https://support.zoom.us/hc/en-us/articles/202470795-3rd-Party-Audio-Conference) was used in the meeting.
   */
  has_3rd_party_audio?: boolean;
  /**
   * Whether the archiving feature was used in the meeting.
   */
  has_archiving?: boolean;
  /**
   * Indicates whether or not the PSTN was used in the meeting.
   */
  has_pstn?: boolean;
  /**
   * Indicates whether or not the recording feature was used in the meeting.
   */
  has_recording?: boolean;
  /**
   * Indicates whether or not screenshare feature was used in the meeting.
   */
  has_screen_share?: boolean;
  /**
   * Indicates whether or not someone joined the meeting using SIP.
   */
  has_sip?: boolean;
  /**
   * Indicates whether or not video was used in the meeting.
   */
  has_video?: boolean;
  /**
   * Indicates whether or not VoIP was used in the meeting.
   */
  has_voip?: boolean;
  /**
   * Indicates whether a manual caption was enabled in the meeting.
   */
  has_manual_captions?: boolean;
  /**
   * Indicates whether an automated caption was enabled in the meeting.
   */
  has_automated_captions?: boolean;
  /**
   * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
   */
  id?: number;
  /**
   * The number of Zoom Room participants in the meeting.
   */
  in_room_participants?: number;
  /**
   * Meeting participant count.
   */
  participants?: number;
  /**
   * Meeting start time.
   */
  start_time?: string;
  /**
   * Meeting topic.
   */
  topic?: string;
  /**
   * License type of the user.
   */
  user_type?: string;
  /**
   * Meeting UUID. Please double encode your UUID when using it for API calls if the UUID begins with a '/'or contains '//' in it.
   */
  uuid?: string;
};
