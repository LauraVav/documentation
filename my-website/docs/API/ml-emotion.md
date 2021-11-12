---
sidebar_position: 16
---

# ML Emotion

ML emotion is a multilabel model that returns the emotions expressed in a sentence or subsentence.
The model is composed by multiple adapters trained on diverses datasets, then fine-tuned on original goemotion dataset and its french translation.
"value"'s value is always 1, since it's float value is not relevant on this task.

| Emotion        	| Description                                                                                                             	|
|----------------	|-------------------------------------------------------------------------------------------------------------------------	|
| neutral        	| No particular emotion in this sentence.                                                                                 	|
| admiration     	| Finding something impressive or worthy of respect.                                                                      	|
| amusement      	| Finding something funny or being entertained.                                                                           	|
| anger          	| A strong feeling of displeasure or antagonism.                                                                          	|
| annoyance      	| Mild anger irritation.                                                                                                  	|
| approval       	| Having or expressing a favorable opinion.                                                                               	|
| caring         	| Displaying kindness and concern for others.                                                                             	|
| confusion      	| Lack of understanding uncertainty.                                                                                      	|
| curiosity      	| A strong desire to know or learn something.                                                                             	|
| desire         	| A strong feeling of wanting something or wishing for something to happen.                                               	|
| disappointment 	| Sadness or displeasure caused by the nonfulfillment of one’s hopes or expectations.                                     	|
| disapproval    	| Having or expressing an unfavorable opinion.                                                                            	|
| disgust        	| Revulsion or strong disapproval aroused by something unpleasant or offensive.                                           	|
| embarrassment  	| Self-consciousness shame or awkwardness.                                                                                	|
| excitement     	| Feeling of great enthusiasm and eagerness.                                                                              	|
| fear           	| Being afraid or worried.                                                                                                	|
| gratitude      	| A feeling of thankfulness and appreciation.                                                                             	|
| grief          	| Intense sorrow especially caused by someone’s death.                                                                    	|
| joy            	| A feeling of pleasure and happiness.                                                                                    	|
| love           	| A strong positive emotion of regard and affection.                                                                      	|
| nervousness    	| Apprehension worry anxiety.                                                                                             	|
| optimism       	| Hopefulness and confidence about the future or the success of something.                                                	|
| pride          	| Pleasure or satisfaction due to ones own achievements or the achievements of those with whom one is closely associated. 	|
| realization    	| Becoming aware of something.                                                                                            	|
| relief         	| Reassurance and relaxation following release from anxiety or distress.                                                  	|
| remorse        	| Regret or guilty feeling.                                                                                               	|
| sadness        	| Emotional pain sorrow.                                                                                                  	|
| surprise       	| Feeling astonished startled by something unexpected.                                                                    	|

Main data source : ```
@misc{demszky2020goemotions, title={GoEmotions: A Dataset of Fine-Grained Emotions}, author={Dorottya Demszky and Dana Movshovitz-Attias and Jeongwoo Ko and Alan Cowen and Gaurav Nemade and Sujith Ravi}, year={2020}, eprint={2005.00547}, archivePrefix={arXiv}, primaryClass={cs.CL} } Adapters models: @inproceedings{pfeiffer2020AdapterHub, title={AdapterHub: A Framework for Adapting Transformers}, author={Jonas Pfeiffer and Andreas R\"uckl\'{e} and Clifton Poth and Aishwarya Kamath and Ivan Vuli\'{c} and Sebastian Ruder and Kyunghyun Cho and Iryna Gurevych}, booktitle={Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP 2020): Systems Demonstrations}, year={2020}, address = "Online", publisher = "Association for Computational Linguistics", url = "https://www.aclweb.org/anthology/2020.emnlp-demos.7", pages = "46--54", }```