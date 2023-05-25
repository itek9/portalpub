// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})


$(document).on('ready', function() {

                var knownBrackets = [2,4,8,16,32,64], // brackets with "perfect" proportions (full fields, no byes)

                    exampleTeams  = _.shuffle(["New Jersey Devils","New York Islanders","New York Rangers","Philadelphia Flyers","New Jersey Devils","New York Islanders","New York Rangers","Philadelphia Flyers","New Jersey Devils","New York Islanders","New York Rangers","Philadelphia Flyers","New Jersey Devils","New York Islanders","New York Rangers","Philadelphia Flyers","New Jersey Devils","New York Islanders","New York Rangers","Philadelphia Flyers","New Jersey Devils","New York Islanders","New York Rangers","Philadelphia Flyers","New Jersey Devils","New York Islanders","New York Rangers","Philadelphia Flyers","New Jersey Devils","New York Islanders","New York Rangers","Philadelphia Flyers","New Jersey Devils","New York Islanders","New York Rangers","Philadelphia Flyers","New Jersey Devils","New York Islanders","New York Rangers","Philadelphia Flyers","Pittsburgh Penguins","Boston Bruins","Buffalo Sabres","Montreal Canadiens","Ottawa Senators","Toronto Maple Leafs","Carolina Hurricanes","Florida Panthers","Tampa Bay Lightning","Washington Capitals","Winnipeg Jets","Chicago Blackhawks","Columbus Blue Jackets","Detroit Red Wings","Nashville Predators","St. Louis Blues","Calgary Flames","Colorado Avalanche","Edmonton Oilers","Minnesota Wild","Vancouver Canucks","Anaheim Ducks","Dallas Stars","Los Angeles Kings","Phoenix Coyotes","San Jose Sharks","Montreal Wanderers","Quebec Nordiques","Hartford Whalers"]), // because a bracket needs some teams!
                    bracketCount = 0;console.log($(exampleTeams).length);

                /*
                 * Build our bracket "model"
                 */
                function getBracket(base) {

                    var closest         = _.find(knownBrackets, function(k) { return k>=base; }),
                        byes            = closest-base;

                    if(byes>0)  base = closest;

                    var brackets    = [],
                        round       = 1,
                        baseT       = base/2,
                        baseC       = base/2,
                        teamMark    = 0,
                        nextInc     = base/2;

                    for(i=1;i<=(base-1);i++) {
                        var baseR = i/baseT,
                            isBye = false;

                        if(byes>0 && (i%2!=0 || byes>=(baseT-i))) {
                            isBye = true;
                            byes--;
                        }

                        var last = _.map(_.filter(brackets, function(b) { return b.nextGame == i; }), function(b) { return {game:b.bracketNo,teams:b.teamnames}; });

                        brackets.push({
                            lastGames:  round==1 ? null : [last[0].game,last[1].game],
                            nextGame:   nextInc+i>base-1?null:nextInc+i,
                            teamnames:  round==1 ? [exampleTeams[teamMark],exampleTeams[teamMark+1]] : [last[0].teams[_.random(1)],last[1].teams[_.random(1)]],
                            bracketNo:  i,
                            roundNo:    round,
                            bye:        isBye
                        });
                        teamMark+=2;
                        if(i%2!=0)  nextInc--;
                        while(baseR>=1) {
                            round++;
                            baseC/= 2;
                            baseT = baseT + baseC;
                            baseR = i/baseT;
                        }
                    }

                    renderBrackets(brackets);
                }

                /*
                 * Inject our brackets
                 */
                function renderBrackets(struct) {
                    var groupCount  = _.uniq(_.map(struct, function(s) { return s.roundNo; })).length;

                    var group   = $('<div class="group'+(groupCount+1)+'" id="b'+bracketCount+'"></div>'),
                        grouped = _.groupBy(struct, function(s) { return s.roundNo; });
                    for(g=1;g<=groupCount;g++) {
                        var round = $('<div class="r'+g+'"></div>');
                        _.each(grouped[g], function(gg) {
                            if(gg.bye)
                                round.append('<div></div>');
                            else
                                round.append('<div><div class="bracketbox"><span class="info1">'+gg.bracketNo+'</span><span class="info2">'+gg.bracketNo+'</span><span class="teama">'+gg.teamnames[0]+'</span><span class="teamb">'+gg.teamnames[1]+'</span></div></div>');
                        });
                        group.append(round);
                    }
                    group.append('<div class="r'+(groupCount+1)+'"><div class="final"><div class="bracketbox"><span class="teamc">'+_.last(struct).teamnames[_.random(1)]+'</span></div></div></div>');
                    $('#brackets').append(group);

                    bracketCount++;
                    $('html,body').animate({
                        scrollTop: $("#b"+(bracketCount-1)).offset().top
                    });
                }

                $('#add').on('click', function() {
                    var opts = parseInt(prompt('Bracket size (number of teams):',32));

                    if(!_.isNaN(opts) && opts <= _.last(knownBrackets))
                        getBracket(opts);
                    else
                        alert('The bracket size you specified is not currently supported.');
                        $('#clear').off('click');
                        $('#clear').on('click',function(){
                            $('#brackets').html("");
                        });
                });


            });



 /*tek code*/
 let url = 'https://docs.google.com/spreadsheets/d/1yg95oYfv4RJYUGFpG3c3RjIMvA7Vf5FzkfrRzJn5bKQ/edit#gid=0';
