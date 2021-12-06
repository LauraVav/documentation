---
sidebar_position: 1
---

# FAQs 

---

## Platform

### Data privacy

**Where is my data stored when I upload files to Lettria?**

- Your uploaded files are stored on AWS and cannot be accessed by anyone but you. 
- Once the data is extracted for analysis it is stored on Lettria in your personal user account.

### Annotations

**What`s the differenct between a link and a relationship?**

Links are used to gather scattered information in a document, words or groups of words which address the same information but in several places of the document. Links are used to concatenate information in a model by removing unnecessary tokens that separate them.

**Example** : In a transcription of a telephone conversation, the links will be very useful to remove the elements which break up the fluidity of the speech of an interlocutor (the apostrophes, the breaks).

Relationships  focus on the semantic relationships between an 'owner' attribute and its associated 'target' entities. More precise than links,  relationships underline a hierarchy in information, between a central concept (owner) and its relative information (target).

**Example** : In a product specification sheet, the relationships will allow a central element of the product (its weight) to be associated with a numeral entity (a mass in kg).

---

## API
**Where can I get an API key?**

You can get a free API Key by signing up to [Lettria](https://app.lettria.com/). Once you`ve created an account and project you can access the **Tokens** menu and copy your API Key. 

![api key](/img/api_key-platform.png)


