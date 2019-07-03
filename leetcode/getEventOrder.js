function getEventsOder(teamA, teamB, eventsA, eventsB) {
  let gameEvents = [];

  // Add teamA Events to gameEvents
  gameEvents = addTeamEventsToGameEvents(teamA, eventsA, gameEvents);

  // Add teamB events to gameEvents
  gameEvents = addTeamEventsToGameEvents(teamB, eventsB, gameEvents);

  // Sort the gameEvents based on time
  gameEvents = gameEvents.sort(function(a, b) {
    return a.time - b.time;
  });

  // Print each sorted event on a new line
  var gameResults = "";
  for (let i = 0; i < gameEvents.length; i++) {
    gameResults += gameEvents[i].team + " " + gameEvents[i].event + "\n";
  }
  return gameResults;
}

function addTeamEventsToGameEvents(teamName, teamEvents, gameEvents) {
  // Iterate through the teamEvents
  for (let i = 0; i < teamEvents.length; i++) {
    var time1;
    // We need to filter out the time for each event in order to sort them
    let event = teamEvents[i].split(" ");
    // There are three different cases. The first is when the player name is only the first name and the event is not a substitute
    if (event.length === 3) {
      time1 = parseInt(event[1]);
      // The second is when there is either a player first name and last name or when there is a substitut player event
    } else if (event.length === 4) {
      var numTime = parseInt(event[2]);
      if (numTime) {
        time1 = parseInt(event[2]);
      } else {
        time1 = parseInt(event[1]);
      }
    }
    event = event.join(" ");
    // Here, we will push an object that will contain the parsed Time for the event, the event itself, and the teamName.
    // Now, we have everything we need so that we can sort the events and also print out each event on a new line.
    gameEvents.push({ time: time1, event: event, team: teamName });
  }
  return gameEvents;
}

var teamOneEvents = ["Ross 12 g", "John Sprague 11 y"];

var teamTwoEvents = ["Eli 45+1 s Mike", "Jersey 46 g"];

getEventsOder("EDD", "EcD", teamOneEvents, teamTwoEvents);
