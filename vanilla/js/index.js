import View from './view.js';
import Store from './store.js';

const players = [
  {
    id: 1,
    name: 'Player 1',
    iconClass: 'fa-x',
    colorClass: 'turquoise',
  },
  {
    id: 2,
    name: 'Player 2',
    iconClass: 'fa-o',
    colorClass: 'yellow',
  },
];

function init() {
  const view = new View();
  const store = new Store('live-t3-storage-key', players);

  // because of extends EventTarget
  //current tab changes
  store.addEventListener('statechange', () => {
    view.render(store.game, store.stats);
  });

  //different tab changes
  window.addEventListener('storage', () => {
    view.render(store.game, store.stats);
  });

  view.render(store.game, store.stats);

  view.bindGameResetEvent((event) => {
    store.reset();
  });

  view.bindNewRoundEvent((event) => {
    store.newRound();
  });

  view.bindPlayerMoveEvent((square) => {
    const existingMove = store.game.moves.find(
      (move) => move.squareId === +square.id
    );

    if (existingMove) {
      return;
    }

    store.playerMove(+square.id);
  });
}

window.addEventListener('load', init);
