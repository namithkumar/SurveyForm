class Voter {
    constructor(){

    }

    getCount()
    { var voterCountRef = database.ref('voterCount');
     voterCountRef.on("value",function(data){ voterCount = data.val(); }) }

     updateCount(count)
     { database.ref('/').update({ voterCount: count }); }

     update(email)
     {var voterIndex = "voter" + voterCount
     database.ref('voterIndex').set({ mailid: email });}

     updateAns1(ans1)
     {var voterIndex = "voter" + voterCount
     database.ref('voterIndex').set({ answer1: ans1 });}

     updateAns2(ans2)
     {var voterIndex = "voter" + voterCount
     database.ref('voterIndex').set({ answer2: ans2 });}

     updateAns3(ans3)
     {var voterIndex = "voter" + voterCount
     database.ref('voterIndex').set({ answer3: ans3 });}
}