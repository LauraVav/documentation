---
sidebar_position: 8
---

# Common Properties

Properties have 'upward' accessibility, properties at a lower level are accessible at a higher level:
```
NLP > Document > Sentence >= Subsentence > Token
```

For example **'str'** which is a token property can be accessed at all analysis levels (NLP/Document/Sentence/Subsentence/Token).

Conversely, **'emotion_doc'** is only available at the Document level, and at the NLP level which groups multiple documents.

All properties have **a _flat** variant (token_flat) which flatten recursively the return.

## Document properties

|        Name       |  type  |                         Description                        |
|:-----------------:|:------:|:----------------------------------------------------------:|
| emotion_doc       | String | Returns emotions detected on the whole document at once.   |
| sentiment_doc     | String | Returns sentiments detected on the whole document at once. |
| original_text_doc | List   | Returns the original text of the whole document.           |

## Sentence/Subsentence properties

|      Name     |    type    |                         Description                        |
|:-------------:|:----------:|:----------------------------------------------------------:|
| language      | String     | Returns detected language                                  |
| meaning       | List       | Returns meanings as tuples (SUPER, SUB)                    |
| emotion       | Tuple      | Returns emotion as tuple (Type, score)                     |
| sentiment     | Dictionary | Returns sentiment with positive, negative and total values |
| sentiment_ml  | Dictionary | Returns sentiment of ml_model without further fine tuning  |
| sentence_type | String     | Returns type of sentence                                   |
| coreference   | String     | Returns reference of token if it exists                    |

## Token properties

|      Name     |    type    |                                       Description                                       |
|:-------------:|:----------:|:---------------------------------------------------------------------------------------:|
| str           | String     | Returns sentence as string                                                              |
| original_text | String     | Returns the original token in the input text before modification from the tokenization. |
| token         | String     | Returns token                                                                           |
| lemma         | String     | Returns lemma                                                                           |
| lemma_detail  | List       | Returns details of lemmatizer                                                           |
| gender        | String     | Returns unmerged lemma                                                                  |
| plural        | String     | Returns unmerged lemma                                                                  |
| infinitive    | String     | Returns unmerged lemma                                                                  |
| conjugate     | String     | Returns unmerged lemma                                                                  |
| morphology    | String     | Returns unmerged lemma                                                                  |
| auxiliary     | String     | Returns unmerged lemma                                                                  |
| pos           | String     | Returns POS (Part-Of-Speech) tags                                                       |
| pos_detail    | String     | Returns unmerged POS (Part-Of-Speech) tags                                              |
| dep           | String     | Returns dependency relations                                                            |
| morphology    | String     | Returns morphological features                                                          |
| meaning       | List       | Returns meanings as tuples (SUPER, SUB)                                                 |
| detail        | Dictionary | Returns detail/synthesis object                                                         |

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)