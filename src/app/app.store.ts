import { InjectionToken } from '@angular/core';
import { createStore, Store, compose, StoreEnhancer } from 'redux';

import { AppState, default as rootReducer } from './app.reducer';

export const AppStore = new InjectionToken('App.store');

const devtools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;

export function createAppStore(): Store<AppState> {
  return createStore<AppState>(
    rootReducer,
    compose(devtools),
  );
}

export const appStoreProviders = [ { provide: AppStore, useFactory: createAppStore } ];
