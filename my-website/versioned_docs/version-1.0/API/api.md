---
sidebar_position: 1
--- 

# API

When you make a request to our API, we first split your text into sentences. Each sentence is processed individually, and the results from each analysis is then compiled into one JSON object. This JSON object is a list of [Document](https://www.lettria.com/documentation/docs/API/Document), [Sentence](https://www.lettria.com/documentation/docs/API/Sentence) and [Details](https://www.lettria.com/documentation/docs/API/Details) Objects.

## Request & Authenication

All your requests must contain a header called Authorization. The value of the header must be created like so : **"LettriaProKey API_KEY"**.

Get your free API_KEY on your [Dashboard](https://app.lettria.com/nlp).

```python

To make a request using curl, replace API_KEY with your personal token
and YOUR_SENTENCE with the text to process :


curl -H "Authorization: LettriaProKey API_KEY" \
-H "Content-Type: application/json" \
-X POST "https://api.lettria.com/main" \
-d '{ "text" : "YOUR_SENTENCE" }'

```

## API Format

The API return is structured into three main objects: [Document](https://www.lettria.com/documentation/docs/API/Document/Document), [Sentence](https://www.lettria.com/documentation/docs/API/Sentence/Sentence) and [Details](https://www.lettria.com/documentation/docs/API/Details/Details).

Below you will find the API output format:

```

input: 'The package was delivered on Tuesday. I will resell it.' # full document

output:

{
‘coreference’ :  {‘span’ : [
	{ "sentence_index": 0, "token_indexes": [0], "cluster_index": 1},
	{ "sentence_index": 0, "token_indexes": [2,3,4], "cluster_index": 0}
],
‘cluster’ : [
		[1],
		[0]
	]},

‘type’ : ‘tweet’, # type of input (contract, article, tweet, reviews, conversation, etc.)

‘domain’ : ‘healthcare’ # classification by domain to allow loading certain dictionary / specific entity for example

‘source_pure’ : # source of raw input
‘language’ : fr # input language
'emoticon': # global text emoticons
‘sentiment’ : # global sentiment from the text
'emotion': # global emotion from the text
'sentences' [{}, {}, {}] # list of sentence (see below)
'project id' : # project ID used for analysis
'API_version' : 
______________________________________________________________________

'sentences' : {

	‘source_pure’ : ‘The package was delivered on Tuesday.’ # the raw source of sentence after the split
	'source': # ource of raw input
	‘sentence_indexes’ : [43, 434] # index start and end of the first and last character of the sentence
	
	‘emotion’ :  # actual
	‘sentiment’ # actual
	'ML_sentiment et ML_emotion': # actual
	‘ner’ : actual (reunites NER & ML_NER)
	‘sentence_type’ : ’assert’ # sentence type
	‘subsentences’ : [{start :0 , end : 13}] # index relative to the sentence currently => how to make the difference with the absolute ...


‘detail’ : [{
            ‘lemma’ : Mister # lemma
            ‘source_pure’ : Mr. # the TRUE source
            'source': Mister # the work source
            ‘index’ : [415,435] # absolute token index at input
            ‘tag’ : # postag
            ‘dep’ : # dep parser dep,
            ‘ref’ : token reference index (dependency parser),
            ‘meaning’ : []
            ‘lemmatizer’ : {} # lemmatizer details
            ‘type_entity’ : # type of entity or null
            ‘value’ : {} # return entity or other
             },
		   {...}, {…}, ….]
	 
}
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)
