# HerHealthHub
HerHealthHub empowers women with personalized health insights, symptom-based disease prediction, expert health resources, and a supportive community. Built for accessibility and privacy, it combines technology and care to help women thrive at every stage of life.
Problem Statement
Young women, particularly students living away from home, often face challenges in accessing reliable health advice, understanding symptoms, and feeling emotionally supported. Fragmented resources and lack of personalized tools deepen these vulnerabilities.​

Objectives
Provide accessible information on common women’s health issues.

Enable personalized symptom prediction and advice using machine learning.

Foster a peer-support space for candid sharing and well-being.​

Ensure privacy and data security.​

Functional Requirements
User Management: Registration, login, and personal dashboard.​

Health Symptom Prediction: Users enter symptoms; platform predicts possible causes (using an ML model in Python).​

Community Sharing & Forums: Anonymized posting to share experiences or ask advice, moderated for safety.​

Resource Center: Curated health articles, self-care tips, and emergency contacts.​

Non-Functional Requirements
Performance: Fast prediction and page load times.​

Security: Secure storage of user data and privacy controls.​

Usability: Simple interface, accessible for beginners.​

Reliability: Robust error handling and uptime guarantees.​

Maintainability: Modular structure, Git version control.​

Logging and Monitoring: Track and resolve issues proactively.​

System Architecture
Front-end: HTML/CSS (simple UI), JavaScript for interactivity

Back-end: Python (Flask/Django), ML using scikit-learn

Database: SQLite or PostgreSQL for user and forum records

ML Model: Symptom prediction (multiclass classifier, trained on public datasets)

Modular workflow for easy extension.​

Diagrams
UML Use Case Diagram: User flows (registration, symptom check, forum post)

Component Diagram: Front-end, back-end, ML predictor, database.​

ER Diagram: User, Forum, Resource tables

Dataset & Model Selection
Use open datasets on women’s health (menstrual, stress, nutrition symptoms)

Model: Random Forest Classifier

Evaluate: Accuracy, F1 score on validation split.​

Implementation Details
Code modularized into minimum five meaningful files (user, symptom predictor, forum, resource loader, utility)

Folder structure documented in README.md
Innovative Aspects
Machine learning for health prediction in a student-friendly platform.​

Custom forum for candid peer support.

Security and privacy front-and-center for a sensitive topic.​

Future Enhancements
Expand symptom coverage and multilingual support.

Integrate telehealth links and expert Q&A sessions.​

This design strictly follows all the provided rules for originality, modular structure, documentation, and technical rigor.

Unit tests for ML predictor and input validation.

# 💖 HerHealthHub 🌸

**Empowering young women with personalized health insights, symptom prediction, and a supportive, private community.**

HerHealthHub combines technology and care to help women navigate their health confidently at every stage of life.

