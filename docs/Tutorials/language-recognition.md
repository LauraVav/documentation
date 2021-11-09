---
sidebar_position: 4
---

# Language Recognition



## Video


## Tutorial

In order to extract the language you'll need to have you document saved on your computer.

After you've installed the Lettria package on Python you'll need to import the library

```python
**import lettria**
```

Next you are going to need to include your personal API key which can be found

via the Lettria platform in the dashboard.

```python
api_key = 'your personal API key'
nlp = lettria.NLP(api_key)
```

Now you will need to open your saved document. Be sure to add the name of

‘your file’ since it may differ from the name of my example file.

```python
with open("example.txt", "r") as f:
	example_data = f.readlines()
```

Next I am going to add the document to the NLP and then print the results.

```python
nlp.add_document(example_data)
print([s.language for s in nlp.sentences])
```

In order to save your results you can use the following command

```python
nlp.save_results('example_results')
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
print([s.language for s in nlp.sentences])

nlp.save_results('example_results')
```