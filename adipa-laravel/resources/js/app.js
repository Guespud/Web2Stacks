import $ from 'jquery';
import { bootCatalogPage } from './modules/catalog-page';

window.$ = $;
window.jQuery = $;

bootCatalogPage(window.AdipaApp || {});
