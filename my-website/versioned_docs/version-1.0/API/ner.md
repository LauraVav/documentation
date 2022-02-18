---
sidebar_position: 11
---

# NER

The NER sub-api lists all the Numeral Entities and Named Entities found in the sentence.

## NER Object

|   KEY  |     TYPE     |             DESCRIPTION            |                                        CONSTRAINTS                                       |
|:------:|:------------:|:----------------------------------:|:----------------------------------------------------------------------------------------:|
| source | string       | -                                  | -                                                                                        |
| type   | string       | Describes the type of entity found | For proper nouns, can either be LOCATION or PERSON. For other entities, see Entity types |
| value  | Value Object | -                                  | -                                                                                        |

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)