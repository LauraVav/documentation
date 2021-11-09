---
sidebar_position: 3
---

# Document class

**Document** inherits from [TextChunk](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/what-is-textchunk).

**Document** stores the information for a document (for example an online review for a product or a news article). The class is iterable and will yield instances of **Sentence**.

## Attributes / Properties

| Name                                                                                   	| Type                                                                                               	| Description                                                    	|
|----------------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------------------	|----------------------------------------------------------------	|
| sentences                                                                              	| list of [Sentence](https://lettria-doc.netlify.app/docs/python-sdk/sentence-class) instances       	| List of **Sentences** of the document.                         	|
| subsentences                                                                           	| list of [Subsentence](https://lettria-doc.netlify.app/docs/python-sdk/subsentence-class) instances 	| Direct access to list of **Subsentence** for the document.     	|
| id                                                                                     	| str                                                                                                	| Id of document, by default sequential integer if not provided. 	|
| [common properties](https://lettria-doc.netlify.app/docs/python-sdk/common-properties) 	| depends on property                                                                                	| Properties allowing access to specific data (pos, token etc.). 	|

