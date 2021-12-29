---
sidebar_position: 7
---

# Word Emotion

## Video

![word emotion](/img/word-emotion-CS.png)

## What is the word emotion tool?

An analysis tool for emotions brings polarity to a document and identifies the emotions that are present. The word emotion tool enables you to extract the average emotion score for the words in your document at a sentence or subsentence granularity.

## Importing the library & your personal API key

In order to extract the word emotions from a document you can use the word emotion tool with Lettria.

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

In order to extract the emotions from the document use the following command:

```python
word_emotion = nlp.word_emotion
word_emotion(granularity = 'sentence')
```

Returns the average score for each emotion for each word or lemma in the vocabulary. For each sentence or subsentence (granularity parameter), the emotion scores are added to each of the words present. The scores are divided by the number of sentences or subsentences to get an average (or list of values if 'average' == False).

To further analyse the emotions in your document you can also use the word_emotion tool with the granularity of ‘subsentence’.

```python
word_emotion(granularity = 'subsentence')
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

**word_emotion = nlp.word_emotion
word_emotion(granularity = 'sentence')

word_emotion(granularity = 'subsentence')

nlp.save_results(‘example_results')**
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)