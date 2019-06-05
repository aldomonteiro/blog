---
templateKey: blog-post
date: 2019-06-05T22:57:21.979Z
cover: /assets/programming.jpeg
title: Modern publications with Gatsby & Ghost
---


There has been a lot of progress around static site generators, front end frameworks and API-centric infrastructure in recent years. At Ghost, we’ve been building open source technology for modern publishing for over 5 years and as a developer-centric team, the momentum around static sites didn’t go unnoticed.



Wildly fast websites which have no back end and can be deployed just about anywhere felt very much like the future. So I’m thrilled to share that with the recent updates to the Ghost API, it’s now possible to use Ghost as a completely decoupled headless CMS and bring your own front-end written in Gatsby.js!



## API driven publishing

Ghost has always been architected into 3 distinct areas: A core Node.js API, an Ember.js Admin client, and a speedy Handlebars.js front-end theme layer. Until now those 3 areas have been fairly tightly coupled, so it hasn’t been possible to use them separately.



![](/assets/ghost-core-1.png)

Our latest updates allow you to completely replace the default Handlebars theme layer in favor of a front-end framework, so you can use Gatsby to build your site statically from the Ghost API.



## Why use a headless CMS?

Many developers use static site generators alongside locally stored Markdown files, using a code editor to create content and a GIT workflow to publish. While this works great and is suitable for some sites, it quickly becomes unmanageable for publishers that need to scale, or teams that are not solely developers.



This is where a headless CMS comes in, which provides an admin client for authoring and content management, while still bringing all of the benefits of having a static front-end. Developers can use their preferred stack, and writers have an editor, content scheduling, SEO and much more at their fingertips.



When you look at the bigger picture of the content mesh, it really starts to feel like an inevitable future for building publishing websites.
