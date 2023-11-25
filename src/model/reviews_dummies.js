// Inserting sample data
db.reviews_co.insertMany([

    // EASTON AVE HALLOWEEN PARTY
    {
        user_id: ObjectId("656112aa4ab2e3f2e38878ed"),
        party_id: ObjectId("6557d93c0bb1397e7d44075c"),
        review_date: new Date("2023-11-05T00:00:00.000Z"),
        rating: 9,
        review_title: "Unforgettable Halloween Celebration",
        review_text: "The 'Easton Ave Halloween Post Party' was unforgettable! The atmosphere was buzzing with excitement, and the decorations transformed the venue into a true Halloween haunt. Music was on point, with a mix that kept the dance floor alive all night. It was well-organized, especially considering the BYOB policy, which worked out great. Dressing casual meant everyone was comfortable, and it was fantastic to see such creative costumes. Kudos to Phi Kappa for hosting such a successful event - can't wait for the next one!"
    },
    {
        user_id: new ObjectId("656112aa4ab2e3f2e38878ee"),
        party_id: new ObjectId("6557d93c0bb1397e7d44075c"),
        review_date: new Date("2023-11-05T00:00:00.000Z"),
        rating: 8,
        review_title: 'Spooky Soiree Success',
        review_text: "The 'Easton Ave Halloween Post Party' was a hit! The vibe was electric with festive energy, and the eerie decorations added a layer of authenticity to the Halloween theme. The DJ played a fantastic selection of tracks that kept everyone grooving. The BYOB aspect was handled well, contributing to the merry atmosphere. The casual dress code was a plus, allowing everyone to show off their imaginative costumes comfortably. Hats off to the organizers for such a smooth event. Looking forward to the next bash!"
    },
    {
        user_id: new ObjectId("656112aa4ab2e3f2e38878ef"),
        party_id: new ObjectId("6557d93c0bb1397e7d44075c"),
        review_date: new Date("2023-11-05T00:00:00.000Z"),
        rating: 10,
        review_title: 'A Night to Remember',
        review_text: "The 'Easton Ave Halloween Post Party' was absolutely sensational! The atmosphere was charged with thrilling vibes, and the spooky decorations were top-notch, creating an immersive experience. The playlist was a perfect blend of classic and current hits that kept the crowd dancing till dawn. The BYOB policy added to the fun, and the casual dress code was ideal for party-goers to sport their unique costumes. A big shout-out to the hosts for organizing an event that will be talked about for ages. Eagerly awaiting the next celebration!"
    },
    {
        user_id: new ObjectId("656112aa4ab2e3f2e38878f0"),
        party_id: new ObjectId("6557d93c0bb1397e7d44075c"),
        review_date: new Date("2023-11-05T00:00:00.000Z"),
        rating: 4,
        review_title: 'Could Have Been Better',
        review_text: "The 'Easton Ave Halloween Post Party' had great potential with its promising theme, but unfortunately, it didn't live up to the hype. While the decorations were decent, the music selection was lackluster, with the same few songs repeating throughout the night. The venue was overcrowded, making it hard to enjoy the festivities fully. The BYOB concept was more of a hassle than a highlight, leading to some disappointment. I appreciated the effort put into organizing the event but hope for significant improvements next time."
    },
    {
        user_id: new ObjectId("656112aa4ab2e3f2e38878f1"),
        party_id: new ObjectId("6557d93c0bb1397e7d44075c"),
        review_date: new Date("2023-11-05T00:00:00.000Z"),
        rating: 9,
        review_title: 'Spooktacular Night',
        review_text: "What a spooktacular event the 'Easton Ave Halloween Post Party' was! Every corner of the venue was thoughtfully decorated, creating a perfect Halloween atmosphere. The music was a fantastic mix of spooky tunes and dance floor anthems, ensuring the party vibe never died down. Kudos for the BYOB setup, it made for some interesting concoctions! The casual dress code really let everyone's creativity shine through their costumes. Definitely a night that set the bar high for Halloween parties!"
    },

    // TECHNO NIGHT
    {
        user_id: new ObjectId("656112aa4ab2e3f2e38878f2"),
        party_id: new ObjectId("6557d93c0bb1397e7d44075d"),
        review_date: new Date("2023-08-25T12:00:00.000Z"),
        rating: 9,
        review_title: 'Epic Night Out',
        review_text: "Techno Night was an absolute blast! The DJs were on fire, dropping beats that kept us moving all night long. The light show was mesmerizing, creating a truly otherworldly experience. The crowd was electric, and the glow theme brought everyone's outfits to a whole new level. The cash bar was a bit pricey, but overall, the night was unforgettable. Kudos to Beta Gamma for a well-hosted rave!"
    },
    {
        user_id: new ObjectId("656112aa4ab2e3f2e38878f3"),
        party_id: new ObjectId("6557d93c0bb1397e7d44075d"),
        review_date: new Date("2023-08-25T12:00:00.000Z"),
        rating: 8,
        review_title: 'Vibrant and Vivacious',
        review_text: "Last night's Techno Night was a vibrant fest of colors and sounds. The club was decked out in neon, and the music selection was top-tier. It was great to see a mix of techno genres, from classic tracks to the latest hits. The venue was at capacity, creating a true rave vibe. Although it got a bit crowded, the energy was contagious. Definitely a must-attend event for techno lovers!"
    },
    
]);
  
