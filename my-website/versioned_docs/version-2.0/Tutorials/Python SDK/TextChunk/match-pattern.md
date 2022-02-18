---
sidebar_position: 14
---

# Match Pattern

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/TTTiaa015_U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is match pattern?

Match pattern is found in the TextChunk object. The match_pattern tool enables you to create a pattern (either Token Pattern or Dependency Pattern) and extract your data from your document or sentence.

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

## Adding a pattern

In order to use match pattern you must first create the pattern.

```python
patterns = {
    "service":
        [
            {
            "LEMMA": {"IN":["good", "average", "poor"]}
             },
        ]
}
```

This is a simple example of a token pattern. I have added the Lemma attribute and the IN modifier. You can also create a dependency pattern to use the match_pattern tool.

## Adding data

Next add the data you would like to analyze. I am going to add text but you can also upload a saved file with the with open command.

```python
example_data = “example text”
```

Next add the data to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting patterns

To extract the pattern from the text I will use the following command

```python
for doc, matches in nlp. match_pattern(patterns_json, level = None, print_tree=False, skip_errors=False):
	print(matches)
```

In the return you will have a list of the corresponding token or dependency patterns you have defined.

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
    "service":
        [
            {
            "LEMMA": {"IN":["good", "average", "poor"]}
             },
        ]
}

example_data = “example text”
nlp.add_document(example_data)

for doc, matches in nlp. match_pattern(patterns_json, level = None, print_tree=False, skip_errors=False):
	print(matches)

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)