const fs = require('fs');
const axios = require('axios');
const yaml = require('js-yaml');

const README_PATH = 'README.md';
const STATS_URL = 'https://github-readme-stats.vercel.app/api/top-langs/?username=FelipeMzero&hide=HTML&langs_count=8&layout=compact&theme=react&border_radius=10&size_weight=0.5&count_weight=0.5&exclude_repo=github-readme-stats';

axios.get(STATS_URL)
  .then(response => {
    const statsImage = `![Top Langs](${response.data})`;
    const readmeContent = fs.readFileSync(README_PATH, 'utf-8');
    const updatedReadme = readmeContent.replace(/!\[Top Langs\]\(.*\)/, statsImage);
    fs.writeFileSync(README_PATH, updatedReadme, 'utf-8');
  })
  .catch(error => {
    console.error(error);
  });
