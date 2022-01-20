---
sidebar_position: 2
---

# Lettria Sentence Object



In this object, each key corresponds to the returned object from a sub-API.

| KEY               	| TYPE                           	| DESCRIPTION                                                             	|
|-------------------	|--------------------------------	|-------------------------------------------------------------------------	|
| tokenizer         	| list of string                 	| List of tokens                                                          	|
| Entities_numeral  	| list of [Numeral Entity Object](https://www.lettria.com/documentation/docs/API/entities-numeral)  	| -                                                                       	|
| NER               	| list of [NER Object](https://www.lettria.com/documentation/docs/API/ner)             	| Lists all the Numeral Entities and Named Entities found in the sentence 	|
| NLP               	| list of [NLP Object](https://www.lettria.com/documentation/docs/API/nlp)             	| Lemma for each token in the sentence                                    	|
| NLU               	| list of [NLU Object](https://www.lettria.com/documentation/docs/API/nlu)             	| Understanding for each token in the sentence                            	|
| language_used     	| [Language used Object](https://www.lettria.com/documentation/docs/API/language-used)           	| Language detection                                                      	|
| disturbance       	| list of [Disturbance Object](https://www.lettria.com/documentation/docs/API/disturbance)     	| List of spell-checking objects for each token in the sentence           	|
| parser_dependency 	| list of [Dependency Object](https://www.lettria.com/documentation/docs/API/parser-dependency)      	| Dependencie for tokens in the sentence                                  	|
| postagger         	| list of [POS Tagger Object](https://www.lettria.com/documentation/docs/API/pos-tagger)      	| List of token - tag tuples                                              	|
| coreference       	| list of [Coreference Object](https://www.lettria.com/documentation/docs/API/coreference)     	| List of found coreferences                                              	|
| emotions          	| [Emotions Object](https://www.lettria.com/documentation/docs/API/emotions)                	| Emotion analysis of the sentence                                        	|
| sentiment         	| [Sentiment Object](https://www.lettria.com/documentation/docs/API/sentiment)               	| Sentiment analysis of the sentence                                      	|
| sentence_acts     	| [Sentence Acts Object](https://www.lettria.com/documentation/docs/API/sentence-acts)           	| Detection of sentence type                                              	|
| proposition       	| list of [Subsentence Object](https://www.lettria.com/documentation/docs/API/ml-sentiment#subsentences-ia-sentiment-object)     	| List of subsentences found within the sentence                          	|
| synthesis         	| list of [Synthesis Token Object](https://www.lettria.com/documentation/docs/API/synthesis) 	| compiles all the most relevant information for each token               	|                               	|

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)