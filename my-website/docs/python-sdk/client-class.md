---
sidebar_position: 9
---

# Client Class

**Client** used to perform requests to our API.

## Attributes / Properties

| Name 	| Type   	| Description                                  	|
|------	|--------	|----------------------------------------------	|
| key  	| string 	| The API_KEY that will be used by the client. 	|

## Methods

| METHOD    	| DESCRIPTION               	|
|-----------	|---------------------------	|
| [request()](https://www.lettria.com/documentation/docs/python-sdk/client-class#request) 	| Send a request to our API 	|

## request

```python
request(text)
```
Performs a request to lettria API using the API_KEY provided.

**Parameters:**

| Name 	| Type   	| Description                     	| Optional 	|
|------	|--------	|---------------------------------	|----------	|
| text 	| string 	| Text data to be sent to the API 	| False    	|

**Return:**

| Type               	| Description                                                                 	|
|--------------------	|-----------------------------------------------------------------------------	|
| list of dictionary 	| Each of these objects represents the informations collected for a sentence. 	|


[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)