---
sidebar_position: 2
---

# Lemmatizer

## Video

[![Lemma Video](/img/lemma-thumbnail.png)](https://youtu.be/8wqI7Wzoxkk)

Lemmatization is a tool of computational linguistics that does the work of **extracting the lexical roots of words.** It does not rely on sentence construction but on the lexicon, bringing out the root form of the word without inflection (no “s” for plural or other suffixes, for example).

## What does it do? How does it work?

A lemma should:

- reveal the generic form of the word
- make it possible to establish a lexical network in a document

### Example:

The lemma of the common noun "horses" is "horse." The lemma of the conjugated verb "ate" is "eat."

In Natural Language Processing (NLP), lemmatization makes possible the recognition of words as they’re listed in the dictionary. It removes marks related to number or conjugation, resetting all verbs to the infinitive and reducing the phenomenon of derivation (which means, adding an affix that changes the sense of the word, like im-possible).

Lemmatization allows us to identify the **primary and generic form of words.** Contrary to the stem that appears without affix and leaves the word unrecognizable, the lemma is content to return to its generic form. At Lettria, nous we privilege the use of lemmas over stems.

**Example:**

The stem of the common noun “mountain” is “mount,” and its lemma is “mountain.”

## Tutorial

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

Next you'll need to add your document.

```python
with open("example.txt", "r") as f:
	example_data = f.readlines()

nlp.add_document(example_data)
```

In order to extract the lemma for each token in a sentences you can print the following command.

```python
print([s.lemma for s in nlp.sentences])
```

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
