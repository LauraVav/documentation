---
sidebar_position: 2
---

# Dependency Pattern

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/8yLfty30axs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What are dependency patterns?

Dependency patterns use dependency parsing which constructs a grammatical tree of the sentence to allow complex matching patterns.

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

## Creating a pattern

In order to use dependency pattern you must first create the pattern.

```python
patterns = {
    "supplies":
        [
            {
            "RIGHT_ID": "rootnode",
            "RIGHT_ATTRS": {"LEMMA": {"IN":["mask", "needle", "respirator"]}}
            },
            {
            "LEFT_ID": "rootnode",
            "REL_OP": ">",
            "RIGHT_ID": "num",
            "RIGHT_ATTRS": {"POS": "CD", "DEP":"nummod"}
            }
        ]
}
```

Attributes matching is similar to Token Patterns (Only exception is that for operators only the “?” is available) but there are also relation operators specific to dependency matching. Matching between the pattern and the sentence does not use the order of token (like for Token Patterns) but the dependency relations between tokens.

All fields must be completed except for the root node which only needs 'RIGHT_ID' and 'RIGHT_ATTRS' fields. Each pattern must have one root node.

Dependency matching should not be used on Subsentence since they don't have a complete dependency tree.

To see a complete list of dependency formats and relation operators you can refer to our documentation.

## Adding data

Next add the data you would like to analyzed. I am going to add text but you can also upload a saved file with the with open command.

```python
example_data = “example text”
```

Next add the data to the NLP.

```python
nlp.add_document(example_data)
```

Extracting patterns

In order to extract the patter I will use the following command:

```python
for doc, matches in nlp.match_pattern(patterns):
	print(matches)
```

In the return you will find the corresponding values based on the dependencies defined in your pattern.

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

patterns = {
    "supplies":
        [
            {
            "RIGHT_ID": "rootnode",
            "RIGHT_ATTRS": {"LEMMA": {"IN":["mask", "needle", "respirator"]}}
            },
            {
            "LEFT_ID": "rootnode",
            "REL_OP": ">",
            "RIGHT_ID": "num",
            "RIGHT_ATTRS": {"POS": "CD", "DEP":"nummod"}
            }
        ]
}

example_data = “example text”
nlp.add_document(example_data)

for doc, matches in nlp.match_pattern(patterns):
	print(matches)

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)