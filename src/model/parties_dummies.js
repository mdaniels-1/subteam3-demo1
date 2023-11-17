// Inserting sample data
  db.parties_co.insertMany([
    {
        Name: 'Easton Ave Halloween Post Party',
        Description: "We'll have lots of Fun!\n ",
        AddressLine1: '100 Easton Avenue',
        City: 'New Brunswick',
        EndDate: new Date("2023-11-04T14:00:00.000Z"),
        Guests: [ '' ],
        Price: Double(0.00),
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
        Name: 'Techno Night',
        Description: "Let's rave! The best DJs in town, an unforgettable light show, and endless dancing.",
        AddressLine1: '600 Club Lane',
        City: 'New Brunswick',
        EndDate: new Date("2023-08-25T06:00:00.000Z"),
        Guests: [],
        Price: Double(20.00),
        StartDate: new Date("2023-08-24T22:00:00.000Z"),
        State: 'NJ',
        Zip: '08901',
        HostName: 'Beta Gamma',
        HostDescription: 'Electronic Music Collective',
        'Alcohol Policy': 'Cash bar available',
        'Dress Code': 'Neon & Glow',
        PersonCapacity: 300
    },
    {
        Name: 'End of Semester Bash',
        Description: "Celebrate the end of the semester with us. DJ, dancing, and fun!",
        AddressLine1: '200 College Avenue',
        City: 'New Brunswick',
        EndDate: new Date("2023-12-15T14:00:00.000Z"),
        Guests: [],
        Price: Double(10.00),
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
        Price: Double(5.00),
        StartDate: new Date("2024-04-20T04:00:00.000Z"),
        State: 'NJ',
        Zip: '08901',
        HostName: 'Delta Iota Kappa',
        HostDescription: 'DIK Annual Event',
        'Alcohol Policy': 'Provided to 21+',
        'Dress Code': 'Spring Casual',
        PersonCapacity: 200
    },
    {
        Name: 'Beach Bonfire Night',
        Description: "Join us by the shore for a night of bonfire, stories, and s'mores!",
        AddressLine1: '400 Ocean Avenue',
        City: 'New Brunswick',
        EndDate: new Date("2023-07-04T02:00:00.000Z"),
        Guests: [],
        Price: Double(15.00),
        StartDate: new Date("2023-07-03T19:00:00.000Z"),
        State: 'NJ',
        Zip: '08901',
        HostName: 'Kappa Sigma',
        HostDescription: 'Beach Party Organizers',
        'Alcohol Policy': 'Alcohol provided, 21+ only',
        'Dress Code': 'Beachwear',
        PersonCapacity: 80
    },
    {
        Name: 'Rooftop Jazz Evening',
        Description: "Experience an evening filled with smooth jazz, skyline views, and fine wine.",
        AddressLine1: '500 Skyline Drive',
        City: 'New Brunswick',
        EndDate: new Date("2023-09-10T23:00:00.000Z"),
        Guests: [],
        Price: Double(30.00),
        StartDate: new Date("2023-09-10T17:00:00.000Z"),
        State: 'NJ',
        Zip: '08901',
        HostName: 'Tau Phi',
        HostDescription: 'Jazz Enthusiasts',
        'Alcohol Policy': 'Wine and beer served',
        'Dress Code': 'Semi-formal',
        PersonCapacity: 50
    },
    {
        Name: 'Murder Mystery Dinner',
        Description: "A night of mystery and intrigue awaits. Can you solve the crime?",
        AddressLine1: '700 Mystery Blvd',
        City: 'New Brunswick',
        EndDate: new Date("2023-10-31T22:00:00.000Z"),
        Guests: [],
        Price: Double(50.00),
        StartDate: new Date("2023-10-31T18:00:00.000Z"),
        State: 'NJ',
        Zip: '08901',
        HostName: 'Alpha Chi',
        HostDescription: 'Mystery and Adventure Club',
        'Alcohol Policy': 'Cocktails and mocktails served',
        'Dress Code': 'Costume Required',
        PersonCapacity: 60
    },
    {
        Name: 'Country Hoedown',
        Description: "Grab your boots and join us for a hoedown with live country bands, line dancing, and BBQ.",
        AddressLine1: '800 Farm Road',
        City: 'New Brunswick',
        EndDate: new Date("2023-09-01T01:00:00.000Z"),
        Guests: [],
        Price: Double(25.00),
        StartDate: new Date("2023-08-31T16:00:00.000Z"),
        State: 'NJ',
        Zip: '08901',
        HostName: 'Gamma Delta Pi',
        HostDescription: 'Southern Comfort Committee',
        'Alcohol Policy': 'BYOB',
        'Dress Code': 'Country Chic',
        PersonCapacity: 120
    }
]);
