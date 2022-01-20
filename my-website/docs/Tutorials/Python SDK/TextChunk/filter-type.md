---
sidebar_position: 13
---

# Filter Type

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/pKVFqLw65rw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is the filter type tool?

The filter type tool enables you to extract sentences the are assertive, command, open question or closed questions from your document. In order to filter out the type of sentences in a document you can use the filter type tool with Lettria.

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

## Filtering types

In order to filter the sentence type from the document use the following command:

```python
filter_type = nlp.filter_type
sentence_type = nlp.sentence_type
filter_type(['assert'])
```

Returns a list of instances of sentences with the specified type.

You can modify the filter type by choosing between; 'assert', 'command', 'question_open', 'question_closed'.

```python
filter_type([‘question’_open])
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

filter_type = nlp.filter_type
sentence_type = nlp.sentence_type
filter_type(['assert'])

filter_type([‘question’_open])

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)