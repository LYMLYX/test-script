#! /usr/bin/env node
var fs = require('fs')

var dirName = process.argv[2]
fs.mkdirSync("./" + dirName, function (err){})
process.chdir("./"+dirName)
fs.mkdirSync('css')
fs.mkdirSync('js')

fs.writeFileSync('./index.html', '<!DOCTYPE html>\n<title>Hello</title>\n', 'utf8')
fs.appendFileSync('./index.html','<link href=\"css/style.css\" rel=\"stylesheet\" type=\"text/css\">\n')
fs.appendFileSync('./index.html', '<h1>Hi</h1>')
fs.appendFileSync('./index.html', '<script src =\"js/main.js\"></script>')

fs.writeFileSync("css/style.css","h1{color:red}")
fs.writeFileSync("./js/main.js","var string =\"hello World\"\nalert(string)")

console.log('创建目录成功')
process.exit(0)
