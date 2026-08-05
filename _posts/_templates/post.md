<%*
const title = await tp.system.prompt("Post title", "", true);
const description = await tp.system.prompt("One-line description", "", true);
const hasMath = await tp.system.suggester(["No", "Yes"], [false, true], true, "Does this post use math (MathJax)?");

// build the tag list from every tag already used across existing posts, so
// picking a tag is a select-from-list action rather than retyping it.
// note: _posts/ is the vault root (.obsidian lives directly inside it), so
// post files show up here with vault-relative paths like "2026-...-title.md",
// never prefixed with "_posts/" - only _templates/ needs excluding.
const postFiles = app.vault.getMarkdownFiles().filter(f =>
  !f.path.startsWith("_templates/")
);
const tagSet = new Set();
for (const f of postFiles) {
  const fm = app.metadataCache.getFileCache(f)?.frontmatter;
  if (fm && fm.tags) {
    (Array.isArray(fm.tags) ? fm.tags : [fm.tags]).forEach(t => tagSet.add(String(t)));
  }
}
let availableTags = Array.from(tagSet).sort();
let selectedTags = [];

while (true) {
  const options = availableTags.map(tag => (selectedTags.includes(tag) ? "✅ " : "#") + tag);
  const values = availableTags.slice();
  options.push("＋ New tag...");
  values.push("__new__");
  options.push("✔ Done");
  values.push("__done__");

  const choice = await tp.system.suggester(options, values, true, `Select tags (${selectedTags.length} chosen)`);
  if (choice === null || choice === "__done__") break;

  if (choice === "__new__") {
    const newTag = await tp.system.prompt("New tag name", "", true);
    if (newTag) {
      const clean = newTag.trim().toLowerCase().replace(/\s+/g, "-");
      if (clean && !availableTags.includes(clean)) availableTags.push(clean);
      if (clean && !selectedTags.includes(clean)) selectedTags.push(clean);
      availableTags.sort();
    }
    continue;
  }

  if (selectedTags.includes(choice)) {
    selectedTags = selectedTags.filter(t => t !== choice);
  } else {
    selectedTags.push(choice);
  }
}

const dateStr = tp.date.now("YYYY-MM-DD");
const dateTimeStr = tp.date.now("YYYY-MM-DD HH:mm:ss");

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

let frontMatter = `---\nlayout: default\ntitle: "${safeTitle}"\ndescription: "${safeDescription}"\ndate: ${dateTimeStr}`;
if (hasMath) {
  frontMatter += `\nmath: true`;
}
if (selectedTags.length > 0) {
  frontMatter += `\ntags: [${selectedTags.join(", ")}]`;
}
frontMatter += `\n---\n\n`;

tR += frontMatter;
-%>
