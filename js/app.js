Vue.use(VueTouch, { name: "v-touch" });

new Vue({
  el: "#app",
  data: {
    report: false, // ТУТ СДЕЛАТЬ ПРОВЕРКУ НА ОТЧЕТ
    card_counter: 0, // ТУТ СЧИТАЕТСЯ КАУНТЕР
    mounthly: 0,
    peoples: 0,
    balance: 20000,
    change: 0,
    change_peoples: 0,
    LastAction: 0,
    Buttons: true,
    none: false,
    percetange: 0,
    sob1: 0,
    Next: true,
    count: 0,
    cards: [
      {
        id: 1,
        condition:
          "Ваш друг предложил вам сходить на презентацию компании, пойдете?",

        Buttons: false,
      },
      {
        id: 2,
        condition:
          "Сетевой бизнес - это когда ты строишь маленькую экономику на рельном товаре. Вы готовы стартануть прямо сейчас? ",
        Buttons: false,
        false: "Это действие стоит - 10000₽",
      },
      {
        id: 3,
        condition:
          "Нужно уделить 5 часов изучение материалов. Изучить или сразу в бой?",
        change: 10000,
        action: 0,
        LastAction: -10000,
        change_peoples: 1,
        action_peoples: 1,
      },
      {
        id: 4,
        condition:
          "Теперь вы лучше понимаете то, чем занимаетесь. Вы стали убедительнее",
        Buttons: false,
      },
      {
        id: 5,
        condition: "Рассказать своим друзьям и родственникам о новом проэкте",
      },
      {
        id: 6,
        condition:
          "Вы нашли 15 человек, но многие из них отказались вас слушать, однако, вам удалось убедить 2 людей присоедениться",
        done: "2 человека в структуру и +10000 рублей на баланс",
        change: 10000,
        action: 1,
        Buttons: false,
        LastAction: "+10000",
        change_peoples: 2,
        action_peoples: 1,
      },
      {
        id: 7, //квартал
        card_counter: 1,
        Buttons: false,
      },
      {
        id: 8,
        condition: "Пройти обучение у лидера",
      },
      {
        id: 9,
        condition:
          "Во время обучения у лидера вы смогли научиться новым техникам продаж.",
        done: "+3 человека в команду",
        Buttons: false,
        change_peoples: 3,
        action_peoples: 1,
      },
      {
        id: 10,
        condition: "Ноутбук стал тормозить. Заказать мастера починить его?",
        false: "Будет стоит 3000 рублей",
        //sob0
      },
      {
        id: 11,
        condition: "Теперь ноутбук снова работает.",
        change: 3000,
        action: 0,
        Buttons: false,
      },
      {
        id: 12, //квартал
        card_counter: 1,
        Buttons: false,
      },
      {
        id: 13,
        condition: "Создать страницы в социальных сетях",
      },
      {
        id: 14,
        condition: "Теперь больше людей знают о вас.",
        done: "+4 человек в структуру",
        change_peoples: 4,
        action_peoples: 1,
        Buttons: false,
      },
      {
        id: 15,
        condition:
          "Пройти вебинар, который организует компания. Обучение займет много времени",
      },
      {
        id: 16,
        condition: "Это мудрое решение, на обучении вы встретили новых людей.",
        done: "+5 человек в структуру",
        change_peoples: 4,
        action_peoples: 1,
        Buttons: false,
      },
      {
        id: 17,
        condition: "Распечатать свои визитки. Будет стоить 1000 рублей",
        false: "Это действие стоит - 1000₽",
      },
      {
        id: 18,
        change: 1000,
        Buttons: false,
        action: 0,
        done: "Ваши визитки стали дарить новым людям. +7 человек в структуру",
        change_peoples: 7,
        action_peoples: 1,
        LastAction: -1000,
      },
      {
        id: 19, //квартал
        card_counter: 1,
        Buttons: false,
      },
      {
        id: 20,
        condition: "Ваша семья просит уделить ей весь день. Уделите?",
      },
      {
        id: 21,
        done: "Вы отлично провели время и теперь в вас еще больше сил работать",
        Buttons: false,
      },
      //---------------------------------ЧАСТЬ 2--------------------------------
      {
        id_V2: 1,
        condition: "Выше стоящий лидер проводит прямой эфир. Пойти на него?",
      },
      {
        id_V2: 2,
        condition: "Вы задавали хорошие вопросы и вы увеличили свое влияние",
        done: "+5 человек в струкруту",
        change_peoples: 5,
        action_peoples: 1,
        Buttons: false,
      },
      {
        id_V2: 3,
        condition:
          "Ваща компания организовывает соревнования, будете принимать участие? Приз - лидерский бонус",
        //sob1
      },
      {
        id_V2: 4,
        condition: "Вы смогли победить. Чем это обернется для вас?",
        Buttons: false,
      },
      {
        id_V2: 5, //квартал
        card_counter: 1,
        Buttons: false,
      },
      {
        id_V2: 6,
        condition: "Вам подарили на день рождение 30000 рублей",
        Buttons: false,
      },
      {
        id_V2: 7,
        done: "+30000 рублей к балансу",
        change: 30000,
        action: 1,
        Buttons: false,
        LastAction: "+30000",
      },
      {
        id_V2: 8,
        condition:
          "Ваш друг предлагает вам сходить на нетворкинг, но вы запланировали ужин с семьей. Пойдете?",
      },
      {
        id_V2: 9,
        condition:
          "На нетворкинге вы встретили лидера структуры. Вы так мастерски объяснили свой палн, что он примкнул к вашей команде.",
        done: "+20 человек",
        change_peoples: 20,
        action_peoples: 1,
        Buttons: false,
      },
      {
        id_V2: 10,
        condition: "Ваш телефон уже совсем плохо справляется, купить новый?",
        //sob3
      },
      {
        id_V2: 11,
        condition: "Новый телефон позволил вам быть эффективней.",
        done: "+5 человек в структуре",
        change_peoples: 5,
        action_peoples: 1,
        Buttons: false,
      },
      {
        id_V2: 12,
        card_counter: 1,
        Buttons: false, //квартал
      },
      {
        id_V2: 13,
        condition:
          "Лидер из другой сетевой компании приглашает вас на бесплатный мастер-класс, пойдете?",
      },
      {
        id_V2: 14,
        condition: "На мероприятии вы смогли найти новых людей в структуру",
        done: "+4 человека",
        change_peoples: 4,
        action_peoples: 1,
        Buttons: false,
      },
      {
        id_V2: 15,
        condition:
          "У вас украли Instagram-аккаунт. Будете добиваться возврата?",
      },
      {
        id_V2: 16,
        condition: "Вы отправили письмо с просьбой разобраться.",
        done: "Вам вернули аккаунт",
        Buttons: false,
      },
      //------------------------------------ЧАСТЬ 3--------------------------
      {
        id_V3: 1,
        condition: "Вы выиграли премиальный бонус от компании",
        Buttons: false,
        sob1: 0,
      },
      {
        id_V3: 2,
        done: "+70000 рублей",
        change: 70000,
        action: 1,
        Buttons: false,
        LastAction: "+70000",
        sob1: 0,
      },
      {
        id_V3: 3,
        card_counter: 1,
        Buttons: false, //квартал
      },
      {
        id_V3: 4,
        condition: "У вас сломался телефон",
        Buttons: false,
        sob3: 0,
      },
      {
        id_V3: 5,
        false: "Урон балансу -20000 рублей",
        change: 20000,
        action: 0,
        Buttons: false,
        LastAction: "-20000",
        sob3: 0,
      },
      {
        id_V3: 6,
        condition:
          "Ваша команда предлагает вам организовать большой семнар для новых участников? Стоимость действия 100000 рублей",
      },
      {
        id_V3: 7,
        condition: "Вы организовали самый большой мастер-класс в городе.",
        false: "-100000",
        done: "+40 человек",
        change: 100000,
        action: 0,
        Buttons: false,
        change_peoples: 40,
        action_peoples: 1,
        LastAction: "-100000",
      },
      {
        id_V3: 8,
        condition:
          "Ваш коллега нашел сервис '90 клиентов за 1 день' попробуете воспользоваться им? Стоит 5000 рублей",
      },
      {
        id_V3: 9,
        false: "-5000 рублей и -5% ежемесячного дохода на 1 месяц",
        change: 5000,
        percetange: 5,
        action: 0,
        Buttons: false,
        LastAction: "-5000",
      },
      //---------------------------------ЧАСТЬ 4------------------
    ],
  },
  methods: {
    round: function () {
      setTimeout(
        function () {
          this.cards.shift();
        }.bind(this),
        500
      );
      console.log(this.cards[0].id);
      setTimeout(
        function () {
          this.check_balance();
        }.bind(this),
        500
      );
      setTimeout(
        function () {
          this.quarterly_report();
        }.bind(this),
        500
      );
    },
    round_left: function () {
      setTimeout(
        function () {
          this.cards.shift();
        }.bind(this),
        500
      );
      setTimeout(
        function () {
          this.check_round_left();
        }.bind(this),
        500
      );
      setTimeout(
        function () {
          this.check_balance();
        }.bind(this),
        500
      );
      console.log(this.cards[0].id);
    },
    round_right: function () {
      setTimeout(
        function () {
          this.cards.shift();
        }.bind(this),
        500
      );
      setTimeout(
        function () {
          this.check_round_right();
        }.bind(this),
        500
      );
      setTimeout(
        function () {
          this.check_balance();
        }.bind(this),
        500
      );
      setTimeout(
        function () {
          this.quarterly_report();
        }.bind(this),
        500
      );
      console.log(this.cards[0].id);
    },
    quarterly_report: function () {
      switch (this.cards[0].card_counter) {
        case 1:
          this.report = true;
          this.mounthly = 2000 * this.peoples;
          break;
        default:
          this.report = false;
      }
    },
    check_balance: function () {
      switch (this.cards[0].action) {
        case 0:
          this.balance -= this.cards[0].change;
          this.LastAction = 0 - this.cards[0].change;
          break;
        case 1:
          this.balance += this.cards[0].change;
          this.LastAction = 0 + this.cards[0].change;
          break;
        default:
          this.balance += 0;
      }
      switch (this.cards[0].Buttons) {
        case false:
          this.none = true;
          this.ButtonsLeft = false;
          this.ButtonsRight = false;
          this.Next = true;
          break;
        default:
          this.ButtonsLeft = true;
          this.ButtonsRight = true;
          this.Next = false;
      }
      switch (this.cards[0].action_peoples) {
        case 0:
          this.peoples -= this.cards[0].change_peoples;
          break;
        case 1:
          this.peoples += this.cards[0].change_peoples;
          break;
        default:
          this.peoples += 0;
      }

      console.log(this.cards[0].id_V3);
    },
    check_round_left: function () {
      this.balance += this.peoples * 2000;
      switch (this.cards[0].id) {
        case 4:
          this.cards[0].condition = "Ничего не произошло";
          break;
        case 6:
          this.cards[0].condition = "Ничего не произошло";
          this.cards[0].done = " ";
          this.cards[0].change = 0;
          this.cards[0].LastAction = 0;
          this.cards[0].change_peoples = 0;
          this.cards[0].Buttons = false;
          break;
        case 9:
          this.cards[0].condition = "Ничего не произошло";
          this.cards[0].done = " ";
          this.cards[0].change = 0;
          this.cards[0].LastAction = 0;
          this.cards[0].change_peoples = 0;
          this.cards[0].Buttons = false;
          break;
        case 11:
          this.cards[0].condition = "Ничего не произошло";
          this.cards[0].done = " ";
          this.cards[0].change = 0;
          this.cards[0].LastAction = 0;
          this.cards[0].change_peoples = 0;
          this.cards[0].Buttons = false;
          break;
        case 14:
          this.cards[0].condition = "Ничего не произошло";
          this.cards[0].done = " ";
          this.cards[0].change = 0;
          this.cards[0].LastAction = 0;
          this.cards[0].change_peoples = 0;
          this.cards[0].Buttons = false;
          break;
        case 16:
          this.cards[0].condition = "Ничего не произошло";
          this.cards[0].done = " ";
          this.cards[0].change = 0;
          this.cards[0].LastAction = 0;
          this.cards[0].change_peoples = 0;
          this.cards[0].Buttons = false;
          break;
        case 18:
          this.cards[0].condition = "Ничего не произошло";
          this.cards[0].done = " ";
          this.cards[0].change = 0;
          this.cards[0].LastAction = 0;
          this.cards[0].change_peoples = 0;
          this.cards[0].Buttons = false;
          break;
        case 21:
          this.cards[0].condition = "Ничего не произошло";
          this.cards[0].done = " ";
          this.cards[0].change = 0;
          this.cards[0].LastAction = 0;
          this.cards[0].change_peoples = 0;
          this.cards[0].Buttons = false;
          break;
      }
      switch (this.cards[0].id_V2) {
        case 2:
          this.cards[0].condition = "Ничего не произошло";
          this.cards[0].done = " ";
          this.cards[0].change = 0;
          this.cards[0].LastAction = 0;
          this.cards[0].change_peoples = 0;
          this.cards[0].Buttons = false;
          break;
        case 4:
          this.cards[0].condition = "Никакого бонуса :C";
          this.cards[0].done = " ";
          this.cards[0].change = 0;
          this.cards[0].LastAction = 0;
          this.cards[0].change_peoples = 0;
          this.sob1 = 0;
          this.cards[0].Buttons = false;
          this.cards = this.cards.filter((n) => n.sob1 === this.id);
          break;
        case 9:
          this.cards[0].condition = "Ничего не произошло";
          this.cards[0].done = " ";
          this.cards[0].change = 0;
          this.cards[0].LastAction = 0;
          this.cards[0].change_peoples = 0;
          this.cards[0].Buttons = false;
          break;
        case 11:
          this.cards[0].condition = "Ничего не произошло";
          this.cards[0].done = " ";
          this.cards[0].change = 0;
          this.cards[0].LastAction = 0;
          this.cards[0].change_peoples = 0;
          this.cards[0].Buttons = false;
          break;
        case 14:
          this.cards[0].condition = "Ничего не произошло";
          this.cards[0].done = " ";
          this.cards[0].change = 0;
          this.cards[0].LastAction = 0;
          this.cards[0].change_peoples = 0;
          this.cards[0].Buttons = false;
          break;
        case 16:
          this.cards[0].condition =
            "Вам пришлось создать новый профиль и заново его раскрутить.";
          this.cards[0].done = " ";
          this.cards[0].false = "-20000 рублей";
          this.cards[0].change = 20000;
          (this.cards[0].action = 0), (this.cards[0].LastAction = "-20000");
          this.cards[0].change_peoples = 0;
          this.cards[0].Buttons = false;
          break;
      }
      switch (this.cards[0].id_V3) {
        case 7:
          this.cards[0].condition =
            "Ваша команда расстроилась из-за того, что их идеи не нашли отклика";
          this.cards[0].done = " ";
          this.cards[0].change = 0;
          this.cards[0].LastAction = 0;
          this.cards[0].change_peoples = 0;
          this.cards[0].Buttons = false;
          break;
        case 9:
          this.cards[0].condition = "Ничего не происходит";
          this.cards[0].done = " ";
          this.cards[0].change = 0;
          this.cards[0].LastAction = 0;
          this.cards[0].change_peoples = 0;
          this.cards[0].Buttons = false;
      }
    },
    check_round_right: function () {
      this.balance += this.peoples * 2000;
      switch (this.cards[0].id_V2) {
        case 11:
          this.cards = this.cards.filter((n) => n.sob3 === this.id);
          break;
      }
      switch (this.cards[0].id_V3) {
        case 9:
          this.balance +=
            ((this.peoples * 2000) / 100) * this.cards[0].percetange;
          break;
      }
    },
  },
});
