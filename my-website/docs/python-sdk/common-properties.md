---
sidebar_position: 7
---

# Common properties

These properties are accessible at all analysis levels : **NLP**, **Document**, **Sentence**, **Subsentence**, **Token**.

All properties have a **_flat** variant (token_flat) which flatten recursively the return.

| Name             	| type           	| Description                                                                             	|
|------------------	|----------------	|-----------------------------------------------------------------------------------------	|
| str              	| String         	| Returns sentence as string                                                              	|
| original_text    	| String         	| Returns the original token in the input text before modification from the tokenization. 	|
| token            	| String         	| Returns token                                                                           	|
| lemma            	| String         	| Returns lemma                                                                           	|
| lemma_detail     	| String         	| Returns unmerged lemma                                                                  	|
| pos              	| String         	| Returns POS (Part-Of-Speech) tags                                                       	|
| pos_detail       	| String         	| Returns unmerged POS (Part-Of-Speech) tags                                              	|
| dep              	| String         	| Returns dependency relations                                                            	|
| morphology       	| String         	| Returns morphological features                                                          	|
| language         	| String         	| Returns detected language                                                               	|
| meaning          	| List of Tuples 	| Returns meanings as tuples (SUPER, SUB)                                                 	|
| emotion          	| Tuple          	| Returns emotion as tuple (Type, score)                                                  	|
| sentiment        	| Dictionary     	| Returns sentiment with positive, negative and total values                              	|
| sentiment_ml     	| Dictionary     	| Returns sentiment of ml_model without further fine tuning                               	|
| sentiment_target 	| Tuple          	| Returns 'target' of words with strong sentimental meaning                               	|
| sentence_type    	| String         	| Returns type of sentence                                                                	|
| coreference      	| String         	| Returns reference of token if it exists                                                 	|
| synthesis        	| Dictionary     	| Returns synthesis object                                                                	|