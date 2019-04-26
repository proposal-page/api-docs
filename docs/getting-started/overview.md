# Overview

Our API is exposed as an HTTP/1 and HTTP/2 service over SSL. All endpoints live under the URL `https://api.proposalpage.com` and then generally follow the REST architecture.

## Concept Structure

The concept structure for a project (proposal) is the following:
```
/**
 * Concept structure
 * project
 *  |
 *  |--> blocks
 *   |
 *   |--> rows
 *     |
 *     |--> cols
 *       |
 *       |--> contents
 *         |
 *         |--> types {quote, image, text, etc}
 */
```

## Current Version

By default, all requests to `https://api.proposalpage.com` receive the v1 version of the REST API.

We try to avoid breaking backwards-compatibility as much as possible.


## Content Type

All requests must be encoded as JSON with the `Content-Type: application/json` header. Most responses, including errors, are encoded exclusively as JSON as well.


```
Content-Type: application/json
```

## Authentication

Provide your Auth token as part of the Authorization header.

If the authentication is unsuccessful, the status code **401** is returned.

```
Authorization: Bearer $TOKEN
```

> After detecting several requests with invalid credentials within a short period, the API will temporarily reject all authentication attempts for that user (including ones with valid credentials) with `403 Forbidden`.


## HTTP Verbs

Where possible, API strives to use appropriate HTTP verbs for each action.

| Verb | Description |
| :-: | :-: |
| HEAD | Can be issued against any resource to get just the HTTP header info. |
| GET | Used for retrieving resources. |
| POST | Used for creating resources. |
| PATCH | Used for updating resources with partial JSON data. For instance, an Issue resource has title and body attributes. A PATCH request may accept one or more of the attributes to update the resource. |
| PUT | Used for replacing resources or collections. For PUT requests with no body attribute, be sure to set the Content-Length header to zero. |
| DELETE | Used for deleting resources. |

## Pagination

Requests that return multiple items will be paginated to 10 items by default. You can specify further pages with the `?page` parameter. For some resources, you can also set a custom page size up to 100 with the `?itemsPerPage` parameter. Note that for technical reasons not all endpoints respect the `?itemsPerPage` parameter.

```bash
curl -XGET -H 'Authorization: Bearer $TOKEN' -H "Content-type: application/json" 'https://api.proposalpage.com/projects?page=2&itemsPerPage=100'
```

## Rate Limiting

We limit the number of calls you can make over a certain period of time. Rate limits vary and are specified by the following header in all responses:

| Header Name | Description |
| :-: | :-: |
| X-RateLimit-Limit | The maximum number of requests you're permitted to make per minute. |
| X-RateLimit-Remaining | The number of requests remaining in the current rate limit window. |
| X-RateLimit-Reset | The time at which the current rate limit window resets in UTC epoch seconds. |

If you exceed the rate limit, an error response returns with the status `429 Too Many Requests`.

```bash
Status: 429 Too Many Requests
```
