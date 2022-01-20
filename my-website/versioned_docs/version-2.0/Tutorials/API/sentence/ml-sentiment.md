---
sidebar_position: 2
---

# ML Sentiment

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/SC2zAKAvkuU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is ML sentiment?

ML sentiment enables you to extract the sentiment values

## Importing the library & your personal API key

After you've installed the Lettria package on Python you'll need to import the library.

```python
import lettria
```

Next you are going to need to include your personal API key which can be found via the Lettria platform in the dashboard.

```python
api_key = 'your personal API key'
nlp = lettria.NLP(api_key)
```

## Adding data

Next I am going to add data to be analyzed. You can also upload a saved document using the ‘with open’ command.

```python
data = ‘example text’
```

Next add the data to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting sentiments

In order to extract the ml_sentiment from the sentences in your document use the following command:

```python
ml_sentiment = nlp.sentiment_ml
print(ml_sentiment)
```

Returns positive, negative and total values regarding the sentiment extracted from the document.

Values are calculated either by using sentiment element objects if available, or by a prediction model at the subsentence level. Values are normalized to stay in the the [-1 : 1] interval between element, subsentence and sentence level, therefore comparisons should be made made with elements of the same depth.

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
nlp = lettria.NLP(api_key)

example_data = ‘example text’

nlp.add_document(example_data)

ml_sentiment = nlp.sentiment_ml
print(ml_sentiment)

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)