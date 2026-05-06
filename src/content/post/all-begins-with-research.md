---
publishDate: 2026-05-05T00:00:00Z
title: "All Begins With Research: The Step AI Can't Skip For You"
excerpt: "AI shipped 41% of Gumroad's commits last year. Pendo says 80% of features in production are barely used. Building has never been cheaper, which means knowing what to build has never been more valuable. Research is the asset AI cannot replace, and the one elite teams are scaling fastest."
image: "../../assets/images/blog/all-begins-with-research.svg"
tags:
  - product-engineering
  - ai
  - product-discovery
author: Cesar Ardila
---

**Eighty percent of the features sitting in your product right now are rarely or never used.**

That number comes from <a href="https://www.pendo.io/resources/the-2019-feature-adoption-report/" target="_blank" rel="noopener noreferrer">Pendo's analysis</a> of 615 enterprise software subscriptions. Twelve percent of features generate eighty percent of the daily usage. The other eighty-eight percent are rounding error. Pendo extrapolated the waste at twenty-nine billion dollars in public-cloud R&D burned every year on things almost nobody touches.

Now overlay the AI era on top of that.

Sahil Lavingia runs Gumroad at roughly ten million dollars in ARR with one full-time employee. Forty-one percent of his commits are written by AI agents, and he is targeting eighty. Marty Cagan now writes that *"for a commercial product, especially in the AI era, product discovery is usually the difference between success and failure."* The price of building has collapsed. The price of building *the wrong thing* has collapsed with it.

Which is why research stopped being a nice-to-have. It is now the asset.

## The Named Problem: Cheap Code, Expensive Confusion

CB Insights has been tracking why startups die for over a decade. Their original analysis of 110 post-mortems found that <a href="https://www.cbinsights.com/research/report/startup-failure-reasons-top/" target="_blank" rel="noopener noreferrer">forty-two percent failed because of "no market need"</a>. Their 2024 update on 431 venture-backed shutdowns reframed the same finding: forty-three percent flagged "poor product-market fit" as a primary cause.

The label evolves. The diagnosis does not.

Most failed companies were good at building something. They were just building the wrong thing.

One founder quoted in the dataset, from a startup called eCrowds, said it cleaner than any framework: *"We spent way too much time building it for ourselves and not getting feedback from prospects. It's easy to get tunnel vision. I'd recommend not going more than two or three months from the initial start to getting in the hands of prospects that are truly objective."*

That is the failure mode. AI tooling does not fix it. AI tooling makes it faster.

In February 2025, Andrej Karpathy coined the term *vibe coding*: "fully give in to the vibes, embrace exponentials, and forget that the code even exists." Collins English Dictionary named it Word of the Year. The vibe is real. The risk that comes with it is also real. A <a href="https://en.wikipedia.org/wiki/Vibe_coding" target="_blank" rel="noopener noreferrer">December 2025 CodeRabbit analysis</a> of 470 GitHub pull requests found AI-co-authored code carried 1.7 times more major issues, seventy-five percent more configuration errors, and 2.74 times more security vulnerabilities than human-authored code. A <a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener noreferrer">July 2025 METR study</a> found experienced open-source developers were nineteen percent slower with AI tools while believing they were twenty-four percent faster.

Building fast in the wrong direction is not a productivity gain. It is a leverage problem.

The faster you build without research, the faster you arrive at a product nobody wants.

This is the inversion every team needs to internalize. In 2017 your competitive edge was being able to ship. Today everyone can build. The edge has moved upstream, into the work of figuring out what to build in the first place.

## Three Things Research-Driven Teams Do Differently

### 1. They Do the Unscalable Work, Personally

The most cited research-driven success stories are not lucky breaks. They are documented examples of founders refusing to outsource the customer conversation.

In early 2009, Airbnb had fifty daily site visits, twenty bookings a day, and two hundred dollars a week in revenue. Paul Graham told Brian Chesky and Joe Gebbia: *"Where are your users? New York. Why are you here in Mountain View? Go to your users."* They flew to New York, rented a five-thousand-dollar camera, and personally photographed every listing in the city. Bookings two-to-three-x'd within weeks. Revenue doubled by month-end.

Chesky's lesson, told to Reid Hoffman: *"It's really hard to get even ten people to love anything, but it's not hard if you spend a ton of time with them. We literally would knock on the doors of all of our hosts."*

Patrick and John Collison did the same thing for Stripe. <a href="https://paulgraham.com/ds.html" target="_blank" rel="noopener noreferrer">Paul Graham named the practice</a> *Collison installation*: "When anyone agreed to try Stripe they'd say 'Right then, give me your laptop' and set them up on the spot." Drew Houston shipped a three-minute Dropbox demo video before the product existed. The waitlist went from five thousand to seventy-five thousand overnight. Houston's line, often quoted: *"Not launching can be painful, but not learning can be fatal."*

