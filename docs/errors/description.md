# Description

The [Proposal Page][@proposal-page] API uses the following error codes:

Error Code | Meaning
---------- | -------
400 | Bad Request -- Your request has invalid data or is formatted in a wrong manner.
401 | Unauthorized -- Your Bearer Token is wrong.
403 | Forbidden -- The specified resource is hidden for administrators only.
404 | Not Found -- The specified resource could not be found.
405 | Method Not Allowed -- You tried to access a resource with an invalid method.
406 | Not Acceptable -- You requested a format that isn't json.
410 | Gone -- The requested resource has been removed from our servers.
418 | I'm a teapot.
422 | Unprocessable Entity -- Your request has valid data but violates some restriction.
429 | Too Many Requests -- You're sending too many requests! Slow down!
500 | Internal Server Error -- We had a problem with our server. Try again later.
503 | Service Unavailable -- We're temporarily offline for maintenance. Please try again later.
504 | Gateway Timeout -- The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI (e.g. HTTP, FTP, LDAP) or some other auxiliary server (e.g. DNS) it needed to access in attempting to complete the request.

[@proposal-page]: https://proposalpage.com
