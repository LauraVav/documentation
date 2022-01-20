---
sidebar_position: 2
---

# Document Class

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/A6syGv7NmaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is the document class?

Document stores the information for a document (for example an online review for a product or a news article). The class is iterable and will yield instances of Sentence.The document class provides an array of tools to make analyzing your document easier and more precise. Document class contains attributes and properties such as sentence, subsentence, id and common properties.

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

## Extracting sentences

In order to exract the sentences in your document use the following command:

```python
sentences = nlp.sentences
print(sentences)
```

Returns a list of sentences in your document.

You can also use the subsentence command to extract the subsentences in your document.

```python
subsentences = nlp.subsentences
print(subsentences)
```

## Extracting properties

Document class also allows you to extract the id of your document.

subsentences = nlp.subsentences

```python
print(subsentences, id)
```

Lastly you can extract common properties with the Document class.

Come popular common properties include; token, lemma, pos, language etc. To have a full list of common properties check out our documentation.

A useful common property that could come in handy while extracting and analyzing elements is the original_text property.

```python
original_text = nlp.original_text
print(original_text)
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

sentences = nlp.sentences
print(sentences)

subsentences = nlp.subsentences
print(subsentences)

print(subsentences, id)

original_text = nlp.original_text
print(original_text)

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)