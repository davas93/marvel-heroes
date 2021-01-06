'use strict';

import slider from './modules/slider';
import audioControl from './modules/audioControl';
import getData from './modules/getData';
import filter from './modules/filter';
import showInfo from './modules/showInfo';
import smoothScroll from './modules/smoothScroll';
import theme from './modules/theme';

//Смена изображений главного экрана
slider();

//Управление звуком
audioControl();

//Получение данных и вывод на страницу
getData();

//Фильтрация карточек
filter();

//Показ информации о герое при наведении
showInfo();

//Плавная прокрутка
smoothScroll();

//Переключатель темы
theme();
