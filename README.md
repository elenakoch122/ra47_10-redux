[![Build status](https://ci.appveyor.com/api/projects/status/dspx6j0bui95kfby?svg=true)](https://ci.appveyor.com/project/elenakoch122/ra47-10-redux)

GitHub Pages: https://elenakoch122.github.io/ra47_10-redux

Редактирование
===

Этот проект не предполагает взаимодействия по протоколу HTTP и наличия серверной части.

Взяв за основу проект, рассмотренный на лекции, доработайте его либо напишите с нуля:

1. По умолчанию показывается форма добавления, при заполнении и нажатии на кнопку Save происходит добавление элемента в список:

![](./assets/add.png)

2. При нажатии на кнопку «Редактировать» форма автоматически заполняется данными элемента:

![](./assets/edit.png)

Далее возможны два сценария:

2.1 Если пользователь нажал на кнопку Save, запись в таблице обновляется.

2.2 Если пользователь нажал на кнопку Cancel, то поля вычищаются и снова отображается форма добавления.

Бонусное задание: подумайте, как должно вести себя приложение, если вы при редактировании записи, нажмёте на «Удалить» — крестик.