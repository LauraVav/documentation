---
sidebar_position: 8
---

# Coreference

## What is coreference?

Coreference is a linguistic phenomenon that consists of designating a single entity in the world with various and unique sets of words to avoid repetition.

**Example:**

The most canonical example is the replacement of nominal groups by pronouns that respect the number and gender of their antecedent. In the sentences "The neighbor gave his cherries to my parents. He gave them enough to make a pie.” The series of words “He...them enough” allows us to make reference not only to the grammatical subject (“the neighbor”) but also to the two objects ("cherries” and "parents”).

## What does it do? How does it work?

Coreference is therefore a work of semantic recovery that links a group of words as the named antecedent to all equivalent formulations in the document. In NLP, the work of coreference comes back to disambiguation of the structure of the examined document. This includes resolving the anaphoric chains.

These syntactic anaphors are used to **avoid repetitions, to lighten up the speech** and to remain fluid. Resolving a chain of anaphoric formulations comes down to drawing a line between all the elements in the document that refer to the same reality, whether that’s a person, place or object.

The coreference therefore draws:

- a common thread between the explicitly named elements in a document
- a network of correspondences and echoes that fluidify the reading and thereby facilitate comprehension

## A LITTLE BIT OF GEEK CULTURE

There are two main types of coreference:

- Direct coreference, which is resolved through the recognition of simple repetitions of a pronominal nature.
- Indirect coreference, which is more delicate because it’s real-world referential may change over time. It does not only relate to the use of a repeated pronoun; it uses the entire grammatical palette accompanied by knowledge anchored in the world. (For example, in 2021, Joe Biden = US President, whereas in 2020 Donald Trump = US President)

**Example:**

Let’s take this example: “The **President of the Republic** declared that the members of his government were going to work on it. He indicated to them the steps to follow. **Emmanuel Macron** made it known that he would follow the issue closely.”

In this example, we refer to a single person using more than one expressions: Emmanuel Macron = The President of the Republic = indirect coreference

## What’s the Lettria approach?

Coreference mentions are difficult to identify and require both a nuanced understanding of the syntax of the sentence (notably the dependencies between words) as well as general knowledge. Without learning via dedicated and specific annotations, it’s difficult to find all the common threads of a document.

By relying on a dedicated algorithm, the goal is to be able **to predict the meaning of clitic pronouns** (those which are linked to other elements and are defined by a link of dependence). The goal is therefore to search previous statements for the most relevant element to associate with this clitic. By relying on the construction of the sentences and by deciphering their meaning (thank you, dependency parser and NLU). it becomes possible to determine the coreference relationships.

Indirect coreference, which requires the weaving of numerous links with the real world, is the goal of a long process linked to learning, guided by annotations.

It expands with each update depending on the areas encountered.

**Key takeaways**

Working on coreference links in a document requires rigorous discipline. By avoiding repetition, anaphoric repetitions fluidify reading and make the text more readable and alive. However, to automatically find the network of links, you have to be cunning and work on the grammatical labelling of used words.

The direct coreference is easy to find and applies to the detection of pronouns and items with which they create a dependency link.

The indirect coreference is more complex, and requires vast dedicated general knowledge. At Lettria, the coreference is a challenge that we take up, not only by proposing a specific algorithm, but also by expanding our semantic databases.

[![register-sticky](/img/register-sticky.png)](https://app.lettria.com/signup)