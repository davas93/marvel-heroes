'use strict';

import slider from './modules/slider';
import audioControl from './modules/audioControl';
import getData from './modules/getData';

//Смена изображений главного экрана
slider();

//Управление звуком
audioControl();

//Получение данных и вывод на страницу
getData();
