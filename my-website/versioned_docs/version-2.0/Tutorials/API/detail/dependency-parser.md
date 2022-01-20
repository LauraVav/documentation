---
sidebar_position: 9
---

# Dependency Parser

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/IM4DiieXCRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# **What’s a dependency parser?**

A dependency parser or dependency analyzer highlights the **dependency relationships in a sentence** (what or who is the subject or object). It’s a computational linguistics tool built on a group of rules specific to the analyzed language. A dependency parser can also be built based on a machine-learning model that derives grammatical rules from a manually-labelled corpus. **What does it do? How does it work?**The parser organizes the elements of a sentence based on their syntactic and semantic importance, and the links that exist between them.

## Importing the library & adding your personal API key

If you want to highlight the dependency relationships in a sentence from your document you'll need to have your document saved on your computer.

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

‘your file’ since it may differ from the name of the example file.

```python
with open("example.txt", "r") as f:
	example_data = f.readlines()
```

Next add your document to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting dependencies

Next you will need to print the tokens with their corresponding reference and dependency.

```python
print([[(t.token, t.ref, t.dep) for t in s.tokens] for s in nlp.sentences])
```

In the results you will find the token, possessive determiner and the dependency tag. For a full list of dependency tags and possessive determiners please check out our doc center for the documentation.

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

print([[(t.token, t.ref, t.dep) for t in s.tokens] for s in nlp.sentences])

nlp.save_results(‘example_results')
```
[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)