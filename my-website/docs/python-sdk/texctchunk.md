---
sidebar_position: 3
---

# TextChunk

## What is TextChunk?

**TextChunk** is the base class of **NLP**, **Document**, **Sentence** and **Subsentence**.
It offers different methods that can be accessed through children classes.

**Data analysis:**

| METHOD                                                                                                               	| DESCRIPTION                                                     	|
|----------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------	|
| [vocabulary()](https://www.lettria.com/documentation/docs/python-sdk/texctchunk#vocabulary)               	| Returns vocabulary from current data.                           	|
| [word_count()](https://www.lettria.com/documentation/docs/python-sdk/texctchunk#word_count)               	| Returns word count from current data.                           	|
| [word_frequency()](https://www.lettria.com/documentation/docs/python-sdk/texctchunk#word_frequency)       	| Returns word frequency of current data.                         	|
| [list_entities()](https://www.lettria.com/documentation/docs/python-sdk/texctchunk#list_entities)         	| Returns dictionaries of detected entities by type.              	|
| [get_emotion()](https://www.lettria.com/documentation/docs/python-sdk/texctchunk#get_emotion)             	| Returns emotion results at the specified hierarchical level     	|
| [get_sentiment()](https://www.lettria.com/documentation/docs/python-sdk/texctchunk#get_sentiment)         	| Returns sentiment results at the specified hierarchical level   	|
| [word_sentiment()](https://www.lettria.com/documentation/docs/python-sdk/texctchunk#word_sentiment)       	| Returns average sentiment for each word of the whole vocabulary 	|
| [word_emotion()](https://www.lettria.com/documentation/docs/python-sdk/texctchunk#word_emotion)           	| Returns average emotion for each word of the whole vocabulary   	|
| [meaning_sentiment()](https://www.lettria.com/documentation/docs/python-sdk/texctchunk#meaning_sentiment) 	| Returns average sentiment for each meaning                      	|
| [meaning_emotion()](https://www.lettria.com/documentation/docs/python-sdk/texctchunk#meaning_emotion)     	| Returns average emotion for each meaning                        	|
| [filter_polarity()](https://www.lettria.com/documentation/docs/python-sdk/texctchunk#filter_polarity)     	| Filters Sentence or Subsentence of the specified polarity       	|
| [filter_emotion()](https://www.lettria.com/documentation/docs/python-sdk/texctchunk#filter_emotion)       	| Filters Sentence or Subsentence of the specified emotions       	|
| [filter_type()](https://www.lettria.com/documentation/docs/python-sdk/texctchunk#filter_type)             	| Filters Sentence of the specified types                         	|
| [match_pattern()](https://www.lettria.com/documentation/docs/python-sdk/texctchunk#match_pattern)         	| Returns matches from given patterns.                            	|


## TextChunk methods

### vocabulary 
```python
vocabulary(filter_pos = None, lemma=False)
```
Returns vocabulary from current data with their associated POS tag i.e. if a word appears both as a verb and a noun it will be in two tuples (word, 'V'), (word, 'N'). Allows filtering by POS tags.

**Parameters:**

| Name       	| Type           	| Description                          	| Optional 	|
|------------	|----------------	|--------------------------------------	|----------	|
| filter_pos 	| list of string 	| Tags to use for filtering.           	| True     	|
| lemma      	| string         	| Whether to use lemma or plain words. 	| True     	|

**Return:**

| Type          	| Description                            	|
|---------------	|----------------------------------------	|
| list of tuple 	| List of unique tuples (token, POStag). 	|

### word_count 

```python
word_count(filter_pos = None, lemma=False):
```

Returns count of words from current data with their associated POStag i.e. if a word appears both as a verb and a noun it will be in two tuples (word, 'V'), (word, 'N'). Allows filtering by POS tags.

**Parameters:**

| Name       	| Type           	| Description                          	| Optional 	|
|------------	|----------------	|--------------------------------------	|----------	|
| filter_pos 	| list of string 	| Tags to use for filtering.           	| True     	|
| lemma      	| string         	| Whether to use lemma or plain words. 	| True     	|

**Return:**

| Type       	| Description                                                	|
|------------	|------------------------------------------------------------	|
| dictionary 	| dictionary of word counts { (token, POStag): occurences }. 	|

### word_frequency 

```python
word_frequency(filter_pos = None, lemma=False)
```

Returns words or lemma frequency, allows filtering by POS tag

**Parameters:**

| Name       	| Type           	| Description                          	| Optional 	|
|------------	|----------------	|--------------------------------------	|----------	|
| filter_pos 	| list of string 	| Tags to use for filtering.           	| True     	|
| lemma      	| bool           	| Whether to use lemma or plain words. 	| True     	|

**Return:**

| Type       	| Description                  	|
|------------	|------------------------------	|
| dictionary 	| Dictionary of word frequency 	|

### list_entities 

```python
list_entities()
```

Returns dictionaries of detected entities by type.

**Return:**

| Type               	| Description                                                        	|
|--------------------	|--------------------------------------------------------------------	|
| list of dictionary 	| List of dictionaries of different entities at the specified level. 	|

### get_emotion 

```python
get_emotion(granularity = 'sentence')
```

Returns emotion results, **granularity** defines whether to use emotion by sentence or by subsentence.

**Parameters:**

| Name        	| Type   	| Description                                                               	| Optional 	|
|-------------	|--------	|---------------------------------------------------------------------------	|----------	|
| granularity 	| string 	| Level at which emotions are analyzed. One of 'sentence' or 'subsentence'. 	| True     	|

**Return:**

| Type         	| Description                                                                                   	|
|--------------	|-----------------------------------------------------------------------------------------------	|
| list of dict 	| List of dictionaries with emotions as keys and dict {'occurences','sum','average'} as values. 	|


### get_sentiment 

```python
get_sentiment(granularity = 'sentence')
```

Returns sentiment results, granularity defines whether to use sentiment by sentence or by subsentence.

**Parameters:**

| Name        	| Type   	| Description                                                                 	| Optional 	|
|-------------	|--------	|-----------------------------------------------------------------------------	|----------	|
| granularity 	| string 	| Level at which sentiments are analyzed. One of 'sentence' or 'subsentence'. 	| True     	|

**Return:**

| Type         	| Description                                                                                   	|
|--------------	|-----------------------------------------------------------------------------------------------	|
| list of dict 	| List of dictionaries with polarity as keys and dict {'occurences','sum','average'} as values. 	|


### word_sentiment 

```python
word_sentiment(granularity = 'sentence', lemma = False, filter_pos = None, average=True)
```

Returns an average sentiment score for each word or lemma. For each sentence or subsentence (**granularity** parameter), the sentiment score is added to each of the words present. The scores are divided by the number of sentences or subsentences to get an average.

**Parameters:**

| Name        	| Type           	| Description                                                          	| Optional 	|
|-------------	|----------------	|----------------------------------------------------------------------	|----------	|
| granularity 	| string         	| Whether to use sentiment by 'sentence' or 'subsentence' for scoring. 	| True     	|
| lemma       	| bool           	| Whether to use lemma or plain words.                                 	| True     	|
| filter_pos  	| list of string 	| POStags to use for filtering.                                        	| True     	|
| average     	| bool           	| Whether to return average or list of values.                         	| True     	|

**Return:**

| Type       	| Description                                          	|
|------------	|------------------------------------------------------	|
| dictionary 	| Dictionary with words as keys and sentiment as value 	|


### word_emotion 

```python
word_emotion(granularity = 'sentence', lemma = False, filter_pos = None, average=True)
```

Returns the average score for each emotion for each word or lemma in the vocabulary. For each sentence or subsentence (**granularity** parameter), the emotion scores are added to each of the words present. The scores are divided by the number of sentences or subsentences to get an average (or list of values if 'average' == False).

**Parameters:**

| Name        	| Type           	| Description                                                        	| Optional 	|
|-------------	|----------------	|--------------------------------------------------------------------	|----------	|
| granularity 	| string         	| Whether to use emotion by 'sentence' or 'subsentence' for scoring. 	| True     	|
| lemma       	| bool           	| Whether to use lemma or plain words.                               	| True     	|
| filter_pos  	| list of string 	| POStags to use for filtering.                                      	| True     	|
| average     	| bool           	| Whether to return average or list of values.                       	| True     	|

**Return:**

| Type       	| Description                                                                             	|
|------------	|-----------------------------------------------------------------------------------------	|
| dictionary 	| Dictionary with (words, POS tag) as keys and a dictionary with emotion scores as value. 	|

**Example return**
```python
{
    ('patients', 'N'): -0.4917,
    ('male', 'N'): -0.4275,
    ('age', 'N'): -0.5167,
    ('cure', 'N'): 0.6421
}
```


### meaning_sentiment 

```python
meaning_sentiment(granularity='sentence', filter_meaning=None, average=True)
```

Returns average sentiment score for each **meaning** For each sentence or subsentence(**granularity** parameter), the sentiment score is added to each of the meaning present. The scores are divided by the number of sentences or subsentences to get an average. This can be used with custom **meaning** to get the sentiment associated with a particular meaning, for example 'customer service' or 'pricing' when analyzing customer reviews.

**Parameters:**

| Name           	| Type           	| Description                                                          	| Optional 	|
|----------------	|----------------	|----------------------------------------------------------------------	|----------	|
| granularity    	| string         	| Whether to use sentiment by 'sentence' or 'subsentence' for scoring. 	| True     	|
| filter_meaning 	| list of string 	| Filters results by list of meanings                                  	| True     	|
| average        	| bool           	| Whether to return average or list of values.                         	| True     	|

**Return:**

| Type       	| Description                                             	|
|------------	|---------------------------------------------------------	|
| dictionary 	| Dictionary with meanings as keys and sentiment as value 	|

**Example return**
```python
{
    ('patients', 'N'): {'surprise': 0.753, 'neutral': 0.445},
    ('male', 'N'): {'neutral': 0.8},
    ('surgery', 'N'): {'sadness': 0.79}
}
```

### meaning_emotion 

```python
meaning_emotion(granularity='sentence', filter_meaning=None, average=True)
```

Returns average emotion scores for each **meaning**. For each sentence or subsentence(**granularity** parameter), the score for each emotion is added to each of the meaning. The scores are divided by the number of sentences or subsentences to get an average. This can be used with custom **meaning** to get the emotion associated with a particular meaning, for example 'customer service' or 'pricing' when analyzing customer reviews.

**Parameters:**

| Name           	| Type           	| Description                                                        	| Optional 	|
|----------------	|----------------	|--------------------------------------------------------------------	|----------	|
| granularity    	| string         	| Whether to use emotion by 'sentence' or 'subsentence' for scoring. 	| True     	|
| filter_meaning 	| list of string 	| Filters results by list of meanings                                	| True     	|
| average        	| bool           	| Whether to return average or list of values.                       	| True     	|

**Return:**

| Type       	| Description                                             	|
|------------	|---------------------------------------------------------	|
| dictionary 	| Dictionary with meanings as keys and sentiment as value 	|

### filter_polarity 

```python
filter_polarity(polarity, granularity='sentence')
```

Filters **Sentence** or **Subsentence** of the specified polarity.

**Parameters:**

| Name        	| Type                     	| Description                                                          	| Optional 	|
|-------------	|--------------------------	|----------------------------------------------------------------------	|----------	|
| polarity    	| string or list of string 	| Polarity, 'neutral', 'positive', 'negative'.                         	| False    	|
| granularity 	| string                   	| Whether to use sentiment by 'sentence' or 'subsentence' for scoring. 	| True     	|

**Return:**

| Type                                         	| Description                                               	|
|----------------------------------------------	|-----------------------------------------------------------	|
| list of instances of Sentence or Subsentence 	| List of instances of objects with the specified polarity. 	|


### filter_emotion 

```python
filter_emotion(emotions, granularity='sentence')
```

Filters **Sentence** of the specified emotions.

**Parameters:**

| Name        	| Type                     	| Description                                                                                    	| Optional 	|
|-------------	|--------------------------	|------------------------------------------------------------------------------------------------	|----------	|
| emotions    	| string or list of string 	| Emotions to filter, one of 'joy', 'love', 'surprise', 'anger', 'sadness', 'fear' or 'neutral'. 	| False    	|
| granularity 	| string                   	| Whether to use sentiment by 'sentence' or 'subsentence' for scoring.                           	| True     	|

**Return:**

| Type                                         	| Description                                              	|
|----------------------------------------------	|----------------------------------------------------------	|
| list of instances of Sentence or Subsentence 	| List of instances of objects with the specified emotion. 	|


### filter_type 

```python
filter_type(sentence_type)
```

Filters **Sentence** of the specified emotions.

**Parameters:**

| Name          	| Type                     	| Description                                                                      	| Optional 	|
|---------------	|--------------------------	|----------------------------------------------------------------------------------	|----------	|
| sentence_type 	| string or list of string 	| Types to filter, one of 'assert', 'command', 'question_open', 'question_closed'. 	| False    	|

**Return:**

| Type                          	| Description                                            	|
|-------------------------------	|--------------------------------------------------------	|
| list of instances of Sentence 	| List of instances of Sentence with the specified type. 	|


### match_pattern 

```python
match_pattern(self, patterns_json, level = None, print_tree=False, skip_errors=False)
```

Match given pattern (either **Token Pattern** or **Dependency Pattern**) on the current TextChunk object.

The **'level'** argument specifies on which level the matching should be done, i.e. on the document level (returns matches per document), on the sentence or subsentence level. The default level is one level below in the hierarchy, document for **NLP class**, sentence for **Document** class and subsentence for **Sentence** class.

For more information on patterns look at the dedicated section: [Patterns](https://www.lettria.com/documentation/docs/python-sdk/patterns).

**Parameters:**

| Name          	| Type       	| Description                                                                   	| Optional 	|
|---------------	|------------	|-------------------------------------------------------------------------------	|----------	|
| patterns_json 	| dictionary 	| Token Pattern or Dependency Pattern                                           	| False    	|
| level         	| string     	| Level on which matching is done, one of 'document', 'sentence', 'subsentence' 	| True     	|
| print_tree    	| bool       	| Whether to print the dependency tree for dependency patterns.                 	| True     	|
| skip_errors   	| bool       	| Whether to skip errors and continue matching.                                 	| True     	|

**Return:**

| Type          	| Description                                        	|
|---------------	|----------------------------------------------------	|
| list of tuple 	| List of tuple (TextChunk object, match dictionary) 	|

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)