const button1 = document.getElementById("button1");
const input = document.getElementById("input1");
const cardResult= document.getElementById("cardResult");

const cardScore= document.getElementById("cardResult1");
const cardTone= document.getElementById("cardResult2");
const ErrorMessage= document.getElementById("errorM");


button1.addEventListener("click", async ()=>{
    console.log(input.value);
    let resultjson = await getResult();
    if(resultjson !== []) {
        ErrorMessage.style.visibility = "hidden";
        cardScore.innerText =  "Score: " + resultjson.score;
        cardTone.innerText = "Tone: " +resultjson.tone_name;
        cardResult.style.visibility = "visible";
    } else {
        ErrorMessage.style.visibility = "visible";
    }

})

async function getResult() {
    let result
    myjson = {
        input : input.value
    }
    await fetch('http://toneanalyzernode.mybluemix.net/analyze' ,{
        method: 'POST',
        body: JSON.stringify(myjson),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(json => {
        result = json[0];
    })
    .catch(err => console.log(err));

    return result;

}