---
sidebar_position: 1
---

# Tokenizer

A tokenizer is a tool founded on an algorithm based on a set of rules or on the learning of a manually-labelled corpus. **It allows text to be broken down into words.** It’s a morphological analysis.

## What does it do? How does it work?

Tokenization is a type of segmentation that **breaks down a sentence into multiple elements.**

In Natural Language Processing (NLP), tokenization is a part of the standardization process. It segments the input text into manipulable linguistic units like words, punctuation, numbers, alphanumeric data, etc. Each element corresponds to a **token** that will be used for analysis.

The goal of this process is to separate the basic units of a text that will then lend themselves to in-depth analysis. One might think that it would be sufficient to detect the spaces between words, but it’s not always that simple.

What to do with hyphens? Where to cut when there are apostrophes? What to make of nominal phrases like “clothes iron” that are composed of several words but designate a single entity?

So, if we accept that the word “go-to-market” is composed of 3 distinct lexical units, (go/to/market), it is more difficult to determine the number of words. One must **define that it’s a token** before pursuing the analysis.

Efficient pattern recognition needs to adapt itself to the conveyed realities of the text subject to analysis. A tokenizer is completely dependent on the language we’re working on.

## A LITTLE BIT OF GEEK CULTURE

The purpose of segmentation is to render the text interpretable by a machine. The difficulty is regulating a natural language, which is, by definition, irregular. The variability, richness and constant evolution of a spoken language poses many obstacles to its standardization. Several tools are available to execute the segmentation step which uses spacing as a first separator. This spacing is the starting point of all tokenization.

However, in English,  it’s not all that simple. For example, a period is often used as a marker of the end of a sentence. But, it can also be used as an abbreviation or a marker of a date or title (Think of Mr. instead of Mister). **We must therefore be clever** and decide to keep certain periods rather than others. Final periods and those that mark other abbreviations don’t convey the same meaning.

This is **where regular expression comes in**. At Lettria, we go further than simple manipulations; we leverage a veritable recognition of useful patterns to better isolate them.

**Example:**

In the sentence, "He arrives the 19/05/2019.", Lettria’s API returns 5 distinct tokens:
```
[ He ] [ arrives ] [ the ] [ 19/05/2019 ] [ . ]
```

In the sentence, "He eats a sweet potato.", Lettria’s API also returns 5 distinct tokens:
```
[ He] [ eats ] [ a ] [ sweet potato ] [ . ]
```

## How does it work? What comes before and after?

Whether for the translation or classification of text, tokenization is an obligatory step. Luckily for us, there are tools available to achieve this preliminary and detailed step. We’re able to capture meaningful units thanks to a specialized vocabulary.

When the text gets too complicated to rely only on tokens, we switch to **a machine learning approach**. An annotated body of text allows our AI to learn certain tokens and to apply this recognition to other text inputs. So, at Lettria, a database of compound words allows these terms to be recognized as a single token (i.e. the word go-to-market).

## What’s the Lettria approach?

Now you see that tokenization is a delicate and detailed process. At Lettria, morphological analysis is a first key step that depends on two rigorous preceding steps:

1. **Step 1:** The creation of efficient generic rules accompanied by a database of compound words (go-to-market = one word).
2. **Step 2:** The grouping of several tokens to create a unique tag for a particular meaning.

**Example:**

The series of words "100 m/h" is more complex than it seems.

After the first step, here’s the series tokenized in 4 tags:
```
[ 100 ] [ m ] [ / ] [ h ]
```

After the second step, it becomes:
```
[Speed[100 m/h**]Speed]
```

Now it’s a manipulable, labelled tag.

The tag [Speed] brings essential information for comprehension. The lexical elements are identified and grouped with a coherent semantic tag and their manipulation is that much simpler.

**Key takeaways**

A tokenizer is a tool that **segments text into tagged values or tokens**. Each token corresponds to a tag that is linguistically unique, specific to the language of the analysis. Tokenizing a text is like cleaning and standardizing it in order to manipulate it and **extract meaning.**

At Lettria, our API goes even further, proposing not only grammatically-correct tags, but also semantically-based groupings.