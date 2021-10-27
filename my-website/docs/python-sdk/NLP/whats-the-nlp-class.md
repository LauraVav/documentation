---
sidebar_position: 1
---

# What's the NLP class?

**NLP** inherits from [TextChunk](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/what-is-textchunk).

**NLP** is a class designed to give access to relevant data at the different levels (document, sentence, subsentence) in an intuitive way. It allows you to perform quick data exploration, manipulation and analysis.
It's also used to perform requests and can save as well as load result as **JSON** objects.

When a response from the API is received it's stored in a hierarchy of classes:
**NLP (all data) => Document => Sentence => Subsentence => Token**

At each level direct access it's possible to access inferior levels  i.e. nlp.sentences gives access to a list of all the Sentence in the current data, while nlp.documents[0].sentences only gives the Sentence of the first Document.

NLP is iterable and will yield Document instances.


## Attributes & Properties

| Name              	| Type                          	| Description                                                              	|
|-------------------	|-------------------------------	|--------------------------------------------------------------------------	|
| documents         	| list of [Document](https://lettria-doc.netlify.app/docs/python-sdk/document-class) instances    	| List of all the **Document instances**                                       	|
| sentences         	| list of [Sentence](https://lettria-doc.netlify.app/docs/python-sdk/sentence-class) instances    	| Direct access to all of the **Sentences** instances.                         	|
| subsentences      	| list of [Subsentence](http://localhost:3000/docs/python-sdk/subsentence-class) instances 	| Direct access to all of the **Subsentence** instances.                       	|
| tokens            	| list of [Token](https://lettria-doc.netlify.app/docs/python-sdk/token-class) instances       	| Direct access to all **Tokens** in the subsentence                            	|
| fields            	| list of string                	| List of all common properties accessible at all levels (token, pos etc.) 	|
| fields            	| instance of [Client](https://lettria-doc.netlify.app/docs/python-sdk/client-class)            	| Client used for performing request to Lettria's API                      	|
| [Common properties](https://lettria-doc.netlify.app/docs/python-sdk/common-properties)	| depends on property           	| Properties allowing access to specific data (pos, token etc.)            	|
