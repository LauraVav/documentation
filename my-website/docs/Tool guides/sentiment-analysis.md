---
sidebar_position: 7
---

# Sentiment Analysis

## What is sentiment analysis?

An analysis tool for sentiments and emotions (sentiment analysis) brings polarity to a document and identifies the sentiments or emotions that are present.

## What does it do? How does it work?

Sentiment or emotion detection is a work of understanding the meaning of what is most subtle, contextual and cultural. The goal is to find and categorize the language data that reveals what is neutral, positive or negative. Often related to taking a stand or expressing an opinion, this analysis relies on polarity before categorizing the found elements according to a known typology: opinion, sentiment, emotion, information.

In NLP, sentiment analysis is a recent domain that aims to understand language by going off the beaten track. By combining pragmatism and the study of lexicon,  we seek to determine the polarity and the emotional tonality that is hidden behind the words. Sarcasm, irony, cultural allusions, generational gaps...the difficulties are many and varied.

However, it’s an important building block if one is interested not only in statements but also in who delivers them: customer service, client feedback, social network monitoring. The speakers are at the heart of the concern. A sentiment analysis API must take into account the realities of the settings in which the statement was made.

## A LITTLE BIT OF GEEK CULTURE

To understand the complexity of the detection of options, let’s take for example: “This perfume is deliciously addictive. Surprisingly uncommon, it will surprise those around you.”

This comment has two adverbs of manner: "deliciously" and “surprisingly.” They are diametrically opposed and situated in two distinct phrases. Furthermore, the adjective “addictive” appears often in dark or negative contexts. How can we help the machine to determine, in these ambiguous circumstances, the polarity of the speech and the opinion of the speaker?

The solutions are plural – methods based on rules, classifiers based on the boosting of decision trees, logistic regression, a deep neural network with dedicated and reinforced learning – and only one solid methodology allows us to bring out the “right responses.”

## How does it work? 

Sentiment analysis comes at the step of Natural Language Understanding, after pre-processing and Natural Language Processing. Once [tokenization](https://lettria.com/fr/dev/toolsheets/tokenizer), [pos-tagging](https://lettria.com/fr/dev/toolsheets/postag) and [lemmatization](https://lettria.com/fr/dev/toolsheets/lemmatizer) are done, the dependency parser finds the structure of the phrase, and that’s where we extract the depth of meaning and tonality.

## What’s the Lettria approach?

At Lettria, our API uses resources from psychology and the 8 primary emotions modeled in Plutichik’s wheel of emotions (joy, sadness, fear, anger, disgust, attraction, surprise and anticipation). This classification allows us to proceed to the analysis in 2 steps.

**Step 1:** an algorithm reveals the adverbs which are, by nature, modifiers of meaning. Once the opinion is detected in each sentence, the algorithm attaches a source and a target to it.

**Example:**

The sentence "I like strawberries" contains an overall positive sentiment, an emotion of joy with the emotional intensity of .46 (on a scale of -1 to 1).

The sentence "I like strawberries very much" returns the same positive sentiment, but the adverb “very much” intensifies the value of the emotion, bringing it up to .66.

**Step 2:** Thanks to deep learning, we identify a context of expression for emotions and sentiments expressed in the text. We also propose an analysis of judgements issued by the speakers by detecting their positioning.

**Example:**

In the sentence, “This hotel room is magnificent,” no emotion is transmitted. However, the overall sentiment is positive, taking into account the positive judgement associated with the sentence. We detect a positive sentiment, associated with a positive judgement with a value of .6.

**Key takeaways**

Sentiment and emotion analysis is a process of detection based on lexicon and context. It’s complex with the goal of determining the polarity of the statements before assigning an emotion or sentiment according to a typology dependent on the language and culture of the speaker. This analysis brings out the subjectivity of the speaker.

Each detection must find the source of sentiment and the context of its use. The analysis of sentiments and emotions is a function of language and also of the speakers themselves. Irony, generational gaps and sarcasm constitute so many difficulties that we must treat methodically. Machine Learning processes lend themselves particularly well to this sort of work, which requires the deep analysis of many statements. Transfer learning helps the software, allowing it to apply certain acquired knowledge to similar situations. Each new layer of understanding is built upon the preceding one.

At Lettria, the building of sentiment and emotion detection goes farther by proposing dedicated learning, in addition to the lexical and structural analysis of the speech.

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)