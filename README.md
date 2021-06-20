Habbit-tracking application https://sculptor.goit.co.ua/

<img width="1412" alt="Снимок экрана 2021-06-20 в 14 27 51" src="https://user-images.githubusercontent.com/47474234/122672326-bc286280-d1d3-11eb-83fe-d82691c7b207.png">
<img width="1413" alt="Снимок экрана 2021-06-20 в 14 27 22" src="https://user-images.githubusercontent.com/47474234/122672327-bdf22600-d1d3-11eb-8560-a43f0369e471.png">
<img width="1419" alt="Снимок экрана 2021-06-20 в 14 27 12" src="https://user-images.githubusercontent.com/47474234/122672329-bdf22600-d1d3-11eb-9481-a6f110739ceb.png">
<img width="1417" alt="Снимок экрана 2021-06-20 в 14 26 44" src="https://user-images.githubusercontent.com/47474234/122672330-be8abc80-d1d3-11eb-9f4c-8c382c328a08.png">









1) Клонируете себе dev : 
	git clone -b dev https://ccылка_на_репозиторий
2) Переходите в ветку dev. Забираете последние изменения в ветке dev. Потом создаете свою ветку находясь в ветке dev, с названием своей задачи:
	git checkout dev
	git pull origin dev
	git checkout -b name_your_branch
3) Работаете только в своей ветке, все изменения пушите ТОЛЬКО в нее: 
	git add .
	git commit -m “init name_your_branch”
	git push origin name_your_branch
4) Когда полностью завершили работу в своей ветке и хотите добавить эти изменения в общий проект:
	4.1) Переходите в ветку dev (и пулите все изменения которые внесли другие):
	git checkout dev
	git pull origin dev
	4.2) Переходим в свою ветку: 
	git checkout name_your_branch
5) Мерджите dev в свою ветку, разрешаешь конфликты которых то и быть не должно на самом деле:
	git merge dev
	Если есть конфликты, открываем свой редактор кода и решаем возникшие конфликты (при сложностях обращаемся к team lead’у).
	git add .
	git commit -m “пишем название конкретной задачи которую сделали(на английском)”
6) Пушите свою ветку на удаленку:
	git push origin name_your_branch
7) Создаете pull request на слитие с dev там на гитхабе:



8) КАЖДЫЙ КАЖДЫЙ РАЗ !!!  при изменениях, которые хотите сделать в общем проекте, повторяете порядок действий с пункта 2 по 7.
