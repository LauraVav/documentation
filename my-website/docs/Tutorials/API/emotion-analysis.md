---
sidebar_position: 7
---

# Emotion Analysis

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/19I_UMYF6O8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# What is emotion analysis?

An analysis tool for emotions (emotion analysis) brings polarity to a document and identifies the  emotions that are present. Emotion detection is a work of understanding the meaning of what is most subtle, contextual and cultural. The goal is to find and categorize the language data that reveals what is neutral, positive or negative. Often related to taking a stand or expressing an opinion, this analysis relies on polarity before categorizing the found elements according to a known typology: opinion, sentiment, emotion, information.

## Importing the library & adding your personal API key

If you want to extract the emotion from sentences and subsentences in your document you'll need to have your document saved on your computer.

After you've installed the Lettria package on Python you'll need to import the library.

```python
import lettria
```

Next you are going to need to include your personal API key which can be found

via the Lettria platform in the dashboard.

```python
api_key = 'your personal API key'
nlp = lettria.NLP(api_key)
```

## Adding your document

Now you will need to open your saved document. Be sure to add the name of

‘your file’ since it may differ from the name of the example file.

```python
with open("example.txt", "r") as f:
	example_data = f.readlines()
```

Next add your document to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting emotions

Next you will need to print the emotion for the subsentence and sentence from the sentences in your document.

```python
print([s.emotion for s in nlp.subsentences])
print([s.emotion for s in nlp.sentences])
```

In the results you will find the emotion for the subsentence Which is labeled as one of the six emotion objects and the sentence is broken down as an emotional value represented in an interval value between -1 and 1. Each interval represents an emotion ! Is happiness between 0 and 1 is sadness and -1 is fear. To see a complete key of the interval and corresponding emotions please go to the Lettria Doc center and review the Documentation.

## Saving your results

In order to save your results you can use the following command.

```python
nlp.save_results(‘example_results')
```

And a json file with you results that can be used for further analysis will be saved.

## Code set

```python
import lettria

api_key = 'your personal API key'
nlp = lettria.NLP(api_key)

with open("example.txt", "r") as f:
	example_data = f.readlines()

nlp.add_document(example_data)

print([s.emotion for s in nlp.subsentences])
print([s.emotion for s in nlp.sentences])

nlp.save_results(‘example_results')
```
