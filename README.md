Проект курсовой работы 2021 студентки факультета компьютерных наук НИУ ВШЭ Логуновой Гаянэ (2 курс).

Фронтенд реализован на веб-фреймворке ReactJS.

Проект предназначен для описания, отслеживания и отображения сценариев работы сотрудников. На сайте регистрируются администраторы компании и создают шаблон
сценария. Он содержит данные о том, какой человек и с какой должностью должен присутствовать в конкретной точке в какой-то промежуток времени. Отслеживание 
перемещений сотрудников происходит при помощи IOS и Android приложений на телефонах сотрудников. Данные о выполнении пользователем заданной задачи отправляются
на сервер, который обрабатывает их и передает на сайт, где происходит отображение всех задач, чтобы администраторы могли наблюдать за выполнением сценариев.

В данном проекте реализован сайт для динамического отображения задач производства (Dashboard). 

С сервера программа получает два вида JSON-ов: 
1) {"tasks": [{"position": "administrator", "name": "Vasya Pupkin", "task_name": "go Shopping", "status": "done", "time": "9:00"}]}:
  position - должность работника, которому была назначена задача;
  name - имя работника, которому была назначена задача;
  task_name - название самой задачи;
  status - статус данной задачи, может быть done, pending и failed; 
  time - время до которого должна быть выполнена задача.
2) {"result": True} при прохождении регистрации и {"result": False} в противоположном случае. 

В проекте присутствуют две страницы: /registration и /table.
На первой странице происходит регистрация пользователя, так как просматривать состояние задач могут лишь лица с соотвествующей должностью.
Переключение между страницами происходит в Main.js, используется фреймворк react-router-dom. Для разрешения пользователю доступа к странице /table реализован 
PrivateRoute, который перенаправляет пользователя на страницу регистрации, если он еще не зарегистрирован. Данные о том зарегистрирован пользователь или нет хранятся в localStorage по ключу authToken.

В классовом компоненте Registration в render отрисовывается Card (bootstrap Card) с полями для логина и пароля. По нажатию на кнопку submit вызывается функция 
postRequest, отправляющая на сервер введенные пользователем данные с помощью Axios (Ajax). Response содержит JSON 2. Если данные были введены корректно, программа перенаправляет пользователя на страницу /table. 

В классе Cards_render в ComponentDidMount каждые 10 секунд вызывается функция getFile и отправляется запрос серверу. Response содержит JSON 1.
После этого вызывается функция parse_data, которая меняет состояние parsed_data. 
Функция render отрисовывает данные в Accordions (material-ui Accordion). Функция отрисовывает все должности которые были в полученном JSON-е. В каждом 
Accordion вызывается функциональный компонент RenderByTitle. Был выбран функциональный компонент, так как он занимается только отрисовкой данных и не меняет 
состояния. 

RenderByTitle возвращает Accordions. При помощи анонимной функции производим итерацию переданных с помощью props данных и проверяем, если props.title задачи совпадает с title, переданным через props, отрисовывается Accordion. Внутри него также вызывается функциональная компонента RenderByName.

RenderByName действует аналогично RenderByTitle, но отрисовывает задачи в соотвествии с переданным через props именем. Компонента Typography отображает название 
задачи разным цветом в зависимости от статуса задачи (done/pending/failed). 

Также в проекте присутвует NavBar (material-ui AppBar). На нем оторбажается название проекта. Если пользователь зарегистрирован также отображается имя 
зарегистрированного пользователя и кнопка LOGOUT. По нажатию на кнопку LOGOUT происходит очищение данных localStorage и перенаправление на страницу регистрации при помощи history.