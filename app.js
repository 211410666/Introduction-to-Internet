const answers = document.querySelector('.answer');
const ansBtn = document.querySelectorAll('.ansBtn');
const topic_text = document.querySelector('.topic_text');
const status_text = document.querySelector('.status_text');
const ans_rate = document.querySelector('.ans_rate');

const url = './topic.json';
const reans = [2,2,0,0,1,3,0,3,0,1,1,3,0,3,0,1,2,1,1,0,0,0,2,1,3,1,1,1,3,2,0,0,0,0,3,1,1,2,3,0,1,3,3,0,1,3,2,3,0,1,0,1,1,0,1,2,2,3,1,3,0,1,2,3,3,1,0,2,0,2,0,2,0,2,1,2,0,3,2,3,3,0,2,2,3,1,0,3,1,1,0,1,3,2,2,1,2,0,2,0,0,2,0,3,1,3,3,1,3,2,0,1,0,1,0,0,3,1,1,1,3,0,3,2,0,2,1,2,3,3,0,3,0,1,4,0,2,5,2,3,3,3,1,0,3,1,2,3,2,2,3,3,3,1,1,2,3,0,0,0,2,2,2,0,2,0];
let data,r;
let count = 0;
let R_count =0;

const GetRandomInt = () => {
    return (Math.floor(Math.random() * 166) );
}

const BOMansRate =()=>{
    if(count!=0){
        ans_rate.textContent = `答對率: ${R_count}/${count} = ${(R_count*100/count).toFixed(1)}%`;
    }
    
}

window.addEventListener('DOMContentLoaded', async () => {
    data = await getData();
    BOMansRate();
    console.log(data);
    r = GetRandomInt();
    let answer = data[r].answers.split('@').filter(el=>el);
    console.log(answer);
    getAnsBtn(answer);
    getTopciText(data[r].topic);
});

ansBtn.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        count++;
        if(Number(e.currentTarget.id)===reans[r]){
            R_count++;
            BOMstatus('');
            r=GetRandomInt();
            let answer = data[r].answers.split('@').filter(el=>el);
            getAnsBtn(answer);
            getTopciText(data[r].topic);
        }
        else{
            BOMstatus('答錯了,再選一次');
        }
        BOMansRate();
    });
});

const BOMstatus = (stauts)=>{
    status_text.textContent = stauts;
}

const getData = async() => {
    try {
        const res = await fetch(url);
        const temp = res.json();
        return temp;
    } catch (err) {
        console.log(err);
    }
}

const getAnsBtn = (answer) => {
    ansBtn.forEach((btn,index) => {
        if (index < answer.length) {
            btn.classList.remove('hidden');
            btn.textContent = answer[index];
        }
        else{
            btn.classList.add('hidden');
        }
    });
};

const getTopciText = (topic) => {
    topic_text.textContent = topic;
};