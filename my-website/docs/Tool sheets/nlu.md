---
sidebar_position: 5
---

# NLU

## What is Natural Language Understanding ?

Natural Language Understanding or NLU is a set of semantic blocks building a pattern or intent (and not a single tool). NLU brings out the meaning of a sentence based on the **pooling of analyses of each of its elements**. The NLU’s algorithm is created based on a lexicon unique to the target language, to a parser that determines the connections between words and a set of rules that correspond to the functioning of a language. NLU is the result of the automated understanding of a text by a machine.

## What does it do? How does it work?

NLU combines morphologic and syntactic analyses of a sentence to recreate its meaning.

In Natural Language Processing (NLP), NLU is **the result of a chain of language processing**. NLU brings out the meaning of a text and removes all ambiguities by bringing together form and content.

**Example:**

Homographs are an ambitious challenge for NLU, which must choose among several possible meanings for one word.

Let’s take the word crown, that can refer to...

- the verb for enstating a monarch
- the accessory worn by royalty
- a dental apparatus

In the sentence, "I’m going to the dentist, I dread the moment they insert the crown," it’s only by taking into account the syntax (the words before and after) and the context that allow the NLU to predict if we’re talking about the dental apparatus or a royal accessory.

NLU is a modeling process that assembles all the morpho-syntactic clues and applies them to the context.

## A LITTLE BIT OF GEEK CULTURE

Often considered a subtask of NLP, NLU actually regroups the attempts to understand and represent the meaning of a text. In the Lettria pipeline, NLU includes NLP. Nevertheless, you can’t use one without the other. After the preparation and standardization of the data, you need to apply tags to structure the sentence and identify the key elements.

**Example:**

In the sentence, "I want to buy a car,” the NLU can identify an intention characterized by a series of word categories: [ **action_want** ] [ **action_buy** ] [ **car** ]

In the phrase, "I would like to buy an automobile,” the same intent is identified:

[ **action_want** ] [ **action_buy** ] [ **car** ]

## How does it work? What comes before and after?

NLU intervenes downstream in the language processing chain, after the completion of pre-processing and of Natural Language Processing. It’s up to the NLU to **bring out the heart of the message:** intentions, opinions, people, places and things...the sentence becomes a vector of decoded meaning.

## What’s the Lettria approach?

The categorization of words is a central element of textual analysis. It allows us to bring out the pure meaning of a word, in order to extract **more easily manipulable metadata**. At Lettria, all words play a role in the revelation of meaning. For example, our API transforms adverbs in order to relate them to the essence of their meaning (*presidentially* is linked to the common noun "president"). If an adverb is not linked to a common noun, it will be kept as is and classed according to its meaning (*a lot* will be classified under “quantity”).Lettria’s database includes over 800,000 words in French and English, categorized into 600 families of common nouns, proper nouns, verbs, etc. Each of these categories is **customizable for our users** on the Lettria platform, so that they can create **their own dictionaries based on their sector**.

**Example:**

Let’s say an insurer is using Lettria tools to build a consumer-facing chatbot.

This insurer is selling a health insurance product called “Peony.”

In the Lettria database, “peony” is associated with the grammatical tag of “common noun,” and in the semantic category "flowers.”

The user can erase this primary meaning and modify “peony” with the tag of “proper noun” and in the category of “insurance product.”

**Key takeaways**

Natural Language Understanding, whether or not we consider it in the field of NLP, is a separate domain which aims to bring out the meaning of examined sentences.

It highlights the linguistic elements that contribute to meaning, by relying in particular on all the clues left by the form of the words and the architecture of the statements. Each identified word **only makes sense based on context and usage;** it is then a matter of combining objective information and language habits to predict the most adequate meaning.