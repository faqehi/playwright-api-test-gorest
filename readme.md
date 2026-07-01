# Playwright API Automation Framework

A production-grade, highly scalable, and type-safe API automation framework built with **Playwright**, **TypeScript**, and **Faker**. This framework features an API Client Service architecture, strict data contracts, and environment-driven configurations.

---

## 🏗️ Framework Architecture

The directory layout adheres to a strict Separation of Concerns (SoC) principle, isolating the network layer, test data generation, and automation execution:

```text
├── src/
│   ├── api/
│   │   ├── clients/
│   │   │   └── user.client.ts       # Endpoint HTTP abstractions (SDK Layer)
│   │   └── models/
│   │       └── user.types.ts        # Strict TypeScript schemas & data contracts
│   ├── fixtures/
│   │   └── api.fixtures.ts          # Custom Playwright test isolation fixtures
│   └── utils/
│       ├── api.utils.ts             # Global data transformers & sanitization tools
│       └── user.generator.ts        # Dynamic test data generators (Faker Engine)
├── test-results/                    # Automated Playwright test run output logs
├── tests/
│   └── user.spec.ts                 # Test suites and contract assertions
├── playwright.config.ts             # Global environment matrix and header control
├── .env.example                     # Environment configuration blueprint
├── setup.cmd / setup.sh             # One-click framework initialization scripts
└── run-tests.cmd / run-tests.sh     # Interactive target environment execution wrappers
```

---

## ⚡ Quick Start (Cross-Platform)

This framework supports automated configuration wrappers for **Windows**, **macOS**, and **Linux** environments.

### 1. Download the Project
Choose **one** of the following methods to bring the code to your local machine:

* **Method A: Clone via Git (Recommended)**
  Open your terminal and run:
  ```bash
  git clone https://github.com/faqehi/playwright-api-test-gorest.git
  cd playwright-api-test-gorest
  ```
* **Method B: Download as ZIP**
  1. Click the green **Code** button at the top right of this 
  2. Select **Download ZIP**.
  3. Extract the ZIP archive onto your computer and open that folder in your code editor (e.g., VS Code).

### 2. Project Initialization
Execute the setup script matching your operating system. This automatically installs all Node dependencies and required Playwright system browser binaries:

* **Windows (Double-click or run via CMD):**
  ```cmd
  setup.cmd
  ```
* **macOS / Linux:**
  ```bash
  ./setup.sh
  ```

### 3. Environment Configuration
Duplicate the `.env.example` file, name it `.env` at the root directory, and insert your confidential GoRest access token:
```
GOREST_TOKEN=your_secure_bearer_token_here
```
*(Note: The `.env` file is excluded from source control via `.gitignore` to prevent credential exposure).*

### 4. Executing Tests Interactively
Launch the execution wrapper to select your target environment (**Test**, **UAT**, or **Live**). The underlying framework maps endpoints dynamically and provisions necessary execution states:

* **Windows:**
  ```cmd
  run-tests.cmd
  ```
* **macOS / Linux:**
  ```bash
  ./run-tests.sh
  ```

---

## 🛠️ Developer & CI/CD Command Line Interface

For automated pipelines (e.g., GitHub Actions, Jenkins) or advanced CLI execution, leverage standard node package runtime targets:

| Command | Action |
| :--- | :--- |
| `npm run setup` | Installs dependencies and Playwright platform packages |
| `npm run test` | Executes the entire automated test suite |
| `npm run report` | Boots the interactive HTML report engine |

### Environment Swapping via CLI
You can control the runtime target by overriding the `ENV` string variable directly in the shell terminal context:
```bash
ENV=uat npm run test
```

---

## 💎 Implementation Highlights

* **Custom Playwright Fixtures**: Rather than polluting spec files with raw constructor instantiations or boilerplate dataset arrangements, dependencies (`userClient` and `randomUser`) are lazily evaluated and injected as atomic hooks.
* **Type-Safe Dynamic Serialization**: API responses are cleanly extracted and typed against robust TypeScript models (`UserResponse`). Contract validation checks occur natively at compile-time.
* **Defensive Error Handling**: Network data is treated as `Record<string, any>[]` until sanitized via serialization hooks (`lowercaseKeys`), mitigating structural regression and brittle payload runtime crashes.