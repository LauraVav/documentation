---
sidebar_position: 3
---

# Word Frequency

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZhQFJsitiLE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is word frequency?

In order to obtain the frequency of words in your document you can use the TextChunk class word frequency tool. Word frequency lets you know how common a word is.

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

## Extracting the word frequency

In order to extract the word frequency from this document use the following command:

```python
word_frequency = nlp.word_frequency
word_frequency(filter_pos = None, lemma=False)
```

In the results you will have a list of words, part of speech and the inverse document frequency.

## Extracting additional details

If you would like to filter out parts of speech such as ‘noun’ you can change the filter criteria.

```python
word_frequency = nlp.word_frequency
word_frequency(filter_pos = 'N', lemma=False)
```

Now you can see within the results all the words and number of occurrences falling under ‘noun’ has been filtered out.

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

word_frequency = nlp.word_frequency
word_frequency(filter_pos = None, lemma=False)

word_frequency = nlp.word_frequency
word_frequency(filter_pos = 'N', lemma=False)

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)