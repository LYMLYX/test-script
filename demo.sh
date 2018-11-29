if [ -d $1 ]; then
echo 'error:dir exists'
    exit 1
else
    mkdir $1
    cd $1
    mkdir css js
    touch index.html css/style.css js/main.js
    echo "<!DOCTYPE html>\n<title>Hello</title>" >> index.html
    echo "<link href="\"css/style.css"\" rel="\"stylesheet"\" type="\"text/css"\" />" >> index.html
    echo "<h1>Hi</h1>" >> index.html
    echo "<script src=\"js/main.js\"></script>" >> index.html
    echo "h1{color:red}" >> css/style.css
    echo "var string =\"hello World\"\nalert(string)">> js/main.js 
    echo 'success'
    exit 0
fi
