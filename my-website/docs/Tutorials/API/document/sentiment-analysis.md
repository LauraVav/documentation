---
sidebar_position: 3
---

# Sentiment Analysis

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/FGXUeYIPtDQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is sentimental analysis?

Sentimental analysis consists in identifying whether a text has a negative, positive or neutral connotation. Lettria analyzes the feelings at the subsentence level, which enables you to have a precise analysis of the data.

In order to extract sentiments you have two options:

Use the sentiment' properties with the NLP object, or, use the lettria.Sentiment module which offers more advanced features.

We will be taking a look at the second option.

## Importing the library & adding your personal API key

After you've installed the Lettria package on Python you'll need to import the library.

```python
import lettria
```

To use sentiment analysis you will need to import the sentiment library.

```python
from lettria import Sentiment
```

Next you are going to need to include your personal API key which can be found

via the Lettria platform in the dashboard.

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

Next, add the sentiment from the NLP.

```python
sentiment = Sentiment(nlp)
```

## Analyzing phrases

To extract the positive sentences from your docuemnt use the following command.

```python
print('\nPositive Sentences')
positive_sentences = sentiment.filter_polarity('positive', granularity='subsentence')
for p in positive_sentences:
	print(p.str, p.sentiment)
```

In the results you can see that my positive sentences have been extracted and you’ll also be able to see the granularity values. I can do the same for negative phrases

```python
print('\nNegative Sentences')
negative_sentences = sentiment.filter_polarity('negative', granularity='subsentence')
for n in negative_sentences:
	print(n.str, n.sentiment)
```

This enables me to compare the positive and negative sentences. This could be useful for analyzing customer feedback via reviews or comments.

## **Analyzing document sentiments**

If you are looking to extract the polarity you can use get_sentiment which allows to obtain the feelings at the desired level (global, document, sentence or subsentence)

```python
doc_sentiments = sentiment.get_sentiment(level='document')
for d in doc_sentiments:
	print(d)
```

For each element at the document level, which happens to be an email in my case, we obtain the score of each polarity as well as the total score.

## **Analyzing the sentiments of words**

We can push the analysis further by not limiting our analysis to just sentences. By associating the words that make up a sentence or sub-sentence with the sentimental value of the latter, we can build a dictionary with the average feeling associated with the use of a word.

Let's try to extract the sentiments from the common nouns, using the lemmas for more reliability.

```python
sentiment.word_sentiment(lemma=True, filter_pos = ['N'])
```

Most of the words being positive the words are generally positive, but you will also see the negative words indicated by their values less than one.

## Saving results

In order to save your results you can use the following command.

```python
nlp.save_results(‘example_results')
```

And a json file with you results that can be used for further analysis will be saved.

## Code set

```python
import lettria
from lettria import Sentiment

api_key = 'your personal API key'
nlp = lettria.NLP(api_key)

with open("example.txt", "r") as f:
	example_data = f.readlines()

nlp.add_document(example_data)

sentiment = Sentiment(nlp)

print('\nPositive Sentences')
positive_sentences = sentiment.filter_polarity('positive', granularity='subsentence')
for p in positive_sentences:
	print(p.str, p.sentiment)

print('\nNegative Sentences')
negative_sentences = sentiment.filter_polarity('negative', granularity='subsentence')
for n in negative_sentences:
	print(n.str, n.sentiment)

doc_sentiments = sentiment.get_sentiment(level='document')
for d in doc_sentiments:
	print(d)

sentiment.word_sentiment(lemma=True, filter_pos = ['N'])

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)