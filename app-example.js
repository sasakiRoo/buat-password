//A Javascript Program to illustrate Caesar Cipher Technique

    // Encrypts text using a shift od s
    function encrypt(text, s)
    {
        let result=""
        for (let i = 0; i < text.length; i++)
        {
            let char = text[i];
            if (char.toUpperCase(text[i]))
            {
                let ch = String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
                result += ch;
            }
            else
            {
                let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
                result += ch;
            }
        }
        return result;
    }

    // Driver code
    let text = "ATTACKATONCE";
    let s = 4;
    console.log(`text: ${text}`)
    console.log(`shift: ${s}`)
    console.log(`encrypt: ${encrypt(text, s)}`)
    // document.write("Text : " + text + "<br>");
    // document.write("Shift : " + s + "<br>");
    // document.write("Cipher: " + encrypt(text, s) + "<br>");

    // This code is contributed by avanitrachhadiya2155

