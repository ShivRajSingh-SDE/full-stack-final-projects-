const review = [
    {
        iD: 0,
        pics: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        names: "Yash",
        hobby: "Game Devloper",
        info: "Love to devlope game and wana be a game devloper in future. currently learning c++ at begining phase",
        follow: "https://www.gamedevelopment.blog/"
    },
    {
        iD: 1,
        pics: "img/shivam.png",
        names: "shivam",
        hobby: "Mental ",
        info: "A perosn who don't give a shit about what's happing around him.",
        follow: "https://www.frontiersin.org/articles/10.3389/fpsyt.2020.563860/full"
    },
    {
        iD: 2,
        pics: "img/shiv.png",
        names: "shiv",
        hobby: "Rank = Nothing",
        info: "For Shiv, coding is not just about solving problems. It's about pushing the limits of what's possible, and creating something truly extraordinary.",
        follow: "https://www.instagram.com/_code__freak/"
    },
    {
        iD: 3,
        pics: "img/vaibhav.png",
        names: "vaibhave",
        hobby: "Book Lover",
        info: "calm in Nature 🤌",
        follow: "https://www.instagram.com/vaibhav__g1/"
    },
    {
        iD: 4,
        pics: "img/pic.jpg",
        names: "Ayush",
        hobby: "Gym Lover",
        info: "Fitness is not about being better than someone else. It's about being better than you used to be.",
        follow: "https://www.instagram.com/aayush4ever_/"
    }
]



function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 5);
    
    while (usedNumbers.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 5);
    }
    
    usedNumbers.push(randomNumber);
    return randomNumber;
}
var num = getRandomNumber;


const next1 = () => {
    const num = Math.floor(Math.random() * 5);
    const pic = document.getElementById("pic");
    const name = document.getElementById("name");
    const hobby = document.getElementById("Hobby");
    const info = document.getElementById("info");
    const follow = document.getElementById("follow");

    let currentReview = review.find(review => review.iD === num);
    pic.src = currentReview.pics;
    name.textContent = currentReview.names;
    hobby.textContent = currentReview.hobby;
    info.textContent = currentReview.info;
    follow.href = currentReview.follow;

}

