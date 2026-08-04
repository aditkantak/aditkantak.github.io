<%*
const title = await tp.system.prompt("Post title", "", true);
const description = await tp.system.prompt("One-line description", "", true);

const dateStr = tp.date.now("YYYY-MM-DD");

let slug = title
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");
if (!slug) slug = "untitled";

let newName = `${dateStr}-${slug}`;
let suffix = 2;
while (await tp.file.exists(newName + ".md")) {
  newName = `${dateStr}-${slug}-${suffix}`;
  suffix++;
}
await tp.file.rename(newName);

const safeTitle = title.replace(/"/g, '\\"');
const safeDescription = description.replace(/"/g, '\\"');
-%>
---
layout: default
title: "<% safeTitle %>"
description: "<% safeDescription %>"
date: <% dateStr %>
---

