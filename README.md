# Playwright-2026

A collection of beginner JavaScript lessons and practice exercises. The repository is organized by lesson topic and uses small, standalone Node.js scripts rather than a single application.

## Requirements

- Node.js
- npm

Some interactive examples use the `prompt-sync` package, which is declared in `package.json`.

## Setup

From the repository root, install the dependencies:

```sh
npm install
```

## Running an exercise

Run an individual JavaScript file with Node.js, using its path relative to the repository root. For example:

```sh
node Home_Work/04_FizzBuzz.js
```

Interactive scripts prompt for input in the terminal. Run one exercise at a time; these files are independent examples, not a single program.

## Repository layout

| Folder | Contents |
| --- | --- |
| `01_chapter_JS_Basics/` | Basic JavaScript and math |
| `02_chapter_JS_Keywrods_Identifiers/` | JavaScript engine, keywords, identifiers, and comments |
| `03_chapter_JS_Literals/` | Literals, numbers, `null`, and `undefined` |
| `04_chapter_JS_Operators/` | Arithmetic, comparison, logical, assignment, and conditional operators |
| `05_chapter_JS_Incre_Decr_Op/` | Increment, decrement, and nullish operations |
| `06_chapter_if_else_statement_Condition.js/` | `if`/`else` conditionals |
| `07_chapter_switch/` | `switch` statements and practice questions |
| `08_chapter_User_Input/` | User input and basic file-reading examples |
| `09_chapter_loops,js/` | `for` loops and loop exercises |
| `10_chapter_Loops_While/` | `while` loops |
| `11_chapter_Loops_Do_While/` | `do-while` loops and nested loops |
| `Home_Work/` | Standalone practice programs, including FizzBuzz, a grade calculator, leap-year, and triangle exercises |

The numbered lesson files progress through introductory JavaScript syntax, operators and control flow, input, and loops.

## Tests

There is currently no automated test suite. The `npm test` script in `package.json` is a placeholder. Validate an exercise by running its individual script with Node.js and trying appropriate inputs.

Some loop examples are designed to demonstrate loop behavior and may not terminate for every input. Review a script before running it if you are unsure.

## Push History

- 2026-10-17 — Add project README and document push history workflow; files: `README.md`, `.github/prompts/push.prompt.md`.
