import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @aimarket/jupyterlab-iolab-theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@aimarket/jupyterlab-iolab-theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @aimarket/jupyterlab-iolab-theme is activated!');
    const style = '@aimarket/jupyterlab-iolab-theme/index.css';

    manager.register({
      name: '@aimarket/jupyterlab-iolab-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
