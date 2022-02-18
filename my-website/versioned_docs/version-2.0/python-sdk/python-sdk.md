---
sidebar_position: 1
---

# Python SDK

## Using the SDK

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


[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)