---
sidebar_position: 4
---

# Lemmatizer

## Video

## Tutorial

If you want to extract the lexical roots of words you can use the lemmatization tool.

First you’ll need to have your document saved to your computer and the Lettria SDK installed.

First I am going to import the Lettria library.

```python
Import lettria
```

Next, add your personal API key to the nlp.

```python
api_key = ‘api_key’
nlp = lettria.NLP(api_key)
```

Next you'll need to add your document.

```python
with open("example.txt", "r") as f:
	example_data = f.readlines()

nlp.add_document(example_data)
```

In order to extract the lemma for each token in a sentences you can print the following command.

```python
print([s.lemma for s in nlp.sentences])
```

In order to save your results you can use the following command.

```python
nlp.save_results(‘example_results')
```

And a json file with you results that can be used for further analysis will be saved.

## Code set

```python
Import lettria

api_key = ‘api_key’
nlp = lettria.NLP(api_key)

with open("example.txt", "r") as f:
	example_data = f.readlines()

nlp.add_document(example_data)

print([s.lemma for s in nlp.sentences])

nlp.save_results(‘example_results')
```
