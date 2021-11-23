---
sidebar_position: 5
---

# Sentence Class

**Sentence** inherits from [TextChunk](#).

**Sentence** stores data for a sentence. Sentences are delimited automatically from the input raw text. For longer and more complicated sentences it can be advantageous to further cut the sentences into subsentences.

**Sentence** is iterable and will yield instances of **Token** class

## Attributes / Properties

| Name                                                                                   	| Type                                                                                               	| Description                                                   	|
|----------------------------------------------------------------------------------------	|----------------------------------------------------------------------------------------------------	|---------------------------------------------------------------	|
| subsentences                                                                           	| list of [Subsentence](#) instances 	| List of **Subsentence** in the sentence                       	|
| tokens                                                                                 	| list of [Token instances](#)             	| List of **Token** in the sentence                             	|
| [common properties](#) 	| depends on property                                                                                	| Properties allowing access to specific data (pos, token etc.) 	|