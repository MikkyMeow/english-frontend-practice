window.DIALOGUES = [
  {
    "id": "javascript-event-loop",
    "title": "Цикл событий в JavaScript",
    "description": "Emma и Lucas обсуждают, как работает цикл событий в JavaScript",
    "ariaLabel": "JavaScript event loop dialogue",
    "lines": [
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Why does JavaScript need an event loop?",
        "translation": "Зачем JavaScript нужен цикл событий?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It allows JavaScript to handle asynchronous operations while executing most application code on a single main thread.",
        "translation": "Он позволяет JavaScript обрабатывать асинхронные операции, выполняя большую часть кода приложения в одном основном потоке."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Does that mean JavaScript can perform only one task at a time?",
        "translation": "Означает ли это, что JavaScript может выполнять только одну задачу за раз?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The main thread executes one piece of JavaScript at a time, but the browser can handle timers, network requests, and user actions outside that thread.",
        "translation": "Основной поток выполняет один фрагмент JavaScript за раз, но браузер может обрабатывать таймеры, сетевые запросы и действия пользователя за пределами этого потока."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens when a function starts running?",
        "translation": "Что происходит, когда функция начинает выполняться?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It is added to the call stack, which keeps track of the functions that are currently being executed.",
        "translation": "Она добавляется в стек вызовов, который отслеживает функции, выполняющиеся в данный момент."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "When can the event loop move another task to the call stack?",
        "translation": "Когда цикл событий может переместить следующую задачу в стек вызовов?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It can do that only when the call stack is empty.",
        "translation": "Он может сделать это только тогда, когда стек вызовов пуст."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Where do completed asynchronous operations wait?",
        "translation": "Где ожидают завершённые асинхронные операции?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Their callbacks are placed into queues until the event loop is allowed to schedule them.",
        "translation": "Их функции обратного вызова помещаются в очереди, пока цикл событий не сможет запланировать их выполнение."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Are all queued callbacks treated in the same way?",
        "translation": "Все ли функции обратного вызова в очередях обрабатываются одинаково?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. Browsers distinguish between tasks and microtasks, and microtasks have higher priority.",
        "translation": "Нет. Браузеры различают задачи и микрозадачи, причём микрозадачи имеют более высокий приоритет."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What usually creates a microtask?",
        "translation": "Что обычно создаёт микрозадачу?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Promise reactions are a common source of microtasks, along with some browser observation features.",
        "translation": "Обработчики промисов часто создают микрозадачи, как и некоторые браузерные механизмы наблюдения за изменениями."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "When are microtasks executed?",
        "translation": "Когда выполняются микрозадачи?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "After the current task finishes, the browser processes the microtask queue before starting the next task.",
        "translation": "После завершения текущей задачи браузер обрабатывает очередь микрозадач перед запуском следующей задачи."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can microtasks delay other work?",
        "translation": "Могут ли микрозадачи задерживать другую работу?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. If microtasks keep creating more microtasks, rendering and user input can be delayed.",
        "translation": "Да. Если микрозадачи постоянно создают новые микрозадачи, отрисовка и обработка действий пользователя могут задерживаться."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Does a timer run exactly when its delay ends?",
        "translation": "Запускается ли таймер точно в момент окончания его задержки?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. The delay only sets the earliest possible time. The callback must still wait for the call stack, queued microtasks, and earlier tasks. The exact event loop rules can also differ between browsers and server environments.",
        "translation": "Нет. Задержка задаёт только самое раннее возможное время. Функция обратного вызова всё равно должна дождаться освобождения стека вызовов, выполнения микрозадач и более ранних задач. Точные правила цикла событий также могут отличаться в браузерах и серверных средах."
      }
    ]
  },
  {
    "id": "javascript-async-await",
    "title": "Async и await в JavaScript",
    "description": "Emma и Lucas обсуждают async и await в JavaScript",
    "ariaLabel": "JavaScript async and await dialogue",
    "lines": [
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What do async and await do in JavaScript?",
        "translation": "Что делают async и await в JavaScript?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "They provide a clearer way to work with promises and asynchronous operations.",
        "translation": "Они предоставляют более понятный способ работы с промисами и асинхронными операциями."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens when a function is declared as async?",
        "translation": "Что происходит, когда функция объявляется асинхронной?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It always returns a promise, even when it produces a regular value.",
        "translation": "Она всегда возвращает промис, даже если создаёт обычное значение."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens to that regular value?",
        "translation": "Что происходит с этим обычным значением?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The value becomes the fulfillment result of the promise returned by the function.",
        "translation": "Это значение становится результатом успешного выполнения промиса, возвращённого функцией."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What does await do inside an async function?",
        "translation": "Что делает await внутри асинхронной функции?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It pauses that function until the awaited value is ready, without blocking the entire main thread.",
        "translation": "Он приостанавливает эту функцию до готовности ожидаемого значения, не блокируя весь основной поток."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Does await work only with promises?",
        "translation": "Работает ли await только с промисами?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. A regular value is treated like an already fulfilled promise.",
        "translation": "Нет. Обычное значение обрабатывается как уже успешно выполненный промис."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "When does the function continue after await?",
        "translation": "Когда функция продолжает работу после await?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Its continuation is scheduled as a microtask after the current synchronous work has finished.",
        "translation": "Её продолжение планируется как микрозадача после завершения текущей синхронной работы."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can await make asynchronous code execute in sequence?",
        "translation": "Может ли await заставить асинхронный код выполняться последовательно?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. Each awaited operation can delay the next step until its result becomes available.",
        "translation": "Да. Каждая ожидаемая операция может задержать следующий шаг до получения своего результата."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can sequential waiting reduce performance?",
        "translation": "Может ли последовательное ожидание снизить производительность?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. Independent operations may take longer when they are awaited one after another instead of starting together.",
        "translation": "Да. Независимые операции могут занимать больше времени, если ожидать их одну за другой вместо одновременного запуска."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How are errors handled with async and await?",
        "translation": "Как обрабатываются ошибки при использовании async и await?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "A rejected promise behaves like a thrown error and can be handled with normal error handling structures.",
        "translation": "Отклонённый промис ведёт себя как выброшенная ошибка и может быть обработан обычными конструкциями обработки ошибок."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens when an async function throws an error?",
        "translation": "Что происходит, когда асинхронная функция выбрасывает ошибку?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The promise returned by that function becomes rejected with the same error.",
        "translation": "Промис, возвращённый этой функцией, отклоняется с той же ошибкой."
      }
    ]
  },
  {
    "id": "javascript-promises",
    "title": "Промисы в JavaScript",
    "description": "Emma и Lucas обсуждают промисы в JavaScript",
    "ariaLabel": "JavaScript promises dialogue",
    "lines": [
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is a promise in JavaScript?",
        "translation": "Что такое промис в JavaScript?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "A promise is an object that represents the future result of an asynchronous operation.",
        "translation": "Промис — это объект, который представляет будущий результат асинхронной операции."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What states can a promise have?",
        "translation": "Какие состояния может иметь промис?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "A promise can be pending, fulfilled, or rejected.",
        "translation": "Промис может находиться в состоянии ожидания, успешного выполнения или отклонения."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What does the pending state mean?",
        "translation": "Что означает состояние ожидания?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It means that the asynchronous operation has not produced its final result yet.",
        "translation": "Это означает, что асинхронная операция ещё не предоставила окончательный результат."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can a settled promise change its state again?",
        "translation": "Может ли завершённый промис снова изменить своё состояние?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. After a promise is fulfilled or rejected, its state and result cannot be changed.",
        "translation": "Нет. После успешного выполнения или отклонения промиса его состояние и результат нельзя изменить."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How do we receive the successful result of a promise?",
        "translation": "Как получить успешный результат промиса?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "We attach a fulfillment handler that runs when the promise is successfully completed.",
        "translation": "Мы добавляем обработчик успешного выполнения, который запускается после успешного завершения промиса."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How are promise errors handled?",
        "translation": "Как обрабатываются ошибки промисов?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "A rejection handler can receive the error or reason provided by the rejected promise.",
        "translation": "Обработчик отклонения может получить ошибку или причину, переданную отклонённым промисом."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Do promise handlers run immediately?",
        "translation": "Выполняются ли обработчики промисов немедленно?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. They are scheduled as microtasks and run only after the current synchronous work has finished.",
        "translation": "Нет. Они планируются как микрозадачи и выполняются только после завершения текущей синхронной работы."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can promises be connected into a chain?",
        "translation": "Можно ли соединять промисы в цепочку?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. Each handler returns a new promise, which allows asynchronous operations to be processed in sequence.",
        "translation": "Да. Каждый обработчик возвращает новый промис, что позволяет последовательно обрабатывать асинхронные операции."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens when a handler returns a regular value?",
        "translation": "Что происходит, когда обработчик возвращает обычное значение?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The next promise in the chain becomes fulfilled with that value.",
        "translation": "Следующий промис в цепочке успешно завершается с этим значением."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens when a handler returns another promise?",
        "translation": "Что происходит, когда обработчик возвращает другой промис?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The chain waits for that promise to settle and adopts its final state and result.",
        "translation": "Цепочка ожидает завершения этого промиса и принимает его итоговое состояние и результат."
      }
    ]
  },
  {
    "id": "javascript-closures",
    "title": "Замыкания в JavaScript",
    "description": "Emma и Lucas обсуждают замыкания в JavaScript",
    "ariaLabel": "JavaScript closures dialogue",
    "lines": [
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is a closure in JavaScript?",
        "translation": "Что такое замыкание в JavaScript?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "A closure is a function together with access to the lexical environment where that function was created.",
        "translation": "Замыкание — это функция вместе с доступом к лексическому окружению, в котором эта функция была создана."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What does lexical environment mean?",
        "translation": "Что означает лексическое окружение?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It is the collection of variables and bindings that are visible at a particular place in the source code.",
        "translation": "Это набор переменных и привязок, доступных в определённом месте исходного кода."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Does a closure copy the variables it uses?",
        "translation": "Копирует ли замыкание используемые переменные?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. It keeps access to the original bindings rather than storing separate copies of their values.",
        "translation": "Нет. Оно сохраняет доступ к исходным привязкам, а не хранит отдельные копии их значений."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can a function use outer variables after the outer function has finished?",
        "translation": "Может ли функция использовать внешние переменные после завершения внешней функции?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. If the inner function is still reachable, its closure keeps the required outer environment available.",
        "translation": "Да. Если внутренняя функция всё ещё доступна, её замыкание сохраняет необходимое внешнее окружение."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "When is a closure created?",
        "translation": "Когда создаётся замыкание?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "A closure is created whenever a function is created, because every function remembers its lexical scope.",
        "translation": "Замыкание создаётся при создании функции, потому что каждая функция запоминает свою лексическую область видимости."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Why are closures useful?",
        "translation": "Почему замыкания полезны?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "They allow functions to preserve state, hide internal data, and create specialised behaviour.",
        "translation": "Они позволяют функциям сохранять состояние, скрывать внутренние данные и создавать специализированное поведение."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can closures be used for private data?",
        "translation": "Можно ли использовать замыкания для приватных данных?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. Data can remain inside an outer scope while selected inner functions provide controlled access to it.",
        "translation": "Да. Данные могут оставаться во внешней области видимости, а выбранные внутренние функции будут предоставлять к ним контролируемый доступ."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Do several closures always share the same state?",
        "translation": "Всегда ли несколько замыканий используют одно и то же состояние?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Only when they were created in the same lexical environment and reference the same bindings.",
        "translation": "Только если они были созданы в одном лексическом окружении и ссылаются на одни и те же привязки."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can closures affect memory usage?",
        "translation": "Могут ли замыкания влиять на использование памяти?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. Referenced variables may remain in memory as long as the closure that uses them is still reachable.",
        "translation": "Да. Используемые переменные могут оставаться в памяти, пока замыкание, которое на них ссылается, всё ещё доступно."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is a common mistake with closures?",
        "translation": "Какая ошибка часто связана с замыканиями?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "A common mistake is assuming that a closure remembers an old value when it actually reads the current value of the captured binding.",
        "translation": "Распространённая ошибка — считать, что замыкание запоминает старое значение, хотя на самом деле оно читает текущее значение захваченной привязки."
      }
    ]
  },
  {
    "id": "javascript-this",
    "title": "Контекст this в JavaScript",
    "description": "Emma и Lucas обсуждают, как работает this в JavaScript",
    "ariaLabel": "JavaScript this context dialogue",
    "lines": [
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What does this mean in JavaScript?",
        "translation": "Что означает this в JavaScript?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It is a special value that refers to a context associated with the current function call.",
        "translation": "Это специальное значение, которое указывает на контекст, связанный с текущим вызовом функции."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Is the value of this determined when a function is created?",
        "translation": "Определяется ли значение this в момент создания функции?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "For regular functions, it is usually determined by how the function is called rather than where it was created.",
        "translation": "Для обычных функций оно обычно определяется способом вызова функции, а не местом её создания."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens when a function is called as an object method?",
        "translation": "Что происходит, когда функция вызывается как метод объекта?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The object before the method call usually becomes the value of this.",
        "translation": "Объект, через который вызывается метод, обычно становится значением this."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can this be lost when a method is stored separately?",
        "translation": "Может ли this потеряться, если метод сохранить отдельно?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. If the method is called without its original object, the call context changes.",
        "translation": "Да. Если метод вызывается без исходного объекта, контекст вызова изменяется."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How do arrow functions handle this?",
        "translation": "Как стрелочные функции работают с this?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Arrow functions do not create their own this value and instead use the value from the surrounding lexical scope.",
        "translation": "Стрелочные функции не создают собственное значение this, а используют значение из окружающей лексической области."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can the value of this be set explicitly?",
        "translation": "Можно ли задать значение this явно?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. JavaScript provides function methods that allow a specific value to be used as this.",
        "translation": "Да. JavaScript предоставляет методы функций, которые позволяют использовать указанное значение в качестве this."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What does binding a function do?",
        "translation": "Что делает привязка функции?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It creates a new function with a fixed this value that cannot be replaced by a normal call.",
        "translation": "Она создаёт новую функцию с фиксированным значением this, которое нельзя заменить обычным вызовом."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What does this refer to inside a constructor call?",
        "translation": "На что указывает this внутри вызова конструктора?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It usually refers to the new object being created by that constructor.",
        "translation": "Обычно оно указывает на новый объект, создаваемый этим конструктором."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Does strict mode affect this?",
        "translation": "Влияет ли строгий режим на this?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. In a plain function call, strict mode keeps this undefined instead of replacing it with a global object.",
        "translation": "Да. При обычном вызове функции строгий режим оставляет this неопределённым вместо замены его глобальным объектом."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is the most important rule to remember about this?",
        "translation": "Какое самое важное правило нужно помнить о this?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "For regular functions, examine the call site, but for arrow functions, examine the surrounding scope.",
        "translation": "Для обычных функций нужно смотреть на место вызова, а для стрелочных функций — на окружающую область видимости."
      }
    ]
  },
  {
    "id": "javascript-microtasks",
    "title": "Микрозадачи в JavaScript",
    "description": "Emma и Lucas обсуждают микрозадачи в JavaScript",
    "ariaLabel": "JavaScript microtasks dialogue",
    "lines": [
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is a microtask in JavaScript?",
        "translation": "Что такое микрозадача в JavaScript?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "A microtask is a small unit of asynchronous work that runs after the current JavaScript operation finishes.",
        "translation": "Микрозадача — это небольшая единица асинхронной работы, которая выполняется после завершения текущей операции JavaScript."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Where do microtasks wait before execution?",
        "translation": "Где микрозадачи ожидают выполнения?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "They wait in a special queue called the microtask queue.",
        "translation": "Они ожидают в специальной очереди, которая называется очередью микрозадач."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "When does the runtime process that queue?",
        "translation": "Когда среда выполнения обрабатывает эту очередь?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It processes the queue when the call stack becomes empty and the current task has finished.",
        "translation": "Она обрабатывает очередь, когда стек вызовов становится пустым и текущая задача завершается."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Do microtasks run before regular tasks?",
        "translation": "Микрозадачи выполняются раньше обычных задач?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. The runtime normally finishes all available microtasks before starting the next regular task.",
        "translation": "Да. Среда выполнения обычно завершает все доступные микрозадачи перед запуском следующей обычной задачи."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What commonly creates microtasks?",
        "translation": "Что обычно создаёт микрозадачи?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Promise handlers are the most common source of microtasks in everyday JavaScript.",
        "translation": "Обработчики промисов являются самым распространённым источником микрозадач в повседневном JavaScript."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Does an asynchronous function also use microtasks?",
        "translation": "Асинхронная функция тоже использует микрозадачи?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. When an asynchronous function continues after waiting, its continuation is normally scheduled as a microtask.",
        "translation": "Да. Когда асинхронная функция продолжает работу после ожидания, её продолжение обычно планируется как микрозадача."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can one microtask create another microtask?",
        "translation": "Может ли одна микрозадача создать другую микрозадачу?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. New microtasks are added to the same queue and are usually processed before the runtime moves to the next task.",
        "translation": "Да. Новые микрозадачи добавляются в ту же очередь и обычно обрабатываются до перехода среды выполнения к следующей задаче."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Are microtasks executed in the order they were added?",
        "translation": "Микрозадачи выполняются в порядке их добавления?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "In general, they are processed in first in, first out order.",
        "translation": "В общем случае они обрабатываются в порядке поступления."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can too many microtasks cause performance problems?",
        "translation": "Может ли слишком большое количество микрозадач вызвать проблемы с производительностью?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. A long chain of microtasks can delay rendering, timers, network callbacks, and user input.",
        "translation": "Да. Длинная цепочка микрозадач может задерживать отрисовку, таймеры, сетевые обработчики и действия пользователя."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is the main reason to understand microtasks?",
        "translation": "Какова главная причина понимать работу микрозадач?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "They explain why asynchronous operations may run in an unexpected order and why some work can delay the next event loop task.",
        "translation": "Они объясняют, почему асинхронные операции могут выполняться в неожиданном порядке и почему некоторая работа способна задержать следующую задачу цикла событий."
      }
    ]
  },
  {
    "id": "javascript-macrotasks",
    "title": "Макрозадачи в JavaScript",
    "description": "Emma и Lucas обсуждают макрозадачи в JavaScript",
    "ariaLabel": "JavaScript macrotasks dialogue",
    "lines": [
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is a macrotask in JavaScript?",
        "translation": "Что такое макрозадача в JavaScript?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "A macrotask is a unit of work that the event loop schedules for execution on the main thread.",
        "translation": "Макрозадача — это единица работы, которую цикл событий планирует для выполнения в основном потоке."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Is macrotask an official term?",
        "translation": "Является ли макрозадача официальным термином?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The official browser specifications usually call it a task, but developers often use the word macrotask to distinguish it from a microtask.",
        "translation": "В официальных спецификациях браузеров обычно используется слово задача, но разработчики часто говорят макрозадача, чтобы отличать её от микрозадачи."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What can create a macrotask?",
        "translation": "Что может создать макрозадачу?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Timers, user interactions, network events, message events, and the initial execution of a script can create tasks.",
        "translation": "Таймеры, действия пользователя, сетевые события, события сообщений и первоначальное выполнение скрипта могут создавать задачи."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Where do these tasks wait?",
        "translation": "Где ожидают эти задачи?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "They wait in task queues until the event loop selects one for execution.",
        "translation": "Они ожидают в очередях задач, пока цикл событий не выберет одну из них для выполнения."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Does the event loop always use only one task queue?",
        "translation": "Всегда ли цикл событий использует только одну очередь задач?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. A browser may use several task queues for different sources and choose between them according to its scheduling rules.",
        "translation": "Нет. Браузер может использовать несколько очередей задач для разных источников и выбирать между ними по своим правилам планирования."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How many macrotasks run during one event loop step?",
        "translation": "Сколько макрозадач выполняется за один шаг цикла событий?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The event loop normally takes one task, runs it until completion, and then performs the next processing stages.",
        "translation": "Цикл событий обычно берёт одну задачу, выполняет её до завершения, а затем переходит к следующим этапам обработки."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens after a macrotask finishes?",
        "translation": "Что происходит после завершения макрозадачи?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The runtime processes all available microtasks before selecting another macrotask.",
        "translation": "Среда выполнения обрабатывает все доступные микрозадачи перед выбором следующей макрозадачи."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can the browser render between macrotasks?",
        "translation": "Может ли браузер выполнять отрисовку между макрозадачами?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. The browser may update the display after a task and its microtasks have finished, although rendering is not guaranteed after every task.",
        "translation": "Да. Браузер может обновить изображение после завершения задачи и её микрозадач, хотя отрисовка не гарантируется после каждой задачи."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Does a timer callback run as soon as its delay ends?",
        "translation": "Выполняется ли обработчик таймера сразу после окончания задержки?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. The delay only defines the earliest time when its task may be queued, and other work can postpone its execution.",
        "translation": "Нет. Задержка определяет только самое раннее время, когда задача может попасть в очередь, а другая работа способна отложить её выполнение."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Why can a long macrotask make a page feel unresponsive?",
        "translation": "Почему длинная макрозадача может сделать страницу неотзывчивой?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Because JavaScript runs the task to completion, so rendering and user input may have to wait until the main thread becomes free.",
        "translation": "Потому что JavaScript выполняет задачу до конца, поэтому отрисовка и обработка действий пользователя могут ждать освобождения основного потока."
      }
    ]
  },
  {
    "id": "javascript-scope",
    "title": "Область видимости в JavaScript",
    "description": "Emma и Lucas обсуждают область видимости в JavaScript",
    "ariaLabel": "JavaScript scope dialogue",
    "lines": [
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is scope in JavaScript?",
        "translation": "Что такое область видимости в JavaScript?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Scope defines where variables, functions, and other bindings can be accessed.",
        "translation": "Область видимости определяет, где доступны переменные, функции и другие привязки."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is global scope?",
        "translation": "Что такое глобальная область видимости?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It is the outermost scope, where bindings may be available to many parts of a program.",
        "translation": "Это самая внешняя область видимости, где привязки могут быть доступны многим частям программы."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is function scope?",
        "translation": "Что такое функциональная область видимости?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It is a scope created by a function, and bindings declared inside it are normally unavailable outside that function.",
        "translation": "Это область видимости, создаваемая функцией, и привязки внутри неё обычно недоступны за пределами этой функции."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is block scope?",
        "translation": "Что такое блочная область видимости?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It is a scope created by a block, such as the body of a condition or a loop.",
        "translation": "Это область видимости, создаваемая блоком, например телом условия или цикла."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Do all variable declarations respect block scope?",
        "translation": "Все ли объявления переменных подчиняются блочной области видимости?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. Modern declarations are block scoped, while older variable declarations are usually function scoped.",
        "translation": "Нет. Современные объявления имеют блочную область видимости, а старые объявления переменных обычно имеют функциональную область видимости."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How does JavaScript find a variable?",
        "translation": "Как JavaScript находит переменную?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It first checks the current scope and then moves outward through the chain of surrounding scopes.",
        "translation": "Сначала он проверяет текущую область видимости, а затем движется наружу по цепочке окружающих областей."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens if two scopes contain bindings with the same name?",
        "translation": "Что происходит, если две области видимости содержат привязки с одинаковым именем?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The binding in the nearest scope hides the one with the same name in an outer scope.",
        "translation": "Привязка в ближайшей области видимости скрывает привязку с тем же именем во внешней области."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Is scope determined by where code runs?",
        "translation": "Определяется ли область видимости тем, где выполняется код?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. JavaScript mainly uses lexical scope, so scope depends on where the code is written.",
        "translation": "Нет. JavaScript в основном использует лексическую область видимости, поэтому она зависит от того, где написан код."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How is scope connected to closures?",
        "translation": "Как область видимости связана с замыканиями?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "A closure allows a function to keep access to bindings from the scope where that function was created.",
        "translation": "Замыкание позволяет функции сохранять доступ к привязкам из области видимости, где эта функция была создана."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Why is understanding scope important?",
        "translation": "Почему важно понимать область видимости?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It helps prevent naming conflicts, accidental global state, hidden variables, and confusing access errors.",
        "translation": "Это помогает предотвращать конфликты имён, случайное глобальное состояние, скрытие переменных и запутанные ошибки доступа."
      }
    ]
  },
  {
    "id": "react-hooks",
    "title": "Хуки в React",
    "description": "Emma и Lucas обсуждают основные принципы работы хуков в React",
    "ariaLabel": "React Hooks dialogue",
    "lines": [
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What are hooks in React?",
        "translation": "Что такое хуки в React?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Hooks are functions that allow components to use React features such as state, context, and effects.",
        "translation": "Хуки — это функции, которые позволяют компонентам использовать такие возможности React, как состояние, контекст и эффекты."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Where can hooks be used?",
        "translation": "Где можно использовать хуки?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "They can be used inside function components and inside custom hooks.",
        "translation": "Их можно использовать внутри функциональных компонентов и пользовательских хуков."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Why must hooks be called in the same order?",
        "translation": "Почему хуки нужно вызывать в одном и том же порядке?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "React uses the call order to associate each hook with its stored state between renders.",
        "translation": "React использует порядок вызовов, чтобы связывать каждый хук с его сохранённым состоянием между отрисовками."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can hooks be called inside conditions or loops?",
        "translation": "Можно ли вызывать хуки внутри условий или циклов?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Normally, no. They should be called at the top level so their order remains stable.",
        "translation": "Обычно нет. Их следует вызывать на верхнем уровне, чтобы порядок оставался стабильным."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Which hook is commonly used for component state?",
        "translation": "Какой хук обычно используется для состояния компонента?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The state hook stores a value and provides a function that schedules an update.",
        "translation": "Хук состояния хранит значение и предоставляет функцию, которая планирует его обновление."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Does updating state change the value immediately?",
        "translation": "Изменяет ли обновление состояния значение немедленно?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. It schedules a new render, and the updated value becomes available during that render.",
        "translation": "Нет. Оно планирует новую отрисовку, и обновлённое значение становится доступным во время неё."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is an effect hook used for?",
        "translation": "Для чего используется хук эффекта?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It is used to synchronise a component with systems outside React, such as network connections or browser features.",
        "translation": "Он используется для синхронизации компонента с системами вне React, например сетевыми соединениями или возможностями браузера."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What does an effect cleanup function do?",
        "translation": "Что делает функция очистки эффекта?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It releases resources before the effect runs again or before the component is removed.",
        "translation": "Она освобождает ресурсы перед повторным запуском эффекта или перед удалением компонента."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is a custom hook?",
        "translation": "Что такое пользовательский хук?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It is a reusable function that combines hooks and shares stateful logic without sharing the state itself.",
        "translation": "Это переиспользуемая функция, которая объединяет хуки и позволяет делиться логикой состояния, но не самим состоянием."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Do hooks replace every other React feature?",
        "translation": "Заменяют ли хуки все остальные возможности React?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. Hooks work together with components, context, event handlers, and React rendering rather than replacing them.",
        "translation": "Нет. Хуки работают вместе с компонентами, контекстом, обработчиками событий и механизмом отрисовки React, а не заменяют их."
      }
    ]
  },
  {
    "id": "javascript-execution-context",
    "title": "Контекст выполнения в JavaScript",
    "description": "Emma и Lucas обсуждают контекст выполнения в JavaScript",
    "ariaLabel": "JavaScript execution context dialogue",
    "lines": [
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is an execution context in JavaScript?",
        "translation": "Что такое контекст выполнения в JavaScript?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It is the environment in which JavaScript code is evaluated and executed.",
        "translation": "Это окружение, в котором JavaScript-код анализируется и выполняется."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "When is an execution context created?",
        "translation": "Когда создаётся контекст выполнения?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "A new context is created when a script starts, when a function is called, or when module code is evaluated.",
        "translation": "Новый контекст создаётся при запуске скрипта, вызове функции или выполнении кода модуля."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is the global execution context?",
        "translation": "Что такое глобальный контекст выполнения?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It is the first context created for ordinary script code and it represents the top level of execution.",
        "translation": "Это первый контекст, создаваемый для обычного кода скрипта, и он представляет верхний уровень выполнения."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens when a function is called?",
        "translation": "Что происходит при вызове функции?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "JavaScript creates a new function execution context for that specific call.",
        "translation": "JavaScript создаёт новый контекст выполнения функции для этого конкретного вызова."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can the same function have several execution contexts?",
        "translation": "Может ли одна и та же функция иметь несколько контекстов выполнения?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. Every call creates a separate context with its own parameters, local bindings, and execution state.",
        "translation": "Да. Каждый вызов создаёт отдельный контекст со своими параметрами, локальными привязками и состоянием выполнения."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What information does an execution context contain?",
        "translation": "Какую информацию содержит контекст выполнения?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It contains access to variables, the current lexical environment, the outer environment reference, and other call related data.",
        "translation": "Он содержит доступ к переменным, текущее лексическое окружение, ссылку на внешнее окружение и другие данные, связанные с вызовом."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Is this value part of the execution context?",
        "translation": "Является ли значение this частью контекста выполнения?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. For regular functions, the context includes a this value determined by the way the function was called.",
        "translation": "Да. Для обычных функций контекст включает значение this, определяемое способом вызова функции."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How are execution contexts managed?",
        "translation": "Как управляются контексты выполнения?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "They are managed through the call stack, which keeps track of the currently active contexts.",
        "translation": "Они управляются через стек вызовов, который отслеживает активные контексты."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens when a function finishes?",
        "translation": "Что происходит после завершения функции?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Its execution context is removed from the call stack and control returns to the previous context.",
        "translation": "Её контекст выполнения удаляется из стека вызовов, а управление возвращается предыдущему контексту."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Why is execution context important?",
        "translation": "Почему контекст выполнения важен?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It explains how JavaScript resolves variables, manages function calls, handles this, and preserves separate state for each call.",
        "translation": "Он объясняет, как JavaScript находит переменные, управляет вызовами функций, обрабатывает this и сохраняет отдельное состояние для каждого вызова."
      }
    ]
  },
  {
    "id": "javascript-call-stack",
    "title": "Стек вызовов в JavaScript",
    "description": "Emma и Lucas обсуждают стек вызовов в JavaScript",
    "ariaLabel": "JavaScript call stack dialogue",
    "lines": [
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is the call stack in JavaScript?",
        "translation": "Что такое стек вызовов в JavaScript?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It is a structure that keeps track of the execution contexts that are currently active.",
        "translation": "Это структура, которая отслеживает активные контексты выполнения."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How does the call stack organise function calls?",
        "translation": "Как стек вызовов организует вызовы функций?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It follows a last in, first out order, so the most recent function call finishes first.",
        "translation": "Он работает по принципу «последним пришёл, первым вышел», поэтому последний вызов функции завершается первым."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens when a function is called?",
        "translation": "Что происходит при вызове функции?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "A new execution context is created and placed on top of the call stack.",
        "translation": "Создаётся новый контекст выполнения и помещается на вершину стека вызовов."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens when that function returns?",
        "translation": "Что происходит, когда эта функция возвращает результат?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Its execution context is removed, and JavaScript continues in the context below it.",
        "translation": "Её контекст выполнения удаляется, и JavaScript продолжает работу в контексте, расположенном ниже."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can JavaScript execute two stack frames at the same time?",
        "translation": "Может ли JavaScript одновременно выполнять два кадра стека?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "On one JavaScript thread, only the context at the top of the stack is actively executing.",
        "translation": "В одном потоке JavaScript активно выполняется только контекст на вершине стека."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens when one function calls another?",
        "translation": "Что происходит, когда одна функция вызывает другую?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The new call is added above the current one, and the current function pauses until the nested call finishes.",
        "translation": "Новый вызов добавляется над текущим, а текущая функция приостанавливается до завершения вложенного вызова."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How is the call stack related to synchronous code?",
        "translation": "Как стек вызовов связан с синхронным кодом?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Synchronous code runs directly on the stack and completes before later stack work can continue.",
        "translation": "Синхронный код выполняется непосредственно в стеке и завершается до продолжения последующей работы."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Why must the stack become empty before queued tasks can run?",
        "translation": "Почему стек должен стать пустым перед выполнением задач из очереди?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The event loop can schedule new task callbacks only when the current synchronous execution has finished.",
        "translation": "Цикл событий может запланировать новые обработчики задач только после завершения текущего синхронного выполнения."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What causes a stack overflow?",
        "translation": "Что вызывает переполнение стека?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It happens when too many nested calls are added without returning, often because of uncontrolled recursion.",
        "translation": "Оно происходит, когда добавляется слишком много вложенных вызовов без возврата, часто из-за неконтролируемой рекурсии."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Why is the call stack useful for debugging?",
        "translation": "Почему стек вызовов полезен при отладке?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It shows the chain of active function calls and helps identify where an error occurred and how execution reached that point.",
        "translation": "Он показывает цепочку активных вызовов функций и помогает определить, где произошла ошибка и как выполнение дошло до этой точки."
      }
    ]
  },
  {
    "id": "javascript-prototypes-core",
    "title": "Прототипы в JavaScript",
    "description": "Emma и Liam обсуждают основные принципы работы прототипов в JavaScript",
    "ariaLabel": "JavaScript prototypes core concepts dialogue",
    "lines": [
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is a prototype in JavaScript?",
        "translation": "Что такое прототип в JavaScript?"
      },
      {
        "speaker": "liam",
        "name": "Liam",
        "text": "A prototype is an object that another object can use as a source of inherited properties.",
        "translation": "Прототип — это объект, который другой объект может использовать как источник унаследованных свойств."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Does JavaScript copy those properties into the new object?",
        "translation": "JavaScript копирует эти свойства в новый объект?"
      },
      {
        "speaker": "liam",
        "name": "Liam",
        "text": "No. The object keeps a link to its prototype and delegates property searches to it.",
        "translation": "Нет. Объект сохраняет ссылку на свой прототип и передаёт ему поиск свойств."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens when a property is not found on the object itself?",
        "translation": "Что происходит, когда свойство не найдено в самом объекте?"
      },
      {
        "speaker": "liam",
        "name": "Liam",
        "text": "JavaScript searches the prototype, then its prototype, and continues through the prototype chain.",
        "translation": "JavaScript проверяет прототип, затем его прототип и продолжает поиск по цепочке прототипов."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Where does the prototype chain end?",
        "translation": "Где заканчивается цепочка прототипов?"
      },
      {
        "speaker": "liam",
        "name": "Liam",
        "text": "It ends at null, which means that there is no next prototype to search.",
        "translation": "Она заканчивается значением null, которое означает, что следующего прототипа для поиска нет."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Do most ordinary objects share a common prototype?",
        "translation": "У большинства обычных объектов есть общий прототип?"
      },
      {
        "speaker": "liam",
        "name": "Liam",
        "text": "Yes. Their chains usually include the standard object prototype near the top.",
        "translation": "Да. Обычно их цепочки включают стандартный прототип объектов ближе к вершине."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is the difference between an own property and an inherited property?",
        "translation": "В чём разница между собственным и унаследованным свойством?"
      },
      {
        "speaker": "liam",
        "name": "Liam",
        "text": "An own property belongs directly to the object, while an inherited property is found through its prototype chain.",
        "translation": "Собственное свойство принадлежит непосредственно объекту, а унаследованное находится через цепочку прототипов."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can an own property have the same name as an inherited property?",
        "translation": "Может ли собственное свойство иметь такое же имя, как унаследованное?"
      },
      {
        "speaker": "liam",
        "name": "Liam",
        "text": "Yes. The own property hides the inherited one, a behavior called property shadowing.",
        "translation": "Да. Собственное свойство скрывает унаследованное. Такое поведение называется затенением свойства."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Why are methods often stored on prototypes?",
        "translation": "Почему методы часто хранятся в прототипах?"
      },
      {
        "speaker": "liam",
        "name": "Liam",
        "text": "It allows many objects to share one method instead of storing a separate function in every object.",
        "translation": "Это позволяет многим объектам совместно использовать один метод вместо хранения отдельной функции в каждом объекте."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How are constructor functions connected to prototypes?",
        "translation": "Как функции-конструкторы связаны с прототипами?"
      },
      {
        "speaker": "liam",
        "name": "Liam",
        "text": "When a constructor creates an instance, the instance is linked to the object stored in the constructor prototype property.",
        "translation": "Когда конструктор создаёт экземпляр, этот экземпляр связывается с объектом, хранящимся в свойстве прототипа конструктора."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Do JavaScript classes use a completely different inheritance system?",
        "translation": "Используют ли классы JavaScript совершенно другую систему наследования?"
      },
      {
        "speaker": "liam",
        "name": "Liam",
        "text": "No. Classes provide clearer syntax, but their instance methods and inheritance still rely on prototypes.",
        "translation": "Нет. Классы предоставляют более понятный синтаксис, но их методы экземпляров и наследование по-прежнему основаны на прототипах."
      }
    ]
  },


  {
    "id": "javascript-abort-controller",
    "title": "AbortController в JavaScript",
    "description": "Emma и Lucas обсуждают AbortController в JavaScript",
    "ariaLabel": "JavaScript AbortController dialogue",
    "lines": [
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is AbortController in JavaScript?",
        "translation": "Что такое AbortController в JavaScript?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It is an object used to request the cancellation of operations that support an abort signal.",
        "translation": "Это объект, который используется для запроса отмены операций, поддерживающих сигнал отмены."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Does the controller cancel the operation directly?",
        "translation": "Контроллер отменяет операцию напрямую?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. It sends an abort signal, and the receiving operation decides how to react.",
        "translation": "Нет. Он отправляет сигнал отмены, а принимающая операция решает, как на него реагировать."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is the purpose of the signal?",
        "translation": "Для чего нужен сигнал?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The signal carries the cancellation state and allows an operation to detect when cancellation is requested.",
        "translation": "Сигнал хранит состояние отмены и позволяет операции определить, когда была запрошена отмена."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Which browser operation commonly supports it?",
        "translation": "Какая браузерная операция часто его поддерживает?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Network requests are a common example, especially requests started through the browser fetch system.",
        "translation": "Распространённым примером являются сетевые запросы, особенно запросы, запущенные через браузерный механизм получения данных."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens when a network request is aborted?",
        "translation": "Что происходит, когда сетевой запрос отменяется?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The request usually stops, and its promise becomes rejected with an error related to the cancellation.",
        "translation": "Запрос обычно останавливается, а его промис отклоняется с ошибкой, связанной с отменой."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can one controller cancel several operations?",
        "translation": "Может ли один контроллер отменить несколько операций?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. Several operations can receive the same signal and react to one cancellation request.",
        "translation": "Да. Несколько операций могут получить один и тот же сигнал и отреагировать на один запрос отмены."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can the same controller be reused after cancellation?",
        "translation": "Можно ли повторно использовать тот же контроллер после отмены?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. Once its signal is aborted, it remains aborted, so a new controller is needed for new operations.",
        "translation": "Нет. После отмены сигнал навсегда остаётся отменённым, поэтому для новых операций нужен новый контроллер."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can an application check whether cancellation has already happened?",
        "translation": "Может ли приложение проверить, произошла ли уже отмена?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. The signal stores a boolean state that shows whether it has already been aborted.",
        "translation": "Да. Сигнал хранит логическое состояние, которое показывает, был ли он уже отменён."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can application code listen for the cancellation?",
        "translation": "Может ли код приложения отслеживать отмену?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. The signal dispatches an abort event, so custom asynchronous work can respond and release resources.",
        "translation": "Да. Сигнал отправляет событие отмены, поэтому пользовательская асинхронная работа может отреагировать и освободить ресурсы."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Does cancellation undo work that has already finished?",
        "translation": "Отменяет ли отмена работу, которая уже была завершена?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. It cannot reverse completed work, and it only affects operations that actively support and observe the signal.",
        "translation": "Нет. Она не может обратить уже завершённую работу и влияет только на операции, которые поддерживают и отслеживают сигнал."
      }
    ]
  },
  {
    "id": "javascript-async-generators",
    "title": "Асинхронные генераторы в JavaScript",
    "description": "Emma и Lucas обсуждают асинхронные генераторы в JavaScript",
    "ariaLabel": "JavaScript async generators dialogue",
    "lines": [
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is an asynchronous generator in JavaScript?",
        "translation": "Что такое асинхронный генератор в JavaScript?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It is a function that can wait for asynchronous operations and produce multiple values over time.",
        "translation": "Это функция, которая может ожидать асинхронные операции и выдавать несколько значений с течением времени."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How is it different from a regular asynchronous function?",
        "translation": "Чем он отличается от обычной асинхронной функции?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "A regular asynchronous function returns one final promise, while an asynchronous generator can deliver many results.",
        "translation": "Обычная асинхронная функция возвращает один итоговый промис, а асинхронный генератор может предоставлять множество результатов."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Does calling an asynchronous generator start its body immediately?",
        "translation": "Начинает ли асинхронный генератор выполнять своё тело сразу после вызова?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. Calling it creates an asynchronous iterator, and execution begins only when the consumer requests a value.",
        "translation": "Нет. Его вызов создаёт асинхронный итератор, а выполнение начинается только тогда, когда потребитель запрашивает значение."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What does the consumer receive after requesting a value?",
        "translation": "Что получает потребитель после запроса значения?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The consumer receives a promise that eventually provides an iteration result.",
        "translation": "Потребитель получает промис, который со временем предоставляет результат итерации."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What information does an iteration result contain?",
        "translation": "Какую информацию содержит результат итерации?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It contains the produced value and a flag showing whether the generator has finished.",
        "translation": "Он содержит выданное значение и признак того, завершил ли генератор работу."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can the generator wait before producing the next value?",
        "translation": "Может ли генератор ожидать перед выдачей следующего значения?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. It can pause for an asynchronous operation and continue when that operation is settled.",
        "translation": "Да. Он может приостановиться для выполнения асинхронной операции и продолжить работу после её завершения."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How are asynchronous generator values usually consumed?",
        "translation": "Как обычно получают значения асинхронного генератора?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "They are commonly consumed with asynchronous iteration, which waits for each value before requesting the next one.",
        "translation": "Обычно их получают с помощью асинхронной итерации, которая ожидает каждое значение перед запросом следующего."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Does the consumer receive all values at once?",
        "translation": "Получает ли потребитель все значения сразу?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. Values can be delivered gradually, which is useful for streams, pages of data, and repeated network updates.",
        "translation": "Нет. Значения могут поступать постепенно, что полезно для потоков, страниц данных и повторяющихся сетевых обновлений."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can the consumer stop before the generator finishes naturally?",
        "translation": "Может ли потребитель остановиться до естественного завершения генератора?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. When iteration stops early, the generator can be asked to finish and perform its cleanup work.",
        "translation": "Да. При досрочной остановке итерации генератору может быть отправлен запрос на завершение и выполнение очистки ресурсов."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How are errors handled in an asynchronous generator?",
        "translation": "Как обрабатываются ошибки в асинхронном генераторе?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "An unhandled error rejects the pending iteration promise and usually ends the generator.",
        "translation": "Необработанная ошибка отклоняет ожидающий промис итерации и обычно завершает работу генератора."
      }
    ]
  },
  {
    "id": "javascript-async-iterators",
    "title": "Асинхронные итераторы в JavaScript",
    "description": "Emma и Lucas обсуждают асинхронные итераторы в JavaScript",
    "ariaLabel": "JavaScript asynchronous iterators dialogue",
    "lines": [
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What is an asynchronous iterator in JavaScript?",
        "translation": "Что такое асинхронный итератор в JavaScript?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It is an object that provides a sequence of values that may become available over time.",
        "translation": "Это объект, который предоставляет последовательность значений, способных становиться доступными с течением времени."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How is it different from a regular iterator?",
        "translation": "Чем он отличается от обычного итератора?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "A regular iterator returns an iteration result immediately, while an asynchronous iterator returns a promise for that result.",
        "translation": "Обычный итератор возвращает результат итерации сразу, а асинхронный итератор возвращает промис этого результата."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens when the consumer requests the next value?",
        "translation": "Что происходит, когда потребитель запрашивает следующее значение?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The iterator returns a promise that settles when the next iteration result is ready.",
        "translation": "Итератор возвращает промис, который завершается, когда следующий результат итерации становится готов."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What information is stored in an iteration result?",
        "translation": "Какая информация хранится в результате итерации?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It contains a value and a completion flag that indicates whether the sequence has ended.",
        "translation": "Он содержит значение и признак завершения, который показывает, закончилась ли последовательность."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can an asynchronous iterator pause between values?",
        "translation": "Может ли асинхронный итератор приостанавливаться между значениями?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. It can wait for network data, timers, user actions, or other asynchronous operations.",
        "translation": "Да. Он может ожидать сетевые данные, таймеры, действия пользователя или другие асинхронные операции."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "How are asynchronous iterators usually consumed?",
        "translation": "Как обычно используются асинхронные итераторы?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "They are commonly consumed with an asynchronous loop that waits for each value before continuing.",
        "translation": "Обычно они используются с помощью асинхронного цикла, который ожидает каждое значение перед продолжением."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Does the loop request every value at the same time?",
        "translation": "Запрашивает ли цикл все значения одновременно?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "No. It normally requests one value, waits for it, processes it, and then requests the next value.",
        "translation": "Нет. Обычно он запрашивает одно значение, ожидает его, обрабатывает, а затем запрашивает следующее."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Why is that useful for large data sources?",
        "translation": "Почему это полезно для больших источников данных?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "It allows data to be processed gradually without loading the entire sequence into memory.",
        "translation": "Это позволяет обрабатывать данные постепенно, не загружая всю последовательность в память."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "Can iteration stop before the sequence is complete?",
        "translation": "Может ли итерация остановиться до завершения последовательности?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "Yes. Early termination can notify the iterator so it can close connections, release resources, or stop producing values.",
        "translation": "Да. Досрочное завершение может уведомить итератор, чтобы он закрыл соединения, освободил ресурсы или прекратил создавать значения."
      },
      {
        "speaker": "emma",
        "name": "Emma",
        "text": "What happens if the iterator cannot produce the next value?",
        "translation": "Что происходит, если итератор не может предоставить следующее значение?"
      },
      {
        "speaker": "lucas",
        "name": "Lucas",
        "text": "The promise for the next iteration result becomes rejected, and the consumer can handle the error with normal asynchronous error handling.",
        "translation": "Промис следующего результата итерации отклоняется, а потребитель может обработать ошибку с помощью обычных средств асинхронной обработки ошибок."
      }
    ]
  }
];
