---
sidebar_position: 10
---

# Meaning Sentiment

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/U03cV8Xx9NE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is the meaning sentiment tool?

The meaning sentiment tool enables you to extract the average sentiment score for each meaning for each sentence or subsentence. In order to extract the meaning sentiments from a document you can use the meaning sentiment tool with Lettria.

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

## Adding your document

Now you will need to open your saved document. Be sure to add the name of

‘your file’ since it may differ from the name of my example file.

```python
with open("example.txt", "r") as f:
	example_data = f.readlines()
```

Next I am going to add the document to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting the meaning sentiments

In order to extract the meaning sentiments from the document use the following command:

```python
meaning_sentiment = nlp.meaning_sentiment
meaning_sentiment(granularity = 'sentence')
```

Returns average sentiment score for each meaning for each sentence or subsentence(granularity parameter), the sentiment score is added to each of the meaning present. The scores are divided by the number of sentences or subsentences to get an average. This can be used with custom meaning to get the sentiment associated with a particular meaning, for example 'customer service' or 'pricing' when analyzing customer reviews.

To further analyse the meaning sentiments in your document you can also use the meaning_sentiment tool at the granularity of ‘subsentence’.

```python
meaning_sentiment(granularity = 'subsentence')
```

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

with open("example.txt", "r") as f:
	example_data = f.readlines()

nlp.add_document(example_data)

meaning_sentiment = nlp.meaning_sentiment
meaning_sentiment(granularity = 'sentence')

meaning_sentiment(granularity = 'subsentence')

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)