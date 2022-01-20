---
sidebar_position: 2
--- 

# Document

The API output is divided into three levels. The first level of return is the Document level. Within the Document Object you will find the following return below.

Check out the Sentence and Details level to see the full list of objects. 

## Document Object

|     Key     |            Type            |                                         Description                                        |
|:-----------:|:--------------------------:|:------------------------------------------------------------------------------------------:|
| [coreference](https://www.lettria.com/documentation/docs/API/document#coreference) | list of Coreference Object | List of found coreferences                                                                 |
| [cluster](https://www.lettria.com/documentation/docs/API/document#cluster)     | string                     | input format                                                                               |
| [type](https://www.lettria.com/documentation/docs/API/document#type)        | string                     | type of input (contract, article, tweet, reviews, conversation, etc.)                      |
| [domain](https://www.lettria.com/documentation/docs/API/document#domain)      | string                     | classification by domain to allow loading certain dictionary / specific entities. (Healthcare, Legal, Finance etc.) |
| [source_pure](https://www.lettria.com/documentation/docs/API/document#source_pure) | string                     | source of raw input                                                                        |
| [language](https://www.lettria.com/documentation/docs/API/document#language)    | [Language used Object](https://www.lettria.com/documentation/docs/API/document#language-used)       | Language detection                                                                         |
| [emoticon](https://www.lettria.com/documentation/docs/API/document#emoticon)    | [Emoticon Object](https://www.lettria.com/documentation/docs/API/document#emoticon-object)             | global text emoticons                                                                      |
| [sentiment](https://www.lettria.com/documentation/docs/API/document#sentiment)   | Sentiment Object           | global sentiment from the text                                                             |
| [emotion](https://www.lettria.com/documentation/docs/API/document#emotion)     | Emotions Object            | global emotion from the text                                                               |
| [sentences](https://www.lettria.com/documentation/docs/API/document#sentences)   | string                     | list of sentence                                                                           |
| [project id](https://www.lettria.com/documentation/docs/API/document#project_id)  | integer                    | project ID used for analysis                                                               |
| [API_version](https://www.lettria.com/documentation/docs/API/document#api_version) | integer                    | version of the API                                                                         |

## Document format

Here you have an example of the objects returned at a Document level. 

``` python
input: 'The package was delivered on Tuesday.'

output :
{
‘coreference’ :  {‘span’ : [
	{ "sentence_index": 0, "token_indexes": [0], "cluster_index": 1},
	{ "sentence_index": 0, "token_indexes": [2,3,4], "cluster_index": 0}
],
‘cluster’ : [
		[1],
		[0]
	]},

‘type’ : ‘tweet’, 
‘domain’ : ‘healthcare’ 

‘source_pure’ : "The package was delivered on Tuesday."
‘language’ : 'en'
'emoticon': []
‘sentiment’ : {'positive': 0, 'negative': 0, 'total': 0}
'emotion': []
'sentences' [The package was delivered on Tuesday.]
'project id' : 0
'API_version' : 
```

## Coreference

|    KEY    |       TYPE       |                                      DESCRIPTION                                     |     CONSTRAINTS     |
|:---------:|:----------------:|:------------------------------------------------------------------------------------:|:-------------------:|
| source    | string           | source word that makes the coreference query                                         | -                   |
| index     | int              | index of the source word                                                             | index >= 0          |
| precision | float            | precision indices based on how the algorithm found the coreference. Higher is better | 0 <= precision <= 1 |
| reference | Reference Object | describes the best match for the coreference query                                   |                     |

## Cluster

| Key     | Type   | Description  |
|---------|--------|--------------|
| cluster | string | input format |

## Type

| Key  | Type   | Description                                                           |
|------|--------|-----------------------------------------------------------------------|
| type | string | type of input (contract, article, tweet, reviews, conversation, etc.) |

## Domain

| Key    | Type   | Description                                                                                                         |
|--------|--------|---------------------------------------------------------------------------------------------------------------------|
| domain | string | Classification by domain to allow loading certain dictionary / specific entities. (Healthcare, Legal, Finance etc.) |

## source_pure

| Key         | Type   | Description         |
|-------------|--------|---------------------|
| source_pure | string | source of raw input |

## Language

Language code follows [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

|       KEY      |       TYPE      |                    DESCRIPTION                   |
|:--------------:|:---------------:|:------------------------------------------------:|
| predict        | string          | cast fr because Lettria exits in French actually |
| sentence level | [Language Object](https://www.lettria.com/documentation/docs/API/document#langauge-object) | Predict language of sentence                     |
| word level     | [Language Object](https://www.lettria.com/documentation/docs/API/document#language-object) | Predict language per word                        |

### Language Object

Probabilities for 140 languages:

| KEY |  TYPE | DESCRIPTION |
|:---:|:-----:|:-----------:|
| da  | float | Danish      |
| de  | float | German      |
| en  | float | English     |
| es  | float | Spanish     |
| fi  | float | Finnish     |
| fr  | float | French      |
| hu  | float | Hungarian   |
| it  | float | Italian     |
| kk  | float | Kazakh      |
| nl  | float | Dutch       |
| no  | float | Norwegian   |
| pt  | float | Portuguese  |
| ru  | float | Russian     |
| sv  | float | Swedish     |
| tr  | float | Turkish     |
| ... | float | ...         |



## Emoticon

Lists all emoticons found.

|     KEY    |      TYPE      |              DESCRIPTION             |
|:----------:|:--------------:|:------------------------------------:|
| confidence | float          | Confidence in value matching         |
| emoticon   | [Emoticon Object](https://www.lettria.com/documentation/docs/API/document#emoticon-object) | boolean values for matched emoticons |

### Emoticon Object

|     KEY     | TYPE | CONSTRAINTS |
|:-----------:|:----:|:-----------:|
| Thappy      | int  | 0 or 1      |
| angel       | int  | 0 or 1      |
| cry         | int  | 0 or 1      |
| devil       | int  | 0 or 1      |
| embarrassed | int  | 0 or 1      |
| happy       | int  | 0 or 1      |
| hesitant    | int  | 0 or 1      |
| horror      | int  | 0 or 1      |
| indecision  | int  | 0 or 1      |
| kiss        | int  | 0 or 1      |
| lol         | int  | 0 or 1      |
| love        | int  | 0 or 1      |
| muted       | int  | 0 or 1      |
| notlove     | int  | 0 or 1      |
| playful     | int  | 0 or 1      |
| sad         | int  | 0 or 1      |
| surprise    | int  | 0 or 1      |
| very_happy  | int  | 0 or 1      |
| very_sad    | int  | 0 or 1      |
| wink        | int  | 0 or 1      |

## Sentiment

|    KEY   |  TYPE |                              DESCRIPTION                             |     CONSTRAINTS    |
|:--------:|:-----:|:--------------------------------------------------------------------:|:------------------:|
| positive | float | normalized addition of all positive sentiment values in the sentence | 0 <= positive < 1  |
| negative | float | normalized addition of all negative sentiment values in the sentence | -1 < negative <= 0 |
| total    | float | positive + negative                                                  | -1 < total < 1     |

Values are calculated either by using sentiment elements objects if available, or by a prediction model at the subsentence level. Values are normalized to stay in the the [-1 : 1] interval between element, subsentence and sentence level therefore comparisons should be made made with elements of the same depth.

## Emotion

|    KEY    |  TYPE |    DESCRIPTION   |     CONSTRAINTS    |
|:---------:|:-----:|:----------------:|:------------------:|
| happiness | float | normalized total | 0 <= happiness < 1 |
| sadness   | float | normalized total | 0 <= sadness < 1   |
| anger     | float | normalized total | -1 < anger < 1     |
| surprise  | float | normalized total | -1 < surprise < 1  |
| disgust   | float | normalized total | -1 < disgust < 1   |
| fear      | float | normalized total | -1 < fear < 1      |

Values are calculated by using emotion elements objects. Values are normalized to stay in the the [-1 : 1] interval between element, subsentence and sentence level therefore comparisons should be made made with elements of the same depth.

## Sentences

| Key       | Type   | Description      |
|-----------|--------|------------------|
| sentences | string | list of sentence |

## project_ID

| Key        | Type    | Description                  |
|------------|---------|------------------------------|
| project id | integer | project ID used for analysis |

## API_version

| Key         | Type    | Description        |
|-------------|---------|--------------------|
| API_version | integer | version of the API |

