const modes = {
    vs: {
      label: "HUMAN VS ROBOT",
      player1Label: "HUMAN",
      player2Label: "ROBOT"
    },
    simulate: {
      label: "COMPUTER VS COMPUTER",
      player1Label: "ROBOT 1",
      player2Label: "ROBOT 2"
    }
  },
  modeKeys = Object.keys(modes);

export { modes, modeKeys };
