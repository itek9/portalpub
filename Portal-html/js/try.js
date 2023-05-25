<!DOCTYPE html>
<html>
<head>
    <title>Tournament Bracket</title>
    <style>
        .tournament {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .round {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
        }
        
        .team {
            border: 1px solid #ccc;
            padding: 10px;
            width: 150px;
            text-align: center;
            cursor: pointer;
        }
        
        .winner {
            background-color: #ffcc00;
        }
        
        .selected {
            background-color: #99ccff;
        }
    </style>
    <script>
        function highlightTeam(teamElement) {
            var teams = document.getElementsByClassName("team");

            for (var i = 0; i < teams.length; i++) {
                teams[i].classList.remove("selected");
            }

            teamElement.classList.add("selected");
        }
    </script>
</head>
<body>
    <div class="tournament">
        <div class="round">
            <div class="team" onclick="highlightTeam(this)">Team A</div>
            <div class="team winner" onclick="highlightTeam(this)">Winner A</div>
        </div>
        <div class="round">
            <div class="team" onclick="highlightTeam(this)">Team B</div>
            <div class="team" onclick="highlightTeam(this)">Team C</div>
        </div>
        <div class="round">
            <div class="team winner" onclick="highlightTeam(this)">Winner B</div>
        </div>
        <div class="round">
            <div class="team" onclick="highlightTeam(this)">Team D</div>
            <div class="team" onclick="highlightTeam(this)">Team E</div>
        </div>
        <div class="round">
            <div class="team winner" onclick="highlightTeam(this)">Winner C</div>
        </div>
        <div class="round">
            <div class="team winner" onclick="highlightTeam(this)">Final Winner</div>
        </div>
    </div>
</body>
</html>