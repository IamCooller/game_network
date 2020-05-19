Vue.use(VueTouch, {name: 'v-touch'});


new Vue({
    el: '#app',
    data: {
        report: false, // ТУТ СДЕЛАТЬ ПРОВЕРКУ НА ОТЧЕТ
        card_counter: 0, // ТУТ СЧИТАЕТСЯ КАУНТЕР
        mounthly:0,
        peoples:0,
        balance: 20000,
        change: 0,
        change_peoples: 0,
        LastAction:0,
        Buttons:true,
        none: false,
        Next: true,
        count:0,
        cards:[
            {
            "id": 1,
            "condition": "Ваш друг предложил вам сходить на презентацию компании, пойдете?",
            "Buttons": false
            },
            {
            "id": 2,
            "condition": "Сетевой бизнес - это когда ты строишь маленькую экономику на рельном товаре. Вы готовы стартануть прямо сейчас? ",
            "Buttons": false,
            "false": "Это действие стоит - 10000₽",
            },
            {
            "id": 3,
             "condition": "Нужно уделить 5 часов изучение материалов. Изучить или сразу в бой?",
             "change": 10000,
             "action": 0,
             "LastAction": -10000,
             "change_peoples": 1,
            "action_peoples": 1,
            },    
            {
            "id": 4,
             "condition": "Рассказать своим друзьям и родственникам о новом проэкте",
            },
            {
                "id": 5,
                "condition": "Вы нашли 15 человек, но многие из них отказались вас слушать, однако, вам удалось убедить 2 людей присоедениться",
                "done": "2 человека в структуру и +10000 рублей на баланс",
                "change": 10000,
                "action": 1,
                "Buttons": false,
                "LastAction": "+10000",
                "change_peoples": 2,
                "action_peoples": 1,
            },
            {
                "id":6,
                "condition": "Пройти обучение у лидера",
            },
            {
                "id":7,
                "Buttons": false,
            },
            {
                "id":8,
                "condition": "Создать страницы в социальных сетях",
            },
            {
                "id":9,
                "condition": "Пройти вебинар, который организует компания. Обучение займет много времени",
            },
            {
                "id":10,
                "condition": "Распечатать свои визитки. Будет стоить 1000 рублей",
                "false": "Это действие стоит - 1000₽"
            },
            {
                "id":11,
                "change": 1000,
                "Buttons": false,
                "action": 0,
                "false": "Это действие стоит - 1000₽",
                "LastAction": -1000,
            },
        ]

    },
    methods: {
        round: function(){
            setTimeout(function(){this.cards.shift()}.bind(this), 500);
            console.log(this.cards[0].id);
            setTimeout(function(){this.check_balance()}.bind(this), 500);
            setTimeout(function(){this.quarterly_report()}.bind(this), 500);
            console.log(this.card_counter);
        },
        round_left:function(){
            setTimeout(function(){this.cards.shift()}.bind(this), 500);
            setTimeout(function(){this.check_round_left()}.bind(this), 500);
            setTimeout(function(){this.check_balance()}.bind(this), 500);
            setTimeout(function(){this.check_balance()}.bind(this), 500);
            setTimeout(function(){this.quarterly_report()}.bind(this), 500);
            console.log(this.cards[0].id);
            console.log(this.card_counter);
        },
        round_right:function (){
            setTimeout(function(){this.cards.shift()}.bind(this), 500);
            setTimeout(function(){this.check_round_right()}.bind(this), 500);
            setTimeout(function(){this.check_balance()}.bind(this), 500);
            setTimeout(function(){this.quarterly_report()}.bind(this), 500);
            console.log(this.cards[0].id);
            console.log(this.card_counter);
        },
        quarterly_report: function(){
            this.card_counter++;
            console.log(this.report)
            if(this.card_counter == 6){
                this.report = true;
                this.mounthly = 2000 * this.peoples;
                return this.card_counter == 0;
            }
            else{ 
                this.report = false;
            }
        },
        check_balance:function(){
            switch(this.cards[0].action){
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
            switch(this.cards[0].Buttons){
                case false:
                this.none = true;
                this.ButtonsLeft= false;
                this.ButtonsRight= false;
                this.Next= true;
                break;
                default:
                this.ButtonsLeft= true;
                this.ButtonsRight= true;
                this.Next= false;
            }
            switch(this.cards[0].action_peoples){
                case 0:
                this.peoples -= this.cards[0].change_peoples;
                break;
                case 1:
                this.peoples += this.cards[0].change_peoples;
                break;
                default:
                this.peoples +=0;
            }
  
         
           /*  if(this.cards[0].id == 3){
            this.balance -= 10000;
            this.LastAction -= 10000;
            this.Next= false;
            }
            if(this.cards[0].id == 5){
                this.peoples +=2;
                this.balance +=10000;
                this.LastAction = 10000;
            }
            if ((this.cards[0].id == 1 )||(this.cards[0].id == 2)||(this.cards[0].id == 5)){
                //прячет кнопки
                this.none = true;
                this.ButtonsLeft= false;
                this.ButtonsRight= false;
                this.Next= true;
            }else{
                this.ButtonsLeft= true;
                this.ButtonsRight= true;
                this.Next= false;
            } */
    },
    check_round_left:function(){
        this.balance += this.peoples * 2000;
        if(this.cards[0].id == 5)
        {
            this.cards[0].condition="Ничего не произошло";
            this.cards[0].done=" ";
            this.cards[0].change=0;
            this.cards[0].LastAction= 0;
            this.cards[0].change_peoples= 0;
            this.cards[0].Buttons= false;
            console.log(true);
        }
    },
    check_round_right:function(){
        this.balance += this.peoples * 2000;
        
    }
}
});
