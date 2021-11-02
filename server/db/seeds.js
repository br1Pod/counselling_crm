use crm;
db.dropDatabase();

db.clients.insertMany([    
  {
    first_name: "John",
    last_name: "Lennon",
    phone: "0123 456 789",
    email: "john@beatles.com",
    address: "1 Penny Lane, Liverpool, L1 1AA",
    emergency_name: "Julia Lennon",
    emergency_phone: "0123 456 789",
    emergency_aware: "yes",
    wew_score: 0,
    total_sessions: 12,
    completed_sessions: 3,
    finished: "no",
    hourly_rate: "full_rate",
    client_type: "private"
  },
  {
    first_name: "Paul",
    last_name: "McCartney",
    phone: "0123 456 111",
    email: "paul@beatles.com",
    address: "2 Penny Lane, Liverpool, L1 2BB",
    emergency_name: "Linda McCartney",
    emergency_phone: "0123 456 111",
    emergency_aware: "no",
    wew_score: 2,
    total_sessions: 9,
    completed_sessions: 4,
    finished: "no",
    hourly_rate: "full_rate",
    client_type: "private"
  }
]);