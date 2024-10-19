import { Note } from "./core/entities/note";

//@ts-expect-error error
export const notes: Note[] = globalThis?.notes ?? [
  {
    id: "1",
    title: "Welcome to Note Taking",
    content:
      "This is your first note. Start organizing your thoughts! #welcome #gettingstarted",
    createdAt: new Date("2023-01-01T12:00:00Z"),
  },
  {
    id: "2",
    title: "Meeting Notes: Project Kickoff",
    content:
      "Discussed project timeline and goals. Action items: \n1. Create project plan\n2. Assign tasks\n3. Schedule next meeting\n#work #projectmanagement",
    createdAt: new Date("2023-01-15T14:30:00Z"),
  },
  {
    id: "3",
    title: "Recipe: Chocolate Chip Cookies",
    content:
      "Ingredients:\n- 2 1/4 cups flour\n- 1 tsp baking soda\n- 1 cup butter\n- 3/4 cup sugar\n- 3/4 cup brown sugar\n- 2 eggs\n- 2 cups chocolate chips\n\nInstructions:\n1. Mix dry ingredients\n2. Cream butter and sugars\n3. Add eggs and vanilla\n4. Combine with dry ingredients\n5. Fold in chocolate chips\n6. Bake at 375°F for 10-12 minutes\n#recipe #baking #dessert",
    createdAt: new Date("2023-02-02T18:45:00Z"),
  },
  {
    id: "4",
    title: "Book Review: 'The Alchemist'",
    content:
      "A inspiring tale about following one's dreams. Key themes include personal legend, universal language, and the unity of nature. Highly recommend for anyone on a journey of self-discovery. #books #review #philosophy",
    createdAt: new Date("2023-02-20T09:15:00Z"),
  },
  {
    id: "5",
    title: "Workout Plan",
    content:
      "Monday: Chest and Triceps\nTuesday: Back and Biceps\nWednesday: Legs\nThursday: Shoulders and Abs\nFriday: Full Body\nSaturday: Cardio\nSunday: Rest\n\nRemember to warm up and cool down! #fitness #health #workout",
    createdAt: new Date("2023-03-05T07:00:00Z"),
  },
  {
    id: "6",
    title: "Travel Packing List",
    content:
      "- Passport\n- Tickets\n- Chargers\n- Clothes for 7 days\n- Toiletries\n- Camera\n- Travel pillow\n- Books\n- Snacks\n\nDon't forget to check the weather forecast! #travel #packing #vacation",
    createdAt: new Date("2023-03-18T16:20:00Z"),
  },
  {
    id: "7",
    title: "JavaScript Tips and Tricks",
    content:
      "1. Use 'const' and 'let' instead of 'var'\n2. Utilize arrow functions for concise code\n3. Leverage destructuring for cleaner assignments\n4. Master the spread and rest operators\n5. Understand promises and async/await\n#javascript #programming #webdev",
    createdAt: new Date("2023-04-02T11:10:00Z"),
  },
  {
    id: "8",
    title: "Gardening: Spring Planting Guide",
    content:
      "Vegetables to plant in spring:\n- Tomatoes\n- Peppers\n- Cucumbers\n- Lettuce\n- Carrots\n- Peas\n\nRemember to prepare the soil and water regularly! #gardening #spring #vegetables",
    createdAt: new Date("2023-04-15T13:40:00Z"),
  },
  {
    id: "9",
    title: "Meditation Techniques",
    content:
      "1. Mindfulness meditation\n2. Loving-kindness meditation\n3. Body scan meditation\n4. Breath awareness meditation\n5. Transcendental meditation\n\nStart with 5 minutes a day and gradually increase. #meditation #mindfulness #wellness",
    createdAt: new Date("2023-05-01T06:30:00Z"),
  },
  {
    id: "10",
    title: "Home Improvement Ideas",
    content:
      "1. Paint the living room\n2. Install new kitchen backsplash\n3. Upgrade bathroom fixtures\n4. Build a deck\n5. Create a home office space\n6. Organize the garage\n\nPrioritize based on budget and time availability. #homeimprovement #diy #renovation",
    createdAt: new Date("2023-05-20T19:55:00Z"),
  },
];

//@ts-expect-error error
globalThis.notes = notes;
