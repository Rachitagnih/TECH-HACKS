let url = "https://kontests.net/api/v1/all";

let imgs = {
    "HackerEarth" : "https://static-fastly.hackerearth.com/newton/static/images/he-header-logo.svg" ,
    "CodeForces"  : "https://codeforces.org/s/85770/images/codeforces-sponsored-by-ton.png" ,
    "HackerRank"  : "https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png" , 
    "CodeChef"    : "https://cdn.codechef.com/images/cc-logo.svg" , 
    "AtCoder"     : "https://i.ytimg.com/vi/2kGhxVdSlTQ/mqdefault.jpg" , 
    "LeetCode"    : "https://leetcode.com/static/webpack_bundles/images/logo-dark.e99485d9b.svg",
    "CodeForces::Gym" : "https://codeforces.org/s/85770/images/codeforces-sponsored-by-ton.png"
};


let response = fetch(url);
response.then((contests) => {
    return contests.json();
}).then((contests) => {
    console.log(contests);
    update = "";
    for(item in contests){
        console.log(contests[item].name);
        update += `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <img src=${imgs[contests[item].site]} alt="...">
            <h5 class="card-title">Contest Name : ${contests[item].name}</h5>
            <h5 class="card-title">Site Name : ${contests[item].site}</h5>
            <p class="card-text">Start Time : ${contests[item].start_time}</p>
            <p class="card-text">End Time : ${contests[item].end_time}</p>
            <div class = "btn">
                <a href="${contests[item].url}" >Visit Page</a>
            </div>
            </div>
        </div>
        `

    }
    CardContainer.innerHTML = update;
})










