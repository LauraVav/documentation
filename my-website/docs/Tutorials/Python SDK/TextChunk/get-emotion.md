---
sidebar_position: 6
---

# Get Emotion

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/8eIYDEbNBNc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is the get emotion tool?

An analysis tool for emotions brings polarity to a document and identifies the emotions that are present.

In order to extract the emotions from a document you can use the get_emotion tool with Lettria.

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

## Extracting emotions

In order to extract the emotions from the document use the following command:

```python
get_emotion = nlp.get_emotion
get_emotion(granularity = 'sentence')
```

In the results you will find the emotion for the subsentence Which is labeled as one of the six emotion objects and the sentence is broken down as an emotional value represented in an interval value between -1 and 1. To see a complete key of the interval and corresponding emotions please go to the Lettria Doc center and review the Documentation.

## Analyzing your document further

To further analyse the emotions in your document you can also use the get_emotion tool at the granularity of ‘subsentence’.

```python
get_emotion(granularity = 'subsentence')
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

get_emotion = nlp.get_emotion
get_emotion(granularity = 'sentence')

get_emotion(granularity = 'subsentence')

nlp.save_results(‘example_results')
```
[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)