---
sidebar_position: 4
---

# List Entities

## Video

![list entities](/img/list-entities-CS.png)

## What are list entities?

List entities allows us to identify the most relevant semantic units because they are anchored in reality: person, place, date, purpose...all the tags identify not just actors but also landmarks. They are essential in the process of reading and understanding a text.

In order to quickly extract the list entities from your document you can use the list_enitites tool from Lettria.

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

Add the document to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting entities

In order to extract the list entities from the document use the following command:

```python
list_entities = nlp.list_entities
list_entities()
```

## Saving your results

In the results you will have a list of entities with the corresponding words found in the document.

In order to save your results you can use the following command.

```python
nlp.save_results(‘example_results')
```

And a json file with your results that can be used for further analysis will be saved.

## Code set:

```python
import lettria

api_key = 'your personal API key'
nlp = lettria.NLP(api_key)

with open("example.txt", "r") as f:
	example_data = f.readlines()

nlp.add_document(example_data)

list_entities = nlp.list_entities
list_entities()

nlp.save_results(‘example_results')
```