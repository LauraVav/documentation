---
sidebar_position: 5
---

# Subsentence Class

**Subsentence** inherits from [TextChunk](#).

**Subsentence** stores data relative to a part of a sentence. For longer and more complicated sentences it can be advantageous to cut it in multiple pieces to have a more detailed analysis.

For example: 
```shell
I liked the park but it was raining and the weather was cold 
```
would be cut into:

```shell
I liked the park but it was raining and the weather was cold
```

In this case it allows to perform more precise sentiment analysis than assigning a score to the whole sentence.

Subsentence is iterable and will yield instances of Token class.

## Attributes / Properties

| Name                                                                                   	| Type                                                                                   	| Description                                                   	|
|----------------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------	|---------------------------------------------------------------	|
| tokens                                                                                 	| list of [Token](#) instances 	| List of **Token** in the subsentence                          	|
| [common properties](#) 	| depends on property                                                                    	| Properties allowing access to specific data (pos, token etc.) 	|