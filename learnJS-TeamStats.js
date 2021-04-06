//GOAL: We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.
//Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.

const team = {
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 84,
      opponentPoints: 38
    },
    {
      opponent: 'Jets',
      teamPoints: 90,
      opponentPoints: 103
    },
    {
      opponent: 'Rams',
      teamPoints: 39,
      opponentPoints: 20
    }
  ],
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Andy',
      lastName: 'Phillips',
      age: 12
    },
    {
    firstName: 'Kelly',
    lastName: 'Arnold',
    age: 10
    }
  ],
  get players(){
    return this._players
  },
  get games(){
    return this._games
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this.players.push(player)
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this.games.push(game)
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players)

team.addGame('Hawks', 67, 39);
team.addGame('Falcons', 98, 77);
team.addGame('Braves', 24, 43);

console.log(team.games)
