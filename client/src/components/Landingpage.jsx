function LandingPage(){
    return(    <div className="bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen font-sans text-gray-900">
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-[#150541] to-[#3a0d65] text-white text-center py-24">
          <h1 className="text-5xl font-extrabold leading-tight">
            Welcome to RecipeHub
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Store, discover, and share your favorite recipes. Start cooking with creativity today!
          </p>
          <a
            href="#features"
            className="mt-8 inline-block bg-white text-[#150541] py-3 px-8 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform"
          >
            Explore Features
          </a>
        </header>
  
        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#150541]">Our Features</h2>
            <p className="mt-2 text-lg text-gray-600">Everything you need to cook with ease.</p>
          </div>
  
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1: Recipe Storage */}
            <div className="bg-gradient-to-r from-[#e8d4e8] to-[#d3b3d3] rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-[#150541]">Recipe Storage</h3>
              <p className="mt-4 text-gray-700">
                Store all your favorite recipes in one place. Access them anytime, anywhere.
              </p>
            </div>
  
            {/* Feature 2: Search & Filter */}
            <div className="bg-gradient-to-r from-[#e8d4e8] to-[#d3b3d3] rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-[#150541]">Search & Filter</h3>
              <p className="mt-4 text-gray-700">
                Use advanced filters to find recipes based on cuisine, dietary preferences, prep time, and more.
              </p>
            </div>
  
            {/* Feature 3: Ingredient-Based Suggestions */}
            <div className="bg-gradient-to-r from-[#e8d4e8] to-[#d3b3d3] rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-[#150541]">Ingredient-Based Suggestions</h3>
              <p className="mt-4 text-gray-700">
                Get recipe suggestions based on the ingredients you already have in your kitchen.
              </p>
            </div>
  
            {/* Feature 4: Favorites & Ratings */}
            <div className="bg-gradient-to-r from-[#e8d4e8] to-[#d3b3d3] rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-[#150541]">Favorites & Ratings</h3>
              <p className="mt-4 text-gray-700">
                Save your favorite recipes and rate them to help others find the best dishes to try.
              </p>
            </div>
  
            {/* Feature 5: User Accounts */}
            <div className="bg-gradient-to-r from-[#e8d4e8] to-[#d3b3d3] rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-semibold text-[#150541]">User Accounts</h3>
              <p className="mt-4 text-gray-700">
                Create your account to upload recipes, save favorites, and personalize your cooking journey.
              </p>
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="bg-[#150541] text-white text-center py-16">
          <h2 className="text-3xl font-semibold">Join RecipeHub Today!</h2>
          <p className="mt-4 text-lg">Start your culinary adventure with personalized recipe collections and more.</p>
          <a
            href="#signup"
            className="mt-6 inline-block bg-white text-[#150541] py-3 px-10 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform"
          >
            Sign Up Now
          </a>
        </section>
  
        {/* Footer */}
        <footer className="bg-[#150541] text-white py-6 text-center">
          <p>&copy; 2025 RecipeHub. All Rights Reserved.</p>
        </footer>
      </div>
      )
}

export default LandingPage;