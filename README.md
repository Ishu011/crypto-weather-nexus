# CryptoWeather Nexus
"# CryptoWeather Nexus" 
# 🌍 CryptoWeather Nexus

CryptoWeather Nexus is a **Next.js-based web application** that provides real-time **cryptocurrency** and **weather** data in a seamless and user-friendly interface. The project integrates the **OpenWeather API** for weather updates and the **CoinGecko API** for cryptocurrency market data.

##  Features

✔️ **Real-Time Crypto Prices** – It Fetches live data from CoinGecko API  
✔️ **Live Weather Forecast** – It Fetches current weather details using OpenWeather API  
✔️ **Search Functionality** – Get crypto and weather details for any input  
✔️ **Fast & Responsive** – Built using Next.js and TailwindCSS  
✔️ **Redux Toolkit** – Efficient state management for API data  

## 📁 Folder Structure

Understanding the folder structure is **important** to navigate the code easily. Here’s how everything is organized:
```
crypto-weather-nexus/
├── public/                # Static assets (favicons, images, etc.)
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.js      # Navigation bar
│   │   ├── CryptoCard.js  # Component to display crypto data
│   │   ├── WeatherCard.js # Component to display weather data
│   ├── pages/             # Next.js page routing
│   │   ├── index.js       # Home Page
│   │   ├── dashboard.js   # Dashboard Page
│   │   ├── crypto/        # Crypto-specific pages
│   │   │   ├── [id].js    # Dynamic crypto details page
│   │   ├── weather/       # Weather-specific pages
│   │   │   ├── [city].js  # Dynamic weather details page
│   ├── store/             # Redux store setup
│   │   ├── store.js       # Redux store configuration
│   │   ├── cryptoSlice.js # Crypto state management
│   │   ├── weatherSlice.js# Weather state management
│   ├── utils/             # Helper functions
│   │   ├── formatDate.js  # Function to format dates
│   │   ├── convertTemp.js # Function to convert temperature units
│   ├── styles/            # Global styles using TailwindCSS
│   │   ├── globals.css    # Custom global styles
│   ├── services/          # API calls & service functions
│   │   ├── cryptoApi.js   # Handles crypto API requests
│   │   ├── weatherApi.js  # Handles weather API requests
├── .env.local             # Environment variables (DO NOT SHARE)
├── package.json           # Project dependencies
├── README.md              # Documentation file
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # TailwindCSS configuration
└── postcss.config.js      # PostCSS configuration
```

🛠️ Technologies Used
1.  Next.js – React framework for server-side rendering and static site generation
2.  React.js – Frontend JavaScript library for UI components
3. Tailwind CSS – Utility-first CSS framework for styling
4.  Redux Toolkit – State management for API data
5. OpenWeather API – Fetches real-time weather data
6. CoinGecko API – Provides cryptocurrency market data
7. Node.js – Backend runtime for Next.js API routes
8. Vercel – Deployment platform for hosting the project

## 🔧 Installation Guide

### **1️⃣ Prerequisites**
Before you begin, ensure you have the following installed:  
✅ **Node.js v16+**  
✅ **npm or yarn**  

### **2️⃣ Clone the Repository**
git clone https://github.com/Ishu011/crypto-weather-nexus.git     
cd crypto-weather-nexus

3️⃣ Install Dependencies:
npm install

4️⃣ Set Up Environment Variables
Before running the project, create a (.env.local) file in the root directory:
NEXT_PUBLIC_WEATHER_API_KEY=your_openweather_api_key
NEXT_PUBLIC_CRYPTO_API_KEY=your_crypto_api_key

🔥 Running the Project
To start the development server, run:
npm run dev
Then, open http://localhost:3000 in your browser.

💡 Deployment Guide
1️⃣ Install Vercel CLI : npm install -g vercel
2️⃣ Login to Vercel : vercel login
3️⃣ Deploy the Project : vercel

🤝 Contributing
🔥 Want to improve this project? Contributions are welcome!
1. Fork the repository
2. Create a new branch (feature/my-feature)
3. Commit your changes
4. Push to the branch
5. Submit a Pull Request

📝 License
This project is licensed under the MIT License.

📧 Contact
For any questions or feedback, reach out via ishupatel3426@gmail.com

### **📌 Key Highlights**
✅ **Project Overview & Features** – What the project does and its capabilities  
✅ **Installation Guide** – How to set up and run the project  
✅ **Environment Variables** – Keeping API keys secure  
✅ **Deployment Guide** – Step-by-step instructions for hosting on **Vercel**  
✅ **Folder Structure** – Organized for clarity  

This README **ensures security, clarity, and a professional submission** for your project. Let me know if you need any **modifications or improvements!** 💡
