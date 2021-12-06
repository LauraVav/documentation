---
sidebar_position: 2
---

# Synthesis

Compiles all the most relevant information for each token.

Go back to the Sentence Object.

## Synthesis Token Object

Links in this section will redirect you to their origin in the given sub-api.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
[
  {
    "type": null,
    "lemma": "je",
    "meaning": [
      {
        "sub": "Pronom",
        "super": null
      }
    ],
    "tag": "CLS",
    "value": "S-1",
    "source": "je",
    "nlp": {
      "lemmatizer": {
        "confidence": 0.99,
        "pronom": 1
      },
      "source": "je",
      "tag": "CLS"
    },
    "nlp_items": null,
    "coreference": {
      "category": [
        "human"
      ],
      "category_parent": [
        "PERSON"
      ],
      "id": 0,
      "lemma": "USER",
      "source": "USER"
    }
  },
  {
    "type": null,
    "lemma": "adorer",
    "meaning": [
      {
        "sub": "sentiment_love",
        "super": "SENTIMENT"
      }
    ],
    "tag": "V",
    "value": null,
    "source": "adore",
    "nlp": {
      "lemmatizer": [
        {
          "confidence": 0.99,
          "conjugate": [
            {
              "mode": "imperative",
              "pronom": 2,
              "temps": "present"
            },
            {
              "mode": "indicative",
              "pronom": 3,
              "temps": "present"
            },
            {
              "mode": "participe",
              "pronom": -1,
              "temps": "past"
            },
            {
              "mode": "subjonctive",
              "pronom": 3,
              "temps": "present"
            },
            {
              "mode": "indicative",
              "pronom": 1,
              "temps": "present"
            },
            {
              "mode": "subjonctive",
              "pronom": 1,
              "temps": "present"
            }
          ],
          "infinit": "adorer"
        }
      ],
      "source": "adore",
      "tag": "V"
    },
    "nlp_items": null,
    "coreference": null
  },
  {
    "type": null,
    "lemma": "!",
    "meaning": [],
    "tag": "PUNCT",
    "value": null,
    "source": "!",
    "nlp": {
      "lemmatizer": {
        "confidence": 0.79
      },
      "source": "!",
      "tag": "PUNCT"
    },
    "nlp_items": null,
    "coreference": null
  }
]
```

</TabItem>
<TabItem value="json" label="JSON">

```json
[
  {
    "type": null,
    "lemma": "je",
    "meaning": [
      {
        "sub": "Pronom",
        "super": null
      }
    ],
    "tag": "CLS",
    "value": "S-1",
    "source": "je",
    "nlp": {
      "lemmatizer": {
        "confidence": 0.99,
        "pronom": 1
      },
      "source": "je",
      "tag": "CLS"
    },
    "nlp_items": null,
    "coreference": {
      "category": [
        "human"
      ],
      "category_parent": [
        "PERSON"
      ],
      "id": 0,
      "lemma": "USER",
      "source": "USER"
    }
  },
  {
    "type": null,
    "lemma": "adorer",
    "meaning": [
      {
        "sub": "sentiment_love",
        "super": "SENTIMENT"
      }
    ],
    "tag": "V",
    "value": null,
    "source": "adore",
    "nlp": {
      "lemmatizer": [
        {
          "confidence": 0.99,
          "conjugate": [
            {
              "mode": "imperative",
              "pronom": 2,
              "temps": "present"
            },
            {
              "mode": "indicative",
              "pronom": 3,
              "temps": "present"
            },
            {
              "mode": "participe",
              "pronom": -1,
              "temps": "past"
            },
            {
              "mode": "subjonctive",
              "pronom": 3,
              "temps": "present"
            },
            {
              "mode": "indicative",
              "pronom": 1,
              "temps": "present"
            },
            {
              "mode": "subjonctive",
              "pronom": 1,
              "temps": "present"
            }
          ],
          "infinit": "adorer"
        }
      ],
      "source": "adore",
      "tag": "V"
    },
    "nlp_items": null,
    "coreference": null
  },
  {
    "type": null,
    "lemma": "!",
    "meaning": [],
    "tag": "PUNCT",
    "value": null,
    "source": "!",
    "nlp": {
      "lemmatizer": {
        "confidence": 0.79
      },
      "source": "!",
      "tag": "PUNCT"
    },
    "nlp_items": null,
    "coreference": null
  }
]
```

</TabItem>
</Tabs>

