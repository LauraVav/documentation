---
sidebar_position: 4
--- 

# Detail

The API output is divided into three levels. The third level of return is the Detail level. Within the Detail Object you will find the following return below.

Check out the Sentence and Details level to see the full list of objects. 

## Detail Object

|     Key     |           Type           |           Description          |       Contraints      |
|:-----------:|:------------------------:|:------------------------------:|:---------------------:|
| [lemma](https://www.lettria.com/documentation/docs/API/detail#lemma)       | string                   | lemma                          |                       |
| [source_pure](https://www.lettria.com/documentation/docs/API/detail#source_pure) | string                   | the TRUE source                |                       |
| [source](https://www.lettria.com/documentation/docs/API/detail#source)      | string                   | the work source                |                       |
| [index](https://www.lettria.com/documentation/docs/API/detail#index)       | integer                  | absolute token index at input  | index >= 0            |
| [tag](https://www.lettria.com/documentation/docs/API/detail#tag)         | string                   | [pos tag](https://www.lettria.com/documentation/docs/API/detail#pos-tagger-object)                        |                       |
| [dep](https://www.lettria.com/documentation/docs/API/detail#dep)         | string                   | see list of [dependency tags](https://www.lettria.com/documentation/docs/API/detail#dependency-tags)    |                       |
| [ref](https://www.lettria.com/documentation/docs/API/detail#ref)         | integer                  | index of the parent dependence | 1 for root, else >= 0 |
| [meaning](https://www.lettria.com/documentation/docs/API/detail#meaning)     | list of [Category Objects](https://www.lettria.com/documentation/docs/API/Glossary/categories/) | Known meanings for the item    | Can be empty          |
| [lemmatizer](https://www.lettria.com/documentation/docs/API/detail#lemmatizer)  | [Lemmatizer Object](https://www.lettria.com/documentation/docs/API/detail#lemmatizer)        | lemmatizer details             |                       |
| [type_entity](https://www.lettria.com/documentation/docs/API/detail#type_entity) | [entity types](https://www.lettria.com/documentation/docs/API/Glossary/entities)             | entity type or null            |                       |
| [value](https://www.lettria.com/documentation/docs/API/detail#value)       | entities                 | Return entity or other         |                       |

## Detail Format

```python

input: 'The package was delivered on Tuesday.'

output :
‘detail’ : [{
            ‘lemma’ : "the",
            ‘source_pure’ : "The"
            'source': "The"
            ‘index’ : [0, 3]
            ‘tag’ : "D"            ‘dep’ : "det",
            ‘ref’ : 1,
            ‘meaning’ : []
            ‘lemmatizer’ : {"possessing": -1, "mode": "define", "gender": {"female": false, "plural": false},
            ‘type_entity’ : null
            ‘value’ : {} 
             },
		   {...}, {…}, ….]
```

## Lemma

| KEY   | TYPE   | DESCRIPTION                      |
|-------|--------|----------------------------------|
| lemma | string | lemmatized version of the source |

## source_pure

| Key         | Type   | Description     |
|-------------|--------|-----------------|
| source_pure | string | the TRUE source |

## Source

| Key    | Type   | Description     |
|--------|--------|-----------------|
| source | string | the work source |

## Index

| Key   | Type | Description                                      | Constraints |
|-------|------|--------------------------------------------------|-------------|
| index | int  | base index of the token, links the APIs together | index >= 0  |


## Tag

### POS Tagger Object

| INDEX | TYPE   | DESCRIPTION               |
|-------|--------|---------------------------|
| 0     | string | Word token                |
| 1     | string | See list of possible tags |

### POS Tags

| VALUE  | DESCRIPTION               |
|--------|---------------------------|
| C      | conjunction               |
| CC     | co-ordinating conjunction |
| CD     | number                    |
| CLO    | pronoun object            |
| CLS    | pronoun                   |
| D      | determiner                |
| JJ     | adjective                 |
| N      | common noun               |
| NP     | proper noun               |
| PUNCT  | punctuation               |
| P      | preposition               |
| PD     | pronom define             |
| PROREL | pronom relative           |
| RB     | adverb                    |
| RB_WH  | adverb question           |
| SYM    | symbols                   |
| UH     | interjection              |
| V      | verb                      |
| VINF   | infinitive verb           |
| VP     | verb participe past       |

## Dep

### Dependency Object

Dependence objects combine the results from the dependency parser with the understanding from the NLU api.

| KEY | TYPE   | DESCRIPTION                 | CONSTRAINTS |
|-----|--------|-----------------------------|-------------|
| dep | string | see list of dependency tags | -           |

### Dependency Tags

We use the [universal dependencies](https://universaldependencies.org/en/dep/index.html) for our dependency parser.

## Ref

| KEY | TYPE    | DESCRIPTION                    | CONSTRAINTS           |
|-----|---------|--------------------------------|-----------------------|
| ref | integer | index of the parent dependence | 1 for root, else >= 0 |

## Meaning

| KEY     | TYPE                     | DESCRIPTION                 | CONSTRAINTS   |
|---------|--------------------------|-----------------------------|---------------|
| meaning | list of [Category Objects](https://www.lettria.com/documentation/docs/API/Glossary/categories) | Known meanings for the item | Can be empty. |

## Lemmatizer

The content of the lemmatizer object is different for each tag. The table bellow references all the keys that are available, and lists the tags that will return them (see POS Tagger and list of tags).

| KEY         | TYPE                            | DESCRIPTION                                           | CONSTRAINTS          | TAGS                                                                    |
|-------------|---------------------------------|-------------------------------------------------------|----------------------|-------------------------------------------------------------------------|
| conjugate   | list of Conjugate Objects       | List possible conjugations                            | see Conjugations     | V                                                                       |
| confidence  | float                           | level of confidence in the results (higher is better) | 0 <= confidence <= 1 | (all)                                                                   |
| gender      | Gender Object                   | describes the gender and plurality                    | -                    | VP, JJ, N, D, PD                                                        |
| lemma       | string                          | lemmatized version of the source                      | -                    | C, CC, CLO, CLS, D, JJ, N, NP, PUNCT, P, PD, PROREL, RB, RB_WH, SYM, UH |
| infinit     | list of string                  | list of possible verb infinitives                     | -                    | V, VP                                                                   |
| number      | float                           | value                                                 | -                    | CD                                                                      |
| mode        | string                          | -                                                     | -                    | D, PD                                                                   |
| possessing  | int                             | see Possessive determiners                            | -                    | D, PD                                                                   |
| pronom      | int                             | see Pronouns                                          | -                    | CLS                                                                     |
| designation | list of string                  | see Categories                                        | -                    | CLO                                                                     |
| category    | string                          | see Adverb Categories                                 | -                    | RB                                                                      |
| source      | string                          | -                                                     | -                    | RB, P                                                                   |
| sens        | list of Preposition sens object | -                                                     | -                    | P                                                                       |

## type_entity

| KEY         | TYPE   | DESCRIPTION                        | CONSTRAINTS                                                                              |
|-------------|--------|------------------------------------|------------------------------------------------------------------------------------------|
| type_entity | string | Describes the type of entity found | [For proper nouns](https://www.lettria.com/documentation/docs/API/Glossary/tags), can either be LOCATION or PERSON. For other entities, see [Entity types](https://www.lettria.com/documentation/docs/API/Glossary/entities) |


## Value

A value object can either be a numeric value for some adjectives, an entity value for entities, or a 'null' value for names.


