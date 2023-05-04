/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SipPhoneService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List SIP phones
   * Zoom's Phone System Integration (PSI), also referred as SIP phones, enables an organization to leverage the Zoom client to complete a softphone registration to supported premise based PBX system. End users will have the ability to have softphone functionality within a single client while maintaining a comparable interface to Zoom Phone. Use this API to list SIP phones on an account.<br><br>
   * **Prerequisites**:
   * * Currently only supported on Cisco and Avaya PBX systems.
   * * User must enable SIP Phone Integration by contacting the [Sales](https://zoom.us/contactsales) team.<br> **Scope:** `sip_phone:read:admin`<br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
   *
   * @returns any **HTTP Status Code:** `200`<br>
   * SIP Phones listed successfully.
   *
   * **Error Code:** `200`<br>
   * Permission missing: Enable SIP Phone Integration by contacting a Zoom Admin first.
   * @throws ApiError
   */
  public listSipPhones({
    pageNumber = 1,
    searchKey,
    pageSize,
    nextPageToken,
  }: {
    /**
     * **Deprecated.** We will no longer support this field in a future release. Instead, use the `next_page_token` for pagination.
     * @deprecated
     */
    pageNumber?: number;
    /**
     * User name or email address of a user. If this parameter is provided, only the SIP phone system integration enabled for that specific user will be returned. Otherwise, all SIP phones on an account will be returned.
     */
    searchKey?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
  }): CancelablePromise<{
    next_page_token?: string;
    /**
     * The number of pages returned for the request made.
     */
    page_count?: number;
    /**
     * The page number of the current results.
     */
    page_number?: number;
    /**
     * The number of records returned within a single API call.
     */
    page_size?: number;
    /**
     * SIP phones object.
     */
    phones?: Array<{
      /**
       * Authorization name of the user  registered for SIP Phone.
       */
      authorization_name?: string;
      /**
       * The name or IP address of your provider's SIP domain.
       */
      domain?: string;
      /**
       * Unique Identifier of the SIP Phone.
       */
      id?: string;
      /**
       * The password generated for the user in the SIP account.
       *
       */
      password?: string;
      /**
       * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server, or empty.
       */
      proxy_server?: string;
      /**
       * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server, or empty.
       */
      proxy_server2?: string;
      /**
       * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server, or empty.
       */
      proxy_server3?: string;
      /**
       * IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address.
       */
      register_server?: string;
      /**
       * IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address.
       */
      register_server2?: string;
      /**
       * IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address.
       */
      register_server3?: string;
      /**
       * The number of minutes after which the SIP registration of the Zoom client user will expire, and the client will auto register to the SIP server.
       */
      registration_expire_time?: number;
      /**
       * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
       */
      transport_protocol?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
      /**
       * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
       */
      transport_protocol2?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
      /**
       * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
       */
      transport_protocol3?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
      /**
       * The email address of the user to associate with the SIP Phone. Can add `.win`, `.mac`, `.android`, `.ipad`, `.iphone`, `.linux`, `.pc`, `.mobile`, `.pad` at the end of the email (for example, `user@example.com.mac`) to add accounts for different platforms for the same user.
       */
      user_email?: string;
      /**
       * The phone number associated with the user in the SIP account.
       */
      user_name?: string;
      /**
       * The number to dial for checking voicemail.
       */
      voice_mail?: string;
    }>;
    /**
     * The total number of all the records available across pages.
     */
    total_records?: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/sip_phones',
      query: {
        page_number: pageNumber,
        search_key: searchKey,
        page_size: pageSize,
        next_page_token: nextPageToken,
      },
      errors: {
        400: `**HTTP Status Code:** \`400\`<br> Bad Request

        `,
      },
    });
  }

  /**
   * Enable SIP phone
   * Zoom's Phone System Integration (PSI), also referred as SIP phones, enables an organization to leverage the Zoom client to complete a softphone registration to supported premise based PBX system. End users will have the ability to have softphone functionality within a single client while maintaining a comparable interface to Zoom Phone. Use this API to enable a user to use SIP phone.<br><br>
   * **Prerequisites**:
   * * Currently only supported on Cisco and Avaya PBX systems.
   * * The account owner or account admin must first enable SIP Phone Integration by contacting the [Sales](https://zoom.us/contactsales) team.<br> **Scope:** `sip_phone:write:admin`
   * <br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   *
   * @returns any **HTTP Status Code:** `201`<br>
   * SIP Phone Created.
   *
   * @throws ApiError
   */
  public createSipPhone({
    requestBody,
  }: {
    requestBody?: {
      /**
       * Authorization name of the user registered for SIP Phone.
       */
      authorization_name: string;
      /**
       * The name or IP address of your provider's SIP domain. (example: CDC.WEB).
       */
      domain: string;
      /**
       * The password generated for the user in the SIP account.
       */
      password: string;
      /**
       * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server.
       */
      proxy_server: string;
      /**
       * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server, or empty.
       */
      proxy_server2?: string;
      /**
       * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server, or empty.
       */
      proxy_server3?: string;
      /**
       * IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address.
       */
      register_server: string;
      /**
       * IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address.
       */
      register_server2?: string;
      /**
       * IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address.
       */
      register_server3?: string;
      /**
       * The number of minutes after which the SIP registration of the Zoom client user will expire, and the client will auto register to the SIP server.
       */
      registration_expire_time?: number;
      /**
       * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
       */
      transport_protocol?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
      /**
       * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
       */
      transport_protocol2?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
      /**
       * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
       */
      transport_protocol3?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
      /**
       * The email address of the user to associate with the SIP Phone. Can add `.win`, `.mac`, `.android`, `.ipad`, `.iphone`, `.linux`, `.pc`, `.mobile`, `.pad` at the end of the email (for example, `user@example.com.mac`) to add accounts for different platforms for the same user.
       */
      user_email: string;
      /**
       * The phone number associated with the user in the SIP account.
       */
      user_name: string;
      /**
       * The number to dial for checking voicemail.
       */
      voice_mail: string;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/sip_phones',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request.<br>
         **Error Code:** \`200\`<br> Permission missing: Enable SIP Phone Integration by contacting a Zoom Admin first.<br>
         **Error Code:** \`300\`<br>SIP Phone with the same email already exists.


        `,
        404: `**HTTP Status Code:** \`404\`<br>
         **Error Code:** \`1001\`<br> User {userId} not exist or not belong to this account.


        `,
      },
    });
  }

  /**
   * Delete SIP phone
   * Use this API to delete a Zoom account's SIP phone.
   *
   * **Scopes:** `sip_phone:write:admin` <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   *
   * **Prerequisites**:
   * * Currently only supported on Cisco and Avaya PBX systems.
   * * The user must enable **SIP Phone Integration** by contacting the [Zoom Sales](https://zoom.us/contactsales) team.
   * @returns any **Error Code:** `200`<br>Permission missing: Enable SIP Phone Integration by contacting a Zoom Admin first.
   * @throws ApiError
   */
  public deleteSipPhone({
    phoneId,
  }: {
    /**
     * Unique Identifier of the SIP Phone. It can be retrieved from the List SIP Phones API.
     */
    phoneId: string;
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/sip_phones/{phoneId}',
      path: {
        phoneId: phoneId,
      },
      errors: {
        300: `**Error Code:** \`300\`The SIP phone with this phoneId was not found on this account.`,
      },
    });
  }

  /**
   * Update SIP phone
   * Zoom's Phone System Integration (PSI), also referred as SIP phones, enables an organization to leverage the Zoom client to complete a softphone registration to supported premise based PBX system. End users will have the ability to have softphone functionality within a single client while maintaining a comparable interface to Zoom Phone. Use this API to update information of a specific SIP Phone on a Zoom account.<br><br>
   * **Prerequisites**:
   * * Currently only supported on Cisco and Avaya PBX systems.
   * * The account owner or account admin must first enable SIP Phone Integration by contacting the [Sales](https://zoom.us/contactsales) team.<br> **Scope:** `sip_phone:write:admin`
   * <br>
   * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
   * @returns any **Error Code:** `200`<br>
   * Permission missing: Enable SIP Phone Integration by contacting a Zoom Admin first.
   *
   * @throws ApiError
   */
  public updateSipPhone({
    phoneId,
    requestBody,
  }: {
    /**
     * Unique Identifier of the SIP Phone. This can be retrieved from the List SIP Phones API.
     */
    phoneId: string;
    requestBody?: {
      /**
       * Authorization name of the user  registered for SIP Phone.
       */
      authorization_name: string;
      /**
       * The name or IP address of your provider's SIP domain. (example: CDC.WEB).
       */
      domain: string;
      /**
       * The password generated for the user in the SIP account.
       */
      password: string;
      /**
       * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server.
       */
      proxy_server: string;
      /**
       * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server.
       */
      proxy_server2: string;
      /**
       * IP address of the proxy server for SIP requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address. If you are not using a proxy server, this value can be the same as the Register Server.
       */
      proxy_server3: string;
      /**
       * IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address.
       */
      register_server: string;
      /**
       * IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address.
       */
      register_server2: string;
      /**
       * IP address of the server that accepts REGISTER requests. Note that if you are using the UDP transport protocol, the default port is 5060. If you are using UDP with a different port number, that port number must be included with the IP address.
       */
      register_server3: string;
      /**
       * The number of minutes after which the SIP registration of the Zoom client user will expire, and the client will auto register to the SIP server.
       */
      registration_expire_time?: number;
      /**
       * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
       */
      transport_protocol?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
      /**
       * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
       */
      transport_protocol2?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
      /**
       * Protocols supported by the SIP provider.<br> The value must be either `UDP`, `TCP`, `TLS`, `AUTO`.
       */
      transport_protocol3?: 'UDP' | 'TCP' | 'TLS' | 'AUTO';
      /**
       * The phone number associated with the user in the SIP account.
       */
      user_name: string;
      /**
       * The number to dial for checking voicemail.
       */
      voice_mail: string;
    };
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/sip_phones/{phoneId}',
      path: {
        phoneId: phoneId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        300: `**Error Code:** \`300\`<br>
        SIP phone not found: phoneId.<br>
        The SIP phone with this phoneId was not found on this account.
        `,
        400: `**HTTP Status Code:** \`400\`<br>
        Bad request.

        `,
      },
    });
  }
}
