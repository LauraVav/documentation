---
sidebar_position: 15
---

# Sentence Class

## Video

![Sentence class](/img/sentence-class-CS.png)

## What is the sentence class?

Sentence stores data for a sentence. Sentences are delimited automatically from the input raw text. For longer and more complicated sentences it can be advantageous to further cut the sentences into subsentences.

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

## Extracting subsentences

In order to extract the subsentences in your document use the following command:

```python
subsentences = nlp.subsentences
print(subsentences)
```

Returns a list of subsentences in your document.

## Extracting properties

Sentence class also allows you to extract the tokens in the sentences of your document.

```python
tokens = nlp.tokens
print(tokens)
```

Lastly you can extract common properties with the Sentence class.

Some popular common properties include; token, lemma, pos, language etc. To have a full list of common properties check out our documentation.

A useful common property that could come in handy while extracting and analyzing elements is the morphology property.

```python
morphology = nlp.morphology
print(morphology)
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

subsentences = nlp.subsentences
print(subsentences)

tokens = nlp.tokens
print(tokens)

morphology = nlp.morphology
print(morphology)

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)