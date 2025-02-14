// @flow

/**
 * Should poll results be shown.
 *
 * @param {Object} state - Global state.
 * @param {string} id - Id of the poll.
 * @returns {boolean} Should poll results be shown.
 */
export const shouldShowResults = (state: Object, id: string) => Boolean(state['features/polls']?.polls[id].showResults);


/**
 * Selector for calculating the number of unread poll messages.
 *
 * @param {Object} state - The redux state.
 * @returns {number} The number of unread messages.
 */
export function getUnreadPollCount(state: Object) {
    const { nbUnreadPolls } = state['features/polls'];

    return nbUnreadPolls;
}

/**
 * Determines if the submit poll answer button should be disabled.
 *
 * @param {Array<boolean>} checkBoxStates - The states of the checkboxes.
 * @returns {boolean}
 */
export function isSubmitAnswerDisabled(checkBoxStates: Array<boolean>) {
    return !checkBoxStates.find(checked => checked);
}
