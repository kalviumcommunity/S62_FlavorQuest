import React from "react";

const SingleRecipe = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen font-sans text-gray-900">
      {/* Recipe Header */}
      <section className="bg-gradient-to-r from-[#150541] to-[#3a0d65] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Delicious Chocolate Cake
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            A rich and moist chocolate cake that's perfect for any occasion.
            Follow the simple steps to indulge in this delicious homemade cake!
          </p>
        </div>
      </section>

    <section className="py-8">
      <div className="max-w-3xl mx-auto">
        <img
      src="https://bakerbynature.com/wp-content/uploads/2021/02/devils-food-cake-123456789-1-of-1.jpg"
      alt="Chocolate Cake"
      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg object-contain"
          />
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#150541]">Ingredients</h2>
          <ul className="mt-6 text-lg text-gray-700 space-y-2 md:space-y-3">
            <li>2 cups all-purpose flour</li>
            <li>1 1/2 cups sugar</li>
            <li>1 cup unsweetened cocoa powder</li>
            <li>1 1/2 teaspoons baking powder</li>
            <li>1 1/2 teaspoons baking soda</li>
            <li>1 teaspoon salt</li>
            <li>2 large eggs</li>
            <li>1 cup milk</li>
            <li>1/2 cup vegetable oil</li>
            <li>2 teaspoons vanilla extract</li>
            <li>1 cup boiling water</li>
          </ul>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#150541] text-center">
            Instructions
          </h2>
          <ol className="mt-6 text-lg text-gray-700 space-y-4">
            <li className="flex space-x-3">
              <span className="font-bold">Step 1:</span> Preheat the oven to
              350°F (175°C) and grease and flour two 9-inch round cake pans.
            </li>
            <li className="flex space-x-3">
              <span className="font-bold">Step 2:</span> In a large bowl, whisk
              together the flour, sugar, cocoa powder, baking powder, baking soda,
              and salt.
            </li>
            <li className="flex space-x-3">
              <span className="font-bold">Step 3:</span> Add eggs, milk, oil, and
              vanilla to the dry ingredients and beat until smooth.
            </li>
            <li className="flex space-x-3">
              <span className="font-bold">Step 4:</span> Gradually add boiling
              water, mixing until the batter is smooth and runny.
            </li>
            <li className="flex space-x-3">
              <span className="font-bold">Step 5:</span> Pour the batter into
              the prepared pans and bake for 30-35 minutes or until a toothpick
              comes out clean.
            </li>
            <li className="flex space-x-3">
              <span className="font-bold">Step 6:</span> Let the cakes cool
              completely before frosting and serving.
            </li>
          </ol>
        </div>
      </section>

      {/* Rating Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#150541]">
            Ratings & Reviews
          </h2>
          <div className="mt-6 flex justify-center space-x-4">
            {/* Rating Stars */}
            <div className="flex items-center">
              <span className="text-yellow-400">★★★★★</span>
              <span className="ml-2 text-gray-700">4.8 (200 reviews)</span>
            </div>
          </div>
          <p className="mt-4 text-lg text-gray-700">
            This cake is absolutely delicious! A must-try for any chocolate
            lover. - Myself.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#150541] text-white text-center py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Try This Recipe Now!</h2>
        <p className="mt-4 text-lg">Don't wait! Grab your ingredients and start baking this delicious chocolate cake today.</p>
        <a
          href="#signup"
          className="mt-6 inline-block bg-white text-[#150541] py-3 px-8 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform"
        >
          Get the Full Recipe
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#150541] text-white py-4 text-center">
        <p>&copy; 2025 RecipeHub. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SingleRecipe;
