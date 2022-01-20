---
sidebar_position: 5
---

# Lemmatizer

## What’s a lemmatizer?

Lemmatization is a tool of computational linguistics that does the work of **extracting the lexical roots of words.** It does not rely on sentence construction but on the lexicon, bringing out the root form of the word without inflection (no “s” for plural or other suffixes, for example).

## What does it do? How does it work?

A lemma should:

- reveal the generic form of the word
- make it possible to establish a lexical network in a document

**Example:**

The lemma of the common noun "horses" is "horse." The lemma of the conjugated verb "ate" is "eat."

In Natural Language Processing (NLP), lemmatization makes possible the recognition of words as they’re listed in the dictionary. It removes marks related to number or conjugation, resetting all verbs to the infinitive and reducing the phenomenon of derivation (which means, adding an affix that changes the sense of the word, like im-possible).

Lemmatization allows us to identify the **primary and generic form of words.** Contrary to the stem that appears without affix and leaves the word unrecognizable, the lemma is content to return to its generic form. At Lettria, nous we privilege the use of lemmas over stems.

**Example:**

The stem of the common noun “mountain” is “mount,” and its lemma is “mountain.”

## A LITTLE BIT OF GEEK CULTURE

To find the lemma of a word, nothing’s better than using a dictionary. However, it’s not sufficient to remove the “s” of a plural or the “ing” of a verb. Some linguistic particularities post challenges when it comes to simplification, for example, think of “geese” (as the plural of “goose”).

## How does it work? 

To find the lemma of a word, nothing’s better than using a dictionary. However, it’s not sufficient to remove the “s” of a plural or the “ing” of a verb. Some linguistic particularities post challenges when it comes to simplification, for example, think of “geese” (as the plural of “goose”).

## What’s the Lettria approach?

In Lettria’s API, the step of lemmatization depends not only on the preceding steps of standardization and labelling, but also on a French and English dictionary **of over 800,000** simple and compound words.****

**Example:**

In the sentence, “He wanted to change banks,” we count 5 tokens:

```
[ He ] [ wanted ] [ to ] [ change ] [ banks ] [ . ]
```

However the identified lemma is [ wanted ], making reference to the past participle of “want,” in the third person singular.

**Key takeaways**

A lemmatizer is a survey tool that finds the basic form of a word as it appears in the dictionary; this is the lemma. Each lemma corresponds to a linguistically unique label that is easily manipulable. Particularly useful for an opinion search or the detection of emotions, lemmatizers allow the major semantic themes of a document to emerge. At Lettria, a lemmatizer’s syntactic analysis goes farther by proposing not only complete tags with the mention of gender or number in context, but also by proposing a verified and personalized dictionary.

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)