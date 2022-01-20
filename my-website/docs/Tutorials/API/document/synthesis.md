---
sidebar_position: 5
---

# Synthesis

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/UcjiB8EsbD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is synthesis?

Synthesis compiles all the most relevant information for each token. It provides information such as the source, lemma, pos tag, dependency and more.

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

## Adding data

Next I am going to add data to be analyzed. You can also upload a saved document using the ‘with open’ command.

```python
example_data = ‘example text’
```

Next add the data to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting the synthesis

In order to extract the synthesis from the tokens in your document use the following command:

```python
synthesis = nlp.synthesis
print(synthesis)
```

In the return you will find a consolidation of important information regarding each token in your document.

This information can help guide you for further analysis. For example you can see the tag object and go further by extracting the POS tags of your document.

You can also find important information for the lemmatizer which enables you to gather all the information necessary regarding the grammatical data.

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

example_data = ‘example text’

nlp.add_document(example_data)

synthesis = nlp.synthesis
print(synthesis)

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)