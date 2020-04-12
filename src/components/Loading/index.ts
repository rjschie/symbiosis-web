import Component from '@glimmer/component';
import { createTemplate, setComponentTemplate } from '@glimmer/core';

import './Loading.css';
import logo from '@symbiosis/public/logo.svg';

export default class Loading extends Component {
  logo = logo;
}

setComponentTemplate(
  createTemplate(
    `
      <div class="loading-bg {{if this.hide "loading-bg--hide"}}">
        <div class="w-40 h-40 fill-current">
          {{{this.logo}}}
        </div>
      </div>
    `
  ),
  Loading
);
