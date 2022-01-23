import { ActionType } from '../action-types'
export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction;

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
    payload: string[];
}
interface SearchRepositoriesErrorAction {
    type:   ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}