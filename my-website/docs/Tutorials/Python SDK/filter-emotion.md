---
sidebar_position: 11
---

# Filter Emotion

## Video

![filter emotion](/img/filter-emotion-CS.png)

## What is the filter emotion tool?

Returns a list of sentences from the polarity ans sentence or subsentence specified. In order to filter out the emotions of sentences or subsentences in a document you can use the filter emotion tool with Lettria.

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

## Filtering emotions

In order to filter out the emotions from the document use the following command:

```python
filter_emotion = nlp.filter_emotion
filter_emotion(emotions='surprise', granularity='sentence')
```

Returns a list of sentences from the polarity ans sentence or subsentence specified.

You can further analyze the emotions of your document with 'joy', 'love', 'surprise', 'anger', 'sadness', 'fear’, 'neutral' and ‘disgust’. You can also filter at a subsentence level

```python
filter_emotion(emotions=‘disgust’, granularity=‘subsentence')
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

filter_emotion = nlp.filter_emotion
filter_emotion(emotions='surprise', granularity='sentence')

filter_emotion(emotions=‘disgust’, granularity=‘subsentence')

nlp.save_results(‘example_results')
```