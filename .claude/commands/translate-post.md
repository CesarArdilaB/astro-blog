# Translate a blog post to Spanish

Translate an existing English blog post to Spanish. The user will provide the post filename or path as $ARGUMENTS.

## Translation Philosophy

This is **transcreation**, not literal translation. The goal is to produce an article that reads as if it were originally written in Spanish by the same author, preserving voice, rhythm, and emotional impact while adapting culturally.

## Process

### 1. Read the original post

Read the English post from `src/content/post/` to understand the full content, tone, and structure.

### 2. Apply translation best practices

#### Voice and Tone
- **Preserve the author's conversational, punchy style.** If the English is direct and short, the Spanish must be too. Do not inflate sentences.
- **Use "tú" (informal) consistently.** The blog speaks peer-to-peer to product engineers and founders, not formally. Never use "usted" unless quoting someone.
- **Use neutral Latin American Spanish.** Avoid region-specific slang. Prefer vocabulary understood across Mexico, Colombia, Argentina, and Chile. When in doubt, favor Mexican Spanish conventions as the largest readership.

#### Sentence Structure
- **Do not mirror English sentence order blindly.** Spanish has flexible word order. Restructure for natural flow. Subject-verb-object is not always the best choice in Spanish.
- **Break long compound sentences.** If the English uses commas to chain clauses, consider splitting into separate sentences in Spanish for punchiness.
- **Watch for false cognates.** "Actually" is not "actualmente" (which means "currently"). "Realize" is not "realizar" (which means "to carry out"). "Success" is not "suceso" (which means "event").

#### Idioms and Expressions
- **Never translate idioms literally.** Find the Spanish equivalent that carries the same emotional weight. If no equivalent exists, rewrite the idea from scratch.
- **English metaphors may not land in Spanish.** Evaluate each one. Keep it if it works, replace it if it does not. The shipwright metaphor, for example, can stay because it is universal.
- **Preserve quotes in their original English with a Spanish translation in parentheses or as a note**, unless a well-known official Spanish translation exists.

#### Cultural Adaptation
- **Currency and measurements:** Keep dollars as-is (tech/startup context is US-centric and readers expect USD).
- **Company and product names:** Do not translate. Airbnb, Stripe, Gumroad, Figma stay as-is.
- **Acronyms:** Keep English acronyms that are standard in the Spanish tech community (PMF, PRD, ARR, AI). Spell out on first use with Spanish explanation if the term is less common.
- **Dates:** Use the Spanish format convention (5 de mayo de 2026).

#### SEO and Readability
- **Translate the title, excerpt, and tags** for Spanish SEO value.
- **Do not translate URL slugs.** Keep the same slug with `-es` appended for discoverability.
- **Translate alt text and image descriptions** if any exist.

### 3. Apply the same writing rules as English posts

- **No em dashes (—)**. Use commas, colons, periods, or reword.
- Short, punchy paragraphs.
- Bold for key concepts, italics for emphasis.
- Strategic repetition for rhythm.
- End with a clear call to action.

### 4. Create the translated post file

Save to `src/content/post/` with the same frontmatter structure but translated metadata:

```yaml
---
publishDate: YYYY-MM-DDT00:00:00Z
title: "Título Traducido Aquí"
excerpt: "Resumen de una o dos oraciones."
image: "../../assets/images/blog/ORIGINAL-SLUG.svg"
tags:
  - tag1-en-español
  - tag2-en-español
author: Cesar Ardila
---
```

- **Filename:** Same slug as original with `-es` suffix (e.g., `my-post-title-es.md`)
- **publishDate:** Same as the original post
- **Image:** Reuse the same SVG as the original (no need to recreate)
- **Tags:** Translate tags to Spanish equivalents

### 5. Handle sources and links

- Keep all source URLs as-is (they point to English resources, which is expected)
- Translate the link text and citation descriptions to Spanish
- Keep the `## Fuentes` section at the bottom

### 6. Sign the post

End every translated post with:

```
---

Con amor, Cesar Ardila 🎵
```

### 7. Build and verify

Run `npm run build` to verify the translated post compiles without errors.

## Common Pitfalls to Avoid

1. **Translationese:** If a sentence sounds like translated English, rewrite it from scratch in Spanish.
2. **Over-formality:** Tech blog readers in Spanish expect the same casual register as English tech blogs. Do not make it sound like a textbook.
3. **Losing rhythm:** The original uses short sentences for impact. Do not merge them into long Spanish paragraphs.
4. **Inflating word count:** Spanish naturally runs 15-25% longer than English. Fight this. Edit aggressively to keep the same punch.
5. **Translating proper nouns or well-known English terms:** "Product-market fit," "vibe coding," "feature factory" are used as-is in the Spanish tech community. Keep them in English with context if needed.
