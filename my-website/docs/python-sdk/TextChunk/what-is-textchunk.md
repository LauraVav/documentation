---
sidebar_position: 1
---

# What is TextChunk?

**TextChunk** is the base class of **NLP**, **Document**, **Sentence** and **Subsentence**.
It offers different methods that can be accessed through children classes.

**Data analysis:**

| METHOD                                                                                                               	| DESCRIPTION                                                     	|
|----------------------------------------------------------------------------------------------------------------------	|-----------------------------------------------------------------	|
| [vocabulary()](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/textchunk-methods#vocabulary)               	| Returns vocabulary from current data.                           	|
| [word_count()](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/textchunk-methods#word_count)               	| Returns word count from current data.                           	|
| [word_frequency()](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/textchunk-methods#word_frequency)       	| Returns word frequency of current data.                         	|
| [list_entities()](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/textchunk-methods#list_entities)         	| Returns dictionaries of detected entities by type.              	|
| [get_emotion()](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/textchunk-methods#get_emotion)             	| Returns emotion results at the specified hierarchical level     	|
| [get_sentiment()](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/textchunk-methods#get_sentiment)         	| Returns sentiment results at the specified hierarchical level   	|
| [word_sentiment()](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/textchunk-methods#word_sentiment)       	| Returns average sentiment for each word of the whole vocabulary 	|
| [word_emotion()](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/textchunk-methods#word_emotion)           	| Returns average emotion for each word of the whole vocabulary   	|
| [meaning_sentiment()](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/textchunk-methods#meaning_sentiment) 	| Returns average sentiment for each meaning                      	|
| [meaning_emotion()](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/textchunk-methods#meaning_emotion)     	| Returns average emotion for each meaning                        	|
| [filter_polarity()](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/textchunk-methods#filter_polarity)     	| Filters Sentence or Subsentence of the specified polarity       	|
| [filter_emotion()](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/textchunk-methods#filter_emotion)       	| Filters Sentence or Subsentence of the specified emotions       	|
| [filter_type()](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/textchunk-methods#filter_type)             	| Filters Sentence of the specified types                         	|
| [match_pattern()](https://lettria-doc.netlify.app/docs/python-sdk/TextChunk/textchunk-methods#match_pattern)         	| Returns matches from given patterns.                            	|