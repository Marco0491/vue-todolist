const app = new Vue({
    el: '#root',
    data: {
        newElementText: '',
        thingsToDo: []
    },
    methods: {
        addListElement(text, condition) {
            if (text.trim() != '') {
                const newElement = {
                    text,
                    done: condition,
                };
                this.thingsToDo.push(newElement);
                this.newElementText = '';
                console.log('elemento aggiunto');
            } else {
                console.log('non hai aggiunto nessun elemento')
            }
        },
        removeListElement(elementIndex) {
            this.thingsToDo.splice(elementIndex, 1)
            console.log('elemento rimosso');
        },
        isDone(index) {
            this.thingsToDo[index].done = !this.thingsToDo[index].done;
        }
    }
});