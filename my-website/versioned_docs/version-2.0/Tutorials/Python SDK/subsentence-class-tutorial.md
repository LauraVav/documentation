---
sidebar_position: 4
---

# Subsentence Class

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/aEZ6y_5-YP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is the subsentence class?

Subsentence stores data relative to a part of a sentence. For longer and more complicated sentences it can be advantageous to cut it in multiple pieces to have a more detailed analysis.

## Importing the library & your personal API key

After you've installed the Lettria package on Python you'll need to import the library.

```python
import lettria
```

Next you are going to need to include your personal API key which can be found via the Lettria platform in the dashboard.

```python
api_key = 'your personal API key'
nlp = lettria.NLP(api_key
```

## Adding data

Next add data to be analyzed. You can also upload a saved document using the ‘with open’ command.

```python
data = ‘example text’
```

Next add the data to the NLP.

nlp.add_document(data)

## Extracting subsentences

In order to extract the subsentences in your document use the following command:

```python
subsentences = nlp.subsentences
print(subsentences)
```

## Extracting properties

The subsentence class also contains the token property. In order to extract tokens use the following command:

```python
tokens = nlp.tokens
print(tokens)
```

Lastly you can extract common properties with the Subsentence class.

Some popular common properties include; lemma, pos, language etc. To have a full list of common properties check out our documentation.

A useful common property that could come in handy while extracting and analyzing elements is the sentiment property.

```python
sentiment = nlp.sentiment
print(sentiment)
```

For my sentence I have the values for positive, negative and total. Values above 0 are positive and values below 0 are negative.

## Saving your results

In order to save your results you can use the following command.

```python
nlp.save_results(‘example_results')
```

And a json file with your results that can be used for further analysis will be saved.

## Code set

```python
import lettria

api_key = 'your personal API key'
nlp = lettria.NLP(api_key

data = ‘example text’

subsentences = nlp.subsentences
print(subsentences)

tokens = nlp.tokens
print(tokens)

sentiment = nlp.sentiment
print(sentiment)

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)