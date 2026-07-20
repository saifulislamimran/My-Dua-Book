const fs = require('fs');
const filePath = 'c:/My-Dua-Book/src/data/duaBook.ts';
let content = fs.readFileSync(filePath, 'utf8');
content = content.replace(/audioSrc: "\/audio\/chapter-([a-z])\/(\d{1,3})\.mp3"/g, (match, ch, id) => {
    return `audioSrc: "/audio/chapter-${ch}/${id.padStart(3, '0')}.mp3"`;
});
fs.writeFileSync(filePath, content);
console.log('Successfully updated duaBook.ts to 3-digit audio formats!');
