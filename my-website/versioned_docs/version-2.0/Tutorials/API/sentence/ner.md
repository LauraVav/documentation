---
sidebar_position: 4
---

# NER

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/paDpt6BM2L8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is named entity recognition?

NER ("Named Entity Recognition"  is a common problem in NLP which consists of extracting entities from a text and classifying them in predefined categories (date, organization, speed, mass ... ).

Lettria allows you to extract and manipulate no less than 40 different entities. See the exhaustive list of elements established by the Lettria API.

## Importing the library & your personal API key

If you want to extract the entities from your document you'll need to have your document saved on your computer.

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

Next I am going to add the document to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting entities

In order to get a list of the entities found within my document I am going to add the following command.

```python
entities = nlp.list_entities()
for entity in entities:
	print(entity)
```

As you can see I have a list of the current entities found within my document.

## Extracting more details

To have more details regarding these entities you can print the token and the corresponding ner token.

```python
for t in nlp.tokens:
	print(t.token, t.ner)
```

For each token we obtain the possible type or types of entities as well as the associated values, for example the dates are converted into ISO format and the durations are converted into numerical format.

## Saving your results

In order to save your results you can use the following command.

```python
nlp.save_results(‘example_results')
```

And a json file with you results that can be used for further analysis will be saved.

## Code set

```python
import lettria

api_key = 'your personal API key'
nlp = lettria.NLP(api_key)

with open("example.txt", "r") as f:
	example_data = f.readlines()

nlp.add_document(example_data)

entities = nlp.list_entities()
for entity in entities:
	print(entity)

for t in nlp.tokens:
	print(t.token, t.ner)

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)