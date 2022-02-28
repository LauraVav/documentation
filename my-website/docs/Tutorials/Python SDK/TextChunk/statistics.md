---
sidebar_position: 5
---

# Statisitics

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/_LDtofJmO84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What are statistics?

If you need to extract the global statistics regarding the number of documents, sentences, subsentences and tokens in your data, you can use the TextChunk class Statistics method.

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

## Adding a document

Now you will need to open your saved document. Be sure to add the name of ‘your file’ since it may differ from the name of my example file.

```python
with open("example.txt", "r") as f:
	example_data = f.readlines()
```

Next add the data to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting statistics

In order to extract the statistics from your document use the following command:

```python
statistics = nlp.statistics
print(statistics())
```

In the return you will find a consolidation of important information regarding each the numbers of documents, sentences, subsentences and tokens.

This information can help guide you for further analysis. You will see the level you want to analyze and then all you have to decide is the information you would like to extract.

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

statistics = nlp.statistics
print(statistics())

nlp.save_results(‘example_results')
```