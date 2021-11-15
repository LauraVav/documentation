---
sidebar_position: 2
---

# Lemmatizer

## Video

[![Lemma Video](/img/lemma-thumbnail.png)](https://youtu.be/8wqI7Wzoxkk)

## What’s a lemmatizer?

Lemmatization is a tool of computational linguistics that does the work of **extracting the lexical roots of words.** It does not rely on sentence construction but on the lexicon, bringing out the root form of the word without inflection (no “s” for plural or other suffixes, for example).

## Importing the library & your personal API key

If you want to extract the lexical roots of words you can use the lemmatization tool.

First you’ll need to have your document saved to your computer and the Lettria SDK installed.

First I am going to import the Lettria library.

```python
Import lettria
```

Next, add your personal API key to the nlp.

```python
api_key = ‘api_key’
nlp = lettria.NLP(api_key)
```

## Adding your document

Next you'll need to add your document.

```python
with open("example.txt", "r") as f:
	example_data = f.readlines()

nlp.add_document(example_data)
```

## Extracting lemmas

In order to extract the lemma for each token in a sentences you can print the following command.

```python
print([s.lemma for s in nlp.sentences])
```

## Saving your results

In order to save your results you can use the following command.

```python
nlp.save_results(‘example_results')
```

And a json file with you results that can be used for further analysis will be saved.

## Code set

```python
Import lettria

api_key = ‘api_key’
nlp = lettria.NLP(api_key)

with open("example.txt", "r") as f:
	example_data = f.readlines()

nlp.add_document(example_data)

print([s.lemma for s in nlp.sentences])

nlp.save_results(‘example_results')
```
