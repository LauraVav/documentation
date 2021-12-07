---
sidebar_position: 1
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
| language_used     	| Language used Object           	| Language detection                                                      	|
| disturbance       	| list of Disturbance Object     	| List of spell-checking objects for each token in the sentence           	|
| parser_dependency 	| list of Dependency Object      	| Dependencie for tokens in the sentence                                  	|
| postagger         	| list of POS Tagger Object      	| List of token - tag tuples                                              	|
| coreference       	| list of Coreference Object     	| List of found coreferences                                              	|
| emotions          	| Emotions Object                	| Emotion analysis of the sentence                                        	|
| sentiment         	| Sentiment Object               	| Sentiment analysis of the sentence                                      	|
| sentence_acts     	| Sentence Acts Object           	| Detection of sentence type                                              	|
| proposition       	| list of Subsentence Object     	| List of subsentences found within the sentence                          	|
| synthesis         	| list of Synthesis Token Object 	| compiles all the most relevant information for each token               	|                               	|