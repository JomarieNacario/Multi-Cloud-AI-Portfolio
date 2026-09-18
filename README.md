# Cloud Engineering Portfolio & Serverless AI Hub

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google%20AI%20Studio-4285F4?style=for-the-badge&logo=google&logoColor=white)

A modern, highly responsive personal portfolio for **Jomarie Nacario**. This project is more than just a static site; it is a full-stack, event-driven web application designed to demonstrate cloud-native architecture, serverless integrations, and live AI API implementation.

## 🚀 Key Features

* **Serverless Visitor Counter:** A robust, atomic counter built with Amazon DynamoDB, AWS Lambda, and API Gateway to track profile views without race conditions.
* **Interactive AI Assistant:** A floating chat widget powered by Google AI Studio (Gemini). The frontend securely communicates with a serverless AWS backend to fetch context-aware answers about my professional experience and certifications.
* **Modern UI/UX:** Built with React and Vite for blazing-fast performance. Uses **Tailwind CSS** and **HeroUI** for a sleek, dark-themed (deep slate and teal), glassmorphic aesthetic with fluid animations.
* **Infrastructure as Code (IaC):** The entire AWS backend is provisioned and managed using **Terraform**, ensuring reproducible and scalable cloud environments.

## 🏗️ Architecture Overview

The application is split into a decoupled frontend and backend:

1. **Frontend:** React + Vite single-page application hosted on AWS Amplify (or S3/CloudFront).
2. **Backend (Serverless AI Proxy):** API Gateway routes chat requests to a Python Lambda function, which securely injects the Google AI Studio API key and communicates with the Gemini model.
3. **Backend (Visitor Counter):** API Gateway triggers a separate Lambda function that performs an `UpdateExpression` on a DynamoDB table to increment and retrieve the visitor count.

```mermaid
flowchart LR
    User([User / Browser]) --> Amplify[AWS Amplify<br>React Frontend]
    Amplify --> APIGW[Amazon API Gateway<br>HTTP API]
    
    subgraph AWS Backend
        APIGW -->|/views| CounterLambda[Lambda: Visitor Counter<br>Python 3.12]
        APIGW -->|/chat| AILambda[Lambda: AI Proxy<br>Python 3.12]
        CounterLambda --> DDB[(DynamoDB<br>Table)]
    end
    
    subgraph Google Cloud
        AILambda -->|Secure API Key| Gemini[Google AI Studio<br>Gemini API]
    end

## 🛠️ Technology Stack

* **Frontend:** React, Vite, Tailwind CSS, HeroUI, Framer Motion
* **Backend Compute:** AWS Lambda (Python 3.12)
* **API Management:** Amazon API Gateway (HTTP APIs)
* **Database:** Amazon DynamoDB (NoSQL)
* **AI / LLM:** Google AI Studio (Gemini API)
* **Infrastructure Provisioning:** Terraform

## 💻 Local Development Setup

### Prerequisites
* Node.js (v18+)
* Terraform (v1.5+)
* AWS CLI (configured with appropriate IAM permissions)
* A Google AI Studio API Key

### 1. Frontend Setup
```bash
# Clone the repository
git clone [https://github.com/JomarieNacario/Multi-Cloud-AI-Portfolio.git](https://github.com/JomarieNacario/Multi-Cloud-AI-Portfolio.git)
cd Multi-Cloud-AI-Portfolio/frontend

# Install dependencies
npm install

# Start the local Vite development server
npm run dev
