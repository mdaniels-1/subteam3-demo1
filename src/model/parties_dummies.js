

  // Inserting sample data
  db.parties_co.insertMany([
    {
        Name: 'Easton Ave Halloween Post Party',
        Description: "We'll have lots of Fun!\n ",
        AddressLine1: '100 Easton Avenue',
        City: 'New Brunswick',
        EndDate: new Date("2023-11-04T14:00:00.000Z"),
        Guests: [ '' ],
        Price: 0,
        StartDate: new Date("2023-11-04T04:00:00.000Z"),
        State: 'NJ',
        Zip: '08901',
        HostName: 'Phi Kappa',
        HostDescription: 'Rutgers Chapter',
        'Alcohol Policy': 'BYOB',
        'Dress Code': 'Casual',
        PersonCapacity: 100
    },
    {
        Name: 'End of Semester Bash',
        Description: "Celebrate the end of the semester with us. DJ, dancing, and fun!",
        AddressLine1: '200 College Avenue',
        City: 'New Brunswick',
        EndDate: new Date("2023-12-15T14:00:00.000Z"),
        Guests: [],
        Price: 10.00,
        StartDate: new Date("2023-12-15T04:00:00.000Z"),
        State: 'NJ',
        Zip: '08901',
        HostName: 'Sigma Epsilon',
        HostDescription: 'The Best in Greek Hospitality',
        'Alcohol Policy': 'No alcohol allowed',
        'Dress Code': 'Festive',
        PersonCapacity: 150
    },
    {
        Name: 'Spring Fling',
        Description: "Spring is here, and so is our annual fling. Live music, food, and games!",
        AddressLine1: '300 George Street',
        City: 'New Brunswick',
        EndDate: new Date("2024-04-20T14:00:00.000Z"),
        Guests: [],
        Price: 5.00,
        StartDate: new Date("2024-04-20T04:00:00.000Z"),
        State: 'NJ',
        Zip: '08901',
        HostName: 'Delta Iota Kappa',
        HostDescription: 'DIK Annual Event',
        'Alcohol Policy': 'Provided to 21+',
        'Dress Code': 'Spring Casual',
        PersonCapacity: 200
    }
]);

