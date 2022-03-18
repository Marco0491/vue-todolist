const app = new Vue({
    el: '#root',
    data: {
        newElement: '',
        thingsToDo: []
    },
    methods: {
        addListElement (element) {
            if (element.trim() != '') {
                this.thingsToDo.push(element);
                this.newElement = '';
                console.log('elemento aggiunto');
            } else {
                console.log('non hai aggiunto nessun elemento')
            }
        },
        removeListElement (elementIndex) {
            this.thingsToDo.splice(elementIndex, 1)
            console.log('elemento rimosso');
        }
    }
});