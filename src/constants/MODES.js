const modes = {
    vs: {
      label: "PLAYER VS COMPUTER",
      player1Label: "COMPUTER",
      player2Label: "PLAYER"
    },
    simulate: {
      label: "COMPUTER VS COMPUTER",
      player1Label: "COMPUTER 1",
      player2Label: "COMPUTER 2"
    }
  },
  modeKeys = Object.keys(modes);

export { modes, modeKeys };
