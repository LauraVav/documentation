---
sidebar_position: 9
---

# Intent Detection

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/SyGrjfxqNGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is intent detection?

The concept of meaning corresponds to the categorization of a word according to its meaning in order to group it with other similar words and to simplify the analysis. Lettria dictionaries can be personalized by associating each word or lemma with a new or existing category (or meaning).

If you want to detect and extract the meaning of words in your document you can use the intent detection tool.

## Importing the library & your personal API key

First you’ll need to have your document saved to your computer and the Lettria SDK installed.

Next you will need to import the Lettria library.

```python
import lettria
```

Then import the sentiment library from lettria

```python
from lettria import Sentiment
```

Then add your personal API key to the NLP.

```python
api_key = ‘api_key’
nlp = lettria.NLP(api_key)
```

After you will need to add your document.

```python
with open(“example.txt", "r") as f:
	example_data = f.readlines()
```

Then add your document to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting sentiments

Next I will add the sentiment variable.

```python
sentiment = Sentiment(nlp)
```

Next extract the meaning the words within my document.

```python
sentiment.meaning_sentiment()
```

In your results you will have a meaning with a sentiment score from -1 to 1 indicating the polarity of the word and whether in is more negative(-1 < 0), positive (0 < 1) or neutral (0).

If your have created categories in your dictionary you can filter out words that fall under the category (ex. Service can contain words such as hospitality, staff, etc)

If you haven’t created categories you can filter out specific words by using the following command.

```python
sentiment.meaning_sentiment(filter_meaning=['example'])
```

Within the results you will see the meaning and sentiment polarity which happens to indicate this word is negative or positive.

## Saving your results

In order to save your results you can use the following command.

```python
nlp.save_results(‘example_results')
```

And a json file with you results that can be used for further analysis will be saved.

## Code set

```python
import lettria
from lettria import Sentiment

api_key = ‘api_key’
nlp = lettria.NLP(api_key)

with open(“example.txt", "r") as f:
	example_data = f.readlines()

nlp.add_document(example_data)

sentiment = Sentiment(nlp)

sentiment.meaning_sentiment()

sentiment.meaning_sentiment(filter_meaning=['example'])

nlp.save_results(‘example_results')
```