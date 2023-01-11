//Задача №1. Будильник-колыбельная

class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id){
        if (id === undefined) {
            throw new Error('error text');
        }

        if (this.alarmCollection.findIndex(ring => ring.id === id) !== -1) {
            console.error('error text');
            return;
        }

        this.alarmCollection.push({id: id, time: time, callback: callback});
    }

    removeClock(id){
        const newAlarmCollection = this.alarmCollection.filter(elem => elem.id !== id);

        if (this.alarmCollection.length === newAlarmCollection.length) { 
            return false;
        } else {
            this.alarmCollection = newAlarmCollection;
            return true;
        }
    }

    getCurrentFormattedTime(){
        const now = new Date();
        return now.toLocaleTimeString().slice(0, 5);
    }

    start(){
        function checkClock(ring){
            if (getCurrentFormattedTime() === ring.time) {
                ring.callback();
            }
        }

        if (this.timerId === undefined) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(ring => checkClock(ring))
            }, 60000);
        }
    }

    stop(){
        if (this.timerId !== undefined) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach(ring => console.log(`Это id звонка: ${ring.id}, а это его время: ${ring.time}`));
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}


function testCase(){
    let myAlarmClock = new AlarmClock();

    function time(num) {
        let time = new Date();
        time.setMinutes(time.getMinutes() + num);
        return time.toLocaleTimeString().slice(0, 5);
    };

    function firstCallback() {
        let count = 0;
        setInterval (() => {
            console.log("Пора вставать");
            count++;    
            if (count === 4) {
                clearInterval(intervalId);
                return;
            }
        }, 30000);
    }

    myAlarmClock.addClock(time(0), firstCallback, 1);
    
    myAlarmClock.addClock(time(1), () => { console.log("Вставай давай!"); myAlarmClock.removeClock(2) }, 2);
    
    myAlarmClock.addClock(time(1), () => console.log("Проснись наконец!"));
    
    myAlarmClock.addClock(time(2), () => { 
        console.log("Вставай, а то проспишь!");
        myAlarmClock.clearAlarms();
        myAlarmClock.printAlarms();
    }, 1);
    
    myAlarmClock.addClock(time(5), () => console.log("Последний шанс вставать и всё успеть"), 1);
    
    myAlarmClock.printAlarms();
    
    myAlarmClock.start();
}

testCase();