/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Registrant Status
 */
export type RecordingRegistrantStatus = {
  action: RecordingRegistrantStatus.action;
  /**
   * List of registrants
   */
  registrants?: Array<{
    id?: string;
  }>;
};

export namespace RecordingRegistrantStatus {
  export enum action {
    APPROVE = 'approve',
    DENY = 'deny',
  }
}
