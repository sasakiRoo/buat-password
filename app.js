const inputPassword = document.querySelector('.inputPassword')
const angkaShift = document.querySelector('.inputShift')
const buttonGenerate = document.querySelector('.generatePassword')
const outputBox = document.querySelector('.outputBox')
const outputWrapper = document.querySelector('.outputBoxWrapper')
const loading = document.querySelector('.loading')
const btnText = document.querySelector('.textBtn')
const copyBtn = document.querySelector('.copyPassBtn')

loading.style.display = 'none'

outputWrapper.style.visibility = 'hidden'
function encrypt(string, shift){
    let result = "";

    for (let i = 0; i < string.length; ++i){
        let char = string[i]
        if (char.toUpperCase(string[i])){
            let ch = String.fromCharCode((char.charCodeAt(0) + shift - 65) % 26 + 65)
            result += ch.toLowerCase()
        }else{
            let ch = String.fromCharCode((char.charCodeAt(0) + shift - 97) % 26 + 97)
            result += ch
        }
    }
    return result
}


function isInputEmpty(){
    if (inputPassword.value.length < 8){
        alert('jumlah password yang Anda masukan kurang dari 8, silakan coba lagi');
        return false
    }
    if (angkaShift.value == 0){
        alert('anda memasukan 0, silakan coba lagi')
        return false
    }
    if (angkaShift.value > 25){
        alert('lebih dari 25, silakan coba lagi')
        return false
    }
    if (!inputPassword.value || !angkaShift.value){
        alert('jangan biarkan kolom kosong!')
        timeLoadOff()
        return false
    }else{
        tunggu()
        timeLoadOn()
    }
}

buttonGenerate.addEventListener('click', e => {
    e.preventDefault()
    isInputEmpty()
})

copyBtn.addEventListener('click', function(e){
    e.preventDefault()
    outputBox.focus()
    outputBox.select()

    try {
        const successful = document.execCommand('copy')
        const msg = successful ? 'berhasil tersalin' : 'gagal disalin'
        alert(`teks telah ${msg}`)
    } catch(err) {
        alert('oops, tidak bisa tersalin');
    }
})



function tunggu(){
    setTimeout(function(){
        const show = inputPassword.value
        const sh = angkaShift.value
        timeLoadOff()
        outputWrapper.style.visibility = 'visible'
        outputBox.innerText = encrypt(show, sh)
    }, 2000)
}

function timeLoadOn(){
    setTimeout(function(){
        loading.style.display = 'block'
        btnText.style.display = 'none'
    },500)
}
function timeLoadOff(){
    loading.style.display = 'none'
    btnText.style.display = 'block'
}
