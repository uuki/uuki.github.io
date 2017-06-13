//import $ from 'jquery';
const $ = require('./libs/jquery.js');

let _appVersion = navigator.appVersion.toLowerCase();
/**
 *
 */
export const $WINDOW = $(global);

/**
 * レイアウト変更のしきい値
 */
export const BREAK_POINT = 768;

/**
 * transitionend
 */
export const TRANSITION_END = 'transitionend transitionEnd webkitTransitionEnd';

/**
 * window の高さを取得
 */
export function getWindowHeight() {
  return $WINDOW.height();
}

/**
 * window の幅を取得
 */
export function getWindowWidth() {
  return $WINDOW.width();
}

/**
 * window の 縦 スクロール量を取得
 */
export function getPageYOffset() {
  return $WINDOW.scrollTop();
}

/**
 * window の 横 スクロール量を取得
 */
export function getPageXOffset() {
  return $WINDOW.scrollLeft();
}

/**
 * Windowsかどうか
 */
export function isWindows() {
  return _appVersion.match(/windows/);
}

/**
 * モバイル表示かどうか
 */
export function isMobile() {
  return $WINDOW.width() <= BREAK_POINT;
}