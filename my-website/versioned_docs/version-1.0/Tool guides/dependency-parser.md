---
sidebar_position: 4
---

# Dependency Parser

## What’s a dependency parser?

A dependency parser or dependency analyzer highlights the **dependency relationships in a sentence** (what or who is the subject or object). It’s a computational linguistics tool built on a group of rules specific to the analyzed language. A dependency parser can also be built based on a machine-learning model that derives grammatical rules from a manually-labelled corpus. **What does it do? How does it work?**The parser organizes the elements of a sentence based on their syntactic and semantic importance, and the links that exist between them.

In Natural Language Processing (NLP), the dependency parser makes visible the grammatical structure of each sentence. The goal is to better define the relationships between “headwords” (like subjects and objects) and those that modify (adjectives, adverbs, etc.).

A dependency analysis is only possible after **a complete applied analysis of each word of a text**. The highlighting of links between words is the last piece of syntactic analysis of a text. Once that’s been done, the software can continue to semantic analysis.

A parser must:

- isolate the links of hierarchy in a sentence based on its grammatical structure
- Identify the syntactic dependency links between words

## A LITTLE BIT OF GEEK CULTURE

Previously, dependency analysis was done in “chunks” for each part of a sentence. That’s what we call shallow parsing or superficial semantic analysis. This approach, based on regular expressions (regex), takes into account contextual information but is sometimes limited by unexpected turns of phrase and / or by the morpho-syntactic complexity of a language.

**Example:**

In the sentence, "Paul has an ice cream bar,” is the “bar” referring to a place that serves ice cream, or does Paul have a bar of ice cream?

This type of subtlety is difficult to overcome. That’s where deep **neural architectures (deep learning)** come in. Based on deep learning, these methods of machine learning offer diverse options for data processing. Thanks to neural architectures that link together knowledge, we manage to dissect phrases and to **connect contextual information with accuracy.**

This technique relies on pattern detection. Whether we have to analyze fixed or semi-fixed expressions or collocations, patterns will be recognized as long as they’re sufficiently present in the language.

The dependency parser does the work of word embedding: **each word can be represented in an equation** or a graph in relation to other words.

## How does it work? What comes before and after?

As the last step of morpho-syntactic processing, dependency parsing allows the linking of lexicon, morphology ([tokenization](https://lettria.com/fr/dev/toolsheets/tokenizer)) and syntax ([pos-tagging](https://lettria.com/fr/dev/toolsheets/postag) et [lemmatization](https://lettria.com/fr/dev/toolsheets/lemmatizer)). **By making explicit the relationships that link different terms** in a sentence, the parser completes the grammatical table and determines the most important elements for the comprehension of meaning.

**Example:**

In the sentence "I have a dog, it’s called Doug,” Lettria correctly identifies the appositive: "it" is the subject of the 2nd proposition, but references the object of the first proposition, which is “dog.”

**Key takeaways**

A parser does the work of hierarchization.  It makes clear the dependency relations that exist within a sentence, separating the headwords from the modifiers. At Lettria, the parser is adapted to the needs of each specific language, combining tags from secure knowledge bases and learning based on rigorous machine learning.