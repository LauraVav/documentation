---
sidebar_position: 12
---

# Filter Polarity

## Video

![Filter polarity](/img/filter-polarity-CS.png)

## What is the filter polarity tool?

The filter polarity tool returns a list of sentences from the polarity ans sentence or subsentence specified. In order to filter out the polarity of sentences or subsentences in a document you can use the filter polarity tool with Lettria.

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

## Filtering polarity

In order to filter the polarity from the document use the following command:

```python
filter_polarity = nlp.filter_polarity
filter_polarity(polarity='postive', granularity='sentence')
```

Returns a list of sentences from the polarity and granularity specified.

To further filter the polarity you can change the positive polarity to negative or neutral.  You can also filter at a subsentence level

```python
filter_polarity(polarity=‘negative’, granularity=‘subsentence')
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

filter_polarity = nlp.filter_polarity
filter_polarity(polarity='postive', granularity='sentence')

filter_polarity(polarity=‘negative’, granularity=‘subsentence')

nlp.save_results(‘example_results')
```