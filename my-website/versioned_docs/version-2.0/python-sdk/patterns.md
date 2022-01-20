---
sidebar_position: 10
---

# Patterns

Patterns let you find documents, sentences or tokens according to certain rules that will describe token attributes and relations between tokens. Attributes refer to information about a token like postag, raw text, dependency, entity type ...
Patterns follow a dictionary structure and can be loaded from json files.

## Token Patterns

Token patterns are simple patterns that do not use dependency parsing. They consist of a sequence of attributes related rules.

## Attributes

Attributes are the properties of a token after analysis by the comprehension API. By defining an attribute in a pattern, only tokens that match the specific attribute will be matched.

| Attribute      	| Description                                      	|
|----------------	|--------------------------------------------------	|
| ORTH           	| Text of the token.                               	|
| TEXT           	| Text of the token.                               	|
| LOWER          	| Text of the token in lowercase.                  	|
| LEMMA          	| Lemma of the token.                              	|
| POS            	| Part-Of-Speech tag of the token.                 	|
| DEP            	| Dependency tag of the token.                     	|
| ENT_TYPE       	| Entity type of the token (see NER API).          	|
| CATEGORY_SUPER 	| Category "SUPER" of the token (see Meaning API). 	|
| CATEGORY_SUB   	| Category "SUB" of the token (see Meaning API).   	|
| LENGTH         	| Length of the token.                             	|
| IS_ALPHA       	| Token is composed of alphabectics characters.    	|
| IS_ASCII       	| Token is composed of ASCII characters.           	|
| IS_DIGIT       	| Token is composed of digits.                     	|
| IS_LOWER       	| Token is in lowercase.                           	|
| IS_UPPER       	| Token is in uppercase.                           	|
| IS_TITLE       	| Token is in titlecase.                           	|
| IS_PUNCT       	| Token is punctuation.                            	|
| IS_SPACE       	| Token is space.                                  	|
| IS_SENT_START  	| Token is the first in the sentence.              	|
| LIKE_NUM       	| Token is a number.                               	|
| LIKE_URL       	| Token has entity type URL.                       	|
| LIKE_EMAIL     	| Token has entity type email.                     	|
| OP             	| Operator to modify matching behavior.            	|

## Modifiers

Each attribute can map either to a single value or to a dictionary that allows modifiers for more complex behaviors.

**Attribute**

| Modifier         	| Description                                                          	|
|------------------	|----------------------------------------------------------------------	|
| IN               	| Attribute value is a member of this list.                            	|
| NOT_IN           	| Attribute value is not amember of this list.                         	|
| ISSUBSET         	| Attribute value is a subset (part of) this list                      	|
| ISSUPERSET       	| Attribute value is a superset of this list.                          	|
| ==, >, <, >=, <= 	| For integer comparisons, attribute value is equal, greater or lower. 	|

## Operators

Operators work similarly as regular expressions operators, they allow to choose how often should a token be matched.

| Operator 	| Description                                          	|
|----------	|------------------------------------------------------	|
| ?        	| Pattern step is optional and can match 0 or 1 token. 	|
| +        	| Pattern can match 1 or more tokens.                  	|
| *        	| Pattern can match 0 or more tokens.                  	|
| !        	| Pattern is negated, it must match 0 time.            	|
| .        	| Default operator, pattern should match 1 token.      	|

```python
patterns = {
    "patients":
        [
            {"POS":{"IN":["CD", "ENTITY"]}},
            {"POS":{"IN":["RB", "JJ", "PUNCT", "ENTITY"]}, "OP":"*"},
            {"LEMMA":"patient"}
        ],
    "date":
        [
            {"ENT_TYPE":"duration"}
        ]
}

text = "3416 consecutive patients were reviewed and 1476 finally enrolled (65.9 ± 20.9 years, 57.3% male). 76 (5.1%) patients had NAEs. Of 444 patients, 76% were male. They had a mean age of 69 ± 10 years."
nlp.add_document(text)

for s, matches in nlp.match_pattern(patterns, level='sentence'):
    print(s.str)
    print(matches)
```


## Dependency Patterns

Dependency patterns use dependency parsing which construct a grammatical tree of the sentence to allow complex matching patterns.
Attributes matching is similar to Token Patterns (Only exception is that for operators only "?" is available) but there are also relation operators specific to dependency matching.
Matching between the pattern and the sentence does not use the order of token (like for Token Patterns) but the dependency relations between tokens.

A Dependency Pattern consist of a list of dictionary formated in this way:

| Name        	| Description                                                                                           	|
|-------------	|-------------------------------------------------------------------------------------------------------	|
| LEFT_ID     	| Name of the left node in the relation, it must have been defined in an earlier node.                  	|
| REL_OP      	| Operator that describes the relation between left and right nodes.                                    	|
| RIGHT_ID    	| Name of the right node in the relation (the current node).                                            	|
| RIGHT_ATTRS 	| The attributes that must match with the right node, they are defined similarly as for Token Patterns. 	|

All fields must be completed except for the root node which only needs 'RIGHT_ID' and 'RIGHT_ATTRS' fields. Each pattern must have one root node.


## Relation Operators

| Relation Operator 	| Description                                                                                  	|
|-------------------	|----------------------------------------------------------------------------------------------	|
| <                 	| A is a direct dependant of B.                                                                	|
| >                 	| A is the immediate head of B.                                                                	|
| <<                	| A is a dependant of B directly or indirectly.                                                	|
| >>                	| A is a head of B directly or indirectly.                                                     	|
| .                 	| A token directly precedes B: A.idx == B.idx - 1.                                             	|
| .*                	| A token is located before B: A.idx < B.idx.                                                  	|
| ;                 	| A token directly follows B: A.idx == B.idx + 1.                                              	|
| ;*                	| A token is located after B: A.idx > B.idx.                                                   	|
| $+                	| A is a sibling of B (same parent/head) and is located directly before B: A.idx == B.idx - 1. 	|
| $-                	| A is a sibling of B (same parent/head) and is located directly after B: A.idx == B.idx + 1.  	|
| $++               	| A is a sibling of B and is located before B: A.idx < B.idx.                                  	|
| $--               	| A is a sibling of B and is located after B: A.idx > B.idx.                                   	|

Dependency matching should not be used on Subsentence since they don't have a complete dependency tree.

```python
nlp.add_document("Megasoft sues PearCorp for copyright infringement.")
pattern = {
  'pattern1':[
    {
      "RIGHT_ID": "verb",
      "RIGHT_ATTRS": {"POS": "V", "ORTH":" "}
    },
    {
      "LEFT_ID": "verb",
      "REL_OP": ">",
      "RIGHT_ID": "subject",
      "RIGHT_ATTRS": {"DEP": "nsubj"}
    },
    {
      "LEFT_ID": "verb",
      "REL_OP": ">",
      "RIGHT_ID": "object",
      "RIGHT_ATTRS": {"DEP": "obj"}
    }
  ]
}

for document, match_results in nlp.match_pattern(pattern, level='document'): 
  print(document)
  for pattern, matches in match_results.items():
    print(pattern, matches)
```
```python
[Megasoft sues PearCorp for copyright infringement.]  
pattern1 [[sues, Megasoft, PearCorp]]
```

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)