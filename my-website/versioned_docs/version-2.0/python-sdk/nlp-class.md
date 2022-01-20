---
sidebar_position: 2
---

# NLP Class

## What's the NLP class?

**NLP** inherits from [TextChunk](https://www.lettria.com/documentation/docs/python-sdk/texctchunk).

**NLP** is a class designed to give access to relevant data at the different levels (document, sentence, subsentence) in an intuitive way. It allows you to perform quick data exploration, manipulation and analysis.
It's also used to perform requests and can save as well as load result as **JSON** objects.

When a response from the API is received it's stored in a hierarchy of classes:
**NLP (all data) => Document => Sentence => Subsentence => Token**

At each level direct access it's possible to access inferior levels  i.e. nlp.sentences gives access to a list of all the Sentence in the current data, while nlp.documents[0].sentences only gives the Sentence of the first Document.

NLP is iterable and will yield Document instances.


## Attributes & Properties

| Name              	| Type                          	| Description                                                              	|
|-------------------	|-------------------------------	|--------------------------------------------------------------------------	|
| documents         	| list of [Document](https://www.lettria.com/documentation/docs/python-sdk/document-class) instances    	| List of all the **Document instances**                                       	|
| sentences         	| list of [Sentence](https://www.lettria.com/documentation/docs/python-sdk/sentence-class) instances    	| Direct access to all of the **Sentences** instances.                         	|
| subsentences      	| list of [Subsentence](https://www.lettria.com/documentation/docs/python-sdk/subsentence-class) instances 	| Direct access to all of the **Subsentence** instances.                       	|
| tokens            	| list of [Token](https://www.lettria.com/documentation/docs/python-sdk/token-class) instances       	| Direct access to all **Tokens** in the subsentence                            	|
| fields            	| list of string                	| List of all common properties accessible at all levels (token, pos etc.) 	|
| fields            	| instance of [Client](https://www.lettria.com/documentation/docs/python-sdk/client-class)            	| Client used for performing request to Lettria's API                      	|
| [Common properties](https://www.lettria.com/documentation/docs/python-sdk/common-properties)	| depends on property           	| Properties allowing access to specific data (pos, token etc.)            	|

## NLP methods

### Data analysis

Below is an overview list of the methods that can be used to manage data with the API. 

| Method                                                                                                    	| Description                        	|
|-----------------------------------------------------------------------------------------------------------	|------------------------------------	|
| [add_document()](https://www.lettria.com/documentation/docs/python-sdk/nlp-class#add_document)          	| Submits document to API            	|
| [save_data()](https://www.lettria.com/documentation/docs/python-sdk/nlp-class#save_results)            	| Saves data from json file          	|
| [load_results()](https://www.lettria.com/documentation/docs/python-sdk/nlp-class#load_results) 	| Loads data from json file          	|
| [reset_data()](https://www.lettria.com/documentation/docs/python-sdk/nlp-class#reset_data)              	| Erase data and reinitialise object 	|
| [add_client()](https://www.lettria.com/documentation/docs/python-sdk/nlp-class#add_client)              	| Adds new client / api_key          	|

### add_document() 
```python
add_document(document, skip_document = False, id=None, verbose=True)
```
Performs a request to the lettria API using the API_KEY provided. Results are appended as an additional Document instance to the documents attribute.

**Parameters:**

| Name          	| Type                     	| Description                                                                  	| Optional 	|
|---------------	|--------------------------	|------------------------------------------------------------------------------	|----------	|
| document      	| string or list of string 	| Data to be sent to the API                                                   	| False    	|
| skip_document 	| bool                     	| Whether to skip the document if there is a problem during processing         	| True     	|
| id            	| str                      	| Id to identify the document, by default an incrementing integer is assigned. 	| True     	|
| verbose       	| bool                     	| Whether to print additional statements about document processing.True        	|          	|

### save_results() 
```python
save_results(file = '')
```
Writes current results to a JSON file. If no file is specified the default path is results_X.json with X being next 'free' integer.

**Parameters:**

| Name 	| Type   	| Description               	| Optional 	|
|------	|--------	|---------------------------	|----------	|
| file 	| string 	| Path of file to write in. 	| True     	|


### load_results() 
```python
load_results(path = 'results_0', reset = False)
```
Loads results from a JSON file.

**Parameters:**

| Name  	| Type   	| Description                    	| Optional 	|
|-------	|--------	|--------------------------------	|----------	|
| file  	| string 	| Path of file to load.          	| True     	|
| reset 	| bool   	| Whether to erase current data. 	| True     	|

### reset_data() 
```shell
reset_data()
```
Erase all data inside NLP and reinitialise documents ids.

**Parameters:**

| Name  	| Type   	| Description                    	| Optional 	|
|-------	|--------	|--------------------------------	|----------	|
| file  	| string 	| Path of file to load.          	| True     	|
| reset 	| bool   	| Whether to erase current data. 	| True     	|

### add_client() 
```python
add_client(client = None, api_key = None)
```
Replaces current client with provided one, or creates a new client using the provided api_key.

**Parameters:**

| Name    	| Type                     	| Description                                 	| Optional 	|
|---------	|--------------------------	|---------------------------------------------	|----------	|
| client  	| instance of Client class 	| Client instance to replace the current one. 	| True     	|
| api_key 	| string                   	| Key to use for the new client.              	| True     	|

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)