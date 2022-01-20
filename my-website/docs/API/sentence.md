---
sidebar_position: 3
--- 

# Sentence

The API output is divided into three levels. The second level of return is the Sentence level. Within the Sentence Object you will find the following return below. 

Check out the Document and Details level to see the full list of objects. 

## Sentence Object

|        Key       |       Type       |                             Description                             |
|:----------------:|:----------------:|:-------------------------------------------------------------------:|
| [source_pure](https://www.lettria.com/documentation/docs/API/sentence#source_pure)      | string           | the TRUE source                                                     |
| [source](https://www.lettria.com/documentation/docs/API/sentence#source)           | string           | source of raw input                                                 |
| [sentence_indexes](https://www.lettria.com/documentation/docs/API/sentence#sentence_indexes) | integer          | index start and end of the first and last character of the sentence |
| [emotion](https://www.lettria.com/documentation/docs/API/sentence#emotion)          | Emotions Object  | actual                                                              |
| [sentiment](https://www.lettria.com/documentation/docs/API/sentence#sentiment)        | Sentiment Object | actual                                                              |
| [ML sentiment](https://www.lettria.com/documentation/docs/API/sentence#ml_sentiment)     | integer          | actual                                                              |
| [ML emotion](https://www.lettria.com/documentation/docs/API/sentence#ml_emotion)       | string           | actual                                                              |
| [ner](https://www.lettria.com/documentation/docs/API/sentence#ner)              | NER Object       | actual (combines NER & ML_NER)                                      |
| [sentence_type](https://www.lettria.com/documentation/docs/API/sentence#sentence_type)    | string           | sentence type                                                       |
| [subsentences](https://www.lettria.com/documentation/docs/API/sentence#subsentences)     | integer          | index relative to the current sentence                              |

## Sentence Format

```python
input: 'The package was delivered on Tuesday.'

output :

'sentences' : {

	‘source_pure’ : ‘The package was delivered on Tuesday.’ 
	'source': ‘The package was delivered on Tuesday.’ 
	‘sentence_indexes’ : [0, 3] 
	‘emotion’ :  []
	‘sentiment’ : [{'positive': 0, 'negative': 0, 'total': 0}]
	'ML_sentiment et ML_emotion': [0], [[('remorse', 1)]]
	‘ner’ : [{}, {}, {}, {}, {'type': ['date'], 'value': {'ISO': '2022-01-18', 'formatted': 'Tuesday 18 January 2022 00:00:00', 'timestamp': 1642464000, 'chronology': 'future', 'chronology_day': 1, 'confidence': 0.99}}, {}]
	‘sentence_type’ : "assert"
	‘subsentences’ : [{"start_id": 0, "end_id": 5}]
```
## source_pure

| Key         | Type   | Description     |
|-------------|--------|-----------------|
| source_pure | string | the TRUE source |

## source

| Key    | Type   | Description         |
|--------|--------|---------------------|
| source | string | source of raw input |

## Sentence indexes

| Key              | Type    | Description                                                         |
|------------------|---------|---------------------------------------------------------------------|
| sentence_indexes | integer | index start and end of the first and last character of the sentence |

## Emotion

### Emotion Value Object

|    KEY    |  TYPE |    DESCRIPTION   |     CONSTRAINTS    |
|:---------:|:-----:|:----------------:|:------------------:|
| happiness | float | normalized total | 0 <= happiness < 1 |
| sadness   | float | normalized total | 0 <= sadness < 1   |
| anger     | float | normalized total | -1 < anger < 1     |
| surprise  | float | normalized total | -1 < surprise < 1  |
| disgust   | float | normalized total | -1 < disgust < 1   |
| fear      | float | normalized total | -1 < fear < 1      |

Values are calculated by using emotion elements objects. Values are normalized to stay in the the [-1 : 1] interval between element, subsentence and sentence level therefore comparisons should be made made with elements of the same depth.

## Sentiment

### Sentiment Value Object

| KEY      | TYPE  | DESCRIPTION                                                          | CONSTRAINTS        |
|----------|-------|----------------------------------------------------------------------|--------------------|
| positive | float | normalized addition of all positive sentiment values in the sentence | 0 <= positive < 1  |
| negative | float | normalized addition of all negative sentiment values in the sentence | -1 < negative <= 0 |
| total    | float | positive + negative                                                  | -1 < total < 1     |

Values are calculated either by using sentiment elements objects if available, or by a prediction model at the subsentence level. Values are normalized to stay in the the [-1 : 1] interval between element, subsentence and sentence level therefore comparisons should be made made with elements of the same depth.

## Ml_sentiment

### ML Sentiment Object

| KEY         | TYPE                                     | DESCRIPTION                                               |
|-------------|------------------------------------------|-----------------------------------------------------------|
| sentence    | list of Sentences ML Sentiment Object    | Source of all sentiments elements divided by subsentences |
| subsentence | list of Subsentences ML Sentiment Object | Source of all sentiments elements divided by subsentences |

ml_sentiment values are available at the following levels of granularity: sentence and subsentence


## ML_emotion

ML emotion is a multilabel model that returns the emotions expressed in a sentence or subsentence. The model is composed by multiple adapters trained on diverses datasets, then fine-tuned on original goemotion dataset and its french translation. "value"'s value is always 1, since it's float value is not relevant on this task.

| Emotion        | Description                                                                                                             |
|----------------|-------------------------------------------------------------------------------------------------------------------------|
| neutral        | No particular emotion in this sentence.                                                                                 |
| admiration     | Finding something impressive or worthy of respect.                                                                      |
| amusement      | Finding something funny or being entertained.                                                                           |
| anger          | A strong feeling of displeasure or antagonism.                                                                          |
| annoyance      | Mild anger irritation.                                                                                                  |
| approval       | Having or expressing a favorable opinion.                                                                               |
| caring         | Displaying kindness and concern for others.                                                                             |
| confusion      | Lack of understanding uncertainty.                                                                                      |
| curiosity      | A strong desire to know or learn something.                                                                             |
| desire         | A strong feeling of wanting something or wishing for something to happen.                                               |
| disappointment | Sadness or displeasure caused by the nonfulfillment of one’s hopes or expectations.                                     |
| disapproval    | Having or expressing an unfavorable opinion.                                                                            |
| disgust        | Revulsion or strong disapproval aroused by something unpleasant or offensive.                                           |
| embarrassment  | Self-consciousness shame or awkwardness.                                                                                |
| excitement     | Feeling of great enthusiasm and eagerness.                                                                              |
| fear           | Being afraid or worried.                                                                                                |
| gratitude      | A feeling of thankfulness and appreciation.                                                                             |
| grief          | Intense sorrow especially caused by someone’s death.                                                                    |
| joy            | A feeling of pleasure and happiness.                                                                                    |
| love           | A strong positive emotion of regard and affection.                                                                      |
| nervousness    | Apprehension worry anxiety.                                                                                             |
| optimism       | Hopefulness and confidence about the future or the success of something.                                                |
| pride          | Pleasure or satisfaction due to ones own achievements or the achievements of those with whom one is closely associated. |
| realization    | Becoming aware of something.                                                                                            |
| relief         | Reassurance and relaxation following release from anxiety or distress.                                                  |
| remorse        | Regret or guilty feeling.                                                                                               |
| sadness        | Emotional pain sorrow.                                                                                                  |
| surprise       | Feeling astonished startled by something unexpected.                                                                    |

Main data source : ```@misc{demszky2020goemotions, title={GoEmotions: A Dataset of Fine-Grained Emotions}, author={Dorottya Demszky and Dana Movshovitz-Attias and Jeongwoo Ko and Alan Cowen and Gaurav Nemade and Sujith Ravi}, year={2020}, eprint={2005.00547}, archivePrefix={arXiv}, primaryClass={cs.CL} } Adapters models: @inproceedings{pfeiffer2020AdapterHub, title={AdapterHub: A Framework for Adapting Transformers}, author={Jonas Pfeiffer and Andreas R\"uckl\'{e} and Clifton Poth and Aishwarya Kamath and Ivan Vuli\'{c} and Sebastian Ruder and Kyunghyun Cho and Iryna Gurevych}, booktitle={Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP 2020): Systems Demonstrations}, year={2020}, address = "Online", publisher = "Association for Computational Linguistics", url = "https://www.aclweb.org/anthology/2020.emnlp-demos.7", pages = "46--54", }```

## NER

The NER sub-api lists all the Numeral Entities and Named Entities found in the sentence.

| KEY    | TYPE         | DESCRIPTION                        | CONSTRAINTS                                                                              |
|--------|--------------|------------------------------------|------------------------------------------------------------------------------------------|
| source | string       | -                                  | -                                                                                        |
| type   | string       | Describes the type of entity found | For proper nouns, can either be LOCATION or PERSON. For other entities, see Entity types |
| value  | Value Object | -                                  | -                                                                                        |

## Sentence Type

### Sentence Acts Object

| KEY     | TYPE   | DESCRIPTION                   |
|---------|--------|-------------------------------|
| predict | string | Type chosen by the algorithm. |

### Sentence Acts Details Object

|      KEY      |  TYPE |                        DESCRIPTION                       |                    EXAMPLE                    |
|:-------------:|:-----:|:--------------------------------------------------------:|:---------------------------------------------:|
| assert        | float | Probability that the sentence is an assertion.           | "I am a developer."                          |
| command       | float | Probability that the sentence is a command.              | "Give me a response."                         |
| question_open | float | Probability that the sentence is an open-ended question. | "What is the best solution of NLP in French?" |
| question_yn   | float | Probability that the sentence is a close-ended question. | "Do you have a question?"                     |

## Subsentences

|    KEY   | TYPE |                DESCRIPTION               |
|:--------:|:----:|:----------------------------------------:|
| start_id | int  | Id of the first token of the subsentence |
| end_id   | int  | Id of the last token of the subsentence  |


