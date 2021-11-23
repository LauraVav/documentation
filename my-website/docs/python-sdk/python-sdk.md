---
sidebar_position: 1
---

# Python SDK

## Requests & Authentication

All your requests must contain a header called Authorization. The value of the header must be created like so : **"LettriaProKey API_KEY"**.

Get your free API_KEY on your [Dashboard](https://www.lettria.com/fr/demo).

```python

To make a request using curl, replace API_KEY with your personal token
and YOUR_SENTENCE with the text to process :


curl -H "Authorization: LettriaProKey API_KEY" \
-H "Content-Type: application/json" \
-X POST "https://api.lettria.com/main" \
-d '{ "text" : "YOUR_SENTENCE" }'

```

## Using the Lettria API

To use our API, you will need a personal key, refered as API_KEY. Get your free API_KEY on your Dashboard.
Install using Python Software Developpement Kit :

```python
pip install lettria
```

Then you can import Lettria and add you API Key and start using the API.

```python
import lettria

nlp = lettria.NLP(api_key)
nlp.add_document([sentence_1, sentence_2])

for doc in nlp:
    for sentence in doc:
        print(sentence.token, sentence.pos)
```

Check the official sources for more information and documentation on how to extract key informations using our SDK : https://github.com/Lettria/sdk-python


