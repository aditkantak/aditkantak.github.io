<%*
const response = await tp.system.prompt("Post title", "", true);

const dateStr = tp.date.now("YYYY-MM-DD");

let slug = response
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

const safeTitle = response.replace(/"/g, '\\"');
-%>
---
layout: default
title: "<% safeTitle %>"
date: <% dateStr %>
---

