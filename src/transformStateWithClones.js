'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateHistory = [];

  for (const i of actions) {
    if (i.type === 'addProperties') {
      Object.assign(state, i.extraData);
    }

    if (i.type === 'removeProperties') {
      for (const j of i.keysToRemove) {
        delete state[j];
      }
    }

    if (i.type === 'clear') {
      for (const key in state) {
        delete state[key];
      }
    }
    stateHistory.push(state);
  }

  return stateHistory;
}

module.exports = transformStateWithClones;
