---
sidebar_position: 5
---

# Common Properties

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/FkDooea7r_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What are common properties?

The common properties are accessible at all analysis levels (NLP< Document, Sentence, Subsentence and Token).

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

Next add the data to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting common properties

Common properties can be broken down into three different types; string, tuple and dictionary.

Some common string properties include; toke, lemma, pos, morphology and language.

## Extracting string properties

Here are some string common property examples:

```python
str = nlp.str
print(str)
```

Returns sentence as a string

Another type of string property is dependency. Use the following command to extract dependencies:

```python
dep = nlp.dep
print(dep)
```

Returns dependency relations

## Extracting tuple properties

Here are some tuple common property examples:

```python
emotion = nlp.emotion
print(emotion)
```

Returns emotion as tuple (Type, score)

Another type of tuple property is the meaning property. To extract the meaning from your document use the following command:

```python
meaning = nlp.meaning
print(meaning)
```

Returns meanings as tuples (SUPER, SUB)

## Extracting dictionary properties

Here are some examples of dictionary common properties:

```python
sentiment = nlp.sentiment
print(sentiment)
```

Returns sentiment with positive, negative and total values

Another type of dictionary property is the synthesis property. To extract the synthesis of your document use the following command:

```python
synthesis = nlp.synthesis
print(synthesis)
```

Returns synthesis object

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

str = nlp.str
print(str)

dep = nlp.dep
print(dep)

emotion = nlp.emotion
print(emotion)

meaning = nlp.meaning
print(meaning)

sentiment = nlp.sentiment
print(sentiment)

synthesis = nlp.synthesis
print(synthesis)

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)