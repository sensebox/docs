# 🌐 senseBox:docs

This repository holds the official sensebox documentation

You can visit the live website here: [docs.sensebox.de](https://docs.sensebox.de)

This project is a static website built with [Docusaurus 3](https://docusaurus.io/), a modern framework optimized for building documentation websites. It provides easy setup, rapid local development, and seamless deployment options.

## 🚀 Getting Started

### ⚙️ Prerequisites

Before running the project, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/) (v14.17 or higher)

or

- [Yarn](https://yarnpkg.com/) (v1.22 or higher)

### 📦 Installation

Clone the repository and install the dependencies:

```bash
$ yarn
```

### 🖥️ Running the Project Locally

Start the development server:

```bash
$ yarn start
```

This will launch a local server and open the website in your default browser. Any changes you make will be automatically updated without restarting the server.

#### 🔍 Setting up Algolia

To enable search functionality, you will need an Algolia account:

1. Sign up for an account at [Algolia](https://www.algolia.com/).
2. Create an application within Algolia.
3. Once the application is created, generate an API key and other necessary credentials.
4. Create a `.env` file in your project root based on the `.env.sample` file format, and fill in your Algolia credentials.

### 🏗️ Building the Project

To generate a production-ready static version of your site:

```bash
$ yarn build
```

The static files will be placed in the `build` directory, which you can serve with any hosting platform that supports static content.

## 🛠️ Contributing

If you encounter any bugs or issues, feel free to open an issue in the [Issues tab](../../issues). Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## 📄 License

Feel free to use, modify, and distribute this project. See the [LICENSE](./LICENSE) file for more details.
