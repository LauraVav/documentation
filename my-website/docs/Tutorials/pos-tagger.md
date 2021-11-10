---
sidebar_position: 1
---

# POS tagger

## Video

[![POS Video](/img/POS-thumbnail.png)](https://youtu.be/Vmwbwvu4wEo)

## What’s a pos-tagger ?

The part-of-speech (pos) tag or "tagging” dependent on parts of speech is a labelling process that **assigns all the words of a text to the correct grammatical elements.** It’s a morpho-syntactic labelling process at the word level, which is part of a larger process of computational linguistics.

## What does it do? How does it work?

In Natural Language Processing (NLP), grammatical labelling or pos-tagging precisely and reliably reveals us the function of a word, **thus removing a number of common ambiguities** – in particular those that are related to context.

A tag must:

- Recognize the grammatical parameters of the word
- Identify the function of the word in its context

## Tutorial

In order to extract the parts of speech from your document you'll need to have your document saved on your computer.

After you've installed the Lettria package on Python you'll need to import the library.

```python
import lettria
```

Next you are going to need to include your personal API key which can be found

via the Lettria platform in the dashboard.

```python
api_key = 'your personal API key'
nlp = lettria.NLP(api_ke
```

Now you will need to open your saved document. Be sure to add the name of

‘your file’ since it may differ from the name of my example file.

```python
with open("example.txt", "r") as f:
	example_data = f.readlines()
```

Next you will need to add your document to the NLP.

```python
nlp.add_document(example_data)
```

Then I am going to print the POS for each token in my document.

```python
for t in nlp.documents[0].tokens:
	print(t.token, t.pos)
```

If you want to save your results for future analysis you can add this line of code. 

```python
nlp.save_results(‘example_results')
```

And a json file with your results that can be used for further analysis will be saved.

## Code set

```python
import lettria

api_key = 'your personal API key'
nlp = lettria.NLP(api_ke

with open("example.txt", "r") as f:
	example_data = f.readlines()

nlp.add_document(example_data)

for t in nlp.documents[0].tokens:
	print(t.token, t.pos)

nlp.save_results(‘example_results')
```