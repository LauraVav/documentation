---
sidebar_position: 8
---

# Client class

**Client** used to perform requests to our API.

## Attributes / Properties

| Name 	| Type   	| Description                                  	|
|------	|--------	|----------------------------------------------	|
| key  	| string 	| The API_KEY that will be used by the client. 	|

## Methods

| METHOD    	| DESCRIPTION               	|
|-----------	|---------------------------	|
| request() 	| Send a request to our API 	|

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
