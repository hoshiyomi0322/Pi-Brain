# Versions
- ### HTTP/1.0
- ### HTTP/1.1
- ### HTTP/2
- ### HTTP/3

# HTTP Non-persistent/Persistent Connection
<div align="center"><img src="./image/http-connection.png" width="65%"></div>

- ### HTTP Non-persistent Connection
    1. TCP connection opened
    2. send and receive Single HTTP requests/responses
    3. TCP connection closed
- ### HTTP Persistent Connection
    1. TCP connection opened
    2. send and receive Multiple HTTP requests/responses
    3. TCP connection closed

# HTTP Status Code
- ### 1xx Informational Response
  - 100 Continue
  - 101 Switching Protocols
- ### 2xx Success
    - 200 OK
    - 201 Created
    - 202 Accepted
    - 204 No Content
- ### 3xx Redirection
    - 304 Not Modified
- ### 4xx Client Error
    - 403 Forbidden
    - 404 Not Found
    - 405 Method Not Allowed
    - 406 Not Acceptable
- ### 5xx Server Error

