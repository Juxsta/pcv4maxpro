export const HEADER = [
  { text: 'Order', align: 'center', value: 'index', sortable: false, width: '5%' },
  { text: 'Group', align: 'center', value: 'group', sortable: false, width: '5%' },
  { text: 'Activity', align: 'start', value: 'activity', sortable: false, width: '25%' },

  { text: 'Type', align: 'center', value: 'type', sortable: false, width: '10%' },
  // { text: 'Progress', align: 'start', value: 'progress', sortable: false, width: '25%' },
  // { text: 'Completion', align: 'center', value: 'completion', sortable: false, width: '10%' },
  { text: 'Status', align: 'center', value: 'status', sortable: false, width: '10%' },
  { text: 'Last Updated', align: 'start', value: 'updated', sortable: false, width: '20%' },
  { text: 'Monitor', align: 'center', value: 'click', sortable: false, width: '25%' }
];

export const items = [
  { index: '1', activity: 'Join', completion: 100, updated: 'Today at 7:30pm' },
  {
    index: '2',
    activity: 'Request for Projects',
    completion: 100,
    updated: 'Yesterday at 12:30pm'
  },
  { index: '3', activity: 'Team', completion: 100, updated: 'Jul 12 at 3:30pm' },
  { index: '4', activity: 'Discord', completion: 100, updated: 'Oct 10 at 7:30pm' },
  { index: '5', activity: 'Train', completion: 100, updated: 'Oct 15 at 3:30pm' },
  { index: '6', activity: 'Research', completion: 100, updated: 'Oct 16 at 3:30pm' },
  { index: '7', activity: 'Practice', completion: 100, updated: 'Oct 2 at 7:30pm' },
  { index: '8', activity: 'Ideate', completion: 100, updated: 'Oct 23 at 9:30pm' },
  { index: '9', activity: 'Pitches', completion: 100, updated: 'Oct 5 at 8:30pm' },
  { index: '10', activity: 'Interact', completion: 100, updated: 'Oct 4 at 7:30pm' },
  { index: '11', activity: 'Design & Prototype', completion: 0, updated: 'Oct 23 at 7:30pm' },
  { index: '12', activity: 'Prospect', completion: -1, updated: 'Oct 9 at 8:30pm' },
  { index: '13', activity: 'Demonstration', completion: -1, updated: 'Oct 31 at 4:30pm' },
  { index: '14', activity: 'Present', completion: -1, updated: 'Oct 20 at 3:30pm' },
  { index: '15', activity: 'Auto-Apply', completion: -1, updated: 'Oct 40 at 2:30pm' },
  { index: '16', activity: 'Interview', completion: -1, updated: 'Oct 20 at 1:30pm' },
  { index: '17', activity: 'Offer', completion: -1, updated: 'Oct 11 at 8:30pm' },
  { index: '18', activity: 'Results', completion: -1, updated: 'Oct 16 at 8:30pm' }
];

export const dummyStudentData = [
  {
    school: { name: 'Hillsdale High School' },
    grade: '10',
    program: 'Typeform',
    name: 'Noah MacLean'
  },
  {
    school: { name: 'Irvington High School' },
    grade: '12',
    program: 'City of Fremont',
    name: 'Akheel Shaik'
  },
  {
    school: { name: 'Irvington High School' },
    grade: '12',
    program: 'Kaiser Permanente',
    name: 'Eric Xie'
  },
  {
    school: { name: 'Washington High School' },
    grade: '11',
    program: 'Strategy of Things',
    name: 'Maya Campos'
  },
  {
    school: { name: 'Irvington High School' },
    grade: '9',
    program: 'City of Fremont',
    name: 'Prajit Saravanan'
  },
  {
    school: { name: 'Arroyo High School' },
    grade: '12',
    program: 'Team Drones',
    name: 'Eric Reyes'
  }
];

export const ACTIVITIES = [
  // { header: 'Filter by programs' },

  {
    text: 'Request for Projects',
    color: 'grey darken-2'
  },
  {
    text: 'Team',
    color: 'grey darken-2'
  },
  {
    text: 'Train',
    color: 'grey darken-2'
  },
  {
    text: 'Research',
    color: 'grey darken-2'
  },
  {
    text: 'Practice',
    color: 'grey darken-2'
  },
  {
    text: 'Ideate',
    color: 'grey darken-2'
  },
  {
    text: 'Pitches',
    color: 'grey darken-2'
  },
  {
    text: 'Forum',
    color: 'grey darken-2'
  },
  {
    text: 'Design & Prototype',
    color: 'grey darken-2'
  },
  {
    text: 'Demonstrate',
    color: 'grey darken-2'
  },
  {
    text: 'Present',
    color: 'grey darken-2'
  },
  {
    text: 'Auto-Apply',
    color: 'grey darken-2'
  },
  {
    text: 'Interview',
    color: 'grey darken-2'
  },
  {
    text: 'Offer',
    color: 'grey darken-2'
  }
];
