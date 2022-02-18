---
sidebar_position: 2
---

# POS Tagger

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/HoTprYNVQ20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# **What’s a pos-tagger ?**

The part-of-speech (pos) tag or "tagging” dependent on parts of speech is a labelling process that **assigns all the words of a text to the correct grammatical elements.** It’s a morpho-syntactic labelling process at the word level, which is part of a larger process of computational linguistics.

## Importing the library & adding your personal API key

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

## Adding your document

Now you will need to open your saved document. Be sure to add the name of

‘your file’ since it may differ from the name of my example file.

```python
with open("example.txt", "r") as f:
	example_data = f.readlines()
```

Next I am going to add the document to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting the parts of speech

Then I am going to print the POS for each token in my document.

```python
for t in nlp.documents[0].tokens:
	print(t.token, t.pos)
```

## Saving your results

If you want to save your results for future analysis you can add this line of code. 

```python
nlp.save_results(‘example_results')
```

And a json file with you results that can be used for further analysis will be saved.

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
[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)