These founders were not doing customer research as a phase. They were doing it as a habit, with their own hands, before they let anyone else touch the work.

That is the asset.

### 2. They Measure Product-Market Fit Like a Financial Metric

Rahul Vohra ran a clean version of this experiment at Superhuman. Starting in 2017, he applied the Sean Ellis framework: *How would you feel if you could no longer use this product?* The threshold for product-market fit is forty percent of users answering *"very disappointed."*

Superhuman was at twenty-two percent in Q1 2017. Below the line.

Vohra's <a href="https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/" target="_blank" rel="noopener noreferrer">First Round write-up</a> walks through the four-step engine: survey users, segment to find your high-expectation customer, analyze why super-fans love you, then split the roadmap fifty-fifty between doubling down on what super-fans love and addressing what holds back the on-the-fence users.

Q2 2017: thirty-three percent. Q3: forty-seven percent. Eventually fifty-eight percent. Grammarly acquired Superhuman in 2025.

Vohra's framing matters: *"What if you could measure product-market fit? Because if you could measure it, then maybe you could optimize it. And then maybe you could systematically increase product-market fit until you achieved it."*

Research stops being a phase you exit. It becomes an instrument you read every quarter, the way a finance team reads cash burn.

### 3. They Treat Customer Conversations as the Highest-Leverage Engineering Decision

Dylan Field spent four years researching designers' workflows before Figma's public release in 2016. His pandemic ritual, profiled in Forbes, was reading customer support tickets, replying to users on Twitter, and visiting clients in person in Ukraine and Nigeria.

His quote: *"Not all of them are happy, because here's this thing they want fixed, and that gives me a pulse on what's going on. And the people that are happy, that's when I get really stoked."*

Stewart Butterfield's team built the tool that became Slack as an internal coordination layer for their failing MMO Glitch. They had three and a half years of practice using their own product before they ever marketed it externally. The pricing they launched with, Butterfield says, is the pricing they wrote down on day one of the pivot.

Patrick Collison, <a href="https://stripe.com/sessions/2025/ama-with-patrick-and-john-collison" target="_blank" rel="noopener noreferrer">speaking at Stripe Sessions 2025</a>, said it directly: *"Everyone at Stripe working on product development, the way in practice we do this is we start with the customer requests, the customer feedback, the customer perceived shortcomings in our products."*

None of this is glamorous. It is reading tickets at midnight, sitting in awkward calls with users you do not yet know, and editing your own assumptions out of the roadmap.

The work is unsexy enough that most teams skip it. Which is exactly why the teams that do not skip it have an asymmetric advantage.

## Where AI Actually Belongs in Your Research Loop

The teams winning right now are not replacing research with AI. They are using AI to do more of it, faster, and to make it accessible to people who used to be locked out of the process by tooling cost.

Three categories worth knowing.

**First, AI-assisted analysis.** Tools like Dovetail, Looppanel, and Marvin auto-tag transcripts, cluster themes across hundreds of interviews, and run semantic search over years of customer feedback. The Nielsen Norman Group has long flagged synthesis as the most expensive phase of qualitative research. AI compresses it from days to hours. The gating factor on doing more interviews is no longer the analysis bottleneck.

**Second, AI as a research partner.** Tal Raviv, featured in <a href="https://www.lennysnewsletter.com/" target="_blank" rel="noopener noreferrer">Lenny Rachitsky's newsletter</a>, treats AI as a thinking partner that challenges product assumptions before they harden into roadmap items. Marily Nika, AI Product Lead at Google, mines Reddit through Perplexity's discussions filter to surface raw user language, then uses agent debates to stress-test PMF requirements. Notion's internal *Messaging BS Radar* agent (described publicly by Ivan Zhao) ingests user research reports, review-site content, every Gong customer call, and competitive intel, then critiques marketing copy from a skeptical-customer point of view before it ships.

**Third, AI in the engineering loop itself.** <a href="https://www.lennysnewsletter.com/p/gumroad-ceos-playbook-to-40x-his" target="_blank" rel="noopener noreferrer">Sahil Lavingia's three-tier workflow at Gumroad</a> is instructive. Small fixes go from Slack to Devin in ten minutes. Medium changes flow through a PRD, then a v0 prototype, then Devin to production, in two hours instead of two weeks. Large zero-to-product builds compress from quarters to days.

The compression is real. But it only pays off when the input to that pipeline is a validated customer problem. Not a vibe.