## 📝 Table of Contents
1.  [💡 Project Overview](#-project-overview)
2.  [✨ Features & Requirements](#-features--requirements)
3.  [🛠️ Technology Stack & Architecture](#️-technology-stack--architecture)
4.  [🚀 Getting Started](#-getting-started)
5.  [🧠 Machine Learning Component](#-machine-learning-component)
6.  [📈 Future Enhancements](#-future-enhancements)

---

## 💡 Project Overview

### Problem Statement
Young women, particularly students, often struggle with fragmented health resources, lack of accessible advice, and insufficient emotional support regarding common health issues. This vulnerability is deepened by a lack of personalized tools and privacy concerns.

### Our Mission
To provide an **accessible**, **private**, and **supportive** platform that uses basic technology to deliver reliable health information and tools, helping users understand their symptoms and connect with peers.

---

## ✨ Features & Requirements

### Functional Requirements

| Feature | Description | Status (Initial) |
| :--- | :--- | :--- |
| **User Management** | Secure registration, login, and personalized user dashboard. | Planned |
| **Health Symptom Prediction** | Users input symptoms, and the platform utilizes an ML model (in Python) to predict possible non-diagnostic causes or conditions. | In Progress (Core Feature) |
| **Community Sharing & Forums**| Anonymized posting feature to share experiences and seek peer advice. Moderation tools are essential for safety. | Planned |
| **Resource Center** | Curated health articles, self-care tips, and easily accessible emergency contact information. | Planned |

### Non-Functional Requirements

| Requirement | Category | Focus |
| :--- | :--- | :--- |
| **Security & Privacy** | Security | Secure data storage, strong privacy controls, and anonymization of forum data. |
| **Usability** | User Experience | Simple, intuitive, and accessible interface suitable for beginners (12th-grade level UI). |
| **Performance** | Performance | Fast prediction response and quick page load times. |
| **Maintainability** | Development | Modular structure, clean code, and utilization of Git for version control. |

---

## 🛠️ Technology Stack & Architecture

This project is built using a simple, modern architecture optimized for ease of use and development.

### Tech Stack
| Component | Technology | Reasoning |
| :--- | :--- | :--- |
| **Back-end Web Framework**| **Python** (Flask) | Lightweight, easy to set up, and excellent integration with ML libraries. |
| **Machine Learning** | **Python** (scikit-learn) | Industry-standard library for building the Random Forest Classifier. |
| **Database** | **SQLite** (or PostgreSQL) | SQLite is perfect for a local, contained project; easily scalable to PostgreSQL later. |
| **Front-end** | **HTML, CSS, JavaScript**| Basic, core web technologies for a simple, accessible user interface. |

### System Architecture Overview
The system follows a classic three-tier architecture:

1.  **Presentation Layer (Front-end):** Handles the user interface (HTML/CSS/JS) and sends requests to the back-end.
2.  **Application Layer (Back-end - Flask):** Manages user sessions, processes form data, connects to the database, and calls the ML predictor module.
3.  **Data Layer (Database/ML):** Stores user, forum, and resource records (SQLite). The ML Predictor module handles all symptom analysis logic.

### Design Documentation (Diagrams)
* **UML Use Case Diagram:** Visualizes user flows (Registration, Symptom Check, Forum Posting).
* **Component Diagram:** Maps the relationships between Front-end, Back-end (Flask), ML Predictor, and the Database.
* **ER Diagram:** Details the structure of the User, Forum, and Resource tables in the database.

---

## 🚀 Getting Started

Follow these steps to get a local copy of the project running on your machine.

### Prerequisites
You need **Python 3** installed on your system and `pip` for package management.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/gowriramesh61-svg/HerHealthHub.git](https://github.com/gowriramesh61-svg/HerHealthHub.git)
    cd HerHealthHub
    ```

2.  **Install dependencies:**
    ```bash
    pip install Flask scikit-learn pandas
    ```

3.  **Run the application:**
    ```bash
    python app.py
    ```

4.  **Access the site:**
    Open your web browser and navigate to `http://127.0.0.1:5000/`.

---

## 🧠 Machine Learning Component

The core innovation is the Symptom Prediction feature.

### Model Selection
* **Algorithm:** **Random Forest Classifier**.
* **Reasoning:** Robust, handles non-linear data well, and is less prone to overfitting than simpler models, providing reliable, non-critical advice.
* **Evaluation Metrics:** The model will be evaluated using **Accuracy** and **F1 score** on a validation dataset.

### Dataset
The model will be trained using **open-source public datasets** focused on women’s health, covering symptoms related to menstrual cycles, stress, and nutrition.

---

## 📈 Future Enhancements

These features are planned for future development to expand the platform's reach and utility.

* Expand symptom coverage and offer **multilingual support**.
* Integrate links for external services like **telehealth appointments**.
* Host scheduled, supervised **Expert Q&A sessions** (e.g., with student health professionals).
* Implement dedicated **Unit tests** for the ML predictor and input validation logic.
