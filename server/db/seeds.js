use crm;
db.dropDatabase();

db.clients.insertMany([
  {
    first_name: "John",
    last_name: "Lennon",
    phone: 0123 456 789,
    email: "john@beatles.com",
    address: "1 Penny Lane, Liverpool, L1 1AA",
    emergency_name: "Julia Lennon",
    emergency_phone: 0123 456 789;
    emergency_aware: "yes",
    wew_score: 0,
    total_sessions: 12,
    completed_sessions: 3,
    finished: no,
    hourly_rate: "full_rate",
    client_type: "private"
  }
]);
