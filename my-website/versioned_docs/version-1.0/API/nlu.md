---
sidebar_position: 9
---

# NLU

Understanding for each token in the sentence.

## NLU Object

|   KEY   |           TYPE           |                            DESCRIPTION                           |                                CONSTRAINTS                               |
|:-------:|:------------------------:|:----------------------------------------------------------------:|:------------------------------------------------------------------------:|
| index   | int                      | Index in the initial tokenized sentence                          | index >= 0                                                               |
| len     | int                      | Number of tokens that have been merged (1 if no merge)           | len >= 1                                                                 |
| meaning | list of Category Objects | Known meanings for the item                                      | Can be empty.                                                            |
| source  | string                   | -                                                                | if len is greater than one, will be the merged sources of original items |
| value   | dict                     | Depends on tag. Most values are in the 'scalar' key of this dict |                                                                          |

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)