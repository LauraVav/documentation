---
sidebar_position: 7
---

# Get Sentiment

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/mIA5w1GRDz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is the get sentiment tool?

An analysis tool for sentiments brings polarity to a document and identifies the sentiments that are present.

In order to extract the negative and positive sentiments from a document you can use the get_sentiment tool with Lettria.

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

## Extracting sentiments

In order to extract the sentiments from the document use the following command:

```python
get_sentiment = nlp.get_sentiment
get_sentiment(granularity = 'sentence')
```

## Analyzing your document further

To further analyse the sentiments in your document you can also use the get_sentiment tool at the granularity of ‘subsentence’.

```python
get_sentiment(granularity = 'subsentence')
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

get_sentiment = nlp.get_sentiment
get_sentiment(granularity = 'sentence')

get_sentiment(granularity = 'subsentence')

nlp.save_results(‘example_results')
```
[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)