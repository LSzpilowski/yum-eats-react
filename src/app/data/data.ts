export interface IMealData {
  name: string;
  category: string;
  image: string;
  price: string;
  isTopPick: boolean;
  foodType: {
    lowCalories: boolean;
    highProtein: boolean;
    lowCarb: boolean;
    lowFat: boolean;
  };
  allergens: {
    dairy: boolean;
    eggs: boolean;
    fish: boolean;
    shellfish: boolean;
    treeNuts: boolean;
    peanuts: boolean;
    wheat: boolean;
    soy: boolean;
    sesame: boolean;
    sulphites: boolean;
    mustard: boolean;
    celery: boolean;
    lupin: boolean;
    molluscs: boolean;
    gluten: boolean;
  };
}

export const mealData: IMealData[] = [
  {
    name: "Bruschetta al Pomodoro",
    category: "appetizers",
    image: "/bruschetta_al_pomodoro.png",
    price: "£8.00",
    isTopPick: true,
    foodType: {
      lowCalories: true,
      highProtein: false,
      lowCarb: false,
      lowFat: true,
    },
    allergens: {
      dairy: false,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: true,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: true,
    },
  },
  {
    name: "Caprese Salad",
    category: "appetizers",
    image: "/caprese_salad.png",
    price: "£9.50",
    isTopPick: false,
    foodType: {
      lowCalories: true,
      highProtein: false,
      lowCarb: true,
      lowFat: true,
    },
    allergens: {
      dairy: true,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
  {
    name: "Antipasto Platter",
    category: "appetizers",
    image: "/antipasto_platter.png",
    price: "£12.00",
    isTopPick: false,
    foodType: {
      lowCalories: false,
      highProtein: true,
      lowCarb: true,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: false,
      fish: true,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: true,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
  {
    name: "Calamari Fritti",
    category: "appetizers",
    image: "/calamari_fritti.png",
    price: "£10.50",
    isTopPick: false,
    foodType: {
      lowCalories: false,
      highProtein: true,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: false,
      eggs: false,
      fish: false,
      shellfish: true,
      treeNuts: false,
      peanuts: false,
      wheat: true,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: true,
      gluten: true,
    },
  },
  {
    name: "Garlic Bread",
    category: "appetizers",
    image: "/garlic_bread.png",
    price: "£7.00",
    isTopPick: true,
    foodType: {
      lowCalories: false,
      highProtein: false,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: true,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: true,
    },
  },
  {
    name: "Pollo alla Cacciatora",
    category: "main courses",
    image: "/pollo_alla_cacciatora.png",
    price: "£14.50",
    isTopPick: false,
    foodType: {
      lowCalories: false,
      highProtein: true,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: false,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: true,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
 {
    name: 'Stracotto di Fassona',
    category: 'main courses',
    image: '/stracotto_di_fassona.png',
    price: '£16.50',
    isTopPick: false,
    foodType: {
      lowCalories: false,
      highProtein: true,
      lowCarb: true,
      lowFat: false
    },
    allergens: {
      dairy: false,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: true,
      mustard: false,
      celery: true,
      lupin: false,
      molluscs: false,
      gluten: false
    }
  },
  {
    name: "Scaloppine al Marsala",
    category: "main courses",
    image: "/scaloppine_al_marsala.png",
    price: "£15.50",
    isTopPick: true,
    foodType: {
      lowCalories: false,
      highProtein: true,
      lowCarb: true,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: true,
      soy: false,
      sesame: false,
      sulphites: true,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: true,
    },
  },
  {
    name: "Parmigiana di Melanzane",
    category: "main courses",
    image: "/parmigiana_di_melanzane.png",
    price: "£13.00",
    isTopPick: true,
    foodType: {
      lowCalories: false,
      highProtein: false,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: true,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: true,
      lupin: false,
      molluscs: false,
      gluten: true,
    },
  },
  {
    name: "Peperoni Ripieni",
    category: "main courses",
    image: "/peperoni_ripieni.png",
    price: "£14.00",
    isTopPick: false,
    foodType: {
      lowCalories: false,
      highProtein: true,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: true,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: true,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: true,
      lupin: false,
      molluscs: false,
      gluten: true,
    },
  },
  {
    name: "Margherita Pizza",
    category: "main courses",
    image: "/margherita_pizza.png",
    price: "£12.00",
    isTopPick: true,
    foodType: {
      lowCalories: false,
      highProtein: false,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: true,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: true,
    },
  },
  {
    name: "Spaghetti Carbonara",
    category: "main courses",
    image: "/spaghetti_carbonara.png",
    price: "£13.50",
    isTopPick: true,
    foodType: {
      lowCalories: false,
      highProtein: true,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: true,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: true,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: true,
    },
  },
  {
    name: "Lasagna al Forno",
    category: "main courses",
    image: "/lasagna_al_forno.png",
    price: "£14.00",
    isTopPick: false,
    foodType: {
      lowCalories: false,
      highProtein: true,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: true,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: true,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: true,
    },
  },
  {
    name: "Chicken Parmigiana",
    category: "main courses",
    image: "/pollo_parmigiana.png",
    price: "£15.50",
    isTopPick: false,
    foodType: {
      lowCalories: false,
      highProtein: true,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: true,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: true,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: true,
    },
  },
  {
    name: "Risotto ai Funghi",
    category: "main courses",
    image: "/risotto_ai_funghi.png",
    price: "£14.00",
    isTopPick: false,
    foodType: {
      lowCalories: false,
      highProtein: false,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
  {
    name: "Tiramisu",
    category: "desserts",
    image: "/tiramisu.png",
    price: "£9.00",
    isTopPick: true,
    foodType: {
      lowCalories: false,
      highProtein: false,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: true,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: true,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: true,
    },
  },
  {
    name: "Panna Cotta",
    category: "desserts",
    image: "/panna_cotta.png",
    price: "£8.50",
    isTopPick: false,
    foodType: {
      lowCalories: false,
      highProtein: false,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
  {
    name: "Cannoli",
    category: "desserts",
    image: "/cannoli.png",
    price: "£8.00",
    isTopPick: true,
    foodType: {
      lowCalories: false,
      highProtein: false,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: true,
      fish: false,
      shellfish: false,
      treeNuts: true,
      peanuts: false,
      wheat: true,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: true,
    },
  },
  {
    name: "Gelato",
    category: "desserts",
    image: "/gelato.png",
    price: "£7.00",
    isTopPick: false,
    foodType: {
      lowCalories: false,
      highProtein: false,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: true,
      fish: false,
      shellfish: false,
      treeNuts: true,
      peanuts: true,
      wheat: false,
      soy: true,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
  {
    name: "Affogato",
    category: "desserts",
    image: "/affogato.png",
    price: "£8.50",
    isTopPick: true,
    foodType: {
      lowCalories: false,
      highProtein: false,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
  {
    name: "Espresso",
    category: "hot drinks",
    image: "/espresso.png",
    price: "£5.50",
    isTopPick: true,
    foodType: {
      lowCalories: true,
      highProtein: false,
      lowCarb: true,
      lowFat: true,
    },
    allergens: {
      dairy: false,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
  {
    name: "Cappuccino",
    category: "hot drinks",
    image: "/cappuccino.png",
    price: "£6.00",
    isTopPick: false,
    foodType: {
      lowCalories: false,
      highProtein: false,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
  {
    name: "Latte",
    category: "hot drinks",
    image: "/latte.png",
    price: "£6.00",
    isTopPick: false,
    foodType: {
      lowCalories: false,
      highProtein: false,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: true,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
  {
    name: "Americano",
    category: "hot drinks",
    image: "/americano.png",
    price: "£6.50",
    isTopPick: false,
    foodType: {
      lowCalories: true,
      highProtein: false,
      lowCarb: true,
      lowFat: true,
    },
    allergens: {
      dairy: false,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
  {
    name: "Tea",
    category: "hot drinks",
    image: "/tea.png",
    price: "£5.00",
    isTopPick: false,
    foodType: {
      lowCalories: true,
      highProtein: false,
      lowCarb: true,
      lowFat: true,
    },
    allergens: {
      dairy: false,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
  {
    name: "Italian Soda",
    category: "soft drinks",
    image: "/italian_sodas.png",
    price: "£6.50",
    isTopPick: false,
    foodType: {
      lowCalories: false,
      highProtein: false,
      lowCarb: false,
      lowFat: false,
    },
    allergens: {
      dairy: false,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
  {
    name: "Limonata",
    category: "soft drinks",
    image: "/limonata.png",
    price: "£6.00",
    isTopPick: false,
    foodType: {
      lowCalories: false,
      highProtein: false,
      lowCarb: true,
      lowFat: true,
    },
    allergens: {
      dairy: false,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
  {
    name: "Aranciata",
    category: "soft drinks",
    image: "/aranciata.png",
    price: "£6.00",
    isTopPick: false,
    foodType: {
      lowCalories: false,
      highProtein: false,
      lowCarb: true,
      lowFat: true,
    },
    allergens: {
      dairy: false,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
  {
    name: "Mineral Water",
    category: "soft drinks",
    image: "/mineral_water.png",
    price: "£5.00",
    isTopPick: false,
    foodType: {
      lowCalories: true,
      highProtein: false,
      lowCarb: true,
      lowFat: true,
    },
    allergens: {
      dairy: false,
      eggs: false,
      fish: false,
      shellfish: false,
      treeNuts: false,
      peanuts: false,
      wheat: false,
      soy: false,
      sesame: false,
      sulphites: false,
      mustard: false,
      celery: false,
      lupin: false,
      molluscs: false,
      gluten: false,
    },
  },
];
