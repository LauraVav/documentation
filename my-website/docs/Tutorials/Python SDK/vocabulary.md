---
sidebar_position: 1
---

# Vocabulary

## Video

![vocabulary](/img/vocabulary-CS.png)

## What is the vocabulary tokenization?

Vocabulary tokenization (also called word segmentation) is the problem of dividing a string of written language into its component words. Lettria enables you to quickly and easily extract the vocabulary as well as the part of speech to enable you to easily filter and analyze your document.

In order to extract the vocabulary from your document you can use the TextChunk class Vocabulary tool.

## Importing the library & your personal API key

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

‘your file’ since it may differ from the name of my example file.

```python
with open("example.txt", "r") as f:
	example_data = f.readlines()
```

Next, add the document to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting vocabulary

In order to extract the vocabulary of the document use the following command:

```python
vocabulary = nlp.vocabulary
vocabulary(filter_pos = None, lemma=False)
```

In the results you will have a list of the vocabulary, part of speech and lemma.

## Extracting more details

If you would like to filter out parts of speech such as ‘nouns’ you can change the filter criteria.

```python
vocabulary = nlp.vocabulary
vocabulary(filter_pos = 'N', lemma=False)
```

Now you can see within the results all the vocabulary falling under ‘noun’ has been filtered out.

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

vocabulary = nlp.vocabulary
vocabulary(filter_pos = None, lemma=False)

vocabulary = nlp.vocabulary
vocabulary(filter_pos = 'N', lemma=False)

nlp.save_results(‘example_results')
```
