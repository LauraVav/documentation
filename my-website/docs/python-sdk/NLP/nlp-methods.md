---
sidebar_position: 2
---

# NLP methods

## Data analysis

Below is an overview list of the methods that can be used to manage data with the API. 

| Method                                                                                                    	| Description                        	|
|-----------------------------------------------------------------------------------------------------------	|------------------------------------	|
| [add_document()](https://lettria-doc.netlify.app/docs/python-sdk/NLP/nlp-methods#add_document-)          	| Submits document to API            	|
| [reset_data()](https://lettria-doc.netlify.app/docs/python-sdk/NLP/nlp-methods#save_results-)            	| Saves data from json file          	|
| [load_results()](https://lettria-doc.netlify.app/docs/python-sdk/NLP/nlp-methods#load_results-%EF%B8%8F) 	| Loads data from json file          	|
| [reset_data()](https://lettria-doc.netlify.app/docs/python-sdk/NLP/nlp-methods#reset_data-)              	| Erase data and reinitialise object 	|
| [add_client()](https://lettria-doc.netlify.app/docs/python-sdk/NLP/nlp-methods#add_client-)              	| Adds new client / api_key          	|

## add_document() 📄
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

## save_results() 💾
```python
save_results(file = '')
```
Writes current results to a JSON file. If no file is specified the default path is results_X.json with X being next 'free' integer.

**Parameters:**

| Name 	| Type   	| Description               	| Optional 	|
|------	|--------	|---------------------------	|----------	|
| file 	| string 	| Path of file to write in. 	| True     	|


## load_results() ⌛️
```python
load_results(path = 'results_0', reset = False)
```
Loads results from a JSON file.

**Parameters:**

| Name  	| Type   	| Description                    	| Optional 	|
|-------	|--------	|--------------------------------	|----------	|
| file  	| string 	| Path of file to load.          	| True     	|
| reset 	| bool   	| Whether to erase current data. 	| True     	|

## reset_data() ⏮
```shell
reset_data()
```
Erase all data inside NLP and reinitialise documents ids.

**Parameters:**

| Name  	| Type   	| Description                    	| Optional 	|
|-------	|--------	|--------------------------------	|----------	|
| file  	| string 	| Path of file to load.          	| True     	|
| reset 	| bool   	| Whether to erase current data. 	| True     	|

## add_client() 🧮
```python
add_client(client = None, api_key = None)
```
Replaces current client with provided one, or creates a new client using the provided api_key.

**Parameters:**

| Name    	| Type                     	| Description                                 	| Optional 	|
|---------	|--------------------------	|---------------------------------------------	|----------	|
| client  	| instance of Client class 	| Client instance to replace the current one. 	| True     	|
| api_key 	| string                   	| Key to use for the new client.              	| True     	|