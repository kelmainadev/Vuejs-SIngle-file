Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value')

new Vue({
  // Where the app will be instantiated on the page
  el: '#app',

  // Variables that you want it to have access to or start out with
  data: {
    newHabit: '',
    habits: []
  },
  
  // When this module is ready run this
  ready: function() {
    this.loadHabits();
  },

  // All the methods you want the view to have access to, basically an object of functions
  methods: {
    deleteHabit: function(habit) {
      /*
      this.$http.delete('/api/habits/' + habitId, function(data) {
        _this.$set('habits', data.habits);
      };
      */this.habits.$remove(habit);
    },

    loadHabits: function() {
      /*
      var _this = this;
      this.$http.get('/api/habits', function(habits) {
        _this.$set('habits', habits);
      });
      */
      
      // Example stub data because we have no API
      this.habits.push({
        id: 1,
        name: 'Taking things personally',
        count: 3
      });
      
      this.habits.push({
        id: 2,
        name: 'Victim thinking',
        count: 1
      });
    },

    createHabitCount: function(habit) {
      /*
      var _this = this;
      this.$http.post('/api/habitcounts', {
        habit_id: habit.id
      }, function(data) {
        _this.$set('habits', data.habits);
      })
      */
      
      habit.count++;
    },

    createHabit: function() {
      /*
      var _this = this
      this.$http.post('api/habits', {
        name: this.newHabit
      }, function(data) {
        return _this.$set('habits', data.habits);
      })
      */

      this.habits.push({
        id: Math.random() * 1000,
        count: 0,
        name: this.newHabitName
      });

      this.newHabitName = '';
    }
  }
});
