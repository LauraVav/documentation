---
sidebar_position: 3
---

# Sentence type

## Video

## Tutorial

In order to define the sentence type from your document you'll need to have your document saved on your computer.

After you've installed the Lettria package on Python you'll need to import the library.

```python
import lettria
```

Next you are going to need to include your personal API key which can be found

via the Lettria platform in the dashboard.

```python
api_key = 'your personal API key'
api_key = 'your personal API key'
```

Now you will need to open your saved document. Be sure to add the name of

‘your file’ since it may differ from the name of my example file.

```python
with open("example.txt", "r") as f:
	example_data = f.readlines()
```

Next you will need to add your document to the NLP.

```python
nlp.add_document(example_data)
```

Next I am going to add my sentence and print it.

```python
for s in nlp.sentences:
	print([s])
```

To see the type of sentence I am going to to print the sentence_type command in the the NLP.

print([s.sentence_type for s in nlp.sentences])

As you can seen I have my sentence and my sentence type.

If you have a lot of sentence to analyze you can save your results in a JSON file for further analysis

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

nlp.add_document(st_data)

for s in nlp.sentences:
	print([s])
	print([s.sentence_type for s in nlp.sentences])

nlp.save_results('example_results')
```

