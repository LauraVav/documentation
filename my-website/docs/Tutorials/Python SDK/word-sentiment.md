---
sidebar_position: 8
---

# Word Sentiment

## Video

![word sentiment](/img/word-sentiment-CS.png)

## What is the word sentiment tool?

An analysis tool for sentiments brings polarity to a document and identifies the sentiments that are present. The word sentiment tool enables you to extract the average sentiment score for the words in your document at a sentence or subsentence granularity.

## Importing the library & your personal API key

In order to extract the word sentiments from a document you can use the word sentiment tool with Lettria.

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

Next add the document to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting emotions

In order to extract the sentiments from the document use the following command:

```python
word_sentiment = nlp.word_sentiment
word_sentiment(granularity = 'sentence')
```

Returns an average sentiment score for each word or lemma. For each sentence or subsentence (granularity parameter), the sentiment score is added to each of the words present. The scores are divided by the number of sentences or subsentences to get an average.

To further analyse the word sentiments in your document you can also use the word_sentiment tool at the granularity of ‘subsentence’.

```python
word_sentiment(granularity = 'subsentence')
```

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

word_sentiment = nlp.word_sentiment
word_sentiment(granularity = 'sentence')

word_sentiment(granularity = 'subsentence')

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)