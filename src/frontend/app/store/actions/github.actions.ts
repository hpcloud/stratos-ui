import { Action } from '@ngrx/store';
import {
  EnvVarStratosProject
} from '../../features/applications/application/application-tabs-base/tabs/build-tab/application-env-vars.service';
import { IRequestAction } from '../types/request.types';
import { githubRepoSchemaKey } from '../helpers/entity-factory';

export const FETCH_GITHUB_REPO = '[Github] Fetch Github repo details';

export class FetchGitHubRepoInfo implements IRequestAction {
  constructor(public stProject: EnvVarStratosProject) { }
  type = FETCH_GITHUB_REPO;
  entityKey = githubRepoSchemaKey;
}
