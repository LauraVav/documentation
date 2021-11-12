---
sidebar_position: 2
---

# POS Tagger

## What’s a pos-tagger ?

The part-of-speech (pos) tag or "tagging” dependent on parts of speech is a labelling process that **assigns all the words of a text to the correct grammatical elements.** It’s a morpho-syntactic labelling process at the word level, which is part of a larger process of computational linguistics.

## What does it do? How does it work?

In Natural Language Processing (NLP), grammatical labelling or pos-tagging precisely and reliably reveals us the function of a word, **thus removing a number of common ambiguities** – in particular those that are related to context.

A tag must:

- Recognize the grammatical parameters of the word
- Identify the function of the word in its context

## A LITTLE BIT OF GEEK CULTURE

Though based on grammatical rules and seemingly straightforward, pos-tagging is quite a delicate process. Taking into account the **diversity of language** and the exceptions to the rules, we have to make **certain adjustments**.

For example, the 10 morpho-syntactic categories (common noun, proper noun, pronoun, adjective, verb, preposition, adverb, subordinating conjunction, coordinating conjunction, interjection) can be turned upside down and / or replaced by more specific categories (infinitive verbs, past participles, object pronouns, etc.).

## How does it work? 

Pos-tagging happens after the initial steps of cleaning and standardizing the text, and after the labelling of already identified tokens. One mistake in the first step of morphological tokenization will lead to another error in the step of grammatical labelling.

**Example:**

In the sentence "He eats a sweet potato," the most common tokenization error distinguishing [sweet] [potato], which will lead to incorrect labelling:

[ **common noun** ] [ **common noun** ]

Labelling the text allows for its identification. For simple or complex sentences alike, pos-tagging detects the meaning of the words and offers a disambiguation of their meaning by syntax.

**Example:**

In the sentence "The chickens nest in the nest,” the most common mistake of pos-tagging tools is to label both mentions of “nest” as common nouns.

We have to recall rules of syntax to remove any ambiguity: the first “nest” is in between a common noun (“chickens”) and a preposition (“in”). In that case, it’s more likely to be a verb: “nest” is the verb “to nest” conjugated in the 3rd person present. These are the grammatical labellers that can remove doubt when it comes to the purpose of certain words.

## What’s the Lettria approach?

Lettria’s API integrates the latest models of transfer learning, notably the CamemBERT model trained by FAIR (Facebook Artificial Intelligence Research) and the INRIA. The principle of transfer learning is **to transpose knowledge acquired from a training data set** to better understand a new data set.

**Example:**

A guitarist will more easily learn to play piano than a novice because their basic knowledge of music can apply (in part) to this new instrument.

This high-performing model, applied to our French and English corpora, composed of thousands of manually pre-labelled sentences, allows us to obtain unprecedented performance at this critical step of NLP.

**Key takeaways**

Pos-tagging, or grammatical labelling, is a process that allows us to more precisely and reliably identify the function of a word. This process of syntactic analysis allows us to remove ambiguous meaning thanks to context.

A tag must:

- recognize the grammatical parameters of the word

identify the function of a word in its context