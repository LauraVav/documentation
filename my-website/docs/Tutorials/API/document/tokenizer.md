---
sidebar_position: 1
---

# Tokenizer

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/7uaUvXByu3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What’s a tokenizer?

A tokenizer is a tool founded on an algorithm based on a set of rules or on the learning of a manually-labelled corpus. **It allows text to be broken down into words.** It’s a morphological analysis.

## Importing the library & adding your personal API Key

If you want to extract tokens from your document you'll need to have your document saved on your computer.

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

## Extracting tokens

Next you will need to call the nlp and print all tokens from the document.

```python
for t in nlp.tokens:
	print(t.token)
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

for t in nlp.tokens:
	print(t.token)

nlp.save_results(‘example_results')
```
[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)