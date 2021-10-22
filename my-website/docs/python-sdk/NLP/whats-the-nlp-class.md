---
sidebar_position: 1
---

# What's the NLP class?

## What's the NLP class?

**NLP** inherits from [TextChunk](https://lettria-documentation.readme.io/docs/textchunk).

**NLP** is a class designed to give access to relevant data at the different levels (document, sentence, subsentence) in an intuitive way. It allows you to perform quick data exploration, manipulation and analysis.
It's also used to perform requests and can save as well as load result as **JSON** objects.

When a response from the API is received it's stored in a hierarchy of classes:
**NLP (all data) => Document => Sentence => Subsentence => Token**

At each level direct access it's possible to access inferior levels  i.e. nlp.sentences gives access to a list of all the Sentence in the current data, while nlp.documents[0].sentences only gives the Sentence of the first Document.

NLP is iterable and will yield Document instances.


## Attributes & Properties

| Name        | Types       | Description |
| ----------- | ----------- | ----------- |
| Header      | Title       |             |
| Paragraph   | Text        |             |
|             |             |             |
|             |             |             |