That is the real workflow shift. Research used to be slow because synthesis was slow. AI removes the synthesis tax. Research used to be expensive because every cycle of customer contact required a researcher's calendar. AI lets a single product engineer run interviews, synthesize them, draft a PRD, and prototype the resulting hypothesis in the time it used to take to schedule the kickoff.

**AI accelerates the building work. AI accelerates the synthesis work. The human stays at the center of the customer conversation.** The conversation is the part that does not compress, because it is the part that produces the asset.

## Signals You Are Skipping the Work

A few patterns to watch for, on your own team or your own desk.

The roadmap is dominated by features executives or investors asked for, rather than problems users named in their own words. The PM, the designer, and the engineer cannot quote a recent user verbatim. Strategy is built on competitor feature audits instead of customer pain audits.

Nobody tracks PMF as a number. *"We'll see what happens after launch"* is the actual plan.

Discovery is treated as a phase that ends when delivery starts. Engineers never sit in on customer calls. Feature launches are celebrated, but feature removals are taboo. AI tooling is being deployed to write more code, never to digest more customer data.

Any one of these is a signal. Three or more is a feature factory in disguise.

## A One-Week Starter Habit

If you are leading a product or engineering team, the move is not to commission a six-month research program. It is to install a habit your team can run next week.

**Five customer conversations.** Past behavior questions only, in the spirit of Rob Fitzpatrick's *The Mom Test*: ask people about what they did, not what they would do.

**Run Vohra's PMF survey** on your existing user base, then segment the "very disappointed" group and read every open-ended response.

**Sketch one Opportunity Solution Tree** per Teresa Torres' framework, mapping outcomes to opportunities to candidate solutions to assumption tests.

**Use AI to synthesize the transcripts.** Use AI to draft the PRD that comes out of the synthesis. Use AI to prototype the candidate solution.

Then go back to the same customers and show them the prototype.

That is one week. It is not exotic. It is the same loop Airbnb, Stripe, Superhuman, Figma, and Notion have run, except the synthesis and prototyping steps that used to take a team now take a single afternoon.

## The Shipwright's First Tool Is Not the Saw

A shipwright's first tool was never the saw. It was the conversation with the captain about what the ship had to survive. Trade route, cargo weight, weather pattern, crew size.

The wood came later. The saw came after that.

AI gives every product team a sharper saw than they have ever had. It does not give them a captain. The captain still has to be found, listened to, and understood. By a human, in person or on a video call, in the language the customer actually uses about the problem they actually have.

Build is cheap. Insight is the asset. Research is how you keep one without sacrificing the other.

Your move.

---

## Sources

<a href="https://www.pendo.io/resources/the-2019-feature-adoption-report/" target="_blank" rel="noopener noreferrer">Pendo. "The 2019 Feature Adoption Report."</a>

<a href="https://www.cbinsights.com/research/report/startup-failure-reasons-top/" target="_blank" rel="noopener noreferrer">CB Insights. "Why Startups Fail: Top 9 Reasons." 2024.</a>

<a href="https://www.svpg.com/" target="_blank" rel="noopener noreferrer">Cagan, Marty. Silicon Valley Product Group essays on AI-era product discovery.</a>

<a href="https://en.wikipedia.org/wiki/Vibe_coding" target="_blank" rel="noopener noreferrer">Wikipedia. "Vibe coding." Karpathy origin and CodeRabbit December 2025 analysis.</a>

<a href="https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/" target="_blank" rel="noopener noreferrer">METR. "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." July 2025.</a>

<a href="https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/" target="_blank" rel="noopener noreferrer">Vohra, Rahul. "How Superhuman Built an Engine to Find Product/Market Fit." First Round Review.</a>

<a href="https://stripe.com/sessions/2025/ama-with-patrick-and-john-collison" target="_blank" rel="noopener noreferrer">Stripe. "AMA with Patrick and John Collison." Stripe Sessions 2025.</a>

<a href="https://paulgraham.com/ds.html" target="_blank" rel="noopener noreferrer">Graham, Paul. "Do Things That Don't Scale." 2013.</a>

<a href="https://www.lennysnewsletter.com/p/gumroad-ceos-playbook-to-40x-his" target="_blank" rel="noopener noreferrer">Rachitsky, Lenny. "Gumroad CEO's playbook to 40x his team's productivity with v0, Cursor, and Devin | Sahil Lavingia." Lenny's Newsletter.</a>

<a href="https://www.momtestbook.com" target="_blank" rel="noopener noreferrer">Fitzpatrick, Rob. *The Mom Test*. 2013.</a>

<a href="https://www.producttalk.org/" target="_blank" rel="noopener noreferrer">Torres, Teresa. *Continuous Discovery Habits*. Product Talk LLC, 2021.</a>

---

With love, Cesar Ardila 🎵
