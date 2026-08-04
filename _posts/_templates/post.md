<%*
const title = await tp.system.prompt("Post title", "", true);
const description = await tp.system.prompt("One-line description", "", true);
const hasMath = await tp.system.suggester(["No", "Yes"], [false, true], true, "Does this post use math (MathJax)?");

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
frontMatter += `\n---\n\n`;

tR += frontMatter;
-%>
