const fs = require('fs');

let fileContent = fs.readFileSync('data.js', 'utf8');

// Tostlar (ts1)
fileContent = fileContent.replace(/1528735000313-039ec3a473f0/g, '1485962398705-ef6a13c41e8f');

// Gözlemeler (gz1 and others in there)
fileContent = fileContent.replace(/1563379091339-03b21ab4a4f8/g, '1558961363-fa8fdf82db35');
fileContent = fileContent.replace(/1628172901991-3e54911e3b6a/g, '1558961363-fa8fdf82db35');
fileContent = fileContent.replace(/1628172898846-953e5eeb43ce/g, '1558961363-fa8fdf82db35');
fileContent = fileContent.replace(/1628840042765-356cda07504e/g, '1558961363-fa8fdf82db35');

// Geleneksel Kahve
fileContent = fileContent.replace(/1563821034-7db3dfeb4d52/g, '1541167760496-1628856ab772');

// Çay
fileContent = fileContent.replace(/1626015578701-49fc7cba9e03/g, '1558160074-4d7d8bdf4256');

// Bump VERSION again to ensure refresh
fileContent = fileContent.replace(/DATA_VERSION = "4"/, 'DATA_VERSION = "5"');

fs.writeFileSync('data.js', fileContent);
