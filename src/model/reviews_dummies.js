// Inserting sample data
db.reviews_co.insertMany([
    {
        user_id: ObjectId("655420f6aa8c03ba44c3858c"),
        party_id: ObjectId("65541e4faa8c03ba44c38589"),
        review_date: new Date("2023-11-05T00:00:00.000Z"), // Assuming the review is written the day after the party
        rating: 9,
        review_title: "Unforgettable Halloween Celebration",
        review_text: "The 'Easton Ave Halloween Post Party' was unforgettable! The atmosphere was buzzing with excitement, and the decorations transformed the venue into a true Halloween haunt. Music was on point, with a mix that kept the dance floor alive all night. It was well-organized, especially considering the BYOB policy, which worked out great. Dressing casual meant everyone was comfortable, and it was fantastic to see such creative costumes. Kudos to Phi Kappa for hosting such a successful event - can't wait for the next one!"
    },
    {
        user_id: ObjectId("655420f6aa8c03ba44c3858d"),
        party_id: ObjectId("65541e4faa8c03ba44c3858a"),
        review_date: new Date("2023-12-16T00:00:00.000Z"), // Assuming the review is written the day after the party
        rating: 10,
        review_title: "Best Way to Wrap Up the Semester!",
        review_text: "The 'End of Semester Bash' thrown by Sigma Epsilon was the highlight of the year! The DJ was incredible, the dance floor was never empty, and the festive dress code added to the cheerful spirit. The no-alcohol policy ensured that everyone stayed safe and had a good time. It was a perfect send-off to the semester, and the $10 entry was a steal for the amazing night we all had. I'm definitely looking forward to the next one!"
    },
    {
        user_id: ObjectId("655420f6aa8c03ba44c3858e"),
        party_id: ObjectId("65541e4faa8c03ba44c3858b"),
        review_date: new Date("2024-04-21T00:00:00.000Z"), // Assuming the review is written the day after the party
        rating: 8,
        review_title: "Spring Fling was a Blast",
        review_text: "Delta Iota Kappa's 'Spring Fling' was a blast and a perfect welcome to the season. The live music set the stage for a day of fun, the food was delicious, and the games were entertaining for everyone. It was well organized, and the provided alcohol for those over 21 was managed responsibly. The casual dress code made it easy to move around and enjoy the various activities. I loved the energy and can't wait for next year's event!"
    }
]);
  
