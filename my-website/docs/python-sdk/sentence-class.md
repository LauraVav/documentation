---
sidebar_position: 5
---

# Sentence Class

**Sentence** inherits from [TextChunk](https://www.lettria.com/documentation/docs/python-sdk/texctchunk).

**Sentence** stores data for a sentence. Sentences are delimited automatically from the input raw text. For longer and more complicated sentences it can be advantageous to further cut the sentences into subsentences.

**Sentence** is iterable and will yield instances of **Token** class

## Attributes / Properties

| Name                                                                                   	| Type                                                                                               	| Description                                                   	|
|----------------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------------------	|---------------------------------------------------------------	|
| subsentences                                                                           	| list of [Subsentence](https://www.lettria.com/documentation/docs/python-sdk/subsentence-class) instances 	| List of **Subsentence** in the sentence                       	|
| tokens                                                                                 	| list of [Token instances](https://www.lettria.com/documentation/docs/python-sdk/token-class)             	| List of **Token** in the sentence                             	|
| [common properties](https://www.lettria.com/documentation/docs/python-sdk/common-properties) 	| depends on property                                                                                	| Properties allowing access to specific data (pos, token etc.) 	|


[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)