---
sidebar_position: 1
---

# Token Pattern

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/jOHqq0mwQ0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What are token patterns?

Token patterns are simple patterns that do not use dependency parsing. They consist of a sequence of attribute related rules.

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

In order to use token pattern you must first create the pattern.

```python
patterns = {
    "patients":
        [
            {"POS":{"IN":["CD", "ENTITY"]}},
            {"POS":{"IN":["RB", "JJ", "PUNCT", "ENTITY"]}, "OP":"*"},
            {"LEMMA":"patient"}
        ],
    "date":
        [
            {"ENT_TYPE":"date"}
        ]
}
```

Attributes are the properties of a token after analysis by the comprehension API. By defining an attribute in a pattern, only tokens that match the specific attribute will be matched.

Each attribute can map either to a single value or to a dictionary that allows modifiers for more complex behaviors.

Operators work similarly as regular expressions operators, they allow to choose how often should a token be matched.

To see a complete list of  attributes, modifiers and operators you can refer to our documentation.

## Adding data

Next add the data you would like to analyzed. I am going to add text but you can also upload a saved file with the with open command.

```python
example_data = “example text”
```

Next add the data to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting patterns

In order to extract the pattern I will add the following command:

```python
for s, matches in nlp.match_pattern(patterns, level='sentence'):
	print(matches)
```

In the return you will find the corresponding values based on the attribute, modifiers and operators defined in your pattern.

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
    "patients":
        [
            {"POS":{"IN":["CD", "ENTITY"]}},
            {"POS":{"IN":["RB", "JJ", "PUNCT", "ENTITY"]}, "OP":"*"},
            {"LEMMA":"patient"}
        ],
    "date":
        [
            {"ENT_TYPE":"date"}
        ]
}

example_data = “example text”
nlp.add_document(example_data)

for s, matches in nlp.match_pattern(patterns, level='sentence'):
	print(matches)

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)