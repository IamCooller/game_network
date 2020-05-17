Vue.use(VueTouch, {name: 'v-touch'});


new Vue({
    el: '#app',
    data: {
        card_counter: 1,
        mounthly:0,
        peoples:0,
        balance: 20000,
        LastAction:0,
        ButtonsLeft: false,
        ButtonsRight: false,
        none: false,
        Next: true,
        cards:[
            {
            "id": 1,
            "condition": "Ваш друг предложил вам сходить на презентацию компании, пойдете?",
            "ButtonsLeft": false
            },
            {
            "id": 2,
            "condition": "Сетевой бизнес - это когда ты строишь маленькую экономику на рельном товаре. Вы готовы стартануть прямо сейчас? ",
            "ButtonsLeft": false,
            "false": "Это действие стоит - 10000",
            },
            {
            "id": 3,
             "condition": "Нужно уделить 5 часов изучение материалов. Изучить или сразу в бой?",
            },    
            {
            "id": 4,
             "condition": "Рассказать своим друзьям и родственникам о новом проэкте",
             
            },
            {
                "id": 5,
                "condition": "Вы нашли 15 человек, но многие из них отказались вас слушать, однако, вам удалось убедить 2 людей присоедениться",
                "done": "2 человека в структуру и +10000 рублей на баланс"
            },
            {
                "id":6,
                "condition": "Ничего не произошло"
                
            },
            {
                "id":7,
                "condition": ""
                
            }                            
        ]

    },
    methods: {
        round: function(){
            this.cards.shift();
            console.log(this.cards[0].id);
            this.check_balance();
        },
        round_left:function(){
            this.cards.shift();
            this.check_balance();
           this.check_round_left();
            console.log(this.cards[0].id);
        },
        round_right:function (){
            this.cards.shift();
            this.check_balance();
            this.check_round_right();
            console.log(this.cards[0].id);
        },
        check_balance:function(){
            if(this.cards[0].id == 3){
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
            }
    },
    check_round_left:function(){
        if(this.cards[0].id == 5)
        {
            this.cards.shift();
            this.cards[0].id == 7;
            console.log(true);
        }
    },
    check_round_right:function(){
        if(this.cards[0].id == 5)
        {
        this.cards[0].id.splice(id,7);
            console.log(false);
        }
    }
}
});
