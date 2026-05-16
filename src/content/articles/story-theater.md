---
title: 'My daughter chose Netflix over books — so I built this app'
pubDate: 2026-05-15
linkedinUrl: https://www.linkedin.com/pulse/my-daughter-chose-netflix-over-books-so-i-built-app-junqi-chen-karcc/
---

![Story Theater](/images/posts/homepage.png)

My son will happily read his Kindle past midnight. My daughter? YouTube Kids and Netflix, whenever she gets a break from piano. 

I wanted to change that. I know banning screen is not possible, so I took a different approach by making reading feel a little more like the things she already loves: characters, choices, voices, pictures.

A handful of AI storybook tools exist already (Gemini Storybook, MyStoryBot, a long tail of "make a personalized picture book" sites). Most generate a fixed book in one shot. What I wanted was something that branches at every page, reads itself aloud with the active sentence highlighted, and feels built for a 7-year-old to use — not for a parent to author for her.

Introducing **Story Theater** — interactive, read-aloud picture-book adventures for kids around 7–9. Pick one of 16 themes (dinosaurs, pirates, time travel, silly comedy, superheroes, ocean…) and a hero. Branch through six scenes with two choices per beat. Each page is narrated with neural TTS while the active sentence lights up.

https://story-theater-for-kids.vercel.app

How it's wired together:

- **Claude** generates the story scenes — structured JSON keeps narration, choices, and the cast consistent as the story branches
- **Gemini / OpenAI** handle the narration audio
- **Gemini's image API** draws each scene, and the hero's first picture is passed forward as a reference so they stay recognizable across pages
- React 19 + Vite + Tailwind on the front end

![Story Theater](/images/posts/image.png)

![Story Theater](/images/posts/branch.png)

A few honest tradeoffs worth naming:

1. **Latency**. Every new scene runs three generations on demand — story text, voice, and illustration. First-time loads aren't instant; expect a short wait. Replays are much faster because audio is cached in the browser and pictures are kept per choice path (BTW, it took a lot of tokens to get this caching in place lol).

2. **When you'll hear the robot voice**. The app prefers natural neural TTS. You'll fall back to your browser's built-in speech when neural TTS isn't available — missing or inactive API key, a provider error, a quota or billing limit, or a brief client-side cool-down after the server reports quota exhausted. The fallback keeps the story readable aloud, but the quality gap is real.

3. **The picture occasionally hallucinates**. The image model is good but not perfect — once in a while a scene will show an extra finger, a misspelled sign, or a character who doesn't quite match the narration. The hero reference image keeps things mostly consistent across pages, but it isn't a guarantee.

One thing I want to be clear about: this isn't meant to replace real books. Bedtime is still a paperback. Story Theater only comes into play when the kids are asking for screen time anyway — the goal is to make that slot a little more like reading and a little less like passive scrolling.

Early days. My daughter is the harshest reviewer in the house. Feedback welcome.