const query = encodeURIComponent('Select A');
url = url +  + query;

fetch(url)
.then(res => res.text())
.then(rep =>{

const data = JSON.parse(rep.substr(47).slice(0,-2));

const row01 = document.createElement('tr');
Player1.append(row01);
const row02 = document.createElement('tr')  ;
Player2.append(row02);
const row03 = document.createElement('tr');
Player3.append(row03);
const row04 = document.createElement('tr');
Player4.append(row04);
const row05 = document.createElement('tr');
Player5.append(row05);
const row06 = document.createElement('tr');
Player6.append(row06);
const row07 = document.createElement('tr');
Player7.append(row07);
const row08 = document.createElement('tr');
Player8.append(row08);

data.table.cols.forEach((heading)=>{
const cell = document.createElement('option');
cell.textContent = heading.label;

row01.append(cell);
row02.append(cell);
row03.append(cell);
row04.append(cell);
row05.append(cell);
row06.append(cell);
row07.append(cell);
row08.append(cell);
})

data.table.rows.forEach((main)=>{
const container1 = document.createElement('option');
Player1.append(container1);

const container2 = document.createElement('option');
Player2.append(container2);

const container3 = document.createElement('option');
Player3.append(container3);

const container4 = document.createElement('option');
Player4.append(container4);

const container5 = document.createElement('option');
Player5.append(container5);

const container6 = document.createElement('option');
Player6.append(container6);

const container7 = document.createElement('option');
Player7.append(container7);

const container8 = document.createElement('option');
Player8.append(container8);


main.c.forEach((element)=> {

    const cell1 =  document.createElement('option');
    cell1.textContent = element.v;

    const cell2 =  document.createElement('option');
    cell2.textContent = element.v;

    const cell3 =  document.createElement('option');
    cell3.textContent = element.v;

    const cell4 =  document.createElement('option');
    cell4.textContent = element.v;

    const cell5 =  document.createElement('option');
    cell5.textContent = element.v;

    const cell6 =  document.createElement('option');
    cell6.textContent = element.v;

    const cell7 =  document.createElement('option');
    cell7.textContent = element.v;

    const cell8 =  document.createElement('option');
    cell8.textContent = element.v;


    container1.append(cell1);
    container2.append(cell2);
    container3.append(cell3);
    container4.append(cell4);
    container5.append(cell5);
    container6.append(cell6);
    container7.append(cell7);
    container8.append(cell8);

})
})
})

const Result00 = document.getElementById("Result0");
//------------------------Box 1-------------------------------
{
    const Res01 = document.getElementById("Result1");
    const Res02 = document.getElementById("Result2");

    const Name01 = document.getElementById("Player1");
    const Name02 = document.getElementById("Player2");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player9").innerHTML = Name01.value;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Player9").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player9").innerHTML = Name02.value;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Player9").innerHTML = "";            
        }
    })

}
//------------------------Box 2-------------------------------
{
    const Res01 = document.getElementById("Result3");
    const Res02 = document.getElementById("Result4");

    const Name01 = document.getElementById("Player3");
    const Name02 = document.getElementById("Player4");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player10").innerHTML = Name01.value;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Player10").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player10").innerHTML = Name02.value;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Player10").innerHTML = "";            
        }
    })

}
//------------------------Box 3-------------------------------
{
    const Res01 = document.getElementById("Result5");
    const Res02 = document.getElementById("Result6");

    const Name01 = document.getElementById("Player5");
    const Name02 = document.getElementById("Player6");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player11").innerHTML = Name01.value;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Player11").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player11").innerHTML = Name02.value;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Player11").innerHTML = "";            
        }
    })

}
//------------------------Box 4-------------------------------
{
    const Res01 = document.getElementById("Result7");
    const Res02 = document.getElementById("Result8");

    const Name01 = document.getElementById("Player7");
    const Name02 = document.getElementById("Player8");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player12").innerHTML = Name01.value;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Player12").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player12").innerHTML = Name02.value;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Player12").innerHTML = "";            
        }
    })

}

//------------------------Semi Finals Box 1-------------------------------

{
    const Res01 = document.getElementById("Result9");
    const Res02 = document.getElementById("Result10");

    const Name01 = document.getElementById("Player9");
    const Name02 = document.getElementById("Player10");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player13").innerHTML = Name01.innerHTML;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Player13").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player13").innerHTML = Name02.innerHTML;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Player13").innerHTML = "";            
        }
    })

}
//------------------------Semi Finals Box 2-------------------------------
{
    const Res01 = document.getElementById("Result11");
    const Res02 = document.getElementById("Result12");

    const Name01 = document.getElementById("Player11");
    const Name02 = document.getElementById("Player12");

    Res01.addEventListener("change",()=>{
        let Result01 = parseInt(Res01.value);

        if(Result01 === parseInt(Result00.value)){
            document.getElementById("Player14").innerHTML = Name01.innerHTML;

        } else if (Result01 != parseInt(Result00.value)){
            document.getElementById("Player14").innerHTML = "";            
        }
    })
    Res02.addEventListener("change",()=>{
        let Result02 = parseInt(Res02.value);

        if(Result02 === parseInt(Result00.value)){
            document.getElementById("Player14").innerHTML = Name02.innerHTML;

        } else if (Result02 != parseInt(Result00.value)){
            document.getElementById("Player14").innerHTML = "";            
        }
    })

}