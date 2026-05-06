---
title: 'Notebook to Production, Part 2: My ML capstone now has a Streamlit UI—and better explanations'
description: "My ML Zoomcamp capstone now has a Streamlit UI—and better explanations"
pubDate: 2026-05-05
linkedinUrl: https://www.linkedin.com/pulse/notebook-production-part-2-my-ml-capstone-now-has-streamlit-chen-kmm0c/

---

![ML Zoomcamp](/images/posts/streamlit_1.png)

A few weeks ago I wrote about taking my ML Zoomcamp capstone from notebook to something deployable (original post). What stuck with me then was how messy the last mile feels compared with training a model. 

The story since then isn’t “I improved accuracy.” It’s “now this model is actually LIVE on a public URL”. 

Try the updated demo UI: https://lending-club-loan-grade-prediction-production-4bbc.up.railway.app

https://github.com/jqchen24-new/lending-club-loan-grade-prediction

I added a Streamlit front door so the work isn’t hidden behind curl examples. I started returning probabilities across grades, not just a single letter—because a top bucket without uncertainty is a story told too confidently. I added SHAP-style explanations: what moved the needle, how strongly, and in which direction.

Then deployment reminded me why engineers earn their keep: two Railway services, a mis-set base URL that produces baffling 404s, HTTPS redirects that look like “mystery errors,” Docker builds that fail on dependency graphs you never noticed locally, and an explanation path that only works if the container actually carries the right artifacts.

![ML Zoomcamp](/images/posts/streamlit_2.png)

![ML Zoomcamp](/images/posts/streamlit_3.png)