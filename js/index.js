console.log("This is my script")

let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "akshaykumar ",
    "email": "akshaykumar@codewithSam.com",
    "score": 0.64,
    "state": "undeliverable",
    "domain": "codewithSam.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

submitbtn.addEventListener("click", async(e)=>{
    e.preventDefault()
    console.log("Clicked!")
    let key = "ema_live_FIQIvVkzBJD5LaomLR28hLejhjaD3OLt5Ua0J80w"
    let email = document.getElementById("username").value
    let url =`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let response = await res.json()
    let  str=``;
    for(key of Object.keys(result)){
        if(result[key]=="" && result[key]!==""){


            str = str +  `<div>${key} : ${result[key]}<div/>`
        }
    }
    console.log(str)
    resultC.innerHTML = str
})
