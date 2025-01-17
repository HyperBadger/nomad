import Component from '@ember/component';
import { tagName } from '@ember-decorators/component';
import { inject as service } from '@ember/service';

@tagName('')
export default class ForbiddenMessage extends Component {
  @service token;
  @service store;

  get authMethods() {
    return this.store.findAll('auth-method');
  }
}
