---
sidebar_position: 2
---

# ML Emotion

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/baCcf5kcWcg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is ML emotion?

ML emotion is a multi-label model that returns the emotions expressed in a sentence or subsentence.

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

## Adding data

Next I am going to add data to be analyzed. You can also upload a saved document using the ‘with open’ command.

```python
example_data = ‘example text’
```

Next add the data to the NLP.

```python
nlp.add_document(example_data)
```

## Extracting emotions

In order to extract the ml emotions from the sentences in your document use the following command:

```python
ml_emotion = nlp.emotion_ml
print(ml_emotion)
```

In the return you will have and emotion and value. The “value” is always 1, since it's float value is not relevant on this task

There are 28 emotions available on return of the ML emotion tool. To see the complete list you can view our documentation.

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

example_data = ‘example text’

nlp.add_document(example_data)

ml_emotion = nlp.emotion_ml
print(ml_emotion)

nlp.save_results(‘example_results')
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)