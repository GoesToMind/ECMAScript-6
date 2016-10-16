const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSumary: function () {
    return this.members.map(member => `${member} is on team ${this.teamName}`);
  },
};

console.log(team.teamSumary());
