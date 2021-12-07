---
sidebar_position: 11
---

# Sentence Acts

Go back to the [Sentence Object](https://www.lettria.com/documentation/docs/API/lettria-sentence-object).

## Sentence_acts Object

Detail of the sentence_acts list:

| KEY     	| TYPE   	| DESCRIPTION                   	|
|---------	|--------	|-------------------------------	|
| predict 	| string 	| Type chosen by the algorithm. 	|

## Sentence_acts detail Object

| KEY           	| TYPE  	| DESCRIPTION                                              	| EXAMPLE                                                  	|
|---------------	|-------	|----------------------------------------------------------	|----------------------------------------------------------	|
| assert        	| float 	| Probability that the sentence is an assertion.           	| "Je suis un développeur."                                	|
| command       	| float 	| Probability that the sentence is a command.              	| "Donne moi la réponse."                                  	|
| question_open 	| float 	| Probability that the sentence is an open-ended question. 	| "Quelle est la meilleure solution de TALN en français ?" 	|
| question_yn   	| float 	| Probability that the sentence is a close-ended question. 	| "Est-ce que vous avez une question ?"                    	|

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="py" label="Python">

```py
{
  "predict": "question_open"
}
```

</TabItem>
<TabItem value="json" label="JSON">

```json
{
  "predict": "question_open"
}
```

</TabItem>
</Tabs>