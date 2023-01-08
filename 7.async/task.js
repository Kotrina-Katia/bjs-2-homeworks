//Задача №1. Будильник-колыбельная

class AlarmClock{
    constructor(){
        this.alarmCollection = [];
        this.timerId;
    }

    addClock(time, callback, id){
        if (id === undefined) {
            throw new Error('error text');
        }

        for (i = 0; i < this.alarmCollection.lenght; i++) {
            if (this.alarmCollection[i].id === id) {
                console.error('error text');
                return;
            }
        }

        this.alarmCollection.push({id: id, time: time, callback: callback});
    }

    removeClock(id){
        const newAlarmcollection = this.alarmCollection.filter(elem => elem.id !== id);

        if (this.alarmCollection.length === newAlarmcollection.length) { 
            return false;
        } else {
            return true;
        }
    }

    getCurrentFormattedTime(){
        const now = new Date;
        return now.slice(16, 5);
    }

    start(){
        function checkClock(ring){
            if (getCurrentFormattedTime() === ring.time) {
                ring.callback();
            }
        }

        for (i = 0; i < this.alarmCollection.length; i++) {
            if (this.timerId === undefined) {
                //создайте новый интервал
            } else {
                checkClock();
            }
        }

        ("свойство идентификатора текущего таймера") = setInterval();
    }

    stop(){

    }

    printAlarms(){

    }

    clearAlarms(){

    }
}

