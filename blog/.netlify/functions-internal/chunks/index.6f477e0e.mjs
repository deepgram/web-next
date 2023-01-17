import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderComponent } from '../entry.mjs';
import Slugger from 'github-slugger';
import '@astrojs/netlify/netlify-functions.js';
import 'preact';
import 'preact-render-to-string';
import 'vue';
import 'vue/server-renderer';
import 'html-escaper';
import 'node-html-parser';
import 'axios';
/* empty css                           *//* empty css                           *//* empty css                           */import '@storyblok/js';
/* empty css                          *//* empty css                              */import 'clone-deep';
import 'slugify';
import 'shiki';
/* empty css                           */import 'camelcase';
/* empty css                              */import '@astrojs/rss';
/* empty css                           */import 'mime';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'path-browserify';
import 'path-to-regexp';

const metadata = { "headings": [{ "depth": 2, "slug": "what-is-transfer-learning-a-very-brief-history", "text": "What is Transfer Learning? A Very Brief History" }, { "depth": 2, "slug": "why-we-use-transfer-learning", "text": "Why We Use Transfer Learning" }, { "depth": 2, "slug": "why-spanish-to-portuguese", "text": "Why Spanish to Portuguese" }, { "depth": 2, "slug": "similarities-between-spanish-and-portuguese", "text": "Similarities between Spanish and Portuguese" }, { "depth": 3, "slug": "phonetic-similarities", "text": "Phonetic Similarities" }, { "depth": 3, "slug": "vocabulary-similarities", "text": "Vocabulary Similarities" }, { "depth": 3, "slug": "syntactic-similarity", "text": "Syntactic Similarity" }, { "depth": 2, "slug": "transferring-our-models-learning-from-spanish-to-portuguese", "text": "Transferring our Model\u2019s Learning from Spanish to Portuguese" }, { "depth": 2, "slug": "wrapping-up", "text": "Wrapping Up" }], "source": `Transfer learning is one of the hottest topics of natural language processing-and, indeed, machine learning in general-in recent years. In this post, I want to share with you what transfer learning is, why it's so helpful when thinking about language-related tasks, and how we've used it to create a high-accuracy model for Portuguese based on the work that we'd already done for Spanish.  In this blog post, we'll discuss some of our specific logic here, including the intuition of picking Spanish for helping Portuguese model training and the similarities between these languages on many levels. But to get started, let's talk about what transfer learning is and why it's so valued at Deepgram before diving into the specifics of Spanish and Portuguese.

## What is Transfer Learning? A Very Brief History

In short, we can say that transfer learning is taking a model that has been trained on one task, and using it for a different one by changing its training data. Transfer learning started its journey with word vectors, which are static vectors for each word in the corpus. For our purposes, you can think of a vector as a way of describing the relationship between words in a large, abstract space. To get an idea of how this works, you can see an example of word vectors in Figure 1, below. If you look at the 1st box for the words *man* and *woman*, they're the same, but the word *king* is different because he's not an ordinary human; he's the king. Also *man*, *woman*, and *king* share the same third box, because they're all human. The fourth box of *king* is identical to *man* (baby blue), but *woman* has a different fourth box, pink. So *king* is more similar to *man* in this regard. ![](https://res.cloudinary.com/deepgram/image/upload/v1661976854/blog/transfer-learning-spanish-portuguese/pic1.png) 

**Figure 1.** Word2vec, the ancestor of transfer learning, showing word similarities and differences (from https://jalammar.github.io/illustrated-word2vec/).

Next, contextual word vectors came with ELMo, or Embeddings from Language Models, which is "a type of deep contextualized word representation that models both (1) complex characteristics of word use (e.g., syntax and semantics), and (2) how these uses vary across linguistic contexts (i.e., to model polysemy)" ([source](https://paperswithcode.com/method/elmo#:~:text=Embeddings%20from%20Language%20Models%2C%20or,i.e.%2C%20to%20model%20polysemy).)). This provided a way to look at the relationship between words at a greater depth and with more . Finally transformers-a type of deep learning model that differentially weights input data-were developed to generate contextual word vectors as well as a sentence-level vector, which is even better for linguistic analysis.

At each step of this process, though, the goal remained the same-to look for good representations for our corpus words, which happen to be vectors. Both pretrained word vectors and transformers are trained on giant corpora, hence they know a lot about the target language's syntax and semantics. We feed pretrained vectors to our downstream models and the vectors bring what they know about the language, semantics of the words, and many surprising features to our models.

You can probably already see how this could be useful for language-related tasks. Speech recognition is the task of converting speech to text. Though speech recognition models are more sophisticated algorithms than text oriented statistical models, a neural network is still a neural network and weights are certainly used.

Hence, some weight re-using techniques are applicable to speech recognition, along with more sophisticated acoustic tricks. That is to say, once you have a model that works well for one language, it's relatively easy to give that model data for another language-especially one that's closely related-and see better results than if you started from scratch.

## Why We Use Transfer Learning

At Deepgram, transfer learning is highly valued. For a specific language, when we want to train a new version of a specific model, we don't want to start from scratch. Instead, when we want to train a model for a brand new language, we want to transfer some knowledge from a similar language's model when possible. To illustrate the power of these processes, we'll look at a specific case of transfer learning-going from Spanish to Portuguese-to show how you can train a model for a new language from scratch by the help of a similar language's model. 

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

## Why Spanish to Portuguese

Let's get started with the basic question of why we picked Spanish to help train our Portuguese model from scratch. Spanish and Portuguese come from the same language family and are closely related. Italian, French, Spanish, and Portuguese all belong to this language family-the Romance family. However, even if you didn't know that, a quick glance is enough for one to see the similarities between Spanish and Portuguese just by looking at a piece of text. Here's an example text pair, taken from Alice in Wonderland, to explain what we mean:

**Spanish**

> No hab\xEDa nada tan notable en eso; Alicia tampoco pens\xF3 que fuera tan extra\xF1o escuchar al Conejo decirse a s\xED mismo: '\xA1Dios m\xEDo! \xA1Oh querido! \xA1Llegar\xE9 tarde!' (cuando lo pens\xF3 despu\xE9s, se le ocurri\xF3 que deber\xEDa haberse preguntado por esto, pero en ese momento todo parec\xEDa bastante natural); pero cuando el Conejo sac\xF3 un reloj del bolsillo de su chaleco, lo mir\xF3 y sigui\xF3 corriendo, Alicia se puso de pie, porque le pas\xF3 por la mente que nunca antes hab\xEDa visto un conejo con chaleco... bolsillo, o un reloj para sacar de \xE9l, y ardiendo de curiosidad, corri\xF3 por el campo tras \xE9l, y afortunadamente lleg\xF3 justo a tiempo para verlo caer por una gran madriguera debajo del seto.

**Portuguese**

> N\xE3o havia nada t\xE3o not\xE1vel nisso; Alice tamb\xE9m n\xE3o achou t\xE3o estranho ouvir Rabbit dizer para si mesmo: 'Meu Deus! Oh querida! Chegarei tarde!' (Quando ele pensou sobre isso depois, ocorreu-lhe que deveria ter se perguntado sobre isso, mas na \xE9poca tudo parecia bastante natural); mas quando o Coelho tirou um rel\xF3gio do bolso do colete, olhou para ele e correu, Alice levantou-se, porque lhe passou pela cabe\xE7a que nunca tinha visto um coelho com um colete... bolso, ou um rel\xF3gio para levar. longe dele, e queimando de curiosidade, ela correu pelo campo atr\xE1s dele, felizmente chegando bem a tempo de v\xEA-lo cair em uma grande toca sob a cerca viva.

For non-speakers of Spanish and Portuguese, it's totally reasonable to identify the above languages as the same-and you can quickly and easily find a lot of similarities between the two texts above, even if you don't know what they mean.

## Similarities between Spanish and Portuguese

In this section, we'll compare Spanish and Portuguese phonetically, vocabulary-wise, and syntax-wise to better understand the ways that these languages are so similar in more depth.

### Phonetic Similarities

The first major similarity between Spanish and Portuguese is acoustic similarity, which plays a key role for our transfer learning purposes. Here, acoustic or phonetic similarity means that the two languages use a set of sounds in their words that are very similar to one another. Consonants are almost identical in both languages, although Spanish has three extra affricates that Portuguese does not. Other than that, the consonants look the same on paper and they sound the same. Below, in Figure 2, we can see the phonetic alphabet for consonants of both languages, taken from the [SAMPA website](https://www.phon.ucl.ac.uk/home/sampa/).

![](https://res.cloudinary.com/deepgram/image/upload/v1661976854/blog/transfer-learning-spanish-portuguese/transfer2.png) ![](https://res.cloudinary.com/deepgram/image/upload/v1661976855/blog/transfer-learning-spanish-portuguese/transfer3.png)

**Figure 2.** Spanish and Portuguese consonants, represented in SAMPA.

Vowels are a bit different. The Portuguese phonetic system has more vowels, and perceptually, Portuguese vowels are described as sounding different by Spanish speakers. In Figure 3 below we can see the Spanish and Pt vowels side by side, again taken from SAMPA website. ![](https://res.cloudinary.com/deepgram/image/upload/v1661976856/blog/transfer-learning-spanish-portuguese/transfer4.png) ![](https://res.cloudinary.com/deepgram/image/upload/v1661976857/blog/transfer-learning-spanish-portuguese/transfer5.png) 

**Figure 3.** Spanish and Portuguese vowels in SAMPA.

Here, Spanish vowels look more minimalistic and the Portuguese side looks more crowded, since it has [nasal vowels](https://en.wikipedia.org/wiki/Nasal_vowel), like French. Still, there's a certain level of similarity.

### Vocabulary Similarities

The final similarity between Spanish and Portuguese we want to discover is vocabulary similarity. Here, similar vocabulary means vocabulary strings that are either common or differ by a small edit distance-that is to say, one or two different letters or sounds. Compare the vocabulary words below, in Table 1, with Spanish on the left and Portuguese given on the right.

<table>

<tbody>

<tr>

<td style="padding: 10px;">\\*\\*Spanish\\*\\*</td>

<td></td>

<td style="padding: 10px;">\\*\\*Portuguese\\*\\*</td>

</tr>

<tr>

<td style="padding: 10px;">casa</td>

<td></td>

<td style="padding: 10px;">casa</td>

</tr>

<tr>

<td style="padding: 10px;">se\xF1ora</td>

<td></td>

<td style="padding: 10px;">senhora</td>

</tr>

<tr>

<td style="padding: 10px;">para</td>

<td></td>

<td style="padding: 10px;">para</td>

</tr>

<tr>

<td style="padding: 10px;">ahora</td>

<td></td>

<td style="padding: 10px;">ahora</td>

</tr>

<tr>

<td style="padding: 10px;">cabeza</td>

<td></td>

<td style="padding: 10px;">cabe\xE7a</td>

</tr>

<tr>

<td style="padding: 10px;">toma</td>

<td></td>

<td style="padding: 10px;">toma</td>

</tr>

<tr>

<td style="padding: 10px;">vamos</td>

<td></td>

<td style="padding: 10px;">vamos</td>

</tr>

<tr>

<td style="padding: 10px;">cama</td>

<td></td>

<td style="padding: 10px;">cama</td>

</tr>

<tr>

<td style="padding: 10px;">gano</td>

<td></td>

<td style="padding: 10px;">gano</td>

</tr>

<tr>

<td style="padding: 10px;">bonita</td>

<td></td>

<td style="padding: 10px;">bonita</td>

</tr>

<tr>

<td style="padding: 10px;">cara</td>

<td></td>

<td style="padding: 10px;">cara</td>

</tr>

<tr>

<td style="padding: 10px;">centro</td>

<td></td>

<td style="padding: 10px;">centro</td>

</tr>

<tr>

<td style="padding: 10px;">estados</td>

<td></td>

<td style="padding: 10px;">estados</td>

</tr>

<tr>

<td style="padding: 10px;">libros</td>

<td></td>

<td style="padding: 10px;">livros</td>

</tr>

<tr>

<td style="padding: 10px;">opini\xF3n</td>

<td></td>

<td style="padding: 10px;">opini\xE3o</td>

</tr>

</tbody>

</table>

**Table 1.** Comparison of Spanish and Portuguese vocabulary items.

As we see, some words are literally the same and some words differ by an edit distance of one or two. This is great for transferring the word vectors from the Spanish model into the Portuguese model. 

### Syntactic Similarity

The final aspect of similarity between the two languages that we'll look at here is syntactic similarity-that is, how similar is the way that sentences and phrases are constructed? This is also related to transferring weights, as syntactic constructions are one of the things learned by the model. Since we'd like to uncover how these two languages relate to each other, let's compare the dependency trees for the phrases *un perro peque\xF1o* and *um cachorro pequeno* meaning 'a small dog' in each language. These trees show us how words within a phrase or sentence are related to each other. I generated both dependency trees with [displaCy](https://explosion.ai/demos/displacy), shown below in Figure 4.

 ![](https://res.cloudinary.com/deepgram/image/upload/v1661976857/blog/transfer-learning-spanish-portuguese/transfer6.png) ![](https://res.cloudinary.com/deepgram/image/upload/v1661976858/blog/transfer-learning-spanish-portuguese/transfer7.png)

**Figure 4.** Dependency trees of 'a small dog' (literally, "a dog small") in Spanish (top) and Portuguese (bottom).

In both dependency trees, we notice that the adjective comes after the noun. In both trees, the head is the noun *perro/cachorro* 'dog' and the adjective is attached to the head by the dependency relation **adjective modifier**, or **amod**. A determiner *un/um* 'a' is attached to the noun by the **determiner,** or **det** relation. We see that the above trees are identical; hence, if one learns the syntax of one Spanish/Portuguese pair, one can easily figure out the other language's syntax. Putting together this information, now we're ready to understand how we make use of transfer learning for training the very first speech recognition model of Portuguese from scratch.

## Transferring our Model's Learning from Spanish to Portuguese

As we've seen, Spanish and Portuguese are very similar to one another in terms of their sounds, their vocabulary, and their sentence structures. If we go back to our discussion of vectors and weighting at the beginning, you can see why starting with a Spanish model would be an effective choice for creating a Portuguese model-the weights and vectors are likely to be extremely similar, with only a few small points of difference that the model will learn when it sees Portuguese data, making small adjustments as it goes. We can see how useful this is if we imagine instead starting with an English model to create one for Portuguese. 

Although this would better than starting from zero (Portuguese and English are, after all, both languages, and they are related to one other, albeit more distantly), the number and magnitude of the adjustments would be much greater than when starting with Spanish, requiring a longer training process and more data from Portuguese to get the model to the same level of accuracy.

## Wrapping Up

I hope this article gives you a good sense of what transfer learning is and why it can be so impactful in a case like Spanish and Portuguese where the languages are very similar. We've got more transfer learning material coming in the next few months, so stay tuned to learn more-you can sign up for our newsletter below to keep up-to-date on what's happening at Deepgram. Want to see the power of transfer learning first hand? [Sign up for a free API](https://console.deepgram.com/signup) key or [contact us](https://deepgram.com/contact-us/) to get started using end-to-end deep learning for your speech recognition projects.`, "html": '<p>Transfer learning is one of the hottest topics of natural language processing-and, indeed, machine learning in general-in recent years. In this post, I want to share with you what transfer learning is, why it\u2019s so helpful when thinking about language-related tasks, and how we\u2019ve used it to create a high-accuracy model for Portuguese based on the work that we\u2019d already done for Spanish.  In this blog post, we\u2019ll discuss some of our specific logic here, including the intuition of picking Spanish for helping Portuguese model training and the similarities between these languages on many levels. But to get started, let\u2019s talk about what transfer learning is and why it\u2019s so valued at Deepgram before diving into the specifics of Spanish and Portuguese.</p>\n<h2 id="what-is-transfer-learning-a-very-brief-history">What is Transfer Learning? A Very Brief History</h2>\n<p>In short, we can say that transfer learning is taking a model that has been trained on one task, and using it for a different one by changing its training data. Transfer learning started its journey with word vectors, which are static vectors for each word in the corpus. For our purposes, you can think of a vector as a way of describing the relationship between words in a large, abstract space. To get an idea of how this works, you can see an example of word vectors in Figure 1, below. If you look at the 1st box for the words <em>man</em> and <em>woman</em>, they\u2019re the same, but the word <em>king</em> is different because he\u2019s not an ordinary human; he\u2019s the king. Also <em>man</em>, <em>woman</em>, and <em>king</em> share the same third box, because they\u2019re all human. The fourth box of <em>king</em> is identical to <em>man</em> (baby blue), but <em>woman</em> has a different fourth box, pink. So <em>king</em> is more similar to <em>man</em> in this regard. <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976854/blog/transfer-learning-spanish-portuguese/pic1.png" alt=""></p>\n<p><strong>Figure 1.</strong> Word2vec, the ancestor of transfer learning, showing word similarities and differences (from <a href="https://jalammar.github.io/illustrated-word2vec/">https://jalammar.github.io/illustrated-word2vec/</a>).</p>\n<p>Next, contextual word vectors came with ELMo, or Embeddings from Language Models, which is \u201Ca type of deep contextualized word representation that models both (1) complex characteristics of word use (e.g., syntax and semantics), and (2) how these uses vary across linguistic contexts (i.e., to model polysemy)\u201D (<a href="https://paperswithcode.com/method/elmo#:~:text=Embeddings%20from%20Language%20Models%2C%20or,i.e.%2C%20to%20model%20polysemy">source</a>.)). This provided a way to look at the relationship between words at a greater depth and with more . Finally transformers-a type of deep learning model that differentially weights input data-were developed to generate contextual word vectors as well as a sentence-level vector, which is even better for linguistic analysis.</p>\n<p>At each step of this process, though, the goal remained the same-to look for good representations for our corpus words, which happen to be vectors. Both pretrained word vectors and transformers are trained on giant corpora, hence they know a lot about the target language\u2019s syntax and semantics. We feed pretrained vectors to our downstream models and the vectors bring what they know about the language, semantics of the words, and many surprising features to our models.</p>\n<p>You can probably already see how this could be useful for language-related tasks. Speech recognition is the task of converting speech to text. Though speech recognition models are more sophisticated algorithms than text oriented statistical models, a neural network is still a neural network and weights are certainly used.</p>\n<p>Hence, some weight re-using techniques are applicable to speech recognition, along with more sophisticated acoustic tricks. That is to say, once you have a model that works well for one language, it\u2019s relatively easy to give that model data for another language-especially one that\u2019s closely related-and see better results than if you started from scratch.</p>\n<h2 id="why-we-use-transfer-learning">Why We Use Transfer Learning</h2>\n<p>At Deepgram, transfer learning is highly valued. For a specific language, when we want to train a new version of a specific model, we don\u2019t want to start from scratch. Instead, when we want to train a model for a brand new language, we want to transfer some knowledge from a similar language\u2019s model when possible. To illustrate the power of these processes, we\u2019ll look at a specific case of transfer learning-going from Spanish to Portuguese-to show how you can train a model for a new language from scratch by the help of a similar language\u2019s model.</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />\n<h2 id="why-spanish-to-portuguese">Why Spanish to Portuguese</h2>\n<p>Let\u2019s get started with the basic question of why we picked Spanish to help train our Portuguese model from scratch. Spanish and Portuguese come from the same language family and are closely related. Italian, French, Spanish, and Portuguese all belong to this language family-the Romance family. However, even if you didn\u2019t know that, a quick glance is enough for one to see the similarities between Spanish and Portuguese just by looking at a piece of text. Here\u2019s an example text pair, taken from Alice in Wonderland, to explain what we mean:</p>\n<p><strong>Spanish</strong></p>\n<blockquote>\n<p>No hab\xEDa nada tan notable en eso; Alicia tampoco pens\xF3 que fuera tan extra\xF1o escuchar al Conejo decirse a s\xED mismo: \u2018\xA1Dios m\xEDo! \xA1Oh querido! \xA1Llegar\xE9 tarde!\u2019 (cuando lo pens\xF3 despu\xE9s, se le ocurri\xF3 que deber\xEDa haberse preguntado por esto, pero en ese momento todo parec\xEDa bastante natural); pero cuando el Conejo sac\xF3 un reloj del bolsillo de su chaleco, lo mir\xF3 y sigui\xF3 corriendo, Alicia se puso de pie, porque le pas\xF3 por la mente que nunca antes hab\xEDa visto un conejo con chaleco\u2026 bolsillo, o un reloj para sacar de \xE9l, y ardiendo de curiosidad, corri\xF3 por el campo tras \xE9l, y afortunadamente lleg\xF3 justo a tiempo para verlo caer por una gran madriguera debajo del seto.</p>\n</blockquote>\n<p><strong>Portuguese</strong></p>\n<blockquote>\n<p>N\xE3o havia nada t\xE3o not\xE1vel nisso; Alice tamb\xE9m n\xE3o achou t\xE3o estranho ouvir Rabbit dizer para si mesmo: \u2018Meu Deus! Oh querida! Chegarei tarde!\u2019 (Quando ele pensou sobre isso depois, ocorreu-lhe que deveria ter se perguntado sobre isso, mas na \xE9poca tudo parecia bastante natural); mas quando o Coelho tirou um rel\xF3gio do bolso do colete, olhou para ele e correu, Alice levantou-se, porque lhe passou pela cabe\xE7a que nunca tinha visto um coelho com um colete\u2026 bolso, ou um rel\xF3gio para levar. longe dele, e queimando de curiosidade, ela correu pelo campo atr\xE1s dele, felizmente chegando bem a tempo de v\xEA-lo cair em uma grande toca sob a cerca viva.</p>\n</blockquote>\n<p>For non-speakers of Spanish and Portuguese, it\u2019s totally reasonable to identify the above languages as the same-and you can quickly and easily find a lot of similarities between the two texts above, even if you don\u2019t know what they mean.</p>\n<h2 id="similarities-between-spanish-and-portuguese">Similarities between Spanish and Portuguese</h2>\n<p>In this section, we\u2019ll compare Spanish and Portuguese phonetically, vocabulary-wise, and syntax-wise to better understand the ways that these languages are so similar in more depth.</p>\n<h3 id="phonetic-similarities">Phonetic Similarities</h3>\n<p>The first major similarity between Spanish and Portuguese is acoustic similarity, which plays a key role for our transfer learning purposes. Here, acoustic or phonetic similarity means that the two languages use a set of sounds in their words that are very similar to one another. Consonants are almost identical in both languages, although Spanish has three extra affricates that Portuguese does not. Other than that, the consonants look the same on paper and they sound the same. Below, in Figure 2, we can see the phonetic alphabet for consonants of both languages, taken from the <a href="https://www.phon.ucl.ac.uk/home/sampa/">SAMPA website</a>.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976854/blog/transfer-learning-spanish-portuguese/transfer2.png" alt=""> <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976855/blog/transfer-learning-spanish-portuguese/transfer3.png" alt=""></p>\n<p><strong>Figure 2.</strong> Spanish and Portuguese consonants, represented in SAMPA.</p>\n<p>Vowels are a bit different. The Portuguese phonetic system has more vowels, and perceptually, Portuguese vowels are described as sounding different by Spanish speakers. In Figure 3 below we can see the Spanish and Pt vowels side by side, again taken from SAMPA website. <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976856/blog/transfer-learning-spanish-portuguese/transfer4.png" alt=""> <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976857/blog/transfer-learning-spanish-portuguese/transfer5.png" alt=""></p>\n<p><strong>Figure 3.</strong> Spanish and Portuguese vowels in SAMPA.</p>\n<p>Here, Spanish vowels look more minimalistic and the Portuguese side looks more crowded, since it has <a href="https://en.wikipedia.org/wiki/Nasal_vowel">nasal vowels</a>, like French. Still, there\u2019s a certain level of similarity.</p>\n<h3 id="vocabulary-similarities">Vocabulary Similarities</h3>\n<p>The final similarity between Spanish and Portuguese we want to discover is vocabulary similarity. Here, similar vocabulary means vocabulary strings that are either common or differ by a small edit distance-that is to say, one or two different letters or sounds. Compare the vocabulary words below, in Table 1, with Spanish on the left and Portuguese given on the right.</p>\n<table><tbody><tr><td style="padding: 10px;">**Spanish**</td><td /><td style="padding: 10px;">**Portuguese**</td></tr><tr><td style="padding: 10px;">casa</td><td /><td style="padding: 10px;">casa</td></tr><tr><td style="padding: 10px;">se\xF1ora</td><td /><td style="padding: 10px;">senhora</td></tr><tr><td style="padding: 10px;">para</td><td /><td style="padding: 10px;">para</td></tr><tr><td style="padding: 10px;">ahora</td><td /><td style="padding: 10px;">ahora</td></tr><tr><td style="padding: 10px;">cabeza</td><td /><td style="padding: 10px;">cabe\xE7a</td></tr><tr><td style="padding: 10px;">toma</td><td /><td style="padding: 10px;">toma</td></tr><tr><td style="padding: 10px;">vamos</td><td /><td style="padding: 10px;">vamos</td></tr><tr><td style="padding: 10px;">cama</td><td /><td style="padding: 10px;">cama</td></tr><tr><td style="padding: 10px;">gano</td><td /><td style="padding: 10px;">gano</td></tr><tr><td style="padding: 10px;">bonita</td><td /><td style="padding: 10px;">bonita</td></tr><tr><td style="padding: 10px;">cara</td><td /><td style="padding: 10px;">cara</td></tr><tr><td style="padding: 10px;">centro</td><td /><td style="padding: 10px;">centro</td></tr><tr><td style="padding: 10px;">estados</td><td /><td style="padding: 10px;">estados</td></tr><tr><td style="padding: 10px;">libros</td><td /><td style="padding: 10px;">livros</td></tr><tr><td style="padding: 10px;">opini\xF3n</td><td /><td style="padding: 10px;">opini\xE3o</td></tr></tbody></table>\n<p><strong>Table 1.</strong> Comparison of Spanish and Portuguese vocabulary items.</p>\n<p>As we see, some words are literally the same and some words differ by an edit distance of one or two. This is great for transferring the word vectors from the Spanish model into the Portuguese model.</p>\n<h3 id="syntactic-similarity">Syntactic Similarity</h3>\n<p>The final aspect of similarity between the two languages that we\u2019ll look at here is syntactic similarity-that is, how similar is the way that sentences and phrases are constructed? This is also related to transferring weights, as syntactic constructions are one of the things learned by the model. Since we\u2019d like to uncover how these two languages relate to each other, let\u2019s compare the dependency trees for the phrases <em>un perro peque\xF1o</em> and <em>um cachorro pequeno</em> meaning \u2018a small dog\u2019 in each language. These trees show us how words within a phrase or sentence are related to each other. I generated both dependency trees with <a href="https://explosion.ai/demos/displacy">displaCy</a>, shown below in Figure 4.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976857/blog/transfer-learning-spanish-portuguese/transfer6.png" alt=""> <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976858/blog/transfer-learning-spanish-portuguese/transfer7.png" alt=""></p>\n<p><strong>Figure 4.</strong> Dependency trees of \u2018a small dog\u2019 (literally, \u201Ca dog small\u201D) in Spanish (top) and Portuguese (bottom).</p>\n<p>In both dependency trees, we notice that the adjective comes after the noun. In both trees, the head is the noun <em>perro/cachorro</em> \u2018dog\u2019 and the adjective is attached to the head by the dependency relation <strong>adjective modifier</strong>, or <strong>amod</strong>. A determiner <em>un/um</em> \u2018a\u2019 is attached to the noun by the <strong>determiner,</strong> or <strong>det</strong> relation. We see that the above trees are identical; hence, if one learns the syntax of one Spanish/Portuguese pair, one can easily figure out the other language\u2019s syntax. Putting together this information, now we\u2019re ready to understand how we make use of transfer learning for training the very first speech recognition model of Portuguese from scratch.</p>\n<h2 id="transferring-our-models-learning-from-spanish-to-portuguese">Transferring our Model\u2019s Learning from Spanish to Portuguese</h2>\n<p>As we\u2019ve seen, Spanish and Portuguese are very similar to one another in terms of their sounds, their vocabulary, and their sentence structures. If we go back to our discussion of vectors and weighting at the beginning, you can see why starting with a Spanish model would be an effective choice for creating a Portuguese model-the weights and vectors are likely to be extremely similar, with only a few small points of difference that the model will learn when it sees Portuguese data, making small adjustments as it goes. We can see how useful this is if we imagine instead starting with an English model to create one for Portuguese.</p>\n<p>Although this would better than starting from zero (Portuguese and English are, after all, both languages, and they are related to one other, albeit more distantly), the number and magnitude of the adjustments would be much greater than when starting with Spanish, requiring a longer training process and more data from Portuguese to get the model to the same level of accuracy.</p>\n<h2 id="wrapping-up">Wrapping Up</h2>\n<p>I hope this article gives you a good sense of what transfer learning is and why it can be so impactful in a case like Spanish and Portuguese where the languages are very similar. We\u2019ve got more transfer learning material coming in the next few months, so stay tuned to learn more-you can sign up for our newsletter below to keep up-to-date on what\u2019s happening at Deepgram. Want to see the power of transfer learning first hand? <a href="https://console.deepgram.com/signup">Sign up for a free API</a> key or <a href="https://deepgram.com/contact-us/">contact us</a> to get started using end-to-end deep learning for your speech recognition projects.</p>' };
const frontmatter = { "title": "Transfer Learning from Spanish to Portuguese: How Neighbors on the Map Also Share Vectors", "description": "Spanish and Portuguese are very similar languages, which makes them a great example of the power of transfer learning. Read on to learn more.", "date": "2022-04-13T00:00:00.000Z", "cover": "https://res.cloudinary.com/deepgram/image/upload/v1661981415/blog/transfer-learning-spanish-portuguese/transfer-learning-from-spanish-to-portuguese-thumb.png", "authors": ["duygu-altinok"], "category": "ai-and-engineering", "tags": ["deep-learning", "language", "nlu"], "seo": { "title": "Transfer Learning from Spanish to Portuguese: How Neighbors on the Map Also Share Vectors", "description": "Spanish and Portuguese are very similar languages, which makes them a great example of the power of transfer learning. Read on to learn more." }, "og": { "image": "https://res.cloudinary.com/deepgram/image/upload/v1661981415/blog/transfer-learning-spanish-portuguese/transfer-learning-from-spanish-to-portuguese-thumb.png" }, "shorturls": { "share": "https://dpgr.am/3e97acd", "twitter": "https://dpgr.am/85b3695", "linkedin": "https://dpgr.am/3b4c570", "reddit": "https://dpgr.am/7d13a38", "facebook": "https://dpgr.am/9c9ac3b" }, "astro": { "headings": [{ "depth": 2, "slug": "what-is-transfer-learning-a-very-brief-history", "text": "What is Transfer Learning? A Very Brief History" }, { "depth": 2, "slug": "why-we-use-transfer-learning", "text": "Why We Use Transfer Learning" }, { "depth": 2, "slug": "why-spanish-to-portuguese", "text": "Why Spanish to Portuguese" }, { "depth": 2, "slug": "similarities-between-spanish-and-portuguese", "text": "Similarities between Spanish and Portuguese" }, { "depth": 3, "slug": "phonetic-similarities", "text": "Phonetic Similarities" }, { "depth": 3, "slug": "vocabulary-similarities", "text": "Vocabulary Similarities" }, { "depth": 3, "slug": "syntactic-similarity", "text": "Syntactic Similarity" }, { "depth": 2, "slug": "transferring-our-models-learning-from-spanish-to-portuguese", "text": "Transferring our Model\u2019s Learning from Spanish to Portuguese" }, { "depth": 2, "slug": "wrapping-up", "text": "Wrapping Up" }], "source": `Transfer learning is one of the hottest topics of natural language processing-and, indeed, machine learning in general-in recent years. In this post, I want to share with you what transfer learning is, why it's so helpful when thinking about language-related tasks, and how we've used it to create a high-accuracy model for Portuguese based on the work that we'd already done for Spanish.  In this blog post, we'll discuss some of our specific logic here, including the intuition of picking Spanish for helping Portuguese model training and the similarities between these languages on many levels. But to get started, let's talk about what transfer learning is and why it's so valued at Deepgram before diving into the specifics of Spanish and Portuguese.

## What is Transfer Learning? A Very Brief History

In short, we can say that transfer learning is taking a model that has been trained on one task, and using it for a different one by changing its training data. Transfer learning started its journey with word vectors, which are static vectors for each word in the corpus. For our purposes, you can think of a vector as a way of describing the relationship between words in a large, abstract space. To get an idea of how this works, you can see an example of word vectors in Figure 1, below. If you look at the 1st box for the words *man* and *woman*, they're the same, but the word *king* is different because he's not an ordinary human; he's the king. Also *man*, *woman*, and *king* share the same third box, because they're all human. The fourth box of *king* is identical to *man* (baby blue), but *woman* has a different fourth box, pink. So *king* is more similar to *man* in this regard. ![](https://res.cloudinary.com/deepgram/image/upload/v1661976854/blog/transfer-learning-spanish-portuguese/pic1.png) 

**Figure 1.** Word2vec, the ancestor of transfer learning, showing word similarities and differences (from https://jalammar.github.io/illustrated-word2vec/).

Next, contextual word vectors came with ELMo, or Embeddings from Language Models, which is "a type of deep contextualized word representation that models both (1) complex characteristics of word use (e.g., syntax and semantics), and (2) how these uses vary across linguistic contexts (i.e., to model polysemy)" ([source](https://paperswithcode.com/method/elmo#:~:text=Embeddings%20from%20Language%20Models%2C%20or,i.e.%2C%20to%20model%20polysemy).)). This provided a way to look at the relationship between words at a greater depth and with more . Finally transformers-a type of deep learning model that differentially weights input data-were developed to generate contextual word vectors as well as a sentence-level vector, which is even better for linguistic analysis.

At each step of this process, though, the goal remained the same-to look for good representations for our corpus words, which happen to be vectors. Both pretrained word vectors and transformers are trained on giant corpora, hence they know a lot about the target language's syntax and semantics. We feed pretrained vectors to our downstream models and the vectors bring what they know about the language, semantics of the words, and many surprising features to our models.

You can probably already see how this could be useful for language-related tasks. Speech recognition is the task of converting speech to text. Though speech recognition models are more sophisticated algorithms than text oriented statistical models, a neural network is still a neural network and weights are certainly used.

Hence, some weight re-using techniques are applicable to speech recognition, along with more sophisticated acoustic tricks. That is to say, once you have a model that works well for one language, it's relatively easy to give that model data for another language-especially one that's closely related-and see better results than if you started from scratch.

## Why We Use Transfer Learning

At Deepgram, transfer learning is highly valued. For a specific language, when we want to train a new version of a specific model, we don't want to start from scratch. Instead, when we want to train a model for a brand new language, we want to transfer some knowledge from a similar language's model when possible. To illustrate the power of these processes, we'll look at a specific case of transfer learning-going from Spanish to Portuguese-to show how you can train a model for a new language from scratch by the help of a similar language's model. 

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

## Why Spanish to Portuguese

Let's get started with the basic question of why we picked Spanish to help train our Portuguese model from scratch. Spanish and Portuguese come from the same language family and are closely related. Italian, French, Spanish, and Portuguese all belong to this language family-the Romance family. However, even if you didn't know that, a quick glance is enough for one to see the similarities between Spanish and Portuguese just by looking at a piece of text. Here's an example text pair, taken from Alice in Wonderland, to explain what we mean:

**Spanish**

> No hab\xEDa nada tan notable en eso; Alicia tampoco pens\xF3 que fuera tan extra\xF1o escuchar al Conejo decirse a s\xED mismo: '\xA1Dios m\xEDo! \xA1Oh querido! \xA1Llegar\xE9 tarde!' (cuando lo pens\xF3 despu\xE9s, se le ocurri\xF3 que deber\xEDa haberse preguntado por esto, pero en ese momento todo parec\xEDa bastante natural); pero cuando el Conejo sac\xF3 un reloj del bolsillo de su chaleco, lo mir\xF3 y sigui\xF3 corriendo, Alicia se puso de pie, porque le pas\xF3 por la mente que nunca antes hab\xEDa visto un conejo con chaleco... bolsillo, o un reloj para sacar de \xE9l, y ardiendo de curiosidad, corri\xF3 por el campo tras \xE9l, y afortunadamente lleg\xF3 justo a tiempo para verlo caer por una gran madriguera debajo del seto.

**Portuguese**

> N\xE3o havia nada t\xE3o not\xE1vel nisso; Alice tamb\xE9m n\xE3o achou t\xE3o estranho ouvir Rabbit dizer para si mesmo: 'Meu Deus! Oh querida! Chegarei tarde!' (Quando ele pensou sobre isso depois, ocorreu-lhe que deveria ter se perguntado sobre isso, mas na \xE9poca tudo parecia bastante natural); mas quando o Coelho tirou um rel\xF3gio do bolso do colete, olhou para ele e correu, Alice levantou-se, porque lhe passou pela cabe\xE7a que nunca tinha visto um coelho com um colete... bolso, ou um rel\xF3gio para levar. longe dele, e queimando de curiosidade, ela correu pelo campo atr\xE1s dele, felizmente chegando bem a tempo de v\xEA-lo cair em uma grande toca sob a cerca viva.

For non-speakers of Spanish and Portuguese, it's totally reasonable to identify the above languages as the same-and you can quickly and easily find a lot of similarities between the two texts above, even if you don't know what they mean.

## Similarities between Spanish and Portuguese

In this section, we'll compare Spanish and Portuguese phonetically, vocabulary-wise, and syntax-wise to better understand the ways that these languages are so similar in more depth.

### Phonetic Similarities

The first major similarity between Spanish and Portuguese is acoustic similarity, which plays a key role for our transfer learning purposes. Here, acoustic or phonetic similarity means that the two languages use a set of sounds in their words that are very similar to one another. Consonants are almost identical in both languages, although Spanish has three extra affricates that Portuguese does not. Other than that, the consonants look the same on paper and they sound the same. Below, in Figure 2, we can see the phonetic alphabet for consonants of both languages, taken from the [SAMPA website](https://www.phon.ucl.ac.uk/home/sampa/).

![](https://res.cloudinary.com/deepgram/image/upload/v1661976854/blog/transfer-learning-spanish-portuguese/transfer2.png) ![](https://res.cloudinary.com/deepgram/image/upload/v1661976855/blog/transfer-learning-spanish-portuguese/transfer3.png)

**Figure 2.** Spanish and Portuguese consonants, represented in SAMPA.

Vowels are a bit different. The Portuguese phonetic system has more vowels, and perceptually, Portuguese vowels are described as sounding different by Spanish speakers. In Figure 3 below we can see the Spanish and Pt vowels side by side, again taken from SAMPA website. ![](https://res.cloudinary.com/deepgram/image/upload/v1661976856/blog/transfer-learning-spanish-portuguese/transfer4.png) ![](https://res.cloudinary.com/deepgram/image/upload/v1661976857/blog/transfer-learning-spanish-portuguese/transfer5.png) 

**Figure 3.** Spanish and Portuguese vowels in SAMPA.

Here, Spanish vowels look more minimalistic and the Portuguese side looks more crowded, since it has [nasal vowels](https://en.wikipedia.org/wiki/Nasal_vowel), like French. Still, there's a certain level of similarity.

### Vocabulary Similarities

The final similarity between Spanish and Portuguese we want to discover is vocabulary similarity. Here, similar vocabulary means vocabulary strings that are either common or differ by a small edit distance-that is to say, one or two different letters or sounds. Compare the vocabulary words below, in Table 1, with Spanish on the left and Portuguese given on the right.

<table>

<tbody>

<tr>

<td style="padding: 10px;">\\*\\*Spanish\\*\\*</td>

<td></td>

<td style="padding: 10px;">\\*\\*Portuguese\\*\\*</td>

</tr>

<tr>

<td style="padding: 10px;">casa</td>

<td></td>

<td style="padding: 10px;">casa</td>

</tr>

<tr>

<td style="padding: 10px;">se\xF1ora</td>

<td></td>

<td style="padding: 10px;">senhora</td>

</tr>

<tr>

<td style="padding: 10px;">para</td>

<td></td>

<td style="padding: 10px;">para</td>

</tr>

<tr>

<td style="padding: 10px;">ahora</td>

<td></td>

<td style="padding: 10px;">ahora</td>

</tr>

<tr>

<td style="padding: 10px;">cabeza</td>

<td></td>

<td style="padding: 10px;">cabe\xE7a</td>

</tr>

<tr>

<td style="padding: 10px;">toma</td>

<td></td>

<td style="padding: 10px;">toma</td>

</tr>

<tr>

<td style="padding: 10px;">vamos</td>

<td></td>

<td style="padding: 10px;">vamos</td>

</tr>

<tr>

<td style="padding: 10px;">cama</td>

<td></td>

<td style="padding: 10px;">cama</td>

</tr>

<tr>

<td style="padding: 10px;">gano</td>

<td></td>

<td style="padding: 10px;">gano</td>

</tr>

<tr>

<td style="padding: 10px;">bonita</td>

<td></td>

<td style="padding: 10px;">bonita</td>

</tr>

<tr>

<td style="padding: 10px;">cara</td>

<td></td>

<td style="padding: 10px;">cara</td>

</tr>

<tr>

<td style="padding: 10px;">centro</td>

<td></td>

<td style="padding: 10px;">centro</td>

</tr>

<tr>

<td style="padding: 10px;">estados</td>

<td></td>

<td style="padding: 10px;">estados</td>

</tr>

<tr>

<td style="padding: 10px;">libros</td>

<td></td>

<td style="padding: 10px;">livros</td>

</tr>

<tr>

<td style="padding: 10px;">opini\xF3n</td>

<td></td>

<td style="padding: 10px;">opini\xE3o</td>

</tr>

</tbody>

</table>

**Table 1.** Comparison of Spanish and Portuguese vocabulary items.

As we see, some words are literally the same and some words differ by an edit distance of one or two. This is great for transferring the word vectors from the Spanish model into the Portuguese model. 

### Syntactic Similarity

The final aspect of similarity between the two languages that we'll look at here is syntactic similarity-that is, how similar is the way that sentences and phrases are constructed? This is also related to transferring weights, as syntactic constructions are one of the things learned by the model. Since we'd like to uncover how these two languages relate to each other, let's compare the dependency trees for the phrases *un perro peque\xF1o* and *um cachorro pequeno* meaning 'a small dog' in each language. These trees show us how words within a phrase or sentence are related to each other. I generated both dependency trees with [displaCy](https://explosion.ai/demos/displacy), shown below in Figure 4.

 ![](https://res.cloudinary.com/deepgram/image/upload/v1661976857/blog/transfer-learning-spanish-portuguese/transfer6.png) ![](https://res.cloudinary.com/deepgram/image/upload/v1661976858/blog/transfer-learning-spanish-portuguese/transfer7.png)

**Figure 4.** Dependency trees of 'a small dog' (literally, "a dog small") in Spanish (top) and Portuguese (bottom).

In both dependency trees, we notice that the adjective comes after the noun. In both trees, the head is the noun *perro/cachorro* 'dog' and the adjective is attached to the head by the dependency relation **adjective modifier**, or **amod**. A determiner *un/um* 'a' is attached to the noun by the **determiner,** or **det** relation. We see that the above trees are identical; hence, if one learns the syntax of one Spanish/Portuguese pair, one can easily figure out the other language's syntax. Putting together this information, now we're ready to understand how we make use of transfer learning for training the very first speech recognition model of Portuguese from scratch.

## Transferring our Model's Learning from Spanish to Portuguese

As we've seen, Spanish and Portuguese are very similar to one another in terms of their sounds, their vocabulary, and their sentence structures. If we go back to our discussion of vectors and weighting at the beginning, you can see why starting with a Spanish model would be an effective choice for creating a Portuguese model-the weights and vectors are likely to be extremely similar, with only a few small points of difference that the model will learn when it sees Portuguese data, making small adjustments as it goes. We can see how useful this is if we imagine instead starting with an English model to create one for Portuguese. 

Although this would better than starting from zero (Portuguese and English are, after all, both languages, and they are related to one other, albeit more distantly), the number and magnitude of the adjustments would be much greater than when starting with Spanish, requiring a longer training process and more data from Portuguese to get the model to the same level of accuracy.

## Wrapping Up

I hope this article gives you a good sense of what transfer learning is and why it can be so impactful in a case like Spanish and Portuguese where the languages are very similar. We've got more transfer learning material coming in the next few months, so stay tuned to learn more-you can sign up for our newsletter below to keep up-to-date on what's happening at Deepgram. Want to see the power of transfer learning first hand? [Sign up for a free API](https://console.deepgram.com/signup) key or [contact us](https://deepgram.com/contact-us/) to get started using end-to-end deep learning for your speech recognition projects.`, "html": '<p>Transfer learning is one of the hottest topics of natural language processing-and, indeed, machine learning in general-in recent years. In this post, I want to share with you what transfer learning is, why it\u2019s so helpful when thinking about language-related tasks, and how we\u2019ve used it to create a high-accuracy model for Portuguese based on the work that we\u2019d already done for Spanish.  In this blog post, we\u2019ll discuss some of our specific logic here, including the intuition of picking Spanish for helping Portuguese model training and the similarities between these languages on many levels. But to get started, let\u2019s talk about what transfer learning is and why it\u2019s so valued at Deepgram before diving into the specifics of Spanish and Portuguese.</p>\n<h2 id="what-is-transfer-learning-a-very-brief-history">What is Transfer Learning? A Very Brief History</h2>\n<p>In short, we can say that transfer learning is taking a model that has been trained on one task, and using it for a different one by changing its training data. Transfer learning started its journey with word vectors, which are static vectors for each word in the corpus. For our purposes, you can think of a vector as a way of describing the relationship between words in a large, abstract space. To get an idea of how this works, you can see an example of word vectors in Figure 1, below. If you look at the 1st box for the words <em>man</em> and <em>woman</em>, they\u2019re the same, but the word <em>king</em> is different because he\u2019s not an ordinary human; he\u2019s the king. Also <em>man</em>, <em>woman</em>, and <em>king</em> share the same third box, because they\u2019re all human. The fourth box of <em>king</em> is identical to <em>man</em> (baby blue), but <em>woman</em> has a different fourth box, pink. So <em>king</em> is more similar to <em>man</em> in this regard. <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976854/blog/transfer-learning-spanish-portuguese/pic1.png" alt=""></p>\n<p><strong>Figure 1.</strong> Word2vec, the ancestor of transfer learning, showing word similarities and differences (from <a href="https://jalammar.github.io/illustrated-word2vec/">https://jalammar.github.io/illustrated-word2vec/</a>).</p>\n<p>Next, contextual word vectors came with ELMo, or Embeddings from Language Models, which is \u201Ca type of deep contextualized word representation that models both (1) complex characteristics of word use (e.g., syntax and semantics), and (2) how these uses vary across linguistic contexts (i.e., to model polysemy)\u201D (<a href="https://paperswithcode.com/method/elmo#:~:text=Embeddings%20from%20Language%20Models%2C%20or,i.e.%2C%20to%20model%20polysemy">source</a>.)). This provided a way to look at the relationship between words at a greater depth and with more . Finally transformers-a type of deep learning model that differentially weights input data-were developed to generate contextual word vectors as well as a sentence-level vector, which is even better for linguistic analysis.</p>\n<p>At each step of this process, though, the goal remained the same-to look for good representations for our corpus words, which happen to be vectors. Both pretrained word vectors and transformers are trained on giant corpora, hence they know a lot about the target language\u2019s syntax and semantics. We feed pretrained vectors to our downstream models and the vectors bring what they know about the language, semantics of the words, and many surprising features to our models.</p>\n<p>You can probably already see how this could be useful for language-related tasks. Speech recognition is the task of converting speech to text. Though speech recognition models are more sophisticated algorithms than text oriented statistical models, a neural network is still a neural network and weights are certainly used.</p>\n<p>Hence, some weight re-using techniques are applicable to speech recognition, along with more sophisticated acoustic tricks. That is to say, once you have a model that works well for one language, it\u2019s relatively easy to give that model data for another language-especially one that\u2019s closely related-and see better results than if you started from scratch.</p>\n<h2 id="why-we-use-transfer-learning">Why We Use Transfer Learning</h2>\n<p>At Deepgram, transfer learning is highly valued. For a specific language, when we want to train a new version of a specific model, we don\u2019t want to start from scratch. Instead, when we want to train a model for a brand new language, we want to transfer some knowledge from a similar language\u2019s model when possible. To illustrate the power of these processes, we\u2019ll look at a specific case of transfer learning-going from Spanish to Portuguese-to show how you can train a model for a new language from scratch by the help of a similar language\u2019s model.</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />\n<h2 id="why-spanish-to-portuguese">Why Spanish to Portuguese</h2>\n<p>Let\u2019s get started with the basic question of why we picked Spanish to help train our Portuguese model from scratch. Spanish and Portuguese come from the same language family and are closely related. Italian, French, Spanish, and Portuguese all belong to this language family-the Romance family. However, even if you didn\u2019t know that, a quick glance is enough for one to see the similarities between Spanish and Portuguese just by looking at a piece of text. Here\u2019s an example text pair, taken from Alice in Wonderland, to explain what we mean:</p>\n<p><strong>Spanish</strong></p>\n<blockquote>\n<p>No hab\xEDa nada tan notable en eso; Alicia tampoco pens\xF3 que fuera tan extra\xF1o escuchar al Conejo decirse a s\xED mismo: \u2018\xA1Dios m\xEDo! \xA1Oh querido! \xA1Llegar\xE9 tarde!\u2019 (cuando lo pens\xF3 despu\xE9s, se le ocurri\xF3 que deber\xEDa haberse preguntado por esto, pero en ese momento todo parec\xEDa bastante natural); pero cuando el Conejo sac\xF3 un reloj del bolsillo de su chaleco, lo mir\xF3 y sigui\xF3 corriendo, Alicia se puso de pie, porque le pas\xF3 por la mente que nunca antes hab\xEDa visto un conejo con chaleco\u2026 bolsillo, o un reloj para sacar de \xE9l, y ardiendo de curiosidad, corri\xF3 por el campo tras \xE9l, y afortunadamente lleg\xF3 justo a tiempo para verlo caer por una gran madriguera debajo del seto.</p>\n</blockquote>\n<p><strong>Portuguese</strong></p>\n<blockquote>\n<p>N\xE3o havia nada t\xE3o not\xE1vel nisso; Alice tamb\xE9m n\xE3o achou t\xE3o estranho ouvir Rabbit dizer para si mesmo: \u2018Meu Deus! Oh querida! Chegarei tarde!\u2019 (Quando ele pensou sobre isso depois, ocorreu-lhe que deveria ter se perguntado sobre isso, mas na \xE9poca tudo parecia bastante natural); mas quando o Coelho tirou um rel\xF3gio do bolso do colete, olhou para ele e correu, Alice levantou-se, porque lhe passou pela cabe\xE7a que nunca tinha visto um coelho com um colete\u2026 bolso, ou um rel\xF3gio para levar. longe dele, e queimando de curiosidade, ela correu pelo campo atr\xE1s dele, felizmente chegando bem a tempo de v\xEA-lo cair em uma grande toca sob a cerca viva.</p>\n</blockquote>\n<p>For non-speakers of Spanish and Portuguese, it\u2019s totally reasonable to identify the above languages as the same-and you can quickly and easily find a lot of similarities between the two texts above, even if you don\u2019t know what they mean.</p>\n<h2 id="similarities-between-spanish-and-portuguese">Similarities between Spanish and Portuguese</h2>\n<p>In this section, we\u2019ll compare Spanish and Portuguese phonetically, vocabulary-wise, and syntax-wise to better understand the ways that these languages are so similar in more depth.</p>\n<h3 id="phonetic-similarities">Phonetic Similarities</h3>\n<p>The first major similarity between Spanish and Portuguese is acoustic similarity, which plays a key role for our transfer learning purposes. Here, acoustic or phonetic similarity means that the two languages use a set of sounds in their words that are very similar to one another. Consonants are almost identical in both languages, although Spanish has three extra affricates that Portuguese does not. Other than that, the consonants look the same on paper and they sound the same. Below, in Figure 2, we can see the phonetic alphabet for consonants of both languages, taken from the <a href="https://www.phon.ucl.ac.uk/home/sampa/">SAMPA website</a>.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976854/blog/transfer-learning-spanish-portuguese/transfer2.png" alt=""> <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976855/blog/transfer-learning-spanish-portuguese/transfer3.png" alt=""></p>\n<p><strong>Figure 2.</strong> Spanish and Portuguese consonants, represented in SAMPA.</p>\n<p>Vowels are a bit different. The Portuguese phonetic system has more vowels, and perceptually, Portuguese vowels are described as sounding different by Spanish speakers. In Figure 3 below we can see the Spanish and Pt vowels side by side, again taken from SAMPA website. <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976856/blog/transfer-learning-spanish-portuguese/transfer4.png" alt=""> <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976857/blog/transfer-learning-spanish-portuguese/transfer5.png" alt=""></p>\n<p><strong>Figure 3.</strong> Spanish and Portuguese vowels in SAMPA.</p>\n<p>Here, Spanish vowels look more minimalistic and the Portuguese side looks more crowded, since it has <a href="https://en.wikipedia.org/wiki/Nasal_vowel">nasal vowels</a>, like French. Still, there\u2019s a certain level of similarity.</p>\n<h3 id="vocabulary-similarities">Vocabulary Similarities</h3>\n<p>The final similarity between Spanish and Portuguese we want to discover is vocabulary similarity. Here, similar vocabulary means vocabulary strings that are either common or differ by a small edit distance-that is to say, one or two different letters or sounds. Compare the vocabulary words below, in Table 1, with Spanish on the left and Portuguese given on the right.</p>\n<table><tbody><tr><td style="padding: 10px;">**Spanish**</td><td /><td style="padding: 10px;">**Portuguese**</td></tr><tr><td style="padding: 10px;">casa</td><td /><td style="padding: 10px;">casa</td></tr><tr><td style="padding: 10px;">se\xF1ora</td><td /><td style="padding: 10px;">senhora</td></tr><tr><td style="padding: 10px;">para</td><td /><td style="padding: 10px;">para</td></tr><tr><td style="padding: 10px;">ahora</td><td /><td style="padding: 10px;">ahora</td></tr><tr><td style="padding: 10px;">cabeza</td><td /><td style="padding: 10px;">cabe\xE7a</td></tr><tr><td style="padding: 10px;">toma</td><td /><td style="padding: 10px;">toma</td></tr><tr><td style="padding: 10px;">vamos</td><td /><td style="padding: 10px;">vamos</td></tr><tr><td style="padding: 10px;">cama</td><td /><td style="padding: 10px;">cama</td></tr><tr><td style="padding: 10px;">gano</td><td /><td style="padding: 10px;">gano</td></tr><tr><td style="padding: 10px;">bonita</td><td /><td style="padding: 10px;">bonita</td></tr><tr><td style="padding: 10px;">cara</td><td /><td style="padding: 10px;">cara</td></tr><tr><td style="padding: 10px;">centro</td><td /><td style="padding: 10px;">centro</td></tr><tr><td style="padding: 10px;">estados</td><td /><td style="padding: 10px;">estados</td></tr><tr><td style="padding: 10px;">libros</td><td /><td style="padding: 10px;">livros</td></tr><tr><td style="padding: 10px;">opini\xF3n</td><td /><td style="padding: 10px;">opini\xE3o</td></tr></tbody></table>\n<p><strong>Table 1.</strong> Comparison of Spanish and Portuguese vocabulary items.</p>\n<p>As we see, some words are literally the same and some words differ by an edit distance of one or two. This is great for transferring the word vectors from the Spanish model into the Portuguese model.</p>\n<h3 id="syntactic-similarity">Syntactic Similarity</h3>\n<p>The final aspect of similarity between the two languages that we\u2019ll look at here is syntactic similarity-that is, how similar is the way that sentences and phrases are constructed? This is also related to transferring weights, as syntactic constructions are one of the things learned by the model. Since we\u2019d like to uncover how these two languages relate to each other, let\u2019s compare the dependency trees for the phrases <em>un perro peque\xF1o</em> and <em>um cachorro pequeno</em> meaning \u2018a small dog\u2019 in each language. These trees show us how words within a phrase or sentence are related to each other. I generated both dependency trees with <a href="https://explosion.ai/demos/displacy">displaCy</a>, shown below in Figure 4.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976857/blog/transfer-learning-spanish-portuguese/transfer6.png" alt=""> <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976858/blog/transfer-learning-spanish-portuguese/transfer7.png" alt=""></p>\n<p><strong>Figure 4.</strong> Dependency trees of \u2018a small dog\u2019 (literally, \u201Ca dog small\u201D) in Spanish (top) and Portuguese (bottom).</p>\n<p>In both dependency trees, we notice that the adjective comes after the noun. In both trees, the head is the noun <em>perro/cachorro</em> \u2018dog\u2019 and the adjective is attached to the head by the dependency relation <strong>adjective modifier</strong>, or <strong>amod</strong>. A determiner <em>un/um</em> \u2018a\u2019 is attached to the noun by the <strong>determiner,</strong> or <strong>det</strong> relation. We see that the above trees are identical; hence, if one learns the syntax of one Spanish/Portuguese pair, one can easily figure out the other language\u2019s syntax. Putting together this information, now we\u2019re ready to understand how we make use of transfer learning for training the very first speech recognition model of Portuguese from scratch.</p>\n<h2 id="transferring-our-models-learning-from-spanish-to-portuguese">Transferring our Model\u2019s Learning from Spanish to Portuguese</h2>\n<p>As we\u2019ve seen, Spanish and Portuguese are very similar to one another in terms of their sounds, their vocabulary, and their sentence structures. If we go back to our discussion of vectors and weighting at the beginning, you can see why starting with a Spanish model would be an effective choice for creating a Portuguese model-the weights and vectors are likely to be extremely similar, with only a few small points of difference that the model will learn when it sees Portuguese data, making small adjustments as it goes. We can see how useful this is if we imagine instead starting with an English model to create one for Portuguese.</p>\n<p>Although this would better than starting from zero (Portuguese and English are, after all, both languages, and they are related to one other, albeit more distantly), the number and magnitude of the adjustments would be much greater than when starting with Spanish, requiring a longer training process and more data from Portuguese to get the model to the same level of accuracy.</p>\n<h2 id="wrapping-up">Wrapping Up</h2>\n<p>I hope this article gives you a good sense of what transfer learning is and why it can be so impactful in a case like Spanish and Portuguese where the languages are very similar. We\u2019ve got more transfer learning material coming in the next few months, so stay tuned to learn more-you can sign up for our newsletter below to keep up-to-date on what\u2019s happening at Deepgram. Want to see the power of transfer learning first hand? <a href="https://console.deepgram.com/signup">Sign up for a free API</a> key or <a href="https://deepgram.com/contact-us/">contact us</a> to get started using end-to-end deep learning for your speech recognition projects.</p>' }, "file": "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/transfer-learning-spanish-portuguese/index.md" };
function rawContent() {
  return `Transfer learning is one of the hottest topics of natural language processing-and, indeed, machine learning in general-in recent years. In this post, I want to share with you what transfer learning is, why it's so helpful when thinking about language-related tasks, and how we've used it to create a high-accuracy model for Portuguese based on the work that we'd already done for Spanish.  In this blog post, we'll discuss some of our specific logic here, including the intuition of picking Spanish for helping Portuguese model training and the similarities between these languages on many levels. But to get started, let's talk about what transfer learning is and why it's so valued at Deepgram before diving into the specifics of Spanish and Portuguese.

## What is Transfer Learning? A Very Brief History

In short, we can say that transfer learning is taking a model that has been trained on one task, and using it for a different one by changing its training data. Transfer learning started its journey with word vectors, which are static vectors for each word in the corpus. For our purposes, you can think of a vector as a way of describing the relationship between words in a large, abstract space. To get an idea of how this works, you can see an example of word vectors in Figure 1, below. If you look at the 1st box for the words *man* and *woman*, they're the same, but the word *king* is different because he's not an ordinary human; he's the king. Also *man*, *woman*, and *king* share the same third box, because they're all human. The fourth box of *king* is identical to *man* (baby blue), but *woman* has a different fourth box, pink. So *king* is more similar to *man* in this regard. ![](https://res.cloudinary.com/deepgram/image/upload/v1661976854/blog/transfer-learning-spanish-portuguese/pic1.png) 

**Figure 1.** Word2vec, the ancestor of transfer learning, showing word similarities and differences (from https://jalammar.github.io/illustrated-word2vec/).

Next, contextual word vectors came with ELMo, or Embeddings from Language Models, which is "a type of deep contextualized word representation that models both (1) complex characteristics of word use (e.g., syntax and semantics), and (2) how these uses vary across linguistic contexts (i.e., to model polysemy)" ([source](https://paperswithcode.com/method/elmo#:~:text=Embeddings%20from%20Language%20Models%2C%20or,i.e.%2C%20to%20model%20polysemy).)). This provided a way to look at the relationship between words at a greater depth and with more . Finally transformers-a type of deep learning model that differentially weights input data-were developed to generate contextual word vectors as well as a sentence-level vector, which is even better for linguistic analysis.

At each step of this process, though, the goal remained the same-to look for good representations for our corpus words, which happen to be vectors. Both pretrained word vectors and transformers are trained on giant corpora, hence they know a lot about the target language's syntax and semantics. We feed pretrained vectors to our downstream models and the vectors bring what they know about the language, semantics of the words, and many surprising features to our models.

You can probably already see how this could be useful for language-related tasks. Speech recognition is the task of converting speech to text. Though speech recognition models are more sophisticated algorithms than text oriented statistical models, a neural network is still a neural network and weights are certainly used.

Hence, some weight re-using techniques are applicable to speech recognition, along with more sophisticated acoustic tricks. That is to say, once you have a model that works well for one language, it's relatively easy to give that model data for another language-especially one that's closely related-and see better results than if you started from scratch.

## Why We Use Transfer Learning

At Deepgram, transfer learning is highly valued. For a specific language, when we want to train a new version of a specific model, we don't want to start from scratch. Instead, when we want to train a model for a brand new language, we want to transfer some knowledge from a similar language's model when possible. To illustrate the power of these processes, we'll look at a specific case of transfer learning-going from Spanish to Portuguese-to show how you can train a model for a new language from scratch by the help of a similar language's model. 

<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works"></WhitepaperPromo>

## Why Spanish to Portuguese

Let's get started with the basic question of why we picked Spanish to help train our Portuguese model from scratch. Spanish and Portuguese come from the same language family and are closely related. Italian, French, Spanish, and Portuguese all belong to this language family-the Romance family. However, even if you didn't know that, a quick glance is enough for one to see the similarities between Spanish and Portuguese just by looking at a piece of text. Here's an example text pair, taken from Alice in Wonderland, to explain what we mean:

**Spanish**

> No hab\xEDa nada tan notable en eso; Alicia tampoco pens\xF3 que fuera tan extra\xF1o escuchar al Conejo decirse a s\xED mismo: '\xA1Dios m\xEDo! \xA1Oh querido! \xA1Llegar\xE9 tarde!' (cuando lo pens\xF3 despu\xE9s, se le ocurri\xF3 que deber\xEDa haberse preguntado por esto, pero en ese momento todo parec\xEDa bastante natural); pero cuando el Conejo sac\xF3 un reloj del bolsillo de su chaleco, lo mir\xF3 y sigui\xF3 corriendo, Alicia se puso de pie, porque le pas\xF3 por la mente que nunca antes hab\xEDa visto un conejo con chaleco... bolsillo, o un reloj para sacar de \xE9l, y ardiendo de curiosidad, corri\xF3 por el campo tras \xE9l, y afortunadamente lleg\xF3 justo a tiempo para verlo caer por una gran madriguera debajo del seto.

**Portuguese**

> N\xE3o havia nada t\xE3o not\xE1vel nisso; Alice tamb\xE9m n\xE3o achou t\xE3o estranho ouvir Rabbit dizer para si mesmo: 'Meu Deus! Oh querida! Chegarei tarde!' (Quando ele pensou sobre isso depois, ocorreu-lhe que deveria ter se perguntado sobre isso, mas na \xE9poca tudo parecia bastante natural); mas quando o Coelho tirou um rel\xF3gio do bolso do colete, olhou para ele e correu, Alice levantou-se, porque lhe passou pela cabe\xE7a que nunca tinha visto um coelho com um colete... bolso, ou um rel\xF3gio para levar. longe dele, e queimando de curiosidade, ela correu pelo campo atr\xE1s dele, felizmente chegando bem a tempo de v\xEA-lo cair em uma grande toca sob a cerca viva.

For non-speakers of Spanish and Portuguese, it's totally reasonable to identify the above languages as the same-and you can quickly and easily find a lot of similarities between the two texts above, even if you don't know what they mean.

## Similarities between Spanish and Portuguese

In this section, we'll compare Spanish and Portuguese phonetically, vocabulary-wise, and syntax-wise to better understand the ways that these languages are so similar in more depth.

### Phonetic Similarities

The first major similarity between Spanish and Portuguese is acoustic similarity, which plays a key role for our transfer learning purposes. Here, acoustic or phonetic similarity means that the two languages use a set of sounds in their words that are very similar to one another. Consonants are almost identical in both languages, although Spanish has three extra affricates that Portuguese does not. Other than that, the consonants look the same on paper and they sound the same. Below, in Figure 2, we can see the phonetic alphabet for consonants of both languages, taken from the [SAMPA website](https://www.phon.ucl.ac.uk/home/sampa/).

![](https://res.cloudinary.com/deepgram/image/upload/v1661976854/blog/transfer-learning-spanish-portuguese/transfer2.png) ![](https://res.cloudinary.com/deepgram/image/upload/v1661976855/blog/transfer-learning-spanish-portuguese/transfer3.png)

**Figure 2.** Spanish and Portuguese consonants, represented in SAMPA.

Vowels are a bit different. The Portuguese phonetic system has more vowels, and perceptually, Portuguese vowels are described as sounding different by Spanish speakers. In Figure 3 below we can see the Spanish and Pt vowels side by side, again taken from SAMPA website. ![](https://res.cloudinary.com/deepgram/image/upload/v1661976856/blog/transfer-learning-spanish-portuguese/transfer4.png) ![](https://res.cloudinary.com/deepgram/image/upload/v1661976857/blog/transfer-learning-spanish-portuguese/transfer5.png) 

**Figure 3.** Spanish and Portuguese vowels in SAMPA.

Here, Spanish vowels look more minimalistic and the Portuguese side looks more crowded, since it has [nasal vowels](https://en.wikipedia.org/wiki/Nasal_vowel), like French. Still, there's a certain level of similarity.

### Vocabulary Similarities

The final similarity between Spanish and Portuguese we want to discover is vocabulary similarity. Here, similar vocabulary means vocabulary strings that are either common or differ by a small edit distance-that is to say, one or two different letters or sounds. Compare the vocabulary words below, in Table 1, with Spanish on the left and Portuguese given on the right.

<table>

<tbody>

<tr>

<td style="padding: 10px;">\\*\\*Spanish\\*\\*</td>

<td></td>

<td style="padding: 10px;">\\*\\*Portuguese\\*\\*</td>

</tr>

<tr>

<td style="padding: 10px;">casa</td>

<td></td>

<td style="padding: 10px;">casa</td>

</tr>

<tr>

<td style="padding: 10px;">se\xF1ora</td>

<td></td>

<td style="padding: 10px;">senhora</td>

</tr>

<tr>

<td style="padding: 10px;">para</td>

<td></td>

<td style="padding: 10px;">para</td>

</tr>

<tr>

<td style="padding: 10px;">ahora</td>

<td></td>

<td style="padding: 10px;">ahora</td>

</tr>

<tr>

<td style="padding: 10px;">cabeza</td>

<td></td>

<td style="padding: 10px;">cabe\xE7a</td>

</tr>

<tr>

<td style="padding: 10px;">toma</td>

<td></td>

<td style="padding: 10px;">toma</td>

</tr>

<tr>

<td style="padding: 10px;">vamos</td>

<td></td>

<td style="padding: 10px;">vamos</td>

</tr>

<tr>

<td style="padding: 10px;">cama</td>

<td></td>

<td style="padding: 10px;">cama</td>

</tr>

<tr>

<td style="padding: 10px;">gano</td>

<td></td>

<td style="padding: 10px;">gano</td>

</tr>

<tr>

<td style="padding: 10px;">bonita</td>

<td></td>

<td style="padding: 10px;">bonita</td>

</tr>

<tr>

<td style="padding: 10px;">cara</td>

<td></td>

<td style="padding: 10px;">cara</td>

</tr>

<tr>

<td style="padding: 10px;">centro</td>

<td></td>

<td style="padding: 10px;">centro</td>

</tr>

<tr>

<td style="padding: 10px;">estados</td>

<td></td>

<td style="padding: 10px;">estados</td>

</tr>

<tr>

<td style="padding: 10px;">libros</td>

<td></td>

<td style="padding: 10px;">livros</td>

</tr>

<tr>

<td style="padding: 10px;">opini\xF3n</td>

<td></td>

<td style="padding: 10px;">opini\xE3o</td>

</tr>

</tbody>

</table>

**Table 1.** Comparison of Spanish and Portuguese vocabulary items.

As we see, some words are literally the same and some words differ by an edit distance of one or two. This is great for transferring the word vectors from the Spanish model into the Portuguese model. 

### Syntactic Similarity

The final aspect of similarity between the two languages that we'll look at here is syntactic similarity-that is, how similar is the way that sentences and phrases are constructed? This is also related to transferring weights, as syntactic constructions are one of the things learned by the model. Since we'd like to uncover how these two languages relate to each other, let's compare the dependency trees for the phrases *un perro peque\xF1o* and *um cachorro pequeno* meaning 'a small dog' in each language. These trees show us how words within a phrase or sentence are related to each other. I generated both dependency trees with [displaCy](https://explosion.ai/demos/displacy), shown below in Figure 4.

 ![](https://res.cloudinary.com/deepgram/image/upload/v1661976857/blog/transfer-learning-spanish-portuguese/transfer6.png) ![](https://res.cloudinary.com/deepgram/image/upload/v1661976858/blog/transfer-learning-spanish-portuguese/transfer7.png)

**Figure 4.** Dependency trees of 'a small dog' (literally, "a dog small") in Spanish (top) and Portuguese (bottom).

In both dependency trees, we notice that the adjective comes after the noun. In both trees, the head is the noun *perro/cachorro* 'dog' and the adjective is attached to the head by the dependency relation **adjective modifier**, or **amod**. A determiner *un/um* 'a' is attached to the noun by the **determiner,** or **det** relation. We see that the above trees are identical; hence, if one learns the syntax of one Spanish/Portuguese pair, one can easily figure out the other language's syntax. Putting together this information, now we're ready to understand how we make use of transfer learning for training the very first speech recognition model of Portuguese from scratch.

## Transferring our Model's Learning from Spanish to Portuguese

As we've seen, Spanish and Portuguese are very similar to one another in terms of their sounds, their vocabulary, and their sentence structures. If we go back to our discussion of vectors and weighting at the beginning, you can see why starting with a Spanish model would be an effective choice for creating a Portuguese model-the weights and vectors are likely to be extremely similar, with only a few small points of difference that the model will learn when it sees Portuguese data, making small adjustments as it goes. We can see how useful this is if we imagine instead starting with an English model to create one for Portuguese. 

Although this would better than starting from zero (Portuguese and English are, after all, both languages, and they are related to one other, albeit more distantly), the number and magnitude of the adjustments would be much greater than when starting with Spanish, requiring a longer training process and more data from Portuguese to get the model to the same level of accuracy.

## Wrapping Up

I hope this article gives you a good sense of what transfer learning is and why it can be so impactful in a case like Spanish and Portuguese where the languages are very similar. We've got more transfer learning material coming in the next few months, so stay tuned to learn more-you can sign up for our newsletter below to keep up-to-date on what's happening at Deepgram. Want to see the power of transfer learning first hand? [Sign up for a free API](https://console.deepgram.com/signup) key or [contact us](https://deepgram.com/contact-us/) to get started using end-to-end deep learning for your speech recognition projects.`;
}
function compiledContent() {
  return '<p>Transfer learning is one of the hottest topics of natural language processing-and, indeed, machine learning in general-in recent years. In this post, I want to share with you what transfer learning is, why it\u2019s so helpful when thinking about language-related tasks, and how we\u2019ve used it to create a high-accuracy model for Portuguese based on the work that we\u2019d already done for Spanish.  In this blog post, we\u2019ll discuss some of our specific logic here, including the intuition of picking Spanish for helping Portuguese model training and the similarities between these languages on many levels. But to get started, let\u2019s talk about what transfer learning is and why it\u2019s so valued at Deepgram before diving into the specifics of Spanish and Portuguese.</p>\n<h2 id="what-is-transfer-learning-a-very-brief-history">What is Transfer Learning? A Very Brief History</h2>\n<p>In short, we can say that transfer learning is taking a model that has been trained on one task, and using it for a different one by changing its training data. Transfer learning started its journey with word vectors, which are static vectors for each word in the corpus. For our purposes, you can think of a vector as a way of describing the relationship between words in a large, abstract space. To get an idea of how this works, you can see an example of word vectors in Figure 1, below. If you look at the 1st box for the words <em>man</em> and <em>woman</em>, they\u2019re the same, but the word <em>king</em> is different because he\u2019s not an ordinary human; he\u2019s the king. Also <em>man</em>, <em>woman</em>, and <em>king</em> share the same third box, because they\u2019re all human. The fourth box of <em>king</em> is identical to <em>man</em> (baby blue), but <em>woman</em> has a different fourth box, pink. So <em>king</em> is more similar to <em>man</em> in this regard. <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976854/blog/transfer-learning-spanish-portuguese/pic1.png" alt=""></p>\n<p><strong>Figure 1.</strong> Word2vec, the ancestor of transfer learning, showing word similarities and differences (from <a href="https://jalammar.github.io/illustrated-word2vec/">https://jalammar.github.io/illustrated-word2vec/</a>).</p>\n<p>Next, contextual word vectors came with ELMo, or Embeddings from Language Models, which is \u201Ca type of deep contextualized word representation that models both (1) complex characteristics of word use (e.g., syntax and semantics), and (2) how these uses vary across linguistic contexts (i.e., to model polysemy)\u201D (<a href="https://paperswithcode.com/method/elmo#:~:text=Embeddings%20from%20Language%20Models%2C%20or,i.e.%2C%20to%20model%20polysemy">source</a>.)). This provided a way to look at the relationship between words at a greater depth and with more . Finally transformers-a type of deep learning model that differentially weights input data-were developed to generate contextual word vectors as well as a sentence-level vector, which is even better for linguistic analysis.</p>\n<p>At each step of this process, though, the goal remained the same-to look for good representations for our corpus words, which happen to be vectors. Both pretrained word vectors and transformers are trained on giant corpora, hence they know a lot about the target language\u2019s syntax and semantics. We feed pretrained vectors to our downstream models and the vectors bring what they know about the language, semantics of the words, and many surprising features to our models.</p>\n<p>You can probably already see how this could be useful for language-related tasks. Speech recognition is the task of converting speech to text. Though speech recognition models are more sophisticated algorithms than text oriented statistical models, a neural network is still a neural network and weights are certainly used.</p>\n<p>Hence, some weight re-using techniques are applicable to speech recognition, along with more sophisticated acoustic tricks. That is to say, once you have a model that works well for one language, it\u2019s relatively easy to give that model data for another language-especially one that\u2019s closely related-and see better results than if you started from scratch.</p>\n<h2 id="why-we-use-transfer-learning">Why We Use Transfer Learning</h2>\n<p>At Deepgram, transfer learning is highly valued. For a specific language, when we want to train a new version of a specific model, we don\u2019t want to start from scratch. Instead, when we want to train a model for a brand new language, we want to transfer some knowledge from a similar language\u2019s model when possible. To illustrate the power of these processes, we\u2019ll look at a specific case of transfer learning-going from Spanish to Portuguese-to show how you can train a model for a new language from scratch by the help of a similar language\u2019s model.</p>\n<WhitepaperPromo whitepaper="deepgram-whitepaper-how-deepgram-works" />\n<h2 id="why-spanish-to-portuguese">Why Spanish to Portuguese</h2>\n<p>Let\u2019s get started with the basic question of why we picked Spanish to help train our Portuguese model from scratch. Spanish and Portuguese come from the same language family and are closely related. Italian, French, Spanish, and Portuguese all belong to this language family-the Romance family. However, even if you didn\u2019t know that, a quick glance is enough for one to see the similarities between Spanish and Portuguese just by looking at a piece of text. Here\u2019s an example text pair, taken from Alice in Wonderland, to explain what we mean:</p>\n<p><strong>Spanish</strong></p>\n<blockquote>\n<p>No hab\xEDa nada tan notable en eso; Alicia tampoco pens\xF3 que fuera tan extra\xF1o escuchar al Conejo decirse a s\xED mismo: \u2018\xA1Dios m\xEDo! \xA1Oh querido! \xA1Llegar\xE9 tarde!\u2019 (cuando lo pens\xF3 despu\xE9s, se le ocurri\xF3 que deber\xEDa haberse preguntado por esto, pero en ese momento todo parec\xEDa bastante natural); pero cuando el Conejo sac\xF3 un reloj del bolsillo de su chaleco, lo mir\xF3 y sigui\xF3 corriendo, Alicia se puso de pie, porque le pas\xF3 por la mente que nunca antes hab\xEDa visto un conejo con chaleco\u2026 bolsillo, o un reloj para sacar de \xE9l, y ardiendo de curiosidad, corri\xF3 por el campo tras \xE9l, y afortunadamente lleg\xF3 justo a tiempo para verlo caer por una gran madriguera debajo del seto.</p>\n</blockquote>\n<p><strong>Portuguese</strong></p>\n<blockquote>\n<p>N\xE3o havia nada t\xE3o not\xE1vel nisso; Alice tamb\xE9m n\xE3o achou t\xE3o estranho ouvir Rabbit dizer para si mesmo: \u2018Meu Deus! Oh querida! Chegarei tarde!\u2019 (Quando ele pensou sobre isso depois, ocorreu-lhe que deveria ter se perguntado sobre isso, mas na \xE9poca tudo parecia bastante natural); mas quando o Coelho tirou um rel\xF3gio do bolso do colete, olhou para ele e correu, Alice levantou-se, porque lhe passou pela cabe\xE7a que nunca tinha visto um coelho com um colete\u2026 bolso, ou um rel\xF3gio para levar. longe dele, e queimando de curiosidade, ela correu pelo campo atr\xE1s dele, felizmente chegando bem a tempo de v\xEA-lo cair em uma grande toca sob a cerca viva.</p>\n</blockquote>\n<p>For non-speakers of Spanish and Portuguese, it\u2019s totally reasonable to identify the above languages as the same-and you can quickly and easily find a lot of similarities between the two texts above, even if you don\u2019t know what they mean.</p>\n<h2 id="similarities-between-spanish-and-portuguese">Similarities between Spanish and Portuguese</h2>\n<p>In this section, we\u2019ll compare Spanish and Portuguese phonetically, vocabulary-wise, and syntax-wise to better understand the ways that these languages are so similar in more depth.</p>\n<h3 id="phonetic-similarities">Phonetic Similarities</h3>\n<p>The first major similarity between Spanish and Portuguese is acoustic similarity, which plays a key role for our transfer learning purposes. Here, acoustic or phonetic similarity means that the two languages use a set of sounds in their words that are very similar to one another. Consonants are almost identical in both languages, although Spanish has three extra affricates that Portuguese does not. Other than that, the consonants look the same on paper and they sound the same. Below, in Figure 2, we can see the phonetic alphabet for consonants of both languages, taken from the <a href="https://www.phon.ucl.ac.uk/home/sampa/">SAMPA website</a>.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976854/blog/transfer-learning-spanish-portuguese/transfer2.png" alt=""> <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976855/blog/transfer-learning-spanish-portuguese/transfer3.png" alt=""></p>\n<p><strong>Figure 2.</strong> Spanish and Portuguese consonants, represented in SAMPA.</p>\n<p>Vowels are a bit different. The Portuguese phonetic system has more vowels, and perceptually, Portuguese vowels are described as sounding different by Spanish speakers. In Figure 3 below we can see the Spanish and Pt vowels side by side, again taken from SAMPA website. <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976856/blog/transfer-learning-spanish-portuguese/transfer4.png" alt=""> <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976857/blog/transfer-learning-spanish-portuguese/transfer5.png" alt=""></p>\n<p><strong>Figure 3.</strong> Spanish and Portuguese vowels in SAMPA.</p>\n<p>Here, Spanish vowels look more minimalistic and the Portuguese side looks more crowded, since it has <a href="https://en.wikipedia.org/wiki/Nasal_vowel">nasal vowels</a>, like French. Still, there\u2019s a certain level of similarity.</p>\n<h3 id="vocabulary-similarities">Vocabulary Similarities</h3>\n<p>The final similarity between Spanish and Portuguese we want to discover is vocabulary similarity. Here, similar vocabulary means vocabulary strings that are either common or differ by a small edit distance-that is to say, one or two different letters or sounds. Compare the vocabulary words below, in Table 1, with Spanish on the left and Portuguese given on the right.</p>\n<table><tbody><tr><td style="padding: 10px;">**Spanish**</td><td /><td style="padding: 10px;">**Portuguese**</td></tr><tr><td style="padding: 10px;">casa</td><td /><td style="padding: 10px;">casa</td></tr><tr><td style="padding: 10px;">se\xF1ora</td><td /><td style="padding: 10px;">senhora</td></tr><tr><td style="padding: 10px;">para</td><td /><td style="padding: 10px;">para</td></tr><tr><td style="padding: 10px;">ahora</td><td /><td style="padding: 10px;">ahora</td></tr><tr><td style="padding: 10px;">cabeza</td><td /><td style="padding: 10px;">cabe\xE7a</td></tr><tr><td style="padding: 10px;">toma</td><td /><td style="padding: 10px;">toma</td></tr><tr><td style="padding: 10px;">vamos</td><td /><td style="padding: 10px;">vamos</td></tr><tr><td style="padding: 10px;">cama</td><td /><td style="padding: 10px;">cama</td></tr><tr><td style="padding: 10px;">gano</td><td /><td style="padding: 10px;">gano</td></tr><tr><td style="padding: 10px;">bonita</td><td /><td style="padding: 10px;">bonita</td></tr><tr><td style="padding: 10px;">cara</td><td /><td style="padding: 10px;">cara</td></tr><tr><td style="padding: 10px;">centro</td><td /><td style="padding: 10px;">centro</td></tr><tr><td style="padding: 10px;">estados</td><td /><td style="padding: 10px;">estados</td></tr><tr><td style="padding: 10px;">libros</td><td /><td style="padding: 10px;">livros</td></tr><tr><td style="padding: 10px;">opini\xF3n</td><td /><td style="padding: 10px;">opini\xE3o</td></tr></tbody></table>\n<p><strong>Table 1.</strong> Comparison of Spanish and Portuguese vocabulary items.</p>\n<p>As we see, some words are literally the same and some words differ by an edit distance of one or two. This is great for transferring the word vectors from the Spanish model into the Portuguese model.</p>\n<h3 id="syntactic-similarity">Syntactic Similarity</h3>\n<p>The final aspect of similarity between the two languages that we\u2019ll look at here is syntactic similarity-that is, how similar is the way that sentences and phrases are constructed? This is also related to transferring weights, as syntactic constructions are one of the things learned by the model. Since we\u2019d like to uncover how these two languages relate to each other, let\u2019s compare the dependency trees for the phrases <em>un perro peque\xF1o</em> and <em>um cachorro pequeno</em> meaning \u2018a small dog\u2019 in each language. These trees show us how words within a phrase or sentence are related to each other. I generated both dependency trees with <a href="https://explosion.ai/demos/displacy">displaCy</a>, shown below in Figure 4.</p>\n<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976857/blog/transfer-learning-spanish-portuguese/transfer6.png" alt=""> <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976858/blog/transfer-learning-spanish-portuguese/transfer7.png" alt=""></p>\n<p><strong>Figure 4.</strong> Dependency trees of \u2018a small dog\u2019 (literally, \u201Ca dog small\u201D) in Spanish (top) and Portuguese (bottom).</p>\n<p>In both dependency trees, we notice that the adjective comes after the noun. In both trees, the head is the noun <em>perro/cachorro</em> \u2018dog\u2019 and the adjective is attached to the head by the dependency relation <strong>adjective modifier</strong>, or <strong>amod</strong>. A determiner <em>un/um</em> \u2018a\u2019 is attached to the noun by the <strong>determiner,</strong> or <strong>det</strong> relation. We see that the above trees are identical; hence, if one learns the syntax of one Spanish/Portuguese pair, one can easily figure out the other language\u2019s syntax. Putting together this information, now we\u2019re ready to understand how we make use of transfer learning for training the very first speech recognition model of Portuguese from scratch.</p>\n<h2 id="transferring-our-models-learning-from-spanish-to-portuguese">Transferring our Model\u2019s Learning from Spanish to Portuguese</h2>\n<p>As we\u2019ve seen, Spanish and Portuguese are very similar to one another in terms of their sounds, their vocabulary, and their sentence structures. If we go back to our discussion of vectors and weighting at the beginning, you can see why starting with a Spanish model would be an effective choice for creating a Portuguese model-the weights and vectors are likely to be extremely similar, with only a few small points of difference that the model will learn when it sees Portuguese data, making small adjustments as it goes. We can see how useful this is if we imagine instead starting with an English model to create one for Portuguese.</p>\n<p>Although this would better than starting from zero (Portuguese and English are, after all, both languages, and they are related to one other, albeit more distantly), the number and magnitude of the adjustments would be much greater than when starting with Spanish, requiring a longer training process and more data from Portuguese to get the model to the same level of accuracy.</p>\n<h2 id="wrapping-up">Wrapping Up</h2>\n<p>I hope this article gives you a good sense of what transfer learning is and why it can be so impactful in a case like Spanish and Portuguese where the languages are very similar. We\u2019ve got more transfer learning material coming in the next few months, so stay tuned to learn more-you can sign up for our newsletter below to keep up-to-date on what\u2019s happening at Deepgram. Want to see the power of transfer learning first hand? <a href="https://console.deepgram.com/signup">Sign up for a free API</a> key or <a href="https://deepgram.com/contact-us/">contact us</a> to get started using end-to-end deep learning for your speech recognition projects.</p>';
}
const $$Astro = createAstro("/Users/sandrarodgers/web-next/blog/src/content/blog/posts/transfer-learning-spanish-portuguese/index.md", "", "file:///Users/sandrarodgers/web-next/blog/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  new Slugger();
  return renderTemplate`<head>${renderHead($$result)}</head><p>Transfer learning is one of the hottest topics of natural language processing-and, indeed, machine learning in general-in recent years. In this post, I want to share with you what transfer learning is, why it’s so helpful when thinking about language-related tasks, and how we’ve used it to create a high-accuracy model for Portuguese based on the work that we’d already done for Spanish.  In this blog post, we’ll discuss some of our specific logic here, including the intuition of picking Spanish for helping Portuguese model training and the similarities between these languages on many levels. But to get started, let’s talk about what transfer learning is and why it’s so valued at Deepgram before diving into the specifics of Spanish and Portuguese.</p>
<h2 id="what-is-transfer-learning-a-very-brief-history">What is Transfer Learning? A Very Brief History</h2>
<p>In short, we can say that transfer learning is taking a model that has been trained on one task, and using it for a different one by changing its training data. Transfer learning started its journey with word vectors, which are static vectors for each word in the corpus. For our purposes, you can think of a vector as a way of describing the relationship between words in a large, abstract space. To get an idea of how this works, you can see an example of word vectors in Figure 1, below. If you look at the 1st box for the words <em>man</em> and <em>woman</em>, they’re the same, but the word <em>king</em> is different because he’s not an ordinary human; he’s the king. Also <em>man</em>, <em>woman</em>, and <em>king</em> share the same third box, because they’re all human. The fourth box of <em>king</em> is identical to <em>man</em> (baby blue), but <em>woman</em> has a different fourth box, pink. So <em>king</em> is more similar to <em>man</em> in this regard. <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976854/blog/transfer-learning-spanish-portuguese/pic1.png" alt=""></p>
<p><strong>Figure 1.</strong> Word2vec, the ancestor of transfer learning, showing word similarities and differences (from <a href="https://jalammar.github.io/illustrated-word2vec/">https://jalammar.github.io/illustrated-word2vec/</a>).</p>
<p>Next, contextual word vectors came with ELMo, or Embeddings from Language Models, which is “a type of deep contextualized word representation that models both (1) complex characteristics of word use (e.g., syntax and semantics), and (2) how these uses vary across linguistic contexts (i.e., to model polysemy)” (<a href="https://paperswithcode.com/method/elmo#:~:text=Embeddings%20from%20Language%20Models%2C%20or,i.e.%2C%20to%20model%20polysemy">source</a>.)). This provided a way to look at the relationship between words at a greater depth and with more . Finally transformers-a type of deep learning model that differentially weights input data-were developed to generate contextual word vectors as well as a sentence-level vector, which is even better for linguistic analysis.</p>
<p>At each step of this process, though, the goal remained the same-to look for good representations for our corpus words, which happen to be vectors. Both pretrained word vectors and transformers are trained on giant corpora, hence they know a lot about the target language’s syntax and semantics. We feed pretrained vectors to our downstream models and the vectors bring what they know about the language, semantics of the words, and many surprising features to our models.</p>
<p>You can probably already see how this could be useful for language-related tasks. Speech recognition is the task of converting speech to text. Though speech recognition models are more sophisticated algorithms than text oriented statistical models, a neural network is still a neural network and weights are certainly used.</p>
<p>Hence, some weight re-using techniques are applicable to speech recognition, along with more sophisticated acoustic tricks. That is to say, once you have a model that works well for one language, it’s relatively easy to give that model data for another language-especially one that’s closely related-and see better results than if you started from scratch.</p>
<h2 id="why-we-use-transfer-learning">Why We Use Transfer Learning</h2>
<p>At Deepgram, transfer learning is highly valued. For a specific language, when we want to train a new version of a specific model, we don’t want to start from scratch. Instead, when we want to train a model for a brand new language, we want to transfer some knowledge from a similar language’s model when possible. To illustrate the power of these processes, we’ll look at a specific case of transfer learning-going from Spanish to Portuguese-to show how you can train a model for a new language from scratch by the help of a similar language’s model.</p>
${renderComponent($$result, "WhitepaperPromo", WhitepaperPromo, { "whitepaper": "deepgram-whitepaper-how-deepgram-works" })}
<h2 id="why-spanish-to-portuguese">Why Spanish to Portuguese</h2>
<p>Let’s get started with the basic question of why we picked Spanish to help train our Portuguese model from scratch. Spanish and Portuguese come from the same language family and are closely related. Italian, French, Spanish, and Portuguese all belong to this language family-the Romance family. However, even if you didn’t know that, a quick glance is enough for one to see the similarities between Spanish and Portuguese just by looking at a piece of text. Here’s an example text pair, taken from Alice in Wonderland, to explain what we mean:</p>
<p><strong>Spanish</strong></p>
<blockquote>
<p>No había nada tan notable en eso; Alicia tampoco pensó que fuera tan extraño escuchar al Conejo decirse a sí mismo: ‘¡Dios mío! ¡Oh querido! ¡Llegaré tarde!’ (cuando lo pensó después, se le ocurrió que debería haberse preguntado por esto, pero en ese momento todo parecía bastante natural); pero cuando el Conejo sacó un reloj del bolsillo de su chaleco, lo miró y siguió corriendo, Alicia se puso de pie, porque le pasó por la mente que nunca antes había visto un conejo con chaleco… bolsillo, o un reloj para sacar de él, y ardiendo de curiosidad, corrió por el campo tras él, y afortunadamente llegó justo a tiempo para verlo caer por una gran madriguera debajo del seto.</p>
</blockquote>
<p><strong>Portuguese</strong></p>
<blockquote>
<p>Não havia nada tão notável nisso; Alice também não achou tão estranho ouvir Rabbit dizer para si mesmo: ‘Meu Deus! Oh querida! Chegarei tarde!’ (Quando ele pensou sobre isso depois, ocorreu-lhe que deveria ter se perguntado sobre isso, mas na época tudo parecia bastante natural); mas quando o Coelho tirou um relógio do bolso do colete, olhou para ele e correu, Alice levantou-se, porque lhe passou pela cabeça que nunca tinha visto um coelho com um colete… bolso, ou um relógio para levar. longe dele, e queimando de curiosidade, ela correu pelo campo atrás dele, felizmente chegando bem a tempo de vê-lo cair em uma grande toca sob a cerca viva.</p>
</blockquote>
<p>For non-speakers of Spanish and Portuguese, it’s totally reasonable to identify the above languages as the same-and you can quickly and easily find a lot of similarities between the two texts above, even if you don’t know what they mean.</p>
<h2 id="similarities-between-spanish-and-portuguese">Similarities between Spanish and Portuguese</h2>
<p>In this section, we’ll compare Spanish and Portuguese phonetically, vocabulary-wise, and syntax-wise to better understand the ways that these languages are so similar in more depth.</p>
<h3 id="phonetic-similarities">Phonetic Similarities</h3>
<p>The first major similarity between Spanish and Portuguese is acoustic similarity, which plays a key role for our transfer learning purposes. Here, acoustic or phonetic similarity means that the two languages use a set of sounds in their words that are very similar to one another. Consonants are almost identical in both languages, although Spanish has three extra affricates that Portuguese does not. Other than that, the consonants look the same on paper and they sound the same. Below, in Figure 2, we can see the phonetic alphabet for consonants of both languages, taken from the <a href="https://www.phon.ucl.ac.uk/home/sampa/">SAMPA website</a>.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976854/blog/transfer-learning-spanish-portuguese/transfer2.png" alt=""> <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976855/blog/transfer-learning-spanish-portuguese/transfer3.png" alt=""></p>
<p><strong>Figure 2.</strong> Spanish and Portuguese consonants, represented in SAMPA.</p>
<p>Vowels are a bit different. The Portuguese phonetic system has more vowels, and perceptually, Portuguese vowels are described as sounding different by Spanish speakers. In Figure 3 below we can see the Spanish and Pt vowels side by side, again taken from SAMPA website. <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976856/blog/transfer-learning-spanish-portuguese/transfer4.png" alt=""> <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976857/blog/transfer-learning-spanish-portuguese/transfer5.png" alt=""></p>
<p><strong>Figure 3.</strong> Spanish and Portuguese vowels in SAMPA.</p>
<p>Here, Spanish vowels look more minimalistic and the Portuguese side looks more crowded, since it has <a href="https://en.wikipedia.org/wiki/Nasal_vowel">nasal vowels</a>, like French. Still, there’s a certain level of similarity.</p>
<h3 id="vocabulary-similarities">Vocabulary Similarities</h3>
<p>The final similarity between Spanish and Portuguese we want to discover is vocabulary similarity. Here, similar vocabulary means vocabulary strings that are either common or differ by a small edit distance-that is to say, one or two different letters or sounds. Compare the vocabulary words below, in Table 1, with Spanish on the left and Portuguese given on the right.</p>
<table><tbody><tr><td style="padding: 10px;">**Spanish**</td><td></td><td style="padding: 10px;">**Portuguese**</td></tr><tr><td style="padding: 10px;">casa</td><td></td><td style="padding: 10px;">casa</td></tr><tr><td style="padding: 10px;">señora</td><td></td><td style="padding: 10px;">senhora</td></tr><tr><td style="padding: 10px;">para</td><td></td><td style="padding: 10px;">para</td></tr><tr><td style="padding: 10px;">ahora</td><td></td><td style="padding: 10px;">ahora</td></tr><tr><td style="padding: 10px;">cabeza</td><td></td><td style="padding: 10px;">cabeça</td></tr><tr><td style="padding: 10px;">toma</td><td></td><td style="padding: 10px;">toma</td></tr><tr><td style="padding: 10px;">vamos</td><td></td><td style="padding: 10px;">vamos</td></tr><tr><td style="padding: 10px;">cama</td><td></td><td style="padding: 10px;">cama</td></tr><tr><td style="padding: 10px;">gano</td><td></td><td style="padding: 10px;">gano</td></tr><tr><td style="padding: 10px;">bonita</td><td></td><td style="padding: 10px;">bonita</td></tr><tr><td style="padding: 10px;">cara</td><td></td><td style="padding: 10px;">cara</td></tr><tr><td style="padding: 10px;">centro</td><td></td><td style="padding: 10px;">centro</td></tr><tr><td style="padding: 10px;">estados</td><td></td><td style="padding: 10px;">estados</td></tr><tr><td style="padding: 10px;">libros</td><td></td><td style="padding: 10px;">livros</td></tr><tr><td style="padding: 10px;">opinión</td><td></td><td style="padding: 10px;">opinião</td></tr></tbody></table>
<p><strong>Table 1.</strong> Comparison of Spanish and Portuguese vocabulary items.</p>
<p>As we see, some words are literally the same and some words differ by an edit distance of one or two. This is great for transferring the word vectors from the Spanish model into the Portuguese model.</p>
<h3 id="syntactic-similarity">Syntactic Similarity</h3>
<p>The final aspect of similarity between the two languages that we’ll look at here is syntactic similarity-that is, how similar is the way that sentences and phrases are constructed? This is also related to transferring weights, as syntactic constructions are one of the things learned by the model. Since we’d like to uncover how these two languages relate to each other, let’s compare the dependency trees for the phrases <em>un perro pequeño</em> and <em>um cachorro pequeno</em> meaning ‘a small dog’ in each language. These trees show us how words within a phrase or sentence are related to each other. I generated both dependency trees with <a href="https://explosion.ai/demos/displacy">displaCy</a>, shown below in Figure 4.</p>
<p><img src="https://res.cloudinary.com/deepgram/image/upload/v1661976857/blog/transfer-learning-spanish-portuguese/transfer6.png" alt=""> <img src="https://res.cloudinary.com/deepgram/image/upload/v1661976858/blog/transfer-learning-spanish-portuguese/transfer7.png" alt=""></p>
<p><strong>Figure 4.</strong> Dependency trees of ‘a small dog’ (literally, “a dog small”) in Spanish (top) and Portuguese (bottom).</p>
<p>In both dependency trees, we notice that the adjective comes after the noun. In both trees, the head is the noun <em>perro/cachorro</em> ‘dog’ and the adjective is attached to the head by the dependency relation <strong>adjective modifier</strong>, or <strong>amod</strong>. A determiner <em>un/um</em> ‘a’ is attached to the noun by the <strong>determiner,</strong> or <strong>det</strong> relation. We see that the above trees are identical; hence, if one learns the syntax of one Spanish/Portuguese pair, one can easily figure out the other language’s syntax. Putting together this information, now we’re ready to understand how we make use of transfer learning for training the very first speech recognition model of Portuguese from scratch.</p>
<h2 id="transferring-our-models-learning-from-spanish-to-portuguese">Transferring our Model’s Learning from Spanish to Portuguese</h2>
<p>As we’ve seen, Spanish and Portuguese are very similar to one another in terms of their sounds, their vocabulary, and their sentence structures. If we go back to our discussion of vectors and weighting at the beginning, you can see why starting with a Spanish model would be an effective choice for creating a Portuguese model-the weights and vectors are likely to be extremely similar, with only a few small points of difference that the model will learn when it sees Portuguese data, making small adjustments as it goes. We can see how useful this is if we imagine instead starting with an English model to create one for Portuguese.</p>
<p>Although this would better than starting from zero (Portuguese and English are, after all, both languages, and they are related to one other, albeit more distantly), the number and magnitude of the adjustments would be much greater than when starting with Spanish, requiring a longer training process and more data from Portuguese to get the model to the same level of accuracy.</p>
<h2 id="wrapping-up">Wrapping Up</h2>
<p>I hope this article gives you a good sense of what transfer learning is and why it can be so impactful in a case like Spanish and Portuguese where the languages are very similar. We’ve got more transfer learning material coming in the next few months, so stay tuned to learn more-you can sign up for our newsletter below to keep up-to-date on what’s happening at Deepgram. Want to see the power of transfer learning first hand? <a href="https://console.deepgram.com/signup">Sign up for a free API</a> key or <a href="https://deepgram.com/contact-us/">contact us</a> to get started using end-to-end deep learning for your speech recognition projects.</p>`;
}, "/Users/sandrarodgers/web-next/blog/src/content/blog/posts/transfer-learning-spanish-portuguese/index.md");

export { compiledContent, $$Index as default, frontmatter, metadata, rawContent };
