'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton=document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided= document.getElementById('tweet-area');
function removeAllChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

assessmentButton.onclick=()=>{
    const userName=userNameInput.value;
    if(userName.lenghth===0){
    return;
    }
        removeAllChildren(resultDivided);
        const header = document.createElement('h3');
        header.innerText='診断結果';
        resultDivided.appendChild(header);

        const paragraph = document.createElement('p');
        const result =assessment(userName);
        paragraph.innerText=result;
        resultDivided.appendChild(paragraph);
//while(resultDivided.firstChild){
  //  resultDivided.removeChild(resultDivided.firstChild);
//}

//const header = document.createElement('h3');
removeAllChildren(tweetDivided);
const anchor =document.createElement('a');
const hrefValue=
    'https://twitter.com/intent/tweet?button_hashtag='+
     encodeURIComponent('あなたのいいところ')+
     '&ref_src=twsrc%5Etfw';
anchor.setAttribute('href',hrefValue);
anchor.className='twitter-hashtag-button';
anchor.setAttribute('data-text',result);
anchor.innerText='Tweet#あなたのいいところ';
tweetDivided.appendChild(anchor);
    const script =document.createElement('script');
    script.setAttribute('src',
        'https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);
};
const answers=[
    '{userName}のいいところは｛userName｝の得著的な声は皆を引付心に残ります',
    '{userName}のいいところはまなざしです。{userName}にみつめられた人は、きになってしょうがないでしょう。',
    '{userName}のいいところは｛userName｝の得著的な声は皆を引付心に残ります',
    '{userName}のいいところはまなざしです。{userName}にみつめられた人は、きになってしょうがないでしょう。',
    '{userName}のいいところは｛userName｝の得著的な声は皆を引付心に残ります',
    '{userName}のいいところはまなざしです。{userName}にみつめられた人は、きになってしょうがないでしょう。',
    '{userName}のいいところは｛userName｝の得著的な声は皆を引付心に残ります',
    '{userName}のいいところはまなざしです。{userName}にみつめられた人は、きになってしょうがないでしょう。',
    '{userName}のいいところは｛userName｝の得著的な声は皆を引付心に残ります',
    '{userName}のいいところはまなざしです。{userName}にみつめられた人は、きになってしょうがないでしょう。',
    '{userName}のいいところは｛userName｝の得著的な声は皆を引付心に残ります',
    '{userName}のいいところはまなざしです。{userName}にみつめられた人は、きになってしょうがないでしょう。',
    '{userName}のいいところは｛userName｝の得著的な声は皆を引付心に残ります',
    '{userName}のいいところはまなざしです。{userName}にみつめられた人は、きになってしょうがないでしょう。',
    '{userName}のいいところは｛userName｝の得著的な声は皆を引付心に残ります',
    '{userName}のいいところはまなざしです。{userName}にみつめられた人は、きになってしょうがないでしょう。',
    '{userName}のいいところは｛userName｝の得著的な声は皆を引付心に残ります',
    '{userName}のいいところはまなざしです。{userName}にみつめられた人は、きになってしょうがないでしょう。'

];

function assessment(userName){
   //全文字のコード番号を取得してそれを足し合わせる
    let sumOfcharCode=0;
    for(let i =0;i<userName.length;i++){
        sumOfcharCode=sumOfcharCode+userName.charCodeAt(i);
    }
    //文字のコード番号の合計を回答の数で割って添え字の数値を求める
    const index = sumOfcharCode % answers.length; 
    let result =answers[index];
    result=result.replace(/\{userName\}/g,userName);
    //todo {userName}をユーザーの名前に置き換える
    return result;
}


