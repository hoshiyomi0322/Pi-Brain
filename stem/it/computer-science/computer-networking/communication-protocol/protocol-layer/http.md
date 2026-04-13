# HTTP Version
- ### HTTP/1.0
- ### HTTP/1.1
- ### HTTP/2
- ### HTTP/3

# HTTP Non-persistent/Persistent Connection
<div align="center"><img src="./image/http-connection.png" width="65%"></div>

- ### HTTP Non-persistent Connection
    1. TCP connection opened
    2. send and receive Single HTTP request/response
    3. TCP connection closed
- ### HTTP Persistent Connection
    1. TCP connection opened
    2. send and receive Multiple HTTP requests/responses
    3. TCP connection closed

# HTTP Message Format
- ### HTTP Request Message：[Request line](#request-linehttp-method--uri--http-version) + [Request Headers](#request-headers) + Body
    - ### Request line：[HTTP Method](#http-method) + [URI](../../computer-networking.md#uniform-resource-identifier-uri) + [HTTP Version](#http-version)
- ### HTTP Response Message：[Status line](#status-linehttp-version--http-status-code) + [Response Headers](#response-headers) + Body
    - ### Status line：[HTTP Version](#http-version) + [HTTP Status Code](#http-status-code)

# HTTP Method
|HTTP Method|Description|
|:---:|:---:|
|GET|Retrieve resource from the server|
|POST|Submit resource to the server|
|PUT|Update an entire resource|
|PATCH|Partially Update a resource|
|DELETE|Delete a resource|
|HEAD|Retrieve Headers only|
|OPTIONS|Get supported HTTP Methods of the server|
|CONNECT|Establish a Tunnel (used for HTTPS)|
|TRACE|Echo Back the Received Request (used for debugging)|

# HTTP Status Code
- ### 1xx Informational Response
    - 100 Continue
    - 101 Switching Protocols
    - 102 Processing
    - 103 Early Hints
- ### 2xx Success
    - 200 OK
    - 201 Created
    - 202 Accepted
    - 203 Non-Authoritative Information
    - 204 No Content
    - 205 Reset Content
    - 206 Partial Content
    - 207 Multi-Status
    - 208 Already Reported
    - 226 IM Used
- ### 3xx Redirection
    - 300 Multiple Choices
    - 301 Moved Permanently
    - 302 Found
    - 303 See Other
    - 304 Not Modified
    - 305 Use Proxy
    - 306 Switch Proxy
    - 307 Temporary Redirect
    - 308 Permanent Redirect
- ### 4xx Client Error
    - 400 Bad Request
    - 401 Unauthorized
    - 402 Payment Required
    - 403 Forbidden
    - 404 Not Found
    - 405 Method Not Allowed
    - 406 Not Acceptable
    - 407 Proxy Authentication Required
    - 408 Request Timeout
    - 409 Conflict
    - 410 Gone
    - 411 Length Required
    - 412 Precondition Failed
    - 413 Content Too Large
    - 414 URI Too Long
    - 415 Unsupported Media Type
    - 416 Range Not Satisfiable
    - 417 Expectation Failed
    - 418 I'm a teapot
    - 421 Misdirected Request
    - 422 Unprocessable Content
    - 423 Locked
    - 424 Failed Dependency
    - 425 Too Early
    - 426 Upgrade Required
    - 428 Precondition Required
    - 429 Too Many Requests
    - 431 Request Header Fields Too Large
    - 451 Unavailable For Legal Reasons
- ### 5xx Server Error
    - 500 Internal Server Error
    - 501 Not Implemented
    - 502 Bad Gateway
    - 503 Service Unavailable
    - 504 Gateway Timeout
    - 505 HTTP Version Not Supported

# HTTP Headers
- ### Request Headers
    - Host
    - User-Agent
    - Accept
    - Accept-Language
    - Accept-Encoding
    - Referer
    - Connection
    - Content-Length
    
- ### Response Headers
    - Connection
    - Content-Encoding
    - Content-Language
    - Content-Length
    - Content-Type
    - Date
    - ETag
    - Keep-Alive
    - Last-Modified
    - Server
    - Set-Cookie
    

