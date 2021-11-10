---
sidebar_position: 5
---

# Tokenizer

## What’s a tokenizer?

A tokenizer is a tool founded on an algorithm based on a set of rules or on the learning of a manually-labelled corpus. **It allows text to be broken down into words.** It’s a morphological analysis.

## What does it do? How does it work?

Tokenization is a type of segmentation that **breaks down a sentence into multiple elements.**

In Natural Language Processing (NLP), tokenization is a part of the standardization process. It segments the input text into manipulable linguistic units like words, punctuation, numbers, alphanumeric data, etc. Each element corresponds to a **token** that will be used for analysis.

The goal of this process is to separate the basic units of a text that will then lend themselves to in-depth analysis. One might think that it would be sufficient to detect the spaces between words, but it’s not always that simple.

What to do with hyphens? Where to cut when there are apostrophes? What to make of nominal phrases like “clothes iron” that are composed of several words but designate a single entity?

So, if we accept that the word “go-to-market” is composed of 3 distinct lexical units, (go/to/market), it is more difficult to determine the number of words. One must **define that it’s a token** before pursuing the analysis.

Efficient pattern recognition needs to adapt itself to the conveyed realities of the text subject to analysis. A tokenizer is completely dependent on the language we’re working on.

## Tutorial

Tokenization is a type of segmentation that **breaks down a sentence into multiple elements.** The goal of this process is to separate the basic units of a text that will then lend themselves to in-depth analysis.

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

Next you will need to call the nlp and print all tokens from the document.

```python
for t in nlp.tokens:
	print(t.token)
```

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