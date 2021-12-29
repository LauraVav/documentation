---
sidebar_position: 10
---

# Meaning Emotion

## Video

![Meaning emotion](/img/meaning-emotion-CS.png)

## What is the meaning emotion tool?

The meaning emotion tool enables you to extract the average emotion scores for each meaning. You can define the granularity to get a more precise analysis of your document. In order to extract the meaning emotions from a document you can use the meaning emotion tool with Lettria.

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

Next add the document to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting the meaning emotions

In order to extract the meaning emotion from the document use the following command:

```python
word_emotion = nlp.word_emotion
word_emotion(granularity = 'sentence')
```

Returns average emotion scores for each meaning. For each sentence or subsentence(granularity parameter), the score for each emotion is added to each of the meaning. The scores are divided by the number of sentences or subsentences to get an average. This can be used with custom meaning to get the emotion associated with a particular meaning, for example 'customer service' or 'pricing' when analyzing customer reviews.

To further analyse the meaning emotions in your document you can also use the meaning_emotion tool at the granularity of ‘subsentence’.

```python
meaning_emotion(granularity = 'subsentence')
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

word_emotion = nlp.word_emotion
word_emotion(granularity = 'sentence')

meaning_emotion(granularity = 'subsentence')

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)