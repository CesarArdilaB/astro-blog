# Create a new blog post

Create a new blog post from the provided draft or topic. The user will provide the content or idea as $ARGUMENTS.

## Process

### 1. Read the writing knowledge base

Read the key chunks from all four books in `ai_tools/writing_skills/`:

- **Building a StoryBrand**: Position the reader as the hero. You (the author) are the guide. Open with the reader's desire, name the problem clearly, lay out a simple plan, include a direct call to action. Clarity over cleverness.
- **Made To Stick (SUCCESs)**: Lead with the core idea (Simple). Open with something counterintuitive (Unexpected). Use specific, vivid details (Concrete). Back claims up (Credible). Make the reader feel something (Emotional). Wrap it in narrative (Stories).
- **Obviously Awesome**: Reframe, don't just describe. Choose a specific angle that makes the unique value self-evident. Name the competitive alternatives. Position for a specific reader, not everyone.
- **Strategy Is Your Words**: Every word is a strategic decision. Write less but sharper. Lead with empathy. Favor specificity and clarity over abstractions. Allow creative play before locking into structure.

### 2. Apply writing rules

- **No em dashes (—)**. Use commas, colons, periods, or reword instead.
- Short, punchy paragraphs. No walls of text.
- Conversational, first-person tone where appropriate.
- Concrete examples and specifics over vague generalizations.
- Bold for key concepts, italics for internal dialogue or emphasis.
- Strategic repetition for rhythm when it serves the message.
- End with a clear call to action.

### 3. Create the post file

Save to `src/content/post/` with this frontmatter structure:

```yaml
---
publishDate: YYYY-MM-DDT00:00:00Z
title: "Post Title Here"
excerpt: "One or two sentence summary of the post."
image: "../../assets/images/blog/SLUG.svg"
tags:
  - tag1
  - tag2
author: Cesar Ardila
---
```

- Filename: kebab-case matching the slug (e.g., `my-post-title.md`)
- publishDate: use today's date
- Tags: 2-4 relevant tags, lowercase, hyphenated

### 4. Generate an SVG cover image

Create a brand-consistent SVG at `src/assets/images/blog/SLUG.svg`:

- Dark background (#050505)
- Brand accent (#ff4500)
- Monospace typography (Space Mono)
- Grid dot pattern background
- Top accent bar (4px orange)
- Bottom status bar with dark background
- Transmission number label (increment from previous posts)
- Visual metaphor related to the post topic
- "cesar.ships" watermark bottom-right

### 5. Add inline source links

If the user provides sources or references:
- Use `<a href="URL" target="_blank" rel="noopener noreferrer">linked text</a>` for inline links (opens in new tab)
- Add a `## Sources` section at the bottom with full citations as links

### 6. Sign the post

End every post with:

```
---

With love, Cesar Ardila 🎵
```

### 7. Build and verify

Run `npm run build` to verify the post compiles without errors.
