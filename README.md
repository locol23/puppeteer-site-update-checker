# puppeteer-site-update-checker

check site update with puppeteer

## Tech Stack

- [puppeteer](https://developers.google.com/web/tools/puppeteer/)

## Prerequisites

- [Node.js](https://nodejs.org/en/)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/locol23/puppeteer-site-update-checker.git
```

### Install dependencies

```bash
cd puppeteer-site-update-checker
npm i
```

### Run

```bash
node <site_name.js>
```

get result JSON

And then

```bash
diff <before_result> <current_result>
```

If there is a difference between the two, you get update

## LICENSE

MIT
