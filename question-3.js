// Transform the list of users to another array using .map() so that first_name
// is mapped to firstName and last_name is mapped to lastName
var users = [
  {
    first_name: 'Tom',
    last_name: 'Dale'
  },
  {
    first_name: 'Yehuda',
    last_name: 'Katz'
  },
  {
    first_name: 'Taylor',
    last_name: 'Otwell'
  }
];

function normalize(users) {
  // your implementation

  var normalizedArray = users.map(function(eachUser){
    var normalizedUser = {
      firstName: eachUser.first_name,
      lastName: eachUser.last_name
    }

    return normalizedUser;
  });

  return normalizedArray;
}

var normalizedUsers = normalize(users);
console.log(normalizedUsers);

// normalizedUsers should look like: (notice the change in casing of first_name and last_name)
// [
//   {
//     firstName: 'Tom',
//     lastName: 'Dale'
//   },
//   {
//     firstName: 'Yehuda',
//     lastName: 'Katz'
//   },
//   {
//     firstName: 'Taylor',
//     lastName: 'Otwell'
//   }
// ]
