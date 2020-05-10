Vue.use(VueTouch, {name: 'v-touch'})


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
            "false": "Это действие стоит - 10000"
            },
            {
            "id": 3,
             "condition": "Ваш друг предложил вам сходить на презентацию компании, пойдете?",
            },    
            {
            "id": 4,
             "condition": "Ваш друг предложил вам сходить на презентацию компании, пойдете?",
            },
            {
            "id": 5,
            "condition": "Ваш друг предложил вам сходить на презентацию компании, пойдете?"
            },                            
        ]

    },
    methods: {
        round:function (){
            this.cards.shift();
            console.log(this.cards[0].id);
            this.check_balance();
        },
        check_balance:function(){
            if(this.cards[0].id == 3){
            this.balance -= 10000;
            this.LastAction -= 10000;
            }
            if ((this.cards[0].id == 1 )||(this.cards[0].id == 2)){
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
       
    
    },
  });

  let arr = ['w', 'y', 'k', 'o', 'p'];
  let eArr = arr.values();
  console.log(eArr.next().value); // w
  console.log(eArr.next().value); // y
  console.log(eArr.next().value); // k
  console.log(eArr.next().value); // o
  console.log(eArr.next().value)
