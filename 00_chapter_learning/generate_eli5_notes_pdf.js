const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
const outputPdf = path.join(__dirname, 'Lab_Exercises_ELI5_Notes.pdf');
const htmlFile = path.join(__dirname, '.Lab_Exercises_ELI5_Notes.html');

const ignoredFolders = new Set(['node_modules', '.git', 'playwright-report']);

function isExercise(file) {
  return /\.(js|ts)$/i.test(file) ||
    file.endsWith(',js') ||
    file.endsWith(',ts');
}

function walk(dir, found = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignoredFolders.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, found);
    else if (isExercise(entry.name) && full !== path.join(__dirname, 'generate_eli5_notes_pdf.js')) found.push(full);
  }
  return found;
}

function esc(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function chapterName(folder) {
  if (folder === 'Home_Work') return 'Homework';
  const name = folder
    .replace(/^\d+_/, '')
    .replace(/,js$/i, '')
    .replaceAll('_', ' ');
  return name || folder;
}

function slug(value) {
  return value.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function titleFromFile(file) {
  const stem = path.basename(file).replace(/\.(js|ts)$/i, '').replace(/,js$/i, '');
  return `${stem} - ${chapterName(path.basename(path.dirname(file)))}`;
}

function commentText(source) {
  const comments = [];
  for (const line of source.split(/\r?\n/)) {
    const text = line.trim();
    if (text.startsWith('//')) {
      const clean = text.replace(/^\/\/\s*/, '').trim();
      if (clean && !comments.includes(clean)) comments.push(clean);
    }
  }
  return comments.slice(0, 3).join(' ');
}

function folderAnalogy(folder) {
  const analogies = {
    '01_chapter_JS_Basics': 'It is like the first simple instructions written on a small whiteboard.',
    '02_chapter_JS_Keywrods_Identifiers': 'It is like choosing clear labels on school files.',
    '03_chapter_JS_Literals': 'It is like recognizing different kinds of written values on a receipt.',
    '04_chapter_JS_Operators': 'It is like the buttons on a calculator or a yes/no checklist.',
    '05_chapter_JS_Incre_Decr_Op': 'It is like moving a counter up or down one step.',
    '06_chapter_if_else_statement_Condition.js': 'It is like choosing a route based on a road sign.',
    '07_chapter_switch': 'It is like a menu that opens one section based on the choice.',
    '08_chapter_User_Input': 'It is like an assistant asking you for information.',
    '09_chapter_loops,js': 'It is like repeating the same task for a list of count numbers.',
    '10_chapter_Loops_While': 'It is like checking a gate again and again until a condition stops it.',
    '11_chapter_Loops_Do_While': 'It is like trying the task once before deciding whether to repeat it.',
    '12_chapter_Arrays': 'It is like shelves in one cupboard, with a number on each shelf.',
    '13_chapter_Functions': 'It is like a small kitchen machine that receives items and gives a result.',
    '14_chapter_Var_Let_Const_Hoisting_TDZ': 'It is like labels on boxes that become available at different moments.',
    '15_chapter_Function_Closure': 'It is like a backpack that keeps private items after leaving home.',
    '16_chapter_String': 'It is like handling the letters and words on a name tag.',
    '17_chapter_Objects': 'It is like a labeled drawer that stores several related details.',
    '18_chapter_Multi_Dimensions_Array': 'It is like a table with both rows and columns.',
    '19_chapter_Callback': 'It is like saying, “When this task finishes, start the next task.”',
    '20_chapter_Promise': 'It is like placing an order and receiving its result later.',
    '21_chapter_Async_Await': 'It is like waiting for a kettle before making tea.',
    '22_chapter_Export_Import': 'It is like borrowing tools from one labeled toolbox in another room.',
    '23_chapter_Class_Objects': 'It is like using a blueprint to make several similar objects.',
    '24_chapter_Playwright': 'It is like a visitor clicking and checking pages inside a real browser.',
    '25_chapter_Class_Object_Constructor': 'It is like a machine setup form that gives each new object its starting values.',
    '26_chapter_OOPS_Encapsulation': 'It is like keeping a wallet’s balance private and offering only safe actions.',
    '27_chapter_OOPS_Inheritance': 'It is like a child page or class receiving useful parts from a parent.',
    '28_chapter_Polymorphism': 'It is like one action name doing the right thing for the current object.',
    '29_chapter_Interview_Questions': 'It is like solving a short workplace puzzle and checking the result.',
    '30_chapter_Typescript': 'It is like a rules checklist for JavaScript values.',
    '31_chapter_Typescript': 'It is like adding shape labels before a machine processes its values.',
    'Home_Work': 'It is like a small practice problem with a clear input and answer.'
  };
  return analogies[folder] || 'It is like a small, focused practice example.';
}

function conceptsFor(source, folder) {
  const rules = [
    [/console\.log/, 'console.log', 'Prints text or values in the terminal or test output.'],
    [/Promise\.allSettled/, 'Promise.allSettled', 'Waits for every Promise and records success or failure separately.'],
    [/Promise\.all/, 'Promise.all', 'Waits for a group of Promises to finish.'],
    [/Promise\.race/, 'Promise.race', 'Returns the first Promise that finishes.'],
    [/async\s+function|async\s*\(/, 'async', 'Marks a function that can wait for Promise results.'],
    [/await\b/, 'await', 'Pauses inside an async function until a Promise gives a result.'],
    [/setTimeout/, 'setTimeout', 'Schedules code to run after a time delay.'],
    [/class\s+\w/, 'class', 'A blueprint for creating objects with data and methods.'],
    [/extends\s+\w/, 'extends', 'Makes a child class reuse and add to a parent class.'],
    [/^|\s#\w/, 'private field', 'A field marked with # that outside code should not access directly.'],
    [/static\s+\w/, 'static member', 'A property or method shared by the class itself rather than one object.'],
    [/constructor\s*\(/, 'constructor', 'Runs once when a new object is created to set starting values.'],
    [/=>/, 'arrow function', 'A shorter way to write a function.'],
    [/function\s+\w/, 'function', 'A named or reusable block of instructions.'],
    [/for\s*\(/, 'for loop', 'Repeats a block a controlled number of times.'],
    [/while\s*\(/, 'while loop', 'Repeats as long as a condition remains true.'],
    [/do\s*\{/, 'do-while loop', 'Runs the block once before checking whether to repeat it.'],
    [/if\s*\(|ternary|\?[^:]*:/, 'condition', 'Chooses which instructions run based on true or false.'],
    [/switch\s*\(/, 'switch', 'Chooses a matching path from a value or condition.'],
    [/\\.map\(/, 'map', 'Creates a new array by transforming each item.'],
    [/\\.filter\(/, 'filter', 'Creates a new array containing items that pass a check.'],
    [/\\.find\(/, 'find', 'Returns the first array item that matches a condition.'],
    [/\\.forEach\(/, 'forEach', 'Runs a function once for each array item.'],
    [/\\.sort\(/, 'sort', 'Changes array item order.'],
    [/\\.slice\(/, 'slice', 'Returns a selected part of an array without changing the original.'],
    [/\\.spread|\[\s*\.\.\./, 'spread', 'Expands an array or object’s contents.'],
    [/new\s+Set/, 'Set', 'Keeps a collection of unique values.'],
    [/import\s/, 'import', 'Brings code or values from another file.'],
    [/export\s/, 'export', 'Makes code or values available to another file.'],
    [/test\(|expect\(/, 'Playwright test', 'A browser test that performs actions and checks a result.'],
    [/never/, 'never', 'A TypeScript type for code that does not finish normally.'],
  ];
  const found = [];
  for (const [pattern, name, explanation] of rules) {
    if (pattern.test(source) && !found.some(item => item.name === name)) {
      found.push({ name, explanation });
    }
  }
  if (!found.length) found.push({ name: 'JavaScript statement', explanation: 'A small instruction for the JavaScript runner.' });
  return found.slice(0, 7);
}

function extractSnippet(source, file) {
  const lines = source.split(/\r?\n/).filter(line => line.trim());
  const keep = [];
  for (const line of lines) {
    const t = line.trim();
    if (t.startsWith('//') || t.startsWith('/*') || t.startsWith('*')) continue;
    keep.push(t);
    if (keep.join('\n').length > 520) break;
  }
  return keep.slice(0, 14).join('\n');
}

function extractConsoleStrings(source) {
  const values = [];
  const re = /console\.log\s*\(([^;]*)\)/g;
  let match;
  while ((match = re.exec(source))) {
    const quoted = [...match[1].matchAll(/["'`]([^"'`]+)["'`]/g)].map(m => m[1]);
    if (quoted.length) values.push(...quoted);
  }
  return [...new Set(values)].slice(0, 8);
}

function expectedOutput(source, file, folder) {
  if (/\.(ts)$/i.test(file) && /\.ts$/.test(file)) {
    if (!/console\.log/.test(source)) {
      if (/throw new Error|while\s*\(\s*true\s*\)/.test(source)) {
        return 'There is no normal successful output. The throwing function throws an Error; the infinite-loop function does not finish.';
      }
      return 'This file mainly demonstrates types or declarations. It may show no terminal text when run directly.';
    }
  }
  if (/test\(|expect\(/.test(source)) {
    return 'The Playwright test report shows pass or fail for each test. Browser navigation and element checks decide the result.';
  }
  if (/prompt-sync|prompt\(|readline/.test(source)) {
    return 'The program asks for input in the terminal. Its later console messages depend on the values you enter.';
  }
  if (/Promise\.reject|catch\s*\(/.test(source)) {
    const strings = extractConsoleStrings(source);
    return strings.length
      ? `One visible result may include text such as: ${strings.map(v => `“${v}”`).join(', ')}.`
      : 'A successful Promise may print one value, while a rejected Promise is handled by catch and prints its error value.';
  }
  const strings = extractConsoleStrings(source);
  if (strings.length) {
    return `The file contains console output with text such as: ${strings.map(v => `“${v}”`).join(', ')}. Values from variables or calculations are also possible.`;
  }
  if (/console\.log/.test(source)) {
    return 'The file prints variable values or calculated results with console.log. The exact value depends on the code and input.';
  }
  return 'No fixed text is explicitly printed. Running it may create a value, change an object, or demonstrate behavior in code.';
}

function mistakeFor(source, folder) {
  const mistakes = [];
  if (/==[^=]/.test(source) && !/===/.test(source)) mistakes.push('Loose equality with == can convert values first. Prefer === when you want the types to match too.');
  if (/for\s*\([^;]*;\s*[^;]*;\s*\)/.test(source) && /while\s*\(\s*true\s*\)|while\s*\(\s*1\s*\)/.test(source)) mistakes.push('An infinite loop must have a valid break or stopping condition.');
  if (/\\.sort\(/.test(source) && /[0-9]/.test(source)) mistakes.push('Sorting numbers needs a compare function such as (a, b) => a - b; default sorting compares text.');
  if (/await/.test(source) && !/async/.test(source)) mistakes.push('await can normally be used only inside an async function or a supported top-level async context.');
  if (/export|import/.test(source)) mistakes.push('Node must support module syntax for your import/export setup. Check file placement and package/module settings.');
  if (/prompt-sync|prompt\(/.test(source)) mistakes.push('Run interactive files in a terminal and install prompt-sync if Node reports that the package is missing.');
  if (/^.*#\w/m.test(source)) mistakes.push('Private # fields are not accessible outside the class, and private names cannot use normal bracket access.');
  if (/test\(|expect\(/.test(source)) mistakes.push('Run Playwright tests from the 24_chapter_Playwright folder and ensure browsers plus network access are available.');
  if (!mistakes.length) mistakes.push('Read the file from top to bottom. Check names, brackets, and missing semicolon-dependent syntax carefully.');
  return mistakes;
}

function walkthrough(source, folder) {
  const steps = ['Read the file from top to bottom and identify the starting instruction.'];
  if (/class\s+\w/.test(source)) steps.push('Create or use the class and its constructor or methods.');
  else if (/function\s+\w/.test(source)) steps.push('Define reusable functions, then notice where the file calls them.');
  else steps.push('Read the values and variables created near the top.');
  if (/if\s*\(|switch\s*\(|ternary/.test(source) || /\?[^:]*:/s.test(source)) steps.push('Check each condition and follow only the matching branch.');
  else if (/for\s*\(|while\s*\(|do\s*\{/.test(source)) steps.push('Repeat the loop body until the loop condition says to stop.');
  else if (/Promise|async|await/.test(source)) steps.push('Follow which work finishes now and which work finishes later.');
  else steps.push('Apply each operation to the value or collection on that line.');
  if (/console\.log|process\.stdout/.test(source)) steps.push('Print the final value or result so the terminal makes it visible.');
  else if (/test\(|expect\(/.test(source)) steps.push('Run the browser action and compare it with the test expectation.');
  else steps.push('Finish with the final assignment, return, throw, or object change.');
  return steps;
}

function description(source, file, folder) {
  const comment = commentText(source).replace(/[=━-]{4,}/g, '').trim();
  const stem = path.basename(file).replace(/\.(js|ts)$/i, '').replace(/,js$/i, '');
  const topic = chapterName(folder);
  let first = `This exercise demonstrates ${topic.replace(/^\w/, c => c.toUpperCase())} using the example in ${stem}.`;
  if (comment) first += ` The file explains: ${comment}.`;
  first = first.replace(/\s+/g, ' ');
  let second = 'It is written as a standalone lab example';
  if (/test\(|expect\(/.test(source)) second += ' for the Playwright test runner';
  else if (/prompt-sync|prompt\(|readline/.test(source)) second += ' that may ask for terminal input';
  else if (/Promise|async|await/.test(source)) second += ' that shows timing or a later result';
  second += '.';
  return `${first} ${second}`;
}

function knownIssues(file, source) {
  const issues = [];
  if (file.endsWith(',js') || file.endsWith(',ts')) issues.push('This unusual filename does not look like a normal extension. Run it through Node with the full quoted path if needed.');
  if (/goToLooginPage/.test(source) && /goToLoginPage/.test(source)) issues.push('The definition and call use different spellings: goToLooginPage versus goToLoginPage.');
  if (/!===/.test(source)) issues.push('This file contains !===, which is not valid JavaScript syntax.');
  if (/let u$/.test(source)) issues.push('The uninitialized let value becomes undefined.');
  if (/while\s*\(\s*true\s*\)/.test(source) && !/break/.test(source)) issues.push('The loop can run forever unless the process is stopped.');
  return issues;
}

const exerciseFiles = walk(root).sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase())
);

const grouped = new Map();
for (const file of exerciseFiles) {
  const rel = path.relative(root, file);
  const parts = rel.split(path.sep);
  const top = parts[0];
  if (!grouped.has(top)) grouped.set(top, []);
  grouped.get(top).push(file);
}

const chapterFolders = [...grouped.keys()].sort((a, b) => {
  const ai = parseInt(a.match(/^(\d+)/)?.[1] || '999');
  const bi = parseInt(b.match(/^(\d+)/)?.[1] || '999');
  if (ai !== bi) return ai - bi;
  return a.localeCompare(b);
});

let html = `<!doctype html><html><head><meta charset="utf-8"><title>Lab Exercises ELI5 Notes</title>
<style>
@page { size: A4; margin: 16mm 14mm 18mm 14mm; @bottom-center { content: "Page " counter(page) " of " counter(pages); font-size: 9pt; color: #64748b; } }
body { font-family: "Segoe UI", Arial, sans-serif; color:#172033; font-size:10.2pt; line-height:1.38; margin:0; }
.cover { height:255mm; display:flex; flex-direction:column; justify-content:center; text-align:center; page-break-after:always; }
.cover h1 { font-size:34pt; margin:0 0 10mm; color:#143b66; }
.cover h2 { font-size:18pt; color:#35658c; font-weight:500; }
.cover p { font-size:12pt; color:#64748b; }
.intro, .toc, .glossary { page-break-after:always; }
h1,h2,h3 { break-after:avoid; }
h1.chapter { color:#fff; background:#1d4e79; padding:12px 14px; border-radius:6px; font-size:22pt; margin-top:0; }
h2.exercise { color:#1d4e79; border-bottom:2px solid #d8e5f0; padding-bottom:5px; margin-top:20px; }
h3 { color:#35596f; margin:11px 0 4px; }
.exercise-note { page-break-before:auto; break-inside:avoid-page; margin-bottom:16px; }
.meta { color:#64748b; font-size:9pt; }
.toc a { color:#1d4e79; text-decoration:none; }
.toc li { margin:4px 0; }
pre { white-space:pre-wrap; word-wrap:break-word; background:#f4f7fa; border-left:4px solid #78a6c8; padding:8px 10px; font-family:"Consolas","Courier New",monospace; font-size:8.4pt; line-break:anywhere; break-inside:avoid-page; }
.label { font-weight:700; color:#35596f; }
.issues { background:#fff7ed; border-left:4px solid #d97706; padding:7px 10px; }
.small { font-size:9pt; color:#64748b; }
.glossary-item { border-bottom:1px solid #e2e8f0; padding:5px 0; }
</style></head><body>`;

html += `<section class="cover"><h1>Playwright-2026</h1><h2>Lab Exercises — ELI5 Study Notes</h2><p>JavaScript, TypeScript, Playwright, and Object-Oriented Programming</p><p>${exerciseFiles.length} exercises</p></section>`;

html += `<section class="intro"><h1>How to use these notes</h1>
<p>Read one exercise at a time. Start with “What it does,” then read the analogy and key concepts. Use the walkthrough before trying the code.</p>
<p>The snippets are deliberately short. They show the important idea, not every line. Run the original file when you want the complete behavior.</p>
<p>Run JavaScript with <code>node filename.js</code>. Run a Playwright test from the Playwright chapter folder. TypeScript examples may need the compiler or a direct type-check command.</p>
<p>The notes explain code as it is written. Known issues are labeled instead of being silently corrected.</p></section>`;

html += `<section class="toc"><h1>Table of Contents</h1><ol>`;
for (const folder of chapterFolders) {
  html += `<li><a href="#${slug(folder)}">${esc(chapterName(folder))} — ${grouped.get(folder).length} exercises</a></li>`;
}
html += `<li><a href="#glossary">Glossary</a></li></ol></section>`;

for (const folder of chapterFolders) {
  html += `<h1 class="chapter" id="${slug(folder)}">${esc(chapterName(folder))}</h1>`;
  html += `<p class="meta">${esc(grouped.get(folder).length)} exercises in ${esc(folder)}</p>`;
  for (const file of grouped.get(folder)) {
    const source = fs.readFileSync(file, 'utf8');
    const rel = path.relative(root, file).replaceAll('\\', '/');
    const baseId = slug(rel);
    const concepts = conceptsFor(source, folder);
    const steps = walkthrough(source, folder);
    const mistakes = mistakeFor(source, folder);
    const issues = knownIssues(file, source);
    html += `<section class="exercise-note" id="${baseId}">
      <h2 class="exercise">${esc(titleFromFile(file))}</h2>
      <div class="meta">${esc(rel)}</div>
      <h3>What it does</h3><p>${esc(description(source, file, folder))}</p>
      <h3>Real-life analogy</h3><p>${esc(folderAnalogy(folder))}</p>
      <h3>Key concepts</h3><ul>${concepts.map(c => `<li><span class="label">${esc(c.name)}:</span> ${esc(c.explanation)}</li>`).join('')}</ul>
      <h3>Step-by-step walkthrough</h3><ol>${steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
      <h3>Important code</h3><pre><code>${esc(extractSnippet(source, file))}</code></pre>
      <h3>Expected output / what you will see</h3><p>${esc(expectedOutput(source, file, folder))}</p>
      <h3>Common mistakes or things to remember</h3><ul>${mistakes.map(m => `<li>${esc(m)}</li>`).join('')}</ul>`;
    if (issues.length) html += `<div class="issues"><span class="label">Known issue:</span> ${esc(issues.join(' '))}</div>`;
    html += `</section>`;
  }
}

html += `<section class="glossary" id="glossary"><h1>Short Glossary</h1>
<div class="glossary-item"><b>Array:</b> A numbered list of values.</div>
<div class="glossary-item"><b>Async:</b> Work that can wait for a result later.</div>
<div class="glossary-item"><b>Callback:</b> A function passed to another function to run later.</div>
<div class="glossary-item"><b>Class:</b> A blueprint for objects.</div>
<div class="glossary-item"><b>Closure:</b> A function that keeps access to values from its earlier scope.</div>
<div class="glossary-item"><b>Constructor:</b> A class method that sets initial object values.</div>
<div class="glossary-item"><b>Encapsulation:</b> Keeping some internal data private and exposing safe actions.</div>
<div class="glossary-item"><b>Function:</b> A reusable block of instructions.</div>
<div class="glossary-item"><b>Hoisting:</b> JavaScript making declarations known earlier in a scope.</div>
<div class="glossary-item"><b>Inheritance:</b> One class receiving properties or methods from another class.</div>
<div class="glossary-item"><b>Loop:</b> Code that repeats while a condition allows it.</div>
<div class="glossary-item"><b>Object:</b> A collection of named properties and methods.</div>
<div class="glossary-item"><b>Promise:</b> A value that may be available now or later.</div>
<div class="glossary-item"><b>Scope:</b> The area of code where a name is visible.</div>
<div class="glossary-item"><b>TDZ:</b> The period before a let or const binding is initialized.</div>
<div class="glossary-item"><b>TypeScript:</b> JavaScript with extra rules for data types.</div>
</section>`;

html += `</body></html>`;
fs.writeFileSync(htmlFile, html, 'utf8');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`file://${htmlFile}`, { waitUntil: 'load' });
  await page.pdf({
    path: outputPdf,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: false
  });
  await browser.close();
  fs.unlinkSync(htmlFile);
  console.log(`Created ${outputPdf}`);
  console.log(`Covered ${exerciseFiles.length} exercises in ${chapterFolders.length} chapter folders.`);
})();
