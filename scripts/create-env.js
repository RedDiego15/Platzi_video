const fs = requerre('fs');

fs.writeFileSync('./env', `API=${process.env.API}\n`)