const app = new Vue({
    el: '#root',
    data: {
        newElementText: '',
        done: false,
        thingsToDo: []
    },
    methods: {
        addListElement (text, condition) {
            if (text.trim() != '') {
                const newElement = {
                    text,
                    condition
                };
                this.thingsToDo.push(newElement);
                this.newElementText = '';
                console.log('elemento aggiunto');
            } else {
                console.log('non hai aggiunto nessun elemento')
            }
        },
        removeListElement (elementIndex) {
            this.thingsToDo.splice(elementIndex, 1)
            console.log('elemento rimosso');
        },
        isDone () {
            this.done = !this.done;
        }
    }
});