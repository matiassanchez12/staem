import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://gqkuommdmfzmwkzdewma.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxa3VvbW1kbWZ6bXdremRld21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkyNjQyNTIsImV4cCI6MTk2NDg0MDI1Mn0.iF651HDhqynAQRlG8T6wFS3ZEx4dqxHiEiguc0m7-zI",
  {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiIxNzQwOGNhNTUyNDk4YjQxYWY3Y2VhZGUiLCJpYXQiOjE2NTU4NjkyOTN9.cayShdMASAmw3zRBSPxNMjAU4AIYTfnpBb7oJ41ZAd4",
    },
  }
);

export default supabase;
