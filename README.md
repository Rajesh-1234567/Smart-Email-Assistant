# Smart Email Assistant – AI-Powered Gmail Reply Generator with Tone Customization 
- ✅ Project intro  
- 🧠 Problem & 💡 Solution  
- 🚀 Features  
- 📂 Structure  
- 🛠️ How to run  
- ⚙️ Tech stack  
- 👤 Author & License


---

# Smart Email Assistant ✨📬

An AI-powered Chrome Extension that integrates directly into Gmail and generates smart, tone-aware email replies with just one click — powered by **Gemini (Google’s GenAI)**. Built with **Spring Boot**, **React**, and **Chrome Extension APIs**, it saves your time and boosts your productivity.

---

## 🧠 Problem

Writing email replies—especially professional or emotionally nuanced ones—can be time-consuming and mentally exhausting.

Most people struggle with:
- Picking the right tone for the situation  
- Responding quickly when swamped  
- Sounding polite, empathetic, or confident  
- Avoiding blank-page anxiety when replying

---

## 💡 Solution

**Smart Email Assistant** makes email replies effortless by letting AI do the writing for you — directly inside Gmail.

- 🧠 Understands the email context and crafts meaningful replies
- 🎨 Lets you select the tone (professional, friendly, casual, etc.)
- 📨 Adds an “AI Reply” button to your Gmail for instant use
- 🛠️ Built with a full-stack architecture (Spring Boot + React + Chrome Extension)

Just click the button → Get your reply → Tweak if needed → Send. Done!

---

## 🚀 What It Does

- 🧠 **AI-Powered Replies** using Gemini GenAI
- 📬 **Direct Gmail Integration** via a Chrome Extension
- ⚙️ **Full-Stack System**:
  - Spring Boot backend for AI request handling
  - React frontend for user input and tone selection
  - Chrome Extension for in-browser Gmail integration
- 🎨 **Supported Tones**:
  - Professional  
  - Friendly  
  - Casual  
  - Confident  
  - Apologetic  
  - Empathetic  
  - Persuasive  
  - Optimistic  
  - Urgent  
  - Natural  

---

## 📂 Project Structure
---

## 📂 Project Structure

```
Smart-Email-Assistant/
├── email-writer-ext/       # Chrome Extension (Gmail button + DOM injection)
│   ├── content.js
│   ├── content.css
│   └── manifest.json

├── email-writer-react/     # React Frontend (tone & prompt UI)
│   ├── src/
│   ├── index.html
│   └── vite.config.js

├── email-writer-sb/        # Spring Boot Backend (Gemini API integration)
│   ├── src/
│   ├── pom.xml
│   └── application.properties
```

---

## 🛠️ How to Run the Project

### 🔙 Backend (Spring Boot)

1. Open `email-writer-sb` in IntelliJ or Eclipse
2. Run `EmailWriterSbApplication.java`
3. API runs at: `http://localhost:8080`

---

### 🖥️ Frontend (React)

```bash
cd email-writer-react
npm install
npm run dev
```

Runs at: `http://localhost:5173`

---

### 🧩 Chrome Extension (Gmail Integration)

1. Go to Chrome: `chrome://extensions/`
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select the folder: `email-writer-ext/`
5. Open Gmail → You'll see the ✨ **"AI Reply"** button on each email

Click it → AI generates your reply → You review/send!

---

## 📡 Tech Stack

| Tech         | Role                                  |
|--------------|---------------------------------------|
| React (Vite) | Frontend UI for tone & input          |
| Spring Boot  | Backend API to handle AI generation   |
| Gemini GenAI | Powers smart, context-aware replies   |
| Chrome API   | Adds Gmail integration via extension  |


---

## 👤 Author

**Rajesh Kumar Jena**  
🔗 GitHub: [@Rajesh-1234567](https://github.com/Rajesh-1234567)

---

## 📄 License

MIT License

---

> 🚀 One click. Smart replies. Made for Gmail. Powered by Gemini.
```
